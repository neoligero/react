import React from 'react'

interface IReservationProps { }

interface IReservationState {
  isGoing: boolean
  numberOfGuests: number
}

type IReservationTypes = 
  'isGoing' |
  'numberOfGuests'


class Reservation extends React.Component<IReservationProps, IReservationState> {

  public state: IReservationState = {
    isGoing: true,
    numberOfGuests: 0
  }

  constructor(props: IReservationProps) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
    // Old way
    // this.handleInputChange = this.handleInputChange.bind(this);
  }

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name: IReservationTypes = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          Is going:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          Number of guests:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Reservation