<?php

class MercadoPago_controller extends Controller {

    public function __construct() {
        parent::__construct();
    }
    public function GenerarId(){
        echo json_encode(uniqid(),JSON_PRETTY_PRINT);
    }
    public function EnviarPago() {

// SDK de Mercado Pago
        require URLCOMPOSER_VENDOR . 'autoload.php';

// Agrega credenciales
        MercadoPago\SDK::setAccessToken('TEST-570091214778621-091604-6eab53629a9fc4604c4b8a2ba68febe4-645651336');

// Crea un objeto de preferencia
        $preference = new MercadoPago\Preference();
       
       //$preference->auto_return = "approved";
// Crea un ítem en la preferencia
        $item = new MercadoPago\Item();
        $item->title = 'pantalon';
        $item->quantity = 1;
        $item->unit_price = 100.00;
        $preference->items = array($item);
        $preference->save();
        //print_r($preference);
        echo json_encode($preference->id);
    }

    public function Ejemplo() {
        $body = @file_get_contents('php://input');
        $data = json_decode($body);
        print_r($data);
        
        //?preference_id=645651336-d932e671-a9f0-462b-b7ee-fad3a46a76d0&external_reference=&back_url=http%3A%2F%2Flocalhost%2Fclinica%2FMercadopago%2FEjemplo%3Fcollection_id%3D29795461%26collection_status%3Dapproved%26external_reference%3Dnull%26payment_type%3Dcredit_card%26merchant_order_id%3D1781798700%26preference_id%3D645651336-d932e671-a9f0-462b-b7ee-fad3a46a76d0%26site_id%3DMPE%26processing_mode%3Daggregator%26merchant_account_id%3Dnull&payment_id=29795461&payment_status=approved&payment_status_detail=accredited&merchant_order_id=1781798700&processing_mode=aggregator&merchant_account_id=
    }

}
