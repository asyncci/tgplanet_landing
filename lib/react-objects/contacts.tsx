'use client';

import ContactButtons from "./contact-buttons";

export default function ContactLinks() {

  return (
    <div className="flex flex-col items-center gap-8 py-12 px-4">
      {/* Заголовок */}
      <div className="text-center max-w-2xl">
        <h2 className="text-3xl @[480px]:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Готовы обсудить ваш проект?
        </h2>
        <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
          Напишите мне в удобный мессенджер — отвечу в течение 5 минут
        </p>
      </div>

      {/* Кнопки */}
      <ContactButtons/>

      {/* Дополнительно: мелкий текст */}
      <p className="text-sm text-slate-500 dark:text-slate-400">
        Обычно отвечаю в течение 1–5 минут (с 9:00 до 22:00 МСК)
      </p>
    </div>
  );
}