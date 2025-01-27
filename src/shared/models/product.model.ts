export interface Product {
  id: number
  name: string
  nameShort: string
  description: string
  descriptionShort: string
  price: number
  available: number
  link: string | {
    type: string
    value: string
  }
  state: "available" | "sold_out"
  image: {
    source: string
    altText?: string
  }
}