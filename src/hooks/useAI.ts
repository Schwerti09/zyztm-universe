// AI-ready hooks – prepared for OpenAI/Grok integration
import { useState } from 'react'

interface AIResponse {
  content: string
  loading: boolean
  error: string | null
}

/**
 * Hook for AI-powered content generation (OpenAI/Grok ready).
 * @param endpoint - The AI provider to use ('openai' | 'grok')
 * @returns { generate, response } – call generate(prompt) to trigger AI generation
 */
export function useAI(endpoint: 'openai' | 'grok' = 'openai'): {
  generate: (prompt: string) => Promise<void>
  response: AIResponse
} {
  const [response, setResponse] = useState<AIResponse>({
    content: '',
    loading: false,
    error: null,
  })

  const generate = async (prompt: string) => {
    setResponse({ content: '', loading: true, error: null })
    try {
      // TODO: Connect to Netlify Function /api/ai when API key is configured
      const res = await fetch('/.netlify/functions/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model: endpoint }),
      })
      if (!res.ok) throw new Error('AI request failed')
      const data = (await res.json()) as { content: string }
      setResponse({ content: data.content, loading: false, error: null })
    } catch (err) {
      setResponse({ content: '', loading: false, error: (err as Error).message })
    }
  }

  return { generate, response }
}
