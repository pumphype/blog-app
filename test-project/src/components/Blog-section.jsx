import React from 'react';

export function Footer() {
  return (
    <>
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
      </main>  </>
  )
}
