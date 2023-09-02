import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import GeolocationButton from '../components/GeolocationButton';

const Home: React.FC = () => {
  return (
    <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Geolocation</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">Geolocation</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className="container">
        <GeolocationButton/>
      </div>
    </IonContent>
  </IonPage>
  );
};

export default Home;
