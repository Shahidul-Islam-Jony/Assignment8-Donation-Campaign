
const getDataFromLS=()=>{
    const contentInString = localStorage.getItem('data');
    if(contentInString){
        return JSON.parse(contentInString);
    }
    return [];
}

const setDataInLS=(title)=>{
    const data = getDataFromLS();
    data.push(title);
    const dataInString = JSON.stringify(data);
    localStorage.setItem("data",dataInString);
}

export {getDataFromLS,setDataInLS}