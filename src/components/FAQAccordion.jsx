import { Plus } from 'lucide-react';

export default function FAQAccordion({ items }) {
  return (
    <div className="faq-list">
      {items.map((item, index) => (
        <details key={item.question} open={index === 0}>
          <summary>{item.question}<Plus size={18} /></summary>
          <p>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
