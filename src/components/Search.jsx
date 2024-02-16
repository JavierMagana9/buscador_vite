
import { useEffect, useState } from "react";
import "../components/Search.css";
import { useForm } from "../hook/useForm";

export const Search = ({onNewCathegory}) => {
 //llamamos al hook
  const {dataForm, handleSubmit,} = useForm('')
//console.log(dataForm)
//console.log(onNewCathegory)
useEffect(()=>{
  onNewCathegory(dataForm)
}, [dataForm])
  

  return (  
      <div>
        <p>{dataForm}</p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="search"
            placeholder="Write here..."
            className="search-input"
          />

          <button type="submit" className="btn">
            Search
          </button>
        </form>
      </div>   
  );
};
