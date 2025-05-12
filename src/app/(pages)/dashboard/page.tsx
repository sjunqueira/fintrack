import { SessionProvider } from "next-auth/react";
import Dashboard from "../../_dashboard/page";
import Header from "../../_components/header";

export default function Administrator() {
  return (
    <SessionProvider>
      <Header />
      <Dashboard />
    </SessionProvider>
  );
}
