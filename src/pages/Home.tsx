import React, { useContext } from 'react';
import {
    IonChip,
    IonContent,
    IonPage} from '@ionic/react';
import Carousel from '../components/Carousel';
import './Home.scss'
import { MyContext } from '../context/data.context';
import Toolbar from '../components/Toolbar';
import Menu from '../components/Menu';
import {useHistory} from 'react-router-dom';

const Home: React.FC = () => {
    const { electronics, jewelery, man, woman } = useContext(MyContext)
    const navigation = useHistory();

    return (
        <>
            <Menu />
            <IonPage id='main-content'>
                <Toolbar text={'Home'} />
                <IonContent className="ion-padding">
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Electronics</h2>
                        <IonChip className='flex' onClick={()=> navigation.push('/electronics')}>See more</IonChip>
                    </div>
                    <Carousel products={electronics} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Jewelery</h2>
                        <IonChip className='flex'  onClick={()=> navigation.push('/jewelery')}>See more</IonChip>
                    </div>
                    <Carousel products={jewelery} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Men's clothing</h2>
                        <IonChip className='flex'  onClick={()=> navigation.push('/man')}>See more</IonChip>
                    </div>
                    <Carousel products={man} />
                    <div className='flex flex-row align-center space-between mb-1'>
                        <h2>Women's clothing</h2>
                        <IonChip className='flex'  onClick={()=> navigation.push('/woman')}>See more</IonChip>
                    </div>
                    <Carousel products={woman} />
                </IonContent>
            </IonPage>
        </>
    );
}

export default Home