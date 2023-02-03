import React from 'react'

const Boxtest = (props) => {

    const [flip, setFlip] = React.useState(props.on)

    const swapColor = flip ? " #CCE1F2" : "#E2BEF1"

    const styles ={
        backgroundColor: swapColor
    }

    function addFlip(){
        setFlip(function(item){
            return(!item)

        })
    }


  return (
    <div style={styles} onClick={addFlip} className='box'></div>
  )
}

export default Boxtest