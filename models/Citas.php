<?php

class Citas extends Model {

    protected static $table = "t_citas";
    public $id;
    public $fecha;
    public $hora;
    public $dni;
    public $nombres;
    public $apellidos;
    public $celular;
    public $correo;
    public $id_unico;
    public $atendido;

    function __construct($id = '', $fecha = '', $hora = '', $dni = '', $nombres = '', $apellidos = '', $celular = '', $correo = '', $id_unico = '', $atendido = 0) {
        $this->id = $id;
        $this->fecha = $fecha;
        $this->hora = $hora;
        $this->dni = $dni;
        $this->nombres = $nombres;
        $this->apellidos = $apellidos;
        $this->celular = $celular;
        $this->correo = $correo;
        $this->id_unico = $id_unico;
        $this->atendido = $atendido;
    }

    function getId() {
        return $this->id;
    }

    function getFecha() {
        return $this->fecha;
    }

    function getHora() {
        return $this->hora;
    }

    function getDni() {
        return $this->dni;
    }

    function getNombres() {
        return $this->nombres;
    }

    function getApellidos() {
        return $this->apellidos;
    }

    function getCelular() {
        return $this->celular;
    }

    function getCorreo() {
        return $this->correo;
    }

    function getId_unico() {
        return $this->id_unico;
    }

    function getAtendido() {
        return $this->atendido;
    }

    function setId($id): void {
        $this->id = $id;
    }

    function setFecha($fecha): void {
        $this->fecha = $fecha;
    }

    function setHora($hora): void {
        $this->hora = $hora;
    }

    function setDni($dni): void {
        $this->dni = $dni;
    }

    function setNombres($nombres): void {
        $this->nombres = $nombres;
    }

    function setApellidos($apellidos): void {
        $this->apellidos = $apellidos;
    }

    function setCelular($celular): void {
        $this->celular = $celular;
    }

    function setCorreo($correo): void {
        $this->correo = $correo;
    }

    function setId_unico($id_unico): void {
        $this->id_unico = $id_unico;
    }

    function setAtendido($atendido): void {
        $this->atendido = $atendido;
    }

    public function getMyVars() {
        return get_object_vars($this);
    }

}
