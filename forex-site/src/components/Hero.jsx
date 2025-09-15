import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();
  const words = t('hero.animatedWords', { returnObjects: true });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section id="home" className="pt-24 md:pt-32 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto text-center px-4 py-16">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          {t('hero.title')}
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-4 h-8">
          {words[index]}
        </h2>
        <p className="text-xl md:text-2xl mb-8">{t('hero.subtitle')}</p>
        <div className="flex justify-center space-x-4">
          <a href="#pricing" className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            {t('hero.buttons.tryFree')}
          </a>
          <a href="#algorithm" className="px-6 py-3 border border-blue-600 text-blue-600 rounded hover:bg-blue-600 hover:text-white transition">
            {t('hero.buttons.howWorks')}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
