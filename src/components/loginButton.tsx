import React from 'react'

const noop = () => {};

const UserGreeting: React.FC = () => <h1>Welcome back!</h1>

const GuestGreeting: React.FC = () => <h1>Please sign up.</h1>

const Greeting: React.FC<ILoginState> = ({ isLoggedIn }) =>
  isLoggedIn ? <UserGreeting /> : <GuestGreeting />

interface ILoginButtonProps {
  onClick: (e: React.MouseEvent) => void
}

// New way
const LoginButton: React.FC<ILoginButtonProps> = (props) => {
  return (
    <button onClick={props.onClick}>
      Login
      </button>
  );
}

// Old way
function LogoutButton(props: any) {
  return (
    <button onClick={props.onClick}>
      Logout
      </button>
  );
}

interface ILoginProps {
  onLogin?: (logged: boolean) => void
}

interface ILoginState {
  isLoggedIn: boolean
}

class LoginControl extends React.Component<ILoginProps, ILoginState> {

  constructor(props: ILoginProps) {
    super(props);
    // Old way
    // this.handleLoginClick = this.handleLoginClick.bind(this);
    // this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  private handleLoginClick = () => {
    const {onLogin = noop} = this.props;
    this.setState({ isLoggedIn: true });
    onLogin(true);
  }

  private handleLogoutClick = () => {
    const {onLogin = noop} = this.props;
    this.setState({ isLoggedIn: false });
    onLogin(false);
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    let button
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }

}

export default LoginControl