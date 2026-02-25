/**
 * Reusable loading skeleton with cyberpunk pulse animation.
 * @module components/LoadingSkeleton
 */

interface LoadingSkeletonProps {
  /** Width class (Tailwind) */
  width?: string;
  /** Height class (Tailwind) */
  height?: string;
  /** Additional CSS classes */
  className?: string;
  /** Whether to render a circular skeleton */
  circle?: boolean;
}

/** Animated skeleton placeholder for loading states */
export function LoadingSkeleton({
  width = 'w-full',
  height = 'h-4',
  className = '',
  circle = false,
}: LoadingSkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gradient-to-r from-purple-900/40 via-cyan-900/30 to-purple-900/40 ${
        circle ? 'rounded-full' : 'rounded-lg'
      } ${width} ${height} ${className}`}
      role="status"
      aria-label="Loading…"
    />
  );
}
