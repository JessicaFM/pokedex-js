import CardDataRow from '../components/cardDataRow.jsx';
import styleCard from '../styles/Card.module.css'
import styleCardRow from '../styles/CardRow.module.css'
import bg from '../images/artwork_bg_3.png';

function PokemonData( { pokemon }) {
    return (
        <div className = { `${styleCard.card} ${styleCard.cardFullHeight} ${styleCard.cardData}` }>
            <div className = { styleCard.cardWrapper } 
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }}>
                <div className= { styleCard.cardOpacity }>
                    <CardDataRow
                        type = "title"
                        value = { pokemon.types[0].type.name }
                    />
                    <div className="">
                        <div className = { styleCardRow.cardRowSubTitle }>
                            Abilities
                        </div>
                        { pokemon.abilities.map(
                            (abilityObj) => (
                                <div className={ `grid grid-cols-2 gap-1 place-items-stretch ${styleCardRow.borderRow}` } 
                                key={ abilityObj.ability.name }>
                                    <div className="">
                                        { abilityObj.ability.name }
                                    </div>
                                    <div className="text-right">           
                                        { abilityObj.slot }
                                    </div>
                                </div>
                            )   
                        )}
                    </div>
                    <div className="">
                        <div className={ styleCardRow.cardRowSubTitle }>
                            Stats
                        </div>
                        { pokemon.stats.map(
                            (stat) => (
                                <div className={ `grid grid-cols-2 gap-1 place-items-stretch ${styleCardRow.borderRow}` }
                                    key = { stat.stat.name } >
                                    <div className="">           
                                        { stat.stat.name }
                                    </div>
                                    <div className="text-right">
                                        { stat.base_stat }
                                    </div>
                                </div>
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonData