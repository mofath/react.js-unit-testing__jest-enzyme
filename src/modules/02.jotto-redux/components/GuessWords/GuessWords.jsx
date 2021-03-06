import React from "react";
import PropTypes from "prop-types";

const GuessWords = (props) => {
  return (
    <div data-test="component-guessed-words">
      {props.guessedWords.length === 0 ? (
        <h6 data-test="guess-instructions">
          Try to guess the secret word!
        </h6>
      ) : (
        <div data-test="guessed-words">
          <h3>Guessed Words</h3>
          <table className="table table-sm">
            <thead className="thead-light">
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {props.guessedWords.map((word, index) => (
                <tr data-test="guessed-word" key={index}>
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GuessWords.prototype = {
  guessWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default GuessWords;
