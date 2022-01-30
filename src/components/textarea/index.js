import React from 'react';
import './textarea.css'
import crdimg1 from '../../assets/image-0.png'
import crdimg2 from '../../assets/image-1.png'
import crdimg3 from '../../assets/image-2.png'
import crdimg4 from '../../assets/image-3.png'
import bath from '../../assets/bath.png'
import bed from '../../assets/bed.png'
import heart from '../../assets/heart.png'

export default function Textarea() {
    return (


        <div>
            {/* top heading */}
            <div className="container my-5 px-5">
                <div className="row">
                    <div className="col-lg-5">
                        <div>
                            <p className="heading">Our trending latest proparty</p>
                        </div>
                        <div>
                            <p className="parahh ">
                                Our unique process gives you peace of mind from home rent to
                                services
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                    <div className="col-lg-5 al">
                        <form>
                            <div class="form-row align-items-center">
                                <select
                                    style={{ fontSize: "15px" }}
                                    class="custom-select "
                                    id="inlineFormCustomSelect"
                                >
                                    <option
                                        selected
                                        style={{ fontSize: "20px", color: "576B81" }}
                                    >
                                        Property Type
                                    </option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <button
                                    style={{ fontSize: "12px" }}
                                    type="submit"
                                    class="btn btn-sm btn-primary mx-4"
                                >
                                    See All Property
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* cards */}
            <div className="container px-5 ">
                <div className="row">
                    <div className="col-md-6 shadow-lg p-4">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={crdimg1} />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div
                                        style={{ fontSize: "10px" }}
                                        className="col-6 text-primary"
                                    >
                                        $400,000
                                    </div>
                                    <div className="col-6 text-primary d-flex justify-content-end">
                                        <img src={heart} height={12} width={12} />
                                    </div>
                                </div>
                                <h4>Case Alda</h4>
                                <p className="text-muted" style={{ fontSize: "8px" }}>
                                    Co Rd Tribune Tribune
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={bed} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 2 Bedroom</span>
                                    </div>
                                    <div className="col-8">
                                        <img src={bath} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 2 Bath</span>
                                    </div>
                                    <div>
                                        <button
                                            style={{ fontSize: "10px" }}
                                            type="button"
                                            class="btn btn-sm btn-primary"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6  shadow-lg  p-4">
                        <div className="row">
                            <div className="col-4 ">
                                <img className="img-fluid" src={crdimg2} />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div
                                        style={{ fontSize: "10px" }}
                                        className="col-6 text-primary"
                                    >
                                        $2290,000
                                    </div>
                                    <div className="col-6 text-primary d-flex justify-content-end">
                                        <img src={heart} height={12} width={12} />
                                    </div>
                                </div>
                                <h4>Langes Beach House</h4>
                                <p className="text-muted" style={{ fontSize: "8px" }}>
                                    375 Highland Ave NE UNIT 1002
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={bed} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 3 Bedroom</span>
                                    </div>
                                    <div className="col-8">
                                        <img src={bath} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 3 Bath</span>
                                    </div>
                                    <div>
                                        <button
                                            style={{ fontSize: "10px" }}
                                            type="button"
                                            class="btn btn-sm btn-primary"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-5 ">
                <div className="row">
                    <div className="col-md-6 shadow-lg p-4">
                        <div className="row">
                            <div className="col-4">
                                <img className="img-fluid" src={crdimg3} />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div
                                        style={{ fontSize: "10px" }}
                                        className="col-6 text-primary"
                                    >
                                        $289,000
                                    </div>
                                    <div className="col-6 text-primary d-flex justify-content-end">
                                        <img src={heart} height={12} width={12} />
                                    </div>
                                </div>
                                <h4>Supper Delax Home</h4>
                                <p className="text-muted" style={{ fontSize: "8px" }}>
                                    C1398 Lynford Dr SW, Atlanta
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={bed} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 4 Bedroom</span>
                                    </div>
                                    <div className="col-8">
                                        <img src={bath} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 4 Bath</span>
                                    </div>
                                    <div>
                                        <button
                                            style={{ fontSize: "10px" }}
                                            type="button"
                                            class="btn btn-sm btn-primary"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6  shadow-lg p-4">
                        <div className="row">
                            <div className="col-4 ">
                                <img className="img-fluid" src={crdimg4} />
                            </div>
                            <div className="col-8 ">
                                <div className="row">
                                    <div
                                        style={{ fontSize: "10px" }}
                                        className="col-6 text-primary"
                                    >
                                        $400,000
                                    </div>
                                    <div className="col-6 text-primary d-flex justify-content-end">
                                        <img src={heart} height={12} width={12} />
                                    </div>
                                </div>
                                <h4>Clinton Villa</h4>
                                <p className="text-muted" style={{ fontSize: "8px" }}>
                                    675 Albert St NW, Atlanta
                                </p>
                                <div className="row">
                                    <div className="col-4">
                                        <img src={bed} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 5 Bedroom</span>
                                    </div>
                                    <div className="col-8">
                                        <img src={bath} height={10} width={10} />
                                        <span style={{ fontSize: "10px" }}> 5 Bath</span>
                                    </div>
                                    <div>
                                        <button
                                            style={{ fontSize: "10px" }}
                                            type="button"
                                            class="btn btn-sm btn-primary"
                                        >
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="col-6 text-primary d-flex justify-content-end">
                <h1>...</h1>
            </div>
        </div>
    );
}
