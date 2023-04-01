import React, { useContext } from 'react';
import {
    IonChip,
    IonContent,
    IonPage
} from '@ionic/react';
import Carousel from '../components/Carousel';
import { MyContext } from '../context/data.context';
import Toolbar from '../components/Toolbar';
import Menu from '../components/Menu';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../Interface/rootState';

const Home: React.FC = () => {
    const { electronics, jewelery, man, woman } = useContext(MyContext)
    const navigation = useHistory();

    const {isAuthenticated, user } = useSelector((state: RootState) => state.auth);

    return (
        <>
            <Menu />
            <IonPage id='main-content'>
                <Toolbar text={'Home'} />
                <IonContent className="ion-padding" fullscreen>
                    {isAuthenticated ? <><h5>Hello {user?.firstname}😊!</h5> <hr style={{ backgroundColor: '#3880ff' }} /></> : ''}

                    <div className='flex flex-row align-center space-between mb-1'>
                        <h5>Electronics</h5>
                        <IonChip className='flex' onClick={() => navigation.push('/electronics')}>See more</IonChip>
                    </div>
                    <Carousel products={electronics} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h5>Jewelery</h5>
                        <IonChip className='flex' onClick={() => navigation.push('/jewelery')}>See more</IonChip>
                    </div>
                    <Carousel products={jewelery} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h5>Men's clothing</h5>
                        <IonChip className='flex' onClick={() => navigation.push('/man')}>See more</IonChip>
                    </div>
                    <Carousel products={man} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h5>Women's clothing</h5>
                        <IonChip className='flex' onClick={() => navigation.push('/woman')}>See more</IonChip>
                    </div>
                    <Carousel products={woman} />
                </IonContent>
            </IonPage>
        </>
    );
}

export default Home