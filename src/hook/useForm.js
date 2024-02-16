import { useState } from "react"


export const useForm = (valorInicial='') => {

    const [dataForm, setDataForm] = useState(valorInicial) 

    const [dataCard, setDataCard] = useState([]);
  

    const respuestaFetch = async () => {
      const {photos} = await consulta(dataForm);
      setDataCard(photos)   
    };
  

 const handleSubmit = (ev) => {
    ev.preventDefault()

  const data = ev.target.search.value
  


  setDataForm(data)
  respuestaFetch()
    
 }

  return {
    dataForm,
    handleSubmit
  }
}


