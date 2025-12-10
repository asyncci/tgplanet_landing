// lib/telegram.ts

// Получи эти данные у @BotFather и в чате с ботом
const TELEGRAM_BOT_TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN!;
const TELEGRAM_CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID!; // твой личный чат ID или ID группы

export async function sendTelegramMessage(message: string) {
  const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;

  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      chat_id: TELEGRAM_CHAT_ID,
      text: message,
      parse_mode: "HTML",
    }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(`Telegram API error: ${JSON.stringify(error)}`);
  }

  return response.json();
}
