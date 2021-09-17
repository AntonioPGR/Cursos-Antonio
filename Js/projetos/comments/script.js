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
        })
        .done((msg)=>{
            alert("Sucess")
        })
        .fail((jqXHR, textStatus, msg)=>{
            alert(jqXHR, textStatus, msg)
        });
    });

    // exibe os comentários na tela
    function show_comments(){
        $.ajax({
            type: "post",
            url: "comments.php",
            data: {action:'select'}, 
            datatype: 'application/json',
        })
        .done((msg)=>{
            console.log(msg)
        })
        .fail((jqXHR, textStatus, msg)=>{
            alert("fail");
            alert(jqXHR, textStatus, msg);
        })
    }
});