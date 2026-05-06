export interface Product {
  id: string;
  name: string;
  category: 'Women' | 'Men' | 'Accessories';
  price: number;
  description: string;
  features: string[];
  images: string[];
  colors: string[];
  isNew?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Align™ High-Rise Pant 25"',
    category: 'Women',
    price: 118,
    description: 'When feeling your best is your secret to performing your best. Our signature high-rise leggings are designed for yoga and beyond. Engineered with Nulu™ fabric for a buttery-soft, weightless feel.',
    features: ['Buttery-soft Nulu™ fabric', 'Four-way stretch', 'Hidden waistband pocket', 'High-rise coverage', 'Breathable and sweat-wicking'],
    images: [
      'https://images.lululemon.com/is/image/lululemon/LW5BPAS_041697_1?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      'https://images.lululemon.com/is/image/lululemon/LW5BPAS_041697_2?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    ],
    colors: ['Sage', 'Onyx', 'Stone'],
    isNew: true
  },
  {
    id: '2',
    name: 'Metal Vent Tech Short-Sleeve Shirt',
    category: 'Men',
    price: 78,
    description: 'Designed for running and training, this breathable shirt features seamless construction to minimize chafe. Silverescent® technology powered by X-STATIC® inhibits the growth of odor-causing bacteria.',
    features: ['Seamless construction', 'Silverescent® anti-odor technology', 'Breathable mesh', 'Reflective details', 'Recycled polyester'],
    images: [
      'https://images.lululemon.com/is/image/lululemon/LM3A96S_0001_1?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      'https://images.lululemon.com/is/image/lululemon/LM3A96S_0001_2?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    ],
    colors: ['Cloud', 'Navy', 'Graphite'],
    isNew: true
  },
  {
    id: '3',
    name: 'The Mat 5mm',
    category: 'Accessories',
    price: 98,
    description: 'Designed with a grippy top layer and cushioned natural rubber base to help you stay balanced from first pose to final savasana.',
    features: ['Polyurethane top layer', 'FSC certified rubber', 'Antimicrobial additive', 'Extra cushioning'],
    images: [
      'https://images.lululemon.com/is/image/lululemon/LU9AU4S_036763_1?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      'https://images.lululemon.com/is/image/lululemon/LU9AU4S_036763_2?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    ],
    colors: ['Sage', 'Blush'],
    isNew: false
  },
  {
    id: '4',
    name: 'Define Jacket (Nulu™)',
    category: 'Women',
    price: 118,
    description: 'So soft, it feels like a second skin. This slim-fit jacket is made from our signature Nulu™ fabric, offering lightweight warmth and a contoured look.',
    features: ['Buttery-soft Nulu™ fabric', 'Slim fit', 'Secure front pockets', 'Thumbholes and Cuffins™', 'Sweat-wicking'],
    images: [
      'https://images.lululemon.com/is/image/lululemon/LW3BEBS_0001_1?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72',
      'https://images.lululemon.com/is/image/lululemon/LW3BEBS_0001_3?wid=1080&op_usm=0.8,1,10,0&fmt=webp&qlt=80,1&fit=constrain,0&op_sharpen=0&resMode=sharp2&iccEmbed=0&printRes=72'
    ],
    colors: ['Stone', 'Midnight'],
    isNew: false
  }
];
