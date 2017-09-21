import React, { Component } from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <Link to='/hello' className='small-link'>back</Link>
    <h1>Projects</h1>
    <div className='project-block'>
      <h3>Align</h3>
      <p><a href='https://github.com/align-capstone/align'>Align</a> is a web app for setting, tracking, and visualizing long term goals. I worked on this project over the course of 3 weeks as my Grace Hopper capstone project.</p>
      <p>Align was created using Node.js, React, Firebase, D3, and Material UI. <a href='https://medium.com/ladies-storm-hackathons/how-we-built-our-first-full-stack-javascript-web-app-in-three-weeks-8a4668dbd67c'>Learn more about the process of creating this app.</a></p>
      <div className="videoWrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/YacM6uYP2Jo" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <div className='project-block'>
      <h3>Scopes</h3>
      <p><a href='https://twitterscopes.herokuapp.com/'>A simple horoscope generator</a> using Markov chains and source text from the Twitter API. I was interested in the way that people project personal meaning onto generic sentiments, and I wanted to see if I could collage tweets together into passible horoscope texts.</p>
      <p>The app has two views. First, a live tweet view that searches twitter when the page is loaded and selects three tweets that meet my criteria for horoscope tweets. Second, a extended horoscope view that uses a dataset of previously selected tweets to compose a longer horoscope text using a markov chain.</p>
      <p>I built <a href='https://github.com/Kladky/Scopes'>this project</a> for a hackathon using Node.js, Express, React, Twitter API, and RiTa.js.</p>
      <img src='/images/scopes.png' />
    </div>
    {
      /*<div className='project-block'>
        <h3>Grace Shopper</h3>
        <p>A simple ecommerce site built over the course of a week during the Grace Hopper program using Node.js, Express, React, Redux, OAuth, Sequelize, and Bootstrap.</p>
      </div> */
    }
    <div className='project-block'>
      <h3>TED-Ed + YouTube extension</h3>
      <p>A <a href='https://chrome.google.com/webstore/detail/ted-ed-youtube-plugin/pniiaccgccaflajjpljlnmphipdbbgfg'>Chrome extension</a> that allows users to create an interactive TED-Ed Lesson page with any video from Youtube via a button that appears under YouTube videos.</p>
      <p>Created using jQuery.</p>
      <img src='/images/TED-Ed.jpg' />
    </div>
    <div className='project-block'>
      <h3>Periodic Videos</h3>
      <p><a href='https://ed.ted.com/periodic-videos'>An interactive periodic table</a> that contians a lesson about each element. I built the interface for this page using jQuery.</p>
      <div className="videoWrapper">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/9xZU5lJFbos" frameborder="0" allowfullscreen></iframe>
      </div>
    </div>
    <div className='project-block'>
      <h3>Mysteries of Vernacular</h3>
      <p><a href='https://ed.ted.com/mysteries-of-vernacular'>An interactive alphabet</a> that contians a lesson about the etymology of a word for each letter. I built the interface for this page using jQuery and Photoshop.</p>
      <img src='/images/mov.png' />
    </div>
    <div className='project-block'>
      <h3>Do It Yourselves</h3>
      <p>This was an installation art project where different configurations of viewers could unlock different instructional YouTube videos. I custom built pressure sensors using conductive foam in the form of pillows that were placed on a group of chairs and wired up to an Arduino. This allowed me to know how many people were in the space and what configuration they were sitting in at any given time and use that information programmatically to control video playback.</p>
      <p>Each combination of occupied chairs unlocked a different set of instructional YouTube videos based on the physical relationships between the people in the space. These videos were projected on the wall. For instance, two people sitting facing each other unlocked videos about things like how to behave in an interview, or how to resolve a conflict. When all the chairs were occupied, videos about things like how to run an effective meeting or how to organize in your community were displayed. Any person sitting alone in the space saw videos about things to do alone, like how to meditate or how to play solitaire.</p>
      <p>This project was part of a series of work I made focused on intersections between digital and physical worlds.</p>
    </div>
    <div className='project-block'>
      <h3>Interesting Today</h3>
      <p>I was exploing ways to incorporate code into my painting practice, and I was facinated by Flickr's interestingness algortihm. For several weeks, I used Processing to pull in the day's most intersting photos and collage them together. Then I made a "technically interesting" painting based on that digital collage.</p>
    </div>
  </div>
)
