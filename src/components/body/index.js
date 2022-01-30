import React from 'react';
import './section.css'
import onhead from '../../assets/onheader.png'
import bodyimg from '../../assets/header1.png'


export default function Section() {
    return (
        <div className="box">
            <div className="container my-5 px-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="jumbotron">
                            <h1 className="D-1">
                                Search for Homes in your Neighborhood
                            </h1>
                            <p className="D-2">
                                Online Estate Agency, the modern way to sell your own home. You
                                can use griffin residential to market your property.
                            </p>
                            <p className="lead">
                                <div className="d-flex">
                                    <div>
                                        <label className="form-label">Address</label>
                                        <input
                                            type="text"
                                            className="form-control me-5 "
                                            placeholder="587 Bridgeton Road"
                                        />
                                    </div>
                                    <div>
                                        <label className="form-label">City</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="El Paso, Texas"
                                        />
                                    </div>
                                    <div className="btn-1">
                                        <button type="button" class="btn-1-inside btn btn-primary">
                                            Search
                                        </button>
                                    </div>
                                </div>
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6 col-sm-6">
                        <img className='onhead' src={onhead} alt="no-img" />
                        <img className='bodyimg' src={bodyimg} alt="no-img" />
                    </div>

                </div>
            </div>

        </div>







    )

}
