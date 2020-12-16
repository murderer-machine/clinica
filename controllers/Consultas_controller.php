<?php

class Consultas_controller extends Controller {

    public function __construct() {
        parent::__construct();
    }

    public function MostrarConsultas($parametros) {
        $this->Verifica_GET();
        if ($parametros[0] == 2) {
            $consultas = Consultas::select()->orderBy_nuevo([['id', 'DESC']])->run();
        } else {
            $consultas = Consultas::select()->where([['visto', $parametros[0]]])->orderBy_nuevo([['id', 'DESC']])->run();
        }
        echo json_encode($consultas, JSON_PRETTY_PRINT);
    }

    public function MostrarCitas($parametros) {
        $this->Verifica_GET();
        if ($parametros[0] == 2) {
            $citas = Citas::select()->orderBy_nuevo([['id', 'DESC']])->run();
        } else {
            $citas = Citas::select()->where([['atendido', $parametros[0]]])->orderBy_nuevo([['id', 'DESC']])->run();
        }
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
