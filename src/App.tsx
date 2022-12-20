import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { MusicIndex } from './pages/MusicIndex';
import { Cbutton } from './components/Cbutton';
import { useForm } from 'react-hook-form';
const Bstyle = {
  borderRadius: 10,
  color: "white",
  backgroundColor: "teal"
}

const Bstyle2 = {
  borderRadius: 10,
  color: "white",
  backgroundColor: "blue"
}

const testStyle = {
  backgroundColor: "teal"
}

const testStyle2 = {
  backgroundColor: "pink"
}

function App() {
  const { register, handleSubmit, formState: {errors} } = useForm({ defaultValues: { email: 'john@test.com', password: 'pass' } });

  const onSubmit = (data: any) => console.log(data);

  return (
    <>
      <div className="App">
        <h1>ログイン</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <>
            <label style={{marginRight: '20px'}} htmlFor="email">Email</label>
            <input id="email" {...register('email', { required: '必須の項目です。' })} />
            {errors.email?.message && <div>{errors.email.message}</div>}
            </>
          </div>
          <div>
            <label style={{marginRight: '20px'}} htmlFor="password">Password</label>
            <input id="password" {...register('password')} type="password" />
          </div>
          <button type="submit">ログイン</button>
        </form>
      </div>
    </>
  );
  // const [open, setOpen] = useState(false);
  // const [drive, setDrive] = useState<number>(0)
  // const animals = ["犬", "猫", "にぼし"]
  // const [allAnimal, setAllAnimal] = useState("煮干し")
  // const [chageColor, setChangeColor] = useState(false)
  // const driveLeft = () =>{
  //   setDrive((prev) => prev + 10)
  // }

  // const chacgeBack = () =>{
  //   setChangeColor(!chageColor)
  // }
 
  // const onClickOpen = () =>{
  //   setOpen(true);
  // }
  // const onClickClose = () =>{
  //   setOpen(false);
  // }

  // const backDrive = () =>{
  //   setDrive((prev) => prev - 10)
  // }

  // const onCahngeAnimal = (e: React.ChangeEvent<HTMLInputElement>) =>{
  //   console.log(e)
  // }
  // return (
  //   <>
  //     <h1>ホーム画面です</h1>
  //     <div style={chageColor ? testStyle : testStyle2}>
  //       hello
  //     </div>
  //     <button onClick={chacgeBack}>背景色変化</button>
  //     <div style={{backgroundColor: "red", width: "30px", marginLeft: drive}}>
  //       車
  //     </div>
  //     <br></br>
  //     <button 
  //       onClick={driveLeft}
      
  //     style={Bstyle}>進む</button>
  //     <button 
  //     onClick={backDrive}
  //     style={Bstyle2}>戻る</button>

  //     <br/>
  //     <select
  //     value={allAnimal}
  //     onChange={(e) => setAllAnimal(e.target.value)}
  //     >
  //       {animals.map((a) =>{
  //         return(
  //           <React.Fragment key={a}>
  //             <option>{a}</option>


  //           </React.Fragment>

  //         )
  //       })}
  //     </select>
  //     <Cbutton
  //       open={open}
  //       onClickOpen={onClickOpen}
  //       onClickClose={onClickClose}
  //       />
  //   </>
  // );
}

export default App;
