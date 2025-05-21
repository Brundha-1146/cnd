import { useState } from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";
const Dashboard = () => {
    const [data, setData] = useState("");
    const [todoList, setTodoList] = useState([]);
    const handleSubmit = () => {
        setTodoList([...todoList, data]); 
        setData("");
    }
    return (
        <div className="bg-amber-100 w-300px justify-center content-center">
            <div className="justify-items-center">
                <input 
                    style={{ width: "500px", padding:"10px",background:"red" }}
                    className="border-black border-3 m-6"
                    type="text" 
                    value={data} 
                    onChange={(e) => setData(e.target.value)}
                /><br/><br/>
                <button
                    style={{background:"#2563EB"}}
                    className="rounded-2x1 p-4 text-black"
                    onClick={handleSubmit}
                ><PiAirplaneTiltFill />
                    Add
                </button>
            </div>
            <ol>
                {todoList.length > 0 &&
                    todoList.map((item, index) => (
                        <li key={index}>{item}</li> 
                    ))
                }
            </ol>
        </div>
    )                                                                          
}
export default Dashboard
