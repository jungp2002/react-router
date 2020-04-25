import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

function Detail({ match }) {


  useEffect(() => {
    // console.log(match);
    console.log(match.params.id);
  }, []);

  const [items, setItems] = useState([]);


  return (
    <div >
      <div>
        <h1>Item: {match.params.id}</h1>
      </div>
    </div>
  );
}

export default Detail;
