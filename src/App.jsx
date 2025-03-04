import Navigation from './components/Navigation/Navigation';
import Hero from './components/Hero/Hero';
import Skills from './components/Skills/Skills';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Footer from './components/Footer/Footer';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <div className="min-h-screen bg-white dark:bg-gray-900">
          <Navigation />
          <Hero />
          <Skills />
          <Profile />
          <Projects />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App; 