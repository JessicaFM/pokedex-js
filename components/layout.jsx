import layoutStyles from '../styles/Layout.module.css'

import Header from './header.jsx'
import Searcher from './searcher.jsx'

export default function Layout({ children }) {
    return(
        <div className={`container main-container mx-auto h-max ${layoutStyles.customContainer}`}>
            <Header />
            <Searcher />
            <main className={ layoutStyles.main }>{ children }</main>
        </div>
    )
}