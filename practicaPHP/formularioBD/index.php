<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

    <title>Document</title>
</head>
<body>
    <div class="container mt-5 bg-light border border-info">
        <h3 class="text-center text-info mt-5">FORMULARIO PHP</h3>
        <form action="insertar1.php" method="post" class="mt-5">
            <div class="form-row">
                <div class="col-6">
                    <label for="name" class="text-info">Name</label>
                    <input type="text" class="form-control border border-info text-secondary" name="name" required>
                </div>
                <div class="col-6">
                    <label for="last_name" class="text-info">Last name</label>
                    <input type="text" class="form-control border border-info text-secondary" name="last_name" required>
                </div>
                <div class="col-10 col-md-7 mt-5 offset-2 offset-md-4 ">
                    <label for="fecha_nacimiento" class="text-info">Fecha nacimiento:</label>
                    <input type="date" id="fecha_nacimiento" class="border border-info text-secondary" name="fecha_nacimiento" required>
                </div>
                <!--<div class="col-6 mt-5">
                    <label for="last_update">Last update:</label>
                    <input type="datetime" id="last_update" name="last_update" value="">
                </div>-->
                <input type="submit" class="btn btn-info col-3 mx-auto my-5" name="submit" value="Submit">
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.min.js" integrity="sha384-VHvPCCyXqtD5DqJeNxl2dtTyhF78xXNXdkwX1CZeRusQfRKp+tA7hAShOK/B/fQ2" crossorigin="anonymous"></script>
</body>
</html>