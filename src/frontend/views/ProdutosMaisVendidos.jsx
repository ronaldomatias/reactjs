import React from 'react';
import Cabecalho from '../../components/Cabecalho.jsx';
import ListarProdutos from './ListarProdutos.jsx';
import '../css/produtos-mais-vendidos.css'


class ProdutosMaisVendidos extends React.Component {
    render() {
        return (
            <div>
                <Cabecalho />
                <label class="produtos-mais-vendidos">10 PRODUTOS MAIS VENDIDOS</label>
                <ListarProdutos />
            </div>
        )
    }
}

export default ProdutosMaisVendidos

