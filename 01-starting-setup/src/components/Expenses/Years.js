const Years = (props) => {

    const options = [];


    const year = new Date().getFullYear();
    const years = Array.from(new Array(20),( val, index) => year - index);
    //Iterate over the years array and create a list of options for the menu 
    years.forEach(function (year, index){
        options.push(<option key={year} value={year}>{year}</option>);
       });

       return options;
}

export default Years;