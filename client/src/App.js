
import './App.css';
import { Route } from 'react-router-dom';
import Layout from './layouts/Layout';
import Homepage from './screens/Homepage/Homepage'
import PlantDetailPage from './screens/PlantDetail/PlantDetailPage';


function App() {
  return (
    <div className="App">
      <Layout>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/plants" component={PlantDetailPage} />
      </Layout>
    </div>
  );
}

export default App;
