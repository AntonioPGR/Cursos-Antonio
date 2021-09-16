$(()=>{
    //mostra os comentários assim que a pagina carrega
    show_comments();

    // dispara um evento ao clicar no botão de submit
    $('#bt_submit').click(()=>{
        const name = $('#input_name').val();
        const comment = $("#input_comment").val();

        // requisição ajax para criar novo comentário
        $.ajax({
            type: "post",
            url: "comments.php",
            data: {action:'create', name: name, comment: comment},
            success: () => {
                console.log('deu certo')
                show_comments();
            }
        });
    });

    // exibe os comentários na tela
    function show_comments(){
        $.ajax({
            type: "post",
            url: "comments.php",
            data: {action:'select'},
            dataType: "JSON",
            success: (response) => {
                console.log('ola');
                alert(response);
            }
        });
    }
});