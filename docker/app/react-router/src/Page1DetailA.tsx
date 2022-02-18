import { useLocation, useNavigate } from "react-router-dom"

export const Page1DetailA = () => {
    const { state } = useLocation();
    console.log(state);

    const onClickBack = () => navigate(-1);

    const navigate = useNavigate();
    return (
        <div>
            <h1>Page1DetailAページです</h1>
            <button onClick={onClickBack}>戻る</button>
        </div>
    )
}