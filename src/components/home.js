import React from 'react';

import '../../style/home.css';

const chartMaker = (data) => {
  const { title, bulletPoints } = data;
  return (
    <tbody>
      <tr>
        <td className="col-md-4 offset-white-background">{title}</td>
        <td className="col-md-8 uncentered-td offset-white-background">
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
        <p>I love learning new technologies and exploring new code. I'm
        blessed that I get to do something I love everyday and make a career out of it.
        I'm a huge fan of JavaScript, ReactJS and Angular, and I'm always looking to learn
        the newest tools.</p>
        <p>I'm currently looking for an entry-level developer job to expand my skills
        and have fun doing it.</p>
      </div>

      <h3 className="col-md-12">Current skills include:</h3>
      <div className="col-md-10 col-md-offset-1">


      {tableMaker(
        'JavaScript / TypeScript',
        [
          {
            title: 'ReactJS, React Native, and Redux',
            bulletPoints: [
              '3+ projects',
              'iOS/Android cross-platform apps with React Native'
            ]
          },
          {
            title: 'Angular 4 and Ngrx',
            bulletPoints: [
              'Experience with async API requests with @Effects',
              'Bootstrap, TypeScript, and RxJS integration'
            ]
          },
          {
            title: 'Node.js',
            bulletPoints: [
              'Knowledge of dependency/module management with NPM.',
              'Understanding of basics of Webpack.'
            ]
          },
          {
            title: 'ES2016',
            bulletPoints: [
              'AJAX, JSON, jQuery',
              'Short-hand syntax'
            ]
          },
        ]
      )}

      {tableMaker(
        'Operating Systems',
        [
          {
            title: 'Linux/Unix',
            bulletPoints: [
              'Command line navigation',
              'Experience with multiple CLI\'s',
              'Linux on Windows via SSH'
            ]
          },
          {
            title: 'Windows/Mac',
            bulletPoints: [
              'Frequently use both environments'
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
              '4+ college course',
              'Data Structures and Algorithm Design'
            ]
          },
          {
            title: 'Java',
            bulletPoints: [
              'Spark',
              'Gradle/Maven'
            ]
          }
        ]
      )}

      {tableMaker(
        'Front End',
        [
          {
            title: 'HTML5, CSS3',
            bulletPoints: [
              'Web and Mobile experience'
            ]
          },
          {
            title: 'Bootstrap',
            bulletPoints: [
              'Integration with ReactJS and Angular',
              'Flexbox with iOS/Android'
            ]
          }
        ]
      )}

      {tableMaker(
        'Additional',
        [
          {
            title: 'GIT',
            bulletPoints: [
              'GitHub, BitBucket'
            ]
          },
          {
            title: 'REST APIs',
            bulletPoints: [
              'Async API requests with both Angular and React',
              'Riot, OpenWeatherMap, and YouTube APIs'
            ]
          },
          {
            title: 'Python',
            bulletPoints: [
              'Functional approach to programming'
            ]
          }
        ]
      )}
      </div>
    </div>

  );
}

export default Home;
