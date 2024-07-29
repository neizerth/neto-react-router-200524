import { Link, NavLink } from "react-router-dom";

export const MainMenu = () => {
    return (
        <div>
            <Link to="/">Главная</Link>
            <NavLink className={({ isActive }) => isActive && `active` } to="/recieps" >Рецепты</NavLink>
            <Link to="/contacts">Контакты</Link>
        </div>
    );
};