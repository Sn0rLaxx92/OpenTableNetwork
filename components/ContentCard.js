export default function ContentCard({ label, title, description }) {
  return (
    <article className="flex h-full flex-col rounded-xl border border-zinc-800 bg-brandCard p-5">
      <p className="text-xs font-semibold uppercase tracking-wide text-brandAccent">{label}</p>
      <h3 className="mt-2 text-lg font-semibold leading-snug text-zinc-100">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-zinc-300">{description}</p>
    </article>
  );
}
