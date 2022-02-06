import { useState, memo, useCallback } from "react";
import { Child1 } from "./components/Child1.jsx";
import { ColoredMessage } from "./components/ColoredMessage";
import { CssModules } from "./components/CssModules";

export const App = () => {
    console.log("Appレンダリング");
    
    // Stateの定義
    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum(num + 1);
    };

    const onClickReset = useCallback(() => {
        setNum(0);
    }, []);

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですかぁぁぁぁあ？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <CssModules></CssModules>
            <Child1 onClickReset={onClickReset} />
        </>
    );
};