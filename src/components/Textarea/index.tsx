type TextareaProps = {
  className?: string;
  placeholder?: string;
  icon?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  rows?: number;
  id?: string;
  name?: string;
  value?: string;
  maxLength?: number;
  disabled?: boolean;
};

export const Textarea = ({ className, placeholder, icon, onChange, required, rows = 4, id, name, value, maxLength, disabled }: TextareaProps) => {
  return (
    <div className={`relative ${className}`}>
      {icon && (
        <div className="pointer-events-none absolute start-0 top-3 flex items-start ps-3">
          <i className={`pi pi-${icon} text-text`} />
        </div>
      )}
      <textarea
        id={id}
        name={name}
        value={value}
        maxLength={maxLength}
        disabled={disabled}
        className={`bg-primary border-text/10 text-text focus:ring-activeprimary focus:border-activeprimary focus:outline-activeprimary resize-vertical block w-full rounded-lg border p-2.5 text-sm disabled:cursor-not-allowed disabled:opacity-50 ${icon ? 'ps-10' : ''}`}
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
        rows={rows}
      />
    </div>
  );
};
