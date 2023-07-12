import { useEffect ,useState } from "react";
import { ButtonColorHex } from "./ButtonColorHex";


export const TitleColorHex = () => {

    const [hexColor, setHexColor] = useState('');

    const backColor = document.body;

    const onRandomHex = () => {
    const digitsHex = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
    const randomNumber = Math.floor(Math.random()*16);
    return digitsHex[randomNumber];
    }

    const onRandomColor = () => {
        let color = '';
        for(let i=0;i<6;i++){
            color = color + onRandomHex();
        }
        setHexColor( color );
         
    }

    useEffect(() => {
      onRandomColor();
    }, []);

    useEffect(() => {
    document.title = `El color de fondo es: ${hexColor}`;
    backColor.style.background = `#${hexColor}`;
    }, [hexColor]);
    


  return (
    <>
    <div className="container">
    <h1>{ hexColor }</h1>
    <ButtonColorHex 
    onRandomColor={ onRandomColor }
    />
    </div>
    </>
  )
}
