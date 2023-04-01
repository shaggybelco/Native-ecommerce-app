import { IonPage, IonContent } from '@ionic/react';
import React from 'react';
import Menu from '../components/Menu';
import Toolbar from '../components/Toolbar';

const Cart: React.FC = () => {

    return (
        <>
            <Menu />
            <IonPage id='main-content'>
                <Toolbar text={'Cart'} />
                <IonContent fullscreen>
                    <h1>Cart</h1>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Cart