const anotherFunction = async (url_api) => {
    try {

    } catch (error){

    }
}


import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Lógica de async: ir por los datos, luego esperar por ellos y finalmente retornarlos hacia el usuario
async function fetchData(urlApi) { //siempre async antes de function
    const response = await fetch(urlApi); //hacemos uso del fetch()
    const data = await response.json(); //estructura de los datos transformandolos en json
    return data; //retorna la información de la API que estamos solicitando
}

//también se puede colocar la palabra async antes del argumento y se usa arrow function
const anotherFunction = async (urlApi) => {
    //En try estará todo lo que queremos que suceda con la lógica de la aplicación
    try{
        const products = await fetchData(`${urlApi}/products`);
        const product = await fetchData(`${urlApi}/products/${products[0].id}`);
        const category = await fetchData(`${urlApi}/categories/${product.category.id}`);

        console.log(products);
        console.log(product.title);
        console.log(category.name);
    } catch(error) { //Atraparemos un error en caso de que haya uno
        console.error(error);
    }
}

anotherFunction(API); //se hace el llamado