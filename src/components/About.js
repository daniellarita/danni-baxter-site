import React from 'react';
import picture from '../../public/Danni-Nicaragua.png';
import Music from './Music.js';

const About = (props) => {
  const myBirthday=new Date("1992/08/21 03:00:00")
  const age=Math.floor((new Date()-myBirthday)/1000/60/60/24/365);
  return (
    <div className="about">
      <h2>Hi! I'm Danni.</h2>
      <img role="presentation" className="my-picture" src={picture} />
      <p>I'm {age} and currently live in New York City where I work at WeWork as a Software Engineer in Test. In my free time I enjoy going for runs, doing yoga, eating great food and listening to live music.</p>
      <Music />
    </div>
  );
};

export default About;
