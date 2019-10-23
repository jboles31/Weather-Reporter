import React from 'react'
import ReactDOM from 'react-dom'
import Display from './components/Display.jsx'
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
  }

  //use a react hook to count container scrolls and hold order
  search(param) {
    $.ajax({
      method: 'GET',
      url: `/api/${param}`,
      success: (data) => {
        let copyState = this.state;
        copyState.cities.push(data);
        copyState.display = data.name;
        copyState.showView = true;
        this.setState(copyState)
      },
      error: (err) => {
        console.log('error on Client', err);
      }
    })
  }

  render() {
    return (
      <div className="app-wrapper">
        <div className='bg'>
          <img className="background" src={Background} ></img>
        </div>
        <div className="comps-wrapper">
          <Container cities={this.state.cities}/>
          <Display 
            search={this.search} 
            cities={this.state.cities} 
            display={this.state.display}
            view={this.state.showView}
          />
        </div>  
        <button onClick={() => {this.search('Boston')}}></button>      
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
