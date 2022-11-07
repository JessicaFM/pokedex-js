import cardStyles from '../styles/Card.module.css'
import Image from 'next/image'
import bg from '../images/bg_2.png';

function CardHeader({ pokemon }) {
    return (
        <div className= { cardStyles.cardHeader }>
            <div className= { cardStyles.cardHeaderWrapper }>
                <div className = { cardStyles.title }>
                    { pokemon.name }
                </div>
                <div className = { cardStyles.experience }>
                    { pokemon.base_experience }
                </div>
            </div>
            
            <div className = { cardStyles.image }
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }}>
                <Image  
                    src={ pokemon.sprites.other['official-artwork'].front_default }
                    layout='fill'
                    alt='Mountains'
                    width='500'
                    height='500'
                />
            </div> 
            <div className = { cardStyles.headerInfo }>
                <div className="text-center">
                    Length:{ pokemon.height * 10 }cms,
                    Weight:{ pokemon.weight / 10 }kg
                </div>
            </div>
        </div>
    )
}

export default CardHeader