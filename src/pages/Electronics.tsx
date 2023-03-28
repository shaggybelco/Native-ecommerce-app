import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import { getProducts } from '../services/Products';
import './Electronics.css';

const Electronics: React.FC = () => {
  const [products, setProducts] = useState([]);

  
  useEffect(() => {
    getProducts('electronics').then((products) => {
      console.log(products);
    })
  }, []);

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
