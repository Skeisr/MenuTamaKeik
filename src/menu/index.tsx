import React  from "react";
import "./style.css"


interface tamakeikItem {
    price:number,
    name:string,
    description:string,
    type:string,
}

const tamakeikMenu : string[] = 
[
    "Tamal",
    "TamaKeik",
    "Lonche",
    "Capirotada",
    "Champurrado",
]




class MenuBar extends React.Component {

    render(){
        return(
            <div className = "list-container">
                <nav className = "list">
                        {tamakeikMenu.map(t=><div className = "list-item">{t}</div>)}
                </nav>
            </div>


        )
    }
}
export default MenuBar;