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

export type MessageTemplateRow = {
  id: string;
  label: string;
  message: string;
  sort_order: number;
  created_at: string;
};

// Custom messages the user opts to save from the WhatsApp messenger, so they
// keep showing up in the template list for future use instead of being
// typed once and lost.
export function useMessageTemplates() {
  return useQuery({
    queryKey: ["crm-message-templates"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("crm_message_templates")
        .select("*")
        .order("sort_order", { ascending: true });
      if (error) throw error;
      return (data ?? []) as MessageTemplateRow[];
    },
  });
}

export function useSaveMessageTemplate() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (input: { label: string; message: string; sort_order: number }) => {
      const { data, error } = await supabase
        .from("crm_message_templates")
        .insert(input)
        .select("*")
        .single();
      if (error) throw error;
      return data as MessageTemplateRow;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["crm-message-templates"] }),
  });
}

export function useDeleteMessageTemplate() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from("crm_message_templates").delete().eq("id", id);
      if (error) throw error;
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: ["crm-message-templates"] }),
  });
}
