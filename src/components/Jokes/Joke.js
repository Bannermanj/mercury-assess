import "./Joke.scss";
import "animate.css";

import Button from "../Button/Button";

const Joke = ({ joke, isLoading, error, showPunchline, setShowPunchline }) => {
  return (
    <div className="joke">
      {error && <h4 className="joke-error">{error}</h4>}
      {isLoading ? (
        <h3 className="joke-loading">LOADING YOUR JOKE...</h3>
      ) : (
        <>
          <div className="joke-setup-container">
            <h2 className="joke-setup-container-text animate__animated animate__slideInLeft">
              {joke?.setup}
            </h2>
          </div>
          <Button
            onClick={() => setShowPunchline(!showPunchline)}
            buttonTitle={showPunchline ? "Hide Punchline" : "Show Punchline"}
            className="button-joke"
          />
        </>
      )}

      {showPunchline && (
        <div className="joke-punchline-container">
          <h2 className="joke-punchline-container-text animate__animated animate__slideInRight">
            {joke?.punchline}
          </h2>
        </div>
      )}
    </div>
  );
};
export default Joke;
