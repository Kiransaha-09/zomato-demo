// Api to render product list details
export const getCards= async(itemsPerPage,skip)=>{
const response= await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${skip}`)
const data=await response.json()
return data;
}