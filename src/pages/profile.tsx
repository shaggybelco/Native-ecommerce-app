import { IonPage, IonContent } from "@ionic/react"
import React from "react"
import Menu from "../components/Menu"
import Toolbar from "../components/Toolbar"

const Profile: React.FC = () => {

    return (
        <>
            <Menu />
            <IonPage id='main-content'>
                <Toolbar text={'Profile'} />
                <IonContent fullscreen>
                    <h1>Profile</h1>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Profile