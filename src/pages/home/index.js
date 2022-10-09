import React from "react";
import './styles.scss';

const Home = props => {
    return(
        <div className="main-wrapper">
            <div className="content-wrapper">
                <div className="title-wrapper">
                    <p className="title-text">
                        Salary Discount Calculator
                    </p>
                </div>
                <div className="form-wrapper">
                    <form className="form">
                        <p className="form-title-text">
                            Input
                        </p>
                        <p className="form-field validation-required">
                            <label for="salary-input">
                                Monthly Salary (in DOP)
                                <abbr title="Required" className="required">*</abbr>
                            </label>
                            <br/>
                            <span className="salary-span">
                                <input id="salary-input" placeholder="Monthly Salary" className="form-input" type="number">
                                </input>
                            </span>
                        </p>
                        <br/>
                        <p className="form-field">
                            <label for="bonifications-input">
                                Bonifications (in DOP)
                            </label>
                            <br/>
                            <span className="bonifications-span">
                                <input id="bonifications-input" placeholder="Bonifications" className="form-input" type="number">
                                </input>
                            </span>
                        </p>
                        <br/>
                        <p className="form-field">
                            <label for="extra-hours-input">
                                Extra hours (in DOP)
                            </label>
                            <br/>
                            <span className="extra-hours-span">
                                <input id="extra-hours-input" placeholder="Extra hours" className="form-input" type="number">
                                </input>
                            </span>
                        </p>
                        <br/>
                        <button className="calculate-button" type="submit">
                            Calculate
                        </button>
                    </form>
                </div>
                <div className="results-wrapper">
                    <p className="results-title-text">
                        Results:
                    </p>
                    <div className="results-content-wrapper">
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                AFP:
                            </p>
                            <p className="results-content-text">
                                result 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Health Insurance (SFS): 
                            </p>
                            <p className="results-content-text">
                                result 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Taxes: 
                            </p>
                            <p className="results-content-text">
                                result 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Total discount:  
                            </p>
                            <p className="results-content-text">
                                result 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Monthly net salary:  
                            </p>
                            <p className="results-content-text">
                                result 
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;