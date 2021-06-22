let txt_tarefa = document.getElementById('input_afzr')
let button = document.getElementById('adicionar')
let lista = document.getElementById('tarefas')
let n_tarefa = 0
let tarefas = []

button.addEventListener('click', () => {
    if (txt_tarefa.value == ''){
        window.alert('Atenção, você precisa digitar algo para adicionar a sua lista!')
        return
    }

    tarefas.push([n_tarefa, txt_tarefa.value])
    n_tarefa++
    console.log(tarefas)
    lista.innerHTML += `<p id='${tarefas[tarefas.length - 1][0]}'><input type="checkbox">${txt_tarefa.value}<input type="button" onclick="deletar(${tarefas[tarefas.length - 1][0]})" value="Excluir"></p>`
    txt_tarefa.value = ''
})

function deletar(num){
    console.log(num)
}
