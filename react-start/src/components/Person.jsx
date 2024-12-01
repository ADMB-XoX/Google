export default function Person(props) {

    return (
        <div>
            <h2>{props.name}</h2>
            <p>{props.grade}</p>
        </div>
    );
}