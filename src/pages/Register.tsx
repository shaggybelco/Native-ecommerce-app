import { IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonItem, IonIcon, IonInput, IonButton, IonText } from '@ionic/react'
import { personOutline, lockClosedOutline, mailOutline, homeOutline, businessOutline, trailSignOutline, pinOutline } from 'ionicons/icons'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/auth.context';

const Register: React.FC = () => {
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [firstname, setFirstname] = React.useState('');
    const [lastname, setLastname] = React.useState('');
    const [street, setStreet] = React.useState('');
    const [city, setCity] = React.useState('');
    const [state, setState] = React.useState('');
    const [zip, setZip] = React.useState('');

    const {signUp} = useContext(AuthContext);

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const userData = {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname,
            street: street,
            city: city,
            state: state,
            zip: zip
        }

        const user = await signUp(userData);

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
                        <IonInput placeholder="Firstname" type='text' value={firstname} onIonChange={(e: any) => setFirstname(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={personOutline} />
                        <IonInput placeholder="Lastname" type='text' value={lastname} onIonChange={(e: any) => setLastname(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={trailSignOutline} />
                        <IonInput placeholder="Street name/number" type='text' value={street} onIonChange={(e: any) => setStreet(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={businessOutline} />
                        <IonInput placeholder="City/Town" type='text' value={city} onIonChange={(e: any) => setCity(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={homeOutline} />
                        <IonInput placeholder="Province/State" type='text' value={state} onIonChange={(e: any) => setState(e.target.value)}></IonInput>
                    </IonItem>

                    <IonItem>
                        <IonIcon slot='start' icon={pinOutline} />
                        <IonInput placeholder="Postal code" type='number' value={zip} onIonChange={(e: any) => setZip(e.target.value)}></IonInput>
                    </IonItem>

                    <IonButton className='mt-1 mb-1' expand='block' onClick={handleSubmit}>
                        Register
                    </IonButton>

                    <IonText>Have an account? <Link to={'/login'}>login.</Link> </IonText>

                </IonCardContent>
            </IonCard>
        </div>
    )
}

export default Register