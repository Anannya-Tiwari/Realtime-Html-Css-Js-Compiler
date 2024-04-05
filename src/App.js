


import Home from './components/home';
import DataProvider from './context/dataprovider';
function App() {
  return (
   <DataProvider>
    < Home/>
    </DataProvider>

  );
}

export default App;
