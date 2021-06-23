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
    let fragment = document.createDocumentFragment();

    tarefas.forEach((element) => {

        // criando paragrafo onde ficara o elemento da lista
        let p = document.createElement('p')
        p.setAttribute('id', `${element[0]}`)

        // checkbox de concluido
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')

        // span contendo o texto
        let text = document.createElement('span')
        text.textContent = element[1]

        // botão de deletar
        let bt_excluir = document.createElement('input')
        bt_excluir.setAttribute('type', 'button')
        bt_excluir.setAttribute('value', '🗑️')
        bt_excluir.setAttribute('class', 'bt_excluir')
        bt_excluir.setAttribute('onclick', `deletar(${element[0]})`)
        //num => delete tarefas[num]

        // inserindo conteudo no paragrafo
        p.insertAdjacentElement('afterbegin', checkbox)
        p.insertAdjacentElement('beforeend', text)
        p.insertAdjacentElement('beforeend', bt_excluir)
        fragment.appendChild(p)
    })
    lista.appendChild(fragment)
}
