import {  Product, ProductPreview } from "../types";

//More readable way
/*
export const fetchProductsByCategory = async(category: string) => {
    const response = await fetch('/data/products.json');
    const data: Product[] = await response.json();
  
    const filteredData: ProductPreview[] = data
      .filter((product: Product) => product.category === category)
      .map(({ id, slug, name, category, categoryImages, description }) => ({
        id,
        slug,
        name,
        category,
        categoryImages,
        description,
      }));
    
    return filteredData;
}*/

//More efficient way?
export const fetchProductsByCategory = async(category: string) => {
    try {
      const response = await fetch('/data/products.json');
      const data: Product[] = await response.json();
      
      const filteredData: ProductPreview[] = data.reduce((acc: ProductPreview[], product: Product) => {
        if (product.category === category) {
          const { id, slug, name, category, categoryImage, new: newProduct, description } = product;
          acc.push({ id, slug, name, category, categoryImage, new: newProduct, description });
        }
        return acc;
      }, []);
      
      return filteredData;
    } catch (error) {
      console.log(error);
    }

}

export const fetchProductById = async(id: number) => {
  try {
    const response = await fetch('/data/products.json');
    const data  = await response.json();
    return data.find((product: Product ) => product.id === id);
  } catch (error) {
    console.log(error);
  }
};