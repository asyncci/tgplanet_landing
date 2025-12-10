import Image from "next/image";
import WhatsAppIcon from "@/lib/svg/whatsapp-svgrepo-com.svg";
import TelegramIcon from "@/lib/svg/telegram-svgrepo-com.svg";


export default function ContactButtons() {
    // Замени на свои контакты
    const telegram = "t.me/asyncci";        // например: t.me/alex_dev
    const whatsapp = "https://wa.me/996552110452"; // номер в международном формате БЕЗ +

    return (<div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
        {/* Telegram */}
        <a
            href={`https://${telegram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 rounded-xl bg-[#229ED9] hover:bg-[#1d8cc2] text-white font-bold text-sm h-14 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
            <Image src={TelegramIcon} alt="telegram" width={40} height={40} />
            <span className="group-hover:translate-x-1 transition-transform">
                Написать в Telegram
            </span>
        </a>

        {/* WhatsApp */}
        <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-4 rounded-xl bg-[#25D366] hover:bg-[#1da851] text-white font-bold text-sm h-14 px-8 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
        >
            <Image src={WhatsAppIcon} alt="whatsapp" width={40} height={40} />
            <span className="group-hover:translate-x-1 transition-transform">
                Написать в WhatsApp
            </span>
        </a>
    </div>
    )
}