import ListGroup from "./components/ListGroup.tsx";

function App() {
    const items = [
        'Fortaleza - CE',
        "Rio de Janeiro - RJ",
        "São Paulo - SP",
        'Natal - RN'
    ]
    return <div><ListGroup items={items} header={"Cities"}/></div>
}

export default App
