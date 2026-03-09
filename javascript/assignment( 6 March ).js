const students = [
 { name: "Aman", marks: 85, subject: "Math" },
 { name: "Riya", marks: 42, subject: "Science" },
 { name: "Kabir", marks: 67, subject: "Math" },
 { name: "Sneha", marks: 91, subject: "English" },
 { name: "Arjun", marks: 38, subject: "Science" },
 { name: "Meera", marks: 74, subject: "Math" },
 { name: "Rohan", marks: 59, subject: "English" },
 { name: "Diya", marks: 88, subject: "Science" },
 { name: "Kunal", marks: 46, subject: "Math" },
 { name: "Isha", marks: 95, subject: "English" }
];

const result=students.reduce((ans,student)=>{
    if(student.marks>=50){
        ans.pass++;
    }else{
        ans.fail++;
    }
    return ans;
},{pass:0,fail:0});

console.log(result);
