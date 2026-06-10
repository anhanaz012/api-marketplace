"use client";

interface CheckboxProps {
  checked: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}
export default function Checkbox({
  checked,
  onChange,
  disabled = false,
}: CheckboxProps) {
  return (
    <div
      className={`flex items-center gap-2 select-none ${
        disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
      }`}
      onClick={() => {
        if (!disabled) onChange(!checked);
      }}
    >
      {/* Box */}
      <div
        className={`
          flex h-5.5 w-5.5 items-center justify-center rounded-full transition
          ${checked ? "bg-green-400" : "bg-secondary"}
        `}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-3.5 w-3.5 text-white"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
    </div>
  );
}
