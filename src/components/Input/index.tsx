type InputProps = {
  className?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  id?: string;
  name?: string;
  type?: 'text' | 'email';
  value?: string;
  maxLength?: number;
  disabled?: boolean;
  autoComplete?: string;
};

export const Input = ({ className, placeholder, icon, onChange, required, id, name, type = 'text', value, maxLength, disabled, autoComplete }: InputProps) => {
  return (
    <div className={`relative ${className}`}>
      <div className="pointer-events-none absolute inset-y-0 start-0 flex items-center ps-3">{icon && <i className={`pi pi-${icon} text-text`} />}</div>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
        autoComplete={autoComplete}
        className="bg-primary border-text/10 text-text focus:ring-activeprimary focus:border-activeprimary focus:outline-activeprimary block w-full rounded-lg border p-2.5 ps-10 text-sm disabled:cursor-not-allowed disabled:opacity-50"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};
