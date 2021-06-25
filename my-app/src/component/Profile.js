import A from "../img/A.png"
import React,{Component} from "react"
  class Profile extends Component {
    state = {
      fullName: "khaled bouazizi",
      bio: "bio",
      imgSrc: {A},
      profession: "ingenieur electrique",
      show:true,
      secondes:0

    };
    componentDidMount(){
     setInterval(() => {this.setState({secondes:this.state.secondes+1})}, 1000)}
     componentDidUpdate(){console.log("component update")};
     componentWillUnmount(){}
    render()
    {         console.log("render")
      return (
      <div className="two"><h1>Profile :</h1><li><span>FullName:</span> {this.state.fullName}</li><li><span>Profession:</span> {this.state.profession}</li><li><span>Photo:</span><img className="img" src={A}/></li><span>Component did mount:</span> {this.state.secondes}</div>)
    }
  }

export default Profile;


