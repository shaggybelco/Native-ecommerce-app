import { IonButton, IonButtons, IonContent, IonHeader, IonIcon, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react'
import { cartOutline, personOutline } from 'ionicons/icons'
import React from 'react'

interface Title{
    text: string;
}
const Toolbar: React.FC<Title> = ({text})=> {
    return (
        <div> 
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
                    <IonTitle>{text}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </div>
    )
}

export default Toolbar