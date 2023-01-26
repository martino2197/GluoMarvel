import './index.css';

const SearchBar = ({ filterHeroSubmit }: any) => {
    return(
        <div className="Header">
            <h1 className='Title'>Marvel's &nbsp;<p>Character list</p></h1>
            <input
                type="text"
                className="SearchBar"
                placeholder="Buscar como..."
                onChange={e => filterHeroSubmit(e.target.value)}
            />
        </div>
    )
}

export default SearchBar