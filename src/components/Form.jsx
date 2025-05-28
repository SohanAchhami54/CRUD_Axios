import { useEffect, useState } from "react"
import { GetAdd } from "../api/PostApi";

export const Form=({state,setState,update, setUpdate})=>{
    const [form, setForm]=useState({
        title:"",
        body:"",
    });

  useEffect(()=>{
    update && setForm({
         title:update.title|| "",
         body:update.body ||"",
    })
  },[update]);
    
const handleChange=(e)=>{
    const {name,value}=e.target;
     setForm({...form,[name]:value});
    //  setForm((prev)=>{({...prev,[name]:value})});
}   
const addData=async()=>{
  const res= await GetAdd(form);
  if(res.status===201){
    setState([...state,res.data]);
     setForm({
        title:"",
        body:"",
    })
  }

}
const handleSubmit=(e)=>{
    e.preventDefault();
    addData();
   
}
    return(
        <>
         <section>
            <section className="flex justify-center ">
            
            <form onSubmit={handleSubmit}>
                <label htmlFor="title"></label>
            <input type="text"
            id="title"
            name="title"
            value={form.title}
            className="bg-white border-2 p-2"
            placeholder=" Add Title"
            onChange={handleChange}
            />
          <label htmlFor="body"></label>
              <input type="text" 
              id="body"
              name="body"
              value={form.body}
             className="bg-white border-2 p-2"
             placeholder="News"
             onChange={handleChange}
             />

             <button type="submit" className="bg-amber-500 px-4 py-2" >Add</button>
             </form>
         </section>
         </section>
        </>
    );
};