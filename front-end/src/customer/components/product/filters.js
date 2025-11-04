export const filters = [
  {
    id: "color",
    name: "Color",
    options: [
      { value: "white", label: "White" },
      { value: "beige", label: "Beige" },
      { value: "blue", label: "Blue" },
      { value: "brown", label: "Brown" },
      { value: "green", label: "Green" },
      { value: "purple", label: "Purple" },
    ],
  },
  {
    id: "category",
    name: "Category",
    options: [
      { value: "new-arrivals", label: "New Arrivals" },
      { value: "sale", label: "Sale" },
      { value: "travel", label: "Travel" },
      { value: "organization", label: "Organization" },
      { value: "accessories", label: "Accessories" },
    ],
  },
  {
    id: "size",
    name: "Size",
    options: [
      { value: "2l", label: "2L" },
      { value: "6l", label: "6L" },
      { value: "12l", label: "12L" },
      { value: "18l", label: "18L" },
      { value: "20l", label: "20L" },
      { value: "40l", label: "40L" },
    ],
  },
];
export const singleFilter = [
  {
    id: "price",
    name: "Price",
    options: [
      { value: "159-399", label: "₹159 to ₹399" },
      { value: "399-999", label: "₹399 to ₹999" },
      { value: "999-1999", label: "₹999 to ₹1999" },
      { value: "1999-2999", label: "₹1999 to ₹2999" },
      { value: "2999-3999", label: "₹2999-₹3999" },
    ],
  },
  {
    id: "discount",
    name: "Discount Range",
    options: [
      { value: "10", label: "10% and Above" },
      { value: "20", label: "20% and Above" },
      { value: "40", label: "40% and Above" },
      { value: "60", label: "60% and Above" },
      { value: "80", label: "80% and Above" },
    ],
  },
  {
    id: "stock",
    name: "Availability",
    options: [
      { value: "in_stock", label: "In Stock" },
      { value: "out_of_stock", label: "Out Of Stock" },
    ],
  },
];
