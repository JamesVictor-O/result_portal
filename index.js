// collectting information from the admin section
const studentAdmNo = document.querySelector('.studentAdmNo');
const studentExamYear = document.querySelector('.studentExamYear')
const studentCourse = document.querySelector('.courseOfferd')
const studentScors = document.querySelector('.scors')
const submitButton = document.querySelector('.btn')
const registrationButton = document.querySelector(".regBtn");

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
    {
        name: "musa Ahamad baba",
        addmisionNo: "1310211019",
        dateOfBirth: "24-05-1995",
        program: "Diploma in Eletrical Enginneering",
        batch: " Dec 3. 2020/3rd",
       
    },
]

let storedStudentDatabase=localStorage.setItem('studentDataBase',JSON.stringify(studentDataBase))
let studentData = localStorage.getItem("database");

function AdminSubmitResult() {
    let retrivedStudentData = JSON.parse(studentData)
    submitButton.addEventListener('click', () => {
        let studentAdmissionNumber = studentAdmNo.value;
        let gradingCourse = studentCourse.value;
        let courseGrade = studentScors.value;
        
        // itrating through the student record to search for the person whos is been graded
        for (let i = 0; i < studentDataBase.length; i++){
            if (retrivedStudentData[i].addmisionNo === studentAdmissionNumber) {
                let courseList=retrivedStudentData[i].courses
                for (let i = 0; i < 10; i++){
                    if (courseList.hasOwnProperty(gradingCourse)) {
                        courseList[gradingCourse] = courseGrade
                        localStorage.setItem('database', JSON.stringify(studentDataBase))
                    } else {
                        console.log("no")
                    }
                }
            } 
        }
        DisplayResult()
        // let storedDatabase = localStorage.getItem("database");
        // parsedDatabase = JSON.parse(storedDatabase)
        // console.log(parsedDatabase)
        console.log(retrivedStudentData)
    })
}
AdminSubmitResult()


function DisplayResult() {
    let retrivedStudentData = JSON.parse(studentData)
    let listOfCourse = "";
    // geting the list of course for a particular student you logged in
    for (let i = 0; i < 3; i++){
        if (retrivedStudentData[i].addmisionNo === adminNo) {
            listOfCourse=retrivedStudentData[i].courses
        }
    }

    let table = document.querySelector(".table")
    let rows = table.getElementsByTagName("tr");
    for (let i = 1; i < rows.length; i++){
        let courseCode = rows[i].querySelector('.course').textContent;
        let gradeCell = rows[i].querySelector('.grade')
        const Scors = listOfCourse[courseCode]
        gradeCell.textContent = Scors
         localStorage.setItem('database', JSON.stringify(studentDataBase))
        
    }
}
DisplayResult

function RegisterStudent() {
    let retrivedStudentData = JSON.parse(studentData)
    registrationButton.addEventListener("click", () => {
        let studntName=document.querySelector('.regName').value
        let studntRegno=document.querySelector('.regNo').value
        let studntDateOfbirth=document.querySelector('.regDateofBirth').value
        let studntProgram=document.querySelector('.regProgram').value
        let studntBatch = document.querySelector('.regBatch').value
        
        let studentInfo={

        }
        studentInfo.name = studntName;
        studentInfo.addmisionNo = studntRegno;
        studentInfo.dateOfBirth = studntDateOfbirth;
        studentInfo.program = studntProgram;
        studentInfo.batch = studntBatch;
        retrivedStudentData.push(studentInfo)
        localStorage.setItem('database', JSON.stringify(studentDataBase))
    })
}

RegisterStudent()

function CourseRegistration() {
    let courses = {
      
  }
    let selectedCourses = document.querySelectorAll(".selectedCourse")
    selectedCourses.forEach(courseSelected => {
        courseSelected.addEventListener("click", () => {
            const courseCode = courseSelected.parentElement.previousSibling.nextSibling.nextSibling.nextSibling.innerHTML;
            courses[courseCode] = ""
            console.log(courses)
        })
    })
    SubmitCouresRegisterd(courses)
}

CourseRegistration()

function SubmitCouresRegisterd(cour) {
    
    let submitButton = document.querySelector(".courseBtn");
    submitButton.addEventListener("click", () => {
        for (let i = 0; i < retrivedStudentData.length; i++){
            if (retrivedStudentData[i].addmisionNo === '1310211019') {
                retrivedStudentData[i].courses = cour;
            }
        }
        console.log(retrivedStudentData)
    })
    localStorage.setItem('database', JSON.stringify(studentDataBase))
}