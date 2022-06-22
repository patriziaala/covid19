import React, { Component } from "react";

import Examinations from "./components/Examinations/Examinations";
import ExaminationGraphic from "./components/Examinations/ExaminationsGraphic";

class App extends Component {
  constructor(props) {
    console.log("Child - constructor");
    super(props);
    this.state = {
      examinations: [],
      stats: [],
      examinationByLocations: [],
    };
    this.fetchUrlLocation = this.fetchUrlLocation.bind(this)
  }
  componentDidMount() {
    console.log("Child - ComponentDidlMount");
    const url = "/examinations";
    const urlState = url + "/stats";

    fetch(url)
      .then((response) => response.json())
      .then((json) => this.setState({ examinations: json }));

    fetch(urlState)
      .then((response) => response.json())
      .then((json) => this.setState({ stats: json }));

    this.fetchUrlLocation(1);
  }

  fetchUrlLocation = (locationId) => {
    fetch("/examinations/" + locationId)
      .then((response) => response.json())
      .then((json) => this.setState({ examinationByLocations: json }));
  };

  fetchUrlStats = (locationId) => {
    fetch("/examinations/" + locationId)
      .then((response) => response.json())
      .then((json) => this.setState({ stats: json }));
  };

  render() {
    console.log("Child - render");
    const { examinations } = this.state;
    const { examinationByLocations } = this.state;
    const { stats } = this.state;
    return (
      <div className="container">
        <div class="jumbotron">
          <h1 class="display-4">Examinations from our API call</h1>
        </div>
        <h2>Examination List</h2>
        <Examinations items={examinations} locationHandler = {(x) => this.fetchUrlLocation(x)} />
        <h2>Examination By LocationId</h2>
        <Examinations items={examinationByLocations}/>
        <h2>Examination Aggregation by State</h2>
        <ExaminationGraphic items={stats}/>                
      </div>
    );
  }
}
export default App;
