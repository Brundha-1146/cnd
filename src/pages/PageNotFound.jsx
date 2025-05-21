
import image from "../images/404.jpg"
import {Link,useNavigate} from "react-router-dom"
const PageNotFound=()=>{
    const navigate = useNavigate()
    const handileClick =()=>{
        console.log("Handile click fn called")
        navigate("/login")
    }
    return (
        <>
        </>
    )
}
export default PageNotFound