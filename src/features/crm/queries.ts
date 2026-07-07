import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import type { Client } from "./types";

// Shared across ClientsList/WhatsAppMessenger/CrmStats so switching CRM tabs
// reuses one cached fetch instead of re-querying `clients` from scratch each
// time, and so query errors surface instead of being silently swallowed.
export function useClients() {
  return useQuery({
    queryKey: ["crm-clients"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("clients")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;
      return (data ?? []) as Client[];
    },
  });
}

export function useDeleteClient() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("clients").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["crm-clients"] }),
  });
}

export function useWhatsAppMessageCount() {
  return useQuery({
    queryKey: ["crm-whatsapp-count"],
    queryFn: async () => {
      const { count, error } = await supabase
        .from("whatsapp_log")
        .select("id", { count: "exact", head: true });
      if (error) throw error;
      return count ?? 0;
    },
  });
}

export type WhatsAppLogEntry = {
  id: string;
  sent_at: string;
  clients: { full_name: string } | null;
};

export function useRecentWhatsAppLog() {
  return useQuery({
    queryKey: ["crm-whatsapp-log"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("whatsapp_log")
        .select("id, sent_at, clients(full_name)")
        .order("sent_at", { ascending: false })
        .limit(5);
      if (error) throw error;
      return (data ?? []) as unknown as WhatsAppLogEntry[];
    },
  });
}

export function useLogWhatsAppMessages() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (logs: { client_id: string; message: string; message_type: string }[]) => {
      if (!logs.length) return;
      const { error } = await supabase.from("whatsapp_log").insert(logs);
      if (error) throw error;
    },
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["crm-whatsapp-log"] });
      qc.invalidateQueries({ queryKey: ["crm-whatsapp-count"] });
    },
  });
}
