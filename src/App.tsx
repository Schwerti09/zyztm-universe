import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import ParticleBackground from './components/ParticleBackground'
import HeroSection from './components/HeroSection'
import SocialLinks from './components/SocialLinks'
import LiveStream from './components/LiveStream'
import VideoGallery from './components/VideoGallery'
import DigitalProducts from './components/DigitalProducts'
import creatorProfile from './creatorProfile.json'
import type { CreatorProfile } from './types/creator'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      retry: 2,
    },
  },
})

const profile = creatorProfile as CreatorProfile

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="relative min-h-screen bg-[#050508] text-white overflow-x-hidden">
        <ParticleBackground />
        <HeroSection profile={profile} />
        <SocialLinks profile={profile} />
        <LiveStream profile={profile} />
        <VideoGallery profile={profile} />
        <DigitalProducts profile={profile} />
      </div>
    </QueryClientProvider>
  )
}

export default App
