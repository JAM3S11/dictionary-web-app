// import React from 'react';
// import PartOfSpeech from '../PartOfSpeech/index.js';
// import './PartsOfSpeech.css';

// const index = ({meanings}) => {
//   console.log(meanings);

//   const items = [];
//   // const content = [];
//   // console.log(items)

//   const jsxContent = Object.keys(meanings).forEach((partOfSpeech) => {
    
//     const item = meanings[partOfSpeech];

//     const singleItem = {
//       title:partOfSpeech,
//       content:item,
//     };

//     // item.push(singleItem);
//   }
//   );
  
//   return (
//     <div className='parts-of-speech'>
//       {items && items.length > 0 && (
//         <>
//           {
//             items.map((item, index) => {
//             return <PartOfSpeech item={item} key={index} />;
//           })}
//         </>
//       )}
//     </div>
//   );
// };

// export default index;

import React from 'react';
import PartOfSpeech from '../PartOfSpeech/index.js';
import './PartsOfSpeech.css';

const index = ({ meanings }) => {
  console.log(meanings);

  const content = Object.keys(meanings).forEach((partOfSpeech) => {
    const content = meanings[PartOfSpeech];
    return {
      title: partOfSpeech,
      content: content,
    };
  });

  return (
    <div className='parts-of-speech'>
      {content && content.length > 0 && (
        <>
          {content.map((content, index) => {
            return <PartOfSpeech item={content} key={index} />;
          })}
        </>
      )}
    </div>
  );
};

export default index;
