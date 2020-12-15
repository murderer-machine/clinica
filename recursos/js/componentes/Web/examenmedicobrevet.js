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
import LadoDerecho from './ladoderecho';
const ExamenMedicoBrevet = () => {
    return (
        <>
            <Container className="container_licencianueva">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8}>
                       
                        <Row>
                            <Col>
                                <h3>¿En qué consiste el examen médico para licencia de conducir?</h3>
                                <p>En el examen médico para licencia de conducir se evalúan cuatro áreas:</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>1. Evaluación - Medicina General</h4>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto16}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                Te tomarán la presión, pasarás una prueba de equilibrio, te pedirán cargar unas pesas de 5 kg sobre tu cabeza y el médico te realizará una breve entrevista.                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>2. Evaluación- Vista y Oído</h4>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto17}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Si usas lentes, es obligatorio traerlos. El examen comprende pruebas como: nivel de visión, test de esteropsis, visión de colores, visión nocturna, audiometría básica, entre otras.
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>3. Evaluación - Grupo Sanguíneo (AI) y para las otras categorías adicionalmente - Pruebas Toxicológicas.</h4>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto18}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    Se tomará una muestra de sangre para identificar tu grupo y factor sanguíneo. No temas, la muestra se obtiene del dedo y solo es necesaria una gota de sangre.
                                    Se tomará una muestra de orina para realizar una evaluación cualitativa.
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>4. Evaluación – Psicología (AI) y para las otras categorías adicionalmente - Pruebas Psicosensométricas.</h4>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto19}`} />
                                    {/* <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p> */}
                                </div>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>
                                    La prueba psicológica es la más extensa del examen médico para licencia de conducir. Algunas de las pruebas que se realizan son el Test de Figura Humana y el Test de Benton.
                                </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>Información que puede interesarte:</h4>
                                <a href={`${URL}Web/LicenciaNueva`}>¿Cómo obtener licencia de conducir?</a> <br />
                                <a href={`${URL}Web/Revalidacion`}>¿Cómo revalidar licencia de conducir?</a>
                                <br />
                                <br />
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <a href={`${URL}Web/ExamenMedico`} >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto5}`} />
                                        <p className="m-0 text-uppercase py-2">pago online<br /> tu examen médico para brevete</p>
                                    </div>
                                </a>
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
export default ExamenMedicoBrevet;
if (document.getElementById("examen_medico_brevet")) {
    ReactDOM.render(<ExamenMedicoBrevet />, document.getElementById("examen_medico_brevet"));
}