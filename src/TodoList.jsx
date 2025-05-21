import React from "react"
function Sample=({item,index})=>{
    const [count,setCount]=useState(0)
        return(
            <li className='p-2 m-0.5 bg-white' key={index}>{item}/>
            <div>  
                <h1 class="text-3xl font-bold underline text-red-600">My React App</h1>         
                <button className="bg-amber-400"onClick={()=>setCount(count+1)}>click here</button> 
                <p>Count : {count}</p>
            </div>
        )
}  
export default Sample