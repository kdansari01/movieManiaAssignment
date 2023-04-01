import React, { useEffect } from "react";
import "./movieDetails.css";
import { useDispatch, useSelector } from "react-redux";
import { getById } from "../redux/action/action";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const { showId } = useParams();
  const dispatch = useDispatch();
  const shows = useSelector((state) => state.AllShows.show);
  console.log("shows=>", shows);
  useEffect(() => {
    dispatch(getById(showId));
  }, [showId]);
  return (
    <div>
      <div className="movie-card">
        <div className="container">
          <a href="#">
            <img src={shows.image.medium} alt="cover" className="cover" />
          </a>

          <div
            className="hero"
            style={{
              backgroundImage: `url(${shows.image.original})`,
              backgroundSize: "cover",
            }}
          >
            {/* <image
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/195612/hobbit_cover.jpg"
              alt=",,"
            /> */}
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
          <div className="d-flex justify-content-end">
            <button className="btn btn-success">book</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
