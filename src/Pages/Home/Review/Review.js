import React from 'react';

const Review = () => {
    return (
        <div style={{background:'#037021'}} classNameName="container py-5">
        <h4 className="py-2 pt-4 text-center text-warning">Review & Details</h4>
        <div  className="row  py-5  w-100 g-2 ">
            <div className="col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-secondary border-info mx-sm-1 p-3">
                    <div className="bg-secondary card border-info shadow text-info p-3 my-card"><span className="text-center"
                            aria-hidden="true">📘</span></div>
                    <div className="text-info text-center mt-3">
                        <h4>Read</h4>
                    </div>
                    <div className="text-info text-center mt-2">
                        <h1>234K</h1>
                    </div>
                </div>
            </div>
            <div className="   col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-warning border-secondary mx-sm-1 p-3">
                    <div className="card  bg-warning border-secondary shadow text-dark p-3 my-card"><span className="text-center"
                            aria-hidden="true">👁️</span></div>
                    <div className="text-dark text-center mt-3">
                        <h4>Eyes</h4>
                    </div>
                    <div className="text-dark text-center mt-2">
                        <h1>932M</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-danger border-warning mx-sm-1 p-3">
                    <div className="bg-danger text-light card border-warning shadow text-danger p-3 my-card"><span className="text-center"
                            aria-hidden="true">❤️</span></div>
                    <div className="text-danger text-center mt-3">
                        <h4 className="text-light">Hearts</h4>
                    </div>
                    <div className="text-danger text-center mt-2">
                        <h1 className="text-light">346M</h1>
                    </div>
                </div>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-3">
                <div className="card bg-primary border-warning mx-sm-1 p-3">
                    <div className="card bg-primary border-warning shadow text-warning p-3 my-card"><span className="text-center"
                            aria-hidden="true">📨</span></div>
                    <div className="text-warning text-center mt-3">
                        <h4>Inbox</h4>
                    </div>
                    <div className="text-warning text-center mt-2">
                        <h1>346M</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default Review;