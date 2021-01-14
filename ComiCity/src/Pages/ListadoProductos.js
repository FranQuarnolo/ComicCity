import React,{Component} from "react";
import Productos from "../Components/Productos"
import firebase from "../config/firebase" 
import {Container,Spinner} from 'react-bootstrap'

class ListadoProductos extends Component{
    constructor(){
        super();
        this.state={
            productos:[],
            loading:true
        }
    }
    componentDidMount(){
        firebase.db.collection("productos")
        .get()
        .then(querySnapshot=>{
            this.setState({
                productos:querySnapshot.docs,
                loading:false
            })
        })
    }
    render(){
        if(this.state.loading){
            return(
                <Container>
                    <div style={{position:"fixed",top:"50%",left:"50%"}}>
                            <Spinner  animation="grow" />
                            <Spinner  animation="grow" />
                            <Spinner  animation="grow" />
                    </div>
                </Container>
            )
        }else{
            return(
                <div>
                    {this.state.productos.map((producto,i)=><Productos key={producto.id} productos={producto}/>)}
                </div>
            )
        }
        
    }
}

export default ListadoProductos;
