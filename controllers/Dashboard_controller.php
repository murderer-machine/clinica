<?php

class Dashboard_controller extends Controller {

    public function __construct() {
        parent::__construct();
        $this->Verificar_Session();
    }

  
    public function Inicio() {
        $this->view->render('Dashboard/index');
    }

    

}
