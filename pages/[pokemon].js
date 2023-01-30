import { useRouter } from 'next/router'
import Card from '../components/card.jsx'
import PokemonData from '../components/pokemonData.jsx'
import PokemonImage from '../components/pokemonImage.jsx'

function Pokemon({ data }) {
    const router = useRouter()

    if (router.isFallback)  return <div>Loading...</div>;
    else {
        return (
            <div className="">
                <div className="">
                </div>
                <div className="grid grid-cols-2 gap-2">
                    <Card 
                        pokemon = { data } />
                    <PokemonData 
                        pokemon = { data }/>
                </div>
                <div className="pt-7 grid grid-cols-3 gap-4">
                    <PokemonImage
                        name = "artwork"
                        image = { data.sprites.other.home.front_default }
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
            </div>
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
    } catch (err) {
        console.log(err);
    }
    
    if (!data) {
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