import { Quote } from 'lucide-react';

export default function TestimonialCard({ testimonial }) {
  return (
    <article className="testimonial-card">
      <Quote size={26} />
      <blockquote>{testimonial.quote}</blockquote>
      <p><strong>{testimonial.name}</strong><span>{testimonial.role}</span></p>
      {testimonial.placeholder && <small>Placeholder - replace in config/testimonials.js</small>}
    </article>
  );
}
