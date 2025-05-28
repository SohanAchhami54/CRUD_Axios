import axios from "axios";
const api=axios.create({
    baseURL:"https://jsonplaceholder.typicode.com/",
});

//get method
export const GetPost=()=>{
  return api.get("/posts");
}
//delete method
    export const GetDelete=(id)=>{
        return api.delete(`posts/${id}`);
    }

 //add method and that is post method and it is also called create method
 export const GetAdd=(post)=>{
    return api.post("/posts",post );
 }   

 //this is to update the data 
 export const GetUpdate=(curElem)=>{
    return api.put(`posts/${curElem.id}`);
 }