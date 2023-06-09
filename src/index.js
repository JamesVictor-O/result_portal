require('dotenv').config();

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, updateDoc
} from 'firebase/firestore'
const firebaseConfig = {
apiKey: "AIzaSyCiT-CionXopkSgaO0FkwIQlUH0HpbnwZY",
  authDomain: "schoolportal-a72a0.firebaseapp.com",
  projectId: "schoolportal-a72a0",
  storageBucket: "schoolportal-a72a0.appspot.com",
  messagingSenderId: "941253254880",
  appId: "1:941253254880:web:75f1e9e92889cf4c4efa85"
};

let submitButton = document.querySelector(".couseRegBtn");
const studentDataBase = [
  {
      name: "james victor ochula",
      department:"Electrical",
      addmisionNo: "1310211016",
      dateOfBirth: "24-05-1995",
      image:"../assets/profile1.png",
      program: "Diploma in Eletrical Enginneering",
      seasion: " Dec 3. 2020/3rd",
      // courses: [
      //     {name:"james", age:18, class:"ss2"},
      //     {name:"james", age:18, class:"ss2"},
      //     {name:"victor", age:18, class:"ss2"},
      //   ]
      // courses: {
      //     EMS101: "",
      //     CED101: "68",
      //     EPG101: "",
      //     TDS101: "56",
      //     BMS112: "",
      //     ESS113: "",
      //     EEM112: "40",
      //     EMS102: "",
      //     EIS104: "",
      //     PAH104:""
      // }
  },
  {
      name: "musa ahamed baba",
      department:"statistics",
      addmisionNo: "1310211017",
      image:"assets/profile2.png",
      dateOfBirth: "24-04-2000",
      department:"Statistics",
      program: "Bachelor of Science in Statistics",
      seasion: " jan 5. 2020/3rd",
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
      department:"Physics",
      image:"assets/profile3.png",
      dateOfBirth: "24-05-2017",
      program: "Bachelor of Science in Physics",
      seasion: " oct 3. 2020/3rd",
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
const admissionNumber = "1310211016";




// init firebase app
initializeApp(firebaseConfig)

// init service
const db = getFirestore()

// collection ref
const colRef = collection(db, 'student')

//get Collection data


//

// addDoc(colRef, {
//   student: studentDataBase,
// })
onSnapshot(colRef, (snapshot) => {
    let students = []
    
    snapshot.docs.forEach((doc) => {
      students.push({ ...doc.data(), id: doc.id})
    })
    // console.log(students[0].student.length)
  let fireStoreDataBase = students[0].student;
  let fireId=students[0].id
  displayResult(fireStoreDataBase, fireId)
  CourseRegistration(fireStoreDataBase,fireId)


  })

  const docRef=doc(db, 'student', 
  "IMYJ1UukXCJ3IRror8hU"
  )
  deleteDoc(docRef) 

// adding docs to the firebase

// submitButton.addEventListener("click", (e)=>{
//   e.preventDefault;
//   addDoc(colRef, {
//     student: studentDataBase
//   })

//   const docRef=doc(db, 'students', 
//   "R3obsogRe19y24iMMnE3"
//   )
//   deleteDoc(docRef) 
// })

// handling page navigation

function HandlePageNavigation(pagenaveBar, page1, page2, page3, page4, dName) {
  let navigationDisplay=document.querySelector(".navigationDis")
    pagenaveBar.addEventListener("click", () => {
          page1.style.display = "block";
          page2.style.display = "none";
          page3.style.display = "none";
          page4.style.display = "none";
         navigationDisplay.textContent=dName
  })
}

function PageNavigation() {
    const dashBorad = document.querySelector(".dashboard");
    const profile = document.querySelector(".profile");
    const result = document.querySelector(".result");
    const CourseRegistration = document.querySelector(".courseRegistration");

    // navigation buttons
    const dashboardBtn = document.querySelector(".dashBtn")
    const profileBtn = document.querySelector(".proBtn")
    const resultBtn = document.querySelector(".resuBtn")
    const registrationBtn = document.querySelector(".regisBtn")
    const paymentBtn = document.querySelector(".paymBtn")
    const securityBtn = document.querySelector(".secuBtn")
    const loginBtn = document.querySelector(".logBtn")
    
    HandlePageNavigation(dashboardBtn,dashBorad,profile,result,CourseRegistration, "Dashboard")
    HandlePageNavigation(profileBtn,profile, dashBorad, result,CourseRegistration, "Profile")
    HandlePageNavigation(resultBtn,result, dashBorad, profile,CourseRegistration, "Result")
    HandlePageNavigation(registrationBtn, CourseRegistration, dashBorad, result, profile, "Registration")
  
  // profile navigation

  function ProfilNavigation() {
    let allCheckboxes = document.querySelectorAll(".check");
    allCheckboxes.forEach(checkboxes => {
      checkboxes.addEventListener("change", () => {
        if (checkboxes.checked) {
          allCheckboxes.forEach(others => {
            if (others !== checkboxes) {
               others.checked = false
             }
           })
        }
        for (let i = 0; i < allCheckboxes.length; i++){
          if (allCheckboxes[i].checked) {
            const elment = allCheckboxes[i].value
            document.querySelector("." + elment).style.display ="flex";
          } else if (!allCheckboxes[i].checked) {
            let otherElments=allCheckboxes[i].value
            document.querySelector('.'+ otherElments).style.display="none"
            
          }
        }
       }) 
    })
  }
  ProfilNavigation()

  // Registration Navigation

  function RegistrationNavigation() {
    let allCheckboxes = document.querySelectorAll(".CoursReg");
    allCheckboxes.forEach(checkboxes => {
      checkboxes.addEventListener("change", () => {
        if (checkboxes.checked) {
          allCheckboxes.forEach(others => {
            if (others !== checkboxes) {
              others.checked = false;
            }
          })
        }
        for (let i = 0; i < allCheckboxes.length; i++){
          if (allCheckboxes[i].checked) {
            let element = allCheckboxes[i].value;
            document.querySelector("." + element).style.display="block"
          } else if (!allCheckboxes[i].checked) {
            let otherElments = allCheckboxes[i].value;
            document.querySelector("." + otherElments).style.display="none"
          }
        }
        localStorage.setItem('studentData', JSON.stringify(studentDataBase))
      })
    })
  }
RegistrationNavigation()
}
PageNavigation()

// display information from student database

function DisplayDetails() {
  const onscreenAdmissionNum = document.querySelector(".admissionNum");
  const onscreenName = document.querySelector(".onscreenName");
  const onscreenPrograme = document.querySelector(".program");
  const sideProfilePic = document.querySelector(".sideProfilePic")
  const navigationName = document.querySelector(".navName");
  const navigationProfilPicture = document.querySelector(".navProfilePic")
  const level = document.querySelector(".level");
  const department = document.querySelector(".department");

  for (let i = 0; i < studentDataBase.length; i++){
    if (studentDataBase[i].addmisionNo === admissionNumber) {
      onscreenAdmissionNum.innerHTML = studentDataBase[i].addmisionNo;
      onscreenName.innerHTML = studentDataBase[i].name;
      onscreenPrograme.innerHTML = studentDataBase[i].program;
      sideProfilePic.src = studentDataBase[i].image;
      navigationName.innerHTML = studentDataBase[i].name;
      navigationProfilPicture.src = studentDataBase[i].image;
      department.textContent = studentDataBase[i].department;
    }
  }
}
DisplayDetails()

// Course registration
function CourseRegistration(baseData,Id){
  const selectCourse = document.querySelectorAll(".selectCourse");
  let myCourse=[]
  let currentUnits = 0;
  let courseNumber = 0;
  selectCourse.forEach(course => {
        course.addEventListener("change", () => {
            let courseCode = course.parentElement.nextElementSibling.innerHTML;
            let courseName= course.parentElement.textContent;
            const units = course.parentElement.nextElementSibling.nextElementSibling.innerHTML;
            const semester = course.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            const unitTotal = document.querySelector(".current");
            const courseStatus= course.value
            const numberOfCourses=document.querySelector(".applidCourses")
            
          let courseUnite = parseFloat(units)

          if (course.checked) {
              currentUnits += courseUnite;
              unitTotal.textContent = currentUnits;
              
            courseNumber += 1;

           const myCourseDetails = {}

            myCourseDetails.name = courseName;
            myCourseDetails.code = courseCode;
            myCourseDetails.grade="A"
            myCourseDetails.unit = units;
            myCourseDetails.status=courseStatus
            myCourseDetails.semester = semester;
              
            myCourse.push(myCourseDetails)
          
            numberOfCourses.innerHTML = courseNumber;

            // console.log(myCourseDetails)
            // console.log(units)
            
          } else {
              currentUnits -= courseUnite
              unitTotal.textContent = currentUnits; 
              courseNumber -= 1;
              numberOfCourses.innerHTML = courseNumber;
              const index = myCourse.findIndex(function(myCourseDetails) {
                return myCourseDetails.name === courseName;
              });
            if (index !== -1) {
                myCourse.splice(index,1)
            }
            console.log(myCourse )
          }
        })
        
  })
  function SubmitCourse(myCourse){
    
    submitButton.addEventListener("click", () => {
      for (let i = 0; i < studentDataBase.length; i++){
        if (studentDataBase[i].addmisionNo === admissionNumber) {
         
          studentDataBase[i].courses = myCourse;
        }
      }

      
      document.querySelector(".register").style.display="none"
      document.querySelector(".submissonSuccess").style.display="flex"

      const docRef = doc(db, 'student', Id)
      updateDoc(docRef, {
        student: studentDataBase
      })
      
      console.log(baseData)
      ViewSection(currentUnits, courseNumber)
    })
    
  }
  SubmitCourse(myCourse,baseData, Id);
 }
// CourseRegistration()

// display coursed registerd on the view section

function ViewSection(total,totalCourse) {
  let tbody = document.querySelector(".diplayRegisterd")
  let courseDetails;
  document.querySelector(".toTal").innerHTML=total
  document.querySelector(".registerD").innerHTML=totalCourse
  let studentData = localStorage.getItem("studentData");
  let retrivedStudentData = JSON.parse(studentData)

  let myCourse = localStorage.getItem("mycourse");
  let retrivedMyCourse = JSON.parse(myCourse)

  for (let i = 0; i < retrivedStudentData.length; i++) {
    if (retrivedStudentData[i].addmisionNo === admissionNumber) {
      courseDetails = retrivedStudentData[i].courses
    }
  }
  for (let i = 0; i < retrivedMyCourse.length; i++) {
    let eachCourse = `
    <tr>
        <td>${retrivedMyCourse[i].name}</td>
        <td>${retrivedMyCourse[i].code}</td>
        <td>${retrivedMyCourse[i].unit}</td>
        <td>${retrivedMyCourse[i].semester}</td>
        <td>${retrivedMyCourse[i].status}</td>
    </tr>
    `
    tbody.innerHTML += eachCourse
  }
}
ViewSection()

function displayResult(baseData,Id) {
  let tbody = document.querySelector(".resultBody");
  let courseDetails;
  for (let i = 0; i < baseData.length; i++) {
    if (baseData[i].addmisionNo === admissionNumber) {
       courseDetails = baseData[i].courses
    }
    if (baseData[i].hasOwnProperty('courses')) {
      document.querySelector(".register").style.display="none"
      document.querySelector(".submissonSuccess").style.display="flex"
    }
  }
 console.log(courseDetails)
  for (let i = 0; i < baseData.length; i++) {
    let eachCourse = `
    <tr>
        <td>${courseDetails[i].name}</td>
        <td>${courseDetails[i].code}</td>
        <td>${courseDetails[i].status}</td>
        <td>${courseDetails[i].unit}</td>
        <td>${courseDetails[i].grade}</td>
    </tr>
    `
    tbody.innerHTML += eachCourse
  }

}

// function MobileNavigation{
//   const humbugar = document.querySelector(".humbugar");
//   humbugar.addEventListener("click", () => {
    
//   })
// }


