import React,{Component} from "react";
import { Button,Nav,Navbar,Form,FormControl } from 'react-bootstrap';
import {NavLink, withRouter}  from 'react-router-dom'
import '../../css/menu.css';

class Index extends Component{
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active' : '';
    }
    render(){
        
        return(
            <>
                <div className="topBar"> 
                    <Navbar bg="dark" variant="dark" expand="lg">
                        <Navbar.Brand href="#home">E-comerce Quarñolo.F</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                            <ul className="nav navbar-nav navbar-right">
                            <li className={this.getNavLinkClass("/producto")}>
                                    <NavLink to="/producto" >Inicio</NavLink>
                                </li>
                                <li className={this.getNavLinkClass("/")}>
                                    <NavLink to="/">Login</NavLink>
                                </li>
                                <li className={this.getNavLinkClass("/registro")}>
                                    <NavLink to="/registro">Registro</NavLink>
                                </li>
                                <li className={this.getNavLinkClass("/producto/alta")}>
                                    <NavLink to="/producto/alta" >Añadir Producto</NavLink>
                                </li>    
                            </ul>
                            
                            </Nav>
                            <Form inline>
                            <FormControl type="text" placeholder="Buscar..." className="mr-sm-2" />
                            <Button variant="outline-success">Buscar</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Navbar>   
                   
                </div>


            </>
           
        )
    }
}
Index = withRouter(Index);
export default Index;