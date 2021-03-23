<?php

try{
    // bdd en local avec php my admin
    $db = new PDO('mysql:host=127.0.0.1;dbname=projet_js', 'root','');

    // bdd sur O2switch
    
    // $db = new PDO('mysql:host=127.0.0.1;dbname=wbmq4652_projet_js', 'wbmq4652_saufiane','sosososo=789');
    $db->exec('SET NAMES "UTF8"');
    }catch (PDOException $e){
    echo 'Erreur : '. $e->getMessage();
    die();
    }

?>