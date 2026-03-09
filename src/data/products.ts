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
  image: `/images/products/${folder}/${file}`,
});

export const categories: Category[] = [
  {
    id: "corporativo",
    label: "Corporativo",
    products: [
      {
        id: "corp-ambo",
        name: "Ambo Corporativo",
        description: "Conjunto formal para ambientes ejecutivos",
        type: "ambo",
        variants: [
          v("Azul", "#2563eb", "Ambo-Azul-Corporativo.png", "corporativo"),
          v("Negro", "#111", "Ambo-Negro-Corporativo.png", "corporativo"),
        ],
      },
      {
        id: "corp-buzo",
        name: "Buzo Corporativo",
        description: "Buzo con cierre ideal para uso diario",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "Buzo-Azul-Corporativo.png", "corporativo"),
          v("Blanco", "#e8e8e8", "Buzo-Blanco-Corporativo.png", "corporativo"),
          v("Gris", "#9ca3af", "Buzo-Gris-Corporativo.png", "corporativo"),
          v("Negro", "#111", "Buzo-Negro-Corporativo.png", "corporativo"),
        ],
      },
      {
        id: "corp-buzopolar",
        name: "Buzo Polar",
        description: "Abrigo polar para días fríos",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoPolar-Azul-Corporativo.png", "corporativo"),
          v("Gris", "#9ca3af", "BuzoPolar-Gris-Corporativo.png", "corporativo"),
          v("Negro", "#111", "BuzoPolar-Negro-Corporativo.png", "corporativo"),
        ],
      },
      {
        id: "corp-camisachino",
        name: "Camisa y Chino",
        description: "Conjunto camisa y pantalón chino",
        type: "camisa",
        variants: [
          v("Blanco y Beige", "#f5f0e8", "CamisaYchino-BlancoYbeige-Corporativo.png", "corporativo"),
          v("Celeste y Beige", "#b5d8e8", "CamisaYchino-celesteYbeige-Corporativo.png", "corporativo"),
          v("Celeste y Gris", "#a8c8d8", "CamisaYchino-celesteYgris-Corporativo.png", "corporativo"),
          v("Gris y Azul", "#8898a8", "CamisaYchino-grisYazul-Corporativo.png", "corporativo"),
          v("Negro y Beige", "#3a3530", "CamisaYchino-negroYbeigeClaro-Corporativo.png", "corporativo"),
          v("Negro y Gris", "#2a2a2a", "CamisaYchino-negroYgris-Corporativo.png", "corporativo"),
        ],
      },
      {
        id: "corp-chaleco",
        name: "Chaleco Corporativo",
        description: "Chaleco versátil para uniformar equipos",
        type: "chaleco",
        variants: [
          v("Azul", "#2563eb", "Chaleco-Azul-Corporativo.png", "corporativo"),
          v("Blanco", "#e8e8e8", "Chaleco-Blanco-Corporativo.png", "corporativo"),
          v("Gris", "#9ca3af", "Chaleco-Gris-Corporativo.png", "corporativo"),
          v("Negro", "#111", "Chaleco-Negro-Corporativo.png", "corporativo"),
        ],
      },
      {
        id: "corp-chomba",
        name: "Chomba Corporativa",
        description: "Chomba clásica con cuello",
        type: "chomba",
        variants: [
          v("Azul", "#2563eb", "Chomba-azul-Corporativo.png", "corporativo"),
          v("Blanco", "#e8e8e8", "Chomba-blanco-Corporativo.png", "corporativo"),
          v("Gris", "#9ca3af", "Chomba-gris-Corporativo.png", "corporativo"),
          v("Negro", "#111", "Chomba-negra-Corporativo.png", "corporativo"),
          v("Verde", "#22c55e", "Chomba-verde-Corporativo.png", "corporativo"),
        ],
      },
      {
        id: "corp-sweater",
        name: "Sweater Corporativo",
        description: "Sweater tejido para look profesional",
        type: "sweater",
        variants: [
          v("Azul", "#2563eb", "Sweater-Azul-Corporativo.png", "corporativo"),
          v("Beige", "#d4a574", "Sweater-beige-Corporativo.png", "corporativo"),
          v("Blanco", "#e8e8e8", "Sweater-Blanco-Corporativo.png", "corporativo"),
          v("Gris", "#9ca3af", "Sweater-Gris-Corporativo.png", "corporativo"),
          v("Negro", "#111", "Sweater-Negro-Corporativo.png", "corporativo"),
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
        name: "Buzo Industrial",
        description: "Buzo resistente para trabajo pesado",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "Buzo-Azul-Industria.png", "industria"),
          v("Blanco", "#e8e8e8", "Buzo-Blanco-Industria.png", "industria"),
          v("Gris", "#9ca3af", "Buzo-Gris-Industria.png", "industria"),
          v("Negro", "#111", "Buzo-Negro-Industria.png", "industria"),
        ],
      },
      {
        id: "ind-buzocr",
        name: "Buzo Cuello Redondo",
        description: "Buzo cómodo de cuello redondo",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoCuelloRedondo-Azul-Industria.png", "industria"),
          v("Blanco", "#e8e8e8", "BuzoCuelloRedondo-Blanco-Industria.png", "industria"),
          v("Gris", "#9ca3af", "BuzoCuelloRedondo-Gris-Industria.png", "industria"),
          v("Negro", "#111", "BuzoCuelloRedondo-Negro-Industria.png", "industria"),
        ],
      },
      {
        id: "ind-buzopolar",
        name: "Buzo Polar",
        description: "Abrigo polar para entornos fríos",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoPolar-Azul-Industria.png", "industria"),
          v("Gris", "#9ca3af", "BuzoPolar-gris-Industria.png", "industria"),
          v("Negro", "#111", "BuzoPolar-negro-Industria.png", "industria"),
        ],
      },
      {
        id: "ind-chaleco",
        name: "Chaleco Industrial",
        description: "Chaleco de alta visibilidad",
        type: "chaleco",
        variants: [
          v("Azul", "#2563eb", "Chaleco-Azul-Seguridad.png", "industria"),
          v("Blanco", "#e8e8e8", "Chaleco-Blanco-Seguridad.png", "industria"),
          v("Gris", "#9ca3af", "Chaleco-Gris-Seguridad.png", "industria"),
          v("Negro", "#111", "Chaleco-Negro-Seguridad.png", "industria"),
        ],
      },
      {
        id: "ind-gorra",
        name: "Gorra Industrial",
        description: "Gorra de protección y confort",
        type: "gorra",
        variants: [
          v("Azul", "#2563eb", "Gorra-Azul-Industria.png", "industria"),
          v("Blanco", "#e8e8e8", "Gorra-Blanca-Industria.png", "industria"),
          v("Gris", "#9ca3af", "Gorra-Gris-Industria.png", "industria"),
          v("Negro", "#111", "Gorra-Negra-Industria.png", "industria"),
        ],
      },
      {
        id: "ind-pantalon",
        name: "Pantalón Cargo",
        description: "Pantalón resistente con bolsillos cargo",
        type: "pantalon",
        variants: [
          v("Azul", "#2563eb", "PantalonCargo-Azul-Industria.png", "industria"),
          v("Gris", "#9ca3af", "PantalonCargo-Gris-Industria.png", "industria"),
          v("Negro", "#111", "PantalonCargo-Negro-Industria.png", "industria"),
        ],
      },
      {
        id: "ind-ropatrabajo",
        name: "Ropa de Trabajo",
        description: "Conjunto integral de trabajo",
        type: "conjunto",
        variants: [
          v("Azul", "#2563eb", "Ropa de trabajo-Azul-Industria.png", "industria"),
          v("Gris", "#6b7280", "Ropa de trabajo-default-Industria.png", "industria"),
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
        name: "Ambo de Seguridad",
        description: "Uniforme completo para personal de seguridad",
        type: "ambo",
        variants: [
          v("Azul", "#2563eb", "Ambo-Azul-seguridad.png", "seguridad"),
          v("Negro", "#111", "Ambo-negro-seguridad.png", "seguridad"),
        ],
      },
      {
        id: "seg-buzopolar",
        name: "Buzo Polar",
        description: "Abrigo polar para guardias y vigilancia",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoPolar-Azul-seguridad.png", "seguridad"),
          v("Gris", "#9ca3af", "BuzoPolar-Gris-Seguridad.png", "seguridad"),
          v("Negro", "#111", "BuzoPolar-Negro-Seguridad.png", "seguridad"),
        ],
      },
      {
        id: "seg-chaleco",
        name: "Chaleco de Seguridad",
        description: "Chaleco identificatorio de seguridad",
        type: "chaleco",
        variants: [
          v("Azul", "#2563eb", "Chaleco-Azul-Seguridad.png", "seguridad"),
          v("Blanco", "#e8e8e8", "Chaleco-Blanco-Seguridad.png", "seguridad"),
          v("Gris", "#9ca3af", "Chaleco-Gris-Seguridad.png", "seguridad"),
          v("Negro", "#111", "Chaleco-Negro-Seguridad.png", "seguridad"),
        ],
      },
      {
        id: "seg-gorra",
        name: "Gorra de Seguridad",
        description: "Gorra para personal de vigilancia",
        type: "gorra",
        variants: [
          v("Azul", "#2563eb", "Gorra-Azul-Seguridad.png", "seguridad"),
          v("Blanco", "#e8e8e8", "Gorra-Blanca-Seguridad.png", "seguridad"),
          v("Gris", "#9ca3af", "Gorra-Gris-Seguridad.png", "seguridad"),
          v("Negro", "#111", "Gorra-Negra-Seguridad.png", "seguridad"),
        ],
      },
      {
        id: "seg-rompevientos",
        name: "Rompevientos",
        description: "Campera liviana e impermeable",
        type: "campera",
        variants: [
          v("Amarillo", "#eab308", "RompeVientos-Amarillo-seguridad.png", "seguridad"),
          v("Azul", "#2563eb", "RompeVientos-Azul-seguridad.png", "seguridad"),
          v("Blanco", "#e8e8e8", "RompeVientos-Blanco-seguridad.png", "seguridad"),
          v("Gris", "#9ca3af", "RompeVientos-Gris-seguridad.png", "seguridad"),
          v("Negro", "#111", "RompeVientos-Negro-seguridad.png", "seguridad"),
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
        name: "Buzo Escolar",
        description: "Buzo con cierre para instituciones educativas",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "Buzo-Azul-Educacion.png", "educacion"),
          v("Blanco", "#e8e8e8", "Buzo-Blanco-Educacion.png", "educacion"),
          v("Gris", "#9ca3af", "Buzo-Gris-Educacion.png", "educacion"),
          v("Negro", "#111", "Buzo-Negro-Educacion.png", "educacion"),
        ],
      },
      {
        id: "edu-buzocr",
        name: "Buzo Cuello Redondo",
        description: "Buzo escolar de cuello redondo",
        type: "buzo",
        variants: [
          v("Azul", "#2563eb", "BuzoCuelloRedondo-Azul-Educacion.png", "educacion"),
          v("Blanco", "#e8e8e8", "BuzoCuelloRedondo-Blanco-Educacion.png", "educacion"),
          v("Gris", "#9ca3af", "BuzoCuelloRedondo-Gris-Educacion.png", "educacion"),
          v("Negro", "#111", "BuzoCuelloRedondo-Negro-Educacion.png", "educacion"),
        ],
      },
      {
        id: "edu-camperita",
        name: "Camperita Escolar",
        description: "Campera liviana para el colegio",
        type: "campera",
        variants: [
          v("Azul", "#2563eb", "Camperita-Azul-Educacion.png", "educacion"),
          v("Blanco", "#e8e8e8", "Camperita-Blanca-Educacion.png", "educacion"),
          v("Gris", "#9ca3af", "Camperita-Gris-Educacion.png", "educacion"),
          v("Negro", "#111", "Camperita-Negra-Educacion.png", "educacion"),
        ],
      },
      {
        id: "edu-remera",
        name: "Remera Escolar",
        description: "Remera para uniforme escolar",
        type: "remera",
        variants: [
          v("Azul", "#2563eb", "Remera-Azul-Educacion.png", "educacion"),
          v("Blanco", "#e8e8e8", "Remera-Blanca-Educacion.png", "educacion"),
          v("Gris", "#9ca3af", "Remera-Gris-Educacion.png", "educacion"),
          v("Negro", "#111", "Remera-Negra-Educacion.png", "educacion"),
        ],
      },
      {
        id: "edu-rompevientos",
        name: "Rompevientos Escolar",
        description: "Campera impermeable escolar",
        type: "campera",
        variants: [
          v("Azul", "#2563eb", "RompeVientos-Azul-Educacion.png", "educacion"),
          v("Blanco", "#e8e8e8", "RompeVientos-Blanco-Educacion.png", "educacion"),
          v("Gris", "#9ca3af", "RompeVientos-Gris-Educacion.png", "educacion"),
          v("Negro", "#111", "RompeVientos-Negro-Educacion.png", "educacion"),
        ],
      },
      {
        id: "edu-sweater",
        name: "Sweater Escolar",
        description: "Sweater tejido para uniforme",
        type: "sweater",
        variants: [
          v("Azul", "#2563eb", "Sweater-Azul-Educacion.png", "educacion"),
          v("Beige", "#d4a574", "Sweater-Beige-Educacion.png", "educacion"),
          v("Blanco", "#e8e8e8", "Sweater-Blanco-Educacion.png", "educacion"),
          v("Gris", "#9ca3af", "Sweater-Gris-Educacion.png", "educacion"),
          v("Negro", "#111", "Sweater-Negro-Educacion.png", "educacion"),
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
          v("Azul", "#2563eb", "BuzoCuelloRedondo-Azul-Gastronomia.png", "gastronomia"),
          v("Blanco", "#e8e8e8", "BuzoCuelloRedondo-Blanco-Gastronomia.png", "gastronomia"),
          v("Gris", "#9ca3af", "BuzoCuelloRedondo-Gris-Gastronomia.png", "gastronomia"),
          v("Negro", "#111", "BuzoCuelloRedondo-Negro-Gastronomia.png", "gastronomia"),
        ],
      },
      {
        id: "gas-delantalpollera",
        name: "Delantal Tipo Pollera",
        description: "Delantal medio cuerpo estilo pollera",
        type: "delantal",
        variants: [
          v("Blanco y Gris", "#e5e5e5", "DelantalTipoPollera-BlancoYgris-Gastronomia.png", "gastronomia"),
          v("Blanco y Negro", "#d0d0d0", "DelantalTipoPollera-BlancoYnegro-Gastronomia.png", "gastronomia"),
        ],
      },
      {
        id: "gas-delantalentero",
        name: "Delantal Entero",
        description: "Delantal de cuerpo completo",
        type: "delantal",
        variants: [
          v("Gris", "#9ca3af", "DelantarEnter-Gris-Gastronomia.png", "gastronomia"),
          v("Negro", "#111", "DelantarEnter-negro-Gastronomia.png", "gastronomia"),
        ],
      },
      {
        id: "gas-gorra",
        name: "Gorra Gastronómica",
        description: "Gorra para ambientes de cocina",
        type: "gorra",
        variants: [
          v("Azul", "#2563eb", "Gorra-Azul-Gastronomia.png", "gastronomia"),
          v("Blanco", "#e8e8e8", "Gorra-Blanco-Gastronomia.png", "gastronomia"),
          v("Negro", "#111", "Gorra-negra-Gastronomia.png", "gastronomia"),
        ],
      },
      {
        id: "gas-remera",
        name: "Remera Gastronómica",
        description: "Remera para personal de salón",
        type: "remera",
        variants: [
          v("Azul", "#2563eb", "Remera-Azul-Gastronomia.png", "gastronomia"),
          v("Blanco", "#e8e8e8", "Remera-Blanco-Gastronomia.png", "gastronomia"),
          v("Gris", "#9ca3af", "Remera-Gris-Gastronomia.png", "gastronomia"),
          v("Negro", "#111", "Remera-Negra-Gastronomia.png", "gastronomia"),
        ],
      },
      {
        id: "gas-trajecocina",
        name: "Traje de Cocina",
        description: "Chaqueta de chef profesional",
        type: "chaqueta",
        variants: [
          v("Blanco", "#e8e8e8", "TrajeCocina-Blanco-Gastronomia.png", "gastronomia"),
          v("Blanco y Negro", "#d0d0d0", "TrajeCocina-BlancoYnegro-Gastronomia.png", "gastronomia"),
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
          v("Azul", "#2563eb", "Ambos-Azul-Salud.png", "salud"),
          v("Blanco", "#e8e8e8", "Ambos-blanco-Salud.png", "salud"),
          v("Gris", "#9ca3af", "Ambos-gris-Salud.png", "salud"),
          v("Verde", "#22c55e", "Ambos-Verde-Salud.png", "salud"),
          v("Celeste", "#7dd3fc", "Ambos-default-Salud.png", "salud"),
        ],
      },
      {
        id: "sal-ambosalt",
        name: "Ambo Alternativo",
        description: "Ambo de diseño moderno",
        type: "ambo",
        variants: [
          v("Blanco", "#e8e8e8", "AmbosAlternativo-Blanco-Salud.png", "salud"),
          v("Gris", "#9ca3af", "AmbosAlternativo-Gris-Salud.png", "salud"),
          v("Negro", "#111", "AmbosAlternativo-Negro-Salud.png", "salud"),
        ],
      },
      {
        id: "sal-saco",
        name: "Saco Médico",
        description: "Saco para consultorio y hospital",
        type: "saco",
        variants: [
          v("Blanco", "#e8e8e8", "Saco-blanco-Salud.png", "salud"),
          v("Celeste", "#7dd3fc", "Saco-Celeste-Salud.png", "salud"),
          v("Negro", "#111", "Saco-Negro-Salud.png", "salud"),
          v("Verde", "#22c55e", "Saco-Verde-Salud.png", "salud"),
        ],
      },
    ],
  },
];

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
