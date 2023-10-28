import {MouseEvent} from "react";

function ListGroup() {
    const items = [
        'Fortaleza - CE',
        "Rio de Janeiro - RJ",
        "São Paulo - SP",
        'Natal - RN'
    ]

    const handleClick = (event: MouseEvent) => console.log(event);

    return (
        <>
            <h1>List</h1>
            {items.length === 0 && <p>No item found</p>}
            <ul className="list-group">
                {items.map((item) => (
                    <li className="list-group-item"
                        onClick={handleClick}
                        key={item}>
                        {item}
                    </li>)
                )}
            </ul>
        </>
    );
}

export default ListGroup;
