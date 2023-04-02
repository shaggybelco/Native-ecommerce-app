import { IonPage, IonContent, IonItem, IonLabel, IonThumbnail, IonList, IonButtons, IonIcon, IonButton, IonCard, IonCardHeader, IonCardTitle, IonSelect, IonSelectOption } from '@ionic/react';
import { trashBinOutline } from 'ionicons/icons';
import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { addedBySelection, removeFromCart } from '../actions/action';
import Menu from '../components/Menu';
import Toolbar from '../components/Toolbar';
import { IProduct } from '../Interface/IProduct';
import { RootState } from '../Interface/rootState';
import './cart.scss'

const Cart: React.FC = () => {
    const { items } = useSelector((state: RootState) => state.cart);

    const dispatch = useDispatch();

    const removeItem = (item: IProduct) => {
        dispatch(removeFromCart(item))
    }

    const addByQuantity = (item: IProduct, quantity: number, price: string) => {
        console.log(quantity);

        dispatch(addedBySelection(item, price, quantity));

    }

    console.log(items);

    return (
        <>
            <Menu />
            <IonPage id='main-content'>
                <Toolbar text={'Cart'} />
                <IonContent fullscreen className='ion-padding'>
                    {items.length !== 0 ?
                        <div>
                            {items.map((item: IProduct) => (
                                <div className='cart_item'>
                                    <div className='cart_img_holder'>
                                        <img className='cart_img' src={item.image} alt={item.title} />
                                    </div>
                                    <div className='cart_content'>
                                        <h5>{item.title}</h5>
                                        <select onChange={(e) => { addByQuantity(item, parseInt(e.target.value), item.price) }} defaultChecked defaultValue={item.quantity} value={item.quantity}>
                                            <option disabled>Quantity</option>
                                            <option value={1}>1</option>
                                            <option value={2}>2</option>
                                            <option value={3}>3</option>
                                            <option value={4}>4</option>
                                            <option value={5}>5</option>
                                        </select>
                                        <IonButton onClick={() => removeItem(item)}>
                                            <IonIcon icon={trashBinOutline} />
                                        </IonButton>

                                        <p>R {(parseFloat(item?.addedPrice?.toString()!) * parseFloat('18.13')).toFixed(2)}</p>
                                    </div>
                                </div>
                            ))}
                        </div> :
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>
                                    Nothing yet shop more
                                </IonCardTitle>
                            </IonCardHeader>
                        </IonCard>
                    }
                </IonContent>
            </IonPage>
        </>
    )
}

export default Cart