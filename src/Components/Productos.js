import {Link} from 'react-router-dom';
import { Card,Button} from 'react-bootstrap';
import '../css/productos.css';

function Productos(props) {
  return (
    
    <Card className="carta-body" style={{ width: '310px', height:'auto' }}>
      <Card.Body className="carta">
        <Card.Title>{props.productos.data().name}</Card.Title>
        <Card.Text>$ {props.productos.data().price}</Card.Text>
        <Card.Subtitle className="mb-2 text-muted">Stock: {props.productos.data().stock}</Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">Descripcion: {props.productos.data().description}</Card.Subtitle>
        <Link to={"/productos/"+props.productos.id}><Button id="btn" variant="info">Ver detalles</Button></Link>
        <Link to={"/productos/editar/"+props.productos.id}><Button id="btn" variant="outline-secondary">Editar</Button></Link>
      </Card.Body>         
    </Card>  
  );
}
export default Productos;
