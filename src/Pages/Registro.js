import React,{useState} from "react";
import { Form } from 'react-bootstrap';
import "../css/Registro.css"
import firebase from "../config/firebase"
import {useHistory} from "react-router-dom"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"

function Registro (){
    const [form, setForm] = useState({nombre:'',apellido:'',email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let password=form.password;    
        firebase.auth.createUserWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario creado",data.user.uid)
            setAlert({variant:"success",text:"Usuario creado"})
            firebase.db.collection("usuarios").add({
                nombre: form.nombre,
                apellido: form.apellido,
                email: form.email,
                userId: data.user.uid
              })
              .then((data)=>{
                    setSpinner(false);
                  console.log(data)
                  setTimeout(() => {
                    history.push("/");
                }, 2000);
                  
              })
              .catch((err)=>{
                console.log(err)
                setSpinner(false);
                })
        })
        .catch((error)=>{
            console.log("Error",error)
            setAlert({variant:"danger",text:"Hubo un error"})
            setSpinner(false);
        })
        
    }
    const handleChange = (e)=>{
  
        const target = e.target;
        const value = target.value
        const name = target.name;
    
    
        setForm({
            ...form,
            [name] : value});
        
      }
    return(
        <div>
            <Form className="registro" onSubmit={handleSubmit}>
                <FormGroup label="Nombre" type="text" placeholder="Ingrese su nombre" name="nombre" value={form.nombre} change={handleChange}/>
                <FormGroup label="Apellido" type="text" placeholder="Ingrese su apellido" name="apellido" value={form.apellido} change={handleChange}/>
                <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
                <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
                <ButtonWithLoading text="Registrarse" loading={spinner}/>  
                <AlertCustom variant={alert.variant} text={alert.text}/>
            </Form>
        </div>
    )
    
    
}

export default Registro;