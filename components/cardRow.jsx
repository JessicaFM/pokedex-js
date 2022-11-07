import cardRowStyles from '../styles/CardRow.module.css'

export default function CardRow({ type, keyValue, value }) {
    return (
        <div className = { cardRowStyles.cardRow }>
            { keyValue &&
                <div className = "">{ keyValue }</div>
            }
            { type && 
                <div className = { cardRowStyles.types }>{ type }</div>
            }
            <div className = "">{ value}</div>
        </div>
    )
}