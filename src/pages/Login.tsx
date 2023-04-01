import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonIcon, IonButton, IonText } from '@ionic/react'
import { lockClosedOutline, personOutline } from 'ionicons/icons'
import React, {  } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth.action';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    const dispatch: ThunkDispatch<{}, {}, AnyAction> = useDispatch();

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const user = {
            email: email,
            password: password
        }

        dispatch(login(user));
    }

    return (
        <div className='flex h-full w-full justify-center align-center'>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Login</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonIcon slot='start' icon={personOutline} />
                        <IonInput required placeholder="Username" type='email' value={email} onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={lockClosedOutline} />
                        <IonInput required placeholder="Password" type='password' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonButton className='mt-1 mb-1' expand='block' onClick={handleSubmit}>
                        Login
                    </IonButton>

                    <IonText>Don't have an account? <Link to={'/register'}>register.</Link> </IonText>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Login