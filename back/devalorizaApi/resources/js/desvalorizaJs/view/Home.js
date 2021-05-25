import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import { CotacaoAtual, CotacaoPassada } from '../component/home/index'
import { GraficoBarra } from '../component/graficos/GraficoBarra'
import { connect } from 'react-redux';
import { fetchDados, setData, fetchConfig } from '../server/apiProvider'
import produtorio from '../component/funcoesCompartilhadas/produtorio'
import moment from 'moment';
import {Helmet} from "react-helmet";
import NavbarHome from '../component/navbar/navbarSsr'; 
import ReactGA from 'react-ga'
ReactGA.initialize('UA-196508960-1', { debug: false });

const mapStateToProps = state => {
    return { ...state }
};
const mapDispatchToProps = () => {
    return {
        fetchDados, setData, fetchConfig
    }
};
const Header = () => {
    return(
        <Helmet>
            <title>Desvalorização</title>
        </Helmet>
    )
}
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taxa: 1.5,
            valorAtual: 0,
            valorPassado: 0,
            dolar: this.props.api.dolar,
            datas: {
                dataInicial: this.props.api.datas.dataInicial,
                dataFinal: this.props.api.datas.dataFinal
            },
        }
        this.receberValor = this.receberValor.bind(this)
        this.handleDateSubmit = this.handleDateSubmit.bind(this)
    }
    receberValor(e) {
        //var valor = !isNaN(e.target?.value) ? e.target?.value : 0
        if (e.target.id === 'valor-atual') {
            this.setState({ valorAtual: parseFloat(e.target?.value) })
            this.converterValor()
        } else {
            this.setState({ valorPassado: parseFloat(e.target?.value) })
            this.converterValorAoContrario()
        }
    }
    converterValor(callback) {
        this.setState((state) => ({ valorPassado: state.valorAtual / state.taxa }))
        return callback
    }
    converterValorAoContrario(callback) {
        this.setState((state) => ({ valorAtual: state.valorPassado * (state.taxa) }))
        return callback
    }
    converterValorPassadoEContraio() {
        this.converterValor(this.converterValorAoContrario())

    }
    async CalcularVariareis() {
        await this.props.fetchDados(this.state.datas);
        await this.props.fetchConfig();
        console.log('as',produtorio(this.props.api.dadosHitoricos))
        this.setState({ taxa: produtorio(this.props.api.dadosHitoricos) })
    }
    atualizaStoreDeData(state, key) {
        this.props.setData({ state, key: key }, this.CalcularVariareis())
    }
    handleDateSubmit(e) {
        const state = { ...this.state.datas, [e.target.id]: moment(e.target?.value, 'YYYY-MM-DD',).format('DD-MM-YYYY') }
        this.setState({ datas: state }, () => { this.atualizaStoreDeData(state, e.target.id) });
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.taxa !== prevState.taxa) {
            this.converterValorPassadoEContraio()
            this.converterValorAoContrario()
            console.log(this.props.api)
            console.log(this.state)
        }
        //console.log('props',this.props)
    }
    componentDidMount() {
        ReactGA.pageview(window.location.pathname + window.location.search);
        this.CalcularVariareis();
    }
    render() {
        /*const content = {
                height: '100%',
              } */
        return (
            <>
                <Header/>
                <NavbarHome/>
                    <Container fluid>
                        <main className="m-sm-5 p-sm-5 ">
                            <Row>
                                <Col className="m-1">
                                    <Card style={{ height: '100%' }}>
                                        <Card.Body>
                                            <CotacaoPassada valorconvertido={this.state.valorPassado} recebervalor={this.receberValor} dataPassada={this.handleDateSubmit} opcoesIndice={this.props.config.indices} datas={this.state.datas} dolar={this.props.api.dolar[1]}/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col className="m-1">
                                    <Card style={{ height: '100%'}}>
                                        <Card.Body>
                                            <CotacaoAtual valorconvertido={this.state.valorAtual} recebervalor={this.receberValor} taxa={this.state.taxa} datas={this.state.datas} status={this.props.api.status} dolar={this.props.api.dolar}/>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                            <Row>
                                <Col className="m-1">
                                    <Card style={{ height: '100%'}}>
                                        <Card.Body>
                                            <GraficoBarra inflacao={this.props.api.dadosHitoricos} />
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </main>
                    </Container>
            </>
        )
    }
}
export default connect(mapStateToProps,mapDispatchToProps())(Home);

export {Home};
//export default storeConfig;
