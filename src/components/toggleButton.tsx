import React from 'react';

interface IToggleProps { }

interface IToggleState {
  isToggleOn: boolean
}

class Toggle extends React.Component<IToggleProps, IToggleState> {

  public state: IToggleState = {
    isToggleOn: true
  }

  constructor(props: IToggleProps) {
    super(props);
    // Este enlace es necesario para hacer que `this` funcione en el callback
    this.handleClick = this.handleClick.bind(this);
  }

  private handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle