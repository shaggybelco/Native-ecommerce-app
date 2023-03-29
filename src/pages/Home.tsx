import React, { useContext, useEffect, useState } from 'react';
import {
    IonButton,
    IonButtons,
    IonChip,
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
import './Home.scss'
import { MyContext } from '../context/data.context';

const Home: React.FC = () => {
    const { electronics, jewelery, man, woman } = useContext(MyContext)

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
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Electronics</h2>
                        <IonChip className='flex'>See more</IonChip>
                    </div>
                    <Carousel products={electronics} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Jewelery</h2>
                        <IonChip className='flex'>See more</IonChip>
                    </div>
                    <Carousel products={jewelery} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Men's clothing</h2>
                        <IonChip className='flex'>See more</IonChip>
                    </div>
                    <Carousel products={man} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Women's clothing</h2>
                        <IonChip className='flex'>See more</IonChip>
                    </div>
                    <Carousel products={woman} />
                </IonContent>
            </IonPage>
        </>
    );
}

export default Home