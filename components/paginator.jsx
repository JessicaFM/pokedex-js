import useOffset from '../hooks/useOffset.jsx';
import stylePaginator from '../styles/Paginator.module.css'

export default function Paginator({ totalPages, currentPage, itemsPage }) {
    const [offset, setOffset] = useOffset();

    function nextPage() {
        setOffset(offset => offset + 1)
    };

    let maxPages = Math.round(totalPages/itemsPage)
    let btnPages = []
    for(let i = currentPage; i < currentPage + 5; i++) {
        btnPages.push(
            <button className= { `${stylePaginator.paginatorBtn} ${currentPage == i?stylePaginator.active:""}` }
                key={i}>
                    { i }
            </button>
        )
    }
    
    return (
        <div className= { stylePaginator.paginatorContent }>
            { currentPage > 0 &&
                <button className= { stylePaginator.paginatorBtn }>
                    { ' << '}
                </button>
            }
            
            { btnPages }
            <button className= { stylePaginator.paginatorBtn }>
                { '...' }
            </button>
            
            { currentPage < maxPages &&
                <>
                    <button className= { stylePaginator.paginatorBtn }>
                        { maxPages }
                    </button>
                    <button className= { stylePaginator.paginatorBtn }
                        onClick={nextPage}>
                        { ' >> '}
                    </button>
                </>  
            }
        </div>
    )
}