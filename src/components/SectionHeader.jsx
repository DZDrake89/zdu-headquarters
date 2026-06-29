export default function SectionHeader({ eyebrow, title, description, align = 'left', light = false }) {
  return (
    <div className={`section-header section-header-${align} ${light ? 'section-header-light' : ''}`}>
      {eyebrow && <p className="eyebrow"><span />{eyebrow}</p>}
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}
