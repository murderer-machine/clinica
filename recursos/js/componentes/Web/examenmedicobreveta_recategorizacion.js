import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import { URL } from '../../Variables'
import Foto4 from '../../../img/foto_4.jpg'
import Foto5 from '../../../img/foto_5.jpg'
import Foto6 from '../../../img/foto_6.jpg'
import Foto7 from '../../../img/foto_7.jpg'
import Foto16 from '../../../img/foto_16.jpg'
import Foto17 from '../../../img/foto_17.jpg'
import Foto18 from '../../../img/foto_18.jpg'
import Foto19 from '../../../img/foto_19.jpg'
import Foto20 from '../../../img/foto_20.jpg'
import Foto21 from '../../../img/foto_21.jpg'
import LadoDerecho from './ladoderecho';
const ExamenMedicoBrevetRecategorizacion = () => {
    return (
        <>
            <Container className="container_licencianueva">
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8}>
                        <Row>
                            <Col>
                                <h3>EXAMEN MEDICO - RECATEGORIZACIÓN AII Y AIII</h3>
                                <h4>Requisitos para realizar el examen médico:</h4>
                                <p>DNI original y vigente</p>
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
                        <Row>
                            <Col>
                                <h4>PASOS PARA RECATEGORIZAR MI LICENCIA</h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>
                                    1° Paso: Aprobar el <b>examen médico para licencia de conducir como recategorización</b>
                                </h4>
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
                                <p>El examen <b>médico para licencia de conducir</b> es el primer paso para <b>recategorizar.</b></p>
                                <p>Lo puedes pasar en el <b>Policlínico Social Medic</b>, que se encuentra a una cuadra de la SGTT-AREQUIPA.</p>
                                <p><b>Puedes reservar una cita pagando online tu examen médico para licencia de conducir</b></p>
                                <p>Una vez que apruebes el <b>examen médico</b> podrás comenzar con el trámite para recategorizar tu licencia de conducir.</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>
                                    2° Paso: Realizar el curso de Profesionalización (Escuela Autorizada).
                                </h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>Ingresa a este link y elije la Escuela de Conductores que más te convenga <a href="https://rec.mtc.gob.pe/LicenciaConducir/ArEscuelaConductorConfiguracion" target="_blank">https://rec.mtc.gob.pe/LicenciaConducir/ArEscuelaConductorConfiguracion</a></p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>
                                    3°Paso: Realizar el pago por derecho de recategorización, examen de reglas de tránsito y examen de manejo
                                </h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>A continuación, te damos el detalle de los pagos por los siguientes conceptos:</p>
                                <ul>
                                    <li>Pago en caja de la SGTT S/43.90 (Derecho de Recategorización).</li>
                                    <li>Pago en caja de la SGTT S/. 38.30 (Derecho de Examen de Reglas).</li>
                                    <li>Pago en caja de la SGTT S/. 44.70 (Derecho de Examen de Manejo).</li>
                                </ul>
                                <p><b>Dato:</b> La caja de la SGTT-AREQUIPA es el único lugar donde debes realizar este pago</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={12}>
                                <h4>
                                    4° Paso: Programar tu cita para el examen de reglas de tránsito.
                                </h4>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>Ahora deberás programar tu cita para el examen de reglas de tránsito.</p>
                                <p>Antes de ello, has debido prepararte para rendir el examen. Lo puedes hacer practicando en nuestro Simulacro de Examen de Reglas:</p>
                                <a href="https://sierdgtt.mtc.gob.pe/" target='_blank'>Simulacro de Examen de Reglas:<br /> Tiene Modo Entrenamiento y Modo Simulacro</a>
                            </Col>
                            <Col xs={10} sm={10} md={8}>
                                <a href="https://sierdgtt.mtc.gob.pe/" target='_blank' >
                                    <div className="div_relativo">
                                        <Image src={`${URL}${Foto4}`} />
                                        <p className="m-0 text-uppercase py-2">simulacro de exámen<br /> de reglas</p>
                                    </div>
                                </a>
                            </Col>
                            <Col xs={12} sm={12} md={12}>
                                <p>Ahora que ya estás preparado, deberás programar tu cita para el examen de reglas de tránsito de la siguiente manera:</p>
                                <p>Inscríbete y programa tu examen, visitando las oficinas de la SGTT, ubicadas en Calle los Pinos 100 Av. Kennedy 1600, de 8:00 a.m. a 3:30 p.m. Recuerda haber pasado tu examen médico y tu capacitación de profesionalización.</p>
                            </Col>
                        </Row>
                        <Row className="justify-content-center">
                            <Col xs={12}>
                                <h4>5° Paso: Rendir el <b>examen de reglas de tránsito.</b></h4>
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
                                <h4>6° Paso: Rendir el <b>examen de manejo</b></h4>
                                <p>Este examen evaluará tus habilidades prácticas de conducir.</p>
                                <p>El día de tu cita, dirígete a:</p>
                                <p>Examen de Manejo en el Circuito de la SGTT:</p>
                                <ul>
                                    <li>A2A: (Calle los Pinos 100 Av. Kennedy 1600).</li>
                                    <li>A2B, A3A, A3B, A3C: (Km. 19 Variante de Uchumayo)</li>
                                </ul>
                                <p>Es recomendable que llegues a tu cita con 30 minutos de anticipación. Además, recuerda que, si no vas en la fecha programada, pierdes ese intento.</p>
                                <p>En caso desapruebes el examen, NO TE PREOCUPES tienes 02 oportunidades más para seguir intentándolo, pero debes volver a programar otra cita. El costo de la evaluación es de S/. 38.30. El resultado de tu evaluación será registrado automáticamente en el sistema del MTC, mediante el identificador biométrico con tu huella digital. Si aprobaste el examen, podrás recoger tu licencia.</p>
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
                                <p>Asegúrate de haber aprobado el Examen Médico, el Curso de Profesionalización, el Examen de Reglas y el Examen de Manejo. Con todo esto listo, podrás realizar el trámite para solicitar tu licencia de conducir.</p>
                                <p>Antes de iniciar, debes saber:</p>
                                <p>Si no tuviste tiempo para presentar tu expediente después de haber aprobado el examen de manejo, podrás hacer el trámite de recojo de manera online <a href="https://licencias.mtc.gob.pe/" target="_blank">https://licencias.mtc.gob.pe/</a></p>
                                <p>La emisión de licencia demora un plazo máximo de 48 horas desde realizada la solicitud física u online.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h3>Requisitos:</h3>
                                <h4>RECATEGORIZACIÓN AIIa, AIIb, AIIIa, AIIIb, AIIIc</h4>
                                <ol>
                                    <li>Examen Psicosomático para la categoría (Centro Medico Autorizado).</li>
                                    <li>Certificado de Profesionalización (Escuela Autorizada).</li>
                                    <li>DNI original de Arequipa y copia en tamaño A5 con hologramas de votaciones.</li>
                                    <li>Copia de Licencia de Conducir VIGENTE en tamaño A5 o Declaración Jurada de Pérdida o Robo.(Descargar) <a href="http://www.grtc-gra.gob.pe/documentos/formatosformularios/DECLARACI%C3%93N-JURADA-DUPLICADOS.pdf" target="_blank">http://www.grtc-gra.gob.pe/documentos/formatosformularios/DECLARACI%C3%93N-JURADA-DUPLICADOS.pdf</a></li>
                                    <li>Una fotografía tamaño pasaporte (Fondo Blanco).</li>
                                    <li>Declaración Jurada D.S. 007-2016-MTC. (Descargar) <a href="http://www.grtc-gra.gob.pe/documentos/formatosformularios/DECLARACION%20JURADA%20D.S%20007-2016-MTC.pdf" target="_blank">http://www.grtc-gra.gob.pe/documentos/formatosformularios/DECLARACION%20JURADA%20D.S%20007-2016-MTC.pdf</a></li>
                                    <li>Pago en caja de la SGTT S/. 43.90 (Derecho de Recategorización).</li>
                                    <li>Pago en caja de la SGTT S/. 38.30 (Derecho de Examen de Reglas).</li>
                                    <li>Pago en caja de la SGTT S/. 44.70 (Derecho de Examen de Manejo).</li>
                                </ol>
                                <p><b>RECUERDA:</b> Si no estás seguro qué tipo de licencia necesitas, revisa los Tipos de Licencia de Conducir. Cada tipo de licencia te permitirá manejar diferentes tipos de vehículos para diferentes usos, pero cada una requiere una cantidad de años de experiencia y un mínimo de edad:</p>
                                <ul>
                                    <li>Licencia AIIa: mínimo 2 años con el brevete AI y mínimo 21 años de edad.</li>
                                    <li>Licencia AIIb: mínimo 3 años con el brevete AI o 1 año con el brevete AIIa y mínimo 21 años de edad.</li>
                                    <li>Licencia AIIIa: mínimo 2 años con el brevete AIIb y mínimo 24 años de edad.</li>
                                    <li>Licencia AIIIb: mínimo 2 años con el brevete AIIb y mínimo 24 años de edad.</li>
                                    <li>Licencia AIIIc: mínimo 4 años con el brevete AIIb o 1 año con el brevete AIIIa o AIIIb y mínimo 27 años de edad.</li>
                                </ul>
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
export default ExamenMedicoBrevetRecategorizacion;
if (document.getElementById("examen_medico_brevet_recategorizacion")) {
    ReactDOM.render(<ExamenMedicoBrevetRecategorizacion />, document.getElementById("examen_medico_brevet_recategorizacion"));
}