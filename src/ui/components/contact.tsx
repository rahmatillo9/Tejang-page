'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { FaTelegramPlane } from 'react-icons/fa';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

export default function ContactSection() {
  const t = useTranslations('contact');

  return (
    <section className="relative py-20 text-white contact-section">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between z-10">
        {/* Left side: Text + Telegram CTA */}
        <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
          <Fade cascade damping={0.2} triggerOnce>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4 text-yellow-400">
              {t('title', {
                defaultMessage: 'Contact Our Telegram Bot',
              })}
            </h2>

            <p className="text-lg md:text-xl mb-6 text-gray-300">
              {t('description', {
                defaultMessage:
                  'Instantly calculate tariffs and get help via our official Telegram bot.',
              })}
            </p>
          </Fade>

          <Zoom triggerOnce delay={300}>
            <a
              href="https://t.me/Tejang_bot"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:shadow-blue-500/60 transition-shadow duration-300"
            >
              <FaTelegramPlane size={20} />
              {t('botCta', { defaultMessage: 'Chat with @Tejang_bot' })}
            </a>
          </Zoom>
        </div>

        {/* Right side: image */}
        <Slide direction="right" triggerOnce>
          <div className=" flex justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-xl border-2 border-yellow-400">
              <Image
                src="/images/contact.webp"
                alt="Telegram Bot"
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
}
