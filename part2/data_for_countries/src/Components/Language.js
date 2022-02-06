import React from 'react';
const Language =(props) => {
  const languages = Object.values(props.languages);
  return(
    <div>
      <h3>Languages</h3>
      <ul>
        {languages.map(language => <li key={language}> {language}</li>)}
      </ul>
    </div>
  )
}

export default Language;
