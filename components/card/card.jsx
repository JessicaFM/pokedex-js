import cardStyle from '../../styles/Card.module.css'
import Link from 'next/link'

// components
import { CardImage } from './cardImage'
import { CardBody } from './cardBody'

export default function Card({ pokemon }) {

    return (
        <div class="container">
            <div class={cardStyle.cHeader}>
                <Link
                    href={{
                        pathname: '/',
                    }}>
                        Back
                </Link>
            </div>
            <div className={ `grid grid-cols-2 gap-2 ${cardStyle.card}`}>
                <CardImage
                    image={ pokemon.sprites.other['official-artwork'].front_default }
                    />
                <CardBody
                    data= { pokemon }
                />
            </div>
        </div>
        
    )
}