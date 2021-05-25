import moment from 'moment'
import React, {useState} from 'react'
import { Card, Form, Dropdown } from 'react-bootstrap'
export const  CotacaoPassada = (props) => {
    const [select,selectItem]       =       useState(props?.opcoesIndice && 'IPCA mensal')
    const valorConvertido           =       props.valorconvertido
    const receberValor              =       props.recebervalor
    const dataPassada               =       props.dataPassada
    const optionsIndice             =       props?.opcoesIndice
    const {Mínima}                  =       {...props.dolar} 
    return(
    <>
        <Card.Title className="text-center">Cotação Inicial</Card.Title>
        <Form.Group>
        <Dropdown className='lg-12'>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Índice de correção ({select})
            </Dropdown.Toggle>
            <Dropdown.Menu>
                { optionsIndice.map( (e) => {
                    return (<Dropdown.Item key={e['_id']} onClick={ ()=>  selectItem(e['tag']) }>{ e['tag'] }</Dropdown.Item>)
                })}
            </Dropdown.Menu>
        </Dropdown> 
        </Form.Group>

        <Form.Group controlId="dataInicial">
            <Form.Label>Data inicial:</Form.Label>
            <Form.Control type="date" onChange={dataPassada} min="1995-01-01" max={moment().format('YYYY-MM-DD')}  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"></Form.Control>
        </Form.Group>
        <Form.Group controlId="dataFinal">
            <Form.Label>Data final:</Form.Label>
            <Form.Control type="date" onChange={dataPassada}  min="1995-01-01" max={moment().format('YYYY-MM-DD')}  pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"></Form.Control>
        </Form.Group>
        <Form.Group controlId="valor-passado">
            <Form.Label>Valor atual:</Form.Label>
            <Form.Control type="number" placeholder="R$ 0,00" value={valorConvertido} onChange={receberValor}/>
        </Form.Group>
           <h5>Com esse valor você compraria naquela época:</h5>
            <ul>
                <li> Valor do 💵 (Dólar) nesse dia: { 'R$ ' + (Mínima || 'Não há dados sobre esse dia') }</li>
            {/*
                <li>1500 unidades de 🥚 ovo</li>
                <li>35kg de 🍞 pão</li>
                <li>🍽 PF</li> 
            */}
        </ul> 
    </>    
    )
}
