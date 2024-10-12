import react from 'react'
import Logo from "../../assets/Group 1.png"

const Header = () => {
    return(
        <>
<nav class="navbar navbar-expand-lg">
  <div class="container">
   <img src={Logo} alt="logo" />
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Services</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contect Us</a>
        </li>
      </ul>
      <div className='d-flex'>
        <button className='btn border-0'>log in</button>
        <button className='btn rounded-5 bg-warning-subtle border'>Book Scooter</button>
      </div>
    </div>
  </div>
</nav>
        </>
    )
}
 export default Header