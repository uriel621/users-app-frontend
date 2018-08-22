import React from 'react';
import { Link } from "react-router-dom";

const user_list = (props) => {
    return (
        <div className="row">
            { 
                props.users.map((user) => {          
                    return (
                        <div className="col-xs-12 col-sm-6 col-md-4" key={ user.id }>
                            <div className="image-flip" onTouchStart={ () => this.classList.toggle('hover') }>
                                <div className="mainflip">
                                    <div className="frontside">
                                        <div className="card">
                                            <div className="card-body text-center">
                                                <p><img height="128" width="128" className=" img-fluid" src={ user.image } alt="card image" /></p>
                                                <h4 className="card-title">{ user.name }</h4>
                                                <p className="card-text"><strong>Date joined:</strong> { user.joinDate }</p>
                                                <span style={{ "color":"white" }} className="btn btn-primary btn-sm"><i className="fa fa-user"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="backside">
                                        <div className="card">
                                            <div className="card-body text-center mt-4">
                                                <h4 className="card-title">{ user.username }</h4>                                    
                                                <div className="card-text">
                                                    <div>
                                                        <label><strong>Birthday:</strong></label> { user.birthday }
                                                    </div>
                                                    <div>
                                                        <label><strong>Email:</strong></label> { user.email }
                                                    </div>
                                                    <div>
                                                        <label><strong>Favorite Color:</strong></label> { user.favoriteColor }
                                                        <div>
                                                            <svg width="25" height="25">
                                                                <circle cx="12.5" cy="12.5" r="10" stroke="black" fill={ user.favoriteColor } />
                                                            </svg>
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                                <ul className="list-inline">
                                                    <Link to={ `update/${ user.username }` }><button style={{ "display":"inline-block", "width": "25%" }} className="list-inline-item btn btn-primary">Edit</button></Link>
                                                    <button style={{ "display":"inline-block", "width": "25%" }} onClick={ () => props.remove(user) } className="list-inline-item btn btn-warning">Remove</button>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>











                    )
                })
            }
        </div>
    )
}

export default user_list;