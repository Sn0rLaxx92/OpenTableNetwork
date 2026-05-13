import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Our Socials | The Uncomfortable Narrative',
  description: 'Find all social channels for The Uncomfortable Narrative, including Linktree placeholder.'
};

const socials = [
  { name: 'Linktree', handle: 'linktr.ee/UNPod', link: '#' },
  { name: 'Instagram', handle: '@UNPod', link: '#' },
  { name: 'TikTok', handle: '@UNPod', link: '#' },
  { name: 'X (Twitter)', handle: '@UNPod', link: '#' },
  { name: 'YouTube', handle: '@UNPod', link: '#' }
export const metadata = {
  title: 'Our Socials | The Uncomfortable Narrative'
};

const socials = [
  { name: 'Instagram', handle: '@yourhandle', link: '#' },
  { name: 'TikTok', handle: '@yourhandle', link: '#' },
  { name: 'X (Twitter)', handle: '@yourhandle', link: '#' },
  { name: 'YouTube', handle: '@yourchannel', link: '#' }
];

export default function SocialsPage() {
  return (
    <section className="space-y-5">
      <PageHeader title="Our Socials" description="Follow us for episode clips, updates, and source threads." />
      <h1 className="text-3xl font-bold">Our Socials</h1>
      <p className="max-w-3xl text-zinc-300">
        Stay connected between episodes. These channels share updates, clips, guest announcements, and research notes.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2">
        {socials.map((social) => (
          <li key={social.name} className="rounded-lg border border-zinc-800 bg-brandCard p-4">
            <a href={social.link} className="font-medium text-brandAccent hover:underline">{social.name}</a>
            <p className="text-sm text-zinc-300">{social.handle}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
