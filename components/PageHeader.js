export default function PageHeader({ title, description }) {
  return (
    <header className="space-y-3">
      <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description ? <p className="max-w-3xl text-zinc-300">{description}</p> : null}
    </header>
  );
}
