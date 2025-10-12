'use client';
import { useState, useTransition } from 'react';
import { z } from 'zod';
import { sendMessage } from '@/src/server/actions';


const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});


export default function ContactForm() {
  const [status, setStatus] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();


  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setStatus('Please fix the highlighted fields.');
      return;
    }
    startTransition(async () => {
      const res = await sendMessage(parsed.data);
      setStatus(res.ok ? 'Thanks! I will get back to you shortly.' : res.error ?? 'Something went wrong.');
      if (res.ok) form.reset();
    });
  }


  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div>
          <label className="block text-sm text-gray-300">Name</label>
          <input name="name" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" required />
        </div>
        <div>
          <label className="block text-sm text-gray-300">Email</label>
          <input type="email" name="email" className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" required />
        </div>
      </div>
      <div>
        <label className="block text-sm text-gray-300">Message</label>
        <textarea name="message" rows={6} className="mt-1 w-full rounded-lg border border-white/10 bg-white/5 px-3 py-2 outline-none focus:ring-2 focus:ring-white/20" required />
      </div>
      <button disabled={isPending} className="rounded-xl bg-white px-5 py-2 font-medium text-gray-900 disabled:opacity-50">{isPending ? 'Sending…' : 'Send'}</button>
      {status && <p className="text-sm text-gray-300">{status}</p>}
    </form>
  );
}