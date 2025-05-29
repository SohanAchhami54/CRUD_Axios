import { useEffect, useState } from "react"
import { GetAdd, GetUpdate } from "../api/PostApi";

export const Form=({state,setState,update, setUpdate})=>{
    const [form, setForm]=useState({
        title:"",
        body:"",
    });


  let isEmpty=Object.keys(update).length===0;

  console.log(isEmpty);
  useEffect(()=>{
    if(update){
        setForm({
         title:update.title|| "",
         body:update.body ||"",
    });  
    }
  },[update]);

const handleChange=(e)=>{
    const {name,value}=e.target;
     setForm({...form,[name]:value});
    //  setForm((prev)=>{({...prev,[name]:value})});
}   
//add the data to the real server
const addData=async()=>{
  const res= await GetAdd(form);
  console.log(res);
  if(res.status===201){
    setState([...state,res.data]);
     setForm({
        title:"",
        body:"",
    })
  }
}
// update the data at the real server.
const updateData=async()=>{
try{
  const res=await GetUpdate(update.id,form);
  console.log(res);
  if(res.status===200){
      setState((curElem)=>{
     return curElem.map((curElem)=>{
      return curElem.id===res.data.id?res.data:curElem;
     });
  });
  setForm({
       title:"",
        body:"",
  })
  setUpdate({});
  }
 
}catch(error){
  console.log(error);
}

}
const handleSubmit=(e)=>{
    e.preventDefault();
    const action=e.nativeEvent.submitter.value;
    if (action=="Add"){
        addData();
    }else{
      updateData();
    }
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

             {/* <button type="submit" className="bg-amber-500 px-4 py-2" >Add</button> */}
             <button className="bg-amber-500 px-4 py-2" value={isEmpty?"Add":"Update"}>{isEmpty?"Add":"Update"} </button>

             </form>
         </section>
         </section>
        </>
    );
};