import React from 'react'
import { Bar } from 'react-chartjs-2';

export class GraficoBarra extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inflacoes: [{ taxa: 1, Data: '25-04-2025' }]
        }
    }
    taxasParametrizadas() {
        var colors = this.color()
        let taxas = this.state.inflacoes.map((e, i, a) => {
            return {
                'data': [e['taxa']],
                'label': e['Data'],
                'title': e['Data'],
                backgroundColor: colors[i],

            }
        });
        return taxas
    }
    dados() {
        let labelsArray = this.state.inflacoes.map((e) => e['Data'])
        let taxas =  this.state.inflacoes.map( (e) =>  e['taxa']  );    //this.taxasParametrizadas()
        return {
            labels: labelsArray,
            datasets: [
                {
                    label: 'Inflação percentual trimestral',
                    data: taxas,
                    backgroundColor: "rgba(255,99,132,0.2)",
                    borderColor: "rgba(255,99,132,1)",
                    borderWidth: 1,
                    hoverBackgroundColor: "rgba(255,99,132,0.4)",
                    hoverBorderColor: "rgba(255,99,132,1)",
                }
            ],
            options: {
                responsive: true,
                maintainAspectRatio: true,
                aspectRatio:0,
                //onResize :null,
                layout: {
                    padding: '20px'
                },
                scales: {
                    yAxes: [{
                        stacked: true,
                        gridLines: {
                            display: true,
                            color: "black"
                        }
                    }]
                }
            }
        }
    }
    color() {
        let array = Array(this.state.inflacoes.length)

        for (let i = 0; i < this.state.inflacoes.length; i++) {
            let r = Math.random() * 255
            let g = Math.random() * 255
            let b = Math.random() * 255
            array[i] = `rgba(${r}, ${g}, ${b}, 1)`
        }
        return array
    }
    componentDidUpdate(prevProps, prevState) {
        if (JSON.stringify(this.props.inflacao) !== JSON.stringify(prevProps.inflacao)) {
            this.setState({ inflacoes: this.props.inflacao })
        }
    }
    componentDidMount() {
        this.setState({ inflacoes: this.props.inflacao })
    }
    render() {
        return (
            <div className="chart-container">
                <Bar data={this.dados()} />
            </div>
        )
    }
}
