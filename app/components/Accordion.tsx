'use client';

import { useState } from 'react';

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="border border-white/10 rounded-lg overflow-hidden">
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-6 py-4 text-left bg-white/5 hover:bg-white/10 transition-colors flex justify-between items-center"
          >
            <span className="font-medium">{item.question}</span>
            <span className={`transform transition-transform ${openIndex === index ? 'rotate-180' : ''}`}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-6 py-4 bg-white/5 border-t border-white/10">
              <p className="text-gray-300">{item.answer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}