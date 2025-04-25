export const getCards= async(itemsPerPage,skip)=>{
const response= await fetch(`https://dummyjson.com/products?limit=${itemsPerPage}&skip=${0}`)
const data=await response.json()
return data;
}