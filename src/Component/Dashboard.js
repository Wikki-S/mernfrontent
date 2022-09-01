import React from "react";
import Header from "./Header";



function Dashboard(props) {

    let value = JSON.parse(localStorage.getItem('data'));
    let bindName = value.firstName;
    if(bindName === "") {
        bindName = "admin";
    }
    console.log(bindName)
    
    return (
        <div>
            <Header bindName={bindName}/>

           
        </div>
    );
    }

   
export default Dashboard ;