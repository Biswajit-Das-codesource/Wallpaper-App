

function Navbar()
{
  return(
    <>
<nav class="navbar navbar-expand-lg bg-body-tertiary text-black">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Webby</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active text-black" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">Pricing</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>


  )
  
}
export default Navbar;