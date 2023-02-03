import React from 'react';
import boxes from './boxes'
import Boxtest from './Boxtest';

function App() {

  const [boxArray, setBoxArray] = React.useState(boxes)

  const boxEle = boxArray.map(function(item){
    return(
      <Boxtest
          key={item.id} 
          id={item.id} 
          on={item.on} 
          />
    )
  })
  return (
    <div>
      {boxEle}
    </div>
  );
}

export default App;
