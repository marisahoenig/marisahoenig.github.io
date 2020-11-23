import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
export default class Podcast extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
        <React.Fragment>
        <section id="podcast">
            <div className="row">
               <div className="eight columns main-col">
                    <h3>Blossoming Technologist</h3>
                      <p>
                      A podcast for young professionals blossoming in the tech industry.
                      How do you get an internship? What are the different career paths in tech?
                      We'll explore all your questions and more, hearing stories of everyday young professionals to empower technologists with tools to thrive.
                      New episodes every Monday, starting November 30.
                      </p>
                      <div id="pod-embed"><iframe title="Blossoming Technologist Podcast" src="https://anchor.fm/blossoming-technologist/embed" height="102px" width="400px" frameborder="0" scrolling="no"></iframe></div>
                      <div id="pod-links">
                          <ul className="links">
                              {
                                resumeData.podcastLinks && resumeData.podcastLinks.map(item =>{
                                  return(
                                          <li key={item.name}>
                                            <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                                          </li>
                                        )
                                      }
                                )
                              }
                          </ul>
                      </div>
               </div>
               <div className="four columns main-col">
                    <a href="https://anchor.fm/blossoming-technologist"><img src="images/BlossomingTechnologist.png" alt="Blossoming Technologist Podcast"/></a>
                    <p id="caption">Listen on your favorite podcasting platform.</p>
               </div>
            </div>

        </section>
        </React.Fragment>
    )
  }
}
