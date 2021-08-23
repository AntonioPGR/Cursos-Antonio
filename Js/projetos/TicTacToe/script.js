"use strict"

let table = [
    [document.getElementById('11'), document.getElementById('12'), document.getElementById('13')],
    [document.getElementById('21'), document.getElementById('22'), document.getElementById('23')],
    [document.getElementById('31'), document.getElementById('32'), document.getElementById('33')],
]

let jogo = {
    has_win: false,
    add_event(){
        table.map((values, line)=>values.map((v, column)=>{
            v.addEventListener('click', () => this.marcar(line, column))

            v.addEventListener('mouseenter', ()=>{
                if (v.textContent === '' && this.has_win == false){
                    v.style.cursor = 'pointer'
                } else {
                    v.style.cursor = 'auto'
                }
            })
        }))
    },
    marcar(linha, coluna){
        if (this.has_win == false){
            let quadrado = table[linha][coluna]
            if (quadrado.textContent == ''){
            quadrado.innerHTML = `${turn.turno}`
            this.verify(linha, coluna, quadrado)
            turn.altern()
            }
        }
    },
    verify(linha, coluna){
        linha = Number(linha)
        coluna = Number(coluna)
        let quadrado_marcado = table[linha][coluna]
        let conditions;
        let nlinha = linha;
        let ncoluna = coluna;

        function iscompleto(qr1=0, qr2=0, option='l'){
            let condition1;
            let condition2;
            let quadrado_1;
            let quadrado_2;

            switch(option){
                case 'l':
                    quadrado_1 = nlinha + qr1
                    quadrado_2 = nlinha + qr2
                    condition1 = quadrado_marcado.textContent == table[quadrado_1][ncoluna].textContent
                    condition2 = quadrado_marcado.textContent == table[quadrado_2][ncoluna].textContent
                break;

                case 'c':
                    quadrado_1 = ncoluna + qr1
                    quadrado_2 = ncoluna + qr2
                    condition1 = quadrado_marcado.textContent == table[nlinha][quadrado_1].textContent
                    condition2 = quadrado_marcado.textContent == table[nlinha][quadrado_2].textContent
                break;
                
                case 'd':
                    condition1 = quadrado_marcado.textContent == table[nlinha+qr1][ncoluna+qr2].textContent

                    condition2 = quadrado_marcado.textContent == table[nlinha+qr1+qr1][ncoluna+qr2+qr2].textContent
                break;
                
                case 'dm':
                    condition1 = quadrado_marcado.textContent == table[nlinha-1][ncoluna-1].textContent
                    condition2 = quadrado_marcado.textContent == table[nlinha+1][ncoluna+1].textContent

                    if (condition1 && condition2){
                        break;
                    }
                    
                    condition1 = quadrado_marcado.textContent == table[nlinha-1][ncoluna+1].textContent
                    condition2 = quadrado_marcado.textContent == table[nlinha+1][ncoluna-1].textContent

                break;
            }

            return [condition1, condition2]
        }

        // verifica linhas verticais
        switch (linha) {
            case 0:
                conditions = iscompleto(1, 2, 'l')
            break;
            case 1:
                conditions = iscompleto(-1, 1, 'l')
            break;
            case 2:
                conditions = iscompleto(-1, -2, 'l')
            break;
        }

        if (conditions[0]===true && conditions[1]){
            this.win()
            return
        } else {
            conditions = ''
        }

        // verifica linha horizontal
        switch (coluna){
            case 0:
                conditions = iscompleto(1, 2, 'c')
            break;
            case 1:
                conditions = iscompleto(-1, 1, 'c')
            break;
            case 2:
                conditions = iscompleto(-1, -2, 'c')
            break;
        }

        if (conditions[0]===true && conditions[1]){
            this.win()
            return
        } else {
            conditions = ''
        }

        // verifica diagonais
        switch(linha){
            case 0:
                switch(coluna){
                    case 0:
                        conditions = iscompleto(1, 1, 'd')
                    break;
                    case 2:
                        conditions = iscompleto(1, -1, 'd')
                    break;
                }
            break;
            case 1:
                switch(coluna){
                    case 1:
                        conditions = iscompleto(0, 0, 'dm')
                    break;
                }
            break;
            case 2:
                switch(coluna){
                    case 0:
                        conditions = iscompleto(-1, 1, 'd')
                    break;
                    case 2:
                        conditions = iscompleto(-1, -1, 'd')
                    break;
                }
            break;
        }

        if (conditions[0]===true && conditions[1]){
            this.win()
            return
        } else {
            conditions = ''
        }
    },
    win(){
        let main = document.querySelector('main')

        let p = document.createElement('p')
        p.textContent = `Parabéns! o jogador ${turn.turno.toUpperCase()} venceu!`
        p.setAttribute('id', 'p_winner')
        p.appendChild(document.createElement('br'))

        let button = document.createElement('button')
        button.textContent = 'restart'
        button.setAttribute('id', 'restart')
        button.addEventListener('click', this.restart)

        p.appendChild(button)
        main.appendChild(p)

        this.has_win = true
    },
    restart(){
        document.getElementById('p_winner').remove()
        table.map((value)=>value.map((text)=> text.innerText = ''))
        if (turn.turno != 'x'){
            turn.altern()
        }
        this.has_win = false
    }
}

let turn = {
    turno: 'x',
    create(){
        let div = document.getElementById('turn')
        div.style.cssText = `text-align: center;
        color: white;
        font-size: 1.5em;
        margin: 5px;
        margin: 5px 0px;`

        // paragrafo de texto
        let p = document.createElement('p')
        p.setAttribute('id', 'p_turn')
        p.textContent = `O turno é de: `

        //span que mostrara o simbolo da jogada
        let span = document.createElement('span')
        span.setAttribute('id', 'span_turn')
        span.textContent = `${this.turno}`
        span.style.textTransform = 'UpperCase'

        p.insertAdjacentElement('beforeend', span)
        div.insertAdjacentElement('afterbegin', p)
        
    },
    altern(){
        if (this.turno == 'x'){
            this.turno = 'o'
        } else{
            this.turno = 'x'
        }
        let span = document.getElementById('span_turn')
        span.innerHTML = `${this.turno.toUpperCase()}`
    }
}

turn.create()
jogo.add_event()
