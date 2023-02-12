import { useRouter } from 'next/router'
import Card from '../../components/card/card'

function Pokemon({ data }) {
    const router = useRouter()

    if (router.isFallback)  return <div>Loading...</div>;
    else {
        return (
            <div className="pb-5">
                <Card 
                    pokemon = { data } />
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