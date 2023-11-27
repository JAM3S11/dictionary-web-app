import React from 'react';
import './PartOfSpeech.css';

const index = ({ item, content, definitions }) => {
    // console.log(item);
  return (
    <article className='part-of-speech'>
        <div className='part-of-speech_content'>
            <h3 className='part-of-speech_title'>
                <span>{item.title && item.title}</span> <span className='bar'></span>
            </h3>
        

        <div className='part-of-speech_meanings'>
            <h5 className='part-of-speech_meanings_title'>Meaning</h5>

            <ul className='part-of-speech_meaning_list'>
                
                {item.content.definitions.map((def,index)=>{
                    return(
                        <li key={index}>
                            {def.definition}

                            {def.example ? (
                                <span className='meaning_help'>{def.example}</span>
                            ) : (
                                ''
                            )}
                        </li>
                    )
                })}
            </ul>
        </div>

{item.content.synonyms.length = 0 && 
    <div className='part-of-speech_synonyms'>
            <h5 className='part-of-speech_synonyms_title'>
                Synonyms
            </h5>

            <div className='part-of-speech_synonyms-content'>
                {/* bravery, nerve, honey, sug */}
                {item.content.synonyms.join(', ')}
            </div>
        </div>}
        
    </div>
    </article>
  )
}

export default index


/* <li>A muscular organ that pumps blood through the body, traditionally thought to be the seat of emotion.</li>
                <li>Emotions, kindness, moral effort, or spirit in general.
                    <span className='meaning_help'>
                        "The team lost, but they showed a lot of heart."
                    </span>
                </li>
                <li>The seat of the affections or sensibilities, collectively or separately, as love, hate, joy, grief, courage, etc.; rarely, the seat of the understanding or will; usually in a good sense; personality.
                    <span className='meaning_help'>
                        "a good, tender, loving, bad, hard, or selfish heart"
                    </span>    
                </li>
                <li>Courage; courageous purpose; spirit.</li>
                <li>Vigorous and efficient activity; power of fertile production; condition of the soil, whether good or bad.</li>
                <li>A term of affectionate or kindly and familiar address.
                    <span className='meaning_help'>
                        "Listen, dear heart, we must go now."
                    </span>
                </li> */