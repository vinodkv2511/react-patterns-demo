import React from 'react';
import Item from '../item/item';

const List = (props) => {
    return (
        <div style={styles.list}>
            {renderItems(props.items)}
        </div>
    )
}

const renderItems = (itemList) => {
    return itemList.map( (item) => {
        return <Item key={`task-${item.id}`} task={item}/>
    })
}

const styles = {
    list: {
        height: 'calc(100vh - 80px)',
        overflowY: 'auto',
        width: '500px',
    }
}

export default List;