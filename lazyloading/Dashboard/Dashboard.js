import React,{Suspense,useState} from "react";
import "./Dashboard.css"

const ChartCom= React.lazy(()=>import("./Cartcomp.js"));
function Dashboard(){
    const [tab,setTab]=useState("home");
    return(
        <div className="tabs">
            
        </div>
    )

}