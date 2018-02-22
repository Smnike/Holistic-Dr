import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

class Doctor extends Component {
  state = {
    doctors: []
  }
  // Assistance from Kevon E.
  // componentDidMount() {
  //   axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=38.9048626%2C-77.0340224%2C50&user_location=37.773%2C-122.413&sort=distance-asc&fields=location_slug%2C%20within_search_area%2C%20distance%2C%20uid%2C%20npi%2C%20name%2C%20website%2C%20description%2C%20accepts_new_patients%2C%20visit_address%2C%20office_hours%2C%20phones%2C%20languages&skip=0&limit=100&user_key=1b5cb38b9322c2b77c59620b1dd17ed4")
  //   // axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=25%20miles&user_location=37.773%2C-122.413&sort=distance-asc&fields=location_slug%2C%20within_search_area%2C%20distance%2C%20uid%2C%20npi%2C%20name%2C%20website%2C%20description%2C%20accepts_new_patients%2C%20visit_address%2C%20office_hours%2C%20phones%2C%20languages&skip=0&limit=100&user_key=1b5cb38b9322c2b77c59620b1dd17ed4")
  //   // axios.get("https://api.betterdoctor.com/2016-03-01/specialties?fields=name%2C%20category&skip=0&limit=100&user_key=1b5cb38b9322c2b77c59620b1dd17ed4")
  //   .then(response => {
  //     this.setState({doctors: response.data})
  //     console.log('response data is ', response.data)
  //   })
  
  handleSubmit = (e) => {
  // handleSubmit (e) {
    // if (e.keyCode == 13 || onClick) {
    console.log(e)
    e.preventDefault()
    axios.get("https://api.betterdoctor.com/2016-03-01/practices?location=38.9048626%2C-77.0340224%2C50&user_location=38.904%2C-77.034&sort=distance-asc&fields=location_slug%2C%20within_search_area%2C%20distance%2C%20uid%2C%20npi%2C%20name%2C%20website%2C%20description%2C%20accepts_new_patients%2C%20visit_address%2C%20office_hours%2C%20phones%2C%20languages&skip=0&limit=100&user_key=1b5cb38b9322c2b77c59620b1dd17ed4")
    .then(response => {
      this.setState({doctors: response.data.data})
      console.log('response data is ', response.data)
    })
  // }
}

    render () {
    return (
      <div className="container">
        <div className="Title">
          <div className="bigTitle">  
            <h1>Holistic Doctor</h1>
          </div>
            <h3>near me</h3>
          </div>
        
          <input type="text" name="zip-code" placeholder="Zip Code"/> <button onClick={this.handleSubmit}>Check Near Me</button>
        {/* <input type="text" name="zip-code" placeholder="Zip Code"/> <button type="submit" onSubmit={(e) => this.onHandleSubmit(e)}>Check Near Me</button> */}
      
        {console.log('doctors from render is', this.state.doctors)}
        {console.log('one doctor from render is', this.state.doctors[0])}
        {
        this.state.doctors.map((pract, index) => {
          return <li key={index}>{pract.name} <br/> Street: {pract.visit_address.street} <br/> City: {pract.visit_address.city} <br/> Zip Code: {pract.visit_address.zip} <br/> </li>
          console.log(pract)
        })
      }
      </div>
    )
  }
}


export default Doctor;
