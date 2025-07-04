type cardProp = {
    image: string
    name: string
    hint: string
} 

export function Card({image, name, hint}: cardProp) {
    return (
    <div className="card">
        <img src={image} alt="avatar"/>
        <h3 className="person-name">{name}</h3>
        <p className="person-hint">{hint}</p>
    </div>
    )
}