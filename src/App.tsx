import React from 'react';
import Button from './components/Button/button';



const App:React.FC = () => {
    return (
        <div className = "APP-header">
            <Button btnType='primary' > hello </Button>
            <Button btnType='link' href='https://www.baidu.com' > hello </Button>
        </div>
    )
}
export default App;
