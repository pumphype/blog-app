import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">SPORT BLOG</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">Accueil</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/privacy">Politique de confidentialité</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header 
        className="header-section vh-100 d-flex align-items-center" 
        style={{ 
          background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('https://static.vecteezy.com/ti/photos-gratuite/t1/25501407-des-sports-equipement-sur-une-noir-contexte-sport-concept-copie-espace-des-sports-equipement-sur-une-fonce-arriere-plan-ai-genere-gratuit-photo.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container text-center text-white">
          <h1 className="display-3 mb-4 fw-bold">Bienvenue sur Sport Blog</h1>
          <p className="lead fs-4">
            Plateforme spécialisée dans les dernières actualités sportives, analyses techniques et articles d'experts sur divers sports internationaux
          </p>
        </div>
      </header>

      {/* Blog Section */}
      <main className="container my-5 py-5">
        <div className="row g-4">
          {blogs.map((blog) => (
            <div className="col-lg-4 col-md-6" key={blog.id}>
              <div className="card h-100 shadow-lg border-0">
                <img 
                  src={blog.image} 
                  className="card-img-top" 
                  alt={blog.title}
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="card-title fw-bold mb-3">{blog.title}</h3>
                  <p className="card-text text-muted flex-grow-1">{blog.description}</p>
                  <div className="text-center">
                    <button className="btn btn-dark btn-lg px-4">
                      Lire la suite
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-5">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-4">
              <h4 className="mb-4 fw-bold">SPORT BLOG</h4>
              <p className="text-muted">
                La première plateforme francophone spécialisée dans le contenu sportif de haute qualité
              </p>
            </div>
            
            <div className="col-lg-4">
              <h5 className="mb-4 fw-bold">Liens rapides</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="/about" className="text-decoration-none text-muted">À propos</a>
                </li>
                <li className="mb-2">
                  <a href="/privacy" className="text-decoration-none text-muted">Politique de confidentialité</a>
                </li>
                <li className="mb-2">
                  <a href="/contact" className="text-decoration-none text-muted">Nous contacter</a>
                </li>
              </ul>
            </div>

            <div className="col-lg-4">
              <h5 className="mb-4 fw-bold">Coordonnées</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-envelope me-2"></i>
                  contact@sportblog.com
                </li>
                <li className="mb-2">
                  <i className="bi bi-phone me-2"></i>
                  +33 6 00 00 00 00
                </li>
                <li className="mb-2">
                  <i className="bi bi-geo-alt me-2"></i>
                  Paris, France
                </li>
              </ul>
            </div>
          </div>
          
          <hr className="my-5" />
          
          <div className="text-center text-muted">
            <p className="mb-0">
              © 2024 SPORT BLOG. Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;