import './Style.css';
import React,{Component} from "react"
import Profile from "./component/Profile"
  class App extends Component {
    state = {
      show:true,
    };
    
    handelShow=()=> this.setState({show:!this.state.show})
    render()
    {     
      return (<div className="profile"><div className="one"><button className="button" onClick={this.handelShow}>show Profile </button></div>{ this.state.show &&  <Profile/>}</div>)
    }
  }

export default App;
