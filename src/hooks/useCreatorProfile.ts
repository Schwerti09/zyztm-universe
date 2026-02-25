/**
 * Hook for loading the central creator profile.
 * Uses TanStack Query for caching and background refetching.
 * @module hooks/useCreatorProfile
 */

import { useQuery } from '@tanstack/react-query';
import type { CreatorProfile } from '../types/creator';
import profileData from '../data/creatorProfile.json';

/**
 * Loads the creator profile from the local JSON data.
 * In production this could be replaced with a Netlify Function fetch.
 */
async function fetchCreatorProfile(): Promise<CreatorProfile> {
  // Simulate network delay for skeleton demo; in production remove this
  return profileData as CreatorProfile;
}

/**
 * React hook that provides the creator profile with caching.
 * @returns TanStack Query result containing the CreatorProfile
 */
export function useCreatorProfile() {
  return useQuery<CreatorProfile>({
    queryKey: ['creatorProfile'],
    queryFn: fetchCreatorProfile,
    staleTime: 5 * 60 * 1000, // 5 min cache
  });
}
