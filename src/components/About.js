import React from 'react'
import User from "./User"
import UserContext from '../utils/UserContext';


class About extends React.Component{
  constructor(props){
    super(props);
    // console.log( " Parent Constructor")
  }

  componentDidMount(){
  //   console.log("Parent Component Mount did");
  }
  render()
  {
     
    // console.log(+"Parent Render");
    return (
      <div>
        <h1>About</h1>
        <div>
          LoggedInUser
          <UserContext.Consumer>
            {({loggedInUser})=><h1 className="text-lg font-bold">{loggedInUser}</h1>}
          </UserContext.Consumer>
        </div>
        <User name={"Mahadev Athani"}/> 
        {/* <UserClass name={"First (class)"} location={"First class"} /> */}
 
      </div>
    );
  }
}


export default About;




