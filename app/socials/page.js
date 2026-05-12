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
      <h1 className="text-3xl font-bold">Our Socials</h1>
      <p className="text-zinc-300">Follow us and join the conversation outside the episodes.</p>
      <ul className="grid gap-3">
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
