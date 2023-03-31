import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonIcon, IonButton, IonText } from '@ionic/react'
import { lockClosedOutline, personOutline } from 'ionicons/icons'
import React, { useContext } from 'react'
import { LoginUser } from '../services/auth';
import { useHistory } from 'react-router';
import { AuthContext } from '../context/auth.context';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false);

    const route = useHistory();

    let { user, signIn } = useContext(AuthContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setError('')
        setLoading(true)


        await signIn({ identifier: email, password: password });

        console.log(user);
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

                    <IonButton className='mt-1 mb-1' expand='block' onClick={handleSubmit}>
                        Login
                    </IonButton>

                    <IonText>Don't have an account? <a onClick={() => { route.push('/register') }}>register.</a> </IonText>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Login