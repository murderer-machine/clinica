<?php

class Horas extends Model {

    protected static $table = "t_horas";
    public $id;
    public $hora;

    function __construct($id = '', $hora = '') {
        $this->id = $id;
        $this->hora = $hora;
    }

    function getId() {
        return $this->id;
    }

    function getHora() {
        return $this->hora;
    }

    function setId($id): void {
        $this->id = $id;
    }

    function setHora($hora): void {
        $this->hora = $hora;
    }

    public function getMyVars() {
        return get_object_vars($this);
    }

}
