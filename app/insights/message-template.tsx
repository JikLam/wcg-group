"use client";

import { useRef, useState } from "react";

export default function MessageTemplate({ label, text }: { label: string; text: string }) {
  const [status, setStatus] = useState("");
  const message = useRef<HTMLParagraphElement>(null);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus("已複製，可貼到 WhatsApp 後修改。");
    } catch {
      const selection = window.getSelection();
      if (message.current && selection) {
        const range = document.createRange();
        range.selectNodeContents(message.current);
        selection.removeAllRanges();
        selection.addRange(range);
      }
      setStatus("請複製已選取的文字；手機可長按文字複製。");
    }
  }

  return (
    <div className="insight-message-template">
      <div className="insight-message-toolbar">
        <h3>{label}</h3>
        <button type="button" onClick={copy} aria-label={`複製${label}`}>複製文字</button>
      </div>
      <p ref={message}>{text}</p>
      <span className="insight-copy-status" role="status">{status}</span>
    </div>
  );
}
