import { useState, useEffect } from 'react'
import useOffset from '../hooks/useOffset.jsx';
import List from '../components/list.jsx';
import Paginator from '../components/paginator.jsx';

let limit = 10 // number by pages
let total = 0

function Home() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  const [offset, setOffset] = useOffset();

  const updateOffset = (value) => {
    setOffset(value)
  }

  useEffect(() => {
    handleOffsetChange()
    function handleOffsetChange() {
      setLoading(true)
      fetch('https://pokeapi.co/api/v2/pokemon/?limit="' + limit + "&offset=" + offset)
      .then((res) => res.json())
      .then((data) => {
        total = data.count
        setData(data.results)
        setLoading(false)
      })
    }
    
  }, [offset]);

  if(isLoading) return <div className='text-center'>Loading...</div>
  if(!data) return <div className='text-center'>No data!</div>

  return (
    <>
      <List 
        pokemons = { data } 
      />
      { offset}
      <Paginator
        totalPages = { total }
        currentPage = { offset }
        itemsPage = { limit }
        offset = { offset }
        updateOffset = { updateOffset }
      />
    </>
    
  ) 
}

export default Home