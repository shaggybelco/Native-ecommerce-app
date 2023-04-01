import { IonContent, IonIcon, IonItem, IonLabel, IonList, IonPage } from "@ionic/react";
import { diamondOutline, manOutline, tvOutline, womanOutline } from "ionicons/icons";
import React from "react";
import { useHistory } from "react-router";
import Menu from "./Menu";
import Toolbar from "./Toolbar";

const Category: React.FC = () => {
    const router = useHistory();
    return (
        <>
            <Menu />
            <IonPage id='main-content'>
                <Toolbar text={'Categories'} />
                <IonContent>
                    <IonList>
                        <IonItem lines="none" button onClick={()=>router.replace('/electronics')}>
                            <IonIcon icon={tvOutline} slot="start"></IonIcon>
                            <IonLabel>
                                Electronics
                            </IonLabel>
                        </IonItem>

                        <IonItem lines="none" button onClick={()=>router.replace('/jewelery')}>
                            <IonIcon icon={diamondOutline} slot="start"></IonIcon>
                            <IonLabel>
                                Jewelery
                            </IonLabel>
                        </IonItem>

                        <IonItem lines="none" button onClick={()=>router.replace('/man')}>
                            <IonIcon icon={manOutline} slot="start"></IonIcon>
                            <IonLabel>
                                Men's clothing
                            </IonLabel>
                        </IonItem>
                        <IonItem lines="none" button onClick={()=>router.replace('/woman')}>
                            <IonIcon icon={womanOutline} slot="start"></IonIcon>
                            <IonLabel>
                                Women's clothing
                            </IonLabel>
                        </IonItem>
                    </IonList>
                </IonContent>
            </IonPage>
        </>
    )
}

export default Category;