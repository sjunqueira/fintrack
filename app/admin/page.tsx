import { SessionProvider } from "next-auth/react";
import Dashboard from "../_dashboard/page";

export default function Administrator() {
  return (
    <SessionProvider>
      <Dashboard />
    </SessionProvider>
  );
}
