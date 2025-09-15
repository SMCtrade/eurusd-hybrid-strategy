import Header from './components/Header';
import Hero from './components/Hero';
import AlgorithmSection from './components/AlgorithmSection';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AlgorithmSection />
      </main>
    </div>
  );
}

export default App;
