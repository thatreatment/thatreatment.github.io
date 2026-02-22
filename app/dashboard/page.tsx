import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyInvestorToken } from "@/lib/auth";
import InvestorDashboard from "@/components/InvestorDashboard";

export default function Dashboard() {
  const token = cookies().get("investor_token")?.value;
  const payload = verifyInvestorToken(token);

  if (!payload) {
    redirect("/login");
  }

  return <InvestorDashboard />;
}
