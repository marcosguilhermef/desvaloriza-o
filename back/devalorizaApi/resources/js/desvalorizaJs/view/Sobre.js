import React, {useRef} from 'react'
import { Row, Col, Container, Form, Button } from 'react-bootstrap'
import NavbarHome from '../component/navbar/navbarSsr'; 
import {Helmet} from "react-helmet";


const Header = () => {
    return(
        <Helmet>
            <title>Ajuda</title>
            <meta name="description" content="Desvalorização é uma ferramenta criada para mostrar a perda do poder de compra do real nos últimos anos e como isso afeta diretamente na vida dos brasileiros." />
            <meta name="facebook-domain-verification" content="dz0rtvkf5s20ww9d9g1m8j960kp7bv" />
            <meta property="og:url"            content="http://desvalorizacao.com/" />
            <meta property="og:type"           content="site" />
            <meta property="og:title"          content="Quando o seu dinheiro se desvalorizou nos últimos anos? " />
            <meta property="og:description"    content="Essa ferramenta tem o objetico de demonstrar o tanto que o seu dinheiro se desvalorizou nos últimos anos." />
            <meta property="og:image"          content="https://desvalorizacao.com/image/android-chrome-512x512.png" />
        </Helmet>
    )
}

const Sobre = (props) => {
    const pix = useRef(null);
    const bitcoin = useRef(null);
    const buttaoPix = useRef(null);
    const butaoBitcoin = useRef(null);

    function copiar(modo,botao){
      let imput = modo.current
      var botao = botao.current
      imput.select()
      document.execCommand('copy');
      textoBotao(botao,'Copiado')
      alterarBotao(botao)
      setTimeout(() =>{
        textoBotao(botao,'Copiar')
        alterarBotao(botao)
      },2000)
    }
    function alterarBotao(botao){
        botao.disabled = !botao.disabled
    }
    function textoBotao(botao, texto){
        botao.textContent = texto

    }
    return (
        <>
        <Header/>
        <NavbarHome/>
        <Container fluid>
            <main className="m-sm-5 p-sm-5 ">
                <Row>
                    <Col className="text-center border-radius m-1" sm>
                        <h3 className="mt-4">Sobre</h3>
                        <p className="text-justify">
                            Projeto desenvolvido com o objetivo de informar sobre a desvalorização do real durante as útimas decádas. Este projeto ainda não está completo, portanto toda semana (domingo) é lançada alguma atualização.
                            Atualmente estamos usando o indice IPCA trimestral como referência.
                        </p>
                        <p className="text-center mt-5">
                            Versão atual: 1.2.0
                        </p>
                    </Col>
                    <Col className="text-center border-radius m-1" sm>
                        <h3 className="mt-4">Ajude o projeto</h3>
                        <p className="text-justify">
                            Caso tenha interesse em colabora com o projeto, aqui está algumas de nossas contas:
                        </p>
                        <p className="text-justify">
                            Pix: <Form.Control type="text" name="pix" value="f5e54f68-4336-4bcd-bbf3-63e3adf40aea" ref={pix} readOnly/> 
                            <Button className="mt-2" onClick={ () => copiar(pix,buttaoPix) } ref={buttaoPix} >Copiar</Button>
                        </p>
                        <p className="text-justify">
                            Bitcoin: <Form.Control type="text" name="bitcoin" value="15FhvJuYSeK9PE8KALnv4jZyauxhJGPnf3" ref={bitcoin} readOnly/>
                            <Button className="mt-2" onClick={ () => copiar(bitcoin,butaoBitcoin) } ref={butaoBitcoin} >Copiar</Button>
                        </p>
                    </Col>
                </Row>
            </main>
        </Container>
    </>

    )
}
export default Sobre