import React from 'react'
import ReactDOM from "react-dom";
import './footer.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { DIRECCION, HORARIO, CELULAR, CORREO,URL } from '../../Variables'
const FooterWeb = () => {
    return (
        <>
            <Container className="footer_web" fluid>
                <Container className="py-2">
                    <Row>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <a href={`${URL}Web/LicenciaNueva`}>EXAMEN MÉDICO BREVETE LICENCIA NUEVA</a>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <a href={`${URL}Web/Revalidacion`}>EXAMEN MÉDICO BREVETE REVALIDACIÓN</a>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <a href={`${URL}Web/ExamenMedico`}>RESERVA DE CITAS ONLINE</a>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <a href={`${URL}Web/ExamenMedicoBrevetA_IV`}>EXAMEN MÉDICO A-IV</a>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <a href={`${URL}Web/ExamenMedicoBrevetRecategorizacion`}>EXAMEN MÉDICO RECATEGORIZACIÓN</a>
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            <a href={`${URL}Auth/ingreso`}>SISTEMA</a>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className="footer_web_datos">
                        <Col xs={12} sm={12} md={4} lg={3}>
                            Dirección: <br />{DIRECCION}
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            Central Telefónica:<br /> {CELULAR}
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            Correo electrónico:<br /> {CORREO}
                        </Col>
                        <Col xs={12} sm={12} md={4} lg={3}>
                            Horario:<br />
                            <HORARIO />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <hr></hr>
                        </Col>
                    </Row>
                    <Row className="footer_web_datos_w">
                        <Col>
                            Compras 100% seguras con:
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container className="footer_web_2" fluid>
                <Container className="py-2">
                    <Row className="footer_web_datos_w">
                        <Col>
                            COPYRIGHT © 2020 - 2021. TODOS LOS DERECHOS RESERVADOS
                        </Col>
                    </Row>
                </Container>
            </Container>
        </>
    )
}
export default FooterWeb;
if (document.getElementById("footer_web")) {
    ReactDOM.render(<FooterWeb />, document.getElementById("footer_web"));
}