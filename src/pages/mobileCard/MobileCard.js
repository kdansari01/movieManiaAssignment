import "./mobilecard.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { getById } from "../../redux/action/action";
import { Tosted } from "../../utils/Tosted";
import { decrement, increment } from "../../redux/action/ticket.action";

const MobileCard = () => {
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
  }, [showId]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    Tosted("Ticket Book Successfully");
    setShow(false);
  };

  return (
    <div>
      <div className="grid-wrapper" style={{ position: "relative" }}>
        <div className="card-container box">
          <div className="card-flip">
            <div className="card front">
              <img
                src={shows.image.original}
                className="card-img-top img-fluid"
                alt="movie-poster"
              />
              <div className="card-block"></div>
            </div>
            <div
              className="card back"
              style={{
                backgroundImage: `url(${shows.image.original})`,
                backgroundSize: "cover",
                marginTop: "4rem",
              }}
            >
              <div className="card-block text-center text-white mt-4">
                <h4 className="card-title text-white">Rating</h4>
                <p className="card-text text-center">
                  {shows.rating.average}/10
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
                      __html: shows.summary,
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
                    <li>Rating : {shows ? shows.rating.average : "null"}</li>
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
                onClick={handleSubmit}
                disabled={count.TotalTicket === 0}
              >
                Submit
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MobileCard;
