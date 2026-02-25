interface LoadingSkeletonProps {
  /** Width class (e.g. 'w-full', 'w-32') */
  width?: string
  /** Height class (e.g. 'h-4', 'h-32') */
  height?: string
  /** Additional Tailwind classes */
  className?: string
  /** Number of skeleton rows to render */
  count?: number
}

/**
 * Reusable animated skeleton loader with neon purple shimmer effect.
 */
export default function LoadingSkeleton({
  width = 'w-full',
  height = 'h-4',
  className = '',
  count = 1,
}: LoadingSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          className={`rounded-md animate-shimmer ${width} ${height} ${className}`}
          aria-hidden="true"
        />
      ))}
    </>
  )
}
