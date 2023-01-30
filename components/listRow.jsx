import Image from 'next/image'
import styleList from '../styles/List.module.css'

export default function ListRow({ row }) {
    let sprite = row.url
    sprite = sprite.replace('https://pokeapi.co/api/v2/pokemon/', '')
    sprite = sprite.replace('/', '')

    let spriteUrl = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/' + sprite + '.svg'
    return (
        <div className = { styleList.row }>
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
        </div>
    )
}