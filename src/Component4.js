import { useContext } from "react";
import { userContext } from "./App";

const Component4 = () => {
    const { user } = useContext(userContext);

    return (
        <>
        <h1>Component 4</h1>
        <h2>Hello {user} again </h2>
        </>
    )
}
export default Component4;