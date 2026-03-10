export interface ProductVariant {
  color: string;
  hex: string;
  image: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  type: string;
  variants: ProductVariant[];
}

export interface Category {
  id: string;
  label: string;
  products: Product[];
}

const v = (color: string, hex: string, file: string, folder: string): ProductVariant => ({
  color,
  hex,
  image: `/images/products/${folder}/${file.replace(/\.(png|jpe?g)$/i, ".webp")}`,
});

const preferredProductColors: Record<string, string> = {
  "corp-ambo": "Azul",
  "corp-buzo": "Azul",
  "corp-buzopolar": "Gris",
  "corp-camisachino": "Celeste y Beige",
  "corp-chaleco": "Negro",
  "corp-chomba": "Azul",
  "corp-sweater": "Azul",
  "ind-buzo": "Negro",
  "ind-buzocr": "Azul",
  "ind-buzopolar": "Gris",
  "ind-chaleco": "Gris",
  "ind-gorra": "Azul",
  "ind-pantalon": "Negro",
  "ind-ropatrabajo": "Azul",
  "seg-ambo": "Negro",
  "seg-buzopolar": "Negro",
  "seg-chaleco": "Negro",
  "seg-gorra": "Negro",
  "seg-rompevientos": "Negro",
  "edu-buzo": "Azul",
  "edu-buzocr": "Gris",
  "edu-camperita": "Negro",
  "edu-remera": "Blanco",
  "edu-rompevientos": "Azul",
  "edu-sweater": "Terracota",
  "gas-buzocr": "Negro",
  "gas-delantalpollera": "Blanco y Negro",
  "gas-delantalentero": "Negro",
  "gas-gorra": "Negro",
  "gas-remera": "Negro",
  "gas-trajecocina": "Blanco",
  "sal-ambos": "Celeste",
  "sal-ambosalt": "Blanco",
  "sal-saco": "Blanco",
};

const prioritizePreferredVariants = (variants: ProductVariant[], preferredColor?: string): ProductVariant[] => {
  if (!preferredColor) return variants;

  const preferredIndex = variants.findIndex((variant) => variant.color === preferredColor);
  if (preferredIndex <= 0) return variants;

  const nextVariants = [...variants];
  const [preferredVariant] = nextVariants.splice(preferredIndex, 1);

  return preferredVariant ? [preferredVariant, ...nextVariants] : variants;
};

const fullSetProducts = new Set([
  "corp-ambo",
  "corp-camisachino",
  "ind-ropatrabajo",
  "seg-ambo",
  "sal-ambos",
  "sal-ambosalt",
]);

const topOptionalProducts = new Set([
  "ind-pantalon",
]);

const enhanceProductDescription = (product: Product): string => {
  const baseDescription = product.description.trim().replace(/\.$/, "");
  const setNote = fullSetProducts.has(product.id)
    ? "Conjunto completo"
    : topOptionalProducts.has(product.id)
      ? "Con parte de arriba opcional"
      : "Con parte de abajo opcional";

  return `${baseDescription}. ${setNote}. Color a elección, con o sin bordado o DTF.`;
};

const rawCategories: Category[] = [
  {
    id: "corporativo",
    label: "Corporativo",
    products: [
      {
        id: "corp-ambo",
        name: "Ambo",
        description: "Conjunto formal para ambientes ejecutivos",
        type: "ambo",
        variants: [
          v("Azul", "#2563eb", "Ambo-Azul-Corporativo\.webp", "corporativo"),
          v("Negro", "#111", "Ambo-Negro-Corporativo\.webp", "corporativo"),
        ],
      },
      {
        id: "corp-camisachino",
        name: "Camisa y Chino",
        description: "Conjunto camisa y pantalón chino",
        type: "camisa",
        variants: [
          v("Blanco y Beige", "#f5f0e8", "CamisaYchino-BlancoYbeige-Corporativo\.webp", "corporativo"),
          v("Celeste y Beige", "#b5d8e8", "CamisaYchino-celesteYbeige-Corporativo\.webp", "corporativo"),
          v("Celeste y Gris", "#a8c8d8", "CamisaYchino-celesteYgris-Corporativo\.webp", "corporativo"),
          v("Gris y Azul", "#8898a8", "CamisaYchino-grisYazul-Corporativo\.webp", "corporativo"),
          v("Negro y Beige", "#3a3530", "CamisaYchino-negroYbeigeClaro-Corporativo\.webp", "corporativo"),
          v("Negro y Gris", "#2a2a2a", "CamisaYchino-negroYgris-Corporativo\.webp", "corporativo"),
        ],
      },
      {
        id: "corp-sweater",
        name: "Sweater",
        description: "Sweater tejido para look profesional",
        type: "sweater",
        variants: [
          v("Azul", "#2563eb", "Sweater-Azul-Corporativo\.webp", "corporativo"),
          v("Beige", "#d4a574", "Sweater-beige-Corporativo\.webp", "corporativo"),
          v("Blanco", "#e8e8e8", "Sweater-Blanco-Corporativo\.webp", "corporativo"),
          v("Gris", "#9ca3af", "Sweater-Gris-Corporativo\.webp", "corporativo"),
          v("Negro", "#111", "Sweater-Negro-Corporativo\.webp", "corporativo"),
        ],
      },
      {
        id: "corp-chaleco",
        name: "Chaleco",
        description: "Chaleco versátil para uniformar equipos",
        type: "chaleco",
        variants: [
          v("Azul", "#2563eb", "Chaleco-Azul-Corporativo\.webp", "corporativo"),
          v("Blanco", "#e8e8e8", "Chaleco-Blanco-Corporativo\.webp", "corporativo"),
          v("Gris", "#9ca3af", "Chaleco-Gris-Corporativo\.webp", "corporativo"),
          v("Negro", "#111", "Chaleco-Negro-Corporativo\.webp", "corporativo"),
        ],
      },
      {
        id: "corp-chomba",
        name: "Chomba",
        description: "Chomba clásica con cuello",
        type: "chomba",
        variants: [
          v("Azul", "#2563eb", "Chomba-azul-Corporativo\.webp", "corporativo"),
          v("Blanco", "#e8e8e8", "Chomba-blanco-Corporativo\.webp", "corporativo"),
          v("Gris", "#9ca3af", "Chomba-gris-Corporativo\.webp", "corporativo"),
          v("Negro", "#111", "Chomba-negra-Corporativo\.webp", "corporativo"),
          v("Verde", "#22c55e", "Chomba-verde-Corporativo\.webp", "corporativo"),
        ],
      },
      {
        id: "corp-buzo",
        name: "Buzo",
        description: "Buzo con cierre ideal para uso diario",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "Buzo-Azul-Corporativo\.webp", "corporativo"),
          v("Blanco", "#e8e8e8", "Buzo-Blanco-Corporativo\.webp", "corporativo"),
          v("Gris", "#9ca3af", "Buzo-Gris-Corporativo\.webp", "corporativo"),
          v("Negro", "#111", "Buzo-Negro-Corporativo\.webp", "corporativo"),
        ],
      },
      {
        id: "corp-buzopolar",
        name: "Buzo Polar",
        description: "Abrigo polar para días fríos",
        type: "buzo",
        variants: [
          v("Gris", "#9ca3af", "BuzoPolar-Gris-Corporativo\.webp", "corporativo"),
          v("Azul", "#2563eb", "BuzoPolar-Azul-Corporativo\.webp", "corporativo"),
          v("Negro", "#111", "BuzoPolar-Negro-Corporativo\.webp", "corporativo"),
        ],
      },
    ],
  },
  {
    id: "industria",
    label: "Industria",
    products: [
      {
        id: "ind-buzo",
        name: "Buzo",
        description: "Buzo resistente para trabajo pesado",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "Buzo-Azul-Industria\.webp", "industria"),
          v("Blanco", "#e8e8e8", "Buzo-Blanco-Industria\.webp", "industria"),
          v("Gris", "#9ca3af", "Buzo-Gris-Industria\.webp", "industria"),
          v("Negro", "#111", "Buzo-Negro-Industria\.webp", "industria"),
        ],
      },
      {
        id: "ind-buzocr",
        name: "Buzo Cuello Redondo",
        description: "Buzo cómodo de cuello redondo",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoCuelloRedondo-Azul-Industria\.webp", "industria"),
          v("Blanco", "#e8e8e8", "BuzoCuelloRedondo-Blanco-Industria\.webp", "industria"),
          v("Gris", "#9ca3af", "BuzoCuelloRedondo-Gris-Industria\.webp", "industria"),
          v("Negro", "#111", "BuzoCuelloRedondo-Negro-Industria\.webp", "industria"),
        ],
      },
      {
        id: "ind-buzopolar",
        name: "Buzo Polar",
        description: "Abrigo polar para entornos fríos",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoPolar-Azul-Industria\.webp", "industria"),
          v("Gris", "#9ca3af", "BuzoPolar-gris-Industria\.webp", "industria"),
          v("Negro", "#111", "BuzoPolar-negro-Industria\.webp", "industria"),
        ],
      },
      {
        id: "ind-chaleco",
        name: "Chaleco",
        description: "Chaleco de alta visibilidad",
        type: "chaleco",
        variants: [
          v("Azul", "#2563eb", "Chaleco-Azul-Seguridad\.webp", "industria"),
          v("Blanco", "#e8e8e8", "Chaleco-Blanco-Seguridad\.webp", "industria"),
          v("Gris", "#9ca3af", "Chaleco-Gris-Seguridad\.webp", "industria"),
          v("Negro", "#111", "Chaleco-Negro-Seguridad\.webp", "industria"),
        ],
      },
      {
        id: "ind-gorra",
        name: "Gorra",
        description: "Gorra de protección y confort",
        type: "gorra",
        variants: [
          v("Azul", "#2563eb", "Gorra-Azul-Industria\.webp", "industria"),
          v("Blanco", "#e8e8e8", "Gorra-Blanca-Industria\.webp", "industria"),
          v("Gris", "#9ca3af", "Gorra-Gris-Industria\.webp", "industria"),
          v("Negro", "#111", "Gorra-Negra-Industria\.webp", "industria"),
        ],
      },
      {
        id: "ind-pantalon",
        name: "Pantalón Cargo",
        description: "Pantalón resistente con bolsillos cargo",
        type: "pantalon",
        variants: [
          v("Azul", "#2563eb", "PantalonCargo-Azul-Industria\.webp", "industria"),
          v("Gris", "#9ca3af", "PantalonCargo-Gris-Industria\.webp", "industria"),
          v("Negro", "#111", "PantalonCargo-Negro-Industria\.webp", "industria"),
        ],
      },
      {
        id: "ind-ropatrabajo",
        name: "Ropa de Trabajo",
        description: "Conjunto integral de trabajo",
        type: "conjunto",
        variants: [
          v("Azul", "#2563eb", "Ropa de trabajo-Azul-Industria\.webp", "industria"),
          v("Gris", "#6b7280", "Ropa de trabajo-default-Industria\.webp", "industria"),
        ],
      },
    ],
  },
  {
    id: "seguridad",
    label: "Seguridad",
    products: [
      {
        id: "seg-ambo",
        name: "Ambo",
        description: "Uniforme completo para personal de seguridad",
        type: "ambo",
        variants: [
          v("Azul", "#2563eb", "Ambo-Azul-seguridad\.webp", "seguridad"),
          v("Negro", "#111", "Ambo-negro-seguridad\.webp", "seguridad"),
        ],
      },
      {
        id: "seg-buzopolar",
        name: "Buzo Polar",
        description: "Abrigo polar para guardias y vigilancia",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoPolar-Azul-seguridad\.webp", "seguridad"),
          v("Gris", "#9ca3af", "BuzoPolar-Gris-Seguridad\.webp", "seguridad"),
          v("Negro", "#111", "BuzoPolar-Negro-Seguridad\.webp", "seguridad"),
        ],
      },
      {
        id: "seg-chaleco",
        name: "Chaleco",
        description: "Chaleco identificatorio de seguridad",
        type: "chaleco",
        variants: [
          v("Azul", "#2563eb", "Chaleco-Azul-Seguridad\.webp", "seguridad"),
          v("Blanco", "#e8e8e8", "Chaleco-Blanco-Seguridad\.webp", "seguridad"),
          v("Gris", "#9ca3af", "Chaleco-Gris-Seguridad\.webp", "seguridad"),
          v("Negro", "#111", "Chaleco-Negro-Seguridad\.webp", "seguridad"),
        ],
      },
      {
        id: "seg-gorra",
        name: "Gorra",
        description: "Gorra para personal de vigilancia",
        type: "gorra",
        variants: [
          v("Azul", "#2563eb", "Gorra-Azul-Seguridad\.webp", "seguridad"),
          v("Blanco", "#e8e8e8", "Gorra-Blanca-Seguridad\.webp", "seguridad"),
          v("Gris", "#9ca3af", "Gorra-Gris-Seguridad\.webp", "seguridad"),
          v("Negro", "#111", "Gorra-Negra-Seguridad\.webp", "seguridad"),
        ],
      },
      {
        id: "seg-rompevientos",
        name: "Rompevientos",
        description: "Campera liviana e impermeable",
        type: "campera",
        variants: [
          v("Amarillo", "#eab308", "RompeVientos-Amarillo-seguridad\.webp", "seguridad"),
          v("Azul", "#2563eb", "RompeVientos-Azul-seguridad\.webp", "seguridad"),
          v("Blanco", "#e8e8e8", "RompeVientos-Blanco-seguridad\.webp", "seguridad"),
          v("Gris", "#9ca3af", "RompeVientos-Gris-seguridad\.webp", "seguridad"),
          v("Negro", "#111", "RompeVientos-Negro-seguridad\.webp", "seguridad"),
        ],
      },
    ],
  },
  {
    id: "educacion",
    label: "Educación",
    products: [
      {
        id: "edu-buzo",
        name: "Buzo",
        description: "Buzo con cierre para instituciones educativas",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "Buzo-Azul-Educacion\.webp", "educacion"),
          v("Blanco", "#e8e8e8", "Buzo-Blanco-Educacion\.webp", "educacion"),
          v("Gris", "#9ca3af", "Buzo-Gris-Educacion\.webp", "educacion"),
          v("Negro", "#111", "Buzo-Negro-Educacion\.webp", "educacion"),
        ],
      },
      {
        id: "edu-buzocr",
        name: "Buzo Cuello Redondo",
        description: "Buzo escolar de cuello redondo",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoCuelloRedondo-Azul-Educacion\.webp", "educacion"),
          v("Blanco", "#e8e8e8", "BuzoCuelloRedondo-Blanco-Educacion\.webp", "educacion"),
          v("Gris", "#9ca3af", "BuzoCuelloRedondo-Gris-Educacion\.webp", "educacion"),
          v("Negro", "#111", "BuzoCuelloRedondo-Negro-Educacion\.webp", "educacion"),
        ],
      },
      {
        id: "edu-camperita",
        name: "Camperita",
        description: "Campera liviana para el colegio",
        type: "campera",
        variants: [
          v("Azul", "#2563eb", "Camperita-Azul-Educacion\.webp", "educacion"),
          v("Blanco", "#e8e8e8", "Camperita-Blanca-Educacion\.webp", "educacion"),
          v("Gris", "#9ca3af", "Camperita-Gris-Educacion\.webp", "educacion"),
          v("Negro", "#111", "Camperita-Negra-Educacion\.webp", "educacion"),
        ],
      },
      {
        id: "edu-remera",
        name: "Remera",
        description: "Remera para uniforme escolar",
        type: "remera",
        variants: [
          v("Azul", "#2563eb", "Remera-Azul-Educacion\.webp", "educacion"),
          v("Blanco", "#e8e8e8", "Remera-Blanca-Educacion\.webp", "educacion"),
          v("Gris", "#9ca3af", "Remera-Gris-Educacion\.webp", "educacion"),
          v("Negro", "#111", "Remera-Negra-Educacion\.webp", "educacion"),
        ],
      },
      {
        id: "edu-rompevientos",
        name: "Rompevientos",
        description: "Campera impermeable escolar",
        type: "campera",
        variants: [
          v("Azul", "#2563eb", "RompeVientos-Azul-Educacion\.webp", "educacion"),
          v("Blanco", "#e8e8e8", "RompeVientos-Blanco-Educacion\.webp", "educacion"),
          v("Gris", "#9ca3af", "RompeVientos-Gris-Educacion\.webp", "educacion"),
          v("Negro", "#111", "RompeVientos-Negro-Educacion\.webp", "educacion"),
        ],
      },
      {
        id: "edu-sweater",
        name: "Sweater",
        description: "Sweater tejido para uniforme",
        type: "sweater",
        variants: [
          v("Azul", "#2563eb", "Sweater-Azul-Educacion\.webp", "educacion"),
          v("Terracota", "#d4a574", "Sweater-Beige-Educacion\.webp", "educacion"),
          v("Blanco", "#e8e8e8", "Sweater-Blanco-Educacion\.webp", "educacion"),
          v("Gris", "#9ca3af", "Sweater-Gris-Educacion\.webp", "educacion"),
          v("Negro", "#111", "Sweater-Negro-Educacion\.webp", "educacion"),
        ],
      },
    ],
  },
  {
    id: "gastronomia",
    label: "Gastronomía",
    products: [
      {
        id: "gas-buzocr",
        name: "Buzo Cuello Redondo",
        description: "Buzo cómodo para cocina y atención",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoCuelloRedondo-Azul-Gastronomia\.webp", "gastronomia"),
          v("Blanco", "#e8e8e8", "BuzoCuelloRedondo-Blanco-Gastronomia\.webp", "gastronomia"),
          v("Gris", "#9ca3af", "BuzoCuelloRedondo-Gris-Gastronomia\.webp", "gastronomia"),
          v("Negro", "#111", "BuzoCuelloRedondo-Negro-Gastronomia\.webp", "gastronomia"),
        ],
      },
      {
        id: "gas-delantalpollera",
        name: "Delantal Tipo Pollera",
        description: "Delantal medio cuerpo estilo pollera",
        type: "delantal",
        variants: [
          v("Blanco y Gris", "#e5e5e5", "DelantalTipoPollera-BlancoYgris-Gastronomia\.webp", "gastronomia"),
          v("Blanco y Negro", "#d0d0d0", "DelantalTipoPollera-BlancoYnegro-Gastronomia\.webp", "gastronomia"),
        ],
      },
      {
        id: "gas-delantalentero",
        name: "Delantal Entero",
        description: "Delantal de cuerpo completo",
        type: "delantal",
        variants: [
          v("Gris", "#9ca3af", "DelantarEnter-Gris-Gastronomia\.webp", "gastronomia"),
          v("Negro", "#111", "DelantarEnter-negro-Gastronomia\.webp", "gastronomia"),
        ],
      },
      {
        id: "gas-gorra",
        name: "Gorra",
        description: "Gorra para ambientes de cocina",
        type: "gorra",
        variants: [
          v("Azul", "#2563eb", "Gorra-Azul-Gastronomia\.webp", "gastronomia"),
          v("Blanco", "#e8e8e8", "Gorra-Blanco-Gastronomia\.webp", "gastronomia"),
          v("Negro", "#111", "Gorra-negra-Gastronomia\.webp", "gastronomia"),
        ],
      },
      {
        id: "gas-remera",
        name: "Remera",
        description: "Remera para personal de salón",
        type: "remera",
        variants: [
          v("Azul", "#2563eb", "Remera-Azul-Gastronomia\.webp", "gastronomia"),
          v("Blanco", "#e8e8e8", "Remera-Blanco-Gastronomia\.webp", "gastronomia"),
          v("Gris", "#9ca3af", "Remera-Gris-Gastronomia\.webp", "gastronomia"),
          v("Negro", "#111", "Remera-Negra-Gastronomia\.webp", "gastronomia"),
        ],
      },
      {
        id: "gas-trajecocina",
        name: "Traje de Cocina",
        description: "Chaqueta de chef profesional",
        type: "chaqueta",
        variants: [
          v("Blanco", "#e8e8e8", "TrajeCocina-Blanco-Gastronomia\.webp", "gastronomia"),
          v("Blanco y Negro", "#d0d0d0", "TrajeCocina-BlancoYnegro-Gastronomia\.webp", "gastronomia"),
        ],
      },
    ],
  },
  {
    id: "salud",
    label: "Salud",
    products: [
      {
        id: "sal-ambos",
        name: "Ambo Médico",
        description: "Ambo clásico para profesionales de la salud",
        type: "ambo",
        variants: [
          v("Azul", "#2563eb", "Ambos-Azul-Salud\.webp", "salud"),
          v("Blanco", "#e8e8e8", "Ambos-blanco-Salud\.webp", "salud"),
          v("Gris", "#9ca3af", "Ambos-gris-Salud\.webp", "salud"),
          v("Verde", "#22c55e", "Ambos-Verde-Salud\.webp", "salud"),
          v("Celeste", "#7dd3fc", "Ambos-default-Salud\.webp", "salud"),
        ],
      },
      {
        id: "sal-ambosalt",
        name: "Ambo Alternativo",
        description: "Ambo de diseño moderno",
        type: "ambo",
        variants: [
          v("Blanco", "#e8e8e8", "AmbosAlternativo-Blanco-Salud\.webp", "salud"),
          v("Gris", "#9ca3af", "AmbosAlternativo-Gris-Salud\.webp", "salud"),
          v("Negro", "#111", "AmbosAlternativo-Negro-Salud\.webp", "salud"),
        ],
      },
      {
        id: "sal-saco",
        name: "Saco Médico",
        description: "Saco para consultorio y hospital",
        type: "saco",
        variants: [
          v("Blanco", "#e8e8e8", "Saco-blanco-Salud\.webp", "salud"),
          v("Celeste", "#7dd3fc", "Saco-Celeste-Salud\.webp", "salud"),
          v("Negro", "#111", "Saco-Negro-Salud\.webp", "salud"),
          v("Verde", "#22c55e", "Saco-Verde-Salud\.webp", "salud"),
        ],
      },
    ],
  },
];

export const categories: Category[] = rawCategories.map((category) => ({
  ...category,
  products: category.products.map((product) => ({
    ...product,
    description: enhanceProductDescription(product),
    variants: prioritizePreferredVariants(product.variants, preferredProductColors[product.id]),
  })),
}));

export const prendaTypes = [
  { id: "todos", label: "Todos" },
  { id: "ambo", label: "Ambos" },
  { id: "buzo", label: "Buzos" },
  { id: "camisa", label: "Camisas" },
  { id: "chaleco", label: "Chalecos" },
  { id: "chomba", label: "Chombas" },
  { id: "sweater", label: "Sweaters" },
  { id: "remera", label: "Remeras" },
  { id: "campera", label: "Camperas" },
  { id: "gorra", label: "Gorras" },
  { id: "pantalon", label: "Pantalones" },
  { id: "delantal", label: "Delantales" },
  { id: "chaqueta", label: "Chaquetas" },
  { id: "saco", label: "Sacos" },
  { id: "conjunto", label: "Conjuntos" },
];

