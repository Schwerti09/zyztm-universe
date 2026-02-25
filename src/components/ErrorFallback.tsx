/**
 * Reusable error fallback component.
 * @module components/ErrorFallback
 */

interface ErrorFallbackProps {
  /** Error message to display */
  message?: string;
  /** Optional retry handler */
  onRetry?: () => void;
}

/** Displays an error state with optional retry button */
export function ErrorFallback({
  message = 'Something went wrong. Please try again.',
  onRetry,
}: ErrorFallbackProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 rounded-2xl border border-red-500/30 bg-red-950/20 p-8 text-center backdrop-blur-md">
      <div className="text-4xl">⚠️</div>
      <p className="text-red-300">{message}</p>
      {onRetry && (
        <button
          onClick={onRetry}
          className="cursor-pointer rounded-lg border border-red-500/50 bg-red-500/20 px-6 py-2 text-sm font-medium text-red-200 transition-colors hover:bg-red-500/30"
        >
          Retry
        </button>
      )}
    </div>
  );
}
