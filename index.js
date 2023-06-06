// collectting information from the admin section
const studentAdmNo = document.querySelector('.studentAdmNo');
const studentExamYear = document.querySelector('.studentExamYear')
const studentCourse = document.querySelector('.courseOfferd')
const studentScors = document.querySelector('.scors')
const submitButton = document.querySelector('.btn')
let adminNo='1310211016'

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

    let storedDatabase = localStorage.getItem("database");
    let parsedDatabase = JSON.parse(storedDatabase)
    let listOfCourse=""
    for (let i = 0; i < 3; i++){
        if (parsedDatabase[i].addmisionNo === adminNo) {
            listOfCourse = parsedDatabase[i].courses
        }
    }
     
    let table = document.querySelector(".table");
    let rows = table.getElementsByTagName('tr')
    for (let i = 1; i < rows.length; i++){
        courseCode = rows[i].querySelector('.course').textContent;
        let gradeCell = rows[i].querySelector('.grade');
        const Scors=listOfCourse[courseCode]
        gradeCell.textContent=Scors
        console.log(Scors)
    }
    
    
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
                console.log( studentDataBase[i])
                
            } else {
                alert("there is no such student in our system")
                localStorage.setItem('database', JSON.stringify(studentDataBase))
            }
        }
        let storedDatabase = localStorage.getItem("database");
        parsedDatabase = JSON.parse(storedDatabase)
        console.log(parsedDatabase)
    })
}