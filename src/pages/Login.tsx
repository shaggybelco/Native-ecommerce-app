import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonIcon, IonButton } from '@ionic/react'
import { lockClosedOutline, personOutline } from 'ionicons/icons'
import React from 'react'
import { LoginUser } from '../services/auth';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const user = await LoginUser({username: email, password: password});

        console.log(user)
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
                        <IonInput placeholder="Username" type='email' value={email} onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={lockClosedOutline} />
                        <IonInput placeholder="Password" type='password' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonButton className='mt-1 mb-1' expand='block' onClick={(e: any) => handleSubmit(e)}>
                        Login
                    </IonButton>

                    <h1 style={{ textAlign: 'center' }}>OR</h1>

                    <IonButton className='mt-1' expand='block'>
                        Register
                    </IonButton>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Login