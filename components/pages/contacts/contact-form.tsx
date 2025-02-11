"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSuccess(result.message);
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError("Terjadi kesalahan, coba lagi nanti.");
    }

    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} action="" className="flex flex-col gap-3">
        <div className="flex flex-col sm:flex-row gap-3">
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className="rounded-none"
          />
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Email"
            className="rounded-none"
          />
        </div>
        <Textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          placeholder="Message"
          className="rounded-none"
        />
        <Button className="border rounded-none bg-opacity-40 bg-gradient-to-br p-4  border-slate-300 from-slate-100 to-slate-200 dark:border-slate-600 dark:from-slate-900 dark:to-slate-950 shadow-none text-foreground">
          {loading ? "Sending..." : "Send Email"}
        </Button>
        {success && <p className="mt-2 text-green-500">{success}</p>}
        {error && <p className="mt-2 text-red-500">{error}</p>}
      </form>
    </>
  );
};

export default ContactForm;
