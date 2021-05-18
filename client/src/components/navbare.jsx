import React from "react";
import { Link } from 'react-router-dom'
import { Button, Navbar, Nav, NavDropdown , Form , FormControl} from 'react-bootstrap';



function Navbare(props) {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand ><Link to="/">Home</Link> </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Link to="/signup">SingUp </ Link></Nav.Link>
                        <Nav.Link ><Link to="/login">Login </ Link></Nav.Link>
                        <NavDropdown title="Countries" id="basic-nav-dropdown">
                            {[...props.country].map(element => <NavDropdown.Item ><Link to={"/countries/" + element}>{element}</Link> </NavDropdown.Item>)}
                        </NavDropdown>
                        <Nav.Link ><Link to="/FavouriteList">favourite-List </ Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

    )

}

export default Navbare


