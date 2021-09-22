import { useState } from "react";
import "./App.css";
import image1 from './images/img1.jpg'
import image2 from './images/img2.jpg'
import image3 from "./images/img3.jpg";
import Button from './components/Button'
import Images from './components/Images'
import image4 from './images/img4.jpg'


function App() {
  const [count, setCount] = useState(0);
  const [countBoo, setCountBoo] = useState(false);
  const imageArr = [image1, image2, image3, image4] 
  console.log(image4)

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };

  const handleClickBoo = () => {
    setCountBoo((prev) => !prev);
  };
  return (
    <div className="App">
      <h1>React</h1>
      {/* <Button handleClick={handleClick} handleClickBoo={handleClickBoo} count={count} countBoo={countBoo} /> */}
     
     {/* <img src={image3} key={image1} alt='image'/> */}
     <Images imageArr={imageArr} />
    </div>
  );
}

export default App;
