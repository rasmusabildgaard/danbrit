// Mock data for development without database

export type Product = {
  id: string
  sku: string
  oemNumber: string | null
  name: string
  description: string | null
  categoryId: string
  categoryName: string
  categorySlug: string
  ah: number | null
  voltage: number | null
  length: number | null
  width: number | null
  height: number | null
  technology: string | null
  price: number
  stock: number
  image: string
}

export type Category = {
  id: string
  name: string
  slug: string
  parentId: string | null
  productCount: number
  image: string
}

export type Order = {
  id: string
  bcOrderNumber: string
  status: string
  total: number
  currency: string
  createdAt: string
  items: {
    productId: string
    productName: string
    quantity: number
    unitPrice: number
  }[]
}

export const categories: Category[] = [
  {
    id: "1",
    name: "Startbatterier",
    slug: "startbatterier",
    parentId: null,
    productCount: 45,
    image: "/car-starter-battery-professional-product-photo.jpg",
  },
  {
    id: "2",
    name: "Industribatterier",
    slug: "industribatterier",
    parentId: null,
    productCount: 32,
    image: "/industrial-forklift-battery-professional-product-p.jpg",
  },
  {
    id: "3",
    name: "Marine & Fritid",
    slug: "marine-fritid",
    parentId: null,
    productCount: 28,
    image: "/marine-boat-battery-professional-product-photo.jpg",
  },
  {
    id: "4",
    name: "Solcelle & Backup",
    slug: "solcelle-backup",
    parentId: null,
    productCount: 18,
    image: "/solar-panel-battery-backup-professional-product-ph.jpg",
  },
  {
    id: "5",
    name: "Motorcykel & ATV",
    slug: "motorcykel-atv",
    parentId: null,
    productCount: 24,
    image: "/motorcycle-atv-battery-professional-product-photo.jpg",
  },
  {
    id: "6",
    name: "Lastbil & Bus",
    slug: "lastbil-bus",
    parentId: null,
    productCount: 15,
    image: "/truck-bus-heavy-duty-battery-professional-product-.jpg",
  },
]

export const products: Product[] = [
  {
    id: "1",
    sku: "DB-START-74",
    oemNumber: "0092S40080",
    name: "Bosch S4 008 74Ah 680A",
    description: "Højtydende startbatteri til personbiler. Ideel til biler med standard udstyr.",
    categoryId: "1",
    categoryName: "Startbatterier",
    categorySlug: "startbatterier",
    ah: 74,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    technology: "Bly-syre",
    price: 899,
    stock: 45,
    image: "/bosch-s4-car-battery-74ah-professional-product-pho.jpg",
  },
  {
    id: "2",
    sku: "DB-AGM-70",
    oemNumber: "0092S5A080",
    name: "Bosch S5 A08 AGM 70Ah 760A",
    description: "AGM-batteri til biler med start-stop og høj strømforbrug. Vedligeholdelsesfrit.",
    categoryId: "1",
    categoryName: "Startbatterier",
    categorySlug: "startbatterier",
    ah: 70,
    voltage: 12,
    length: 278,
    width: 175,
    height: 190,
    technology: "AGM",
    price: 1599,
    stock: 23,
    image: "/bosch-s5-agm-car-battery-70ah-professional-product.jpg",
  },
  {
    id: "3",
    sku: "DB-EFB-65",
    oemNumber: "0092S4E400",
    name: "Bosch S4 E40 EFB 65Ah 650A",
    description: "EFB-batteri designet til start-stop systemer. Forbedret cyklisk holdbarhed.",
    categoryId: "1",
    categoryName: "Startbatterier",
    categorySlug: "startbatterier",
    ah: 65,
    voltage: 12,
    length: 242,
    width: 175,
    height: 190,
    technology: "EFB",
    price: 1199,
    stock: 34,
    image: "/bosch-efb-car-battery-65ah-start-stop-professional.jpg",
  },
  {
    id: "4",
    sku: "DB-TRUCK-180",
    oemNumber: "0092T50770",
    name: "Bosch T5 077 180Ah 1000A",
    description: "Kraftigt batteri til lastbiler og busser. Lang levetid og høj startydelse.",
    categoryId: "6",
    categoryName: "Lastbil & Bus",
    categorySlug: "lastbil-bus",
    ah: 180,
    voltage: 12,
    length: 513,
    width: 223,
    height: 223,
    technology: "Bly-syre",
    price: 2899,
    stock: 12,
    image: "/bosch-t5-truck-battery-180ah-heavy-duty-profession.jpg",
  },
  {
    id: "5",
    sku: "DB-MARINE-100",
    oemNumber: null,
    name: "Varta LFD90 Marine 90Ah",
    description: "Deep cycle batteri til marine og fritidsbrug. Perfekt til påhængsmotorer og ekstraudstyr.",
    categoryId: "3",
    categoryName: "Marine & Fritid",
    categorySlug: "marine-fritid",
    ah: 90,
    voltage: 12,
    length: 353,
    width: 175,
    height: 190,
    technology: "Deep Cycle",
    price: 1899,
    stock: 18,
    image: "/varta-marine-boat-battery-90ah-deep-cycle-professi.jpg",
  },
  {
    id: "6",
    sku: "DB-SOLAR-200",
    oemNumber: null,
    name: "Victron GEL 200Ah",
    description: "GEL-batteri til solcelleanlæg og backup. Dyb afladning og lang levetid.",
    categoryId: "4",
    categoryName: "Solcelle & Backup",
    categorySlug: "solcelle-backup",
    ah: 200,
    voltage: 12,
    length: 522,
    width: 238,
    height: 240,
    technology: "GEL",
    price: 4299,
    stock: 8,
    image: "/solar-panel-battery-backup-professional-product-ph.jpg",
  },
  {
    id: "7",
    sku: "DB-MOTO-12",
    oemNumber: "YTX12-BS",
    name: "Yuasa YTX12-BS 12V 10Ah",
    description: "Vedligeholdelsesfrit motorcykelbatteri. Høj startydelse og lang levetid.",
    categoryId: "5",
    categoryName: "Motorcykel & ATV",
    categorySlug: "motorcykel-atv",
    ah: 10,
    voltage: 12,
    length: 150,
    width: 87,
    height: 130,
    technology: "AGM",
    price: 549,
    stock: 56,
    image: "/motorcycle-atv-battery-professional-product-photo.jpg",
  },
  {
    id: "8",
    sku: "DB-FORK-48",
    oemNumber: null,
    name: "Danbrit Traction 48V 625Ah",
    description: "Industrielt traktionsbatteri til gaffeltrucks. Høj kapacitet og driftsikkerhed.",
    categoryId: "2",
    categoryName: "Industribatterier",
    categorySlug: "industribatterier",
    ah: 625,
    voltage: 48,
    length: 827,
    width: 519,
    height: 784,
    technology: "Bly-syre",
    price: 28500,
    stock: 4,
    image: "/industrial-forklift-battery-professional-product-p.jpg",
  },
]

export const orders: Order[] = [
  {
    id: "1",
    bcOrderNumber: "SO-2024-001234",
    status: "Leveret",
    total: 5697,
    currency: "DKK",
    createdAt: "2024-11-28",
    items: [
      { productId: "1", productName: "Bosch S4 008 74Ah 680A", quantity: 5, unitPrice: 899 },
      { productId: "7", productName: "Yuasa YTX12-BS 12V 10Ah", quantity: 4, unitPrice: 549 },
    ],
  },
  {
    id: "2",
    bcOrderNumber: "SO-2024-001198",
    status: "Under behandling",
    total: 8697,
    currency: "DKK",
    createdAt: "2024-11-25",
    items: [{ productId: "4", productName: "Bosch T5 077 180Ah 1000A", quantity: 3, unitPrice: 2899 }],
  },
  {
    id: "3",
    bcOrderNumber: "SO-2024-001156",
    status: "Leveret",
    total: 12897,
    currency: "DKK",
    createdAt: "2024-11-20",
    items: [
      { productId: "2", productName: "Bosch S5 A08 AGM 70Ah 760A", quantity: 6, unitPrice: 1599 },
      { productId: "3", productName: "Bosch S4 E40 EFB 65Ah 650A", quantity: 3, unitPrice: 1199 },
    ],
  },
]

export const mockCustomer = {
  id: "cust-001",
  email: "info@autovaerksted.dk",
  customerNumber: "10045",
  name: "Hansens Autoværksted ApS",
  segment: "A-kunde",
  discountPercent: 15,
}
