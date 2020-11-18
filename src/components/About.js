import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            <div className="three columns">

               <img className="profile-pic"  src="images/headshot.jpg" alt="" />

            </div>

            <div className="nine columns main-col">

               <h2>Nice to meet ya!</h2>
               <p>
               {
                 resumeData.roleDescription
               }
               </p>
            </div>
         </div>
      </section>
    );
  }
}
