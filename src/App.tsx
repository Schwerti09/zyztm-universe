/**
 * ZYZTM Universe – Cyberpunk Creator Hub
 * Main application layout.
 * @module App
 */

import './App.css';
import { useCreatorProfile } from './hooks/useCreatorProfile';
import { HeroSection } from './components/HeroSection';
import { SocialLinks } from './components/SocialLinks';
import { ProductsSection } from './components/ProductsSection';
import { ScheduleSection } from './components/ScheduleSection';
import { ErrorFallback } from './components/ErrorFallback';

function App() {
  const { data: profile, isLoading, isError, refetch } = useCreatorProfile();

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center p-8">
        <ErrorFallback
          message="Failed to load creator profile."
          onRetry={() => void refetch()}
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Scanline overlay across entire page */}
      <div className="scanline-overlay pointer-events-none fixed inset-0 z-50" />

      <HeroSection profile={profile} isLoading={isLoading} />
      <SocialLinks profile={profile} isLoading={isLoading} />
      <ProductsSection profile={profile} isLoading={isLoading} />
      <ScheduleSection profile={profile} isLoading={isLoading} />

      {/* Footer */}
      <footer className="footer-glow border-t border-white/5 py-8 text-center text-sm text-white/30">
        © {new Date().getFullYear()} ZYZTM Universe · Built with 💜
      </footer>
    </div>
  );
}

export default App;
