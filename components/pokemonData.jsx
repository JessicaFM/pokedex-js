import CardRow from '../components/cardRow.jsx';

function PokemonData( { pokemon }) {
    return (
        <div className="">
            Poke data
            <CardRow
                type="type"
                value={ pokemon.types[0].type.name }
            />
            <div className="">
                <div className="">
                    Abilities
                </div>
                { pokemon.abilities.map(
                    (abilityObj) => (
                        <div className="grid grid-cols-2 gap-1 place-items-stretch" 
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
                <div className="">
                    Stats
                </div>
                { pokemon.stats.map(
                    (stat) => (
                        <div className="grid grid-cols-2 gap-1 place-items-stretch"
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
    )
}

export default PokemonData