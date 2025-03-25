import React from 'react'

export default function List() {
  return (
    <div>
      <ul type='none'>
        <li>
            <input type="checkbox" />
            <span>Todo 1</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>Todo 1</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>Todo 2</span>
        </li>
        <li>
            <input type="checkbox" />
            <span>Todo 3</span>
        </li>
      </ul>
      <button>ADD TODO</button>
    </div>
  )
}
