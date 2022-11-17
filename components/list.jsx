import ListRow from '../components/listRow.jsx'
import styleList from '../styles/List.module.css'

export default function List({ pokemons }) {
    console.log(pokemons)
    return(
        <div className="container justify-center">
            <div className="p-8">
                <div className={ styleList.divAuto }>
                    {
                        pokemons.map((pokemon) => (
                            <ListRow 
                                key = { pokemon.name }
                                row = { pokemon }
                            />
                        )) 
                    }
                </div>
            </div>
        </div>
    )
}