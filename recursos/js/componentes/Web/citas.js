import React, { useState, useEffect, useRef, useCallback } from 'react'
import ReactDOM from "react-dom"
import Stepper from '@material-ui/core/Stepper'
import Step from '@material-ui/core/Step'
import StepLabel from '@material-ui/core/StepLabel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'
import './citas.scss'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"
import { registerLocale, setDefaultLocale } from "react-datepicker"
import es from 'date-fns/locale/es'
import { URL } from '../../Variables'
import moment from 'moment'
import Iframe from 'react-iframe'

import { Alert, AlertTitle } from '@material-ui/lab';

registerLocale('es', es)
function getSteps() {
    return [
        'PASO 1',
        'PASO 2',
        'PASO 3',
    ];
}
const Citas = () => {

    const [horarios, sethorarios] = useState([])

    const [horariodata, setHorariodata] = useState([])
    const [datos, setDatos] = useState({
        id_unico: '',
        fecha: '',
        hora: '',
        dni: '',
        nombres: '',
        apellidos: '',
        celular: '',
        correo: '',
        modopago: '',
        codigo_autorizacion: '',
    })
    const CambiarFecha = (date) => {
        setDatos({
            ...datos,
            fecha: date,
        })
    }
    useEffect(() => {
        const Llamarhoras = () => {
            var url = `${URL}Web/Horas`
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {

                    sethorarios(response);
                });
        }
        const LlamarFechas = () => {
            var url = `${URL}Web/Ejemplo`
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(datos),
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then(res => res.json())
                .catch(error => console.error('Error:', error))
                .then(response => {

                    setHorariodata(response);
                });
        }
        Llamarhoras()
        LlamarFechas()
    }, [datos.fecha])
    const [IdMercado, setIdMercado] = useState('')
    useEffect(() => {
        let isCancelled = false;
        const CargarIdMercado = () => {
            var url = `${URL}MercadoPago/GenerarId`
            fetch(url)
                .then(res => res.json())
                .then(response => {
                    setDatos({
                        ...datos,
                        id_unico: response
                    })
                });
        }
        CargarIdMercado()
        return () => {
            isCancelled = true;
        }
    }, [])
    // const elRef = useCallback(node => {
    //     if (node !== null) {
    //         console.log("ref", node); // node = elRef.current
    //         const script = document.createElement('script')
    //         script.src = "https://www.mercadopago.com.pe/integrations/v1/web-payment-checkout.js"
    //         script.setAttribute('data-preference-id', IdMercado)
    //         script.async = true;
    //         node.appendChild(script)
    //     }
    // }, [IdMercado]);
    const [activeStep, setActiveStep] = React.useState(0)
    const steps = getSteps()
    const [errordatos, seterrordatos] = useState(false)
    const [errordatos_0, seterrordatos_0] = useState(false)
    ////
    const [datosvalidacion, setdatosvalidacion] = useState({
        dni: true,
        nombres: true,
        apellidos: true,
        celular: true,
        correo: true
    })
    const ValidarDatos_exReg = () => {

        let dni = new RegExp("^([0-9]{8})+$")
        let nombres = new RegExp("^[a-z*A-Z ]+$")
        let apellidos = new RegExp("^[a-z*A-Z ]+$")
        let celular = new RegExp("^([0-9]{9})+$")
        let correo = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
        setdatosvalidacion({
            dni: dni.test(datos.dni),
            nombres: nombres.test(datos.nombres),
            apellidos: apellidos.test(datos.apellidos),
            celular: celular.test(datos.celular),
            correo: correo.test(datos.correo)
        })
        return dni.test(datos.dni) &&
            nombres.test(datos.nombres) &&
            apellidos.test(datos.apellidos) &&
            celular.test(datos.celular) &&
            correo.test(datos.correo)
    }
    ////


    const handleNext = () => {

        if (activeStep === 0) {
            if (datos.fecha === '' ||
                datos.hora === ''
            ) {
                seterrordatos_0(true)
            } else {
                seterrordatos_0(false)
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
        }

        if (activeStep === 1) {
            if (datos.dni === '' ||
                datos.nombres === '' ||
                datos.apellidos === '' ||
                datos.celular === '' ||
                datos.correo === '' || !ValidarDatos_exReg()) {

                seterrordatos(true)
            } else {
                seterrordatos(false)
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            }
        }
        if (activeStep === 2) {
            handleShow()
        }

    };


    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        setActiveStep(0);
    };
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const InsertPago = (e) => {
        e.preventDefault()

    }
    const [datosrecibidos, setdatosrecibidos] = useState({})
    const EnviarDatos = () => {
        var url = `${URL}Web/EnviarDatosCita`

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                setdatosrecibidos(response)
                setActiveStep((prevActiveStep) => prevActiveStep + 1)
            });

    }
    const isWeekday = date => {

        const day = date.getDay()
        return day !== 0
    }

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const Finalizar = () => {
        if (datos.codigo_autorizacion === '') {
        } else {

            handleClose()
            EnviarDatos()

        }
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <Stepper activeStep={activeStep} alternativeLabel>
                            {steps.map((label) => (
                                <Step key={label}>
                                    <StepLabel>{label}</StepLabel>
                                </Step>
                            ))}
                        </Stepper>
                    </Col>
                </Row>
            </Container>
            <Container>
                {activeStep === steps.length ?
                    (
                        <Row className="justify-content-center">
                            <Col xs={12} sm={12} md={8} lg={8}>
                                <Alert severity="success">
                                    <AlertTitle>Cita Reservada</AlertTitle>
             Sus datos fueron registrados correctamente — <strong>Policlínico Social Medic</strong>
                                </Alert>
                            </Col>
                            <Col xs={12} sm={12} md={8} lg={8} className="text-center">
                                <b>Fecha : </b>{datosrecibidos.fecha.toUpperCase()}<br /><br />
                                <b>Hora : </b>{datosrecibidos.hora.toUpperCase()}<br /><br />
                                <b>DNI : </b>{datosrecibidos.dni.toUpperCase()}<br /><br />
                                <b>Nombres : </b>{datosrecibidos.nombres.toUpperCase()}<br /><br />
                                <b>Apellidos : </b>{datosrecibidos.apellidos.toUpperCase()}<br /><br />
                                <b>Calular : </b>{datosrecibidos.celular.toUpperCase()}<br /><br />
                                <b>Correo : </b>{datosrecibidos.correo.toUpperCase()}<br /><br />
                            </Col>
                        </Row>
                    )
                    : (
                        <div>
                            {{
                                0:
                                    <Row className="justify-content-center">
                                        <Col xs={12} sm={12} md={8} lg={8}>
                                            {errordatos_0 ? (<>
                                                <Alert severity="error">Falta completar campos</Alert>
                                            </>) : (<></>)}
                                            <Form.Group>
                                                <Form.Label>Seleccione una fecha :</Form.Label><br />
                                                <DatePicker
                                                    selected={datos.fecha}
                                                    onChange={date => CambiarFecha(date)}
                                                    minDate={new Date()}
                                                    name="startDate"
                                                    dateFormat="yyyy-MM-dd"
                                                    locale="es"
                                                    placeholderText="Seleccione una fecha"
                                                    filterDate={isWeekday}
                                                    className="form-control"
                                                />
                                                {/* <DatePicker
                                                    selected={datos.fecha}
                                                    onChange={date => CambiarFecha(date)}
                                                    filterDate={isWeekday}
                                                    placeholderText="Select a weekday"
                                                /> */}

                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Seleccione un horario :</Form.Label>
                                                <Row className="citas_row text-center">
                                                    {
                                                        horarios.filter((horario) => !horariodata.includes(horario)).map((horario) =>
                                                            <Col xs={6} sm={6} md={4} lg={3}>
                                                                <Form.Check
                                                                    type="radio"
                                                                    label={horario}
                                                                    name="hora"
                                                                    onChange={handleInputChange}
                                                                    value={horario}
                                                                    checked={datos.hora === horario}
                                                                    disabled={datos.fecha === '' ? true : false}
                                                                />
                                                            </Col>
                                                        )
                                                    }
                                                </Row>

                                            </Form.Group>
                                        </Col>
                                    </Row>
                                ,
                                1:
                                    <Row className="justify-content-center">
                                        <Col xs={12} sm={12} md={8} lg={8}>
                                            {errordatos ? (<>
                                                <Alert severity="error">Campos vacíos</Alert>
                                            </>) : (<></>)}
                                            <Form.Group>
                                                <Form.Label>DNI :</Form.Label>
                                                <Form.Control type="number" placeholder="Ingrese número de documento" onChange={handleInputChange} name="dni" value={datos.dni} />
                                                {!datosvalidacion.dni ? (
                                                    <>
                                                        <Form.Text className="text-danger">
                                                            *DNI 8 dígitos
                                                    </Form.Text>
                                                    </>
                                                ) : (<></>)}
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Nombres :</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese sus nombres" onChange={handleInputChange} name="nombres" value={datos.nombres} />
                                                {!datosvalidacion.nombres ? (
                                                    <>
                                                        <Form.Text className="text-danger">
                                                            *Solo se aceptan letras
                                                    </Form.Text>
                                                    </>
                                                ) : (<></>)}
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Apellidos :</Form.Label>
                                                <Form.Control type="text" placeholder="Ingrese sus apellidos" onChange={handleInputChange} name="apellidos" value={datos.apellidos} />
                                                {!datosvalidacion.apellidos ? (
                                                    <>
                                                        <Form.Text className="text-danger">
                                                            *Solo se aceptan letras
                                                    </Form.Text>
                                                    </>
                                                ) : (<></>)}
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Celular :</Form.Label>
                                                <Form.Control type="number" placeholder="Ingrese su celular" onChange={handleInputChange} name="celular" value={datos.celular} />
                                                {!datosvalidacion.celular ? (
                                                    <>
                                                        <Form.Text className="text-danger">
                                                            *Solo números y 9 dígitos
                                                    </Form.Text>
                                                    </>
                                                ) : (<></>)}
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Correo :</Form.Label>
                                                <Form.Control type="email" placeholder="Ingrese un correo válido" onChange={handleInputChange} name="correo" value={datos.correo} />
                                                {!datosvalidacion.correo ? (
                                                    <>
                                                        <Form.Text className="text-danger">
                                                            *Ingrese un correo válido
                                                    </Form.Text>
                                                    </>
                                                ) : (<></>)}
                                            </Form.Group>
                                        </Col>
                                    </Row>,
                                2:
                                    <Row className="justify-content-center">
                                        <Iframe url="https://www.visanetlink.pe/pagoseguro/POLICLINICO SOCIALMEDIC/807797"
                                            id="myId"
                                            className="visanetlink"
                                            display="initial"
                                            position="relative"
                                            frameBorder={0} />
                                        {/* <Col xs={12} sm={12} md={8} lg={8}>
                                            <Row className="citas_row text-center">
                                                <Col xs={6} sm={6} md={6} lg={6}>
                                                    <Form.Check
                                                        type="radio"
                                                        label={<img
                                                            className="d-block w-100"
                                                            src={`${URL}recursos/img/visa.svg`}
                                                            alt="Third slide"
                                                        />}
                                                        name="modopago"
                                                        onChange={handleInputChange}
                                                        value="visa"
                                                        checked={datos.modopago === "visa"}
                                                    />
                                                </Col>
                                                <Col xs={6} sm={6} md={6} lg={6}>
                                                    <Form.Check
                                                        type="radio"
                                                        label={<img
                                                            className="d-block w-100"
                                                            src={`${URL}recursos/img/yape.svg`}
                                                            alt="Third slide"
                                                        />}
                                                        name="modopago"
                                                        onChange={handleInputChange}
                                                        value="yape"
                                                        checked={datos.modopago === "yape"}
                                                    />
                                                </Col>
                                            </Row>
                                        </Col> */}
                                    </Row>,

                            }[activeStep]}
                            <Row className="justify-content-center mt-2">
                                <Col xs={6} sm={6} md={4} lg={2}>
                                    <Button
                                        disabled={activeStep === 0}
                                        onClick={handleBack}
                                        variant="primary"
                                        block
                                        className="btn_inicio"
                                        disabled={{
                                            0: false,
                                            1: false,
                                            2: true,
                                            3: true,
                                        }[activeStep]}
                                    >
                                        Anterior Paso
                                </Button>
                                </Col>
                                <Col xs={6} sm={6} md={4} lg={2}>
                                    <Button variant="primary" onClick={handleNext} block className="btn_inicio">
                                        {activeStep === steps.length - 1 ? 'Finalizar' : 'Siguiente Paso'}
                                    </Button>
                                </Col>
                                <Col xs={12}>
                                    <br />
                                </Col>
                            </Row>
                        </div>
                    )}
            </Container>
        
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ingrese Código de Autorización</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Control type="text" placeholder="Código de Autorización" onChange={handleInputChange} name="codigo_autorizacion" value={datos.codigo_autorizacion} />

                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" className="btn_inicio" type="button" onClick={Finalizar}>Ingresar</Button>
                </Modal.Footer>
            </Modal>
        </>

    );
}
export default Citas;
if (document.getElementById("citas")) {
    ReactDOM.render(<Citas />, document.getElementById("citas"));
}