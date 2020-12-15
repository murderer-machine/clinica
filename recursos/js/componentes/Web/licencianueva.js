import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { URL } from '../../Variables'
import Foto5 from '../../../img/foto_5.jpg'
import Foto4 from '../../../img/foto_4.jpg'
import Foto6 from '../../../img/foto_6.jpg'
import Foto7 from '../../../img/foto_7.jpg'
import Foto8 from '../../../img/foto_8.jpg'
import Foto9 from '../../../img/foto_9.jpg'
import Foto10 from '../../../img/foto_10.jpg'
import Foto11 from '../../../img/foto_11.jpg'
import Foto12 from '../../../img/foto_12.jpg'
import LadoDerecho from './ladoderecho';
const LicenciaNueva = () => {
    return (
        <>
            <Container className="container_licencianueva">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Row>
                            <Col>
                                <h3>PASOS PARA OBTENER TU PRIMERA LICENCIA DE CONDUCIR</h3>
                                <p>Ahora puedes obtener tu primera licencia de conducir de manera más sencilla y ordena. Si bien los exámenes siguen siendo de manera presencial, el uso de las plataformas online te permite evitar colas y ahorrar mucho tiempo. A continuación, te enseñamos cómo.</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>1° Paso: Aprobar el <b>examen médico para licencia de conducir</b></h4>
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
                                <p>El <b>examen médico para licencia de conducir</b> es el primer paso para <b>obtenerla.</b></p>
                                <p><b>Puedes reservar una cita pagando online tu examen médico para licencia de conducir.</b></p>
                                <p>Una vez que apruebes el <b>examen médico</b> podrás comenzar con el <b>trámite online</b> para <b>obtener tu licencia de conducir.</b></p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>2° Paso: Realizar el pago del <b>examen de reglas de tránsito</b> y el <b>examen de manejo</b></h4>
                                <p>A continuación, deberás realizar el pago por el concepto de examen de reglas de tránsito y examen de manejo que asciende a S/92.00. Debes realizar este pago en la caja de la SGTT-AREQUIPA</p>
                                <p>Dato: La caja de la SGTT-AREQUIPA es el único lugar donde debes realizar este pago.</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>3° Paso: Programar tu cita para el <b>examen de reglas de tránsito.</b></h4>
                                <p>Ahora deberás programar tu cita para el examen de reglas de tránsito.</p>
                                <p>Antes de ello, has debido prepararte para rendir el examen. Lo puedes hacer practicando en<br/>
                                    <a href="https://sierdgtt.mtc.gob.pe/" target='_blank'>Simulacro de Examen de Reglas:<br /> Tiene Modo Entrenamiento y Modo Simulacro</a>
                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <a href="https://sierdgtt.mtc.gob.pe/" target='_blank' >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto4}`} />
                                        <p className="m-0 text-uppercase py-2">simulacro de exámen<br /> de reglas</p>
                                    </div>
                                </a>
                            </Col>
                            <Col xs={12}>
                                <p>Ahora que ya estás preparado, deberás programar tu cita para el examen de reglas de tránsito de siguiente manera:</p>
                                <p>Inscríbete y programa tu examen, visitando las oficinas de la SGTT, ubicado en Calle los Pinos 100 Av. Kennedy 1600, de 8:00 a.m. a 3:30 p.m. Recuerda haber pasado tu examen médico primero. </p>

                                
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>4° Paso: Rendir el <b>examen de reglas de tránsito.</b></h4>
                                <p>Dirígete al Centro de Evaluación (Área de Exámenes de Reglas) de la SGTT de la Gerencia Regional de Transportes y Comunicaciones (GRTC) para rendir el Examen de Reglas de Tránsito. Debes llegar a tu cita con 1 hora de anticipación. Además, recuerda que, si no vas en la fecha programada, pierdes ese intento.</p>
                                <p>El examen de reglas de tránsito dura 40 minutos y consta de 40 preguntas para marcar. Debes tener, por lo menos, 35 respuestas correctas para aprobar. </p>
                                <p>En caso desapruebes el primer intento, NO TE PREOCUPES tienes 2 intentos más. Para usarlos, tienes que esperar al día siguiente de tu primer examen. El costo de la evaluación es de S/. 44.70. El resultado de tu evaluación se ingresará automáticamente al sistema del MTC a través del identificador biométrico, con tu huella digital. Este examen es necesario para poder dar tu examen práctico de manejo.</p>
                                <p>Una vez aprobado el examen de reglas de tránsito, podrás programar tu cita para el examen de manejo.</p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <a href={`${URL}Web/ExamenMedico`} >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto6}`} />
                                        <p className="m-0 text-uppercase py-2">consejo para:<br /> examen de reglas de tránsito</p>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>5° Paso: Programar tu cita para el <b>examen de manejo</b></h4>
                                <p>Dirígete al centro de evaluación (Área de Exámenes de Manejo) de la SGTT de la Gerencia Regional de Transportes y Comunicaciones (GRTC) y programa una cita para dar el examen de manejo</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>6° Paso: Rendir el examen de manejo</h4>
                                <p>Este examen evaluará tus habilidades prácticas de conducir. Puedes realizar la prueba con un <b><u>vehículo automático o uno mecánico</u></b></p>
                                <p>El día de tu cita, dirígete al centro de evaluación ubicado en las oficinas de la SGTT, Calle los Pinos 100 Av. Kennedy 1600-Paucarpata.</p>
                                <p>Es recomendable que llegues a tu cita con 30 minutos de anticipación. Además, recuerda que, si no vas en la fecha programada, pierdes ese intento.</p>
                                <p>En caso desapruebes el examen, NO TE PREOCUPES tienes 02 oportunidades más para seguir intentándolo, pero debes volver a programar otra cita. El costo de la evaluación es de S/. 38.30. El resultado de tu evaluación será registrado automáticamente en el sistema del MTC, mediante el identificador biométrico con tu huella digital. Si aprobaste el examen, podrás recoger tu licencia.</p>

                                <p><b>RECUERDA:</b> Puedes hacer un simulacro de la prueba de manejo. Puedes acercarte al centro de exámenes (Oficinas de la Subgerencia de Transporte Terrestre de la Gerencia Regional de Transporte Terrestre) y solicitarlo.  El costo del simulacro de la prueba de manejo es de S/. 21.00</p>


                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <a href={`${URL}Web/ExamenMedico`} >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto7}`} />
                                        <p className="m-0 text-uppercase py-2">consejo para:<br /> examen de manejo</p>
                                    </div>
                                </a>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>7° Paso: Solicitar la licencia</h4>
                                <p>Asegúrate de haber aprobado el Examen Médico, el Examen de Reglas y el Examen de Manejo. Con todo esto listo, podrás realizar el trámite para solicitar tu licencia de conducir.</p>
                                <p>Antes de iniciar, debes saber:</p>
                                <p>Si no tuviste tiempo para presentar tu expediente después de haber aprobado el examen de manejo, podrás hacer el trámite de recojo de manera online <a href="https://licencias.mtc.gob.pe/" target="_blank">https://licencias.mtc.gob.pe/</a></p>
                                <p>La emisión de licencia demora un plazo máximo de 48 horas desde realizada la solicitud física u online. </p>
                            </Col>
                            <Col xs={10} sm={10} md={10}>
                                <div className="div_relativo">
                                    <Image src={`${URL}${Foto8}`} />
                                </div>
                            </Col>
                            <Col xs={12}>
                                <h4>Requisitos:</h4>
                                <h5><u>LICENCIA NUEVA PARTICULAR A-I</u></h5>
                                <ol>
                                    <li>Examen Psicosomático para la categoría (Centro Medico Autorizado).</li>
                                    <li>DNI original de Arequipa y copia en tamaño A5 con hologramas de votaciones.</li>
                                    <li>Una fotografía tamaño pasaporte (Fondo Blanco).</li>
                                    <li>Declaración Jurada D.S. 007-2016-MTC. (Descargar) <a href="http://www.grtc-gra.gob.pe/documentos/formatosformularios/DECLARACION%20JURADA%20D.S%20007-2016-MTC.pdf" target="_blank">http://www.grtc-gra.gob.pe/documentos/formatosformularios/DECLARACION%20JURADA%20D.S%20007-2016-MTC.pdf</a></li>
                                    <li>Pago en caja de la SGTT <b>S/. 92.00 (Derecho cubre primer examen de reglas y primer examen de manejo).</b></li>
                                </ol>
                                <p><b>Recuerda: </b>A partir del 1° de enero de 2018, el curso de formación de conductores no es necesario ni reemplaza este examen para la obtención de tu primera licencia de conducir.</p>
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
export default LicenciaNueva;
if (document.getElementById("licencia_nueva")) {
    ReactDOM.render(<LicenciaNueva />, document.getElementById("licencia_nueva"));
}