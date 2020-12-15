import React from 'react'
import ReactDOM from "react-dom"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LadoDerecho from './ladoderecho'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import { URL, DIRECCION, HORARIO } from '../../Variables'
import './examenmedico.scss'
const ExamenMedico = () => {
    return (
        <>
            <Container className="container_examen_medico">
                <Row>
                    <Col xs={12}>
                        <br />
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Row className="justify-content-center em_header">
                            <Col xs={5} sm={5} md={5} className="text-right"><strong>QUIERO OBTENER<br />MI PRIMER BREVETE</strong></Col>
                            <Col xs={5} sm={5} md={5} className="text-left"><strong>QUIERO REVALIDAR<br />MI BREVETE</strong></Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="text-center">
                                <h5>EN AMBOS CASOS</h5>
                                <h4><strong>EL PRIMER PASO ES:</strong></h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={6} sm={6} md={4}>
                                <img
                                    className="d-block w-100"
                                    src={`${URL}recursos/img/doctor.svg`}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="text-center">
                                <h4><strong>EL EXAMEN MÉDICO BREVETE</strong></h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={2} sm={2} md={2} className="text-center">
                                <img
                                    className="d-block w-100"
                                    src={`${URL}recursos/img/credit-card.svg`}
                                    alt="Third slide"
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} className="text-center">
                                <h4>PAGO ONLINE</h4>
                                <h5>S/ 350.00</h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={8}>
                                <ul>
                                    <li>Ubicación a espaldas del MTC paralela a la Av. Kennedy</li>
                                    <li>Eliges fecha y hora para tu examen médico.</li>
                                    <li>Puedes pagar con tu tarjeta de crédito o de débito.</li>
                                    <li>Puedes reprogramar tu cita.</li>
                                </ul>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={6} className="text-center">
                                <Button className="btn_inicio" size="lg" block  href={`${URL}Web/Citas`}>
                                    RESERVA TU CITA ONLINE
                                </Button>
                            </Col>
                            <Col xs={12}>
                                <br />
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={8} className="text-center">
                                <p className="em_p_direccion">{DIRECCION}</p>
                                <h6>HORARIO</h6>
                                <HORARIO />
                                <br /><br />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <LadoDerecho></LadoDerecho>
                    </Col>
                </Row>
            </Container >
        </>
    )
}
export default ExamenMedico;
if (document.getElementById("examen_medico")) {
    ReactDOM.render(<ExamenMedico />, document.getElementById("examen_medico"));
}