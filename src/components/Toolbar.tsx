import { IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import { cartOutline, logOutOutline, personOutline } from 'ionicons/icons'
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/action';
import { AuthState } from '../Interface/authState';

interface Title {
    text: string;
}
const Toolbar: React.FC<Title> = ({ text }) => {
    const dispatch = useDispatch();

    function LogOut(): void {
        dispatch(logOut())
    }

    const { isAuthenticated } = useSelector<AuthState, AuthState>(state => state);

    return (
        <div>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton></IonMenuButton>
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton onClick={() => window.location.replace('/cart')}>
                            <IonIcon icon={cartOutline} />
                        </IonButton>

                        {isAuthenticated ?
                            <IonButton onClick={() => LogOut()}>
                                <IonIcon icon={logOutOutline} />
                            </IonButton> : ''
                        }
                    </IonButtons>
                    <IonTitle>{text}</IonTitle>
                </IonToolbar>
            </IonHeader>
        </div>
    )
}

export default Toolbar