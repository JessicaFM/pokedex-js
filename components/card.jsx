import cardStyles from '../styles/Card.module.css'
import CardHeader from './cardHeader'
import CardBody from './cardBody'
import CardBottom from './cardBottom'
import bg from '../images/bg_4.jpeg';

function Card({ pokemon }) {
    return (
        <div className = { cardStyles.card }>
            <div className={ cardStyles.cardWrapper }
                style={{
                    backgroundImage: `url(${bg.src})`,
                    width: '100%',
                    height: '100%',
                }}>
                <div className = { cardStyles.cardOpacity }>
                    <CardHeader 
                        pokemon = { pokemon }
                    />

                    <CardBody
                        pokemon = { pokemon }
                    />

                    <CardBottom 
                        pokemon = { pokemon }
                    />
                </div>
                
            </div>
        </div>
    )
}

export default Card