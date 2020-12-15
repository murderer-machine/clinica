import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Button from 'react-bootstrap/Button'
import Accordion from 'react-bootstrap/Accordion'
import { Form, Badge } from 'react-bootstrap'
import Spinner from 'react-bootstrap/Spinner'
import './inicio.scss'
import Card from 'react-bootstrap/Card'
import { URL } from '../../Variables'
import { Receipt, Envelope } from 'react-bootstrap-icons';
import {
    GoogleReCaptchaProvider,
    GoogleReCaptcha
} from 'react-google-recaptcha-v3';
const LadoDerecho = () => {
    let textInput = null;
    const [datos, setDatos] = useState({
        nombre: '',
        correo: '',
        celular: '',
        consulta: '',
        token: ''
    })
    const [variante, setVariante] = useState({
        style: '',
        mensaje: '',
    });
    const [spinner, setSpinner] = useState({
        display: 'none',
        disabled: false,
    })
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }

    const enviarDatos = (event) => {
        setSpinner({
            display: 'inline-block',
            disabled: true,
        })
        event.preventDefault();
        var url = `${URL}Web/AgregarConsultas`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                setSpinner({
                    display: 'none',
                    disabled: false,
                })
                if (response == 0) {
                    setVariante({
                        style: 'success',
                        mensaje: 'Atenderemos su consulta lo mas antes posible.',
                    })
                    setDatos({
                        ...datos,
                        nombre: '',
                        correo: '',
                        celular: '',
                        consulta: '',
                    })
                }
                if (response == 1) {
                    setVariante({
                        style: 'danger',
                        mensaje: 'Ocurrió un error.',
                    })
                }
                if (response == 2) {
                    setVariante({
                        style: 'info',
                        mensaje: 'Captcha Expiró , vuelva a recargar su pagina.',
                    })
                }
            });
    }
    const onChange_c = (value) => {
        alert(value);
    }
    return (
        <>
            <div className="preguntas_inicio">
                <h5><Receipt color="#9C2822" size={20} /> <span>PREGUNTAS</span> <span>FRECUENTES</span></h5>
                <Accordion>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="inicio_card_header" eventKey="0">
                            ¿Es necesario estar en ayunas para realizar el examen médico para brevete?
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="0">
                            <Card.Body className="inicio_card_body">No, no es necesario estar en ayunas para realizar el examen médico para brevete.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="inicio_card_header" eventKey="1">
                            Si mi DNI no es de Arequipa, ¿puedo realizar el examen médico para brevete en un centro médico de Arequipa?                              </Accordion.Toggle>
                        <Accordion.Collapse eventKey="1">
                            <Card.Body className="inicio_card_body">No, desde Julio del 2018, esto ya no es posible. El examen médico para brevete debe ser rendido dentro del departamento que señala su DNI o Carné de Extranjería.</Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="inicio_card_header" eventKey="2">
                            ¿Cómo puedo obtener el duplicado de mi licencia de conducir?                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="2">
                            <Card.Body className="inicio_card_body">
                                Para obtener un duplicado de su licencia de conducir por pérdida o robo,
                                se deben seguir los siguientes pasos:
                                <ul>
                                    <li>Presentación de una declaración jurada de pérdida o robo de la Licencia de Conducir, o devolución de la Licencia de Conducir deteriorada</li>
                                    <li>Pago por derecho de tramitación: S/ 50.40 en la caja de la SGTT.</li>
                                </ul>
                            </Card.Body>
                        </Accordion.Collapse>
                    </Card>

                    <Card>
                        <Accordion.Toggle as={Card.Header} className="inicio_card_header" eventKey="4">
                            ¿Cuánto tiempo de vigencia tiene el examen médico para brevete?
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="4">
                            <Card.Body className="inicio_card_body">
                                El tiempo de validez del Certificado Médico es de 06 meses, contabilizados a partir del día en que se entrega el Certificado.
                                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card>
                        <Accordion.Toggle as={Card.Header} className="inicio_card_header" eventKey="5">
                            ¿Cuánto tiempo demora el examen médico?
                                </Accordion.Toggle>
                        <Accordion.Collapse eventKey="5">
                            <Card.Body className="inicio_card_body">
                                El examen médico para brevete demora aproximadamente dos horas y los resultados se entregan aproximadamente 15 minutos después de concluido el examen.
                                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </div>
            <div className="preguntas_inicio">
                <h5><Envelope color="#9C2822" size={20} /> <span>ENVÍANOS TU</span> <span>CONSULTA</span></h5>
                <Form onSubmit={enviarDatos} id="formulario">
                    <Badge pill variant={variante.style}>
                        {variante.mensaje}
                    </Badge>
                    <Form.Group className="mb-2">
                        <Form.Control required type="text" name="nombre" size="sm" onChange={handleInputChange} placeholder="Ingrese su nombre" value={datos.nombre} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control required type="email" name="correo" size="sm" onChange={handleInputChange} placeholder="Ingrese su correo" value={datos.correo} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control required type="number" name="celular" size="sm" onChange={handleInputChange} placeholder="Ingrese su número de celular" value={datos.celular} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Form.Control as="textarea" required type="text" name="consulta" size="sm" onChange={handleInputChange} placeholder="Escriba su consulta" value={datos.consulta} />
                    </Form.Group>
                    <Form.Group className="mb-2">
                        <Button className="btn_inicio" type="submit" size="sm" block disabled={spinner.disabled}>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                                style={{ display: spinner.display }}
                            />&nbsp;
                            Enviar Consulta
                        </Button>
                    </Form.Group>
                    <GoogleReCaptchaProvider reCaptchaKey="6LecD7sZAAAAANxIhcq2RizsKjnauhKa15KtzNDj">
                        <GoogleReCaptcha onVerify={token => {
                            setDatos({
                                ...datos,
                                token: token
                            })
                        }} />
                    </GoogleReCaptchaProvider>
                </Form>
            </div>
        </>
    )
}
export default LadoDerecho;

