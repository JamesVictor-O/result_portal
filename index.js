const admissionNumber= "1310211018"
// student database

const studentDataBase = [
    {
        name: "james victor ochula",
        department:"Electrical",
        addmisionNo: "1310211016",
        dateOfBirth: "24-05-1995",
        image:"assets/profile1.png",
        program: "Diploma in Eletrical Enginneering",
        seasion: " Dec 3. 2020/3rd",
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
function CourseRegistration(){
  const selectCourse = document.querySelectorAll(".selectCourse");
  let myCourse={}
  selectCourse.forEach(course => {
    course.addEventListener("change", () => {
      let courseCode = course.parentElement.nextElementSibling;
      
      console.log(courseCode)
    })
  })
}
CourseRegistration()