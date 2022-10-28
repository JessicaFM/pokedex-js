import cardStyles from '../styles/Card.module.css'
import Image from 'next/image'
import CardRow from './cardRow.jsx'

function Card({ pokemon }) {
    return (
        <div className = { cardStyles.card }>
            <div className = { cardStyles.title }>
                { pokemon.name }
            </div>
            <div className = { cardStyles.image }
            style={{width: '100%', height: '100%', position: 'relative'}}>
                <Image  
                    src={ pokemon.sprites.front_default }
                    layout='fill'
                    alt='Mountains'
                    width='500'
                    height='500'
                />
            </div> 
            <div className={ cardStyles.rowsWrapper}>
                <CardRow
                    type="specie"
                    value={ pokemon.species.name }
                />
                <CardRow
                    type="weight"
                    value={ pokemon.weight }
                />
                <CardRow
                    type="height"
                    value={ pokemon.height }
                />
                <CardRow
                    type="base experience"
                    value={ pokemon.base_experience }
                />
            </div>
        </div>
    )
}

export default Card