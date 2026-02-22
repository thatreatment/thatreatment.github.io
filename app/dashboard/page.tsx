import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { verifyInvestorToken } from "@/lib/auth";

export default function Dashboard() {
  const token = cookies().get("investor_token")?.value;
  const payload = verifyInvestorToken(token);

  if (!payload) {
    redirect("/login");
  }

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-panel rounded-3xl p-10 max-w-xl text-center">
        <h1 className="text-3xl text-[#E6C46A] font-bold">Investor Dashboard</h1>
        <p className="mt-4 text-gray-400">
          Private performance metrics and capital allocation tools will appear here.
        </p>
      </div>
    </div>
  );
}
