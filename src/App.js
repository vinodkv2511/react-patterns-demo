import React from 'react';

import List from './components/ItemList/itemList';

function App() {
  return (
    <div style={styles.container}>
      <List items={tempItems} />
    </div>
  );
}

const styles = {
  container: {
    width: '100vw',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
}

const tempItems = [
  {
    id: 1,
    title: 'Complete redux demo',
    author: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 2,
    title: 'Start creating demo',
    author: {
      id: 2,
      name: 'demo user'
    }
  },
  {
    id: 3,
    title: 'Make sure to check ids',
    author: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 4,
    title: 'Conquer the complexity with SOLID',
    author: {
      id: 1,
      name: 'vinod'
    }
  },

  {
    id: 5,
    title: 'Complete redux demo',
    author: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 6,
    title: 'Start creating demo',
    author: {
      id: 2,
      name: 'demo user'
    }
  },
  {
    id: 7,
    title: 'Make sure to check ids',
    author: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 8,
    title: 'Conquer the complexity with SOLID',
    author: {
      id: 1,
      name: 'vinod'
    }
  },

  {
    id: 9,
    title: 'Complete redux demo',
    author: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 10,
    title: 'Start creating demo',
    author: {
      id: 2,
      name: 'demo user'
    }
  },
  {
    id: 11,
    title: 'Make sure to check ids',
    author: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 12,
    title: 'Conquer the complexity with SOLID',
    author: {
      id: 1,
      name: 'vinod'
    }
  }
]

export default App;
