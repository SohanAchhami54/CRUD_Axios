
export const Card=({curElem,handleDelete,handleEdit,index})=>{
    const {id, title, body}=curElem;

    return(
  
        <>  
        <li className="w-100 min-h-[300px] bg-gray-700 text-amber-50 shadow-2xl rounded-2xl p-6">
        <section className=" flex flex-col gap-4 bg-gray-400">
            {/* <section className="flex flex-col"> */}
                   <h1>{index+1}.</h1>
                   <p>Title: {title}</p>
                   <p>News: {body} </p>
                   <section className="grid grid-cols-2 gap-10 px-10">
                    <button className="border-2 bg-blue-500"
                    onClick={()=>handleEdit(curElem)}>Edit</button>
                    <button className="border-2 bg-red-500 hover:bg-red-950 transition-all duration-900 ease-in delay-200" 
                    onClick={()=>handleDelete(id)}>Delete</button>
                   </section>
            {/* </section> */}
            
        </section>
            </li>
        </>
    )
}