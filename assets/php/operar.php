<?php 

include('operacion.php');

$num_1 = $_POST['num_1'];
$num_2 = $_POST['num_2'];
$operacion = $_POST['operacion'];

$resultado = new Operaciones($num_1, $num_2);

switch ($operacion) {
    case 'sumar':
        echo $resultado->sumar($num_1, $num_2);
        break;

    case 'restar':
        echo $resultado->restar($num_1, $num_2);
        break;    
    
    case 'multiplicar':
        echo $resultado->multiplicar($num_1, $num_2);
        break;

    case 'dividir':
        echo $resultado->dividir($num_1, $num_2);
        break; 

    default:
        echo 'error';
        break;
}