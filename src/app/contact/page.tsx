import ContactForm from '@/src/components/contact-form';

export const dynamic = 'force-static';

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl space-y-6">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-gray-300">Feel free to reach out. This form uses a Next.js Server Action (no separate backend required).</p>
      <ContactForm />
      <p className='text-gray-300'>Or to my email: <a href="mailto:ale@lunyco.com" className="text-blue-500">ale@lunyco.com</a></p>
    </div>
  );
}