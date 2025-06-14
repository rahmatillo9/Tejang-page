'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { JSX } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

export default function AboutSection(): JSX.Element {
  const t = useTranslations('about');

  return (
    <section className="relative py-20">
      {/* Background decorative element */}
      <div className="absolute inset-0 z-0" />

      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between relative z-10">
        {/* Image Content (Left Side) */}
        <Slide direction="left" triggerOnce >
          <div className=" flex justify-center mb-12 md:mb-0 md:pr-12  w-80 h-80 md:w-96 md:h-96">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl shadow-2xl border-2 border-yellow-400">
              <Image
                src="/images/telegram_bot.webp"
                alt="About electricity tariff calculator"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Slide>

        {/* Text Content (Right Side) */}
        <div className="md:w-1/2 text-center md:text-left">
          <Fade cascade damping={0.2} triggerOnce>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              {t('title', {
                defaultMessage: 'About Our Electricity Tariff Bot',
              })}
            </h2>

            <p className="text-lg md:text-xl mb-6">
              {t('description1', {
                defaultMessage:
                  'Our bot is designed to simplify the process of calculating electricity costs based on your local tariffs.',
              })}
            </p>

            <p className="text-lg md:text-xl mb-6">
              {t('description2', {
                defaultMessage:
                  'With a user-friendly interface and accurate calculations, it helps you save time and make informed decisions about your energy usage.',
              })}
            </p>
          </Fade>
        </div>
      </div>
    </section>
  );
}
