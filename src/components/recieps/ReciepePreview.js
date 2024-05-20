import {
    Link
} from "react-router-dom";

export const ReciepePreview = ({ id, name }) => {
    return (
        <div>
            <h3>{name}</h3>
            <Link to={`/recieps/${id}`}>Посмотреть</Link>
        </div>
    );
};