/* This is a React class component that displays counts and user information, with the ability to
increase counts on button click. */

import React from "react";

class UserClass extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "maha",
        location: "default",
        avatar_url: "hguijgjkg.////",
      }
    }

  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/mahadevathani0017");
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
    // console.log(json);
  }
  // componentDidUpdate(){
  //   this.timer=setInterval(()=>{
  //     // console.log("NAMASTE OP");
  //   },1000)
  //   // console.log("Update did mount");
  // }

  componentWillUnmount(){
    clearInterval(this.timer)
    // console.log("Will unmount called");
  }
  render() {
    const { name, location, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <h2>Name:{name}</h2>
        <img src={avatar_url} />
        <h3>Location:{location}</h3>
        <h3>Contact:896797998979</h3>
      </div>
    );
  }
}
export default UserClass;

/**
 * 
 * Construtor (dummy)
 * Render (dummy)
 *   <HTML Dummy>
 * Component Did Mount
 *   <API call>
 *   <this.setState>
 *
 * -----UPDATE
 * 
 *     render(API Data)
 *     <HTML data(api Data)
 * componentDid Update
 * 
 *
 * 
 */
