import { useState, useEffect } from "react";
import axios from "axios";

import Header from "../Header/Header";
import Joke from "./Joke";

const JokesContainer = () => {
  const [joke, setJoke] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [showPunchline, setShowPunchline] = useState(false);

  const fetchJoke = () => {
    setIsLoading(true);
    axios
      .get("https://karljoke.herokuapp.com/jokes/random")
      .then((data) => {
        setJoke(data.data);
        setIsLoading(false);
        setShowPunchline(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError("THERE WAS AN ERROR LOADING YOUR JOKE.");
      });
  };

  useEffect(() => {
    fetchJoke();
  }, []);

  return (
    <div className="jokes-container">
      <Header
        buttonTitle={"Get a New Random Joke"}
        linkText={"View API Docs"}
        linkUrl={"https://karljoke.herokuapp.com/"}
        onClick={() => fetchJoke()}
      />
      <Joke
        joke={joke}
        isLoading={isLoading}
        error={error}
        showPunchline={showPunchline}
        setShowPunchline={setShowPunchline}
      />
    </div>
  );
};

export default JokesContainer;
