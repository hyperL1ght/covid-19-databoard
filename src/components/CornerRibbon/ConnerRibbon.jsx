import React from 'react';
import cx from 'classnames';

import styles from './ConnerRibbon.module.css';

const CornerRibbon = ({text, link}) => {
return (
        <div 
            className={cx(styles.cornerribbon, styles.topright, styles.sticky, styles.red)} 
            onClick={(e) => {
                e.preventDefault();
                window.open(`${link}`, '_blank');}
            }
        >
            {text}
        </div>);
}

export default CornerRibbon;