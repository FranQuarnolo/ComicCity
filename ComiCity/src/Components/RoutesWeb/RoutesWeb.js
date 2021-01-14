import {Route} from 'react-router-dom';
import Login from "../../Pages/Login";
import Registro from "../../Pages/Registro";
import Producto from "../../Pages/ListadoProductos"
import ProductoDetalle from "../../Pages/ProductoDetalle"
import ProductoAlta from "../../Pages/ProductoAlta"
import ProductoEditar from "../../Pages/ProductoEditar"

function RoutesWeb() {
  
  return (
    <> 
      <Route path="/" exact component={Login}/>
      <Route path="/registro" exact component={Registro}/>
      <Route path="/producto" exact component={Producto}/>
      <Route path="/productos/:id" exact component={ProductoDetalle} />
      <Route path="/producto/alta" exact  component={ProductoAlta} />
      <Route path="/productos/editar/:id" exact  component={ProductoEditar} />
    </>
  );
}

export default RoutesWeb;
