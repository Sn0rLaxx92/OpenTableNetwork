import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Contact | The Uncomfortable Narrative',
  description: 'Contact The Uncomfortable Narrative for feedback, collaboration, and press inquiries.'
};

export default function ContactPage() {
  return (
    <section className="space-y-5">
      <PageHeader title="Contact" description="Press inquiries, guest pitches, candidate interviews, expert commentary, and listener feedback are welcome." />
      <form className="space-y-4 rounded-lg border border-zinc-800 bg-brandCard p-5">
        <input className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-3" placeholder="Your name" aria-label="Your name" />
        <input className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-3" placeholder="Your email" type="email" aria-label="Your email" />
        <textarea className="min-h-40 w-full rounded-md border border-zinc-700 bg-zinc-900 p-3" placeholder="Your message" aria-label="Your message" />
        <button type="button" className="rounded-lg bg-brandAccent px-5 py-3 font-medium text-black">Send Message</button>
      </form>
      <div className="rounded-lg border border-zinc-800 bg-brandCard p-5 text-zinc-300">
        <p><strong>Email:</strong> contact@uncomfortablenarrative.com</p>
        <p className="mt-2">For media and booking requests, include your deadline and publication details.</p>
      </div>
    </section>
  );
}
