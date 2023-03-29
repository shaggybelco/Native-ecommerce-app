import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon, IonInput, IonButton } from '@ionic/react'
import { personOutline, lockClosedOutline, atOutline, mailOutline, homeOutline, businessOutline, trailSignOutline, pinOutline } from 'ionicons/icons'
import React from 'react'
import { RegisterUser } from '../services/auth'

const Register: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false);


    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError('')
        setLoading(true)

        const user = await RegisterUser({ username: email, password: password });

        console.log(user)
    }

    return (
        <div className='flex h-full w-full justify-center align-center'>
            <IonCard>
                <IonCardHeader>
                    <IonCardTitle>Register</IonCardTitle>
                </IonCardHeader>

                <IonCardContent>
                    <IonItem>
                        <IonIcon slot='start' icon={mailOutline} />
                        <IonInput placeholder="Email" type='email' value={email} onIonChange={(e: any) => setEmail(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={lockClosedOutline} />
                        <IonInput placeholder="Password" type='password' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={personOutline} />
                        <IonInput placeholder="Firstname" type='text' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={personOutline} />
                        <IonInput placeholder="Lastname" type='text' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={trailSignOutline} />
                        <IonInput placeholder="Street name/number" type='text' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={businessOutline} />
                        <IonInput placeholder="City/Town" type='text' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={homeOutline} />
                        <IonInput placeholder="Province/State" type='text' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={pinOutline} />
                        <IonInput placeholder="Postal code" type='number' value={password} onIonChange={(e: any) => setPassword(e.target.value)}></IonInput>
                    </IonItem>

                    <IonButton className='mt-1' expand='block'>
                        Register
                    </IonButton>

                    <h1 style={{ textAlign: 'center' }}>OR</h1>

                    <IonButton className='mt-1 mb-1' expand='block' onClick={(e: any) => handleSubmit(e)}>
                        Login
                    </IonButton>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Register