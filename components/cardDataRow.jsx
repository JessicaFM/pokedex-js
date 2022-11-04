import styleCardRow from '../styles/CardRow.module.css'

function CardDataRow({ type, text, value, data }) {
    let title = ""
    if(type = "title") {
        title = text
    }
    return (
        <div className={ `${ type=='title' ? styleCardRow.cardRowTitle : styleCardRow.cardRowSubTitle }` }>
            { value }
        </div>
    )
}

export default CardDataRow