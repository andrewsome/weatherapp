import React from 'react';
import WeatherDetail from './components/WeatherDetail';
import DashBoard from './components/DashBoard';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCity: null,
    }
  }

  handleClick = (name) => {
    this.setState({
      selectedCity: name,
    })
  }

  handleReturn = () => {
     this.setState({
       selectedCity: null,
     })
  }
  
  render() {
    const { selectedCity } = this.state;
    return (
      <div>
        {selectedCity !== null ? this.one(selectedCity): this.all()}
      </div>
    )
  }

  one(name) {
		return (
      <WeatherDetail name={name} handleReturn={this.handleReturn} />
		);
	}

	all() {
		return (
      <DashBoard handleClick={this.handleClick} />
		);
	}
}

export default App;
