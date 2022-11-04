import Header from './header.jsx'
import Searcher from './searcher.jsx'

export default function Layout({ children }) {
    return(
        <div className="container main-container mx-auto">
            <Header />
            <Searcher />
            <main>{ children }</main>
        </div>
    )

}