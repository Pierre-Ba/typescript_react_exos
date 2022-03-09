import React from "react";
import { CoursePart } from "../types";

const Part = ({courses}: {courses: CoursePart[]}): JSX.Element => {
  
      courses.forEach(course => {
          if(course.name === "Fundamentals") {
              return <p>{course.name}</p>
          }
      })

     return <p>yo</p>
  }




export default Part;