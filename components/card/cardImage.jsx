import Image from 'next/image'

import cardImageStyle from '../../styles/CardImage.module.css'

export function CardImage( { image }) {

    return (
        <div className={ cardImageStyle.cardImage }>
            <Image
                src={ image }
                alt="pokemon picture"
                width={ 300 }
                height={ 300 }
                />
        </div>
    )
}


