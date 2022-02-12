import React, {useCallback, useRef} from 'react';
import {GoogleMap, Marker} from '@react-google-maps/api';
import {mapTheme} from "./googleMapTheme";
import "./MapAddress.scss"

const containerStyle = {
    width: '100%',
    height: '100%'
};
const defaultOtions = {
    panControl: false,
    mapTypeControl: false,
    zoomControl: false,
    scaleControl: false,
    streetViewControl: false,
    rotateControl: true,
    clickableIcons: false,
    keyboardShortcuts: false,
    scrollwheel: true,
    disableDoubleClickZoom: false,
    fullscreenControl: false,
    styles: mapTheme
}

const GoogleFromMap = ({defaultCenter}) => {
    const mapRef = useRef(null);
    const onLoad = (map) => mapRef.current = map;
    const onUnmount = useCallback((map) => mapRef.current = null,[]);
    return (
        <div className={"map__container"}>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={defaultCenter}
                zoom={window.innerWidth >= 1024 ? 15.5 : 15}
                onLoad={onLoad}
                onUnmount={onUnmount}
                options={defaultOtions}
            >
                <>
                    <Marker
                        position={defaultCenter}
                        // label={"Princess Men’s Club"}
                        style={{color: "white"}}/>
                    </>
            </GoogleMap>
        </div>
    );
};

export default GoogleFromMap;
