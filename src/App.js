import React from 'react';
import './App.css';
import './Card.css';
import Card from './Components/Card';
import one from './Components/one.jpg';
import two from './Components/two.jpg';
import three from './Components/three.jpg';
import four from './Components/four.jpg';





function App() {


  return (

    <div className="App">


       <header className='App-header'>MERN Full Stack Development</header>

       <div className='card-file'>

      <Card 
      title ='React JS'
      imageUrl ={one}
      body ='React is a JavaScript-based UI development library. Facebook and an open-source developer community run it. Although React is a library rather than a language, it is widely used in web development.'
      />
      <Card 
      title ='Node JS'
      imageUrl ={two}
      body ='Node.js is an open source, cross-platform runtime environment for developing server-side and networking applications. Node.js applications are written in JavaScript, and can be run within the Node.js'
      />
      <Card 
      title ='MONGO DB'
      imageUrl ={three}
      body ='MongoDB is an open source NoSQL database management program. NoSQL is used as an alternative to traditional relational databases. NoSQL databases are quite useful for working with large sets of'
      />
      <Card 
      title ='EXPRESS JS'
      imageUrl ={four}
      body ='Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.With a myriad of HTTP utility methods and middleware at'
      />
    </div>
    </div>
  );
}

export default App;
