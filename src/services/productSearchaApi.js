export const fetchSearchProduct = async (searchText, itemsPerPage, skip) => {
  const response = await fetch(
    `https://dummyjson.com/products/search?q=${searchText}&value=${itemsPerPage}&skip=${skip}`
  );
  const data = response.json();
  return data;
};
