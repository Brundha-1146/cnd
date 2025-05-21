import Input from 'costuminputg'
import {useState} from 'react'
const Login=()=>{
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const handileSubmit=()=>{
        console.log(email)
        console.log(password)
    }
    return(
        <center> 
            <div className="items-center justify-center w-150 h-full mt-50px bg-red-100">
                <form onSubmit={handileSubmit}>
                    <Input
                        // style={{width:"100px"}}
                        type="email"
                        label="Email Address"
                        placeholder="Enter your mail id"
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <Input
                        type="password"
                        label="password"
                        placeholder="Enter your password"
                        className='w-[80%] h-10 border border-gray-300 rounded-md px-4'
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    /><br/>
                    <button className='bg-blue-600 w-full mt-[4px]'type='submit'>Login</button>
                </form>
            </div>
        </center>
    )
}
export default Login