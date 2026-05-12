export const metadata = {
  title: 'Hosts | The Uncomfortable Narrative'
};

export default function HostsPage() {
  return (
    <section className="space-y-5">
      <h1 className="text-3xl font-bold">Hosts</h1>
      <p className="text-zinc-300">Meet the voices behind The Uncomfortable Narrative.</p>
      <div className="grid gap-4 md:grid-cols-2">
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-5">
          <h2 className="text-xl font-semibold">Host Name #1</h2>
          <p className="mt-2 text-zinc-300">Add bio details, background, and what perspective they bring to the show.</p>
        </article>
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-5">
          <h2 className="text-xl font-semibold">Host Name #2</h2>
          <p className="mt-2 text-zinc-300">Add bio details, background, and signature topics they care about.</p>
        </article>
      </div>
    </section>
  );
}
