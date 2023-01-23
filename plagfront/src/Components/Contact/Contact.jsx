import React from 'react'
import './Contact.css'


export default function Contact() {
  return (
    <div className='contact-page'>
        <div className="layer-one">
          <p className="text-one">
          INTERESTED IN JOINING THE TEAM?
          </p>
          <p className="text-two">
          Compile the following information and send to Dr. Parent at mbparent@gsu.edu
          </p>
        </div>
        <div className="layer-two">
          <div id="contact-page-questionnaire">

              <p>Send a brief (~7 succinct sentences) professional email
                that contains the following information:
              </p>

              <p>
              The reason you are contacting us
              </p>

              <p>
              Indicate the position you are inquiring about e.g., research 
              volunteer, practicum, etc.Show that you are interested in their 
              research and know what it entails. A common error is for students 
              to use a generic sentence from the researcher’s website. Instead, 
              read the researcher’s papers/books and use 1-2 sentences to describe 
              why their research interests you in such a way that conveys that 
              you took the time to learn about their research. Also, make sure 
              to explain how this research connects with your career plans 
              (1 sentence max).
              </p>

              <p>Describe yourself</p>
              <p>List any relevant professional/academic experience and 
                coursework, GPA, and make sure to indicate if you are an honors 
                student.
              </p>

              <p>Indicate your availability</p>
              <p>How many hours per week (at least 10 hr weekly; weekends and 
                evenings are not usually an option), when you would be ready 
                to start, how many semesters you would be available (researchers 
                are more likely to want to work with a student who will be 
                available for more than 1-2 semesters).
              </p>

          </div>
        </div>
    </div>
  )
}