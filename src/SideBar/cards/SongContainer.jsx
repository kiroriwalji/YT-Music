import React from 'react'

function SongContainer() {
  // song1 = "https://www.google.com/imgres?q=your%20eyes%20song%20download&imgurl=https%3A%2F%2Fsource.boomplaymusic.com%2Fgroup10%2FM00%2F04%2F12%2Fc6ac7ce1aa0f45ac984194a93994b3ec_464_464.jpg&imgrefurl=https%3A%2F%2Fwww.boomplay.com%2Fsongs%2F60271550&docid=GTXqehwdw8otmM&tbnid=lJIoWAbfjeE29M&vet=12ahUKEwjMkdmfqJCHAxWriK8BHUe9CWUQM3oECBgQAA..i&w=464&h=464&hcb=2&ved=2ahUKEwjMkdmfqJCHAxWriK8BHUe9CWUQM3oECBgQAA"
  return (
    <>
    
    <div className="hero-section-list-song-container">
                  <div className="hero-section-list-song-img">
                    {/* <img src={song1} alt="" /> */}
                  </div>
                  <div className="hero-section-list-song-name">
                    <p id="s-name">
                      <span>Name</span>
                    </p>
                    <p id="s-artist">
                      <span>Artist</span>
                    </p>
                  </div>

                </div>
    
    </>
  )
}

export default SongContainer