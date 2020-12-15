import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { URL } from '../../Variables'
import Foto5 from '../../../img/foto_5.jpg'
import Foto13 from '../../../img/foto_13.jpg'
import Foto14 from '../../../img/foto_14.jpg'
import Foto15 from '../../../img/foto_15.jpg'
import Foto4 from '../../../img/foto_4.jpg'
import Foto6 from '../../../img/foto_6.jpg'
import './revalidacion.scss'
import LadoDerecho from './ladoderecho';
const Revalidacion = () => {
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h3>PASOS PARA LA REVALIDACIÓN DE LICENCIA DE CONDUCIR</h3>

                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>1° Paso: Aprobar el <b>examen médico para revalidación de licencia de conducir</b></h4>
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
                                <p>Puedes <a href={`${URL}Web/ExamenMedico`}>Reservar tu cita haciendo clic aquí.</a> Una vez que apruebes el <b>examen médico para licencia de conducir </b> podrás comenzar con el <b>trámite de revalidación.</b></p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>2° Paso: Realiza el pago, debes hacerlo en caja de la SGTT</h4>
                                <ul>
                                    <li><b>El costo por el trámite de revalidación AI es de S/ 44.70.</b></li>
                                    <li><b>El costo por el trámite de Revalidación A-IIa, A-IIb, A-IIIa, A-IIIb, A-IIIc es de S/. 44.70 (Derecho de Revalidación) y
                                    S/. 38.30 (Derecho de Examen de Reglas).</b>
                                    </li>
                                </ul>
                            </Col>

                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>3° Paso: Programar tu cita para el <b>examen de reglas de tránsito.</b> (Solo para trámite de Revalidación A-IIa, A-IIb, A-IIIa, A-IIIb, A-IIIc)</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Ahora deberás programar tu cita para el examen de reglas de tránsito.</p>
                                <p>Antes de ello, has debido prepararte para rendir el examen. Lo puedes hacer practicando en nuestro<br />
                                    <a href="">Simulacro de Examen de Reglas:<br /> Tiene Modo Entrenamiento y Modo Simulacro</a>
                                </p>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <a href={`${URL}Web/ExamenMedico`} >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto4}`} />
                                        <p className="m-0 text-uppercase py-2">simulacro de exámen<br /> de reglas</p>
                                    </div>
                                </a>
                            </Col>
                            <Col xs={12}>
                                <p>Ahora que ya estás preparado, deberás programar tu cita para el examen de reglas de tránsito de la siguiente manera:</p>
                                <p>Inscríbete y programa tu examen, visitando las oficinas de la SGTT, ubicado en Calle los Pinos 100 Av. Kennedy 1600, de 8:00 a.m. a 3:30 p.m. Recuerda haber pasado tu examen médico primero. </p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>4° Paso: Rendir el <b>examen de reglas de tránsito</b>. (Solo para trámite de Revalidación A-IIa, A-IIb, A-IIIa, A-IIIb, A-IIIc)</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Dirígete al Centro de Evaluación (Área de Exámenes de Reglas) de la SGTT de la Gerencia Regional de Transportes y Comunicaciones (GRTC) para rendir el Examen de Reglas de Tránsito. Debes llegar a tu cita con 1 hora de anticipación. Además, recuerda que, si no vas en la fecha programada, pierdes ese intento.</p>
                                <p>El examen de reglas de tránsito dura 40 minutos y consta de 40 preguntas para marcar. Debes tener, por lo menos, 35 respuestas correctas para aprobar. </p>
                                <p>En caso desapruebes el primer intento, NO TE PREOCUPES tienes 2 intentos más. Para usarlos, tienes que esperar al día siguiente de tu primer examen. El costo de la evaluación es de S/. 44.70. El resultado de tu evaluación se ingresará automáticamente al sistema del MTC a través del identificador biométrico, con tu huella digital. Este examen es necesario para poder dar tu examen práctico de manejo.</p>
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
                                <h4>5° Paso: Solicitar la licencia</h4>
                            </Col>
                            <Col xs={12}>
                                <p>Asegúrate de haber aprobado el Examen Médico en caso de la licencia AI y caso de las demás categorías adicionalmente el Examen de Reglas. Con todo esto listo, podrás realizar el trámite para solicitar tu licencia de conducir.</p>
                                <p>Antes de iniciar, debes saber:</p>
                                <p>Si no tuviste tiempo para presentar tu expediente después de haber aprobado el examen de reglas, podrás hacer el trámite de recojo de manera online <a href="https://licencias.mtc.gob.pe/" target="_blank"></a>https://licencias.mtc.gob.pe/</p>
                                <p>La emisión de licencia demora un plazo máximo de 48 horas desde realizada la solicitud física u online.</p>
                                <h4>Requisitos:</h4>
                                <h5><u>REVALIDACIÓN </u></h5>
                                <h6>Revalidación A-I</h6>
                                <ol>
                                    <li>Examen Psicosomático para la categoría (Centro Médico Autorizado).</li>
                                    <li>DNI original de Arequipa y copia en tamaño A5 con hologramas de votaciones.</li>
                                    <li>Copia de Licencia de Conducir en tamaño A5 ó Declaración Jurada de Pérdida o Robo.</li>
                                    <li>Declaración Jurada D.S. 007-2016-MTC. (Descargar).</li>
                                    <li>Pago en caja de la SGTT S/. 44.70 (Derecho de Revalidación).</li>
                                </ol>
                                <h6>Revalidación A-IIa, A-IIb, A-IIIa, A-IIIb, A-IIIc</h6>
                                <ol>
                                    <li>Examen Psicosomático para la categoría (Centro Médico Autorizado).</li>
                                    <li>DNI original de Arequipa y copia en tamaño A5 con hologramas de votaciones.</li>
                                    <li>Copia de Licencia de Conducir en tamaño A5 o Declaración Jurada de Pérdida o Robo.</li>
                                    <li>Declaración Jurada D.S. 007-2016-MTC. (Descargar).</li>
                                    <li>Pago en caja de la SGTT <b>S/. 44.70 (Derecho de Revalidación).</b></li>
                                    <li>Pago en caja de la SGTT <b>S/. 38.30 (Derecho de Examen de Regla).</b></li>
                                </ol>
                                <h5><u>RECUERDA:  </u></h5>
                                <ol>
                                    <li><b><u>Plazos para revalidar la licencia de conducir para personas a partir de los 70 años varía de la siguiente forma:</u></b><br />
                                        <ul>
                                            <li>Si tienes entre 70 y 75 años, deberás revalidar tu licencia <b>AII o AIII cada año.</b></li>
                                            <li>Si tienes entre 75 a 81 años, deberás revalidar tu licencia <b>AI cada 3 años y la AII o AIII cada 6 meses.</b></li>
                                            <li>Si tienes más de 81 años, deberás revalidar tu licencia <b>AI cada 2 años y no podrás renovar tu licencia AII o AIII.</b></li>
                                        </ul>
                                    </li>
                                    <li><b>Sanción por conducir con Brevete vencido</b><br />
                                        <ul>
                                            <li>Las licencias de conducir son válidas hasta el último día de su vigencia y las solicitudes de revalidación pueden ser presentadas <b>en cualquier momento</b> antes o después de su fecha de vencimiento. Sin embargo, <b>conducir un vehículo con una licencia vencida está prohibido</b> y se considera una falta “Muy grave” que será sancionada considerando el valor de la UIT y una suma adicional de la siguiente manera:</li>
                                            <li><b>La primera vez:</b> S/. 207.50 (5% de la UIT) + S/ 50.00 por cada mes transcurrido desde la fecha de vencimiento.</li>
                                            <li><b>La segunda vez:</b> S/. 1,245.00 (30% de la UIT) + S/ 50.00 por cada mes transcurrido desde la fecha de vencimiento</li>
                                            <li><b>La tercera vez en adelante:</b> S/. 2,490.00 (60% de la UIT) + S/ 50.00 por cada mes transcurrido desde la fecha de vencimiento + <b>inhabilitación por 1 año para obtener licencia de conducir</b></li>
                                        </ul>
                                    </li>
                                </ol>
                            </Col>


                        </Row>
                        <Row className="justify-content-center">
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
export default Revalidacion;
if (document.getElementById("revalidacion")) {
    ReactDOM.render(<Revalidacion />, document.getElementById("revalidacion"));
}