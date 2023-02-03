import React from 'react'

const Box = (props) => {
    

    const swapColor = props.on ? "#cccccc" : "transparent"

    const styles ={
        backgroundColor : swapColor
    }

  return (
    <div onClick={function(){
                  props.handleEvent(props.id)
                }} 
    style={styles} className='box'>
    </div>
  )
}

export default Box