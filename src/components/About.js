import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row about-row">
            <div className="three columns profile-container">
               <img className="profile-pic"  src="images/headshot.jpg" alt="Headshot" />
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
