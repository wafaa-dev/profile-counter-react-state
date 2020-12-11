import React from 'react';
import tof from './tof1.jpg';
import Counter from './counter';

const toff={
  borderRadius :'10px'
}
class Profile extends React.Component {


    constructor() {
      super();

    this.state = {
      fullName:'wafaa sakouhi' ,
      bio: 'master degree in emgineering and management of industrial sytems' ,
      profession :'learning to be a web developper',
   
      };

    }


  render() {
    return( 
   <>   
   <Counter />
      <div className="ProfileDetails"> <h2> the profile details </h2>

         <p>
         <label>{this.state.fullName}</label>
          </p>
           <p>
          <label>{this.state.bio}</label>
         </p>
           <p>
          <label>{this.state.profession}</label>
         </p>

        <div className="profileImg"><span role="img" ></span></div>
               
 <img src={tof} className="toff" alt="tof1" style={toff}/> 
      </div>
      </>
    )
  }
}
export default Profile ;