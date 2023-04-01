import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import { cartOutline, logOutOutline, personOutline } from 'ionicons/icons'
import React from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/action';

interface Title{
    text: string;
}
const Toolbar: React.FC<Title> = ({text})=> {
    const dispatch = useDispatch();

    function LogOut(): void {
        dispatch(logOut())
    }
    return (
        <div> 
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton onClick={()=>window.location.replace('/cart')}>
                            <IonIcon icon={cartOutline} />
                        </IonButton>
                        <IonButton onClick={()=>window.location.replace('/profile')}>
                            <IonIcon icon={personOutline} />
                        </IonButton>
                        <IonButton onClick={()=>LogOut()}>
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