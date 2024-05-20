import {
    useLoaderData
} from "react-router-dom";

import { recieps } from "../../data/recieps";
import { ReciepeDetails } from "../recieps/ReciepeDetails";

export const loader = ({ params }) => {
    const id = +params.id
    return {
        id
    }
}

export const RecipeDetailsRoute = () => {
    const { id } = useLoaderData();
    const reciepe = recieps.find(r => r.id === id);

    return (
        <>
            {reciepe && <ReciepeDetails {...reciepe}/>}
            {!reciepe && 'Рецепт не найден!'}
        </>
    );
}