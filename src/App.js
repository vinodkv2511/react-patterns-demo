import React from 'react';

import Item from './components/item/item';

function App() {
  return (
    <div className="container">
      <Item 
        task={{
          title: 'Do not forget to complete the task of creating tasks',
          author: {
            id: 1,
            name: 'Von Nueman'
          }
        }}
      />
    </div>
  );
}

export default App;
