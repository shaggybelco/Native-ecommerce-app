import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu';
import Toolbar from '../components/Toolbar';
import './Man.css';

const Man: React.FC = () => {
  return (
    <>
      <Menu />
      <IonPage id='main-content'>
        <Toolbar text={"Men's clothing"} />
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 3</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 3 page" />
        </IonContent>
      </IonPage>
    </>
  );
};

export default Man;
