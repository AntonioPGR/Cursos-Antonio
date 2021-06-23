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
    
    exibir()
    
    txt_tarefa.value = ''
})

function deletar(num){
    delete tarefas[num]
    exibir()
}

function exibir() {
    lista.innerHTML = ''
    tarefas.forEach((element) => lista.innerHTML += `<p id='${element[0]}'><input type="checkbox">${element[1]}<input type="button" onclick="deletar(${element[0]})" value="Excluir"></p>`)
}
