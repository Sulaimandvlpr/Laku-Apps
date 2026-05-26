export default function AuthLayout({ children, subtitle }) {
  return (
    <div className="relative flex min-h-screen flex-col bg-surface">
      <main className="flex flex-grow items-center justify-center p-gutter">{children}</main>
      {subtitle && (
        <div className="pointer-events-none fixed bottom-0 left-0 -z-10 h-64 w-full opacity-30">
          <div className="h-full w-full bg-gradient-to-t from-surface via-surface/80 to-transparent" />
        </div>
      )}
    </div>
  );
}
