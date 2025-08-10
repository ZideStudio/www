type InputProps = {
  className?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (value: string) => void;
  required?: boolean;
};

export const Input = ({ className, placeholder, icon, onChange, required }: InputProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">{icon && <i className={`pi pi-${icon} text-text`} />}</div>
      <input
        type="text"
        id="simple-search"
        className="bg-primary border-text/10 text-text focus:ring-activeprimary focus:border-activeprimary focus:outline-activeprimary block w-full rounded-lg border p-2.5 ps-10 text-sm"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};
