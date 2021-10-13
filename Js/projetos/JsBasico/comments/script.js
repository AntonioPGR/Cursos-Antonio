$(()=>{
    //mostra os comentários assim que a pagina carrega
    show_comments();

    // dispara um evento ao clicar no botão de submit
    $('#bt_submit').click(()=>{
        const name = $('#input_name').val();
        const comment = $("#input_comment").val();

        $("#input_name").text('');
        $("#input_comment").text('');

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

            // apaga a div de comentários 
            $("div#comments").remove();
            // recria a div
            $("body").append("<div id='comments'></div>");

            // verifica se há ou não comentarios
            if(comments === 0){
                $("div#comments").append(`
                <article id='nocomment' class='comment gray'>
                    <p class='texto'>Não temos nenhum comentário ainda! comente agora e seja o primeiro a dar sua opnião sobre o produto!</p>
                </article>`
                )
            }else{
                var color = 'white';
                // insere os comentarios
                comments.forEach(cmt => {
                    if(color === 'white'){color = 'gray'}else{color = 'white'};
                    $("div#comments").append(`
                        <article id='comment-${cmt['id']}' class='comment ${color}'>
                            <h3 class='nome'> ${cmt['nome']} </h3> 
                            <p class='texto'>${cmt['comentario']}</p>
                            <button class='delete_button'>delete</button>
                        </article>
                    `);

                    $(`article#comment-${cmt['id']} > button`).click(()=>{
                        delete_comments(cmt['id']);
                    });
                });
            }
        })
        .fail((jqXHR, textStatus, msg)=>{
            alert("fail");
            alert(jqXHR, textStatus, msg);
        })
    }

    // deleta os comentários
    function delete_comments(id){
        $.ajax({
            type: "post",
            url: "comments.php",
            data: {action: 'delete', id:id},
        })
        .done((msg)=>{
            show_comments()
        })
        .fail((msg)=>{
            alert('fail')
        })
    }
});