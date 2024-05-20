import { Link } from "react-router-dom";

export const MainMenu = () => {
    return (
        <div>
            <Link to="/">Главная</Link>
            <Link to="/recieps">Рецепты</Link>
            <Link to="/contacts">Контакты</Link>
        </div>
    );
};