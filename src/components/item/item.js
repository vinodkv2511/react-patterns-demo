import React from 'react';


const Item = (props) => {
    return (
        <div style={styles.container}>
            <input type="checkbox" />
            <div style={styles.centerContent}>
                <p style={styles.title}> {props.task.title} </p>
                <p style={styles.asigneeName}>
                    <span style={styles.asigneeNameLabel}>asignee : </span> 
                    {props.task.asignee.name} 
                </p>
            </div>
            <div style={styles.buttonsContainer}>
                <button style={styles.cta}>&#x270E;</button>
                <div style={styles.spacer}></div>
                <button style={styles.cta}>&#x1F5D1;</button>
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
    centerContent: {
        padding: '0 5px',
    },
    title: {
        margin: 0,
        fontSize: '14px',
        paddingBottom: '5px',
        textOverflow: 'wrap',
    },
    asigneeName: {
        margin: 0,
        fontSize: '11px',
    },
    asigneeNameLabel: {
        color: 'grey',
        fontSize: '9px',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        marginLeft: 'auto',
    },
    cta: {
        border: '0px solid transparent',
        fontSize: '14px',
    },
    spacer: {
        height: '5px',
    }

}

export default Item;