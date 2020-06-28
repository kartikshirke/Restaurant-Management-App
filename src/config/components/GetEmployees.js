import React from 'react';
import data from '../config/data.json'

const burgerList = data.Users;
let result = burgerList.map(s => s.name);

const currentDay = () => {
    let d = new Date();
    let daysOfWeek = d.getDay();
    switch (daysOfWeek) {
        case 0: return (`${result[0]}, ${result[1]}`)
        case 1: return (`${result}`)
        case 2: return (`${result}`)
        case 3: return (`${result[0]}, ${result[1]}`)
        case 4: return (`${result[0]}, ${result[1]}, ${result[2]}`)
        case 5: return (`${result}`)
        case 6: return (`${result}`)
        case 7: return (`${result}`)
        default: return 'No result'
    }
}

const GetEmployees = ()=>{
    
        return (
            <div className="container">

                <div className="panel panel-default">
                    <div className="panel-body"><b>Today's onDuty Employees:</b>
                        <ul className="employee-text"><li>{currentDay()}</li></ul>
                    </div>
                </div>
            </div>

        );
    }

export default GetEmployees;