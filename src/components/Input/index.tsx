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
      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">{icon && <i className={`pi pi-${icon} text-text`} />}</div>
      <input
        type="text"
        id="simple-search"
        className="bg-primary border border-text/10 text-text text-sm rounded-lg focus:ring-activeprimary focus:border-activeprimary focus:outline-activeprimary block w-full ps-10 p-2.5"
        placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        required={required}
      />
    </div>
  );
};
