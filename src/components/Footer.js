import React, { Component } from 'react';
export default class Footer extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {
              resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
                return(
                  <li key={item.name}>
                    <a href={item.url}>
                    <i className={item.className} />
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div id="go-top">
           <a className="smoothscroll" title="Back to Top" href="#home"><i className="fas fa-chevron-circle-up"></i></a>
        </div>
        <div id="copyright">
            Built with <i className="far fa-heart"></i> by Marisa<br></br>
            <a href="https://github.com/marisahoenig/marisahoenig.github.io">View on Github</a>
        </div>
      </div>
    </footer>
    );
  }
}
