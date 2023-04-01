import { IonContent, IonGrid, IonHeader, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { useContext } from 'react';
import Menu from '../components/Menu';
import ProductCard from '../components/productCard';
import Toolbar from '../components/Toolbar';
import { MyContext } from '../context/data.context';

const Jewelery: React.FC = () => {
  const { jewelery } = useContext(MyContext);
  return (
    <>
      <Menu />
      <IonPage id='main-content'>
        <Toolbar text={'Jewelery'} />
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Tab 2</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonGrid className='mb-1'>
            <IonRow>
              {jewelery.map((product, index) => {
                return <ProductCard key={index} product={product} />
              })
              }
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </>
  );
};

export default Jewelery;
