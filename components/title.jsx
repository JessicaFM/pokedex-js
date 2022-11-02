import titleStyles from '../styles/Title.module.css'
import Image from 'next/image'
import Link from "next/link";
import titleImage from '../images/title.png'

function Title({ text }) {
    return (
        <div className={titleStyles.titleWrapper}>
            <Link href={{ 
                pathname: '/'
            }}>
                <Image 
                    src={ titleImage } 
                    alt="pokedex"
                    layout='fill'/>
            </Link>

            
        </div>
    )
}

export default Title