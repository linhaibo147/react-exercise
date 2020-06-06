import React,{ useState } from 'react';
import './App.css';

import Button,{ButtonType,ButtonSize} from './components/Button/button'
const App:React.FC = () => {
  return (
      <div className = "APP-header">
          <Button btnType={ButtonType.Primary} size={ButtonType.Large}> hello </Button>
      </div>
  )
}
export default App;
