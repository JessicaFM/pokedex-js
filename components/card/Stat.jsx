export function Stat({ stat }) {

    return (
        <div className="">
            <div className="">
                Base stat: { stat.base_stat }
            </div>
            <div className="">
                Name: { stat.stat.name }
            </div>
        </div>
    )
}