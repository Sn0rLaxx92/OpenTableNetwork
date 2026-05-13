import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'About the Show | The Uncomfortable Narrative',
  description: 'Learn about the mission, values, and editorial focus of The Uncomfortable Narrative.'
export const metadata = {
  title: 'About the Show | The Uncomfortable Narrative'
};

export default function AboutPage() {
  return (
    <section className="space-y-8">
      <PageHeader
        title="About the Show"
        description="The Uncomfortable Narrative covers politics, power, media, and accountability through direct reporting and grounded analysis."
      />

      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-5">
          <h2 className="text-xl font-semibold">What we cover</h2>
          <p className="mt-2 text-zinc-300">
            We examine political decisions, institutional failure, media narratives, and the human stories often ignored or softened by corporate media.
          </p>
        </article>
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-5">
          <h2 className="text-xl font-semibold">How we work</h2>
          <p className="mt-2 text-zinc-300">
            We are professional, evidence-driven, and unapologetic about naming harm when harm is clear. Our work is for people who want honesty over comfort.
          </p>
        </article>
      </div>
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
