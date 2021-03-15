<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Projet JS</title>
  </head>
  <body>
    <h1>Combattants Internationaux</h1>
    <form>
      <label for="name">Veuillez choisir un combattant:</label>
      <input list="fighters" name="name" id="name" />
      <datalist id="fighters"> </datalist>
      <input type="submit" id="btn" value="Valider" />
    </form>
    <div id="combattants"></div>
    <script src="assets/js/app.js"></script>
  </body>
</html>
