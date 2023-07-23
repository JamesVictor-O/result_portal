import {
  studentCourseRegistration,
  submitCourseRegistration
} from './studentsRegistration';

import { initializeApp } from 'firebase/app'
import {
  getFirestore, collection, onSnapshot,
  addDoc, deleteDoc, doc, updateDoc, getDocs
} from 'firebase/firestore'

const firebaseConfig = {
apiKey: "",
  authDomain: "schoolportal-a72a0.firebaseapp.com",
  projectId: "schoolportal-a72a0",
  storageBucket: "schoolportal-a72a0.appspot.com",
  messagingSenderId: "941253254880",
  appId: "1:941253254880:web:75f1e9e92889cf4c4efa85"
};


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

  },
  {
      name: "musa ahamed baba",
      department:"statistics",
      addmisionNo: "1310211017",
      image:"../assets/profile2.png",
      dateOfBirth: "24-04-2000",
      department:"Statistics",
      program: "Bachelor of Science in Statistics",
      seasion: " jan 5. 2020/3rd",
      
  },
  {
      name: "Chigozi samule",
      addmisionNo: "1310211018",
      department:"Physics",
      image:"../assets/profile3.png",
      dateOfBirth: "24-05-2017",
      program: "Bachelor of Science in Physics",
      seasion: " oct 3. 2020/3rd",
      
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


studentCourseRegistration()

// init firebase app
initializeApp(firebaseConfig)

// init service
const db = getFirestore()
// collection ref
const colRef = collection(db, 'student')
//get Collection data

async function dataFromFirebase(details,submitcourse) {
  let students = []
  try {
    let querySnapshot = await getDocs(colRef);
    querySnapshot.forEach(doc => {
      students.push({...doc.data(), id: doc.id})
    })

    let fireStoreDataBase = students[0].student;
    let  fireId = students[0];
    submitcourse({ studentDataBase, admissionNumber,dataBaseUpdating, fireId })
    details(fireStoreDataBase)
  }catch(error){
    console.log(error)
  }
}
dataFromFirebase(DisplayDetails, submitCourseRegistration);

function dataBaseUpdating(fireId){
  const docRef = doc(db, 'student', fireId)
      updateDoc(docRef, {
        student: studentDataBase
      }) 
}

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

function DisplayDetails(StoreDataBase) {
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
      onscreenAdmissionNum.innerHTML = StoreDataBase[i].addmisionNo;
      onscreenName.innerHTML = StoreDataBase[i].name;
      onscreenPrograme.innerHTML = StoreDataBase[i].program;
      sideProfilePic.src = StoreDataBase[i].image;
      navigationName.innerHTML = StoreDataBase[i].name;
      navigationProfilPicture.src = StoreDataBase[i].image;
      department.textContent = StoreDataBase[i].department;
    }
  }
}

// display coursed registerd on the view section

function ViewSection(total,totalCourse) {
  let tbody = document.querySelector(".diplayRegisterd")
  let courseDetails;
  
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
        <td class="allCourses>${retrivedMyCourse[i].code}</td>
        <td class="allUnits">${retrivedMyCourse[i].unit}</td>
        <td>${retrivedMyCourse[i].semester}</td>
        <td>${retrivedMyCourse[i].status}</td>
    </tr>
    `
    tbody.innerHTML += eachCourse
    let total = 0;
    let allCourses;
    const Allunits = document.querySelectorAll(".allUnits");
    const AllCourses = document.querySelectorAll(".allCourses");
    Allunits.forEach(units => {
      total += Number(units.innerHTML);
      document.querySelector(".toTal").innerHTML=total
    })
  }
}
ViewSection()

function displayResult(baseData,Id) {
  let tbody = document.querySelector(".resultBody");
  for (let i = 0; i < baseData.length; i++) {
    if (baseData[i].addmisionNo === admissionNumber  || hasOwnProperty('courses')) {
      let courseDetails = baseData[i].courses
       for (let i = 0; i < baseData.length; i++) {
          let eachCourse = `
          <tr>
              <td>${courseDetails[i].name}</td>
              <td>${courseDetails[i].code}</td>
              <td>${courseDetails[i].unit}</td>
              <td>${courseDetails[i].unit}</td>
              <td>${courseDetails[i].grade}</td>
          </tr>
          `
          tbody.innerHTML += eachCourse
        }
    }
    if (baseData[i].hasOwnProperty('courses')) {
      document.querySelector(".register").style.display="none"
      document.querySelector(".submissonSuccess").style.display = "flex";
      let allDetails = document.querySelectorAll(".otherdi");
      allDetails.forEach(details => {
        details.style.display = "none"
      });
      document.querySelector(".deadline").innerHTML="Submited On"
    }
          
  }
  

}

function OpenCloseNavbar() {
  const humbugar = document.querySelector(".humbugar");
  const navigationMenu=document.querySelector(".mobile-nav")
  if (navigationMenu.classList.contains("isActive")) {
    humbugar.classList.add("is-active")
  } else {
    humbugar.classList.remove("is-active")
  }
}

function Humbuger(){
  const humbugar = document.querySelector(".humbugar");
  const navigationMenu=document.querySelector(".mobile-nav")
  humbugar.addEventListener("click", () => {
    navigationMenu.classList.toggle("isActive")
     OpenCloseNavbar()
  })
}

Humbuger();

function MobileNavigation() {
  const navigationMenu=document.querySelector(".mobile-nav")
  const Buttons = document.getElementsByClassName("navButtons");
  const allNavButtons = Array.from(Buttons)

  allNavButtons.map(navButton => {
    navButton.addEventListener("click", (e) => {
      const elementId = e.target.id;
     

      for (let i = 0; i < allNavButtons.length; i++){
        const pageElementClass = allNavButtons[i].id;
        let elements = document.querySelector("." + pageElementClass) 

        if (elements.className.includes(elementId)) {
          elements.style.display = "block";
          navigationMenu.classList.remove("isActive")
          OpenCloseNavbar()
        } else {
          elements.style.display = "none";
        }

      }
      
      navigationMenu.classList.remove("isActive")
      OpenCloseNavbar()
     })
  })

  
  
}

MobileNavigation()
