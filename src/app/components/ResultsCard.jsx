import React from 'react'
import "./components.scss";

function ResultsCard({title}) {
  return (
    <span className='results-card'>
        <span className='p-compo' />
        <span className='content'>
            {title}
        </span>
    </span>
  )
}

export default ResultsCard