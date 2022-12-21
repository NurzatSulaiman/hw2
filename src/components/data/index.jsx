import React from "react";
import Info from "../info";

// import styles from './style.module.css';

const DATA = [
{
  id: 1,
  title: 'lorem any text without any meaning',
  body: 'lorem, lorem, lorem, lorem'
},
  {
    id: 2,
    title: 'que est esse',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 3,
    title: 'que est esse lorem any text without any meaning',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 4,
    title: 'que est esse heq sjks lorem any text without any meaning',
    body: 'lorem, lorem, lorem, lorem'
  },
  {
    id: 5,
    title: 'que est esse lorem',
    body: 'lorem, lorem, lorem, lorem'
  }
]

const Data = () => {
  if (!DATA.length) {
    return (
      <div>
        no data
      </div>
    )
  }

  return (
    <div>
      {DATA.map((item) => (
        <div>
          <Info
            key={item.id}
            title={item.title}
            body={item.body}
          />
        </div>


      ))}
    </div>
  )
}

export default Data

