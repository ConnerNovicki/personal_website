import React from 'react';

import '../../style/home.css';

const chartMaker = (data) => {
  const { title, bulletPoints } = data;
  return (
    <tbody>
      <tr>
        <td className="col-md-3">{title}</td>
        <td className="col-md-9 uncentered-td">
          <ul>
          {bulletPoints.map(point => (
            <li>{point}</li>
          ))}
          </ul>
        </td>
      </tr>
    </tbody>
  )
}

/*
data = [
  {
    title: string,
    bulletPoints: [
      '', '', ''
    ]
  }
]
*/

const tableMaker = (title, data) => {
  return (
    <table className="table table-bordered table-inverse skills-table">
      <thead className="thead-main">
        <tr>
          <td>{title}</td>
        </tr>
      </thead>
        {data.map(chartMaker)}
    </table>
  );
}

const Home = () => {
  return (
    <div className="home-container">
      <div className="col-md-10 col-md-offset-1 about-me">
        <p>I graduated from the University of Kentucky with a B.S. in Mathematics
        and a minor in Computer Science.</p>
        <br/>
        <p>I am looking for a <b>JavaScript developer</b> job.</p>
      </div>

      <h3 className="col-md-12">Current skills include:</h3>
      <div className="col-md-10 col-md-offset-1">


      {tableMaker(
        'JavaScript / TypeScript',
        [
          {
            title: 'ReactJS, React Native, and Redux',
            bulletPoints: [
              'I made this site (and a few others on my GitHub) with ReactJS and Redux.',
              'Strong understanding of the flow of a Redux application (Actions -> Middleware -> Reducers -> Store)',
              'Understanding of iOS development (with FlexBox) and how to create cross-platform apps'
            ]
          },
          {
            title: 'Angular 2/4 and Ngrx',
            bulletPoints: [
              'Understanding of how to break down apps into components with use of directives, routing, and services.',
              'Comfortable using Ngrx (Actions, Reducers, State Interfaces, Store, and @Effects)'
            ]
          },
          {
            title: 'General',
            bulletPoints: [
              'Comfortable using ES2016, prototypes, classes, etc.',
              'Experience writing applications using AJAX requests, JSON, and jQuery.',
              'I have been putting in hours of JavaScript coding a day for the last year.'
            ]
          },
          {
            title: 'Node.js',
            bulletPoints: [
              'Knowledge of dependency/module management with NPM.',
              'Understanding of basics of Webpack.'
            ]
          }
        ]
      )}

      {tableMaker(
        'Linux / Unix',
        [
          {
            title: 'Command Line Navigation',
            bulletPoints: [
              'Practical knowledge navigating the Mac and Linux command line.',
              'Practical use of many different CLI\'s and console-based applications.',
              'Last 4 CS classes in college all required using Linux environment.'
            ]
          }
        ]
      )}

      {tableMaker(
        'Object Oriented Programming',
        [
          {
            title: 'C++',
            bulletPoints: [
              'Completed 4 college C++ courses.',
              'Experience working with classes, inheritance, abstraction, and polymorphism.'
            ]
          },
          {
            title: 'Java',
            bulletPoints: [
              'Worked with Spark on a small project.',
              'Understand basics of Gradle/Maven dependency management tools.'
            ]
          }
        ]
      )}

      {tableMaker(
        'Front End',
        [
          {
            title: 'HTML5 + CSS3',
            bulletPoints: [
              'Built this site (and many others) with HTML/CSS'
            ]
          },
          {
            title: 'Bootstrap',
            bulletPoints: [
              'Understanding of how to use the grid system and use pre-made buttons, tables, etc.',
              'Experience using with both ReactJS and Angular 4'
            ]
          }
        ]
      )}

      {tableMaker(
        'Other',
        [
          {
            title: 'GIT',
            bulletPoints: [
              'Use version control on every project.',
              'Experience working with others on same repository.',
              'Experience with both GitHub and BitBucket.'
            ]
          },
          {
            title: 'REST APIs',
            bulletPoints: [
              'Experience working with APIs with Angular, React, and plain JavaScript.',
              'Have multiple projects on GitHub using Weather API and Riot API.'
            ]
          },
          {
            title: 'Python',
            bulletPoints: [
              'Comfortable with Python syntax (classes, functions, etc.)'
            ]
          }
        ]
      )}
      </div>
    </div>

  );
}

export default Home;
