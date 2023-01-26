import CharacterCard from "../CharacterCard";
import './index.css';

const Table = ({ heros, deleteHeroSubmit } : any) => {

    return (
        <table className="Table">
        <tbody className="Tbody">
        {heros.map && heros.map((item: any ) => (
                        <CharacterCard hero={item} onSubmit={deleteHeroSubmit}/>
                    ))}
        </tbody>
    </table>
    )
}

export default Table;