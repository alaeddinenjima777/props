import React , {Component}   from "react";
import '.App.css';
import Address from "./profile/Address";
import Fullname from "./profile/FullName";
import profilephoto from "./profile/ProfilePhoto";


class App extends Component {
  render () {
    return (
          <div className="App"> 
      <Address/>
      <Fullname/>
      </div>
    );
  }
}


export default App;