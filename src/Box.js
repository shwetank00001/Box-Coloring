import React from 'react'

const Box = (props) => {
    
    const [flip, setFlip ] = React.useState(props.on)
    
    function FlipColour(){
        setFlip(function(item){
            return(!item)
        })
    }


    const swapColor = flip ? "#cccccc" : "transparent"

    const styles ={
        backgroundColor : swapColor
    }

  return (
    <div onClick={FlipColour} style={styles} className='box'>
    </div>
  )
}

export default Box