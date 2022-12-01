import fetch from 'node-fetch';//
const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa
function fetchData(urlApi) {
  return fetch(urlApi);
};


fetchData(`${API}/products`)//el llamado
//se pueden anidar múltiples .then
  .then(response => response.json())//se hace la conversión a un objeto json
  .then(products => {
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)// solo se quiere mostrar el primer elemento de la primera solicitud
  })
  .then(response => response.json())//se vuelve traer la data
  .then(product => {
    console.log(product.title);
    return fetchData(`${API}/categories/${product.category.id}`)//se quiere mostrar la categoria de un producto en particular
  })
  .then(response => response.json())
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err))//detectar un error
  .finally(() => console.log('Finally'));//es opcional para mostrar que se terminó la solicitud




