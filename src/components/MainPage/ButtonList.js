import { buttonsList } from "../../utils/Constants"; 
import Button from "./Button";
const ButtonList = () => {
    return (
        <>
            {buttonsList.map((name) => <Button key={name+ Math.floor(Math.random() * 100)} name={name}/>)}
        </>
    )
}

export default ButtonList;