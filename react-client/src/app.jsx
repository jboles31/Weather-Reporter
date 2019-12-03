import React from 'react'
import ReactDOM from 'react-dom'
import SearchDisplay from './components/SearchDisplay.jsx'
import InfoDisplay from './components/InfoDisplay.jsx'
import Container from './components/Container.jsx'
import $ from 'jquery'
// import background from './images/sky-background.jpg'
import Background from './images/sky-background.jpg'
import style from './main.scss';

class App extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      display: '',
      showView: false,
      cities: [],
    }

    this.search = this.search.bind(this)
    this.switchView = this.switchView.bind(this)
    this.switchCity = this.switchCity.bind(this)
    this.removeCity = this.removeCity.bind(this)
  }

  //use a react hook to count container scrolls and hold order
  search(param) {
    $.ajax({
      method: 'GET',
      url: `/api/${param}`,
      success: (data) => {
        const { name } = data;
        let copyState = this.state;
        copyState.cities.push(data);
        copyState.display = name;
        copyState.showView = true;
        this.setState(copyState)
      },
      error: (err) => {
        console.log('error on Client', err);
      }
    })
  }

  switchView(boolean) {
    this.setState({
      showView: boolean
    })
  }

  switchCity(city) {
    this.setState({
      display: city
    })
    this.switchView(true)
  }

  removeCity(cityName) {
    // this.state.cities.forEach(city => {
    //   if (city)
    // })
    
    // this.setState ({

    // })
    console.log(this.state.cities[0])
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className='bg'>
          <img className="background" src={Background} ></img>
        </div>
        <div className="comps-wrapper">
          <Container 
            cities={this.state.cities}
            switchView={this.switchView}
            switchCity={this.switchCity}
          />
          {this.state.showView ? 
            (<InfoDisplay 
              cities={this.state.cities}
              cities={this.state.cities} 
              display={this.state.display}
              view={this.state.showView}
            />)
          :
            (<SearchDisplay 
              search={this.search} 
            />)
          }
        </div>        
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
