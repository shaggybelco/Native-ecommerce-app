import React, { useEffect, useState } from 'react';
import {
    IonButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonIcon,
    IonMenu,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar
} from '@ionic/react';
import { cartOutline, personOutline } from 'ionicons/icons';
import Carousel from '../components/Carousel';
import { getProducts } from '../services/Products';
import { IProduct } from '../Interface/IProduct';

const Home: React.FC = () => {
    const [products, setProducts] = useState<IProduct[]>([]);

  
  useEffect(() => {
    getProducts('electronics').then((products) => {
      console.log(products);
      setProducts(products);
    })
  }, []);
  
    return (
        <>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">This is the menu content.</IonContent>
            </IonMenu>
            <IonPage id="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton></IonMenuButton>
                        </IonButtons>
                        <IonButtons slot="end">
                            <IonButton>
                                <IonIcon icon={cartOutline} />
                            </IonButton>
                            <IonButton>
                                <IonIcon icon={personOutline} />
                            </IonButton>
                        </IonButtons>
                        <IonTitle>Home</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">
                    {/* <Carousel images={products} /> */}
                </IonContent>
            </IonPage>
        </>
    );
}

export default Home