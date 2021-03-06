import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchHeroes, removeHeroById } from "../heroes-actions";
import Button from "react-bootstrap/Button";
import { Link } from "@reach/router";

export default function Heroes() {
  const dispatch = useDispatch();
  const { heroes, isLoading } = useSelector(s => s.heroReducer);

  useEffect(() => {
    dispatch(fetchHeroes());
  }, [dispatch]);

  return (
    <div>
      <h1>Super Heroes</h1>
      <ul>
        {isLoading ? (
          <h2>Loading.. Please wait..</h2>
        ) : (
          heroes.map(h => (
            <li key={h.id}>
              {`${h.firstName} ${h.lastName} is ${h.knownAs}`}
              <Link to={`/hero-detail/${h.id}`}>
                <Button variant="info">Detail</Button>
              </Link>
              <Button
                onClick={() => dispatch(removeHeroById(h.id))}
                variant="danger"
              >
                Delete
              </Button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}
