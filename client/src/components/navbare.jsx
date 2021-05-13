import React from "React" ;
import { Link } from 'react-router-dom'
// import * as ReactBootstrap from "react-bootstrap"; 
import { Button, Navbar, Nav, NavDropdown , Form , FormControl} from 'react-bootstrap';



function  Navbare (props) {
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
                <Nav.Link ><Link to="/favoritelist">Favorite-List </ Link></Nav.Link>
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



// <nav className="navbar navbar-expand-lg navbar-light bg-light">
// <a className="navbar-brand" href="#">Navbar</a>
// <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>

// <div className="collapse navbar-collapse" id="navbarSupportedContent">
//    <ul className="navbar-nav mr-auto">
//         <li className="nav-item active">
//            <a className="nav-link" ><Link to="/">Home</Link> </a>
//        </li>
//         <li className="nav-item">
//            <a className="nav-link"  ><Link to="/signup">SingUp </ Link></a>
//        </li>
//        <li className="nav-item">
//            <a className="nav-link"  ><Link to="/login">Login </ Link></a>
//        </li>
//         <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                  Countries
//            </a>
//         <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//            <a className="dropdown-item" >Greece</a>
//            <a className="dropdown-item" >Morocco</a>
//            <a className="dropdown-item" >Spain</a>
//            <a className="dropdown-item" >Turkey</a>
//            <a className="dropdown-item" >Tunisia</a>
//         </div>
//         </li>
//         <li className="nav-item">
//            <a className="nav-link disabled"> <Link to="/favoritelist">favoriteList</Link> </a>
//         </li>
//     </ul>
// <form className="form-inline my-2 my-lg-0">
//    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
//     <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
// </form>
// </div>
// </nav>