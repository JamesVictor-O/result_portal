// collectting information from the admin section
const studentAdmNo = document.querySelector('.studentAdmNo');
const studentExamYear = document.querySelector('.studentExamYear')
const studentCourse = document.querySelector('.course')
const studentScors = document.querySelector('.scors')
const submitButton = document.querySelector('.btn')

const studentDataBase = [
    {
        name: "james victor ochula",
        addmisionNo: "1310211016",
        dateOfBirth: "24-05-1995",
        program: "Diploma in Eletrical Enginneering",
        batch: " Dec 3. 2020/3rd",
        courses: {
            EMS101: "",
            CED101: "",
            EPG101: "",
            TDS101: "",
            BMS112: "",
            ESS113: "",
            EEM112: "",
            EMS102: "",
            EIS104: "",
            PAH104:""
        }
    },
    {
        name: "musa ahamed baba",
        addmisionNo: "1310211017",
        dateOfBirth: "24-05-1995",
        program: "Diploma in Eletrical Enginneering",
        batch: " Dec 3. 2020/3rd",
        courses: {
            EMS101: "",
            CED101: "",
            EPG101: "",
            TDS101: "",
            BMS112: "",
            ESS113: "",
            EEM112: "",
            EMS102: "",
            EIS104: "",
            PAH104:""
        }
    },
    {
        name: "musa Ahamad baba",
        addmisionNo: "1310211018",
        dateOfBirth: "24-05-1995",
        program: "Diploma in Eletrical Enginneering",
        batch: " Dec 3. 2020/3rd",
        courses: {
            EMS101: "",
            CED101: "",
            EPG101: "",
            TDS101: "",
            BMS112: "",
            ESS113: "",
            EEM112: "",
            EMS102: "",
            EIS104: "",
            PAH104:""
        }
    },
]

let storedStudentDatabase=localStorage.setItem('studentDataBase',JSON.stringify(studentDataBase))


function CollectStudentScorse() {
    AdminSubmitResult()
    let parsedDatabase = studentDataBase
    let allGrades = document.querySelectorAll(".grade")
    for (let i = 0; i)
    console.log(allGrades)
    
}

CollectStudentScorse()


function AdminSubmitResult() {
    submitButton.addEventListener('click', () => {
        let studentAdmissionNumber = studentAdmNo.value;
        let gradingCourse = studentCourse.value;
        let courseGrade = studentScors.value;
        
        // itrating through the student record to search for the person whos is been graded
        for (let i = 0; i < studentDataBase.length; i++){
            if (studentDataBase[i].addmisionNo === studentAdmissionNumber) {
                let courseList=studentDataBase[i].courses
                for (let i = 0; i < 10; i++){
                    if (courseList.hasOwnProperty(gradingCourse)) {
                        courseList[gradingCourse] = courseGrade
                        localStorage.setItem('database', JSON.stringify(studentDataBase))
                    } else {
                        console.log("no")
                    }
                }
                // studentDataBase[i].courses[gradingCourse] = courseGrade;
                console.log( studentDataBase[i])
                
            }
        }
        let storedDatabase = localStorage.getItem("database");
        parsedDatabase = JSON.parse(storedDatabase)
        console.log(parsedDatabase)
    })
}