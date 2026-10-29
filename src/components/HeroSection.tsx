'use client';

import { useTranslations, useLocale } from 'next-intl';
import { siteData } from '@/data/siteData';
import MotionView from './MotionView';
import { ArrowUpRight, Sparkles, Volume2, ShieldCheck, Zap } from 'lucide-react';

export default function HeroSection() {
  const t = useTranslations('hero');
  const locale = useLocale() as 'uz' | 'ru' | 'en';

  const titleText = siteData.hero.title[locale] || siteData.hero.title.uz;
  const subtitleText = siteData.hero.subtitle[locale] || siteData.hero.subtitle.uz;

  return (
    <section className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-black">
      
      {/* Background Video with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={siteData.hero.videoPoster}
          className="w-full h-full object-cover scale-105 opacity-35 filter brightness-75 contrast-125"
        >
          <source src={siteData.hero.videoUrl} type="video/webm" />
        </video>
        {/* Radial and Linear Gradient Overlays for high-contrast typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/60 to-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-[#0a0a0a]/70" />
        
        {/* Subtle Neon Glow effect in the background */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#ccff00]/10 rounded-full blur-[140px] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto w-full">
        
        {/* Badge */}
        <MotionView delay={0.1}>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-700/80 backdrop-blur-md mb-6">
            <span className="w-2 h-2 rounded-full bg-[#ccff00] animate-pulse" />
            <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#ccff00]">
              {t('badge')}
            </span>
            <Sparkles className="w-3.5 h-3.5 text-[#ccff00]" />
          </div>
        </MotionView>

        {/* Huge Bold Title */}
        <MotionView delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-[90px] font-black tracking-tight text-white uppercase leading-[0.92] max-w-6xl mb-8">
            {titleText.split(' ').map((word, index) => {
              const isHighlight =
                word.toLowerCase().includes('pro') ||
                word.toLowerCase().includes('top') ||
                word.toLowerCase().includes('baland') ||
                word.toLowerCase().includes('мощный') ||
                word.toLowerCase().includes('loud');
              return (
                <span key={index} className="inline-block mr-[0.22em]">
                  {isHighlight ? (
                    <span className="text-[#ccff00] relative drop-shadow-[0_0_25px_rgba(204,255,0,0.35)]">
                      {word}
                    </span>
                  ) : (
                    word
                  )}
                </span>
              );
            })}
          </h1>
        </MotionView>

        {/* Subtitle */}
        <MotionView delay={0.3}>
          <p className="text-base sm:text-lg md:text-xl text-neutral-300 max-w-2xl font-normal leading-relaxed mb-10 border-l-2 border-[#ccff00] pl-4">
            {subtitleText}
          </p>
        </MotionView>

        {/* Action Buttons */}
        <MotionView delay={0.4}>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="#contacts"
              className="inline-flex items-center gap-3 bg-[#ccff00] hover:bg-[#b8e600] text-black font-black text-sm uppercase tracking-wider px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(204,255,0,0.3)] hover:shadow-[0_0_45px_rgba(204,255,0,0.5)] group"
            >
              <span>{t('ctaPrimary')}</span>
              <div className="w-7 h-7 rounded-full bg-black/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">
                <ArrowUpRight className="w-4 h-4 text-black stroke-[3]" />
              </div>
            </a>

            <a
              href="#tech"
              className="inline-flex items-center gap-2 bg-neutral-900/80 hover:bg-neutral-800 text-white border border-neutral-700/80 hover:border-[#ccff00]/50 font-extrabold text-sm uppercase tracking-wider px-7 py-4 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 backdrop-blur-md"
            >
              <span>{t('ctaSecondary')}</span>
            </a>
          </div>
        </MotionView>
      </div>

      {/* Stats Counter Bar at Bottom */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full mt-12 sm:mt-16">
        <MotionView delay={0.5}>
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 sm:p-8 rounded-2xl bg-[#121212]/90 border border-neutral-800 backdrop-blur-xl divide-y md:divide-y-0 md:divide-x divide-neutral-800">
              {siteData.hero.stats.map((stat, idx) => (
                <div key={idx} className={`pt-4 md:pt-0 ${idx !== 0 ? 'md:pl-8' : ''}`}>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-black text-[#ccff00] tracking-tight font-mono mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-400">
                    {stat.label[locale] || stat.label.uz}
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-3 text-right text-[9px] text-neutral-500">
              Video:{' '}
              <a
                href={siteData.hero.videoCredit.url}
                target="_blank"
                rel="noreferrer"
                className="underline underline-offset-2 hover:text-neutral-300"
              >
                {siteData.hero.videoCredit.label}
              </a>
            </p>
          </>
        </MotionView>
      </div>

    </section>
  );
}
