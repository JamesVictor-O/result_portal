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
            CED101: "68",
            EPG101: "",
            TDS101: "56",
            BMS112: "",
            ESS113: "",
            EEM112: "40",
            EMS102: "",
            EIS104: "",
            PAH104:""
        }
    },
    {
        name: "musa ahamed baba",
        addmisionNo: "1310211017",
        dateOfBirth: "24-04-2000",
        program: "Diploma in computer Enginneering",
        batch: " jan 5. 2020/3rd",
        courses: {
            EMS101: "",
            CED101: "60",
            EPG101: "",
            TDS101: "",
            BMS112: "45",
            ESS113: "",
            EEM112: "",
            EMS102: "",
            EIS104: "",
            PAH104:""
        }
    },
    {
        name: "Chigozi samule",
        addmisionNo: "1310211018",
        dateOfBirth: "24-05-2017",
        program: "Diploma in Mechanical Enginneering",
        batch: " oct 3. 2020/3rd",
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

localStorage.setItem('database',JSON.stringify(studentDataBase))

function AdminGradingStudent() {
    let studentData = localStorage.getItem("database");
    let retrivedStudentData = JSON.parse(studentData)
    submitButton.addEventListener('click', () => {
        let studentAdmissionNumber = studentAdmNo.value;
        let gradingCourse = studentCourse.value;
        let courseGrade = studentScors.value;
        
        // itrating through the student record to search for the person who is been graded

        for (let i = 0; i < retrivedStudentData.length; i++){
            if (retrivedStudentData[i].addmisionNo === studentAdmissionNumber) {
                let courseList=retrivedStudentData[i].courses
                for (let i = 0; i < 10; i++){
                    if (courseList.hasOwnProperty(gradingCourse)) {
                        courseList[gradingCourse] = courseGrade
                        localStorage.setItem('database', JSON.stringify(studentDataBase))
                    } else {
                    }
                }
            } 
        }
        console.log(retrivedStudentData)
        DisplayResult()
         
    })
}
AdminGradingStudent()


function DisplayResult() {
    let studentData = localStorage.getItem("database");
    let retrivedStudentData = JSON.parse(studentData)
    const studentName = document.querySelector(".studentName")
    const studentAdmissonNumber = document.querySelector(".studentAdmissionNumber")
    const studentDate = document.querySelector(".studentDate")
    const studentProgram = document.querySelector(".studentProgram")
    const studentBatch = document.querySelector(".studentBatch")
    let listOfCourse;
    // geting the list of course for a particular student you logged in
    for (let i = 0; i < 4; i++){
        if (retrivedStudentData[i].addmisionNo === adminNo) {
            studentName.innerHTML=retrivedStudentData[i].name
            studentDate.innerHTML=retrivedStudentData[i].dateOfBirth
            studentProgram.innerHTML = retrivedStudentData[i].program
            studentAdmissonNumber.innerHTML=retrivedStudentData[i].addmisionNo

            // course list for the current admission number
            listOfCourse = retrivedStudentData[i].courses;
            localStorage.setItem('database', JSON.stringify(studentDataBase))

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
    console.log(listOfCourse)
}
DisplayResult()

function RegisterStudent() {
    let studentData = localStorage.getItem("database");
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
    let totalUnit=0;
    let courses = {}
    let selectedCourses = document.querySelectorAll(".selectedCourse")
    selectedCourses.forEach(courseSelected => {
        courseSelected.addEventListener("change", (e) => {
            const courseCode = courseSelected.parentElement.previousSibling.nextSibling.nextSibling.nextSibling.innerHTML;
            courses[courseCode] = "";
            const units = courseSelected.parentElement.previousSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.innerHTML
            const unitTotal=document.querySelector(".totalUnit")
            let courseUnite= parseFloat(units)
            if(e.target.checked){
                totalUnit += courseUnite
                unitTotal.textContent = totalUnit;
                const courseCode = courseSelected.parentElement.previousSibling.nextSibling.nextSibling.nextSibling.innerHTML;
                 courses[courseCode] = ""
            } else{
                totalUnit -= courseUnite
                unitTotal.textContent = totalUnit;
                delete courses[courseCode]
            }
        })
    })
    SubmitCouresRegisterd(courses)
}

CourseRegistration()

function SubmitCouresRegisterd(cour) {
    let studentData = localStorage.getItem("database");
    let retrivedStudentData = JSON.parse(studentData)
    let submitButton = document.querySelector(".courseBtn");
    let isFound=false
    submitButton.addEventListener("click", () => {
        for (let i = 0; i < retrivedStudentData.length; i++){
            if (retrivedStudentData[i].addmisionNo === '1310211019') {
                retrivedStudentData[i].courses = cour;
                isFound = true
                localStorage.setItem('database', JSON.stringify(studentDataBase))
            } 
        }
        if (!isFound) {
            console.log("no identity found")
        }
        console.log(retrivedStudentData)
    })
    // localStorage.setItem('database', JSON.stringify(studentDataBase))
}