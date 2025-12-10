// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css"; // твои глобальные стили + Tailwind

export const metadata: Metadata = {
  title: "Разработка Telegram-ботов",
  description: "Автоматизация бизнеса через Telegram-боты. Мы создаем телеграм решения для любого бизнеса. Быстро и в срок.",
  // openGraph: {
  //   title: "Разработка Telegram-ботов",
  //     description: "Автоматизация бизнеса через Telegram-боты. Мы создаем телеграм решения для любого бизнеса. Быстро и в срок.",
  //     url: "https://yourdomain.com",
  //   images: ["/og-image.png"],
  // },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className="dark">
      <head>
        {/* 1. Manrope (основной шрифт) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700;800;900&display=swap"
          rel="stylesheet"
        />

        {/* 2. Material Symbols Outlined (иконки) */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="font-display bg-background-light dark:bg-background-dark min-h-screen">
        {children}
      </body>
    </html>
  );
}