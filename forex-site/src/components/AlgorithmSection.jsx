import { useTranslation } from 'react-i18next';

const AlgorithmSection = () => {
  const { t } = useTranslation();
  const steps = t('algorithm.steps', { returnObjects: true });
  return (
    <section id="algorithm" className="bg-white dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">{t('algorithm.title')}</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div key={idx} className="p-6 bg-gray-50 dark:bg-gray-800 rounded shadow">
              <div className="text-blue-600 text-2xl font-bold mb-4">{String(idx + 1).padStart(2, '0')}</div>
              <h3 className="text-lg font-semibold mb-2 whitespace-pre-line">{step.title}</h3>
              {step.description && <p className="text-sm text-gray-600 dark:text-gray-300">{step.description}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AlgorithmSection;
