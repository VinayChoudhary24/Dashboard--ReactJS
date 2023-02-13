import Sidebar from './Components/Layout/Sidebar/Sidebar';
import { Fragment } from 'react';
import MainScreen from './Components/Screens/MainScreen';

function App() {
  return (
    <Fragment>
      {/* The Sidebar Component */}
      <Sidebar /> 
      {/* The Main Screen Component */}
      <MainScreen />
    </Fragment>
  );
}

export default App;
