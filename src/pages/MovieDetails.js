import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/action/action";
import { useParams } from "react-router-dom";
import { BookTicket } from "../component/Modal";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Tosted } from "../utils/Tosted";

const MovieDetails = () => {
  const { showId } = useParams();
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.AllShows.show);
  console.log("shows=>", shows);
  useEffect(() => {
    dispatch(getById(showId));
  }, [showId]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    Tosted("Ticket Book Successfully");
    setShow(false);
  };

  return (
    <div className="">
      <div className="movie-card">
        <div className="container">
          {/* <a href="#"> */}
          <img src={shows.image.medium} alt="cover" className="cover" />
          {/* </a> */}

          <div
            className="hero"
            style={{
              backgroundImage: `url(${shows.image.original})`,
              backgroundSize: "cover",
              position: "relative",
            }}
          >
            <div
              style={{
                position: "absolute",
                right: "46px",
                bottom: "28px",
              }}
            >
              <Button
                className="btn btn-primary fw-bold "
                style={{ width: "9rem", height: "3rem" }}
                onClick={handleShow}
              >
                Book Ticket
              </Button>

              <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
              >
                <Modal.Header closeButton>
                  <Modal.Title>Book your Ticket</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <div className="d-flex">
                    <img
                      src={shows.image.medium}
                      style={{ width: "150px", height: "auto" }}
                      alt="movie"
                    />
                    <h3 className="ps-4 fw-bold">Movie: {shows.name}</h3>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button variant="primary" onClick={handleSubmit}>
                    Submit
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
            <div className="details">
              <div className="title1">{shows.name}</div>

              <div className="text-white fw-bold">
                <p>
                  Rating:
                  <span>
                    {" "}
                    {shows.rating.average ? shows.rating.average : "null"}
                  </span>
                </p>
                <p>
                  Language:
                  <span> {shows.language}</span>
                </p>
              </div>
            </div>
          </div>

          <div className="description">
            <div className="column1">
              <div className="d-flex text-white fw-bold">
                <p className="type ">{shows.genres[0]},</p>
                <p className="type ps-4 text">{shows.genres[1]}</p>
              </div>
            </div>

            <div className="column2">
              <p
                dangerouslySetInnerHTML={{
                  __html: shows.summary,
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
