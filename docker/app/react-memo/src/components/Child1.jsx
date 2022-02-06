import { memo } from "react";
import { useContext } from "react";
import { AdminFlagContext } from "./providers/AdminFlagProvider";

export const Child1 = memo((props) => {
    console.log("Child1 レンダリング");

    const contextValue = useContext(AdminFlagContext);
    console.log(contextValue);

    const { onClickReset } = props;

    const Style = {
        height: "200px",
        backgroundColor: "lightblue",
        padding: "8px",
    };

    return (
        <div style={Style}>
            <p>Child1</p>
            <button onClick={onClickReset}>リセット</button>
        </div>
    );
});