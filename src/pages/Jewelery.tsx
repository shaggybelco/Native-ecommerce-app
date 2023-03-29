import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu';
import Toolbar from '../components/Toolbar';
import './Jewelery.css';

const jewelery: React.FC = () => {
  return (
    <>
      <Menu />
      <IonPage id='main-content'>
        <Toolbar text={'Jewelery'} />
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <ExploreContainer name="Tab 2 page" />
        </IonContent>
      </IonPage>
    </>
  );
};

export default jewelery;
