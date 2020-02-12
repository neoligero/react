import React from 'react';

interface IClockProps {}

interface IClockState {
  date: Date
  timerID: NodeJS.Timeout
}

class Clock extends React.Component<IClockProps, IClockState> {

  public state: IClockState = {
    date: new Date(),
    timerID: setTimeout(()=>{},0)
  }

  // If you are not going to set anything here, you dont need to use it
  /*constructor(props: IClockProps) {
    super(props);
  }*/

  componentDidMount() {
    // eslint-disable-next-line
    this.state.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.state.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

const CClock = () => {
  return <Clock />;
}

export default CClock