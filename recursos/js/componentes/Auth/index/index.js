import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { Container, Row, Col, Alert, Button, Form } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { URL } from '../../../Variables'
import DatePicker from 'react-datepicker'

const Index = () => {
    const [key, setKey] = useState('consultas')
    const [citas, setcitas] = useState([])
    const [consultas, setconsultas] = useState([])
    const [actualizarconsulta, setactualizarconsulta] = useState(false)
    const [condicion_consultas, setcondicion_consultas] = useState(0)
    const [condicion_citas, setcondicion_citas] = useState(0)
    const [actualizar, setactualizar] = useState(false)
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
        codigo_autorizacion: 'telefono',
    })
    const [datosvalidacion, setdatosvalidacion] = useState({
        dni: true,
        nombres: true,
        apellidos: true,
        celular: true,
        correo: true
    })
    const CambiarFecha = (date) => {
        setDatos({
            ...datos,
            fecha: date,
            hora: '',
        })

    }
    const isWeekday = date => {
        const day = date.getDay()
        return day !== 0
    }
    const handleInputChange = (event) => {
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })
    }
    const [horarios, sethorarios] = useState([])
    const [horariodata, setHorariodata] = useState([])
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
    useEffect(() => {
        let isCancelled = false;
        const CargarConsultas = () => {
            var url = `${URL}Consultas/MostrarConsultas/${condicion_consultas}`
            fetch(url)
                .then(res => res.json())
                .then(response => {
                    setconsultas(response)
                });
        }
        const CargarCitas = () => {
            var url = `${URL}Consultas/MostrarCitas/${condicion_citas}`
            fetch(url)
                .then(res => res.json())
                .then(response => {
                    setcitas(response)
                });
        }
        CargarConsultas()
        CargarCitas()
        return () => {
            isCancelled = true;
        }
    }, [actualizarconsulta, condicion_consultas, condicion_citas, actualizar])
    const MarcarConsulta = (id) => {
        var url = `${URL}Consultas/MarcarConsulta/${id}`
        fetch(url)
            .then(res => res.json())
            .then(response => {
                if (response === 0) {
                    setactualizarconsulta(!actualizarconsulta)
                }
            });
    }
    const MarcarCita = (id) => {
        var url = `${URL}Consultas/MarcarCita/${id}`
        fetch(url)
            .then(res => res.json())
            .then(response => {
                if (response === 0) {
                    setactualizarconsulta(!actualizarconsulta)
                }
            });
    }
    const LiberarCita = (id) => {
        var url = `${URL}Consultas/LiberarCita/${id}`
        fetch(url)
            .then(res => res.json())
            .then(response => {
                if (response === 0) {
                    setactualizarconsulta(!actualizarconsulta)
                }
            });
    }
    const Salir = () => {
        window.location.href = `${URL}Auth/Salir`
    }
    const Actualizar = () => {
        setactualizarconsulta(!actualizarconsulta)
    }
    const Verifica = (e) => {
        e.preventDefault()
        if (ValidarDatos_exReg()) {
            EnviarDatos()
        }
    }
    const EnviarDatos = () => {
        var url = `${URL}Web/EnviarDatosCita2`
        fetch(url, {
            method: 'POST',
            body: JSON.stringify(datos),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .catch(error => console.error('Error:', error))
            .then(response => {
                if (response === 0) {
                    setactualizar(!actualizar)
                    setDatos({
                        id_unico: '',
                        fecha: '',
                        hora: '',
                        dni: '',
                        nombres: '',
                        apellidos: '',
                        celular: '',
                        correo: '',
                        modopago: '',
                        codigo_autorizacion: 'telefono',
                    })
                }
            });

    }
    const ValidarDatos_exReg = () => {

        let dni = new RegExp("^([0-9]{8})+$")
        let nombres = new RegExp("^[a-z*A-Z ]+$")
        let apellidos = new RegExp("^[a-z*A-Z ]+$")
        let celular = new RegExp("^([0-9]{9})+$")
        let correo = new RegExp("^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$")
        setdatosvalidacion({
            hora: datos.hora === '' ? false : true,
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
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} className="mb-2">
                        <Button variant="light" onClick={Salir}>Salir</Button>{' '}<Button variant="light" onClick={Actualizar}>Actualizar</Button>
                    </Col>

                    <Col xs={12}>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="consultas" title="Consultas">
                                <br />
                                <Button variant="light" onClick={() => { setcondicion_consultas(1) }}>Atendidos</Button>{' '}
                                <Button variant="light" onClick={() => { setcondicion_consultas(0) }}>Por atender</Button>{' '}
                                <Button variant="light" onClick={() => { setcondicion_consultas(2) }}>Todos</Button>{' '}
                                {consultas.length === 0 ? (
                                    <>
                                        <Container>
                                            <Row className="justify-content-center align-items-center p-3">
                                                No se encontraron consultas
                                    </Row>
                                        </Container>
                                    </>) : (<></>)}
                                {consultas.map((consulta, i) => (
                                    <Alert key={i} variant={consulta.visto == "0" ? 'danger' : 'success'} className="my-2">
                                        <b>Nombre : </b>{consulta.nombre.toUpperCase()}<br />
                                        <b>Correo : </b>{consulta.correo}<br />
                                        <b>Celular : </b>{consulta.celular}<br />
                                        <b>Consulta : </b>{consulta.consulta}<br />
                                        <b>Fecha : </b>{consulta.fecha}<br />
                                        {consulta.visto == "0" ?
                                            (
                                                <>
                                                    <Button variant="danger" size="sm" onClick={() => MarcarConsulta(consulta.id)}
                                                        style={{
                                                            position: 'absolute',
                                                            top: 0,
                                                            right: 0,
                                                        }}>Atendido</Button>
                                                </>
                                            ) : (<>

                                            </>)}
                                    </Alert>

                                ))}
                            </Tab>
                            <Tab eventKey="citas" title="Citas">
                                <br />
                                <Row>
                                    <Col xs={12} lg={4}>
                                        <Form onSubmit={Verifica}>
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
                                                    required
                                                />
                                            </Form.Group>
                                            <Form.Group>
                                                <Form.Label>Seleccione una hora :</Form.Label><br />
                                                <Form.Control as="select" name="hora" onChange={handleInputChange} required defaultValue={datos.hora}>
                                                    <option selected disabled>Seleccione una hora</option>
                                                    {
                                                        horarios.filter((horario) => !horariodata.includes(horario)).map((horario) =>
                                                            (<option>{horario}</option>)
                                                        )
                                                    }
                                                </Form.Control>
                                                {!datosvalidacion.hora ? (
                                                    <>
                                                        <Form.Text className="text-danger">
                                                            *Seleccione una hora
                                                    </Form.Text>
                                                    </>
                                                ) : (<></>)}
                                            </Form.Group>
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
                                            <Form.Group>
                                                <Button variant="primary" type="submit">Agregar</Button>
                                            </Form.Group>
                                        </Form>
                                        
                                    </Col>
                                    <Col xs={12} lg={8}>
                                        <Button variant="light" onClick={() => { setcondicion_citas(1) }}>Atendidos</Button>{' '}
                                        <Button variant="light" onClick={() => { setcondicion_citas(0) }}>Por atender</Button>{' '}
                                        <Button variant="light" onClick={() => { setcondicion_citas(2) }}>Todos</Button>{' '}
                                        {citas.length === 0 ? (
                                            <>
                                                <Container>
                                                    <Row className="justify-content-center align-items-center p-3">
                                                        No se encontraron citas
                                    </Row>
                                                </Container>
                                            </>) : (<></>)}
                                        {citas.map((Cita, i) => (
                                            <Alert variant={Cita.atendido == "0" ? 'danger' : 'success'} className="my-2">
                                                <b>Fecha : </b>{Cita.fecha}<br />
                                                <b>Hora : </b>{Cita.hora}<br />
                                                <b>DNI : </b>{Cita.dni}<br />
                                                <b>Nombres : </b>{Cita.nombres}<br />
                                                <b>Apellidos : </b>{Cita.apellidos}<br />
                                                <b>Celular : </b>{Cita.celular}<br />
                                                <b>Correo : </b>{Cita.correo}<br />
                                                <b>Código de Autorización : </b>{Cita.id_unico}<br />
                                                {Cita.atendido == "0" ?
                                                    (
                                                        <>
                                                            <Button variant="danger" size="sm" onClick={() => MarcarCita(Cita.id)}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: 0,
                                                                    right: 0,
                                                                }}
                                                            >Atendido</Button>
                                                            <Button variant="info" size="sm" onClick={() => LiberarCita(Cita.id)}
                                                                style={{
                                                                    position: 'absolute',
                                                                    top: 36,
                                                                    right: 0,
                                                                }}
                                                            >Liber cita</Button>
                                                        </>
                                                    ) : (
                                                        <>
                                                        </>)}
                                            </Alert>
                                        ))}
                                    </Col>
                                </Row>

                            </Tab>
                        </Tabs>
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default Index;
if (document.getElementById("index_auth")) {
    ReactDOM.render(<Index />, document.getElementById("index_auth"));
}
