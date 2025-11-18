'use client';
import { useTransition } from 'react';
import { z } from 'zod';
import { toast } from 'sonner';
import { sendMessage } from '@/server/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10)
});


export default function ContactForm() {
  const [isPending, startTransition] = useTransition();

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      toast.error('Please fix the highlighted fields.');
      return;
    }
    startTransition(async () => {
      const res = await sendMessage(parsed.data);
      if (res.ok) {
        toast.success('Thanks! I will get back to you shortly.');
        form.reset();
      } else {
        toast.error(res.error ?? 'Something went wrong.');
      }
    });
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" name="email" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea id="message" name="message" rows={6} required />
      </div>
      <Button type="submit" disabled={isPending}>
        {isPending ? 'Sending…' : 'Send'}
      </Button>
    </form>
  );
}