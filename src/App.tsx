import ListGroup from "./components/ListGroup.tsx";

function App() {
    const items = [
        'Fortaleza - CE',
        "Rio de Janeiro - RJ",
        "São Paulo - SP",
        'Natal - RN'
    ]

    const handleSelectItem = (item: string) => {
        console.log(item);
    }

    return <div><ListGroup items={items} header={"Cities"} onSelectItem={handleSelectItem}/></div>
}

export default App
