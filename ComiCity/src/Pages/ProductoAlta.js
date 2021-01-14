import React, {useState} from 'react';
import '../css/productoAlta.css';
import {useHistory} from "react-router-dom"
import { Form,InputGroup } from 'react-bootstrap';
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"
import firebase from '../config/firebase'

function ProductoAlta(){
    const [datos,setDatos] = useState({name:'',price:'',stock:'',description:''});
    const [spinner, setSpinner] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    const history = useHistory();
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name

        setDatos({
            ...datos,
            [name]:value
        })
    }
    const handleSubmit =  (e)=>{
        e.preventDefault();     
        setSpinner(true);
        firebase.db.collection('productos').add(datos)
        .then(doc=>{
            console.log(doc)
            console.log("Producto Agregado correctamente",doc)
            setSpinner(false);
            setAlert({variant:"success",text:"Producto agregado correctamente!"})
            setTimeout(() => {
                history.push("/producto")
            }, 3000);
        })
        .catch((error)=>{
            console.log("Error",error)
            setSpinner(false);
            setAlert({variant:"danger",text:"Ha ocurrido un error"})
        })
        
    }
    return(
        <div>
            <Form className="alta" onSubmit={handleSubmit}>
                <FormGroup label="Nombre" type="text" placeholder="Nombre Producto" name="name" value={datos.name} change={handleChange}/>
                <FormGroup label="Descripcion" type="text" as="textarea" placeholder="Descripcion Producto" name="description" value={datos.description} change={handleChange}/>
                <FormGroup label="Precio" type="number" placeholder="Precio" name="price" value={datos.price} change={handleChange}/>
                <FormGroup label="Stock" type="number" placeholder="Stock" name="stock" value={datos.stock} change={handleChange}/>

                <ButtonWithLoading text="Guardar" loading={spinner}/>
                <AlertCustom variant={alert.variant} text={alert.text}/>
            </Form>
        </div>
    )
}

export default ProductoAlta