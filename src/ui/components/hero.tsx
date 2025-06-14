'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FC } from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const HeroSection: FC = () => {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br overflow-hidden">
      {/* Background decorative element */}
      <div className="absolute inset-0 z-0" />

      <div className=" flex-col-reverse container mx-auto px-6 flex  md:flex-row items-center justify-between relative z-10">
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <Fade cascade damping={0.2} triggerOnce>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-200">
              {t('title', {
                defaultMessage: 'Calculate Your Electricity Costs with Ease',
              })}
            </h1>

            <p className="text-lg md:text-xl mb-8">
              {t('description', {
                defaultMessage:
                  'Our smart bot instantly calculates your electricity tariffs, saving you time and money.',
              })}
            </p>
          </Fade>

          <Zoom triggerOnce delay={300}>
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-500 to-yellow-300 text-blue-900 font-semibold rounded-full shadow-lg hover:shadow-yellow-400/60 transition-shadow duration-300"
            >
              {t('cta', { defaultMessage: 'Try the Bot Now' })}
            </a>
          </Zoom>
        </div>

        {/* Image Content */}
        <Slide direction="right" triggerOnce>
          <div className=" flex justify-center">
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-2 border-yellow-400">
              <Image
                src="/images/elektor.webp"
                alt="Electricity tariff calculator"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </Slide>
      </div>
    </section>
  );
};

export default HeroSection;
