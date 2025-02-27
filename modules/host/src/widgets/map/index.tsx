import React, { useEffect, useState } from 'react';
// @ts-ignore
import MapModule from 'map/Map';

import styles from './styles.module.scss';

const Map = () => {
    return (
        <div className={styles.wrapper}>
            <MapModule />
        </div>
    );
};

export default Map;
