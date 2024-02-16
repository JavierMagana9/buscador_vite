import React from 'react'

export const useResolve = () => {

    const [dataCard, setDataCard] = useState([]);
  

    const respuestaFetch = async () => {
      const {photos} = await consulta(cathegory);
      setDataCard(photos)   
    };
  
    
    useEffect(() => {
      respuestaFetch();
    }, []);

  return {
    dataCard
  }
}
