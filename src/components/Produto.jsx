import React from 'react';
import '../frontend/css/produto.css';


// TODO: criar os atributos do produto (nome, qtde_vendida, etc)
// para que se consiga adicionar dinamicamente os valores

class Produto extends React.Component {
    render() {
        return (
            <div>
                <div class="container-produtos">
                    <label class="lblProductInfo">Ivermectina 50ml</label>
                    <img src='src/images/medicamento.jpg'></img>
                    <label class="lblProductInfo">1087 unids.</label>
                </div>
                <div class="espacador"></div>
            </div>
        )
    }
}

export default Produto
