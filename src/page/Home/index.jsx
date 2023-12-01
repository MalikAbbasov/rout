import React, { useEffect, useState } from 'react'
import "./home.scss"
import { Link } from 'react-router-dom'

function Home() {
  const [myFetch, setMyFetch] = useState([])
  const [isLoading, setIsLoading] = useState(false);

  const getFetch = () => {
    fetch("https://api.escuelajs.co/api/v1/categories")
      .then(res => res.json())
      .then(data => {
        setMyFetch(data);
      })
  }

  useEffect(() => {
    getFetch();
    setIsLoading(false);
  }, [])


  return (
    <div>
<div className="card">
{isLoading ? <p>salam...</p> : null}
{
  
        myFetch.map(x =>
          <ul className='cards' key={x.id}>
            <img src={x.image}  />
            <li>{x.id}</li>
            <li>{x.name}</li>
            <Link to={"/Detail/" + x.id}><button>Go Details</button></Link>
          </ul>
        )
      }
</div>


    </div>
  )
}

export default Home