import { useState } from "react";

const Years = () => {

    const options = [];
    const year = new Date().getFullYear();

    const [selectedYear, setSelectedYear] = useState(year);

    const years = Array.from(new Array(20),( val, index) => year - index);

    const selectionHandler = (selection) => {
        setSelectedYear(selection.target.value);
        console.log(selectedYear);
    }

    //Iterate over the years array and create a list of options for the menu 
    years.forEach(function (year, index){
        options.push(<option onChange={selectionHandler} key={year} value={year}>{year}</option>);
       });

       return options;
}

export default Years;