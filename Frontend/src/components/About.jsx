import React from 'react'
import image1 from "../../public/img6.jpg"
import {Link} from "react-router-dom"
function About() {
  return (
    <>
    <div 
     style={{backgroundImage:'url('+image1+')',backgroundSize:'cover'}}>
    <div className='bg-sky'>
     <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-15 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
          Hello Friends ! Welcome to my About Page, Find details about my  {" "}
            <span className="text-pink-500"> website:)</span>
          </h1>
         
          
          <Link to="/">
            <button className="mt-6 bg-blue-500 text-white px-8 py-4 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
          <h1 className="text-2xl  md:text-4xl mt-12 text-red-600">
            BOOKERY!...
          </h1>
          <p className="mt-8">
          The origin of this alternate word for a bookstore is simple. The ending -ery, meaning “place of doing, keeping, producing, or selling” (the same ending as in eatery, fishery, and bakery) is appended to book.
          </p>
          <h1 className="text-2xl  md:text-4xl mt-12 text-red-600">
            About My BOOKERY!...
          </h1>
          <p className="mt-8">
          Our website is a book store ,where you can  buy different types of books, Here are also some free books are available, People can access and read them in their leisure time,l those books are Novels, History, E.tc. Here you can also  find  second-hand books in half rate and often buys used books.
We have also provided some basics and most demanding courses of today , You can  buy  those courses by registering and logging on our website.
We have provided courses in most reasonable cost with best Teachers.

          </p>
          <h1 className="text-2xl  md:text-4xl mt-12 text-red-600">
            Courses we have provided!...
          </h1>
          <p className="mt-8">
         <span> 1.Front End web development </span><br/> 
A Front-End Developer is someone who creates websites and web applications.
The difference between Front-End and Back-End is that Front-End refers to how a web page looks, while back-end refers to how it works.

You can think of Front-End as client-side and Back-End as server-side.

The basic languages for Front-End Development are HTML, CSS, and JavaScript.
Main responsibilities
The main responsibility of the Front-End Developer is the User interface.

Simply put, create things that the user sees.
          </p>
          
          <p className="mt-8">
         <span> 2.Full stack web development </span><br/>
         Full stack development is the process of designing, creating, testing, and deploying a complete web application from start to finish. It involves working with various technologies and tools, including front-end web development, back-end web development, and database development. And full stack development is a term used to describe a software engineer or developer who works with both the front and back end of a website or application. A full-stack developer is comfortable working with front-end and back-end technologies that power a website or application. 

Full-stack developers are often responsible for the entire web application development process, from start to finish, which means they must have a strong understanding of all the technologies and tools involved in web development. They also need to work effectively with others on a team, as web development is typically a collaborative process. Most full-stack developers have a firm foundation in web development technologies, such as HTML, CSS, and JavaScript. They also have experience with server-side technologies such as PHP, Ruby on Rails, and Node.js. In addition to their technical skills, full-stack developers also deeply understand how the various parts of a website or application work together. 

Full-stack developers are in high demand because they can build a website or application from start to finish and quickly identify and fix any problems that may arise. If you're looking to hire a full-stack developer, ask about their experience with front-end and back-end technologies.
         </p>
         <p className="mt-8">
         <span> 3.Data Structure And Algorithm ! </span><br/>
         Data structures course curriculum
Data structures are the building blocks of programming, driving efficiency and organization from the ground up. By taking a data structures course, aspiring programmers can gain the skills they need to thrive in today’s increasingly tech-driven landscape. 

A fundamentals course can help new learners get up to speed with the basics of data structures. Before studying advanced concepts, learners may explore common data structures through hands-on exercises. Specialized topics can provide in-depth knowledge of algorithms, software engineering, and programming frameworks.

Data structures are also a foundational component of computer science. Learners interested in pursuing a computer science education may find it beneficial to explore related data structure classes in Java data structures or object-oriented programming. edX provides a variety of options to begin learning about using data structures in different fields
         </p>
        </div>
        </div>
    
  
  </div>
  </div>
  </>
  )
}

export default About