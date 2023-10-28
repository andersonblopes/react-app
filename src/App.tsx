import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";

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

    return <div>
        <Alert>Hello <b>world!</b></Alert>
        <ListGroup items={items} header={"Cities"} onSelectItem={handleSelectItem}/></div>
}

export default App
