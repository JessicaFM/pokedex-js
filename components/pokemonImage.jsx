import Image from 'next/image'
import styleCardImage from '../styles/CardImage.module.css'

function PokemonImage({ image, name }) {
    return (
        <div className={ styleCardImage.cardImage }>
            <Image  
                    src={ image }
                    layout='fill'
                    alt={name}
                    width='500'
                    height='500'
                />
        </div>
    )
}

export default PokemonImage