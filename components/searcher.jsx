import searcherStyles from '../styles/Searcher.module.css'
import Router from 'next/router'


function Searcher() {

    function handleSubmit(e) {
        e.preventDefault()
        Router.push({
            pathname: `/search/${e.target.search.value}`,
        })
    }

    return (
        <div className={ searcherStyles.searcher }>
            <form onSubmit={ handleSubmit }>
                <div className={ searcherStyles.content }>
                    <input className={ searcherStyles.input }
                        name="search" />
                    <button className={ searcherStyles.button }>
                        Search
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Searcher