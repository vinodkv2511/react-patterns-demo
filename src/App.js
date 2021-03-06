import React from 'react';

import List from './components/ItemList/itemList';

function App() {
  return (
    <div style={styles.container}>
      <h3>Awesome Task List</h3>
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
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 2,
    title: 'Start creating demo',
    asignee: {
      id: 2,
      name: 'demo user'
    }
  },
  {
    id: 3,
    title: 'Make sure to check ids',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 4,
    title: 'Conquer the complexity with SOLID',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },

  {
    id: 5,
    title: 'Complete redux demo',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 6,
    title: 'Start creating demo',
    asignee: {
      id: 2,
      name: 'demo user'
    }
  },
  {
    id: 7,
    title: 'Make sure to check ids',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 8,
    title: 'Conquer the complexity with SOLID',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },

  {
    id: 9,
    title: 'Complete redux demo',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 10,
    title: 'Start creating demo',
    asignee: {
      id: 2,
      name: 'demo user'
    }
  },
  {
    id: 11,
    title: 'Make sure to check ids',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  },
  {
    id: 12,
    title: 'Conquer the complexity with SOLID',
    asignee: {
      id: 1,
      name: 'vinod'
    }
  }
]

export default App;
