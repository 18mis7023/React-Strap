import React,{ useState } from 'react'
import { Button,Alert ,Badge, UncontrolledAlert} from 'reactstrap';

function Button1() {
    
    return (
        <div>
            <Button color="danger">Danger!</Button>
            <Alert color="secondary">
                This is a primary alert — check it out!
            </Alert>
            
            <Badge color="dark" pill>Dark</Badge>
            
            <Badge color="warning" pill>Warning</Badge>
        </div>
    )
}

export default Button1
