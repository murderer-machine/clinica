import React, { useState } from 'react'
import ReactDOM from "react-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import Modal from 'react-bootstrap/Modal'
import Accordion from 'react-bootstrap/Accordion'
import { Form, Badge } from 'react-bootstrap'
import './inicio.scss'
import Foto1 from '../../../img/foto_1.jpg'
import Foto2 from '../../../img/foto_2.jpg'
import Foto3 from '../../../img/foto_3.jpg'
import Foto4 from '../../../img/foto_4.jpg'
import Card from 'react-bootstrap/Card'
import { URL } from '../../Variables'
import { Receipt, Envelope } from 'react-bootstrap-icons';
import LadoDerecho from './ladoderecho';

const WebInicio = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    let textInput = null;
    const [datos, setDatos] = useState({
        dni: '',
        password: '',
    })
    const [variante, setVariante] = useState({
        style: '',
        mensaje: '',
    });
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    const enviarDatos = (event) => {
        event.preventDefault();
        var url = `${URL}Auth/Ingresar`;
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                alert(response)
            });
    }
    return (
        <>
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={12} lg={8} className="animate__animated animate__fadeIn">
                        <Row>
                            <Col xs={12} sm={12} md={12} lg={6} className="mb-4 col_inicio">
                                <a href={`${URL}Web/LicenciaNueva`}>
                                    <div className="div_relativo div_relativo_s">
                                        <Image className="img_inicio" src={`${URL}${Foto1}`} />
                                        <p className="p_inicio m-0 text-uppercase py-2">licencia nueva <br /> online paso a paso</p>
                                    </div>
                                    <Button className="btn_inicio" size="sm" block>
                                        Ver más
                                </Button>
                                </a>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} className="mb-4 col_inicio">
                                <a href={`${URL}Web/Revalidacion`}>
                                    <div className="div_relativo div_relativo_s">
                                        <Image className="img_inicio" src={`${URL}${Foto2}`} />
                                        <p className="p_inicio m-0 text-uppercase py-2">revalidación de brevete <br /> online paso a paso</p>
                                    </div>
                                    <Button className="btn_inicio" size="sm" block>
                                        Ver más
                                </Button>
                                </a>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} className="mb-4 col_inicio">
                                <a href={`${URL}Web/ExamenMedico`}>
                                    <div className="div_relativo div_relativo_s">
                                        <Image className="img_inicio" src={`${URL}${Foto3}`} />
                                        <p className="p_inicio m-0 text-uppercase py-2">resevar tu cita<br /> online</p>
                                    </div>
                                    <div className="sub2_inicio px-3 py-2">
                                        <ul className="p-0">
                                            <li>Totalmente seguro.</li>
                                            <li>Paga con tarjeta de crédito o débito.</li>
                                            <li>Diversidad de Horarios.</li>
                                        </ul>
                                    </div>
                                    <Button className="btn_inicio" size="sm" block>
                                        Ver más
                                </Button>
                                </a>
                            </Col>
                            <Col xs={12} sm={12} md={12} lg={6} className="mb-4 col_inicio">
                                <a href="">
                                    <div className="div_relativo div_relativo_s">
                                        <Image className="img_inicio" src={`${URL}${Foto4}`} />
                                        <p className="p_inicio m-0 text-uppercase py-2">simulacro<br /> examen de reglas</p>
                                    </div>
                                    <div className="sub2_inicio px-3 py-2">
                                        <ul className="p-0">
                                            <h6 className="text-center text-uppercase"></h6>
                                            <li>La mejor forma de prepararte para tu examen de reglas de tránsito.</li>
                                            <li>Practica en nuestro modo entrenamiento.</li>
                                            <li>Realiza tu examen en nuestro modo simulacro.</li>
                                        </ul>
                                    </div>
                                    <Button className="btn_inicio" size="sm" block>
                                        Ir al simulacro
                                </Button>
                                </a>
                            </Col>
                            <Col xs={12} sm={12} md={12} className="mb-4">
                                <Carousel activeIndex={index} onSelect={handleSelect}>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://placeimg.com/1000/300/nature"
                                            alt="First slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>First slide label</h3>
                                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://placeimg.com/1000/300/nature"
                                            alt="Second slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Second slide label</h3>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                    <Carousel.Item>
                                        <img
                                            className="d-block w-100"
                                            src="https://placeimg.com/1000/300/nature"
                                            alt="Third slide"
                                        />
                                        <Carousel.Caption>
                                            <h3>Third slide label</h3>
                                            <p>
                                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                            </p>
                                        </Carousel.Caption>
                                    </Carousel.Item>
                                </Carousel>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={12} sm={12} md={12} lg={4} className="animate__animated animate__bounceInRight">
                        <LadoDerecho></LadoDerecho>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={handleClose} size="lg" centered>
                <Modal.Header closeButton>
                    <Modal.Title>Noticia</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Estimados usuarios,</p>
                    <p>Nos encontramos trabajando en todas las medidas de seguridad correspondientes para la reanudación de nuestras actividades. Muy pronto estaremos anunciando la fecha del reinicio de nuestras operaciones para que puedan realizar sus reservas a través de la página web.</p>
                    <p>Asimismo, las personas que cuenten con cita pendiente de atención serán las primeras en ser contactadas para la reprogramación de su cita</p>
                    <p>Atentamente,</p>
                    <p>La Gerencia</p>
                </Modal.Body>
            </Modal>
        </>
    )
}
export default WebInicio;
if (document.getElementById("web_inicio")) {
    ReactDOM.render(<WebInicio />, document.getElementById("web_inicio"));
}
