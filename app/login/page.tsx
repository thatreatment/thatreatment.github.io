"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("Invalid password. Try again.");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("Invalid password. Try again.");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        let message = "Invalid password. Try again.";
        try {
          const payload = (await res.json()) as { error?: string };
          if (typeof payload?.error === "string" && payload.error.length > 0) {
            message = payload.error;
          }
        } catch {
          message = "Login failed. Please try again.";
        }

        setErrorMessage(message);
        throw new Error(message);
      }

      router.push("/dashboard");
      setStatus("idle");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <div className="glass-panel rounded-3xl p-10 w-full max-w-md">
        <p className="text-xs tracking-[0.4em] uppercase text-gray-400">Investor Login</p>
        <h1 className="text-2xl font-semibold mt-4">Access the dashboard</h1>
        <p className="text-gray-400 mt-3 text-sm">
          Enter the investor password provided by Goldun.
        </p>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="bg-[#1F2933] rounded-xl px-4 py-3 text-sm w-full"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-[#E6C46A] text-[#0B0F14] font-semibold py-3 rounded-xl"
          >
            {status === "loading" ? "Checking..." : "Enter"}
          </button>
          {status === "error" && (
            <p className="text-sm text-red-400">{errorMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
