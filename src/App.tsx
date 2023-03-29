import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { diamondOutline, homeOutline, manOutline, tvOutline, womanOutline } from 'ionicons/icons';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import Man from './pages/Man';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './global/global.scss'
import './theme/variables.css';
import Home from './pages/Home';
import { MyContext } from './context/data.context';
import { useState, useEffect } from 'react';
import { IProduct } from './Interface/IProduct';
import { getProducts } from './services/Products';
import Woman from './pages/Woman';

setupIonicReact();

const App: React.FC = () => {
  const [electronics, setElectronics] = useState<IProduct[]>([]);
  const [jewelery, setJewelery] = useState<IProduct[]>([]);
  const [man, setMan] = useState<IProduct[]>([]);
  const [woman, setWoman] = useState<IProduct[]>([]);

  useEffect(() => {
      getProducts('electronics').then((products) => {
          console.log(products);
          setElectronics(products);
      });

      getProducts('jewelery').then((products) => {
          console.log(products);
          setJewelery(products);
      });

      getProducts("men's clothing").then((products) => {
          console.log(products);
          setMan(products);
      });

      getProducts("women's clothing").then((products) => {
          console.log(products);
          setWoman(products);
      });
  }, []);
  return (
    <IonApp>
      <MyContext.Provider value={{electronics, jewelery, man, woman, setElectronics, setJewelery, setMan, setWoman}}>
      <IonReactRouter>
        <IonTabs>
            <IonRouterOutlet>
              <Route exact path="/electronics">
                <Electronics />
              </Route>
              <Route exact path="/jewelery">
                <Jewelery />
              </Route>
              <Route path="/man">
                <Man />
              </Route>
              <Route path="/woman">
                <Woman />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route exact path="/">
                <Redirect to="/home" />
              </Route>
            </IonRouterOutlet>
          
          <IonTabBar slot="bottom">
            <IonTabButton tab="Home" href="/home">
              <IonIcon aria-hidden="true" icon={homeOutline} />
              <IonLabel>Home</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Electronics" href="/electronics">
              <IonIcon aria-hidden="true" icon={tvOutline} />
              <IonLabel>Electronics</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Jewelery" href="/jewelery">
              <IonIcon aria-hidden="true" icon={diamondOutline} />
              <IonLabel>Jewelery</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Man" href="/man">
              <IonIcon aria-hidden="true" icon={manOutline} />
              <IonLabel>Men's</IonLabel>
            </IonTabButton>
            <IonTabButton tab="Woman" href="/woman">
              <IonIcon aria-hidden="true" icon={womanOutline} />
              <IonLabel>Women's</IonLabel>
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
      </MyContext.Provider>
    </IonApp>
  );
}

export default App;
