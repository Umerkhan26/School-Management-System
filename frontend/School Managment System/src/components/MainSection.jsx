import bg2 from "../assets/bg2.jpg";
import bg3 from "../assets/bg3.png";
import bg4 from "../assets/bg4.jpg";
import bg5 from "../assets/bg5.jpg";

import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaRegCheckCircle } from "react-icons/fa";

const MainSection = () => {
  return (
    <>
      <main className="mt-0">
        <div
          id="myCarousel"
          className="carousel slide mb-6 pointer-event"
          data-bs-ride="carousel"
          data-bs-interval="1000"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="0"
              className="active"
              aria-label="Slide 1"
              aria-current="true"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#myCarousel"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>

          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={bg2} className="d-block w-100" alt="First slide" />
              <div className="container"></div>
            </div>

            <div className="carousel-item">
              <img src={bg3} className="d-block w-100" alt="Second slide" />
            </div>

            <div className="carousel-item">
              <img src={bg4} className="d-block w-100" alt="Third slide" />
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>

          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>

        {/* About Section */}
        <section className="section">
          <div className="container">
            <div
              className="row align-items-center"
              style={{
                paddingTop: "90px",
                paddingBottom: "60px",
                marginLeft: "-15px",
                marginRight: "-15px",
              }}
            >
              <div className="col-md-6 order-1 order-md-1 mb-4 mb-md-0">
                <img
                  className="img-fluid w-100"
                  style={{
                    height: "338px",
                    maxHeight: "600px",
                    marginLeft: "-18px",
                  }}
                  src={bg5}
                  alt="about"
                />
              </div>
              <div className="col-md-6 order-2 order-md-2">
                <h2
                  className="section-title"
                  style={{
                    fontSize: "40px",
                    marginBottom: "20px",
                    color: "#1e1e4b",
                    fontWeight: "700",
                    lineHeight: "1.2",
                  }}
                >
                  About <span style={{ color: "red" }}>I</span>qbal Vision
                  School & Collage
                </h2>
                <p
                  style={{
                    fontFamily: "Poppins, sans-serif",
                    fontWeight: "400",
                    fontSize: "16px",
                    lineHeight: "1.9",
                    color: "#5c5c77",
                    margin: "0px 0px 48px",
                  }}
                >
                  IQBAL VISION School & College was set up in 2014 with a view
                  to meet the ever increasing needs of education. We are
                  dedicated to providing the best education and fostering a
                  learning environment where students can thrive. Our mission is
                  to nurture young minds, guiding them towards academic
                  excellence and personal growth.
                </p>
                <a
                  href="/about"
                  className="btn btn-danger"
                  style={{
                    fontFamily: " Poppins, sans-serif",
                    fontSize: "16px",
                    padding: "15px 40px",
                    borderRadius: "0px",
                    fontWeight: "500",
                    position: "relative",
                    zIndex: "1",
                    transform: ".2s ease",
                    overflow: "hidden",
                    marginTop: "-24px",
                  }}
                >
                  Learn more
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="container my-5 section-container">
          <div className="text-center">
            <h2 className="">WHAT MAKES US DIFFERENT</h2>
            <p className="lead">We make your child happy day after day</p>
            <div className="d-flex justify-content-center align-items-center my-4 custom-divider">
              <div className="line"></div>
              <div className="circle">
                <span></span>
                <span></span>
              </div>
              <div className="second-line"></div>
            </div>
          </div>

          <div className="row my-5">
            <div className="col-md-4">
              <h3 className="font-weight-light">OUR DAILY CARE</h3>
              <h4 className="font-weight-light">
                POPULAR EDUCATION FOR YOUR CHILD
              </h4>
              <ul className="list-unstyled my-4">
                <li>
                  <FaRegCheckCircle
                    style={{
                      color: "#efd000",
                      position: "relative",
                      left: "-6px",
                    }}
                  />
                  Learning program with after-school
                </li>
                <li>
                  <FaRegCheckCircle
                    style={{
                      color: "#efd000",
                      position: "relative",
                      left: "-6px",
                    }}
                  />
                  Opportunities to scientific experiments
                </li>
                <li>
                  <FaRegCheckCircle
                    style={{
                      color: "#efd000",
                      position: "relative",
                      left: "-6px",
                    }}
                  />
                  Positive learning environment
                </li>
                <li>
                  <FaRegCheckCircle
                    style={{
                      color: "#efd000",
                      position: "relative",
                      left: "-6px",
                    }}
                  />
                  Learning through play
                </li>
                <li>
                  <FaRegCheckCircle
                    style={{
                      color: "#efd000",
                      position: "relative",
                      left: "-6px",
                    }}
                  />
                  Individual attention in small classes
                </li>
              </ul>
              <a
                href="/facilities"
                className="btn btn-outline-danger rounded-pill"
              >
                MORE INFO
              </a>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 text-center my-3">
                  <i className="fas fa-chair fa-3x text-custom"></i>
                  <h5 className="font-weight-bold mt-3">
                    SPACIOUS CLASS ROOMS
                  </h5>
                </div>
                <div className="col-md-4 text-center my-3">
                  <i className="fas fa-vial fa-3x text-custom"></i>
                  <h5 className="font-weight-bold mt-3">SCIENCE LABORATORY</h5>
                </div>
                <div className="col-md-4 text-center my-3">
                  <i className="fas fa-desktop fa-3x text-custom"></i>
                  <h5 className="font-weight-bold mt-3">COMPUTER LABORATORY</h5>
                </div>
                <div className="col-md-4 text-center my-3">
                  <i className="fas fa-user-md fa-3x text-custom"></i>
                  <h5 className="font-weight-bold mt-3">MEDICAL FACILITIES</h5>
                </div>
                <div className="col-md-4 text-center my-3">
                  <i className="fas fa-ice-cream fa-3x text-custom"></i>
                  <h5 className="font-weight-bold mt-3">CANTEEN</h5>
                </div>
                <div className="col-md-4 text-center my-3">
                  <i className="fas fa-bus fa-3x text-custom"></i>
                  <h5 className="font-weight-bold mt-3">TRANSPORT</h5>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default MainSection;