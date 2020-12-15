<?php

class Consultas_controller extends Controller {

    public function __construct() {
        parent::__construct();
    }

    public function MostrarConsultas() {
        $this->Verifica_GET();
        $consultas = Consultas::select()->run();
        echo json_encode($consultas, JSON_PRETTY_PRINT);
    }

    public function MostrarCitas() {
        $this->Verifica_GET();
        $citas = Citas::select()->run();
        echo json_encode($citas, JSON_PRETTY_PRINT);
    }

    public function MarcarConsulta($parametro) {
        $this->Verifica_GET();
        $consultas = Consultas::getById($parametro[0]);
        $consultas->setVisto(1);
        $resultado = $consultas->update();
        echo json_encode($resultado['error'], JSON_PRETTY_PRINT);
    }

    public function MarcarCita($parametro) {
        $this->Verifica_GET();
        $citas = Citas::getById($parametro[0]);
        $citas->setAtendido(1);
        $resultado = $citas->update();
        echo json_encode($resultado['error'], JSON_PRETTY_PRINT);
    }
     public function LiberarCita($parametro) {
        $this->Verifica_GET();
        $citas = Citas::getById($parametro[0]);
        $resultado = $citas->delete();
        echo json_encode($resultado['error'], JSON_PRETTY_PRINT);
    }

}
