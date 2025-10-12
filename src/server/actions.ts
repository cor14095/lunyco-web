'use server';
import { z } from 'zod';
import { ApiError } from '@/types/api';

const Input = z.object({ name: z.string(), email: z.string().email(), message: z.string() });

// TODO: Do a proper implementation with an email API or Django backend.
export async function sendMessage(input: z.infer<typeof Input>) {
  // Example server action; upgrade later to call a mail API or Django backend.
  try {
    const safe = Input.parse(input);
    console.log('Contact message:', safe); // Replace with email or DB insert
    return { ok: true } as const;
  } catch (e: unknown) {
    const apiError = e as ApiError;
    return { ok: false as const, error: apiError.message ?? 'Invalid input' };
  }
}