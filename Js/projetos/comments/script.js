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
            show_comments();
        })
        .fail((jqXHR, textStatus, msg)=>{
            alert(jqXHR, textStatus, msg);
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
            // converte o json em um array ou em 0 caso não haja comentarios
            const comments = JSON.parse(msg);

            // verifica se há ou não comentarios
            if(comments === 0){
                console.log('no comments')
            }else{
                // apaga a div de comentários 
                $("div#comments").remove();

                // recira a div
                $("main").after("<div id='comments'></div>");

                // insere os comentarios
                comments.forEach(cmt => {
                    console.log(cmt);
                    $("div#comments").append(`<h3> ${cmt['nome']} </h3> <p>${cmt['comentario']}</p>`);
                });
            }
        })
        .fail((jqXHR, textStatus, msg)=>{
            alert("fail");
            alert(jqXHR, textStatus, msg);
        })
    }
});