import React from "react";

export default function Team() {
  return (
    <>
      <div>
        <div className="container">
          <h4 className="heading">
            WHO'S BEHIND IT
          </h4>
          <div className="row cards">
            <div className="col-3">
            <div className="card" style={{ width: "300px" }}>
                <img
                  className="card-img-top"
                  src="https://img.freepik.com/free-vector/follow-me-social-business-theme-design_24877-50426.jpg?ga=GA1.1.280082568.1712342847&semt=ais_hybrid"
                  alt="Card image"
                 
                />
                <div className="card-body">
                  <h4 className="card-title">ARVIND</h4>
                  <p className="card-text">
                  As a full-stack developer with <br/> <mark>7 years</mark> of experience, <br/>I specialize in building end-to-end web applications using a variety of front-end and back-end technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "300px" }}>
                <img
                  className="card-img-top"
                  src="https://img.freepik.com/free-vector/cute-man-working-laptop-cartoon-vector-icon-illustration-people-technology-icon-concept-isolated_138676-9123.jpg?ga=GA1.1.280082568.1712342847&semt=ais_hybrid"
                  alt="Card image"
                />
                <div className="card-body">
                  <h4 className="card-title">ANAND</h4><br/>
                  <p className="card-text">
                   As a backend developer with over " 3 years " of experience, I specialize in building robust and scalable server-side applications using modern technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div className="card" style={{ width: "300px" }}>
                <img
                  className="card-img-top"
                  src="https://img.freepik.com/free-photo/androgynous-avatar-non-binary-queer-person_23-2151100221.jpg?ga=GA1.1.280082568.1712342847&semt=ais_hybrid"
                  alt="Card image"
                
                />
                <div className="card-body">
                  <h4 className="card-title">ASHUTOSH</h4><br/>
                  <p className="card-text">
                  I focus on delivering seamless user experiences through clean, efficient code and ensuring optimal performance across different devices and browsers
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
