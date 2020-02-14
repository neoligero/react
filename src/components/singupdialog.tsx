import React, { ReactElement } from 'react'

interface IDialogProps {
  title: string
  message: string
  children: ReactElement
}

interface IFancyBorderProps {
  children: ReactElement
  color: string
}

function FancyBorder(props: IFancyBorderProps) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props: IDialogProps) {
  return (
    <FancyBorder color="blue">
      <>
        <h1 className="Dialog-title">
          {props.title}
        </h1>
        <p className="Dialog-message">
          {props.message}
        </p>
        {props.children}
      </>
    </FancyBorder>
  );
}

interface ISignUpProps { }

interface ISignUpState {
  login: string
}

class SignUpDialog extends React.Component<ISignUpProps, ISignUpState> {
  constructor(props: ISignUpProps) {
    super(props);
    this.state = { login: '' };
  }

  render() {
    return (
      <Dialog title="Mars Exploration Program"
        message="How should we refer to you?">
        <>
          <input value={this.state.login}
            onChange={this.handleChange} />

          <button onClick={this.handleSignUp}>
            ¡Apúntame!
          </button>
        </>
      </Dialog>
    );
  }

  private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ login: e.target.value });
  }

  private handleSignUp = () => {
    alert(`Bienvenido abordo, ${this.state.login}!`);
  }
}

export default SignUpDialog