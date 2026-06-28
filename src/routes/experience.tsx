import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/experience")({
  beforeLoad: () => {
    throw redirect({ to: "/about", hash: "experience" });
  },
});
