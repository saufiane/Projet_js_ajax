<?php

require_once('../inc/bdd.php');

$sql = 'SELECT * FROM arts_martiaux WHERE prenom LIKE ? OR nom LIKE ?';
$query = $db->prepare($sql);
$search = "%" . $_POST["name"] . "%";
$query->execute(array($search,$search));
$result = $query->fetchAll(PDO::FETCH_ASSOC);
// var_dump($result);

// Retourne les valeurs en JSON
echo(json_encode($result));

