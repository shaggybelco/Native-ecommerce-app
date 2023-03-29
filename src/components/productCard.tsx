import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import { IProduct } from '../Interface/IProduct';

const ProductCard: React.FC<IProduct> = ({ title, image, price }) => {
    return (
        <>
            <IonCard>
                <div className='flex justify-center'>
                    <img alt={title} src={image} width={'auto'} height={'200px'} />
                </div>
                <IonCardHeader>
                    <IonCardTitle>{title}</IonCardTitle>
                    <IonCardSubtitle>R {price}</IonCardSubtitle>
                </IonCardHeader>
            </IonCard>
        </>
    );
}
export default ProductCard;