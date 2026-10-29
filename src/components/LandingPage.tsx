"use client";

import { useLocale, useTranslations } from "next-intl";
import { ArrowDownRight, ArrowUpRight, Plus } from "lucide-react";
import { siteData } from "@/data/siteData";
import MotionView from "./MotionView";

type Locale = "uz" | "ru" | "en";

function SectionHeading({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <MotionView className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-3xl">
        <p className="mb-5 text-[10px] font-bold uppercase tracking-[0.24em] text-[#ccff00]">
          {number}
        </p>
        <h2 className="text-4xl font-black uppercase leading-[0.9] tracking-[-0.06em] sm:text-6xl md:text-7xl">
          {title}
        </h2>
      </div>
      <p className="max-w-sm border-l border-[#ccff00] pl-4 text-sm leading-6 text-neutral-400 md:text-base">
        {description}
      </p>
    </MotionView>
  );
}

export default function LandingPage() {
  const locale = useLocale() as Locale;
  const t = useTranslations();

  return (
    <div className="overflow-hidden">
      <section id="tech" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 md:py-32 lg:px-8">
        <SectionHeading
          number={t("tech.sectionNum")}
          title={t("tech.title")}
          description={t("tech.subtitle")}
        />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.equipment.map((item, index) => (
            <MotionView key={item.id} delay={index * 0.045}>
              <article className="group h-full overflow-hidden rounded-xl border border-neutral-800 bg-[#111] transition-colors duration-300 hover:border-[#ccff00]/50">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover opacity-70 transition duration-[1200ms] ease-out group-hover:scale-105 group-hover:opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-black/55 px-3 py-1 text-[9px] font-bold uppercase tracking-widest text-[#ccff00] backdrop-blur">
                    {item.badge}
                  </span>
                  <span className="absolute bottom-4 right-4 font-mono text-xs text-white/60">
                    0{index + 1}
                  </span>
                </div>
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-neutral-500">
                    {item.brand} / {item.model}
                  </p>
                  <h3 className="min-h-12 text-lg font-extrabold leading-tight">{item.title}</h3>
                  <div className="mt-5 border-t border-neutral-800 pt-3">
                    {Object.entries(item.specs).slice(0, 2).map(([label, value]) => (
                      <div key={label} className="flex justify-between gap-3 py-1.5 text-[10px]">
                        <span className="text-neutral-500">{label}</span>
                        <span className="text-right text-neutral-300">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            </MotionView>
          ))}
        </div>
      </section>

      <section id="portfolio" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          number={t("portfolio.sectionNum")}
          title={t("portfolio.title")}
          description={t("portfolio.subtitle")}
        />
        <div className="grid auto-rows-[190px] grid-cols-2 gap-3 md:auto-rows-[230px] md:grid-cols-4">
          {siteData.portfolio.map((item, index) => (
            <MotionView
              key={item.id}
              delay={index * 0.06}
              className={`group relative overflow-hidden rounded-xl bg-neutral-900 ${
                index === 0 || index === 4 ? "col-span-2" : ""
              } ${item.span}`}
            >
              <img
                src={item.image}
                alt={item.title[locale]}
                loading="lazy"
                className="h-full w-full object-cover opacity-75 transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/10 transition-colors duration-500 group-hover:bg-black/50" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.2em] text-[#ccff00]">
                  {item.category[locale]} / {item.year}
                </p>
                <h3 className="max-w-md text-xl font-black uppercase leading-tight sm:text-2xl">
                  {item.title[locale]}
                </h3>
                <p className="mt-2 text-xs text-white/60">{item.location[locale]}</p>
              </div>
              <span className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/25 bg-black/20 text-white opacity-0 transition-opacity group-hover:opacity-100">
                <ArrowUpRight size={16} />
              </span>
            </MotionView>
          ))}
        </div>
      </section>

      <section id="workflow" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          number={t("workflow.sectionNum")}
          title={t("workflow.title")}
          description={t("workflow.subtitle")}
        />
        <div className="grid border-l border-t border-neutral-800 sm:grid-cols-2 lg:grid-cols-4">
          {siteData.workflow.map((step, index) => (
            <MotionView key={step.number} delay={index * 0.08}>
              <article className="flex min-h-64 flex-col border-b border-r border-neutral-800 p-6 md:p-8">
                <span className="mb-12 font-mono text-sm text-[#ccff00]">{step.number}</span>
                <h3 className="mb-4 text-xl font-black uppercase leading-tight">
                  {step.title[locale]}
                </h3>
                <p className="mt-auto text-sm leading-6 text-neutral-500">
                  {step.description[locale]}
                </p>
              </article>
            </MotionView>
          ))}
        </div>
      </section>

      <section id="faq" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 md:py-28 lg:px-8">
        <SectionHeading
          number={t("faq.sectionNum")}
          title={t("faq.title")}
          description={t("faq.subtitle")}
        />
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          <MotionView>
            <p className="max-w-md text-3xl font-black uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {t("footer.manifesto").split("|").map((line, index) => (
                <span
                  key={line}
                  className={`block ${index === 2 ? "text-[#ccff00]" : ""}`}
                >
                  {line}
                </span>
              ))}
            </p>
            <a
              href="#contacts"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#ccff00] px-6 py-3 text-xs font-black uppercase tracking-wider text-black transition hover:bg-[#b8e600]"
            >
              {t("nav.orderBtn")} <ArrowDownRight size={16} />
            </a>
          </MotionView>
          <div className="divide-y divide-neutral-800 border-y border-neutral-800">
            {siteData.faq.map((item, index) => (
              <MotionView key={item.question[locale]} delay={index * 0.05}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer items-start justify-between gap-6 text-base font-bold sm:text-lg">
                    <span>{item.question[locale]}</span>
                    <Plus className="mt-0.5 shrink-0 text-[#ccff00] transition-transform group-open:rotate-45" />
                  </summary>
                  <p className="max-w-2xl pt-4 pr-8 text-sm leading-6 text-neutral-400">
                    {item.answer[locale]}
                  </p>
                </details>
              </MotionView>
            ))}
          </div>
        </div>
      </section>

      <footer id="contacts" className="border-t border-neutral-800 bg-[#080808]">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-8">
          <MotionView>
            <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.25em] text-[#ccff00]">
              {t("footer.ctaTitle")}
            </p>
            <div className="mb-16 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
              <h2 className="max-w-5xl text-[clamp(3.5rem,12vw,10rem)] font-black uppercase leading-[0.76] tracking-[-0.08em]">
                {siteData.company.name.split(" ").map((word) => (
                  <span key={word} className="mr-[0.14em] inline-block">
                    {word}
                  </span>
                ))}
              </h2>
              <p className="max-w-sm text-sm leading-6 text-neutral-400">{t("footer.ctaDesc")}</p>
            </div>
          </MotionView>

          <div className="grid gap-8 border-t border-neutral-800 py-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {t("footer.phoneTitle")}
              </p>
              <a className="block text-lg font-bold hover:text-[#ccff00]" href={`tel:${siteData.company.phone}`}>
                {siteData.company.phone}
              </a>
              <a className="mt-1 block text-sm text-neutral-400 hover:text-white" href={`mailto:${siteData.company.email}`}>
                {siteData.company.email}
              </a>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {t("footer.addressTitle")}
              </p>
              <p className="max-w-xs text-sm leading-6 text-neutral-300">
                {siteData.company.address[locale]}
              </p>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {t("footer.socialsTitle")}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {siteData.company.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-neutral-300 hover:text-[#ccff00]"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
            <div>
              <p className="mb-3 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {t("footer.serviceTitle")}
              </p>
              <p className="text-sm text-neutral-300">{siteData.company.workingHours[locale]}</p>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-neutral-800 pt-5 text-[10px] uppercase tracking-wider text-neutral-600 sm:flex-row">
            <span>© {new Date().getFullYear()} {siteData.company.name}</span>
            <span>{t("footer.rights")}</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
