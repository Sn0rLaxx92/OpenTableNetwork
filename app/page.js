import Link from 'next/link';
import Image from 'next/image';

const spotifyUrl = '#spotify';

const featuredContent = [
  {
    title: 'Episode 21: The Story Behind the Headline',
    description: 'A closer look at how major political stories are framed and why the language matters.',
    type: 'Featured Episode'
  },
  {
    title: 'Field Notes: Trust in Public Institutions',
    description: 'A blog-style breakdown of listener questions and research notes from the latest recording week.',
    type: 'Editorial'
  },
  {
    title: 'Host Journal: What We Could Not Fit Into the Episode',
    description: 'Additional context, source links, and reflections from the team after a difficult interview.',
    type: 'Behind the Scenes'
  }
];

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid items-center gap-8 rounded-2xl border border-zinc-800 bg-brandCard p-6 sm:p-8 lg:grid-cols-2">
        <div className="space-y-5">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brandAccent">Investigative podcast and blog</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">The Uncomfortable Narrative</h1>
          <p className="max-w-xl text-zinc-300">
            Serious conversations on politics, power, and public truth. We publish episodes and written analysis to help
            listeners make sense of stories that shape real lives.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={spotifyUrl}
              className="rounded-lg bg-brandAccent px-5 py-3 font-semibold text-black transition hover:opacity-90"
            >
              Follow us on Spotify
            </a>
            <Link href="/about" className="rounded-lg border border-zinc-700 px-5 py-3 font-semibold hover:border-zinc-500">
              Learn about the show
            </Link>
          </div>
        </div>
        <div className="mx-auto max-w-sm rounded-xl border border-zinc-700 bg-zinc-900 p-5">
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

      <section aria-labelledby="featured-posts" className="space-y-4">
        <h2 id="featured-posts" className="text-2xl font-semibold">Latest episodes and articles</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {featuredContent.map((item) => (
            <article key={item.title} className="rounded-lg border border-zinc-800 bg-brandCard p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brandAccent">{item.type}</p>
              <h3 className="mt-2 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-300">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </section>
  );
}
