import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";

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
        <ListGroup items={items} header={"Cities"} onSelectItem={handleSelectItem}/>
        <Button onClick={() => console.log('Clicked')}>Add</Button>
    </div>
}

export default App
