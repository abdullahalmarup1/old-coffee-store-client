
import { useLoaderData } from 'react-router-dom'
import './App.css'
import CoffeeCard from './Components/CoffeeCard/CoffeeCard';

function App() {

  const coffees = useLoaderData();


  return (
    <div className='ml-10'>
      <h1 className='text-5xl text-yellow-900  text-center mb-20'>
        Hot Hot Coffee {coffees.length} </h1>

      <div className='grid md:grid-cols-2 gap-5'>
        {
          coffees.map(coffee =>
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}>
            </CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
