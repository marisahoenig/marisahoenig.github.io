import React, { Component } from 'react';
export default  class Resume extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row work">
            <div className="three columns header-col">
               <h1><span>Work</span></h1>
            </div>

            <div className="nine columns main-col">
              {
                resumeData.work && resumeData.work.map((job) => {
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{job.CompanyName}</h3>
                          <p className="info">
                          {job.specialization}
                          <span>&bull;</span> <em className="date">{job.startDate} - {job.endDate}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>

         <div className="row education">
            <div className="three columns header-col">
               <h1><span>Education</span></h1>
            </div>
            <div className="nine columns main-col">
              {
                resumeData.education && resumeData.education.map((item)=>{
                  return(
                    <div className="row item">
                       <div className="twelve columns">
                          <h3>{item.UniversityName}</h3>
                          <p className="info">
                          {item.specialization}
                          <span>&bull;</span> <em className="date">{item.startDate} - {item.endDate}</em></p>
                       </div>
                    </div>
                  )
                })
              }
            </div>
         </div>
      </section>
    );
  }
}
