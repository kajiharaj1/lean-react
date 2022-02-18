import { useParams, useLocation } from "react-router-dom";

export const UrlParameter = () => {
    const { id } = useParams();
    const location = useLocation();

    console.log(location);
    return (
        <div>
            <p>パラメータは {id} です</p>
            <h1>UrlParameterページです</h1>
        </div>
    )
}