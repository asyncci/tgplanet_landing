// app/page.tsx (или любой другой файл страницы)
import ContactButtons from "@/lib/react-objects/contact-buttons";
import ContactForm from "@/lib/react-objects/form";

export default function HomePage() {
  return (
    <div className="relative w-full flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative @container">
        <div className="@[480px]:p-4">
          <div
            className="flex min-h-[480px] flex-col gap-6 bg-cover bg-center bg-no-repeat @[480px]:gap-8 @[480px]:rounded-lg items-start justify-end px-4 pb-10 @[480px]:px-10"
            style={{
              backgroundImage: `linear-gradient(rgba(16, 24, 34, 0.4) 0%, rgba(16, 24, 34, 0.8) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuDTcuQppTxgdUtzMEtzkRgsrJKnAzb153VZ42E1wJG-FRhH0KFbf9LkDxhHqEBUiy1xmo7CYiTJnopZ2HOc1YyNlKrebuBdpgEcFXz4eC43ts0MJaUg9d30RlaWm6mjXe1DohXKP2T7rgehL4yl_gSgQ8ZUlKGBP2cEyETC01mbMDeN5DocEz1_dPtL74PFhGo_rnqoM9Q4ZMn2RRqoMHyB9U6QXCeIz72Pk8I6vVIE3NCwxrIZzzOUOXGcQoAJVDZ3a4kMWJtvCpg")`,
            }}
          >
            <div className="flex flex-col gap-2 text-left">
              <h1 className="text-white text-4xl font-black leading-tight tracking-[-0.033em] @[480px]:text-5xl">
                Разработка Telegram-ботов под ключ
              </h1>
              <p className="text-slate-300 text-sm font-normal leading-normal @[480px]:text-base">
                Автоматизируйте рутину, увеличьте продажи и улучшите поддержку клиентов с помощью умных ботов.
              </p>
            </div>
            <a
              href="#contact-form"
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 @[480px]:h-12 @[480px]:px-5 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] @[480px]:text-base w-full sm:w-auto"
            >
              <span className="truncate">Получить бесплатную консультацию</span>
            </a>

            <ContactButtons />

          </div>
        </div>
      </section>

      {/* Why You Need a Bot */}
      <section className="flex flex-col gap-10 px-4 py-10 @container">
        <div className="flex flex-col gap-4">
          <h2 className="text-slate-900 dark:text-white text-[32px] font-bold leading-tight @[480px]:text-4xl max-w-[720px]">
            Почему вашему бизнесу нужен Telegram-бот?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base font-normal leading-normal max-w-[720px]">
            Боты работают 24/7, мгновенно отвечают клиентам и помогают вам сосредоточиться на самом важном — развитии бизнеса.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {[
            {
              icon: "smart_toy",
              title: "Автоматизация 24/7",
              desc: "Бот берет на себя рутинные задачи, от ответов на частые вопросы до приема заказов.",
            },
            {
              icon: "trending_up",
              title: "Рост продаж",
              desc: "Прогревайте лидов, проводите их по воронке продаж и принимайте оплату прямо в Telegram.",
            },
            {
              icon: "headset_mic",
              title: "Поддержка клиентов",
              desc: "Обеспечьте мгновенную поддержку вашим клиентам в любое время дня и ночи.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-1 gap-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50 p-4 flex-col"
            >
              <span className="material-symbols-outlined text-primary text-3xl">{item.icon}</span>
              <div className="flex flex-col gap-1">
                <h3 className="text-slate-900 dark:text-white text-base font-bold leading-tight">{item.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Carousel */}
      <section>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Примеры наших работ
        </h2>

        <div className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide gap-3 p-4">
          {[
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAt3Q1ifeK0YIrIhI5GVttpNL1DD-M-ie9dCTOdzIXsSDTg63Q2Gw7Kg-5h2d8O7pBpKEBV0J9lbtbuXN2KXhXkM0uQhRNDsa1npcg2XWHT6R__Rx9mwoD8wS0fLSm-wgzeoPCNbdIqOm_pYNltMVeLpVx_ZHsRNf_ee3_r66MgC7aOciIB7XpqO2PxKCwjc0q35Vj9Z4NPcfql97GGWP26mC3YDyAfi2vxBcBVhSsX25HW2Gb-PXu53TlktzE-LrNH2lr79dJ-p80",
              title: "Бот для интернет-магазина",
              desc: "Автоматизировал прием заказов и консультировал по товарам, увеличив конверсию на 15%.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAkpemf_bXDebqWiZ7ARZXwXYmJiS5bENhUsLvPHYtL6n3xDEMwwJaXI7l2KYMVTkHMmVkIH2pFSFddf80E4PenuT1_TPTBAV_MrFi64S9P0gTGNzrHcb9k_FVWR2kCzrJSf5pQ9O8fXdUtzYz-D_SkAP2YkTDDsa9tkXyO0U2oKRjDZAG2XQ9PKj3vB96LnFRvIsoKcFu2kLSW0LSeTQnbRhVxllZ37gCnf1OPAvORaSCrRCUrYYjmqBOj59yT1R1wBgNUa0kirgE",
              title: "Бот для агентства недвижимости",
              desc: "Подбирал объекты по параметрам клиента и записывал на просмотры, сократив нагрузку на менеджеров.",
            },
            {
              img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCgq5DYYkiff7zVlBb_0ekRWd8YWHTJcYkfGLpjjpN78FeMCaROtWadYL3_pJK_j_-Jr4xRgrT092KVwejyPZxJ9Kl-q73DfPOoWgoUvVCzIMaNSaoRBKcco5m40KbuDl6baytqft6TM5sxS0MoDt-cyE010SGkIgQRTl1_xV1y945CnNkkmqc0LgnSt3nCfaGWJ4cL1fAkJwNnk4ebEiDVcCtXACS7cd-4q2MFAjjeGQgKGCz8SPmfySCDdMwlJ7B3D-QvyngttL0",
              title: "Бот для онлайн-школы",
              desc: "Регистрировал на вебинары, рассылал учебные материалы и принимал оплату курсов.",
            },
          ].map((project) => (
            <div
              key={project.title}
              className="flex-shrink-0 w-80 snap-center flex h-full flex-col gap-4 rounded-xl bg-white dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 shadow-sm min-w-60"
            >
              <div
                className="w-full bg-center bg-no-repeat aspect-video bg-cover rounded-t-xl"
                style={{ backgroundImage: `url(${project.img})` }}
              />
              <div className="flex flex-col flex-1 justify-between p-4 pt-0 gap-4">
                <div>
                  <p className="text-slate-900 dark:text-white text-base font-medium leading-normal">{project.title}</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm font-normal leading-normal">{project.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How We Work */}
      <section>
        <h2 className="text-slate-900 dark:text-white text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">
          Как мы работаем
        </h2>

        <div className="px-4 pb-10 space-y-4">
          {[
            { step: 1, title: "Анализ и стратегия", desc: "Обсуждаем ваши цели, анализируем бизнес-процессы и разрабатываем техническое задание." },
            { step: 2, title: "Разработка и тестирование", desc: "Создаем бота согласно ТЗ, проводим тщательное тестирование всех функций." },
            { step: 3, title: "Запуск и поддержка", desc: "Запускаем бота в работу, обучаем вас и оказываем техническую поддержку." },
          ].map((item) => (
            <div
              key={item.step}
              className="flex items-start gap-4 p-4 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900/50"
            >
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/20 text-primary font-bold">
                {item.step}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 dark:text-white">{item.title}</h3>
                <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="bg-slate-100 dark:bg-slate-900/70 p-4 sm:p-6 md:p-8">
        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          <div className="text-center">
            <h2 className="text-slate-900 dark:text-white text-2xl font-bold leading-tight tracking-[-0.015em]">
              Готовы начать?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mt-1">
              Оставьте заявку, и мы свяжемся с вами для бесплатной консультации и расчета стоимости вашего проекта.
            </p>
          </div>

          <ContactForm />
        </div>
      </section>
    </div>
  );
}