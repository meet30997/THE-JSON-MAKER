<?php
header('Content-disposition: attachment; filename=YourJson.json');
header('Content-type: application/json');

$arraydata = array();	
for( $i = 1; $i<$_GET['custId']; $i = $i +1 ) {
	$var1 = 'txtRow';
    $var2 = 'Selw';
    $var3 = $var1.$i;
	$var4 = $var2.$i;
	${"cl".$i} = $_GET[$var3];
    ${"rw1".$i} = $_GET[$var4];
	
	}
	
	for( $i = 1; $i<$_GET['custId']; $i = $i + $_GET['counts'] ) {
		
	for($j = 0; $j<$_GET['counts']; $j++){
    $k= $j +$i;
	@${"myObj".$i} ->${"cl".$k} = "${"rw1".$k}";
	
	}
	$arraydata[] = ${"myObj".$i};
	
	}
	
	$myJSON = json_encode($arraydata,JSON_PRETTY_PRINT);
    echo $myJSON;


?>

   