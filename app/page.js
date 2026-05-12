import Image from 'next/image';

const spotifyUrl = '#';

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="grid items-center gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <p className="text-brandAccent">Official Podcast Hub</p>
          <h1 className="text-4xl font-bold sm:text-5xl">The Uncomfortable Narrative</h1>
          <p className="text-zinc-300">
            Honest stories, hard conversations, and bold perspectives. Follow the podcast for new episodes and updates.
          </p>
          <a
            href={spotifyUrl}
            className="inline-block rounded-lg bg-brandAccent px-5 py-3 font-medium text-black transition hover:opacity-90"
          >
            Follow on Spotify (Link Coming Soon)
          </a>
        </div>
        <div className="rounded-xl border border-zinc-800 bg-brandCard p-6">
          <Image
            src="https://i.imgur.com/VWeCHXP.png"
            alt="The Uncomfortable Narrative logo"
            width={700}
            height={700}
            className="h-auto w-full rounded-lg"
            priority
          />
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-4">
          <h2 className="mb-2 text-lg font-semibold">Latest Thoughts</h2>
          <p className="text-sm text-zinc-300">Visit our pages to dive deeper into show updates, themes, and host notes.</p>
        </article>
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-4">
          <h2 className="mb-2 text-lg font-semibold">Join the Community</h2>
          <p className="text-sm text-zinc-300">Use our socials page to connect and stay part of the ongoing conversation.</p>
        </article>
        <article className="rounded-lg border border-zinc-800 bg-brandCard p-4">
          <h2 className="mb-2 text-lg font-semibold">Reach Out</h2>
          <p className="text-sm text-zinc-300">Have a topic suggestion? Contact us directly from the Contact page.</p>
        </article>
      </div>
    </section>
  );
}
