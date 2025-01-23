import React from 'react'
import {useState} from 'react'

const Body = () => {
    const [grid,setGrid] = useState(Array(9).fill("rgb(0, 50, 100)"))
    const [clickOrder,setClickOrder] = useState([])

    const handleClick = (i) =>{
        if (i === 8){
            const updatedGrid = [...grid]
            clickOrder.forEach((i,orderIndex)=>{
                setTimeout(()=>{
                    updatedGrid[i]= "rgb(0, 50, 100)"
                    setGrid([...updatedGrid])
                },orderIndex*300)
            })
            setClickOrder([])
        }else{
            const updatedGrid = [...grid]
            updatedGrid[i] = "rgb(100, 0, 0)"
            setGrid(updatedGrid)
            setClickOrder([...clickOrder,i])
        }
    }

  return (
    <div className='flex justify-center gap-4 mt-8'>
      <div className="h-72 w-72 first rounded-lg myshadow2"></div>
      <div className="h-72 w-72 second rounded-lg myborder"></div>
      <div className="h-72 w-72 rounded-lg flex flex-wrap gap-2 justify-center items-center third">
        
        {grid.map((color,i)=>(
            <div
            key= {i}
            className='square w-[75px] h-[75px] rounded-lg '
            style={{backgroundColor:i===8 ? "rgb(100, 0, 0)" : color}}
            onClick ={()=>handleClick(i)}/>
        ))
        }
      </div>
    </div>
  )
}

export default Body
