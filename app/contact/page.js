export const metadata = {
  title: 'Contact | The Uncomfortable Narrative'
};

export default function ContactPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Contact</h1>
      <p className="text-zinc-300">Want to collaborate, suggest a topic, or send feedback? Reach out below.</p>
      <form className="space-y-4 rounded-lg border border-zinc-800 bg-brandCard p-5">
        <input className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-3" placeholder="Your name" />
        <input className="w-full rounded-md border border-zinc-700 bg-zinc-900 p-3" placeholder="Your email" type="email" />
        <textarea className="min-h-40 w-full rounded-md border border-zinc-700 bg-zinc-900 p-3" placeholder="Your message" />
        <button type="button" className="rounded-lg bg-brandAccent px-5 py-3 font-medium text-black">Send Message</button>
      </form>
      <p className="text-sm text-zinc-400">Form backend can be connected to Formspree, Resend, or a custom API route next.</p>
    </section>
  );
}
