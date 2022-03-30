import React from 'react';
import './App.css';
import '../src/css/style.css';

import Header from './components/Header';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';


class App extends React.Component {
  render (){






    return (
      <div className="App">
        <Header/>
    
        <main>
            <Aboutme/>

            <div id="work" className="container-fluid container text-center">
                <div className="col-12 col-md-12">
                    <h1>work</h1>
                    <hr id="workHr" className="rounded"/>
                </div>
            </div>    
            <div className="row">
              <Portfolio/>
            </div>   
              <Contact/>    
        </main>
                <Footer/>
      </div>
    );
  }
}

export default App;