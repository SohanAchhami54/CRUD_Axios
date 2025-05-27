import { useEffect, useState } from "react";
import { GetDelete } from "../api/PostApi";
import { GetPost } from "../api/PostApi";
import { Card } from "../components/Card";

const Post=()=>{
const [state,setState]=useState([]);
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
            const res=await GetDelete(id);
              console.log(res);
              if(res.status===200){
                    const newUpdatedPost=state.filter((curElem)=>{
                        return curElem.id!==id;
                    });
                    setState(newUpdatedPost);
                
              }
        }catch(error){
            console.log(error);
        }
            
           }

  return(
    <>
   <h1 className="text-7xl">Hello my name is sohan achhami.</h1>     
  <ul className="flex flex-wrap justify-center items-center gap-6 px-4 py-6">
    {
      state.map((curElem)=>{
        return(
          <Card key={curElem.id} curElem={curElem} handleDelete={handleDelete} />
        );
      })
    }
  </ul>
    </>
  );
};

export default Post;