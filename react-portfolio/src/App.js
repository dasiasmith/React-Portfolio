import React from 'react';
import './App.css';
import '../src/css/style.css';
import me from './images/AboutMe2.png';
import linkedin from './images/Circle_linkedin_icon.png';
import github from './images/GitHub-Mark-64px.png';
import gmail from './images/gmail_icon-icons.com_59877.png'
import resume from './Resume.pdf'

class App extends React.Component {
  render (){
    return (
      <div className="App">
        <header>
          <h1>Hi I'm DASIA.</h1>
          <nav className="navbar fixed-top navbar-light bg-light navbar-expand-md">
              <div className="container">
                  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse"
                  aria-expanded="false" aria-label="Toggle navigation">
                      <span className="navbar-toggler-icon"></span>
                  </button>
      
                  <div className="collapse navbar-collapse justify-content-end" id="main-nav-collapse">
                      <ul className="navbar-nav">
                          <li className="nav-item"> <a href ="#about"> about me</a></li>
                          <li className="nav-item"> <a href= "#work"> work</a></li>
                          <li className="nav-item"> <a href={resume} target="_blank" rel='noreferrer'> resume</a></li>
                          <li className="nav-item"> <a href= "#contact"> contact</a></li>
                      </ul>
                  </div>
              </div>        
          </nav>
        </header>
    
        <main>
            <section id="about">
                <div className="col-12 col-md-6" id="cutie">
                    <img src={me} alt="Dasia" width="380" height="310"/>
                </div>
                <div className="col-12 col-md-6" id="AboutMe">
                    <h1 className="intro">Bringing Creative Ideas to<br/>LIFE</h1>
                    <p>
                        Welcome to my page! My name is Dasia and I began my career journey wanting to become a graphic designer.
                        I've always done art on the side but after joining a STEM club in high school and building cool models I went to school for engineering.
                        After studying Civil Engineering at Georgia Tech I decided I wanted to combine my passions for product design and technical work 
                        (and my love for the Yellow Jackets) into a new career path and enrolled in a full-stack bootcamp.
                        <br/>
                        I'm interested in delving into both front end and back end roles while also combining art using creative technology in my spare time.
                        Join me in the journey that is my portfolio and feel free to check out my art :)
                    </p>
                </div>
            </section>

            <div id="work" className="container-fluid container text-center">
                <div className="col-12 col-md-12">
                    <h1>work</h1>
                    <hr id="workHr" className="rounded"/>
                </div>
            </div>    
            <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">'Flix and Spill</h5>
                      <p className="card-text">A website that allow users to leave, comment, and like reviews for Netflix shows and movies</p>
                      <a href="https://github.com/jing-liu-778/Flix-and-Spill" target="_blank" rel='noreferrer' className="btn btn-primary">GitHub</a>
                      <a href="https://shielded-gorge-65326.herokuapp.com/" target="_blank" rel='noreferrer' className="btn btn-primary">Deployed</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Marvel vs. DC</h5>
                      <p className="card-text">A website that comapres Marvel superheroes vs. DC superheroes utilizing a superhero API and IMDb movie rating API</p>
                      <a href="https://github.com/dasiasmith/Marvel-Vs-DC" target="_blank" rel='noreferrer' className="btn btn-primary">GitHub</a>
                      <a href="https://dasiasmith.github.io/Marvel-Vs-DC/" target="_blank" rel='noreferrer' className="btn btn-primary">Deployed</a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Weather Dashboard</h5>
                      <p classNamelass="card-text">A website that allows users to input a city name and receive daily and 5-day forecast for that city</p>
                      <a href="https://github.com/dasiasmith/Password-Generator" target="_blank" rel='noreferrer' className="btn btn-primary">GitHub</a>
                      <a href="https://dasiasmith.github.io/Password-Generator/" target="_blank" rel='noreferrer' className="btn btn-primary">Deployed</a>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">Password Generator</h5>
                      <p className="card-text">A website that allows users to input a city name and receive daily and 5-day forecast for that city</p>
                      <a href="https://github.com/dasiasmith/Password-Generator" target="_blank" rel='noreferrer' className="btn btn-primary">GitHub</a>
                      <a href="https://dasiasmith.github.io/Password-Generator/" target="_blank" rel='noreferrer' className="btn btn-primary">Deployed</a>
                    </div>
                  </div>
                </div>
              </div>  
              
              <div id="contact" className="container-fluid container text-center">
                  <div classNameclass="col-12 col-md-12">
                      <h1>contact</h1>
                      <hr id= "contactHr" className="rounded"/>
                  </div>
                  <div className="container fillout">
                    <form action="/action_page.php">
                      <label for="fname">First Name</label>
                      <input type="text" id="fname" name="firstname" placeholder="Your name.."/>

                      <label for="lname">Last Name</label>
                      <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>

                      <label for="subject">Subject</label>
                      <textarea id="subject" name="subject" placeholder="Write something.." style={{ height: 10 }}></textarea>

                      <input type="submit" value="Submit"/>
                    </form>
                  </div>
                  <div id="icons" classNameclass="icons row">
                      <a href ="https://www.linkedin.com/in/dasia-smith/" target="_blank" rel='noreferrer'><img src={linkedin} alt="LinkedIn Icon"/></a>
                      <a href= "https://github.com/dasiasmith" target="_blank" rel='noreferrer'><img src={github} alt="GitHub icon"/></a>
                      <a href= "mailto:dasiasmith023@gmail.com" target="_blank" rel='noreferrer'><img src={gmail} alt="Gmail icon"/></a>
                  </div>
                </div>
        </main>
                <footer>
                <h2>Made with ❤️️ by Dasia</h2>
                </footer>

      </div>
    );
  }
}

export default App;