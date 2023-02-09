import stylePaginator from '../styles/Paginator.module.css'

export default function Paginator({ totalPages, offset, itemsPage, updateOffset }) {
    let btnPages = []
    let maxPages = Math.round(totalPages/itemsPage)
    let cursor = (offset/10)

    function goToPage(page) {
        updateOffset(page*itemsPage)
    };

    function nextPage(page) {
        updateOffset(page+10)
    }

    function prevPage(page) {
        updateOffset(page-10)
    }

    if(!btnPages.includes(offset)) {
        for(let i = cursor; i < cursor + 5; i++) {
            btnPages.push(
                <button className= { `${stylePaginator.paginatorBtn} ${offset == (i*10)?stylePaginator.active:""}` }
                    key={i}
                    onClick={() => goToPage(i)}>
                        { (i + 1) }
                </button>
            )
        }
    }

    return (
        <div className= { stylePaginator.paginatorContent }>
            { offset > 1 &&
                <button className= { stylePaginator.paginatorBtn }
                    onClick={() => prevPage(offset) }>
                    { ' << '}
                </button>
            }
            { btnPages }
            
            { offset < (maxPages*10) &&
                <>
                    <button className= { stylePaginator.paginatorBtn }
                        onClick={ () => nextPage(offset) }>
                        { ' >> '}
                    </button>
                </>  
            }
        </div>
    )
}