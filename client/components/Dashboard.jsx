export default function Dashboard() {
    return (
        <div>
          <h1>Welcome to Cohoard!</h1>
          <div id='navigation'> Unit Navigation </div>
          <div id='unitContainer'>
            <nav>
              <Link to='/Unit1'> Unit 1 </Link>
              <Link to='/Unit2'> Unit 2 </Link>
              <Link to='/Unit3'> Unit 3 </Link>
              <Link to='/Unit4'> Unit 4 </Link>
              <Link to='/Unit5'> Unit 5 </Link>
              <Link to='/Unit6'> Unit 6 </Link>
            </nav>

          </div>          
        </div>
    )
  }

<div className="unitContainer"></div>