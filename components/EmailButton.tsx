"use client";

import { useState } from "react";

const EMAIL = "ling06410@gmail.com";

interface Props {
  className?: string;
  onCopied?: () => void;
}

export default function EmailButton({ className, onCopied }: Props) {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    navigator.clipboard
      .writeText(EMAIL)
      .then(() => {
        setCopied(true);
        onCopied?.();
        setTimeout(() => setCopied(false), 2000);
      })
      .catch(() => {
        // Clipboard not available — fall back to opening the mail client
        window.location.href = `mailto:${EMAIL}`;
      });
  };

  return (
    <a href={`mailto:${EMAIL}`} onClick={handleClick} className={className}>
      {copied ? "Copied!" : "Email"}
    </a>
  );
}
