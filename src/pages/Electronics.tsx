import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useContext, useEffect, useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import Menu from '../components/Menu';
import ProductCard from '../components/productCard';
import Toolbar from '../components/Toolbar';
import { MyContext } from '../context/data.context';
import { IProduct } from '../Interface/IProduct';
import { getProducts } from '../services/Products';
import './Electronics.css';

const Electronics: React.FC = () => {
  const { electronics } = useContext(MyContext)

  return (
    <>
      <Menu />
      <IonPage id='main-content'>
        <Toolbar text={'Electronics'} />
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Electronics</IonTitle>
            </IonToolbar>
          </IonHeader>
          {electronics.map((product, index) => {
            return <ProductCard key={index} title={product.title} image={product.image} price={product.price} id={product.id} category={product.category} description={product.description} />
          })

          }
        </IonContent>
      </IonPage>
    </>
  );
};

export default Electronics;
