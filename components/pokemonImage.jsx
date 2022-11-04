import Image from 'next/image'
import styleCardImage from '../styles/CardImage.module.css'
import styleCard from '../styles/Card.module.css'
import bg from '../images/artwork_bg_3.png';

function PokemonImage({ image, name }) {
    return (
        <div className = { styleCardImage.cardImage }>
            <div className = { styleCard.cardWrapper }
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }}>
                <div className = { styleCard.cardOpacity }>
                    <Image  
                        src={ image }
                        layout='fill'
                        alt={name}
                        width='500'
                        height='500'
                    />
                </div>
            </div>
        </div>
    )
}

export default PokemonImage