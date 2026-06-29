import { links } from './links';

export const products = [
  {
    id: 'scorecard',
    name: 'Free Confidence Scorecard',
    price: 'Free',
    type: 'Digital Assessment',
    subtitle: 'Know where you stand. Get clear on what to build next.',
    description: 'Discover your confidence score and uncover the hidden habits, beliefs, and patterns holding you back.',
    image: '/assets/confidence-scorecard.png',
    cta: 'Take the Free Scorecard',
    href: '/scorecard',
    featured: false
  },
  {
    id: 'ebook',
    name: 'Your Guide to Overcoming Anxiety',
    price: '$29.97',
    type: 'Digital Ebook',
    subtitle: 'A Step-by-Step Guide to Finding Your Calm',
    description: 'Understand anxiety, overcome self-doubt, build self-trust, and create lasting confidence with practical systems that move you forward.',
    image: '/assets/ebook-cover.png',
    cta: 'Get the Ebook',
    href: '/ebook',
    checkout: links.ebookCheckout,
    featured: true
  },
  {
    id: 'workbook',
    name: 'The Calm Confidence Workbook',
    price: '$39.97',
    type: 'Digital PDF Workbook',
    subtitle: 'A Practical Guide to Building Self-Trust, Overcoming Anxiety, and Creating Lasting Confidence',
    description: 'A guided 12-step workbook with assessments, reflection prompts, action plans, and habit-building systems for lasting confidence.',
    image: '/assets/workbook-thumbnail.png',
    cta: 'Get the Workbook',
    href: '/workbook',
    checkout: links.workbookCheckout,
    featured: true
  },
  {
    id: 'accelerator',
    name: 'Calm Confidence Accelerator',
    price: '8-Week Coaching Program',
    type: 'Private Coaching',
    subtitle: 'Build calm. Build confidence. Build your life.',
    description: 'A transformational coaching experience to build self-trust, reduce anxiety, develop emotional resilience, and create consistent action.',
    image: '/assets/accelerator-thumbnail.png',
    cta: 'Explore the Accelerator',
    href: '/accelerator',
    featured: false
  }
];

export const getProduct = (id) => products.find((product) => product.id === id);
