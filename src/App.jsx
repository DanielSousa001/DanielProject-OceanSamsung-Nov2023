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

  return (
    <>
      <br />
      <Card item={item1} />
      <Card item={item2} />
    </>
  )
}

export default App;