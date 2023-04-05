import React from 'react'
import img1 from '../assets/mainimg.png'
import img2 from '../assets/akash.png'
import img3 from '../assets/nikhil.png'
import img4 from '../assets/vishnu.png'
export default function Concerts() {
  return (
    <div> <div className="mainimg" > 
    <img src={img1} alt="" style={{height:"60vh",width:"100vw"}}/> 
    </div> 
    <div className="concerts" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"30px",justifyContent:"space-between"}}> 
    <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)",padding:"5px"}}> 
    <img src={img3} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
    <div> <h3>Singer-Kiran</h3> 
    <h4>Venue-Uppal grounds</h4>
     <h5>Price-999/-</h5>
      </div>
       </div>
        <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)",padding:"5px"}}>
             <img src={img2} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> <div>
                 <h3 className="card-title">Singer-Akash</h3> <h4 className='card-subtitle'>Venue-Parade Grounds</h4> 
                 <h5 className='card-text'>Price-1799/-</h5> </div> </div> 
                 <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)"}}>
                     <img src={img4} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px",padding:"5px"}}/> 
                     <div> <h3 className='card-title'>Singer-Vishnu</h3> <h4 className='card-subtitle'>Venue-Madhapur</h4> <h5 className='card-text'>Price-1149/-</h5> </div> </div> 
                     <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)",padding:"5px"}}> 
                     <img src={img2} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
                     <div> <h3 className='card-title'>Singer-Prashanth</h3> <h4 className='card-subtitle'>Venue-Raidurg</h4> <h5 className='card-text'>Price-1149/-</h5> </div> </div>
                      <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)",padding:"5px"}}>
                         <img src={img3} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
                         <div> 
                            <h3 className='card-title'>Singer-Nikhil</h3> 
                            <h4 className='card-subtitle'>Venue-Paradise</h4> 
                         <h5 className='card-text'>Price-999/-</h5>
                          </div> 
                          </div> 
    </div> 
    </div>
    
  )
}
