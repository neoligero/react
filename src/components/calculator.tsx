import React from 'react'

type scaleTypes = 'c' | 'f'

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

function toCelsius(fahrenheit: number) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius: number) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature: string, convertFunc: Function) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convertFunc(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

interface IVeredictProps {
  celsius: number
}

function BoilingVerdict(props: IVeredictProps) {
  if (props.celsius >= 100) {
    return <p>The water would boil.</p>;
  }
  return <p>The water would not boil.</p>;
}

interface ITemperatureInputProps {
  onTemperatureChange: Function
  temperature: string
  scale: string
}

interface ITemperatureInputState { }

class TemperatureInput extends React.Component<ITemperatureInputProps, ITemperatureInputState> {
  /*constructor(props: ITemperatureInputProps) {
    super(props);
  }*/

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale: scaleTypes = this.props.scale as scaleTypes;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

interface ICalculatorProps {

}

interface ICalculatorState {
  scale: string
  temperature: string
 }

class Calculator extends React.Component<ICalculatorProps, ICalculatorState> {
  constructor(props: ICalculatorProps) {
    super(props);
    this.state = { temperature: '', scale: 'c' };
  }

  private handleCelsiusChange = (temperature: string) => {
    this.setState({ scale: 'c', temperature });
  }

  private handleFahrenheitChange = (temperature: string) => {
    this.setState({ scale: 'f', temperature });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput
          scale="c"
          temperature={celsius}
          onTemperatureChange={this.handleCelsiusChange} />
        <TemperatureInput
          scale="f"
          temperature={fahrenheit}
          onTemperatureChange={this.handleFahrenheitChange} />
        <BoilingVerdict
          celsius={parseFloat(celsius)} />
      </div>
    );
  }
}

export default Calculator