import React from 'react'

interface IReservationProps { }

interface IReservationState {
  isGoing?: boolean | undefined
  numberOfGuests?: number | undefined
}

type IReservationTypes =
  'isGoing' |
  'numberOfGuests'


class Reservation extends React.Component<IReservationProps, IReservationState> {

  public state: IReservationState = {
    isGoing: true,
    numberOfGuests: 0
  }

  /*constructor(props: IReservationProps) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };
  }*/

  private handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = event.target;
    let query: Partial<IReservationState> = {}

    if (target.type === 'checkbox') {
      query = { isGoing: target.checked }
    } else {
      if (target.value) {
        query = { numberOfGuests: Number.parseInt(target.value) }
      } else {
        query = { numberOfGuests: 0 }
      }
    }
    this.setState(query)
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
            value={this.state.numberOfGuests || ""}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}

export default Reservation