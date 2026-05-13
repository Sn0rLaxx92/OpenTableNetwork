export const metadata = {
  title: 'Hosts | The Uncomfortable Narrative'
};

export default function HostsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Hosts</h1>
      <p className="text-zinc-300">Meet the team guiding each conversation.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-5">
          <h2 className="text-xl font-semibold">Host Name #1</h2>
          <p className="mt-2 text-zinc-300">Placeholder bio. Add background, reporting focus, and on-air perspective.</p>
        </article>
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-5">
          <h2 className="text-xl font-semibold">Host Name #2</h2>
          <p className="mt-2 text-zinc-300">Placeholder bio. Add background, signature themes, and editorial role.</p>
        </article>
      </div>
    </section>
  );
}
