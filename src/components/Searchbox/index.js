
import React, { useState, useRef, useEffect } from 'react';
import './SearchBox.css';

const SearchBox = ({ onSearch, onTyping }) => {
  const [submitted, setSubmitted] = useState(false);
  const [searchedWord, setSearchedWord] = useState('');
  // const [inputValue, setInputValue] = useState('');

  const inputRef = useRef();

  const submitHandler = (Event) => {
    Event.preventDefault();

    console.log(searchedWord);

    if (searchedWord === '') {
      setSubmitted(true);
      return;
    // Call the onSearch or any other logic here
    }
    
    onSearch(searchedWord);
  };

  const handleSearch = (word) => {
    setSearchedWord(word);
    // Call onTyping or any other logic here
    onTyping(word)
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <form
      className={`search-box ${submitted ? 'submitted' : ''}`}
      onSubmit={submitHandler}
    >
      <input
        ref={inputRef}
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search for any word"
        value={searchedWord}
        className={`search-box_input ${searchedWord ? 'invalid' : ''}`}
      />
      <span className="error-message">Whopps, can't be empty</span>
      <button type="submit" className="btn-search">
        o
      </button>
    </form>
  );
};

export default SearchBox;
