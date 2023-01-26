import './index.css';

const CharacterCard = ({ hero, onSubmit }: any) => {
    return (
        <div key={hero.id} className="Card">
            <div className='Container'>
                <img
                    src={`${hero.thumbnail.path}.jpg`}
                    alt="hola"
                    className='Image'
                    />
                <div className='Details'>
                    <h3 className='Name'>{hero.name}</h3>
                    <div className='Info'>
                        <p>Comics: {hero.comics.available} /</p>
                        <p>&nbsp;Serie: {hero.series.available} /</p>
                        <p>&nbsp;Stories: {hero.stories.available} /</p>
                        <p>&nbsp;Events: {hero.events.available} /</p>
                    </div>
                </div>
                </div>
                <button className='DeleteButton' onClick={() => onSubmit(hero.id)}>
                    x
                </button>
        </div>

    )
}

export default CharacterCard;