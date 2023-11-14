import './App.css'
import Card from './components/Card/Card';

function App() {
const item1 = {
  name: 'Rick Sanchez',
  imageUrl: 'https://rickmortyapi.com/apicharacter/avatar/1.jpeg'
}

  const item2 = {
    name: 'Morty smith',
    imageUrl: 'https://rickmortyapi.com/apicharacter/avatar/2.jpeg'
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