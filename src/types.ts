
  export interface CoursePartBase {
    name: string;
    exerciseCount: number;
    type: string;
  }

  export interface CoursePartBaseWithDescription extends CoursePartBase {
      description: string;
  }

  
  export interface CoursePartOne extends CoursePartBaseWithDescription {
    name: "Fundamentals";
    type: "normal"
  }
  export interface CoursePartTwo extends CoursePartBaseWithDescription {
    name: "Advanced";
    type: "normal"
  }

  export interface CoursePartThree extends CoursePartBase {
   name: "Using props to pass data";
   groupProjectCount: number;
  }
  
  
  export interface CoursePartFour extends CoursePartBaseWithDescription {
    name: "Deeper type usage"
    type: "submission";
    exerciseSubmissionLink: string;
  }
  
  export type CoursePart = CoursePartOne | CoursePartTwo | CoursePartThree | CoursePartFour;

