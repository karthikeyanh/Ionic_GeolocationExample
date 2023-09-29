import { Geolocation } from '@capacitor/geolocation';
import { IonButton, IonCard, IonCardContent, IonItem, IonLoading, IonToast } from '@ionic/react';
import React, { useState } from 'react';

//interface LocationError {
  //  showError: boolean;
    //message?: string;
    //latitude: number;
//longitude: number;
//}

const GeolocationButton: React.FC = () => {
   // const [loading, setLoading] = useState<boolean>(false);
 //  const [error, setError] = useState<LocationError>({ showError: false });
    const [position, setPosition] = useState<Geolocation>();
    

    const getLocation = async () => {
       // setLoading(true);
        const coordinates = await Geolocation.getCurrentPosition();
       const latitude=coordinates.coords.latitude;
        ///const longitude=coordinates.coords.longitude;

  console.log('Current position:', coordinates);
  console.log(coordinates.coords.latitude);
  console.log(coordinates.coords.longitude);
 
     

    }

    return (
        <>
          
            <IonButton color="primary" onClick={getLocation}>GeoLocation</IonButton>
           
        </>
    );
};




export default GeolocationButton;