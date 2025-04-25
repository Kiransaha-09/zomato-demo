export const fetchProductById = async (id)=>{
const response=await fetch(`https://dummyjson.com/products/${id}`);
const data=response.json();
return data;
};
