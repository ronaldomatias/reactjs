import React from 'react';
import '../css/listarprodutos.css';
import Produto from '../../components/Produto';

class ListarProdutos extends React.Component {
    render() {
        let produtos = []
        for (let i = 0; i < 2; i++) {
            produtos.push(<Produto/>)
        }

        return (
            <div class="centro">
                {produtos}
            </div>
        )
    }
}

export default ListarProdutos

