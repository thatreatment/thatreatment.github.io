"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", firm: "", role: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error("Request failed");
      }

      setForm({ name: "", email: "", firm: "", role: "", message: "" });
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <div className="glass-panel rounded-3xl p-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.4em] uppercase text-gray-400">Investor Contact</p>
          <h3 className="text-2xl font-semibold mt-3">Request an institutional briefing.</h3>
        </div>
        <p className="text-gray-400 max-w-sm">
          Provide your details and our team will follow up with allocation materials.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4 mt-8">
        <input
          className="bg-[#1F2933] rounded-xl px-4 py-3 text-sm"
          placeholder="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="bg-[#1F2933] rounded-xl px-4 py-3 text-sm"
          placeholder="Email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <input
          className="bg-[#1F2933] rounded-xl px-4 py-3 text-sm"
          placeholder="Firm"
          name="firm"
          value={form.firm}
          onChange={handleChange}
        />
        <input
          className="bg-[#1F2933] rounded-xl px-4 py-3 text-sm"
          placeholder="Role"
          name="role"
          value={form.role}
          onChange={handleChange}
        />
        <textarea
          className="bg-[#1F2933] rounded-xl px-4 py-3 text-sm md:col-span-2"
          placeholder="How can we help?"
          name="message"
          rows={4}
          value={form.message}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="md:col-span-2 bg-[#E6C46A] text-[#0B0F14] font-semibold py-3 rounded-xl"
          disabled={status === "sending"}
        >
          {status === "sending" ? "Sending..." : "Submit Request"}
        </button>
        {status === "success" && (
          <p className="md:col-span-2 text-sm text-[#E6C46A]">Thanks. We will be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="md:col-span-2 text-sm text-red-400">Something went wrong. Try again.</p>
        )}
      </form>
    </div>
  );
}
