import React from 'react'

interface ICounterProps { }

interface ICounterState {
  value: number
  timerID: NodeJS.Timeout
}

class Counter extends React.Component<ICounterProps, ICounterState> {

  public state: ICounterState = {
    value: 0,
    timerID: setTimeout(() => { }, 0)
  }

  /*constructor(props: ICounterProps) {
    super(props)
  }*/

  componentDidMount() {
    // eslint-disable-next-line
    this.state.timerID = setInterval(
      () => this.add(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  private add = () => {
    this.setState({ value : this.state.value + 1 })
  }

  render() {
    return <h4>Counter: {this.state.value}</h4>
  }
}

export default Counter