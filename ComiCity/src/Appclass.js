import React,{Component} from "react";
import Menu from "./Components/Menu";
// import Registro from "./Pages/Registro";
// import ProductoDetalle from "./Pages/ProductoDetalle";
import Home from "./Pages/Home";




class Appclass extends Component{
    
    render(){
       
        return(
            <div>
                <Menu/>
                {/* <Registro/>
                <ProductoDetalle/> */}
                <Home/>
                               
            </div>
        )
    }
}

export default Appclass;