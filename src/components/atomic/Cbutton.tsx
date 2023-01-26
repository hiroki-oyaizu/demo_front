import { FC } from "react";


type Props ={
  open: boolean;
  onClickOpen: () => void;
  onClickClose: () => void;
}
export const Cbutton = (props: Props) =>{
  const {open, onClickClose, onClickOpen} = props;
  return (
  <>
    
      {open &&
      <div style={{backgroundColor: 'red',textAlign: "center"}}>
        <h3>赤背景</h3>
      </div>
      }
      <div style={{backgroundColor: 'blue',textAlign: "center"}}>
        <h3>青背景</h3>
      </div>
      <div>
        <button onClick={onClickOpen}>表示</button>
      </div>
      <button onClick={onClickClose}>非表示</button>
  </>
  )}
