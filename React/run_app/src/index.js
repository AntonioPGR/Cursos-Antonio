import React from "react";
import ReactDom from "react-dom";

import Header from './components/header.js';
import Footer from './components/footer.js';
import Products from "./components/products.js";
import ShopCart from "./components/shopCart.js";

import './css/reset.css';

class SuperMarket extends React.Component{
    // Função que decide qual código será renderizado no 'main', isso é decidido baseado na url
    renderMain(){
        const path = window.location.pathname
        console.log(path)
        switch(path){
            case '/':
                return <Products />
            case '/carrinho':
                return <ShopCart />
            default:
                return <Header />
        }
    }

    render(){
        return(
            <div>
                <Header />
                {/* 
                Criar links do menu aqui
                <Links />
                */}
                {this.renderMain()}
                <Footer>
                    <a rel="noopener noreferrer" className="footer_link" href='https://www.instagram.com' target="_blank">Instagram</a>
                    <a rel="noopener noreferrer" className="footer_link" href='https://www.twitter.com' target="_blank">Twitter</a>
                    <a rel="noopener noreferrer" className="footer_link" href='https://www.gmail.com' target="_blank">Contato</a>
                </Footer>
            </div>
        )
    }
}

ReactDom.render(
    <SuperMarket />,
    document.getElementById('root')
)