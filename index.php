<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="assets/css/style.css"/>
    <title>Projet JS</title>
  </head>
  <body>
  <div>
  <h1 class="title text-white"width="50px">Combattants Internationaux</h1>
  </div>
  <div>
    <form class="form_so">
      <label class="text-white" for="name">Veuillez choisir un combattant:</label>
      <input list="fighters" name="name" id="name" />
      <datalist id="fighters"> </datalist>
      <input type="submit" id="btn" value="Valider" />
    </form>
    </div>
    <div class="text-white" id="combattants"></div>
    <script src="assets/js/app.js"></script>
  </body>
</html>
