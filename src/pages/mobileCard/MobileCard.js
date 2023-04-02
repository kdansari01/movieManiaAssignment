import "./mobilecard.css";
import React from "react";
import Button from "react-bootstrap/Button";

const MobileCard = ({ shows, handleShow: showModal }) => {
  return (
    <div>
      <div className="grid-wrapper" style={{ position: "relative" }}>
        <div className="card-container box">
          <div className="card-flip">
            <div className="card front">
              <img
                src={shows?.image?.original}
                className="card-img-top img-fluid"
                alt="movie-poster"
              />
              <div className="card-block"></div>
            </div>
            <div
              className="card back"
              style={{
                backgroundImage: `url(${shows?.image?.original})`,
                backgroundSize: "cover",
                marginTop: "4rem",
              }}
            >
              <div className="card-block text-center text-white mt-4">
                <h4 className="card-title text-white">Rating</h4>
                <p className="card-text text-center">
                  {shows?.rating?.average}/10
                </p>
                <div>
                  <h3 className="fw-bold ">Summary</h3>
                </div>
                <div className="d-flex justify-content-center">
                  <p
                    style={{
                      width: "200px",
                      marginTop: "14px",
                    }}
                    dangerouslySetInnerHTML={{
                      __html: shows?.summary,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <Button
            className="btn btn-primary fw-bold "
            style={{
              width: "9rem",
              height: "3rem",
              position: "absolute",
              left: "40%",
            }}
            onClick={showModal}
          >
            Book Ticket
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
