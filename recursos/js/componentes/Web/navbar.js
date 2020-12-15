import React from 'react'
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Logo from '../../../img/logo.png'
import './navbar.scss'
import { URL } from '../../Variables'
const NavbarWeb = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={8} sm={4} md={4} className="animate__animated animate__zoomIn">
                        <a href={`${URL}`}><Image className="img_navbar" src={`${URL}${Logo}`} /></a>
                    </Col>
                </Row>
            </Container>
            <Container id="container_navbar_nuevo" className="my-2 d-none d-lg-block d-xl-block" fluid>
                <Container>
                    <div className="navbar_nuevo">
                        <a href={`${URL}Web/LicenciaNueva`}>EXAMEN MÉDICO BREVETE <br /> LICENCIA NUEVA</a>
                        <a href={`${URL}Web/Revalidacion`}> EXAMEN MÉDICO BREVETE <br /> REVALIDACIÓN</a>
                        <a href={`${URL}Web/ExamenMedicoBrevet`}>EXAMEN MÉDICO <br /> BREVETE</a>
                        <a href={`${URL}Web/ExamenMedico`}>RESERVA CITAS <br /> ONLINE</a>
                        <a href={`${URL}Web/ExamenMedicoBrevetA_IV`}>EXAMEN MÉDICO<br /> A-IV</a>
                        <a href={`${URL}Web/ExamenMedicoBrevetRecategorizacion`}>EXAMEN MÉDICO <br />RECATEGORIZACIÓN</a>
                        <a href={`${URL}Web/Ubicanos`}>UBÍCANOS</a>
                    </div>
                </Container>
            </Container>
            <Container className="my-2 d-block d-sm-block d-md-block d-lg-none d-xl-none">
                <Row>
                    <Col>
                        <Navbar expand="lg" className="navbar_nuevo_responsive">
                            <Navbar.Brand href="#home">Menú</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href={`${URL}Web/LicenciaNueva`}>EXAMEN MÉDICO BREVETE LICENCIA NUEVA</Nav.Link>
                                    <Nav.Link href={`${URL}Web/Revalidacion`}>EXAMEN MÉDICO BREVETE REVALIDACIÓN</Nav.Link>
                                    <Nav.Link href={`${URL}Web/ExamenMedico`}>RESERVA CITAS ONLINE</Nav.Link>
                                    <Nav.Link href={`${URL}Web/ExamenMedicoBrevet`}>EXAMEN MÉDICO BREVETE</Nav.Link>
                                    <Nav.Link href={`${URL}Web/ExamenMedicoBrevetA_IV`}>EXAMEN MÉDICO A-IV</Nav.Link>
                                    <Nav.Link href={`${URL}Web/ExamenMedicoBrevetRecategorizacion`}>EXAMEN MÉDICO RECATEGORIZACIÓN</Nav.Link>
                                    <Nav.Link href={`${URL}Web/Ubicanos`}>UBÍCANOS</Nav.Link>

                                </Nav>
                            </Navbar.Collapse>
                        </Navbar>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default NavbarWeb;
if (document.getElementById("navbar_web")) {
    ReactDOM.render(<NavbarWeb />, document.getElementById("navbar_web"));
}
