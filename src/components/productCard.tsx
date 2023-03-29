import React from 'react';
import { IonButton, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonIcon } from '@ionic/react';
import { IProduct } from '../Interface/IProduct';
import { bagAddOutline } from 'ionicons/icons';

const ProductCard: React.FC<IProduct> = ({ title, image, price }) => {
    return (
        <>
            <IonCol size="12" sizeXs='12' sizeSm='12' size-md="4" size-lg="4">

                <IonCard className='h-full relative'>
                    <div className='flex justify-center'>
                        <img alt={title} src={image} width={'auto'} height={'200px'} />
                    </div>
                    <IonButton fill='clear' style={{ position: 'absolute', bottom: 0, right: 0, transform: 'translateY(-50%)', zIndex: 1 }}>
                        <IonIcon icon={bagAddOutline} />
                    </IonButton>
                    <IonCardHeader>
                        <IonCardTitle>{title}</IonCardTitle>
                        <IonCardSubtitle>R {(parseFloat(price) * parseFloat('18.13')).toFixed(2)}</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>
            </IonCol>
        </>
    );
}
export default ProductCard;