import { useRouter } from 'next/router'
import Link from "next/link";
import searchStyles from '../../styles/Search.module.css'


function Search({ data }) {
    const router = useRouter()

    if (router.isFallback)  return <div>Loading...</div>;
    else {
        const listItems = data.map((pok) =>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700" key={ pok.url }>
                <td className={ searchStyles.customTableTd }>
                    <Link href={`/${ pok.name }`}>
                        { pok.name }
                    </Link>
                </td>
            </tr>
        );

        return(
            <div className="">
                Total: { data.length }
                <table className="custom-table w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <th className={ searchStyles.customTableTd }>
                            <td>Nombre</td>
                        </th>
                    </thead>
                    <tbody>
                    { listItems }
                    </tbody>
                </table>
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
    const res = await fetch('https://pokeapi.co/api/v2/pokemon/?limit=2000')
    const data = await res.json()

    const notFound = data.results ? false : true;

    let term = params.pokemon
    let search = new RegExp(term, 'i')
    
    console.log(search)
    
    console.log(search)
    let results = (data.results).filter(
        items => search.test(items.name)
    )

    return {
        props: { 
            data: results
        },
        notFound: notFound,
        revalidate: 60
    }
}

export default Search