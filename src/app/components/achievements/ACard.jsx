import React from 'react'
import "../components.scss"

function ACard({desc}) {
  return (
    <div className="a-card d-flex align-items-center justify-content-start">
        <span>
            {desc}
        </span>
    </div>
  )
}

export default ACard