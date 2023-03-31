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
import Login from './pages/Login';
import Register from './pages/Register';
import { AuthContext } from './context/auth.context';
import Cart from './pages/cart';
import { LoginUser } from './services/auth';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout } from './services/auth.redux';
import { RootState } from './store/store';
import Profile from './pages/profile';

setupIonicReact();

const App: React.FC = () => {
  const [electronics, setElectronics] = useState<IProduct[]>([]);
  const [jewelery, setJewelery] = useState<IProduct[]>([]);
  const [man, setMan] = useState<IProduct[]>([]);
  const [woman, setWoman] = useState<IProduct[]>([]);

  const [user, setUser] = useState<any | null>(null);

  const dispatch = useDispatch();
  const signIn = async (data: any) => {


    const userLogin = await LoginUser({ identifier: data.identifier, password: data.password });

    dispatch(login(userLogin.data.token));
    setUser(userLogin.data);
    console.log(userLogin.data);
  };

  const signOut = async () => {
    dispatch(logout());
  };

  const isAuthenticated = useSelector(
    (state: RootState) => state.isAuthenticated
  );

  console.log(isAuthenticated);





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

    if (localStorage.getItem('user')) {
      const userL = localStorage.getItem('user');
      setUser(JSON.parse(userL!));
    }



  }, []);


  return (
    <IonApp>
      <MyContext.Provider value={{ electronics, jewelery, man, woman, setElectronics, setJewelery, setMan, setWoman }}>
        <AuthContext.Provider value={{ user, signIn, signOut }}>

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

                {
                  isAuthenticated ?
                    <Route exact path='/profile'>
                      <Profile />
                    </Route>
                    : <Route><Redirect to={'/login'} /></Route>
                }

                {
                  isAuthenticated ?
                    <Route exact path='/cart'>
                      <Cart />
                    </Route>
                    : <Route><Redirect to={'/login'} /></Route>
                }




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
        </AuthContext.Provider>
      </MyContext.Provider>
    </IonApp>
  );
}

export default App;
