import React from 'react'
import Sectioncard from './Sectioncard'

function OurTeam() {
  return (
    <>
      <div className="container text-center my-3" style={{paddingTop:70}}>
      <span className="card-title mean-title text-danger fs-5">Our Team</span>
      <h2 className=" fw-bolder mb-3 mt-2 mb-4 fs-1">Meet Our Team</h2>
      <div className="d-flex justify-content-center gap-4 flex-wrap">
        <Sectioncard img="src/assets/member-1.png"  name="Cathy Aenderson"  title="Chief Executive" />
        <Sectioncard img="src/assets/member-2.png"  name="Mike Dooley"  title="Executive" />
        <Sectioncard img="src/assets/member-3.png"  name="Alextina Jimiey"  title="Food Inspector" />
      </div>
      </div>
    </>
  )
}

export default OurTeam
