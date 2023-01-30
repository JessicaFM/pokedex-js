import useOffset from '../hooks/useOffset.jsx';
import stylePaginator from '../styles/Paginator.module.css'

export default function Paginator({ totalPages, currentPage, itemsPage, updateOffset }) {
    const [offset, setOffset] = useOffset();

    function goToPage(page) {
        setOffset(page)
        updateOffset(page)
    };

    // TODO
    function nextPage() {
        console.log("Next page")
    }

    function prevPage() {
        console.log("Prev")
    }

    let maxPages = Math.round(totalPages/itemsPage)
    let btnPages = []
    for(let i = currentPage; i < currentPage + 5; i++) {
        btnPages.push(
            <button className= { `${stylePaginator.paginatorBtn} ${currentPage == i?stylePaginator.active:""}` }
                key={i}
                onClick={() => goToPage(i)}>
                    { i }
            </button>
        )
    }
    
    return (
        <div className= { stylePaginator.paginatorContent }>
            { currentPage > 0 &&
                <button className= { stylePaginator.paginatorBtn }
                    onClick={ prevPage }>
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
                        onClick={ nextPage }>
                        { ' >> '}
                    </button>
                </>  
            }
        </div>
    )
}