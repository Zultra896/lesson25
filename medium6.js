function med6(students) {
    let topStudents = []
    
    for (let i = 0; i < students.length; i++) {
        if (students[i].averageGrade > 70) {
            topStudents.push(students[i].name)
        }
    }

    return topStudents
}
  

const students = [
    { name: 'Sergey', age: 22 , averageGrade: 85 },
    { name: 'Bob', age: 17 , averageGrade: 65 },
    { name: 'Oleg', age: 16 , averageGrade: 95 },
    { name: 'David', age: 20 , averageGrade: 70 },
    { name: 'Vlad', age: 35 , averageGrade: 88 }
]
  
  console.log(med6(students))