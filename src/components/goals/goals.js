import "./goals.css"

const Goals = props => {
    return (
        <ul>{
            props.goals.map((goal) => {
                return <li key={goal.id}>{goal.text}</li>;
            })}
        </ul>
    )
}

export default Goals;