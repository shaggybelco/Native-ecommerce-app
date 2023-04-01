import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonInput, IonItem, IonIcon, IonButton, IonText } from '@ionic/react'
import { lockClosedOutline, personOutline } from 'ionicons/icons'
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth.context';
import { useSelector } from 'react-redux';
import { AuthState } from '../Interface/authState';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')

    let { signIn } = useContext(AuthContext);
    const {isAuthenticated } = useSelector<AuthState, AuthState>((state) => state);

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        await signIn({ identifier: email, password: password });
    }

    useEffect(()=>{
        if(isAuthenticated){
            window.location.replace('/cart')
        }
    
        console.log(isAuthenticated);
      },[isAuthenticated])

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

                    <IonText>Don't have an account? <Link to={'/register'}>register.</Link> </IonText>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Login