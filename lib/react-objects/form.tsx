'use client';

import { useState, useRef } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    // Берём данные через FormData — это 100% надёжно
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name")?.toString().trim() || "",
      contact: formData.get("contact")?.toString().trim() || "",
      comment: formData.get("comment")?.toString().trim() || "",
    };

    // Валидация
    if (!data.name || !data.contact) {
      setStatus("error");
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const json = await res.json();

      if (res.ok) {
        setStatus("success");
        formRef.current?.reset(); // ← теперь точно не null
      } else {
        throw new Error(json.error || "Ошибка сервера");
      }
    } catch (err) {
      console.error("Ошибка отправки:", err);
      setStatus("error");
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
      <input
        name="name"
        placeholder="Ваше имя"
        required
        className="w-full h-12 px-4 rounded-lg bg-white dark:bg-background-dark border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
      />
      <input
        name="contact"
        placeholder="Телефон или Telegram"
        required
        className="w-full h-12 px-4 rounded-lg bg-white dark:bg-background-dark border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
      />
      <textarea
        name="comment"
        placeholder="Кратко опишите вашу задачу (необязательно)"
        rows={3}
        className="w-full p-4 rounded-lg bg-white dark:bg-background-dark border border-slate-300 dark:border-slate-700 focus:ring-2 focus:ring-primary focus:border-primary outline-none transition resize-none"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="rounded-lg h-12 px-5 bg-primary text-white text-base font-bold tracking-[0.015em] w-full hover:bg-blue-700 disabled:opacity-70 disabled:cursor-not-allowed transition"
      >
        {status === "loading" ? "Отправляем..." : "Отправить заявку"}
      </button>

      {status === "success" && (
        <p className="text-center text-green-600 font-medium animate-fade-in">
          Спасибо! Заявка отправлена — скоро свяжемся с вами
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-red-600 font-medium">
          Ошибка отправки. Попробуйте позже или напишите в Telegram.
        </p>
      )}
    </form>
  );
}