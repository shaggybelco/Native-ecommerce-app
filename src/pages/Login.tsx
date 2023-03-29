import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonInput, IonItem, IonLabel, IonIcon, IonButton } from '@ionic/react'
import { lockClosedOutline, personOutline } from 'ionicons/icons'
import React from 'react'

const Login: React.FC = () => {
    return (
        <div className='flex h-full w-full justify-center align-center'>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Login</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonIcon slot='start' icon={personOutline}/>
                        <IonInput placeholder="Username" type='text'></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={lockClosedOutline}/>
                        <IonInput placeholder="Password" type='password'></IonInput>
                    </IonItem>

                    <IonButton className='mt-1 mb-1' expand='block'>
                        Login
                    </IonButton>

                    <h1 style={{textAlign: 'center'}}>OR</h1>

                    <IonButton className='mt-1' expand='block'>
                        Register
                    </IonButton>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Login