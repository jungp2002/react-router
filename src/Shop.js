import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

function Shop() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  /**
   * Make a backend call
   */
  const fetchItems = async () => {

    const data = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const item = await data.json();

    /**
     * Since Item has only one data, don't use it
     */
    const temp = [];
    temp.push({id: 1, userId: 'First user id'});
    temp.push({id: 2, userId: 'Second user id'});
    setItems(temp);

  }

  return (
    <div >
      <div>
        {
          items.map( item => (
            <h1 key={item.id}>
              <Link to={`/shop/${item.id}`}>{item.userId}</Link>
            </h1>
          ))
        }
      </div>
    </div>
  );
}

export default Shop;
