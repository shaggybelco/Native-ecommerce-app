import { IonPage, IonContent } from '@ionic/react'
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
                        {woman.map((product, index) => {
                            return <ProductCard key={index} title={product.title} image={product.image} price={product.price} id={product.id} category={product.category} description={product.description} />
                        })
                        }
                    </IonContent>
                </IonPage>
            </>
        </div>
    )
}

export default Woman