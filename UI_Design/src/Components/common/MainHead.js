import React from 'react'

export default function MainHead() {
  return (
    <div className='container-fluid'>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavbar">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link active" href="/">Home</a>
      </li>
     <li class="nav-item">
        <a class="nav-link" href="/page1">PAGE 1</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/page2">PAGE 2</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/page3">PAGE 3</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/page4">PAGE 4</a>
      </li>
      <li class="nav-item">
      <a class="nav-link" href="/page5">PAGE 5</a>
      </li>
    </ul>
    </div>
  </div>
</nav>

    </div>
  )
}
