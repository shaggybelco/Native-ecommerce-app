import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import { cartOutline, logOutOutline, personOutline } from 'ionicons/icons'
import React, { useContext } from 'react';
import { AuthContext } from '../context/auth.context';

interface Title{
    text: string;
}
const Toolbar: React.FC<Title> = ({text})=> {
    const {signOut} = useContext(AuthContext)

    return (
        <div> 
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton href='/cart'>
                            <IonIcon icon={cartOutline} />
                        </IonButton>
                        <IonButton  href='/profile'>
                            <IonIcon icon={personOutline} />
                        </IonButton>
                        <IonButton onClick={signOut}>
                            <IonIcon icon={logOutOutline} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>{text}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </div>
    )
}

export default Toolbar