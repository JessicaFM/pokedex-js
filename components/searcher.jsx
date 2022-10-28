import searcherStyles from '../styles/Searcher.module.css'

export default function Searcher() {

    state

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