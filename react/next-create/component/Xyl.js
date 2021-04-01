import { Children } from "react";

function Xyl({children,onClick}){
    return (
        <button onClick={onClick}>{children}</button>
    )
}
export default Xyl;