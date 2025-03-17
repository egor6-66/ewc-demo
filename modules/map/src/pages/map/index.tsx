import React from 'react';
import { useModule } from '@packages/hooks';
import { Modules } from '@packages/types';
import GoogleMapReact from 'google-map-react';

import { Tools } from '@/widgets';

import styles from './styles.module.scss';

const MapPage = () => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.tools}>
                <Tools />
            </div>
            <div style={{ height: '100%', width: '100%' }} className={'wrapper-map'}>
                <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom} />
            </div>
        </div>
    );
};

export default MapPage;
