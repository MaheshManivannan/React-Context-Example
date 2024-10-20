import { useContext } from "react";
import { userContext } from "./App";


const Component1 = () => {
 const {user} = useContext(userContext)
    return (
        <>
        <h1>Component 1 {user}</h1>
        
        </>
    )
}
export default Component1;