export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
}

export const categories = [
  "Lanches",
  "Porções",
  "Cervejas",
  "Bebidas",
  "Sucos",
  "Refrigerantes"
];

export const products: Product[] = [
  // LANCHES
  {
    id: "l1",
    name: "X-Tudo Boca Loca",
    description: "O rei da casa! Hambúrguer artesanal, bacon crocante, ovo, presunto, muçarela derretida, salsicha, alface fresca, tomate, milho, ervilha e a nossa famosa batata palha artesanal.",
    price: 34.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "l2",
    name: "X-Bacon Premium",
    description: "Hambúrguer suculento, muçarela, dose dupla de bacon crocante, alface americana e tomate cereja.",
    price: 26.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "l3",
    name: "X-Salada Classic",
    description: "Simples e perfeito. Hambúrguer de 180g, muçarela, alface, tomate e a exclusiva maionese Boca Loca.",
    price: 22.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "l4",
    name: "X-Egg Bacon",
    description: "A combinação perfeita de ovo frito na manteiga, fatias generosas de bacon e queijo muçarela.",
    price: 28.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "l5",
    name: "X-Frango Especial",
    description: "Filé de frango empanado crocante, muçarela, bacon, ovo e salada fresquinha no pão brioche.",
    price: 30.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "l6",
    name: "X-Picanha Gourmet",
    description: "Hambúrguer de picanha 200g, cheddar cremoso, cebola caramelizada e rúcula.",
    price: 38.90,
    category: "Lanches",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=800&auto=format&fit=crop"
  },

  // PORÇÕES
  {
    id: "p1",
    name: "Batata Suprema",
    description: "Porção grande de batatas rústicas com cheddar importado e bacon em cubos.",
    price: 39.00,
    category: "Porções",
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "p2",
    name: "Calabresa com Cebola",
    description: "Calabresa defumada acebolada, acompanhada de pão de alho e molho da casa.",
    price: 34.00,
    category: "Porções",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "p3",
    name: "Frango à Passarinho",
    description: "Frango crocante marinado no alho e ervas finas. Serve 2 pessoas.",
    price: 44.00,
    category: "Porções",
    image: "https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "p4",
    name: "Anéis de Cebola",
    description: "Oignons rings super crocantes com molho barbecue artesanal.",
    price: 28.00,
    category: "Porções",
    image: "https://images.unsplash.com/photo-1639024471283-035188835118?q=80&w=800&auto=format&fit=crop"
  },

  // CERVEJAS
  {
    id: "c1",
    name: "Crystal Lata",
    description: "Cerveja Crystal lata 350ml. Proibido para menores de 18 anos.",
    price: 4.00,
    category: "Cervejas",
    image: "https://www.distribuidoravp.com.br/loja/images/crystal_lata.png"
  },
  {
    id: "c2",
    name: "Antárctica Sub-Zero",
    description: "Lata 350ml super gelada. Proibido para menores de 18 anos.",
    price: 5.00,
    category: "Cervejas",
    image: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/22378/cerveja-antarctica-sub-zero-350ml-lata_57576.png"
  },
  {
    id: "c3",
    name: "Brahma Lata",
    description: "Lata 350ml. O sabor do Brasil. Proibido para menores de 18 anos.",
    price: 5.00,
    category: "Cervejas",
    image: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/22375/cerveja-brahma-chopp-350ml-lata_57567.png"
  },
  {
    id: "c4",
    name: "Antárctica Lata",
    description: "Lata 350ml. Tradição e qualidade. Proibido para menores de 18 anos.",
    price: 5.00,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1532635241-17e820acc59f?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "c5",
    name: "Skol Lata",
    description: "Lata 350ml. A que desce redondo. Proibido para menores de 18 anos.",
    price: 5.00,
    category: "Cervejas",
    image: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/22377/cerveja-skol-pilsen-350ml-lata_57573.png"
  },
  {
    id: "c6",
    name: "Heineken Long Neck",
    description: "330ml de puro malte. Proibido para menores de 18 anos.",
    price: 8.00,
    category: "Cervejas",
    image: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "c7",
    name: "Antárctica Original Lata",
    description: "Lata 350ml. Sabor encorpado e refrescante. Proibido para menores de 18 anos.",
    price: 7.00,
    category: "Cervejas",
    image: "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/22376/cerveja-antarctica-original-350ml-lata_57570.png"
  },

  // SUCOS
  {
    id: "s1",
    name: "Laranja Natural",
    description: "Suco extraído na hora, sem adição de açúcar (500ml).",
    price: 12.00,
    category: "Sucos",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s2",
    name: "Morango Silvestre",
    description: "Batido com leite condensado ou água. Refrescante e doce.",
    price: 15.00,
    category: "Sucos",
    image: "https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "s3",
    name: "Abacaxi com Hortelã",
    description: "A clássica combinação refrescante para acompanhar seu lanche.",
    price: 13.00,
    category: "Sucos",
    image: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=800&auto=format&fit=crop"
  },

  // REFRIGERANTES
  {
    id: "b1",
    name: "Coca-Cola 2 Litros",
    description: "Ideal para compartilhar com a família.",
    price: 16.00,
    category: "Refrigerantes",
    image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b2",
    name: "Coca-Cola Original",
    description: "Lata 350ml gelada trincando.",
    price: 7.00,
    category: "Refrigerantes",
    image: "https://images.unsplash.com/photo-1554866585-cd94860890b7?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "b3",
    name: "Guaraná Antarctica",
    description: "Lata 350ml. O sabor original do Brasil.",
    price: 7.00,
    category: "Refrigerantes",
    image: "https://images.unsplash.com/photo-1629203851022-382a21f373f5?q=80&w=800&auto=format&fit=crop"
  },

  // BEBIDAS
  {
    id: "be1",
    name: "Heineken Long Neck",
    description: "Cerveja premium super gelada.",
    price: 12.00,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1618885472179-5e474019f2a9?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: "be2",
    name: "Água Mineral",
    description: "Com ou sem gás (500ml).",
    price: 5.00,
    category: "Bebidas",
    image: "https://images.unsplash.com/photo-1560023907-5f339617ea30?q=80&w=800&auto=format&fit=crop"
  }
];
