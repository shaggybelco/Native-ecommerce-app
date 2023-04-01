import React from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonIcon } from '@ionic/react';
import { IProduct } from '../Interface/IProduct';
import { bagAddOutline } from 'ionicons/icons';
import { useDispatch } from 'react-redux';
import { addToCart } from '../actions/action';

interface product {
    product: IProduct;
}
const ProductCard: React.FC<product> = ({ product }) => {

    const dispatch = useDispatch();

    function handleAddToCart(item: IProduct) {
        dispatch(addToCart(item));
        console.log('Added')
    }
    return (
        <>
            <IonCol size="12" sizeXs='12' sizeSm='12' size-md="4" size-lg="4">

                <IonCard className='h-full relative'>
                    <div className='flex justify-center'>
                        <img alt={product?.title} src={product?.image} width={'auto'} height={'200px'} />
                    </div>
                    <IonButton onClick={()=>handleAddToCart(product)} fill='clear' style={{ position: 'absolute', bottom: 0, right: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
                        <IonIcon icon={bagAddOutline} />
                    </IonButton>
                    <IonCardHeader>
                        <IonCardTitle>{product?.title}</IonCardTitle>
                        <IonCardSubtitle>R {(parseFloat(product?.price) * parseFloat('18.13')).toFixed(2)}</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            </IonCol>
        </>
    );
}
export default ProductCard;