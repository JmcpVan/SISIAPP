import type { Service } from './types';

export const services: Service[] = [
  {
    id: '1',
    name: 'Jardinería Profesional',
    description: 'Cuidado experto del césped, diseño de jardines y servicios de mantenimiento. Hacemos que tus espacios verdes florezcan con soluciones orgánicas.',
    provider: 'Pulgar Verde Paisajismo',
    isValidated: true,
    category: 'Jardinería',
  },
  {
    id: '2',
    name: 'Preparación de Comidas Gourmet',
    description: 'Comidas deliciosas, saludables y listas para comer entregadas en tu puerta. Planes semanales personalizables para profesionales ocupados.',
    provider: 'La Mesa del Chef',
    isValidated: true,
    category: 'Comida y Restaurantes',
  },
  {
    id: '3',
    name: 'Pintura de Interiores',
    description: 'Servicios de pintura de interiores de alta calidad para hogares y oficinas. Damos color a tu vida con precisión y cuidado.',
    provider: 'Pintores Acabado Perfecto',
    isValidated: false,
    category: 'Servicios del Hogar',
  },
  {
    id: '4',
    name: 'Servicio de Frenos y Llantas',
    description: 'Reemplazo y reparación de frenos y llantas de forma fiable y rápida. Tu seguridad es nuestra máxima prioridad en la carretera.',
    provider: 'Parada Rápida Auto',
    isValidated: true,
    category: 'Reparación de Autos',
  },
  {
    id: '5',
    name: 'Clases de Yoga y Meditación',
    description: 'Encuentra tu paz interior con nuestras sesiones grupales y privadas de yoga y meditación para todos los niveles de experiencia.',
    provider: 'Estudio Zenflow',
    isValidated: false,
    category: 'Salud y Bienestar',
  },
  {
    id: '6',
    name: 'Diseño de Logo Personalizado',
    description: 'Diseño de logos profesional y único para ayudar a que tu marca se destaque de la competencia. Creamos identidades visuales.',
    provider: 'Chispas Creativas Inc.',
    isValidated: true,
    category: 'Servicios Creativos',
  },
];
