// Course registration
// function CourseRegistration(baseData,Id){
//     const selectCourse = document.querySelectorAll(".selectCourse");
//     let myCourse=[]
//     let currentUnits = 0;
//     let courseNumber = 0;
//     selectCourse.forEach(course => {
//           course.addEventListener("change", () => {
             
//           })
          
//     })
//     function SubmitCourse(myCourse){
      
      
      
//     }
//     SubmitCourse(myCourse,baseData, Id);
// }
   
function studentCourseRegistration() {
    const courseSelected = document.querySelectorAll(".selectCourse");
    let courseTobeRegisterd = []
    let currentCourseUnits = 0;
    let numberOfCoursesSelected = 0
    
    courseSelected.forEach(eachCourse => {
        eachCourse.addEventListener("change", () => {
            let courseCode = eachCourse.parentElement.nextElementSibling.innerHTML;
            let courseName= eachCourse.parentElement.textContent;
            const units = eachCourse.parentElement.nextElementSibling.nextElementSibling.innerHTML;
            const semester = eachCourse.parentElement.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML;
            const unitTotal = document.querySelector(".current");
            const courseStatus= eachCourse.value
            const numberOfCourses=document.querySelector(".applidCourses")
            
          let courseUnite = parseFloat(units)
        
          if (eachCourse.checked) {
              currentCourseUnits += courseUnite;
              unitTotal.textContent = currentCourseUnits;
              
            numberOfCoursesSelected += 1;
            
           const myCourseDetails = {}
        
            myCourseDetails.name = courseName;
            myCourseDetails.code = courseCode;
            myCourseDetails.grade=""
            myCourseDetails.unit = units;
            myCourseDetails.status=courseStatus
            myCourseDetails.semester = semester;
              
            courseTobeRegisterd.push(myCourseDetails)
          
            numberOfCourses.innerHTML = numberOfCoursesSelected;
            console.log(courseTobeRegisterd)
          
          } else {
              currentCourseUnits -= courseUnite
              unitTotal.textContent = currentCourseUnits; 
              numberOfCoursesSelected -= 1;
              numberOfCourses.innerHTML = numberOfCoursesSelected;
              const index = courseTobeRegisterd.findIndex(function(myCourseDetails) {
                return myCourseDetails.name === courseName;
              });
            if (index !== -1) {
                courseTobeRegisterd.splice(index,1)
            }
          }
          
        })
    })

} 

function submitCourseRegistration(dataBaseId,studentDataBase,admissionNumber) {
  let submitButton = document.querySelector(".couseRegBtn");
    submitButton.addEventListener("click", () => {

       studentDataBase.forEach(student => {
         if (student.addmisionNo === admissionNumber) {
             student.courses = courseTobeRegisterd;
          }
        })        
        document.querySelector(".register").style.display="none"
        document.querySelector(".submissonSuccess").style.display="flex"
  
        const docRef = doc(db, 'student', dataBaseId)
        updateDoc(docRef, {
          student: studentDataBase
        })
      console.log(courseTobeRegisterd)
      })
}
export {studentCourseRegistration,submitCourseRegistration}

