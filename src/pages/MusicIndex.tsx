import axios from 'axios';
import React, { useEffect, useState } from 'react'


type Props = {
  instrument_name: string;
  price: number;

}
export const MusicIndex = () => {
  const [allMusic, setAllMusci] = useState<Array<Props>>([]);

  const fetch = async () =>{
    const res = await axios.get("http://localhost:3010/api/v1/musicindex")
    console.log(res.data)
    setAllMusci(res.data)
  }
 useEffect(() =>{
   fetch()
 },[])


  return(
    <>
      {allMusic.map((music) =>{
        return(

        <div>
          {music.price}
          {music.instrument_name}
        </div>

        )
      })}
    </>
  )
}
