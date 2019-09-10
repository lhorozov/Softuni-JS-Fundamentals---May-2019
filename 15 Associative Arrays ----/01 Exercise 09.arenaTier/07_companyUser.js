function companyUser(input) {
    let companyInfo = {};//ok
    for (let line of input) { //ok
        let splitted = line.split(" -> "); //ok
        let companyName = splitted[0]; //ok
        let id = splitted[1]; //ok

        if (!companyInfo.hasOwnProperty(companyName)) { //ok
            companyInfo[companyName] = []; //=[]
            
        } 
        if (!companyInfo[companyName].includes(id)) {
            companyInfo[companyName].push(id)
        }
    }
    
    let sortedCompanyInfo = Object.entries(companyInfo).sort((a, b) => a[0].localeCompare(b[0]));
    
    for (let company of sortedCompanyInfo) {
        console.log(`${company[0]}`);
        let employeesArr = company[1];
        for (let employee of employeesArr) {
            console.log(`-- ${employee}`);
        }
    }    
}
companyUser([ 'SoftUni -> AA12345',
'SoftUni -> BB12345',
'SoftUni -> BB12345',
'SoftUni -> BB12345',
'Microsoft -> CC12345',
'HP -> BB12345' ]
    );