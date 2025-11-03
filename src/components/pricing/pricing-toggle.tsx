"use client";

import { useState } from "react";

interface PricingToggleProps {
  onToggle: (isAnnual: boolean) => void;
}

export function PricingToggle({ onToggle }: PricingToggleProps) {
  const [isAnnual, setIsAnnual] = useState(false);

  const handleToggle = () => {
    const newValue = !isAnnual;
    setIsAnnual(newValue);
    onToggle(newValue);
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <span
        className={`text-sm font-medium transition-colors ${
          !isAnnual ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Monthly
      </span>
      <button
        onClick={handleToggle}
        className="relative inline-flex h-8 w-14 items-center rounded-full bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        role="switch"
        aria-checked={isAnnual}
      >
        <span
          className={`inline-block h-6 w-6 transform rounded-full bg-primary shadow-lg transition-transform ${
            isAnnual ? "translate-x-7" : "translate-x-1"
          }`}
        />
      </button>
      <span
        className={`text-sm font-medium transition-colors ${
          isAnnual ? "text-foreground" : "text-muted-foreground"
        }`}
      >
        Annual
        <span className="ml-2 inline-flex items-center rounded-full bg-green-100 px-2 py-0.5 text-xs font-bold text-green-800 dark:bg-green-900/30 dark:text-green-400">
          Save 20%
        </span>
      </span>
    </div>
  );
}
