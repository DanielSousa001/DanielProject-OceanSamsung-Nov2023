import './App.css'
import Card from './components/Card/Card';

function App() {
const item1 = {
  name: 'Rick Sanchez',
  imageUrl: "https://rickmortyapi.com/apicharacter/avatar/1.jpeg"
}

  const item2 = {
    name: 'Morty Smith',
    imageUrl: "https://rickmortyapi.com/apicharacter/avatar/2.jpeg"
}

const item3 = {
  name: "Summer Smith",
  imageUrl: "https://rickmortyapi.com/apicharacter/avatar/3.jpeg"
}

   const items = [item1, item2, item3]

  return (
    <>
        {items.map(function (element) {
           return <card item={element} />
        })}  
    </>
  )
}

export default App;