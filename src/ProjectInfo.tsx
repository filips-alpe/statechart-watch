import * as React from 'react';
import happyPiggy from './assets/happy_piggy.png';
import pig31Text from './assets/pig_31_text.svg';

const ProjectInfo = function ProjectInfo() {
  return (
    <div className="project-info">
      <div className="piggy-and-text">
        <img className="happy-piggy" src={happyPiggy} alt="A happy piggy" />
        <img className="pig-31-text" src={pig31Text} alt="Pig 31" />
      </div>
      <div className="description">
        <p>
          A replica of the{' '}
          <a href="https://whichwatchtoday.blogspot.com/2013/02/citizen-quartz-multi-alarm-iii-41-3534.html">
            Citizen Quartz Multi Alarm III
          </a>{' '}
          watch based on figure 31 in David Harel’s 1987{' '}
          <a href="https://www.sciencedirect.com/science/article/pii/0167642387900359">
            paper
          </a>{' '}
          introducing{' '}
          <a href="https://statecharts.github.io/what-is-a-statechart.html">
            statecharts
          </a>
        </p>
        <p>Use with the on-screen buttons or your keyboard</p>
        <p>
          Built with <a href="https://xstate.js.org/docs/">XState</a> &{' '}
          <a href="https://create-react-app.dev/">React</a> by{' '}
          <a href="https://twitter.com/jakubowskiandy">Andy</a>
        </p>
        <p>
          Code on{' '}
          <a href="https://github.com/andyjakubowski/statechart-watch">
            GitHub
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProjectInfo;
