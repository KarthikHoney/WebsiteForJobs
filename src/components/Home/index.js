import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <div className="home-container">
      <Header />

      <div className="head-para-but">
        <h1 className="home-heading">
          Find The Job That <br /> Fits Your Life
        </h1>
        <p className="home-para">
          Millions of people are searching for job <br /> that are very clear
          and
          <br /> they find jobs and work in it for several time
        </p>
        <button type="button" className="jobs-button">
          <Link to="/jobs" className="but-color">
            Find Jobs
          </Link>
        </button>
      </div>
    </div>
  </>
)
export default Home
