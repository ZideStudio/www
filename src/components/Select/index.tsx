import type { Option } from '@models/option.model';
import { useState } from 'react';

export type SelectOption = Option & {
  icon?: string;
  disabled?: boolean;
};

type SelectProps = {
  options: SelectOption[];
  setOption: (value: string) => void;
};

export const Select = ({ options, setOption }: SelectProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentOption, setCurrentOption] = useState<SelectOption>(options.find((option) => option.disabled !== true) ?? options[0]);

  const handleOptionSelect = (option: SelectOption) => {
    if (option.disabled) {
      setIsOpen(false);
      return;
    }

    setCurrentOption(option);
    setOption(option.value);
    setIsOpen(false);
  };

  const handleBlur = (e: React.FocusEvent) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node)) {
      setIsOpen(false);
    }
  };

  return (
    <div className="text-text relative" onBlur={handleBlur}>
      <button
        id="select-button"
        type="button"
        className="bg-primary outline-text/10 focus:outline-activeprimary grid w-44 cursor-default grid-cols-1 rounded-md py-1.5 pr-2 pl-3 text-left outline-1 -outline-offset-1 focus:outline-2 focus:-outline-offset-2 sm:text-sm/6"
        aria-haspopup="listbox"
        aria-expanded="true"
        aria-labelledby="listbox-label"
        onFocus={() => setIsOpen(true)}
      >
        <span className="col-start-1 row-start-1 flex items-center gap-3 pr-6">
          {currentOption.icon && <i className={`pi pi-${currentOption.icon}`} />}
          <span className="block truncate">{currentOption.label}</span>
        </span>
        <svg
          className="col-start-1 row-start-1 size-5 self-center justify-self-end sm:size-4"
          viewBox="0 0 16 16"
          fill="currentColor"
          aria-hidden="true"
          data-slot="icon"
        >
          <path
            fillRule="evenodd"
            d="M5.22 10.22a.75.75 0 0 1 1.06 0L8 11.94l1.72-1.72a.75.75 0 1 1 1.06 1.06l-2.25 2.25a.75.75 0 0 1-1.06 0l-2.25-2.25a.75.75 0 0 1 0-1.06ZM10.78 5.78a.75.75 0 0 1-1.06 0L8 4.06 6.28 5.78a.75.75 0 0 1-1.06-1.06l2.25-2.25a.75.75 0 0 1 1.06 0l2.25 2.25a.75.75 0 0 1 0 1.06Z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {isOpen && (
        <div
          className="bg-secondary absolute z-10 mt-1 max-h-56 w-auto min-w-full overflow-auto rounded-md py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-hidden sm:text-sm"
          tabIndex={-1}
          role="listbox"
          aria-labelledby="listbox-label"
          aria-activedescendant="listbox-option-3"
        >
          {options.map((option) => {
            const selected = option.value === currentOption.value;

            return (
              <div
                key={option.value}
                className={`relative cursor-pointer py-2 pr-9 pl-3 ${selected ? 'bg-activeprimary text-text outline-hidden' : 'text-secondary hover:bg-activesecondary'} select-none`}
                id="listbox-option-0"
                role="option"
                onMouseDown={() => handleOptionSelect(option)}
              >
                <div className="text-text flex items-center">
                  {option.icon && <i className={`pi pi-${option.icon}`} />}
                  <span className="ml-3 block font-normal whitespace-nowrap">{option.label}</span>
                </div>

                {selected && (
                  <span className={`absolute inset-y-0 right-0 flex items-center pr-4 ${selected ? 'text-text' : 'text-activeprimary'}`}>
                    <svg className="size-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
