import React from 'react';
import tof from './image.jpg';
import Counter from './counter';

const toff={
  borderRadius :'10px',
  maxWidth :'600px'
}
const textOne={
  textAlign:'center',
  color:'#b08BC5'
} 
const textTwo={
   textAlign:'center',
  color:'#FF85B1'
}
const textThree={
   textAlign:'center',
  color:'#3A9Af5'
}
class Profile extends React.Component {


    constructor() {
      super();

    this.state = {
      fullName:'wafaa sakouhi' ,
      bio: 'master degree in engineering and management of industrial systems' ,
      profession :'learning to be a web developper',
   
      };

    }
  render() {
    return( 
   <>   
   <Counter />
      <div className="ProfileDetails"> <h2> the profile details </h2>
         <p>
         <label style={textOne} >{this.state.fullName} </label>
          </p>
           <p>
          <label style={textTwo} >{this.state.bio} </label>
         </p>
           <p>
          <label style={textThree}>{this.state.profession}</label>
         </p>
        <div className="profileImg"><span role="img" ></span></div>        
 <img src={tof} className="toff" alt="tof1" style={toff}/> 
      </div>
      </>
    )
  }
}
export default Profile ;