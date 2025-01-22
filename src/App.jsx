import ColorButton from "./ColorButton.jsx"
import { PickedColor } from "react"

function App() {

  return (
    <>
      <h1>Color Picker</h1>
      <ColorButton colorName= "blue"/>
      <ColorButton colorName= "yellow"/>
      <ColorButton colorName= "black"/>
    </>
  )
}



export default App