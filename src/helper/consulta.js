export const consulta = async (cathegory) => {
  try {
    console.log("en consulta",cathegory)
    
    const urlBase = "https://api.pexels.com/v1";

    const respuesta = await fetch(`${urlBase}/search?query=${cathegory}`, {
      headers: {
        authorization:
          "YE5JirgNLsRVP2nvqIAkoWNUeVIaB7NaRlYbWQz9WvLmYBc6247ivBMN",
      },
    });



    if(!respuesta.ok){
        throw "fallo de conexion"
        
    } else if(respuesta.ok){
        return await respuesta.json();
        

  }
} catch (error) {
    return "fallo en el servidor"
}
};
