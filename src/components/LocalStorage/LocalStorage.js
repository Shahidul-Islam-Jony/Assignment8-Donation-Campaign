
const getDataFromLS=()=>{
    const contentInString = localStorage.getItem('data');
    if(contentInString){
        return JSON.parse(contentInString);
    }
    return [];
}

const setDataInLS=(category)=>{
    const data = getDataFromLS();
    data.push(category);
    const dataInString = JSON.stringify(data);
    localStorage.setItem("data",dataInString);
}

export {getDataFromLS,setDataInLS}