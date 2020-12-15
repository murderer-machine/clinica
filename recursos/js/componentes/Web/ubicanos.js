
import React from 'react'
import ReactDOM from "react-dom"
import { Container, Row, Col } from 'react-bootstrap'
import Iframe from 'react-iframe'
import LadoDerecho from './ladoderecho'
const Ubicanos = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} lg={8}>
                        <h3>UBICACIÓN</h3>
                        <hr />
                        <p><b>Dirección:</b> Calle Ricardo Palma cuadra 8 – Paucarpata (a espaldas del MTC paralela de la Av. Kennedy)</p>
                        <p><b>Central Telefónica:</b> 934-588-716 / 054-751276</p>
                        <p><b>Correo electrónico:</b> comercial@socialmedic.com.pe</p>
                        <br />
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d956.7610993453915!2d-71.50955914712877!3d-16.42257141983384!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91424b62eeb0e13b%3A0x7cc770ad1782339d!2sPolicl%C3%ADnico%20Social%20Medic%20SRL!5e0!3m2!1ses-419!2spe!4v1608061844949!5m2!1ses-419!2spe"
                            width="600"
                            height="450"
                            display="initial"
                            position="relative"
                            frameBorder={0}>
                        </Iframe>
                    </Col>
                    <Col xs={12} lg={4}>
                        <LadoDerecho></LadoDerecho>

                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Ubicanos
if (document.getElementById("ubicanos")) {
    ReactDOM.render(<Ubicanos />, document.getElementById("ubicanos"))
}