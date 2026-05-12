export default function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-6">
      <div className="container-shell text-sm text-zinc-400">
        © {new Date().getFullYear()} The Uncomfortable Narrative. All rights reserved.
      </div>
    </footer>
  );
}
