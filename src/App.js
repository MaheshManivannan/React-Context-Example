import { createContext, useState } from "react";
import Component1 from "./Component1";
import Component2 from "./Component2";
import Component3 from "./Component3";
import Component4 from "./Component4";

export const userContext = createContext();
const App = () => {
  const [user,setUser] = useState("Rohit Sharma");
  return (
    <>
    <userContext.Provider value={{user}}>
      <h1>Hello {user} welcome !</h1>  
      <Component1 />    
      <Component2 />
      <Component3 />
      <Component4 />

    </userContext.Provider>
    </>
  )
}
export default App;