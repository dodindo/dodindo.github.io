<?php

    include("connect.php");
    $zmienna_1=$_POST['pole_formularz_1'];
    $zmienna_2=$_POST['pole_formularz_2'];
    $zmienna_3=$_POST['pole_formularz_3'];
    $zmienna_4=$_POST['pole_formularz_4'];

    $zapytanie = pg_query("INSERT INTO public.tabela_przykladowa(
	dane_tekstowe, dane_numeryczne, dane_geograficzne)
	VALUES ('$zmienna_1', '$zmienna_2', ST_GeomFromEWKT('SRID=4326; POINT($zmienna_3 $zmienna_4)'));");
    
    /*if ($zapytanie){
        echo "działa";
    } else{
        echo "nie działa";
    };*/
    
    pg_close($polaczenie);

?>