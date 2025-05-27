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
        return api.delete(`/posts/${id}`);
    }