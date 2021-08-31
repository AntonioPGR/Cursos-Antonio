<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form  action="crud.php" method="post">
        <h1>Criação de usuario</h1>
        <p>
            <label for="name">Nome</label>
            <input type="text" name="name" id="name_input">
        </p>
        <p>
            <label for="last_name">Sobrenome</label>
            <input type="text" name="last_name" id="last_name_input">
        </p>
        <p>
            <label for="cel">Telefone</label>
            <input type="tel" name="cel" id="celphone_input">
        </p>
        <p>
            <input type="submit" value="Cadastrar">
        </p>
    </form>
</body>
</html>