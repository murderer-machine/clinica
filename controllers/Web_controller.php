<?php

class Web_controller extends Controller {

    public function __construct() {
        parent::__construct();
    }

    public function Inicio() {
        $this->view->render('Web/inicio');
    }

    public function LicenciaNueva() {

        $this->view->render('Web/licencianueva');
    }

    public function Revalidacion() {
        $this->view->render('Web/revalidacion');
    }

    public function ExamenMedico() {
        $this->view->render('Web/examenmedico');
    }

    public function ExamenMedicoBrevet() {
        $this->view->render('Web/examenmedicobrevet');
    }

    public function ExamenMedicoBrevetA_IV() {
        $this->view->render('Web/examenmedicobreveta_iv');
    }

    public function ExamenMedicoBrevetRecategorizacion() {
        $this->view->render('Web/examenmedicobrevet_recategorizacion');
    }

    public function Citas() {
        $this->view->render('Web/citas');
    }

    public function Ubicanos() {
        $this->view->render('Web/ubicanos');
    }

    public function AgregarConsultas() {
        $this->Verifica_POST();
        $resultado = $this->Verifica_JSON(file_get_contents("php://input"));
        if ($resultado->token) {
            $google_token = $resultado->token;
            $response = file_get_contents("https://www.google.com/recaptcha/api/siteverify?secret=" . SECRET_KEY . "&response={$google_token}");
            $response = json_decode($response);
            $response = (array) $response;
            if ($response['success'] && ($response['score'] && $response['score'] > 0.5)) {
                $consulta = new Consultas(null, $resultado->nombre, $resultado->correo, $resultado->celular, $resultado->consulta, fecha_hora, 0);
                $respuesta = $consulta->create();
                if ($respuesta['error'] == 0) {
                    $correo = Correos_controller::EmailDatosEmpresa(
                                    array(
                                        'nombre' => $resultado->nombre,
                                        'correo' => $resultado->correo,
                                        'celular' => $resultado->celular,
                                        'consulta' => $resultado->consulta
                    ));
                }
                echo json_encode($respuesta['error']);
            } else {
                $respuesta['error'] = 2;
                echo json_encode($respuesta['error']);
            }
        }
    }

    public function EnviarDatosCita() {
        $this->Verifica_POST();
        $datos = $this->Verifica_JSON(file_get_contents("php://input"));
        $citas = new Citas(
                $id = null,
                $fecha = $datos->fecha,
                $hora = $datos->hora,
                $dni = mb_strtolower($datos->dni),
                $nombres = mb_strtolower($datos->nombres),
                $apellidos = mb_strtolower($datos->apellidos),
                $celular = $datos->celular,
                $correo = mb_strtolower($datos->correo),
                $id_unico = $datos->codigo_autorizacion
        );
        $resultado = $citas->create();
        if ($resultado['error'] === 0) {
            $citas = Citas::getById($resultado['getID']);
            $resutaldo_citas = $citas;
        } else {
            $resutaldo_citas = (object) array();
        }
        echo json_encode($resutaldo_citas);
    }
public function EnviarDatosCita2() {
        $this->Verifica_POST();
        $datos = $this->Verifica_JSON(file_get_contents("php://input"));
        $citas = new Citas(
                $id = null,
                $fecha = $datos->fecha,
                $hora = $datos->hora,
                $dni = mb_strtolower($datos->dni),
                $nombres = mb_strtolower($datos->nombres),
                $apellidos = mb_strtolower($datos->apellidos),
                $celular = $datos->celular,
                $correo = mb_strtolower($datos->correo),
                $id_unico = $datos->codigo_autorizacion
        );
        $resultado = $citas->create();
        
        echo json_encode($resultado['error']);
    }
    public function Horas() {
        $this->Verifica_POST();
        $datos = $this->Verifica_JSON(file_get_contents("php://input"));
        if ($datos->fecha === '') {

            $horas = Horas::select()->run();
        }
        if ($datos->fecha !== '' && substr($datos->fecha, 0, 10) == fecha) {
            if ($this->get_nombre_dia($datos->fecha, 0, 10) === 'Sabado') {
                $horas = Horas::select()->where([['hora', hora, '>']])->limitar(10)->run();
            } else {
                $horas = Horas::select()->where([['hora', hora, '>']])->run();
            }
        } else {
            if ($this->get_nombre_dia($datos->fecha, 0, 10) === 'Sabado') {
                $horas = Horas::select()->limitar(10)->run();
            } else {
                $horas = Horas::select()->run();
            }
        }
        $horas_ = [];
        foreach ($horas as $hora) {
            array_push($horas_, Web_controller::CambiarTipo($hora['hora']));
        }
        echo json_encode($horas_);
    }

    public function Ejemplo() {
        $this->Verifica_POST();
        $resultado = $this->Verifica_JSON(file_get_contents("php://input"));
        $citas = Citas::select()->where([['fecha', substr($resultado->fecha, 0, 10)]])->run();
        $horas = array();
        foreach ($citas as $value) {
            array_push($horas, Web_controller::CambiarTipo($value['hora']));
        }
        echo json_encode($horas);
    }

    public function Ejemplo2() {
        echo date(hora, $time);
        echo number_format($time, 2);
    }

    public function CambiarTipo($fecha = hora) {
        $fecha = date("H:i", strtotime($fecha));
        return $fecha;
    }

    public function Ejemplo3() {
        $this->view->render('Web/ejemplo');
    }

    public function Ejemplo4() {
        $this->Verifica_POST();
        //mkdir( "ejemplo/", 0777);
        $output_dir = "ejemplo/";
        if (isset($_FILES["avatar"])) {
            $ret = array();

            $error = $_FILES["avatar"]["error"];

            if (!is_array($_FILES["avatar"]["name"])) { //single file
                $fileName = $_FILES["avatar"]["name"];
                move_uploaded_file($_FILES["avatar"]["tmp_name"], $output_dir . $fileName);
                $ret[] = $fileName;
            } else {
                $fileCount = count($_FILES["avatar"]["name"]);
                for ($i = 0; $i < $fileCount; $i++) {
                    $fileName = $_FILES["avatar"]["name"][$i];
                    move_uploaded_file($_FILES["avatar"]["tmp_name"][$i], $output_dir . $fileName);
                    $ret[] = $fileName;
                }
            }
            echo json_encode($ret);
        }
        //echo json_encode($_FILES['avatar']['name']);
    }

    public function get_nombre_dia($fecha = fecha) {
        $fechats = strtotime($fecha); //pasamos a timestamp
//el parametro w en la funcion date indica que queremos el dia de la semana
//lo devuelve en numero 0 domingo, 1 lunes,....
        switch (date('w', $fechats)) {
            case 0: return "Domingo";
                break;
            case 1: return "Lunes";
                break;
            case 2: return "Martes";
                break;
            case 3: return "Miercoles";
                break;
            case 4: return "Jueves";
                break;
            case 5: return "Viernes";
                break;
            case 6: return "Sabado";
                break;
        }
    }

}
