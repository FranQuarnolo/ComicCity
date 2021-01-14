import React,{useState,useEffect} from "react";
import { Card,Button } from 'react-bootstrap';
import '../css/productoDetalle.css';
import {useHistory} from "react-router-dom"
import firebase from '../config/firebase';
import AlertCustom from "../Components/AlertCustom"



function ProductoDetalle(props){
    
    const [producto,setProducto] = useState({})
    const [alert,setAlert] = useState({variant:"",text:""});
    const history = useHistory();

    useEffect(
        ()=>{
            /*getProducto(props.match.params.id)
            .then((data)=>{
                console.log(data);
                setProducto(data[0])
            })*/
            firebase.db.doc("productos/"+props.match.params.id)
            .get()
            .then(doc=>{
                setProducto(doc.data())
            })
        }
    )
    const handleSubmit =  (e)=>{   
        setAlert({variant:"success",text:"GRACIAS POR SU COMPRA!"})
        setTimeout(() => {
            history.push("/producto")
        }, 2000);

        e.preventDefault();
    }
    return(
        <div>
            <h3>Detalle del Producto: {producto.name} </h3>
            <div className="Productos">
                <ul>
                    <li>
                        <Card style={{ width: '310px', height:'auto' }}>
                        <Card.Body>
                            <Card.Title>{producto.name}</Card.Title>
                            <Card.Text>{producto.description}</Card.Text>
                            <Card.Text>$ {producto.price}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">Stock: {producto.stock}</Card.Subtitle>
                        </Card.Body>         
                        </Card>
                        <Button id="btn" variant="outline-success" onClick={handleSubmit}>Comprar</Button>
                        <AlertCustom variant={alert.variant} text={alert.text}/>
                    </li> 
                </ul>        
            </div>    
        </div>
    )
}

export default ProductoDetalle;