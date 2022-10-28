import titleStyles from '../styles/Title.module.css'
import Image from 'next/image'
import titleImage from '../images/title.png'

function Title({ text }) {
    return (
        <div className={titleStyles.titleWrapper}>
            <Image 
                src={ titleImage } 
                alt="pokedex"
                layout='fill'/>
        </div>
    )
}

export default Title