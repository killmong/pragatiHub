import React from "react";
export interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  name: string;
  trigger?: () => void;
  error?: string;
  value?: string;
}
const InputField: React.FC<InputFieldProps> = ({
  placeholder,
  label,
  type,
  name,
  trigger,
}) => {
  return (
    <div className="flex flex-col py-2">
      <label className="py-1 font-medium text-left text-sm text-black font-[helvetica]">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="px-4 lg:py-3 py-2 text-xs border lg:rounded   border-indigo-600 text-black hover:border-violet-300 w-full outline-none"
      />
    </div>
  );
};

export default InputField;
