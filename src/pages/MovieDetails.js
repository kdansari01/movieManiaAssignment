import React, { useEffect, useState } from "react";
import "./movieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/action/action";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { Tosted } from "../utils/Tosted";
import MobileCard from "./mobileCard/MobileCard";
import { BookTicket } from "../component/Modal";

const MovieDetails = () => {
  const navigate = useNavigate();

  const dispatch = useDispatch();
  const { showId } = useParams();
  const shows = useSelector((state) => state.AllShows.show);
  console.log("shows=>", shows);

  useEffect(() => {
    dispatch(getById(showId, navigate));
  }, [showId, dispatch, navigate]);

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  const handleSubmit = () => {
    Tosted("Ticket Book Successfully");
    setShow(false);
  };

  return (
    <>
      {show && (
        <BookTicket
          {...{
            show,
            shows,
            handleSubmit,
            handleClose,
          }}
        />
      )}
      <div className="">
        <div className="movie-card">
          <div className="containers">
            <img src={shows?.image?.medium} alt="cover" className="cover" />

            <div
              className="hero"
              style={{
                backgroundImage: `url(${shows?.image?.original})`,
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
                  <p>{shows?.schedule?.days} :</p>
                  <p>{shows?.schedule?.time}</p>
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
              </div>
              <div className="details">
                <div className="title1">{shows?.name}</div>

                <div className="text-white fw-bold">
                  <p>
                    Rating:
                    <span>
                      {" "}
                      {shows?.rating?.average ? shows?.rating?.average : "null"}
                    </span>
                  </p>
                  <p>
                    Language:
                    <span> {shows?.language}</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="description">
              <div className="column1">
                <div className="d-flex text-white fw-bold">
                  <p className="type ">{shows?.genres?.[0]},</p>
                  <p className="type ps-4 text">{shows?.genres?.[1]}</p>
                </div>
              </div>

              <div className="column2">
                <p
                  dangerouslySetInnerHTML={{
                    __html: shows?.summary,
                  }}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mobileCard">
          <MobileCard
            {...{
              shows,
              handleShow,
            }}
          />
        </div>
      </div>
    </>
  );
};

export default MovieDetails;
