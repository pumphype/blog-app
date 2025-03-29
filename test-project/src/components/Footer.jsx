import React from 'react';

export function Footer() {
  return (
    <>
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
      </footer>    </>
  )
}
