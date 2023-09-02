import { Geolocation } from '@capacitor/geolocation';
import { IonButton, IonLoading, IonToast } from '@ionic/react';
import React, { useState } from 'react';

interface LocationError {
    showError: boolean;
    message?: string;
}

const GeolocationButton: React.FC = () => {
   // const [loading, setLoading] = useState<boolean>(false);
  //  const [error, setError] = useState<LocationError>({ showError: false });
    //const [position, setPosition] = useState<Geoposition>();
    

    const getLocation = async () => {
     //   setLoading(true);
         const coordinates = await Geolocation.getCurrentPosition();

  console.log('Current position:', coordinates);
  console.log(coordinates.coords.latitude);
  console.log(coordinates.coords.longitude);
 
  console.log()
    }

    return (
        <>
          
            <IonButton color="primary" onClick={getLocation}>GeoLocation</IonButton>
        </>
    );
};

export default GeolocationButton;