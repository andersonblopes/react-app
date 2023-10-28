import ListGroup from "./components/ListGroup.tsx";
import Alert from "./components/Alert.tsx";
import Button from "./components/Button.tsx";
import {useState} from "react";

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

    const [alertVisible, setAlertVisibility] = useState(false)

    return <div>
        {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My <b>alert</b></Alert>}
        <Button onClick={() => setAlertVisibility(true)}>Add</Button>
        <ListGroup items={items} header={"Cities"} onSelectItem={handleSelectItem}/>
    </div>
}

export default App
