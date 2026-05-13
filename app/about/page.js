export const metadata = {
  title: 'About the Show | The Uncomfortable Narrative'
};

export default function AboutPage() {
  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-bold">About the Show</h1>
      <p className="max-w-3xl text-zinc-300">
        The Uncomfortable Narrative is a political and investigative podcast focused on hard questions, evidence-driven discussion,
        and the stories that sit beneath the headline.
      </p>
      <p className="max-w-3xl text-zinc-300">
        Each episode combines reporting, lived experience, and direct conversation. Our goal is to give listeners clarity, not noise.
      </p>
    </section>
  );
}
