export function Logo({ className = "" }: { className?: string }) {
  return (
    <img
      src="/fishwhistle-logo-whitebg.png"
      alt="Fish Whistle Boats"
      className={className}
      loading="eager"
    />
  );
}
