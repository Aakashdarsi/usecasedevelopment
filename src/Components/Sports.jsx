import React from 'react'
import img1 from '../assets/image1.png'
import img2 from '../assets/image2.png'
import img3 from '../assets/image3.png'
import img4 from '../assets/image4.png'
import img5 from '../assets/image5.png'
import img6 from '../assets/image6.png'
function Sports() {
  return (
    <div> <div className="mainimg" > 
    <img src={img1} alt="" style={{height:"60vh",width:"100vw"}}/> 
    </div> 
    <div className="concerts" style={{display:"flex",flexDirection:"row",flexWrap:"wrap",margin:"30px",justifyContent:"space-between"}}> 
    <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)"}}> 
    <img src={img2} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
    <div> <h3>Cricket</h3> 
    <h4>Venue-Uppal grounds</h4>
     <h5>Price-999/-</h5>
      </div>
       </div>
        <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)"}}>
             <img src={img3} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> <div>
                 <h3>Football</h3> <h4>Venue-Parade Grounds</h4> 
                 <h5>Price-1799/-</h5> </div> </div> 
                 <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)"}}>
                     <img src={img4} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
                     <div> <h3>Volley Ball</h3> <h4>Venue-Madhapur</h4> <h5>Price-1149/-</h5> </div> </div> 
                     <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)"}}> 
                     <img src={img5} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
                     <div> <h3>Throwball</h3> <h4>Venue-Raidurg</h4> <h5>Price-1149/-</h5> </div> </div>
                      <div className="card" style={{height:"300px",width:"200px",borderRadius:"12px",border:"0.3px solid black",boxShadow:"0px 25px 50px -12px rgba(0,0,0,0.25)"}}>
                         <img src={img6} alt="img" style={{height:"40%",width:"95%",marginTop:"6px",borderRadius:"12px"}}/> 
                         <div> 
                            <h3>Basketball</h3> 
                            <h4>Venue-Paradise</h4> 
                         <h5>Price-999/-</h5>
                          </div> 
                          </div> 
    </div> 
    </div>
    
  )
}
export default Sports;

