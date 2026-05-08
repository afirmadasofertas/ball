type IconButtonProps = {
  label: string;
  children: React.ReactNode;
};

export function IconButton({ label, children }: IconButtonProps) {
  return (
    <button className="icon-button" aria-label={label} title={label}>
      {children}
    </button>
  );
}
