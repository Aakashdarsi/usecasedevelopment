import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function MainStructure() {
    const navigate = useNavigate()
    const concertsHandler = () =>
    {
        navigate("/concerts")
    }
    const sportsHandler = () =>
    {
        navigate("/sports")
    }
    return (
        <div className='my-2'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2" style={{ borderColor: "black", borderStyle: "solid", borderWidth: "3px", borderLeft: "0px", borderTop: "0px", borderBottom: "0px", padding: "5px" }}>
                        <div className='my-2'>
                            <div>
                                <input type="search" className='form-control ' placeholder='Search For Events' style={{ borderWidth: "1px", borderStyle: "dashed", borderColor: "bla" }} />
                            </div>
                            <div className='d-flex flex-row justify-content-left my-2'>
                                <button className='btn btn-secondary' style={{ width: "100px" }} onClick={concertsHandler}>Concerts</button>
                            </div>
                            <div className='d-flex flex-row justify-content-left my-2'>
                                <button className='btn btn-secondary' style={{ width: "100px" }} onClick={sportsHandler}>Sports</button>

                            </div>
                        </div>

                    </div>
                    <div className="col-10">
                        <div className="container-fluid">
                        <div className="row">
                                <div className="col-12 d-flex flex-row justify-content-end" >
                                    
                                    <select name="" id="fs" className='form-select' style={{width:"15vw",marginLeft:"10px"}} defaultValue={"Sort By"}>
                                        <option>Sort By</option>
                                        <option value="">......</option>
                                        <option value="From Low To High">Price - From Low To High</option>
                                        <option value="From High to Low">Price - From High to Low</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row my-1">
                                <div className="col-12">
                                    <div>
                                        <div id="carouselExampleIndicators" className="carousel slide">
                                            <div className="carousel-indicators">
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                            </div>
                                            <div className="carousel-inner">
                                                <div className="carousel-item active">
                                                    <img src="https://i0.wp.com/sunburn.in/wp-content/uploads/2023/02/website-1.jpg" className="d-block w-100" alt="..." style={{height:"40vh"}}/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://t3.ftcdn.net/jpg/01/97/33/46/360_F_197334647_aClfAIrrc0RPrsC8V52RN4MkzNmQCysc.jpg" className="d-block w-100" alt="..." style={{height:"40vh"}}/>
                                                </div>
                                                <div className="carousel-item">
                                                    <img src="https://i.pinimg.com/originals/74/5d/7b/745d7ba76e57de33f2bd8f34820c4f34.png" className="d-block w-100" alt="..." style={{height:"40vh"}}/>
                                                </div>
                                            </div>
                                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Previous</span>
                                            </button>
                                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                                <span className="visually-hidden">Next</span>
                                            </button>
                                        </div>

                                    </div>


                                </div>
                               
                               
                            </div>
                            
                            <div className="row d-flex flex-row my-2">
                                <div className="col-4">
                                <div className="card" style={{ width: "18rem",height:"60vh" }}>
                                            <img src="https://inc42.com/wp-content/uploads/2022/03/Feature-Indian-Cricket-.png" className="card-img-top" alt="..."  style={{height:"30vh"}}/>
                                            <div className="card-body">
                                                <h5 className="card-title">Cricket</h5>
                                                <p className="card-text">Come meet us at LB stadium at 5pm on April-8!!</p>
                                                <a href="#" className="btn btn-primary">Check on</a>
                                            </div>
                                        </div>
                                    

                                </div>
                                <div className="col-4">
                                <div className="card" style={{ width: "18rem" }}>
                                            <img src="https://cdn.pixabay.com/photo/2018/05/10/11/34/concert-3387324__340.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Musical Concert</h5>
                                                <p className="card-text">Hey guys! Welcome to Fleagram.. Let us meet on April 9th at N convention, Madhapur </p>
                                                <a href="#" className="btn btn-primary">Check on</a>
                                            </div>
                                        </div>

                                </div>
                                <div className="col-4">
                                <div className="card" style={{ width: "18rem" }}>
                                            <img src="https://rare-gallery.com/uploads/posts/503426-band-concert.jpg" className="card-img-top" alt="..." />
                                            <div className="card-body">
                                                <h5 className="card-title">Concert</h5>
                                                <p className="card-text">Lets connect at Jubilee Hills for a musical concert on 10th April!</p>
                                                <a href="#" className="btn btn-primary">Check on</a>
                                            </div>
                                        </div>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
