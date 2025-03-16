import React, { useEffect } from 'react';
import { useModule } from '@packages/hooks';
import { Modules } from '@packages/types';
import GoogleMapReact from 'google-map-react';

import packageJson from '../../../package.json';

import styles from './styles.module.scss';
const AnyReactComponent = ({ text }: any) => <div>{text}</div>;

const MapPage = () => {
    const module = useModule(Modules.MAP);

    const handleToggleStandalone = (value: boolean) => {
        module.send({
            target: 'HOST',
            eventName: 'toggleStandalone',
            data: { standalone: value },
        });
    };

    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627,
        },
        zoom: 11,
    };

    const toggle = () => {
        const isStandalone = module.checkStandalone();
        handleToggleStandalone(!isStandalone);
        isStandalone ? module.windowEvents.close() : module.windowEvents.openNewWindow({ moduleUrl: `https://localhost/map`, delay: 250 });
    };

    useEffect(() => {
        console.log(module.checkStandalone());

        window.onunload = () => {
            handleToggleStandalone(false);
        };
    }, []);

    return (
        <div className={styles.wrapper}>
            <div style={{ height: '100%', width: '100%' }} className={'wrapper-map'}>
                <GoogleMapReact bootstrapURLKeys={{ key: '' }} defaultCenter={defaultProps.center} defaultZoom={defaultProps.zoom}>
                    <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
                </GoogleMapReact>
            </div>
        </div>
    );
};

export default MapPage;
