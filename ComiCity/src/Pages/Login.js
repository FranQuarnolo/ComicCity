import React,{useState} from "react";
import {useHistory} from "react-router-dom"
import { Form } from 'react-bootstrap';
import '../css/login.css';
import firebase from "../config/firebase"
import ButtonWithLoading from "../Components/Forms/ButtonWithLoading"
import FormGroup from "../Components/Forms/FormGroup"
import AlertCustom from "../Components/AlertCustom"

function Login (){
    const [form, setForm] = useState({email:'',password:''});
    const [spinner, setSpinner] = useState(false);
    const [alert,setAlert] = useState({variant:"",text:""});
    const history = useHistory();
    const handleSubmit = (e)=>{
        e.preventDefault();     
        setSpinner(true);
        let email=form.email;
        let password=form.password;    
        firebase.auth.signInWithEmailAndPassword(email, password)
        .then((data)=>{
            console.log("Usuario logueado",data)
            setSpinner(false);
            setAlert({variant:"success",text:"Bienvenido/a"})
            history.push("/producto")
        })
        .catch((error)=>{
            console.log("Error",error)
            setSpinner(false);
            setAlert({variant:"danger",text:"Ha ocurrido un error"})
        })
        
    }
    const handleChange = (e)=>{
        const target = e.target;
        const value = target.value
        const name = target.name;
    
        setForm({
            ...form,
            [name] : value
        });
    }
    return(
        <div>
            <Form className="registro" onSubmit={handleSubmit}>
                <FormGroup label="Email" type="email" placeholder="Ingrese su email" name="email" value={form.email} change={handleChange}/>
                <FormGroup label="Contraseña" type="password" placeholder="Ingrese su contraseña" name="password" value={form.password} change={handleChange}/>
                    
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordar" />
                </Form.Group>

                <ButtonWithLoading variant="outline-primary" text="Login" loading={spinner}/>
                <AlertCustom variant={alert.variant} text={alert.text}/>
            </Form>
        </div>
    )
}

export default Login;