import './App.css';
import React, { Component } from 'react';

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayValue: "0", // Valor exibido no visor da calculadora
        };
    }

    // Função para lidar com cliques nos botões numéricos
    handleDigitClick = (digit) => {
        const { displayValue } = this.state;

        if (displayValue === "0") {
            this.setState({ displayValue: digit });
        } else {
            this.setState({ displayValue: displayValue + digit });
        }
    };

    // Função para lidar com cliques no botão de igual
    handleEqualClick = () => {
        try {
            const result = eval(this.state.displayValue);
            this.setState({ displayValue: result });
        } catch (error) {
            this.setState({ displayValue: "Error" });
        }
    };

    // Função para lidar com cliques no botão de limpar
    handleClearClick = () => {
        this.setState({ displayValue: "0" });
    };

    render() {
        return (
            <div className="calculator-container">
                <div className="calculator bg-secondary p-4">
                    <div className="display fixed-display">{this.state.displayValue}</div>
                        <div className="buttons">
                            <button onClick={() => this.handleDigitClick("7")}>7</button>
                            <button onClick={() => this.handleDigitClick("8")}>8</button>
                            <button onClick={() => this.handleDigitClick("9")}>9</button>
                            <button onClick={() => this.handleDigitClick("/")}>/</button>
                            <button onClick={() => this.handleDigitClick("4")}>4</button>
                            <button onClick={() => this.handleDigitClick("5")}>5</button>
                            <button onClick={() => this.handleDigitClick("6")}>6</button>
                            <button onClick={() => this.handleDigitClick("*")}>*</button>
                            <button onClick={() => this.handleDigitClick("1")}>1</button>
                            <button onClick={() => this.handleDigitClick("2")}>2</button>
                            <button onClick={() => this.handleDigitClick("3")}>3</button>
                            <button onClick={() => this.handleDigitClick("-")}>-</button>
                            <button onClick={() => this.handleDigitClick("0")}>0</button>
                            <button onClick={() => this.handleEqualClick()}>=</button>
                            <button onClick={() => this.handleDigitClick("+")}>+</button>
                            <button onClick={() => this.handleClearClick()}>C</button>
                        </div>
                    </div>
                    <div className="footer">
                        by <a href="https://codepen.io/ygor706/pen/OJrNVjK?editors=1010" class="text-light text-decoration-none" target="_blank">Ygor</a>
                    </div>
                </div>
        );
    }
}
export default Calculator;
