import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="writing">
         <div className="row">
            <div className="twelve columns main-col">
                <p>
                    I love to write.
                </p>
            </div>

         </div>
      </section>
    );
  }
}
