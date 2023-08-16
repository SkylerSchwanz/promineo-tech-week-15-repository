import { HouseProvider } from './components/HouseProvider';
import { CreateHouse } from './components/CreateHouse';
import { HouseList } from './components/HouseList';
import styles from './styles/App.module.css';

const vegas = require('./las-vegas.jpg')

function App() {
  return (
    <div className="App">
      <div className={styles.logo}>
        <h1>
          <span>SKY</span> REALTY
        </h1>
      </div>
      <div className={styles.vegas}>
        <img src={vegas} />
        <h2>Craft Your Ideal Home - Create, Update and Personalize Las Vegas Properties at Your Fingertips</h2>
      </div>
      <HouseProvider>
        <CreateHouse />
        <HouseList />
      </HouseProvider>
    </div>
  );
}

export default App;