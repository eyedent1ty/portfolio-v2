export function MagicButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="relative inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FACC15_0%,#FFFFFF_50%,#FACC15_100%)]" />
      <span className="px-14 inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-quaternary py-1 text-sm font-medium text-white backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
}
