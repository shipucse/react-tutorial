import React from 'react';
import Head from '../header';
import Banner from '../banner';
import Portfolio from '../portfolio';
import About from '../about';
import Contact from '../contact';
import Footer from '../footer';
const Home = () =>{
    return( 
       <div>
           <Head />
           <Banner />
           <Portfolio />
           <About />
           <Contact />
           <Footer />
      </div>
    );
}

export default Home ;