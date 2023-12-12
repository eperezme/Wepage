import React from 'react'
import Form from './Form.jsx'

function Contact() {
  return (
    <div id="contact" className='color-header home-campaign-footer position-relative js-section mb-10 overflow-visible'>
      <div className="container-xl position-relative z-2 px-3">
        <div className="d-flex js-build-in-trigger" data-build-in-stagger='100'>
          <div className="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
            <div className="home-campaign-git-line rounded js-build-in-item build-in-scale-top" style={{height: "100%", background: "linear-gradient(transparent, rgb(102, 57, 186) 10%, rgb(163, 113, 247), rgb(210, 168, 255))", transitionDelay: "0ms",}}></div>
            <div className="mx-auto my-3 home-campaign-glowing-icon">
              <div className="position-relative d-inline-block z-1">
              <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-code">
                <path d="M15.22 4.97a.75.75 0 0 1 1.06 0l6.5 6.5a.75.75 0 0 1 0 1.06l-6.5 6.5a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734L21.19 12l-5.97-5.97a.75.75 0 0 1 0-1.06Zm-6.44 0a.75.75 0 0 1 0 1.06L2.81 12l5.97 5.97a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215l-6.5-6.5a.75.75 0 0 1 0-1.06l6.5-6.5a.75.75 0 0 1 1.06 0Z"></path>
                </svg>
                <span className="position-absolute left-0 bottom-0 height-full width-full home-campaign-glowing-icon-glow z-n1" style={{backgroundColor: "var(--mktg-accent-primary)", filter: "blur(17px)"}}></span>
              </div>
            </div>
          </div>
          <div className="col-11 ml-2 ml-md-0">
            <div className="col-md-11 col-lg-9 pt-8">
              <h1 className="h2-mktg mb-5">
                Contact Me
              </h1>
              <p className="f3-mktg color-fg-muted">
                If you want to get in touch with me, please fill out the form below and I will get back to you as soon as possible.
              </p>
            </div>
            <div>
              
              <Form/>
            </div>
            {/* <div className="pb-2">
              <div className="d-flex flex-column flex-md-row">
              <a className="btn-mktg">
                LOREM BUTTON
                <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
              </a>
              <div className="border-top border-md-left mx-md-3 mb-3 mb-md-0"></div>
              <a className="btn-mktg home-campaign-enterprise btn-muted-mktg" data-test-selector="start-trial-button">
  
                Lorem Button
                <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                </a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact