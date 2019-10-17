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
    this.state = {}

    this.search = this.search.bind(this)
  }

  //use a react hook to count container scrolls and hold order
  search(param) {
    $.ajax({
      method: 'GET',
      url: `/api/${param}`,
      
      success: (data) => {
        this.setState({
          display: {
            city: data.location
          },
          showView: true,
        })
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
          <Container />
          <Display />
        </div>  
        <button onClick={() => {this.search('Boston')}}></button>      
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
