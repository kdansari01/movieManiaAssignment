import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/action/action";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { Tosted } from "../utils/Tosted";
import { decrement, increment } from "../redux/action/ticket.action";
import MobileCard from "./mobileCard/MobileCard";

const MovieDetails = () => {
  const count = useSelector((state) => state.TicketShow);
  console.log(count);
  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };
  const dispatch = useDispatch();
  const { showId } = useParams();
  const shows = useSelector((state) => state.AllShows.show);
  console.log("shows=>", shows);
  useEffect(() => {
    dispatch(getById(showId));
  }, [showId, dispatch]);
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
        <div className="containers">
          <img src={shows.image.medium} alt="cover" className="cover" />

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
                right: "10rem",
                top: "2rem",
                fontWeight: "bold",
              }}
            >
              <h2>Schedule</h2>
              <div className="d-flex justify-content-between">
                <p>{shows.schedule.days} :</p>
                <p>{shows.schedule.time}</p>
              </div>
            </div>
            <div className="bookTicket">
              <Button
                className="btn btn-primary fw-bold "
                style={{ width: "9rem", height: "3rem" }}
                onClick={handleShow}
              >
                <span className="text-white"> Book Ticket</span>
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
                <Modal.Body className="row col-12 d-flex">
                  <div className="col-6">
                    <img
                      src={shows.image.medium}
                      style={{ width: "150px", height: "auto" }}
                      alt="movie"
                    />
                  </div>
                  <div className="col-6">
                    <div
                      style={{
                        borderBottom: "3px solid ",
                      }}
                    >
                      <h3 className="text-center">{shows.name}</h3>
                    </div>
                    <div>
                      <ul className="nav-link mt-2">
                        <li>Time : {shows.schedule.time}</li>
                        <li>Price : $ 120</li>
                        <li>Language : {shows.language}</li>
                        <li>
                          Rating : {shows ? shows.rating.average : "null"}
                        </li>
                      </ul>
                    </div>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn border fw-bold "
                        onClick={handleDecrement}
                        disabled={count.TotalTicket === 0}
                      >
                        -
                      </button>
                      <span className="num px-2">{count.TotalTicket}</span>
                      <button
                        className="btn border "
                        onClick={handleIncrement}
                        disabled={count.TotalTicket === 10}
                      >
                        +
                      </button>
                    </div>
                    <div>
                      <p className="text-end px-2">total: $ {count.Price} </p>
                    </div>
                  </div>
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="primary"
                    className="text-white"
                    onClick={handleSubmit}
                    disabled={count.TotalTicket === 0}
                  >
                    <span className="text-white fw-bold"> Book Ticket</span>
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
      <div className="mobileCard">
        <MobileCard />
      </div>
    </div>
  );
};

export default MovieDetails;
