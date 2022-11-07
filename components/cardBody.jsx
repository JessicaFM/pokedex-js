import cardStyles from '../styles/Card.module.css'
import CardRow from './cardRow.jsx'

function CardBody( { pokemon }) {
    return (
        <div className = { cardStyles.bodyWrapper}>
            <div className = { cardStyles.rowWrapper }>
                <CardRow
                    type = ""
                    keyValue = "specie"
                    value = { pokemon.species.name }
                />
            </div>
            <div className = { cardStyles.rowWrapper }>
                <CardRow
                    type = ""
                    keyValue = "type"
                    value = { pokemon.types[0].type.name }
                />
            </div>
            <div className = { cardStyles.rowWrapper }>
                <CardRow
                    type = { pokemon.abilities[0].slot }
                    keyValue = ""
                    value = { pokemon.abilities[0].ability.name }
                />
            </div>
            <div className = { cardStyles.rowWrapper }>
                <CardRow
                    type = { pokemon.abilities[1].slot }
                    keyValue = ""
                    value = { pokemon.abilities[1].ability.name}
                />
            </div>
        </div>
    )
}

export default CardBody