import React, { Component } from 'react';
export default class About extends Component {
  render() {
    return (
      <section id="writing">
         <div className="row">
            <div className="twelve columns main-col">
            <h3>Writing</h3>
                <p>
                    I write to think. I'm in love with a good journal, and I can be found typing away my thoughts every day.
                    Writing forces me to consider how I feel about everything going on in my life, and all of my best ideas come
                    from writing. At some point, my brain takes over, and I write things that I never thought about before.
                    I'm documenting those on <a href="https://marisahoenig.medium.com/">Medium</a>. Here are a few of my favorites:
                </p>
                <div id="mediumlinks">
                    <a href="https://medium.com/the-innovation/23-lessons-learned-at-23-726beb154bc4">23 Lessons Learned at 23</a>
                    <a href="https://medium.com/live-your-life-on-purpose/dont-be-a-sand-crab-8ad6525fecfd">Don't Be a Sand Crab</a>
                    <a href="https://medium.com/an-idea/your-story-is-good-enough-548ca47d545a">Your Story is Good Enough</a>
                </div>
            </div>
         </div>
      </section>
    );
  }
}
