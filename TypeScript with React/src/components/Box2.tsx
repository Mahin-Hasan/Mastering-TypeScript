import { useContext } from "react";
import { ThemeContext } from "../App";



const Box2 = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)

    alert(theme)
    return (
        <div className="boxContainer">
            <h1>Box 1</h1>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
};

export default Box2;