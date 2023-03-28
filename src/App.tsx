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
import { diamondOutline, manOutline, tvOutline, womanOutline } from 'ionicons/icons';
import Electronics from './pages/Electronics';
import Jewelery from './pages/Jewelery';
import Man from './pages/Man';
import Woman from './pages/Woman';

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
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
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
          <Route exact path="/">
            <Redirect to="/electronics" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
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
            <IonLabel>Man</IonLabel>
          </IonTabButton>
          <IonTabButton tab="Woman" href="/woman">
            <IonIcon aria-hidden="true" icon={womanOutline} />
            <IonLabel>Woman</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
