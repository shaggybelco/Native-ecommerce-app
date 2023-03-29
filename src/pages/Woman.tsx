import { IonPage, IonContent } from '@ionic/react'
import React from 'react'
import Menu from '../components/Menu'
import Toolbar from '../components/Toolbar'

const Woman: React.FC = () => {
    return (
        <div>
            <>
                <Menu />
                <IonPage id='main-content'>
                    <Toolbar text={"Women's clothing"} />
                    <IonContent fullscreen>

                    </IonContent>
                </IonPage>
            </>
        </div>
    )
}

export default Woman