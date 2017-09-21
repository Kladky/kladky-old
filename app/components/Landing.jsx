import React, { Component } from 'react'
import { Link } from 'react-router'

export default () => (
  <div>
    <h1>Sara Kladky</h1>
    <p>I'm a software engineer. Javascript is my language of choice, and I love all things frontend. I'm most familiar with the "NERD Stack" (Node.js, Express, React, Databases using SQL) but I'm a fast learner and pick up new technologies with ease!</p>
    <p>In the past, I was a technical project manager at <a href="https://www.ted.com/">TED</a> and worked as a freelance front end developer. I've attended the <a href="https://www.gracehopper.com/">Grace Hopper immersive software engineering program</a> at <a href="https://www.fullstackacademy.com/">Fullstack Academy</a>. I have a BA from <a href="http://www.bennington.edu/">Bennington College</a> where I studied code in a visual art context.</p>
    <p>I live in Brooklyn, NY. Besides programming, I enjoy fiber arts, DIY projects, and science fiction.</p>
    <p><Link to="/projects">Check out my projects</Link> or <a href="/KladkyResume.pdf">download my résumé.</a> I'm currently looking for frontend roles in the NYC area, and I appreciate any leads!</p>
    <p id="icons">
      <a href="https://twitter.com/kladky"><i className="fa fa-twitter"></i></a>
      <a href="https://www.instagram.com/kladky/"><i className="fa fa-instagram"></i></a>
      <a href="https://github.com/Kladky"><i className="fa fa-github"></i></a>
      <a href="https://www.linkedin.com/in/sara-kladky"><i className="fa fa-linkedin"></i></a>
      <a href="mailto:sara@kladky.tech"><i className="fa fa-envelope-o"></i></a>
    </p>
  </div>
)
