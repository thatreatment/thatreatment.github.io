export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-700 py-8 px-4 sm:px-6 lg:px-8 mt-16">
      <div className="max-w-6xl mx-auto text-center text-slate-500 text-sm">
        <p>© {new Date().getFullYear()} Goldun. All rights reserved.</p>
        <p className="mt-2">This is a private placement opportunity for accredited investors only.</p>
      </div>
    </footer>
  );
}
