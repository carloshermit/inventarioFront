export interface Producto {
  productId?:number;
  description: string;
  price: number;
  quantity: number;
  category: {
    categoryId: number;
    description: string;
    state: boolean;
  };
  unit: {
    unitId: number;
    description: string;
    state: boolean;
  };
}
