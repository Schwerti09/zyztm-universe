/**
 * AI-ready hooks – prepared for OpenAI / Grok integration.
 * Each hook wraps a Netlify Function endpoint so API keys stay secret.
 * @module hooks/useAI
 */

import { useMutation } from '@tanstack/react-query';

/** Shape of an AI chat message */
export interface AIChatMessage {
  role: 'user' | 'assistant' | 'system';
  content: string;
}

/** Response from the AI proxy function */
export interface AIChatResponse {
  reply: string;
  model: string;
}

/**
 * Sends messages to the AI chat Netlify Function.
 * @param messages - conversation history
 * @returns AI response
 */
async function fetchAIChat(messages: AIChatMessage[]): Promise<AIChatResponse> {
  const res = await fetch('/.netlify/functions/ai-chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ messages }),
  });
  if (!res.ok) throw new Error(`AI chat error: ${res.status}`);
  return res.json() as Promise<AIChatResponse>;
}

/**
 * Hook for AI-powered chat – calls the serverless proxy.
 * @example
 * const { mutateAsync: chat } = useAIChat();
 * const response = await chat([{ role: 'user', content: 'Hello!' }]);
 */
export function useAIChat() {
  return useMutation<AIChatResponse, Error, AIChatMessage[]>({
    mutationFn: fetchAIChat,
  });
}
