export interface ICard {
  id: string;
  name: string;
  amount_type: string;
  price: number;
  discount_price: number;
  flag: any;
  discount: number;
  description: string
  available: number;
  number_of_sales: number;
  rating: number;
  rating_count: number;
  view_count: number;
  free_shipping: true;
  pickup: true;
  store: {
    id: number;
    brand_name: string;
    logo: string;
    latitude: number;
    longitude: number;
    store_location_name: string;
    working_time: string;
    rating: number;
    rating_count: number;
    free_shipping_distance: number;
  };
  images: [
    {
      id: number;
      product: number;
      image: string;
    }
  ];
  featured_product: boolean;
}
