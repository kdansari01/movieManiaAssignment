import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { decrement, increment } from "../redux/action/ticket.action";
import { useDispatch, useSelector } from "react-redux";

export const BookTicket = ({ show, shows, handleSubmit, handleClose }) => {
  const count = useSelector((state) => state.TicketShow);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <Modal
      size="lg"
      centered
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
    >
      <Modal.Header closeButton>
        <Modal.Title>Book your Ticket</Modal.Title>
      </Modal.Header>
      <Modal.Body className="row col-12 d-flex">
        <div className="col-6 d-flex justify-content-center">
          <img
            src={shows?.image?.medium}
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
            <h3 className="text-center">{shows?.name}</h3>
          </div>
          <div>
            <ul className="nav-link mt-2">
              <li>Time : {shows?.schedule?.time}</li>
              <li>Price : $ 120</li>
              <li>Language : {shows?.language}</li>
              <li>Rating : {shows?.rating?.average ?? "N/A"}</li>
            </ul>
          </div>
          <div className="d-flex align-items-center">
            <button
              className="btn border fw-bold "
              onClick={handleDecrement}
              disabled={!count.TotalTicket}
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
  );
};
