import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./detail.scss"

function Detail() {
    let {id} = useParams();

    const [myFetch, setMyFetch] = useState([])

    const getFetch = () => {
        fetch("https://api.escuelajs.co/api/v1/categories/" + id)
          .then(res => res.json())
          .then(data => {
            setMyFetch(data)
          })
      }
    
      useEffect(() => {
        getFetch()
      }, [])

  return (
    <div>
                  <Link to={"/"}><h4>Go home</h4></Link>
          <ul className='cards' key={myFetch.id}>
            <img src={myFetch.image}  />
            <li>{myFetch.id}</li>
            <li>{myFetch.name}</li>
          </ul>

    </div>
  )
}

export default Detail