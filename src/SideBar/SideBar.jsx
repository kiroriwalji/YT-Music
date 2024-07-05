import React from 'react'
import './SideBar.css'
import SongContainer from './cards/SongContainer'
// import user from './assets/user.png'
// import user from './user.png';

function SignUp() {
  return (
    <>
      <div className="hero-container">
        <div className="side">
          <div className="side-1">
            <div className="side-b">
              <div className="side-b-logo">
                <i class="fa-solid fa-house"></i>
              </div>
              <div className="side-b-name">
                <h1>Home</h1>
              </div>
            </div>
          </div>

          <div className="side-1">
            <div className="side-b">
              <div className="side-b-logo">
                <i class="fa-solid fa-compass"></i>
              </div>
              <div className="side-b-name">
                <h1>Explore</h1>
              </div>
            </div>
          </div>

          <div className="side-1">
            <div className="side-b">
              <div className="side-b-logo">
                <i class="fa-solid fa-music"></i>
              </div>
              <div className="side-b-name">
                <h1>library</h1>
              </div>
            </div>
          </div>

          <div className="side-1" id='side-1-bottom'>
            <div className="side-b">
              <div className="side-b-logo">
                <i class="fa-solid fa-upload"></i>
              </div>
              <div className="side-b-name">
                <h1>Upgrade</h1>
              </div>
            </div>
          </div>

          <div className="side-playlist">
            <div className="side-playlist-name">
              <i class="fa-solid fa-plus"></i>
              <h6>New Playlist</h6>
            </div>
            <div className="playlist-liked">
              <i class="fa-solid fa-heart"></i>
              <h6>Liked Songs</h6>
            </div>
          </div>
        </div>
        {/* /////////////////////////////////////////////// */}

        <div className="mid-container">
          <div className="mid-container-mid">
            <div className="mid-geners">
              <ul className="mid-gen">
                <li>Feel Good</li>
                <li>Romance</li>
                <li>Podcast</li>
                <li>Relax</li>
                <li>Energize</li>
                <li>Party</li>
                <li>Commute</li>
                <li>Workout</li>
                <li>Sad</li>
                <li>Focus</li>
                <li>Sleep</li>
              </ul>
            </div>
            <div className="hero-section-rec">
              <div className="hero-main-heading-box">
                <div className="hero-section-rec-img">
                  {/* <img src={user} alt="" /> */}
                </div>
                <div className="hero-section-rec-text">
                  <p>User name</p>
                  <h1>Recently Listen</h1>
                </div>
              </div>
              <div className="hero-section-list-song">
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
                <SongContainer/>
              </div>
            </div>

          </div>
        </div>
      </div>


    </>
  )
}

export default SignUp