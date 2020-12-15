import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { URL } from '../../Variables'
import Foto5 from '../../../img/foto_5.jpg'
import Foto16 from '../../../img/foto_16.jpg'
import Foto17 from '../../../img/foto_17.jpg'
import Foto18 from '../../../img/foto_18.jpg'
import Foto19 from '../../../img/foto_19.jpg'
import Foto20 from '../../../img/foto_20.jpg'
import Foto21 from '../../../img/foto_21.jpg'
import LadoDerecho from './ladoderecho';
const ExamenMedicoBrevetA_IV = () => {
    return (
        <>
            <Container className="container_licencianueva">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Row>
                            <Col>
                                <h3>EXAMEN MEDICO - ESPECIAL A-IV</h3>
                                <h4>Requisitos para realizar el examen médico:</h4>
                                <p>DNI original y vigente.  </p>
                                <h4>Evaluaciones que se realizan:</h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Grupo Sanguíneo</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Se tomará una muestra de sangre para identificar tu grupo y factor sanguíneo. No temas, la muestra se obtiene del dedo y solo es necesaria una gota de sangre.                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto18}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>

                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Pruebas Toxicológicas</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Se tomará una prueba para detectar consumo de cocaína y/o marihuana.                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto20}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>

                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Psicología</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    La prueba psicológica es la más extensa de la evaluación médica. Consta de las siguientes pruebas: prueba de la figura humana, test rápido de barranquilla (prueba de inteligencia), test de laberintos, test de minimult (prueba de personalidad) y test de benton (que consiste en dibujar figuras geométricas).
                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto19}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>

                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Medicina General</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Te tomarán la presión, pasarás una prueba de equilibrio, te pedirán cargar unas pesas de 2 kg sobre tu cabeza y el médico te realizará una breve entrevista.
                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto16}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Vista y Oído</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Si usas lentes, es obligatorio traerlos. Para aprobar debes tener al menos una visión de 20/30 (línea 5) o superior, con o sin lentes correctores. El resto del examen comprende pruebas como: visión de colores, test de esteropsis, visión nocturna, audiometría básica, entre otras.                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto17}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Pruebas Psicosensométricas</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Se tomarán 3 pruebas psicosensométricas: test de reacción simple, test de palanca y test de punteo.
                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto21}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>1° Paso: Aprobar el <b>examen médico para licencia de conducir especial A-IV</b></h4>
                            </Col>

                            <Col xs={10} sm={10} md={8}>
                                <a href={`${URL}Web/ExamenMedico`} >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto5}`} />
                                        <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p>
                                    </div>
                                </a>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    El <b>examen médico para licencia de conducir</b> es el primer paso para <b>obtener tu licencia A-IV</b>.
                                </p>
                                <p>
                                    Lo puedes pasar en el <b>Policlínico Social Medic</b>, que se encuentra a una cuadra de la SGTT-AREQUIPA.
                                </p>
                                <p>
                                    <b>Puedes reservar una cita pagando online tu examen médico para licencia de conducir</b>
                                </p>
                                <p>
                                    Una vez que apruebes el <b>xexamen médico</b> podrás comenzar con el <b>trámite</b> para <b>obtener tu licencia de conducir especial A-IV</b>.
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>2° Paso: Realizar el curso de Capacitación (Escuela Autorizada)</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Ingresa a este link y elije la Escuela de Conductores que más te convenga
                                </p>
                                <p>
                                    <a href="https://rec.mtc.gob.pe/LicenciaConducir/ArEscuelaConductorConfiguracion" target="_blank">https://rec.mtc.gob.pe/LicenciaConducir/ArEscuelaConductorConfiguracion</a>
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>3° Paso: Realizar el pago por derecho de <b>obtención de licencia especial A-IV</b></h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    <b>Dato:</b> La caja de la SGTT-AREQUIPA (Calle los pinos N°100 – Paucarpata) es el único lugar donde debes realizar este pago.
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>4° Paso: Solicitar la licencia</h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Asegúrate de haber aprobado el <b>Examen Médico</b> y haber realizado la capacitación en una escuela de conductores. Con todo esto listo, podrás realizar el trámite para solicitar tu licencia de conducir especial A-IV en las oficinas del SGTT (Calle los Pinos N° 100 Paucarpata-Arequipa.
                                </p>
                                <p>
                                    La emisión de licencia demora un plazo máximo de 48 horas desde realizada la solicitud física u online.
                                </p>
                                <br />
                                <br />
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4}>
                        <LadoDerecho></LadoDerecho>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
export default ExamenMedicoBrevetA_IV;
if (document.getElementById("examen_medico_brevet_a_iv")) {
    ReactDOM.render(<ExamenMedicoBrevetA_IV />, document.getElementById("examen_medico_brevet_a_iv"));
}