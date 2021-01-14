import React, {useState, useEffect} from 'react';
import '../css/productoEditar.css';
import {useHistory} from "react-router-dom"
import { Form,Button, InputGroup} from 'react-bootstrap';
import firebase from '../config/firebase'
import AlertCustom from "../Components/AlertCustom"
function ProductoEditar(props){
    const [datos,setDatos] = useState({name:'',price:'',stock:'',description:''});
    const [alert,setAlert] = useState({variant:"",text:""});
    const history = useHistory();
    useEffect(
        () => {
            const id = props.match.params.id;
            firebase.db.doc("productos/"+id)
            .get()
            .then(doc=>{
                setDatos( doc.data() )
            })
    }, []); 
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
        const id = props.match.params.id;
        firebase.db.doc("productos/"+id)
        .set({
            name:datos.name,
            price:datos.price,
            stock:datos.stock,
            description:datos.description
        },{merge:true})
        .then(doc=>{
            console.log(doc)
            setAlert({variant:"success",text:"Producto Editado Correctamente!"})
            setTimeout(() => {
                history.push("/producto")
            }, 2000);
        })
        e.preventDefault();
    }
    const handleDelete = (e)=>{
        const id = props.match.params.id;
        console.log("Eliminar",id)
        firebase.db.doc("productos/"+id)
        .delete()
        .then(doc=>{
            console.log(doc)
            setAlert({variant:"success",text:"Producto Eliminado Correctamente!"})
            setTimeout(() => {
                history.push("/producto")
            }, 2000);
        })
    }
    return(
        <div>
            <Form className="editar" onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" name="name" value={datos.name} onChange={handleChange}  />
                </Form.Group>
                <InputGroup>
                <InputGroup.Prepend>
                    <InputGroup.Text>Descripcion:</InputGroup.Text>
                </InputGroup.Prepend>
                    <Form.Control as="textarea" aria-label="Descripcion" type="text" name="description" value={datos.description} onChange={handleChange}   />
                </InputGroup>
                <Form.Group >
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" name="price" value={datos.price} onChange={handleChange} />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Check type="number" name="stock" value={datos.stock} onChange={handleChange} />
                </Form.Group>
                
                <Button className="btn" variant="success" type="submit" value="Guardar">Guardar</Button>
                <Button className="btn" variant="secondary" onClick={handleDelete}>Eliminar</Button>
                <AlertCustom variant={alert.variant} text={alert.text}/>
            </Form>
        </div>
    )
}

export default ProductoEditar