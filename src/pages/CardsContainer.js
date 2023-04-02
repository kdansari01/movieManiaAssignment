import React, { useEffect } from "react";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import { getShows } from "../redux/action/action";
import { useNavigate } from "react-router-dom";

function CardsContainer() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.AllShows.shows);
  console.log("shows=>", shows);
  useEffect(() => {
    dispatch(getShows());
  }, [dispatch]);
  return (
    <div>
      {shows &&
        shows?.map(({ show }) => (
          <div
            className="movie_card"
            id="bright"
            key={show.id}
            onClick={() => navigate(`/bookTicket/${show?.id}`)}
          >
            <div className="info_section">
              <div className="movie_header">
                <img
                  className="locandina"
                  src={show?.image?.original}
                  alt=".."
                />
                <h1>{show.name}</h1>
                {/* <h4>2017, David Ayer</h4> */}
                <span className="minutes">{show?.runtime} min</span>
                <p className="type">{show?.genres[0]}</p>
                <p className="type">{show?.genres[1]}</p>
              </div>
              <div className="movie_desc">
                <p
                  className="text"
                  dangerouslySetInnerHTML={{
                    __html: show.summary.substring(0, 120) + "...",
                  }}
                />
              </div>
              <div className="movie_social">
                <ul>
                  <li>
                    {/* <i className="material-icons"></i> */}Rating:
                    <span> {show.rating.average}</span>
                  </li>
                  <li>
                    {/* <i className="material-icons"></i> */}Language:
                    <span> {show.language}</span>
                  </li>
                </ul>
              </div>
            </div>
            <div
              className="blur_back bright_back"
              style={{ backgroundImage: `url(${show?.image?.original})` }}
            ></div>
          </div>
        ))}
    </div>
  );
}

export default CardsContainer;
