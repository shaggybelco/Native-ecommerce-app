import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Electronics.css';

const Electronics: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Electronics</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Electronics</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Electronics page" />
      </IonContent>
    </IonPage>
  );
};

export default Electronics;
