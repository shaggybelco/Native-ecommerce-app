import { IonPage, IonContent, IonGrid, IonRow } from '@ionic/react'
import React, { useContext } from 'react'
import Menu from '../components/Menu'
import ProductCard from '../components/productCard'
import Toolbar from '../components/Toolbar'
import { MyContext } from '../context/data.context'

const Woman: React.FC = () => {
    const { woman } = useContext(MyContext)
    return (
        <div>
            <>
                <Menu />
                <IonPage id='main-content'>
                    <Toolbar text={"Women's clothing"} />
                    <IonContent fullscreen>
                        <IonGrid className='mb-1'>
                            <IonRow>
                                {woman.map((product, index) => {
                                    return <ProductCard key={index} product={product} />
                                })
                                }
                            </IonRow>
                        </IonGrid>
                    </IonContent>
                </IonPage>
            </>
        </div>
    )
}

export default Woman