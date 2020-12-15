<?php

class Consultas extends Model {

    protected static $table = "t_consultas";
    public $id;
    public $nombre;
    public $correo;
    public $celular;
    public $consulta;
    public $fecha;
    public $visto;

    function __construct($id='', $nombre='', $correo='', $celular='', $consulta='', $fecha='', $visto='') {
        $this->id = $id;
        $this->nombre = $nombre;
        $this->correo = $correo;
        $this->celular = $celular;
        $this->consulta = $consulta;
        $this->fecha = $fecha;
        $this->visto = $visto;
    }

    function getId() {
        return $this->id;
    }

    function getNombre() {
        return $this->nombre;
    }

    function getCorreo() {
        return $this->correo;
    }

    function getCelular() {
        return $this->celular;
    }

    function getConsulta() {
        return $this->consulta;
    }

    function getFecha() {
        return $this->fecha;
    }

    function getVisto() {
        return $this->visto;
    }

    function setId($id): void {
        $this->id = $id;
    }

    function setNombre($nombre): void {
        $this->nombre = $nombre;
    }

    function setCorreo($correo): void {
        $this->correo = $correo;
    }

    function setCelular($celular): void {
        $this->celular = $celular;
    }

    function setConsulta($consulta): void {
        $this->consulta = $consulta;
    }

    function setFecha($fecha): void {
        $this->fecha = $fecha;
    }

    function setVisto($visto): void {
        $this->visto = $visto;
    }

    public function getMyVars() {
        return get_object_vars($this);
    }

}
