class Human {

    
}
let name="";
let job="";
let skills = [];

getJob=(job)=>{
    this.job=job;
}

learnNewSkill=(newSkill)=>{
    this.skills.push(newSkill);
}

forgetSkill=(skill)=>{
    index = array.indexOf(skill);
    if (index > -1) {
      array.splice(index, 1);
    }
}

leaveJob=()=>{
    this.job="unemployed";
}


    