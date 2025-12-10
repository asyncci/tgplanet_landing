// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { sendTelegramMessage } from "@/lib/telegram";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, contact, comment } = body;

    if (!name || !contact) {
      return NextResponse.json(
        { error: "Имя и контакт обязательны" },
        { status: 400 }
      );
    }

    // Формируем красивое сообщение в Telegram
    const text = `
Новая заявка с сайта! 

Имя: ${name}
Контакт: ${contact}
${comment ? `Комментарий: ${comment}` : "Комментарий: —"}
    `.trim();

    await sendTelegramMessage(text);

    return NextResponse.json(
      { message: "Заявка отправлена! Скоро свяжемся!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка отправки заявки:", error);
    return NextResponse.json(
      { error: "Не удалось отправить заявку" },
      { status: 500 }
    );
  }
}