import React, {useState, useEffect} from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap'
import './CotacaoAtual.css'

const Informacoes = ({props}) => {
    const taxa                      =       (((parseFloat(props.taxa) || 1)-1)*100).toFixed(6)
    const {dataInicial, dataFinal}  =       props.datas
    const [status, setStatus]       =       useState('ocioso')
    useEffect( () =>{
        setStatus(props.status)
    },[props.status,props.taxa])

    if(status === 'sucesso')
    {
      return (
          <>
              <Row><Col>Taxa:</Col><Col>{ taxa }%</Col></Row>
              <Row><Col>Início do periodo:</Col><Col>{ dataInicial }</Col></Row>
              <Row><Col>dataInicial:</Col><Col>{ dataFinal }</Col></Row>
          </>
      )
   }
  else{
      return(
      <>
          <Row className="loading a"><Col>Taxa</Col></Row>
          <Row className="loading b"><Col>Início do periodo:</Col></Row>
          <Row className="loading c"><Col>dataInicial</Col></Row>
      </>
      )
  }
}
export const  CotacaoAtual = (props) => {
    const valorConvertido           =       props.valorconvertido
    const receberValor              =       props.recebervalor
    return(
    <>
            <Card.Title className="text-center">Valor atual</Card.Title>
            <Informacoes props={props}/>
            <Form.Group controlId="valor-atual">
                <Form.Label>Valor atual</Form.Label>
                <Form.Control type="number" placeholder="R$ 0,00" value={valorConvertido} onChange={receberValor}/>
            </Form.Group> 
            {/* <h5>Com esse valor você compraria hoje:</h5>
            <ul>
                <li>35kg de 🥩 carne</li>
                <li>1500 unidades de 🥚 ovo</li>
                <li>35kg de 🍞 pão</li>
                <li>🍽 PF</li>

            </ul> */}
    </>
    )
}