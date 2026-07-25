import React from 'react';

const flights = [
  { id: 1, from: 'Chennai', to: 'Delhi', time: '06:00 AM', price: 4500 },
  { id: 2, from: 'Chennai', to: 'Mumbai', time: '09:30 AM', price: 3800 },
  { id: 3, from: 'Chennai', to: 'Bangalore', time: '01:15 PM', price: 2200 },
  { id: 4, from: 'Chennai', to: 'Kolkata', time: '05:45 PM', price: 5200 }
];

function UserGreeting(props) {
  return <h1>Welcome back</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  );
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  );
}

function FlightList(props) {
  return (
    <div>
      <h2>Available Flights</h2>
      <ul>
        {flights.map(flight => (
          <li key={flight.id}>
            {flight.from} → {flight.to} | {flight.time} | Rs. {flight.price}
            {props.isLoggedIn && (
              <button onClick={() => alert('Ticket booked for flight ' + flight.id)}>
                Book Ticket
              </button>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;
    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        <FlightList isLoggedIn={isLoggedIn} />
      </div>
    );
  }
}

function App() {
  return (
    <div className="App">
      <LoginControl />
    </div>
  );
}

export default App;