const ColorButton = (props) => {
  return <button>{props.colorName}</button>;
};

function PickedColor() {
  return (
    <>
      <h1>PICKED COLOR</h1>
    </>
  )
}

export default ColorButton
export { PickedColor } from 'react'
