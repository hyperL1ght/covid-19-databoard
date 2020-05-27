import React from 'react';
import { ButtonGroup, Button } from '@material-ui/core';

import styles from './Buttons.module.css';

const Buttons = ({handleScaleChange}) => {
    return (
        <div className={styles.container}>
            <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                <Button value="linear" onClick={(e) => handleScaleChange(e.currentTarget.value)}>Linear</Button>
                <Button value="logarithmic" onClick={(e) => handleScaleChange(e.currentTarget.value)}>Logarithmic</Button>
            </ButtonGroup>
        </div>
    );
}

export default Buttons;