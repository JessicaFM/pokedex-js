import Link from 'next/link'
import Image from 'next/image'
import style404 from '../styles/404.module.css'


export default function FourOhFour() {
    return (
    <div className="container mx-auto">
        <h1>Page Not Found</h1>
        <Link href="/">
            Go back home
        </Link>
        <div className =  { style404.wrapper }>
            <div className = { style404.imageWrapper }>
                <Image  
                    src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
                    layout='fill'
                    width='200'
                    height='200'
                />
            </div>
        </div>
    </div>
    )
}