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
import { diamondOutline, fileTrayFullOutline, homeOutline, manOutline, personOutline, tvOutline, womanOutline } from 'ionicons/icons';
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
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/cart';
import { useSelector } from 'react-redux';
import Profile from './pages/profile';
import { AuthState } from './Interface/authState';
import Category from './components/categories';
import { RootState } from './Interface/rootState';
import { CartProvider } from './context/addToCart.context';

setupIonicReact();

const App: React.FC = () => {
  const [electronics, setElectronics] = useState<IProduct[]>([]);
  const [jewelery, setJewelery] = useState<IProduct[]>([]);
  const [man, setMan] = useState<IProduct[]>([]);
  const [woman, setWoman] = useState<IProduct[]>([]);

  const {isAuthenticated } = useSelector((state: RootState) => state.auth);

  
  useEffect(() => {
    getProducts('electronics').then((products) => {
      setElectronics(products);
    });

    getProducts('jewelery').then((products) => {
      setJewelery(products);
    });

    getProducts("men's clothing").then((products) => {
      setMan(products);
    });

    getProducts("women's clothing").then((products) => {
      setWoman(products);
    });

  }, []);


  return (
    <IonApp>
      <MyContext.Provider value={{ electronics, jewelery, man, woman, setElectronics, setJewelery, setMan, setWoman }}>
        <CartProvider>
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
                <Route exact path="/login">
                  <Login />
                </Route>
                <Route exact path="/register">
                  <Register />
                </Route>

                <Route exact path="/category">
                  <Category />
                </Route>

                <Route
                  exact path="/profile"
                  render={() =>
                    isAuthenticated ? <Profile /> : <Login />
                  }
                />

                <Route
                  exact path="/cart"
                  render={() =>
                    <Cart />
                  }
                />
              </IonRouterOutlet>

              <IonTabBar slot="bottom">
                <IonTabButton tab="Home" href="/home">
                  <IonIcon aria-hidden="true" icon={homeOutline} />
                  <IonLabel>Home</IonLabel>
                </IonTabButton>
                <IonTabButton tab='Category' href='/category'>
                  <IonIcon icon={fileTrayFullOutline} />
                  <IonLabel>Category</IonLabel>
                </IonTabButton>
                <IonTabButton tab='Profile' href='/profile'>
                  <IonIcon icon={personOutline} />
                  <IonLabel>Profile</IonLabel>
                </IonTabButton>
              </IonTabBar>
            </IonTabs>
          </IonReactRouter>
        </CartProvider>
      </MyContext.Provider>
    </IonApp>
  );
}

export default App;
