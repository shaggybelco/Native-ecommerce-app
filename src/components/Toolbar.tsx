import { IonBadge, IonButton, IonButtons, IonHeader, IonIcon, IonMenuButton, IonTitle, IonToolbar } from '@ionic/react'
import { cartOutline, logOutOutline } from 'ionicons/icons'
import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logOut } from '../actions/action';
import { useCart } from '../context/addToCart.context';
import { RootState } from '../Interface/rootState';

interface Title {
    text: string;
}
const Toolbar: React.FC<Title> = ({ text }) => {
    const dispatch = useDispatch();

    function LogOut(): void {
        dispatch(logOut())
    }

    const { isAuthenticated } = useSelector((state: RootState) => state.auth);
    const { count } = useCart();

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
                            <IonBadge>{count}</IonBadge>
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