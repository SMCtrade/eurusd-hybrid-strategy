import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t, i18n } = useTranslation();
  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'algorithm', href: '#algorithm' },
    { key: 'accuracy', href: '#accuracy' },
    { key: 'ai', href: '#ai' },
    { key: 'pricing', href: '#pricing' },
    { key: 'blog', href: '#blog' },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  return (
    <header className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm fixed top-0 left-0 right-0 z-50 shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="text-xl md:text-2xl font-bold">
          {t('hero.title')}
        </div>
        <nav className="hidden md:flex space-x-6">
          {navItems.map(item => (
            <a key={item.key} href={item.href} className="hover:text-blue-600 transition">
              {t(`header.nav.${item.key}`)}
            </a>
          ))}
        </nav>
        <div className="flex items-center space-x-3">
          <button onClick={() => changeLanguage('en')} className="text-sm hover:text-blue-600 uppercase">EN</button>
          <button onClick={() => changeLanguage('ru')} className="text-sm hover:text-blue-600 uppercase">RU</button>
          <button className="hidden md:inline-block px-4 py-2 border rounded text-sm hover:bg-blue-600 hover:text-white transition">
            {t('header.buttons.login')}
          </button>
          <button className="hidden md:inline-block px-4 py-2 border rounded text-sm bg-blue-600 text-white hover:bg-blue-700 transition">
            {t('header.buttons.register')}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
