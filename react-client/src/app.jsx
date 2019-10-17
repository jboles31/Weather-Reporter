import React from 'react'
import ReactDOM from 'react-dom'
// import Display from './components/Display.jsx'
// import Container from './components/subContainer.jsx'
import $ from 'jquery'

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
        Weather Reporter
        {/* <Container /> */}
        {/* <Display />   */}
        <button onClick={() => {this.search('Boston')}}></button>      
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
