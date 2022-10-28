import cardRowStyles from '../styles/CardRow.module.css'

export default function CardRow({ type, value }) {
    return (
        <div className={ cardRowStyles.cardRow }>
            <div className="">{ type }</div>
            <div className="">{ value}</div>
        </div>
    )
}