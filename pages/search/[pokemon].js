import { useRouter } from 'next/router'

function Search({ data }) {
    const router = useRouter()
    const { pokemon } = router.query

    if (router.isFallback)  return <div>Loading...</div>;
    else {
        return(
            <div className="">
                This is searching .. <br/>
                { data.height } 
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
    const pokemon = params.pokemon

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    const data = await res.json()

    const notFound = data ? false : true;

    return {
        props: { 
            data: data
        },
        notFound
    }

}

export default Search