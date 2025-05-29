import { useEffect, useState } from "react";
import { GetDelete, GetUpdate } from "../api/PostApi";
import { GetPost } from "../api/PostApi";
import { Card } from "../components/Card";
import { Form } from "../components/Form";

const Post=()=>{
const [state,setState]=useState([]);
const [update,setUpdate]=useState({});
const GetpostData=async()=>{
  try{
  const finalData=await GetPost();
  console.log(finalData.data);
    setState( finalData.data);
  }catch(error){
    console.log(error);
  }
}
//console.log(state);

useEffect(()=>{
  GetpostData();
},[])


const handleDelete=async(id)=>{
    try{
       const res= await GetDelete(id);
       console.log(res);
       if(res.status===200){
        const newUpdatedValue=state.filter((curElem)=>{
             return curElem.id!==id;
        });
        setState(newUpdatedValue);
       }
    }catch(error){
        console.log(error);
    }
};

const handleEdit=(curElem)=>{
   setUpdate(curElem);
};

// const handleAdd=async()=>{
//   try{
//     const res=await GetAdd();
//     console.log(res);

//   }catch(error){
//     console.log(error);
//   }
// }
  return(
    <>

    <Form state={state} setState={setState} update={update}  setUpdate={setUpdate} />  

    <ul className="flex flex-wrap justify-center items-center gap-6 px-4 py-6">
    {
      state.map((curElem,index)=>{
        return(
          <Card key={curElem.id} index={index} curElem={curElem} handleDelete={handleDelete} handleEdit={handleEdit} />
        );
      })
    }
  </ul>
    </>
  );
};

export default Post;