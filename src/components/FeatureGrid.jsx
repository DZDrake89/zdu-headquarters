import { Brain, ShieldCheck, Footprints, CalendarCheck, Crown, HeartPulse } from 'lucide-react';

const icons = [Brain, ShieldCheck, Footprints, CalendarCheck, Crown, HeartPulse];

export default function FeatureGrid({ items, numbered = false }) {
  return (
    <div className="feature-grid">
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article className="feature-card" key={item.title}>
            <div className="feature-icon">{numbered ? String(index + 1).padStart(2, '0') : <Icon size={25} />}</div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
    </div>
  );
}
