// const $button = document.querySelector('button#bt')
// const click = () => console.log('clicou no botão')
// $button.addEventListener('click', () => console.log('clicou'))

const criarBotao = (text, callback=null) => {
    const $body = document.querySelector('body')
    const $button = document.createElement('button')
    $button.textContent = `${text}`

    if (callback != null){
        callback($button)
    }

    $body.insertAdjacentElement('afterbegin', $button)
    return $button;
}

criarBotao('clique e veja a magica', (botao) =>  { 
    botao.addEventListener('clicka', () => botao.style.cssText = `color: orange;
    font-size: 1.5em;`)
})
criarBotao('botão 2')


