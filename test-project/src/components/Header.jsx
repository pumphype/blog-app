import React from 'react';

export function Header() {
  return <header
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
      <button 
            className="btn btn-primary btn-lg px-5 rounded-pill fw-bold"
            data-bs-toggle="modal" 
            data-bs-target="#newsletterModal"
          >
            <i className="bi bi-envelope-arrow-up me-2"></i>
            Abonnez-vous à notre newsletter
          </button>
          <div className="modal fade" id="newsletterModal" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-dark text-white">
              <h5 className="modal-title fw-bold">
                <i className="bi bi-megaphone me-2"></i>
                Restez informé !
              </h5>
              <button 
                type="button" 
                className="btn-close btn-close-white" 
                data-bs-dismiss="modal"
              ></button>
            </div>
            
            <div className="modal-body py-4">
              <form>
                <div className="mb-4">
                  <label htmlFor="fullName" className="form-label fw-bold">Nom complet</label>
                  <input 
                    type="text" 
                    className="form-control form-control-lg" 
                    id="fullName"
                    placeholder="Jean Dupont"
                    required
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="email" className="form-label fw-bold">Adresse e-mail</label>
                  <input 
                    type="email" 
                    className="form-control form-control-lg" 
                    id="email"
                    placeholder="jean.dupont@example.com"
                    required
                  />
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-dark btn-lg fw-bold">
                    <i className="bi bi-send-check me-2"></i>
                    S'abonner maintenant
                  </button>
                </div>
              </form>
            </div>

            <div className="modal-footer bg-light">
              <small className="text-muted">
                Nous ne partagerons jamais vos informations. 
                <a href="/privacy" className="text-decoration-none ms-1">Politique de confidentialité</a>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>;
}
