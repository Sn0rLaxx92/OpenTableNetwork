import PageHeader from '@/components/PageHeader';

export const metadata = {
  title: 'Hosts | The Uncomfortable Narrative',
  description: 'Meet Spencer Hart and Angela Jay, hosts of The Uncomfortable Narrative.'
};

const hosts = [
  {
    name: 'Spencer Hart',
    role: 'Host & Producer',
    bio: 'Democratic Socialist. Focused on confronting fascism, political cowardice, media failure, and stories that demand accountability.'
  },
  {
    name: 'Angela Jay',
    role: 'Co-host',
    bio: 'Based in Minneapolis, MN. Democratic Socialist, avid reader, social media voice, and someone who has seen the damage caused by ICE and authoritarian politics in American cities.'
  }
];

export default function HostsPage() {
  return (
    <section className="space-y-5">
      <PageHeader title="Hosts" description="Meet the team behind The Uncomfortable Narrative." />
      <div className="grid gap-4 md:grid-cols-2">
        {hosts.map((host) => (
          <article key={host.name} className="rounded-lg border border-zinc-800 bg-brandCard p-5">
            <div className="mb-4 aspect-video rounded-md border border-dashed border-zinc-700 bg-zinc-900/80" aria-label={`${host.name} headshot placeholder`} />
            <h2 className="text-xl font-semibold">{host.name}</h2>
            <p className="text-sm font-medium text-brandAccent">{host.role}</p>
            <p className="mt-2 text-zinc-300">{host.bio}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
