import {useContext} from "react";
import {GlobalContext} from "../context/GlobalContext.jsx";

const CategoriaSelector = () => {
    const { categoria, changeCategoria } = useContext(GlobalContext);

    const handleChange = (e) => {
        changeCategoria(e.target.value);
    };

    return (
        <div className="categoria-selector">
            <label htmlFor="categoria">Selecciona una categoria de libro: </label>
            <select id="categoria" value={categoria} onChange={handleChange}>
                <option value="todas">Todas</option>
                <option value="novelas">Novelas</option>
                <option value="cienciaficcion">Ciencia Ficcion</option>
                <option value="historia">Historia</option>
                <option value="psicologia">Psicologia</option>
            </select>
        </div>
    );
};

export default CategoriaSelector;