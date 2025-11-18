'use client';
import { motion } from 'motion/react';
import ContactForm from '@/components/contact-form';
import { Mail, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <motion.div 
      className="mx-auto max-w-2xl space-y-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-3">
        <div className="flex items-center gap-3">
          <Send className="h-8 w-8 text-primary" />
          <h1 className="text-4xl md:text-5xl font-bold">Get in Touch</h1>
        </div>
        <p className="text-lg text-muted-foreground">
          Have a project in mind or want to collaborate? I'd love to hear from you.
        </p>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="rounded-lg border border-border bg-card p-6 md:p-8"
      >
        <ContactForm />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex items-center gap-2 text-muted-foreground border-t border-border pt-6"
      >
        <Mail className="h-4 w-4" />
        <p className="text-sm">
          Or email me directly at{' '}
          <a 
            href="mailto:ale@lunyco.com" 
            className="text-primary hover:text-primary/80 underline transition-colors font-medium"
          >
            ale@lunyco.com
          </a>
        </p>
      </motion.div>
    </motion.div>
  );
}