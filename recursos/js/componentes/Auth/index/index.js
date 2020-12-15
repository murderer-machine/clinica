import React, { useState, useEffect } from "react"
import ReactDOM from "react-dom"
import { Container, Row, Col, Alert, Button } from 'react-bootstrap'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { URL } from '../../../Variables'
const Index = () => {
    const [key, setKey] = useState('consultas')
    const [citas, setcitas] = useState([])
    const [consultas, setconsultas] = useState([])
    const [actualizarconsulta, setactualizarconsulta] = useState(false)
    useEffect(() => {
        let isCancelled = false;
        const CargarConsultas = () => {
            var url = `${URL}Consultas/MostrarConsultas`
            fetch(url)
                .then(res => res.json())
                .then(response => {
                    setconsultas(response)
                });
        }
        const CargarCitas = () => {
            var url = `${URL}Consultas/MostrarCitas`
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
    }, [actualizarconsulta])
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
    return (
        <>
            <Container className="mt-3">
                <Row>
                    <Col xs={12} className="mb-2">
                        <Button variant="success" onClick={Salir}>Salir</Button>{' '}<Button variant="info" onClick={Actualizar}>Actualizar</Button>
                    </Col>
                    <Col xs={12} lg={12}>
                        <Tabs
                            id="controlled-tab-example"
                            activeKey={key}
                            onSelect={(k) => setKey(k)}
                        >
                            <Tab eventKey="consultas" title="Consultas">
                                {/* {JSON.stringify(consultas)} */}
                                {consultas.map((consulta, i) => (
                                    <Col xs={12} key={i}>
                                        <b>Nombre : </b>{consulta.nombre}<br />
                                        <b>Correo : </b>{consulta.correo}<br />
                                        <b>Celular : </b>{consulta.celular}<br />
                                        <b>Consulta : </b>{consulta.consulta}<br />
                                        <b>Fecha : </b>{consulta.fecha}<br />
                                        {consulta.visto == "0" ?
                                            (
                                                <>
                                                    <Alert variant="warning">
                                                        No atendido<br />
                                                        <Button variant="warning" size="sm" onClick={() => MarcarConsulta(consulta.id)}>Marcar como atendido</Button>
                                                    </Alert>
                                                </>
                                            ) : (
                                                <>
                                                    <Alert variant="success">
                                                        Atendido
                                                    </Alert>
                                                </>)}
                                        <hr />
                                    </Col>
                                ))}
                            </Tab>
                            <Tab eventKey="citas" title="Citas">
                                {/* {JSON.stringify(citas)} */}
                                {citas.map((Cita, i) => (
                                    <Col xs={12} key={i}>
                                        <b>Fecha : </b>{Cita.fecha}<br />
                                        <b>Hora : </b>{Cita.hora}<br />
                                        <b>DNI : </b>{Cita.dni}<br />
                                        <b>Nombres : </b>{Cita.nombres}<br />
                                        <b>Apellidos : </b>{Cita.apellidos}<br />
                                        <b>Celular : </b>{Cita.celular}<br />
                                        <b>Correo : </b>{Cita.correo}<br />

                                        {Cita.atendido == "0" ?
                                            (
                                                <>
                                                    <Alert variant="warning">
                                                        No atendido<br />
                                                        <Button variant="warning" size="sm" onClick={() => MarcarCita(Cita.id)}>Marcar como atendido</Button>
                                                        <Button variant="danger" size="sm" onClick={() => LiberarCita(Cita.id)}>Liber cita</Button>
                                                    </Alert>
                                                </>
                                            ) : (
                                                <>
                                                    <Alert variant="success">
                                                        Atendido
                                                    </Alert>
                                                </>)}
                                        <hr />
                                    </Col>
                                ))}
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
