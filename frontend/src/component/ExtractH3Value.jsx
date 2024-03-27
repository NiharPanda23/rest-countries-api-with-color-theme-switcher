import { useState, useEffect } from 'react';

const ExtractH3Value = () => {
  const [h3Value, setH3Value] = useState('');

  useEffect(() => {
    const h3Element = document.querySelector('h3');
    setH3Value(h3Element.textContent);
  }, []);

  console.log(h3Value);

  return (
    <div>
      <h1>The value of the h3 element is: {h3Value}</h1>
    </div>
  );
};

export default ExtractH3Value;