import { IonMenu, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react'

function Menu() {
    return (
        <div>
            <IonMenu contentId="main-content">
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Menu Content</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent className="ion-padding">This is the menu content.</IonContent>
            </IonMenu>
        </div>
    )
}

export default Menu