import React from 'react';


const Item = (props) => {
    return (
        <div style={styles.container}>
            <input type="checkbox" style={styles.checkbox}/>
            <div style={styles.centerContent}>
                <p style={styles.title}> {props.task.title} </p>
                <p style={styles.authorName}>
                    <span style={styles.authorNameLabel}>author : </span> 
                    {props.task.author.name} 
                </p>
            </div>
        </div>
    )
}

const styles = {
    container: {
        display: 'flex',
        margin: '10px',
        boxShadow: "0px 1px 5px 0px grey",
        borderRadius: '5px',
        padding: '12px',
        maxWidth: '500px',
    },
    // checkbox: {
    //     padding: '15px',
    // },
    centerContent: {
        padding: '0 5px',
    },
    title: {
        margin: 0,
        fontSize: '14px',
        paddingBottom: '5px',
    },
    authorName: {
        margin: 0,
        fontSize: '11px',
    },
    authorNameLabel: {
        color: 'grey',
        fontSize: '9px',
    },
    buttonsContainer: {

    }
}

export default Item;