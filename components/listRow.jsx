import Image from 'next/image'
import Link from 'next/link'
import styleList from '../styles/List.module.css'

export default function ListRow({ row }) {
    let sprite = row.url
    sprite = sprite.replace('https://pokeapi.co/api/v2/pokemon/', '')
    sprite = sprite.replace('/', '')
    let spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + sprite + '.svg'
    
    console.log(row)
    function goToPokemon() {
        console.log(row.name)
    }

    return (
        <Link className = { styleList.row }
            href={{
                pathname: '[pokemon]',
                query: { pokemon: row.name },
            }}>
            <div className = { styleList.rowWrapper }>
                { row.name }
            </div>
            <div className={ styleList.rowWrapper }>
                <Image
                    src={ spriteUrl }
                    layout='fill'
                    width='30'
                    alt="pokemon"
                    height='30'
                />
            </div>
        </Link>
    )
}