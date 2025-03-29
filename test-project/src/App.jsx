import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Blog_section } from './components/Blog_section';
import { Navbar } from './components/Navbar';

const App = () => {
  const blogs = [
    {
      id: 1,
      title: "Dernières nouvelles du football",
      description: "Couverture complète des principaux événements et transferts dans le monde du football international",
      image: "https://www.fcbarcelona.com/photo-resources/2025/03/05/afd26f7d-9e9f-4a8f-8a6a-25b307842d23/TIMEZONES_ESCUTS.jpg?width=1200&height=750"
    },
    {
      id: 2,
      title: "Techniques d'entraînement modernes",
      description: "Les méthodes scientifiques les plus récentes pour l'entraînement des athlètes et l'amélioration des performances",
      image: "https://i.ytimg.com/vi/CnYb-G1xKFA/maxresdefault.jpg"
    },
    {
      id: 3,
      title: "L'avenir du sport électronique",
      description: "Analyse approfondie des développements dans l'industrie du gaming et des compétitions mondiales",
      image: "https://www.sportsvideo.org/wp-content/uploads/2023/07/Screen-Shot-2023-07-07-at-2.57.48-PM.png"
    }
  ];

  return (
    <div className="App">
      {/* Navbar */}
      {<Navbar/>}

      {/* Header */}
      {<Header />}


      {/* Blog Section */}
      <Blog_section/>

  
      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;


