import Image from 'next/image';
import ContentCard from '@/components/ContentCard';

const spotifyUrl = '#';

const featuredContent = [
  {
    title: 'Episode 21: The Story Behind the Headline',
    description: 'How media framing protects power and shapes what the public is told to fear, ignore, or accept.',
    type: 'Featured Episode'
  },
  {
    title: 'Field Notes: Who Benefits From Silence?',
    description: 'A reporting notebook on policy failure, political spin, and the communities forced to absorb the consequences.',
    type: 'Latest Article'
  },
  {
    title: 'Host Journal: What Accountability Should Sound Like',
    description: 'A direct reflection on why language, evidence, and public pressure still matter in this political moment.',
    type: 'Editorial'
  }
];

export const metadata = {
  title: 'Home | The Uncomfortable Narrative',
  description: 'Official home for The Uncomfortable Narrative podcast, episodes, writing, hosts, and socials.'
};

export default function HomePage() {
  return (
    <section className="space-y-12">
      <div className="grid items-center gap-8 rounded-2xl border border-zinc-800 bg-brandCard p-6 sm:p-8 lg:grid-cols-[1.2fr_1fr]">
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-brandAccent">We Will Not Stay Silent...</p>
          <h1 className="text-4xl font-bold leading-tight sm:text-5xl">Politics. Power. Media. Accountability.</h1>
          <p className="max-w-xl text-base leading-relaxed text-zinc-300">
            The Uncomfortable Narrative is a political and investigative podcast for people who want facts, context,
            and honest reporting on the systems shaping everyday life.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href={spotifyUrl} className="btn-primary">Follow on Spotify</a>
            <a href="#latest-posts" className="btn-secondary">Read Latest Posts</a>
          </div>
        </div>
        <div className="mx-auto w-full max-w-sm rounded-xl border border-zinc-700 bg-zinc-900 p-5">
          <Image src="https://i.imgur.com/VWeCHXP.png" alt="The Uncomfortable Narrative logo" width={700} height={700} className="h-auto w-full rounded-lg" priority />
        </div>
      </div>

      <section aria-labelledby="latest-posts" className="space-y-4">
        <h2 id="latest-posts" className="text-2xl font-semibold">Latest episodes and articles</h2>
        <p className="max-w-3xl text-zinc-300">New episodes and analysis on the stories mainstream coverage softens, sidelines, or leaves behind.</p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featuredContent.map((item) => (
            <ContentCard key={item.title} label={item.type} title={item.title} description={item.description} />
          ))}
        </div>
      </section>

      <section className="rounded-xl border border-zinc-800 bg-black/30 p-6">
        <h2 className="text-2xl font-semibold">Why this show exists</h2>
        <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
          Too many people are asked to accept polished narratives that hide harm and protect the powerful.
          We built this show to confront fascism, expose cowardice, and center people living through the consequences of policy.
        </p>
      </section>
    </section>
  );
}
