import cardStyle from '../../styles/Card.module.css'

// components
import { Ability } from './Ability'
import { Stat } from './Stat'
import { Type } from './Type'

export function CardBody( { data }) {
    console.log(data)
    return (
        <>
            <div className={ cardStyle.cardBody }>
                <div className={ cardStyle.title }>
                    { data.name }
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className="">
                        <div className="">
                            Experience: { data.base_experience }
                        </div>
                        <div className="">
                            Height: { data.height }
                        </div>
                        <div className="">
                            Weight: { data.weight }
                        </div>
                        <div className="">
                            Abilities:
                            { data.abilities.map((item) => {
                                return <Ability
                                    key={ item.slot }
                                    ability={ item.ability }
                                />
                            })}
                        </div>
                        <div className="">
                            Type:
                            { data.types.map((item, index) => {
                                return <Type
                                    key={ index }
                                    type={ item.type }
                                />
                            })}
                        </div>
                    </div>
                    <div className="">
                        Stats:
                        { data.stats.map((item, index) => {
                            return <Stat
                                key={ index }
                                stat= { item }
                            />
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}