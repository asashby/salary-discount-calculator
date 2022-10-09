import React, { useState, useEffect } from "react";
import './styles.scss';

const Home = props => {
    const [monthlySalary, setMonthlySalary] = useState('');
    const [bonifications, setBonifications] = useState('');
    const [extraHours, setExtraHours] = useState('');
    const [afpTotal, setAfpTotal] = useState('');
    const [healthInsuranceTotal, setHealthInsuranceTotal] = useState('');
    const [taxesTotal, setTaxesTotal] = useState('');
    const [totalDiscount, setTotalDiscount] = useState('');
    const [netSalary, setNetSalary] = useState('');
    const [totalRawSalary, setTotalRawSalary] = useState('');

    const handleFormSubmit = event => {
        event.preventDefault();

        calcAfpAndHealthInsurance();

        calcTaxes();
    }

    const calcAfpAndHealthInsurance = () => {
        let afpTotalCalc = (parseFloat(monthlySalary) + parseFloat(bonifications)) * 0.0304;
        let healthInsuranceTotalCalc = (parseFloat(monthlySalary) + parseFloat(bonifications)) * 0.0287;

        if(afpTotalCalc > 4742.40){
            afpTotalCalc = 4742.40;
        }

        if(healthInsuranceTotalCalc > 8954.40){
            healthInsuranceTotalCalc = 8954.40;
        }

        setAfpTotal(afpTotalCalc);
        setHealthInsuranceTotal(healthInsuranceTotalCalc);
    }

    const calcTaxes = () => {
        let rawSalary = parseFloat(monthlySalary) + parseFloat(bonifications);
        let initialDiscount = (rawSalary * 0.0304) + (rawSalary * 0.0287);
        let netSalaryIncludingTaxes = (rawSalary + parseFloat(extraHours)) - initialDiscount;

        netSalaryIncludingTaxes = netSalaryIncludingTaxes * 12;

        setTotalRawSalary(rawSalary + parseFloat(extraHours));

        if(netSalaryIncludingTaxes <= 416220.00){
            setTaxesTotal(0);
            setTotalDiscount(initialDiscount);
            setNetSalary(netSalaryIncludingTaxes / 12);

            console.log(afpTotal + " " + healthInsuranceTotal);
        } else if (netSalaryIncludingTaxes > 416220.00 && netSalaryIncludingTaxes <= 624329.00) {
            let surplusPercent = ((netSalaryIncludingTaxes - 416220.01) * 0.15) / 12;

            setTaxesTotal(surplusPercent);
            setTotalDiscount(initialDiscount + surplusPercent);
            setNetSalary((netSalaryIncludingTaxes / 12) - surplusPercent);

        } else if (netSalaryIncludingTaxes > 624329.00 && netSalaryIncludingTaxes <= 867123.00) {
            let surplusPercent = ((netSalaryIncludingTaxes - 624329.01) * 0.20) / 12 + (31216.00 / 12);

            setTaxesTotal(surplusPercent);
            setTotalDiscount(initialDiscount + surplusPercent);
            setNetSalary((netSalaryIncludingTaxes / 12) - surplusPercent);

        } else if (netSalaryIncludingTaxes > 867123.00) {
            let surplusPercent = ((netSalaryIncludingTaxes - 867123.01) * 0.25) / 12 + (79776.00 / 12);

            setTaxesTotal(surplusPercent);
            setTotalDiscount(initialDiscount + surplusPercent);
            setNetSalary((netSalaryIncludingTaxes / 12) - surplusPercent);

        } else {
            console.log("Cantidad invalida");
        }
    }

    return(
        <div className="main-wrapper">
            <div className="content-wrapper">
                <div className="title-wrapper">
                    <p className="title-text">
                        Salary Discount Calculator
                    </p>
                </div>
                <div className="form-wrapper">
                    <form className="form" onSubmit={handleFormSubmit}>
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
                                <input 
                                    id="salary-input" 
                                    value={monthlySalary} 
                                    placeholder="Monthly Salary" 
                                    className="form-input" 
                                    type="number"
                                    onChange={e => setMonthlySalary(e.target.value)}>
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
                                <input 
                                    id="bonifications-input" 
                                    value={bonifications} 
                                    placeholder="Bonifications" 
                                    className="form-input" 
                                    type="number"
                                    onChange={e => setBonifications(e.target.value)}>
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
                                <input 
                                    id="extra-hours-input" 
                                    value={extraHours} 
                                    placeholder="Extra hours" 
                                    className="form-input" 
                                    type="number"
                                    onChange={e => setExtraHours(e.target.value)}>
                                </input>
                            </span>
                        </p>
                        <br/>
                        <button 
                            className="calculate-button" 
                            type="submit">
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
                                Monthly raw income:
                            </p>
                            <p className="results-content-text">
                                ${totalRawSalary ? totalRawSalary.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0.00.toFixed(2)} 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                AFP:
                            </p>
                            <p className="results-content-text">
                                ${afpTotal ? afpTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0.00.toFixed(2)} 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Health Insurance (SFS): 
                            </p>
                            <p className="results-content-text">
                                ${healthInsuranceTotal ? healthInsuranceTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0.00.toFixed(2)} 
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Taxes: 
                            </p>
                            <p className="results-content-text">
                                ${taxesTotal ? taxesTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0.00.toFixed(2)}
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Total discount:  
                            </p>
                            <p className="results-content-text">
                                ${totalDiscount ? (totalDiscount.toFixed(2)).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0.00.toFixed(2)}
                            </p>
                        </div>
                        <div className="results-content-row">
                            <p className="results-content-text bold">
                                Monthly net salary:  
                            </p>
                            <p className="results-content-text">
                                ${netSalary ? netSalary.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') : 0.00.toFixed(2)}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;