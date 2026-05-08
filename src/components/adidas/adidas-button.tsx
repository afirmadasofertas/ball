type AdidasButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "quiet";
  className?: string;
};

export function AdidasButton({
  children,
  variant = "primary",
  className = "",
}: AdidasButtonProps) {
  return (
    <button className={`ad-btn ad-btn-${variant} ${className}`.trim()}>
      <span>{children}</span>
      {variant !== "quiet" ? (
        <span className="ad-btn-arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </button>
  );
}
