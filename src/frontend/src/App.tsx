import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { ColorBoxes } from './components/ColorBoxes';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <h1 className="text-6xl md:text-8xl font-bold text-center mb-16 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
          Hello World
        </h1>
        <ColorBoxes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
