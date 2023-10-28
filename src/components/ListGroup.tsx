function ListGroup() {
    const items = [
        'Fortaleza - CE',
        "Rio de Janeiro - RJ",
        "São Paulo - SP",
        'Natal - RN'
    ]

    return (
        <>
            <h1>List</h1>
            <ul className="list-group">
                {items.map(item => (
                    <li key={item}>{item}</li>)
                )}
            </ul>
        </>
    );
}

export default ListGroup;
