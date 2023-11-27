
import {useState} from 'react';

import './App.css';
import TopBar from './components/TopBar/index.js';
import SearchBox from './components/Searchbox/index.js';
// import Pronounce from './components/Pronounce/index.js';
// import PartOfSpeech from './components/PartOfSpeech/index.js';
// import Footer from './components/Footer/index.js';
import Main from './components/Main/index.js';

function App() {

  const [idle,setIdle] =useState(true)
  const [searching,setSearching] =useState(false)
  const [notFound,setNotFound] =useState(false)
  const [content,setContent] =useState('');

  ////Changed Code/////
  // const searchHandler = async(searchWord) => {

  //   setSearching(true);
  //   setIdeal(false);

  //   const searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/$(searchedWord)`;
  //   // const searchUrl = 'https://api.dictionaryapi.dev/api/v2/entries/en/example';

  //   const response = await fetch(searchUrl);

  //   setSearching(false);
  //   if (response.ok) {
  //     const jsonResponse = await response.json();

  //     if (jsonResponse.title === 'No Definitions Found') {
  //       setNotFound(true);
  //     } else {
  //       setNotFound(false);
  //       setContent(jsonResponse[0]);
  //     } else {
  //       //Handle the case when the response is not okay
  //       setNotFound(true);
  //       setContent('');
  //     }
  //   };

  const searchHandler = async (searchWord) => {
    setSearching(true);
    setIdle(false);
  
    const searchUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`;
  
  //   const response = await fetch(searchUrl);
  
  //   setSearching(false);
  
  //   if (response.ok) {
  //     const jsonResponse = await response.json();
  
  //     if (jsonResponse.title === 'No Definitions Found') {
  //       setNotFound(true);
  //     } else {
  //       setNotFound(false);
  //       setContent(jsonResponse[0]);
  //     }
  //   } else {
  //     //  Handle the case when the response is not OK
  //     setNotFound(true);
  //     setContent('');
  //   }
  // };
  

  

    ///////Previous code====
    const response = await fetch(searchUrl);
    const jsonResponse = await response.json();

    setSearching(false)

    console.log(jsonResponse);


    if(jsonResponse.title === 'No Definitions Found') {
      setNotFound(true);
    } else {
      setNotFound(false);

      //Content Here
      setContent(jsonResponse[0]);
    }
  };

  const reset=()=> {
    setIdle(false);
    setSearching(false);
    setNotFound(false);
    setContent('');
  };
  return (
    <div className="container">
      <TopBar />
      <SearchBox onSearch={searchHandler} onTyping={reset}/>
      {/* <Pronounce />
      <PartOfSpeech />
      <Footer /> */}
      <Main 
      idle={idle} 
      searching={searching} 
      notFound={notFound} 
      content={content}
      />
    </div>
  );
}

export default App;



