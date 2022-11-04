import { useRouter } from 'next/router'
import Card from '../components/card.jsx'
import PokemonData from '../components/pokemonData.jsx'
import PokemonImage from '../components/pokemonImage.jsx'
import styleCard from '../styles/Card.module.css'
import styleCardRow from '../styles/CardRow.module.css'
import bg from '../images/bg_3.jpeg';

function Pokemon({ data }) {
    const router = useRouter()

    if (router.isFallback)  return <div>Loading...</div>;
    else {
        return (
            <>
                <div className="">
                    We found a pokemon!
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <div className={ `${styleCard.card} ${styleCard.cardFullHeight} ${styleCard.cardData}` }>
                        <div className= { styleCard.cardWrapper } 
                            style={{
                                backgroundImage: `url(${bg.src})`,
                                width: '100%',
                                height: '100%',
                            }}>
                            <div className = { styleCard.cardOpacity }>
                                <Card 
                                    pokemon = { data } />
                            </div>
                        </div>
                    </div>
                    <div>
                        <PokemonData 
                            pokemon = { data }/>
                    </div>
                </div>
                <div className="pt-3 grid grid-cols-3 gap-4">
                    <PokemonImage
                        name = "artwork"
                        image = { data.sprites.other['official-artwork'].front_default }
                    />
                    <PokemonImage
                        name = "front"
                        image = { data.sprites.front_default }
                    />
                    <PokemonImage
                        name = "back"
                        image = { data.sprites.back_default }
                    />
                </div>
            </>
        )
    }
}
    

export async function getStaticPaths() {
    return {
        paths: [{ params: { pokemon: 'pikachu' }}],
        fallback: true,
    };
}

export async function getStaticProps(context) {
    const { params } = context
    let data = null
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${ params.pokemon }`)
        data = await res.json()
        console.log(data);
    } catch (err) {
        console.log(err);
    }
    
    if (!data) {
        console.log(params)
        return {
            notFound: true,
        }
    }

    return {
        props: { 
            data: data
        },
    }
}

export default Pokemon