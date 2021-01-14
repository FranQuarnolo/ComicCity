import React from "react";
import { Button,Spinner } from 'react-bootstrap';

function ButtonWithLoading(props) {
    const{variant,type,loading,text} = props;
    return(
        <Button variant={variant || "primary"} type={type || "submit"} disabled={loading}>
            {
                loading && 
                <Spinner animation="border" variant="light" size="sm" />
            }
            {text || "Registrarse"}
        </Button>
    )     
    
}

export default ButtonWithLoading;