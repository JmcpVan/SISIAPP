import type { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Professional Gardening',
    description: 'Expert lawn care, garden design, and maintenance services. We make your green spaces flourish with organic solutions.',
    provider: 'Green Thumb Landscaping',
    isValidated: true,
    category: 'Gardening',
  },
  {
    id: '2',
    name: 'Gourmet Meal Prep',
    description: 'Delicious, healthy, and ready-to-eat meals delivered to your door. Customizable weekly plans for busy professionals.',
    provider: 'The Chef\'s Table',
    isValidated: true,
    category: 'Food & Dining',
  },
  {
    id: '3',
    name: 'Interior Painting',
    description: 'High-quality interior painting services for homes and offices. We bring color to your life with precision and care.',
    provider: 'Perfect Finish Painters',
    isValidated: false,
    category: 'Home Services',
  },
  {
    id: '4',
    name: 'Brake & Tire Service',
    description: 'Reliable and fast brake and tire replacement and repair. Your safety is our top priority on the road.',
    provider: 'Quick Stop Auto',
    isValidated: true,
    category: 'Auto Repair',
  },
  {
    id: '5',
    name: 'Yoga & Meditation Classes',
    description: 'Find your inner peace with our group and private yoga and meditation sessions for all experience levels.',
    provider: 'Zenflow Studio',
    isValidated: false,
    category: 'Health & Wellness',
  },
  {
    id: '6',
    name: 'Custom Logo Design',
    description: 'Professional and unique logo design to help your brand stand out from the competition. We craft visual identities.',
    provider: 'Creative Sparks Inc.',
    isValidated: true,
    category: 'Creative Services',
  },
];
