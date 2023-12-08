import React from 'react'

// CSS
import './Experience.css'

// IMG
import IMG7 from '../../assets/graphs/box.png?w=300;400;500;600;700;800;900;1000;1200;1500;1800;2000&format=webp&as=srcset'
import IMG7_fall from '../../assets/graphs/box.png'
import PORTAL from '../../assets/portal.png'
import PORTAL_fall from '../../assets/portal.png'

function Experience() {
  return (
    <div className='color-experience home-campaign-security js-section overflow-hidden px-3 pb-8 pt-5'>
      <div className="container-xl">
        <div className="d-flex js-build-in-trigger position-relative build-in-animate">
          <div className="col-1 d-flex flex-column flex-items-center">
            <div className="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade build-in-animate" style={{transitionDelay: "0ms",}}>
            <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-lock">
              <path d="M6 9V7.25C6 3.845 8.503 1 12 1s6 2.845 6 6.25V9h.5a2.5 2.5 0 0 1 2.5 2.5v8a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 19.5v-8A2.5 2.5 0 0 1 5.5 9Zm-1.5 2.5v8a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1h-13a1 1 0 0 0-1 1Zm3-4.25V9h9V7.25c0-2.67-1.922-4.75-4.5-4.75-2.578 0-4.5 2.08-4.5 4.75Z"></path>
            </svg>
            <span className="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1" style={{backgroundColor: "var(--mktg-accent-primary)", filter: "blur(18px)",}}></span>
            </div>
            <div className="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top build-in-animate git-line-blue-upper"></div>
          </div>
          <div className="col-11 col-lg-7 ml-2 ml-md-0 mb-6 mb-md-10 pr-lg-3">
            <h3 className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: "200ms"}}>Work</h3>
            <h2 className="h4-mktg mb-4 text-medium js-build-in-item build-in-slideX-left build-in-animate" style={{transitionDelay: "300ms"}}>
              <span className="h3-mktg text-accent-primary d-block">Experience </span>
                Appart from unpaid intern not really.
            </h2>
          </div>
          <img alt="" aria-hidden="true" width="595" height="595" className="animation-reverse-rotate position-absolute height-auto d-none d-md-block col-8 events-none" style={{top: "-10%", right: "-25%",}} loading="lazy" decoding="async" src="https://github.githubassets.com/assets/shape-2-f30dcc9bd35c.svg"></img>
        </div>
        {/* MAIN CARD */}
        <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5 position-relative z-1">
          <div className="color-bg-subtle border rounded-3 p-2 p-lg-6 js-build-in-trigger feature-card-mktg z-1 position-relative build-in-animate">
            <div className="position-relative d-flex flex-column flex-md-row gutter-spacious col-lg-10 mx-auto my-lg-6">
              {/* column 1 */}
              <div className="col-md-6 js-build-in-item build-in-scale-right build-in-animate" style={{transitionDelay: "600ms"}}></div>
              {/* column 2 */}
              <div className="col-md-6 js-build-in-item build-in-scale-right build-in-animate" style={{transitionDelay: "600ms"}}></div>
            </div>
          </div>
        </card-skew>
        <div className="d-flex js-build-in-trigger position-relative build-in-animate">
          <div className="col-1 d-flex flex-column flex-items-center position-relative">
            <div className="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top build-in-animate" style={{background: "linear-gradient(transparent, rgb(51, 179, 174), rgb(51, 179, 174), transparent)", transitionDelay: "0ms",}}></div>
            <img alt="" aria-hidden="true" width="81" height="612" style={{left: "calc(50% - 2px)", height: "auto", maxWidth: "9vw", transitionDelay: "100ms"}} className="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade build-in-animate" loading="lazy" decoding="async" src="https://github.githubassets.com/assets/git-branch-security-2-f6a799957581.svg"></img>
          </div>
          <div className="col-11 ml-2 ml-md-6">
            <div className="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7 build-in-animate">
              <div className="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right build-in-animate" style={{TransitionDelay: "0ms"}}>
                <div className="pr-md-4">
                  <h2 className="color-fg-default mb-3 f2-mktg color-fg-muted">
                    <em>Lorem Ipsum </em>
                    dolor sit amet consectetur adipisicing elit. Quia, quibusdam.
                  </h2>
                  {/* [ ] Add link */}
                  <a className="link-mktg text-semibold color-fg-default py-1 f3-mktg" href="">
    Lorem Ipsum Link <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                </a>
                </div>
              </div>
              <div className="col-12 py-3 col-md-6 col-lg-6">
                <div className="position-relative">
                  <div className="d-flex flex-column position-relative">
                    <div className="js-build-in-item build-in-slideX-right border overflow-hidden rounded-2 position-relative left-6 z-1 build-in-animate" style={{maxWidth: "541px", marginTop: "-30%", transitionDelay: "100ms"}}>
                    <img src={IMG7} alt="" loading="lazy" decoding="async" width="1084" height="600" className="rounded-2 width-full height-auto d-block"/>
                    </div>
                    <img alt="" aria-hidden="true" width="1000" height="1000" className="position-absolute d-none d-md-block events-none js-build-in-item build-in-fade build-in-animate" style={{bottom: "-160px", right: "-220px", transitionDelay: "200ms"}} loading="lazy" decoding="async" src="https://github.githubassets.com/assets/bg-glow-blue-036b8dc2d1ce.png"></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-6 mb-md-12 pb-3 js-build-in-trigger build-in-animate">
              <div className="py-3 js-build-in-item col-sm-10 col-md-6 text-left col-lg-7 build-in-slideX-left build-in-animate" style={{transitionDelay: "500ms"}}>
                <div className="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg" style={{top: "-1px"}}>
                  <span className='text-gradient-mktg text-semibold'> Lorem ipsum?</span>
                </div>
                <h3 className="text-accent-primary mb-2 mt-3 h1-mktg text-medium">Lorem Ipsum</h3>
                <p className="mb-3 f2-mktg text-medium col-6-max">Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Horizontal Card */}
        <div className="position-relative z-1 js-build-in-trigger build-in-animate mb-3 mb-md-5">
          <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5" style={{transform: "perspective(700px) rotateX(-0.03deg) rotateY(-0.03deg)"}}>
            <div className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row">
              <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
                <p className="f2-mktg text-medium color-fg-muted mb-4">
                  <em>Lorem Ipsum </em>
                  dolor sit amet consectetur adipisicing elit. Quia, quibusdam.
                </p>
                <div className="">
                  {/* [ ] Link */}
                  <a className="link-mktg text-semibold color-fg-default py-1 f3-mktg" href="">
                    Lorem Link <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                      </a>
                </div>
              </div>
              <div className="overflow-hidden col-md-6 rounded-right-3">
                <picture>
                <source srcSet={PORTAL} type='image/webp'/>
                {/* Image */}
                <img className="width-full d-block height-auto js-build-in-item build-in-scale-fade build-in-animate" width="1288" height="992" loading="lazy" decoding="async" alt="" aria-hidden="true" src={PORTAL}></img>
                </picture>
              </div>
              <div className="position-absolute bottom-0 right-0 events-none z-n1" style={{transform: "translate(324.78px, 121.285px)"}}></div>
            </div>
          </card-skew>
        </div>
        {/* Verical Cards */}
        <div className="d-flex flex-column flex-md-row gutter js-build-in-trigger build-in-animate">
          {/* Left Card */}
          <div className="col-md-6 d-flex">
            <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5" style={{transform: "perspective(700px) rotateX(-0.03deg) rotateY(-0.03deg)"}}>
              <div className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column">
                <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
                  <p className="f2-mktg text-medium color-fg-muted mb-4">
                    <em>Lorem </em>
                    dolor sit amet consectetur adipisicing elit. Quia, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <div>
                  <a className="link-mktg text-semibold color-fg-default py-1 f3-mktg" href="">
                    Lorem Link <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                  </a>
                  </div>
                </div>
                <div className="overflow-hidden rounded-bottom-3">
                  <picture>
                  <source srcSet={PORTAL} type='image/webp'/>
                  <img className="rounded-3 width-full d-block height-auto js-build-in-item build-in-scale-fade build-in-animate" width="1208" height="764" loading="lazy" decoding="async" alt="" aria-hidden="true" src={PORTAL}/>
                  </picture>
                </div>
                <div data-target="card-skew.shine" className="position-absolute bottom-0 right-0 events-none z-n1" style={{transform: "translate(324.41px, -78.27px)"}}></div>
              </div>
            </card-skew>
          </div>
          {/* Right Card */}
          <div className="col-md-6 d-flex">
        <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5" data-catalyst="" data-perspective="700" style={{transform: "perspective(700px) rotateX(-0.81deg) rotateY(0.23deg)"}}>
    <div className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column" data-target="card-skew.bounding">
      <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
        <p className="f2-mktg text-medium color-fg-muted mb-4"><em>Lore Ipsum </em> 
          dolor sit amet consectetur adipisicing elit. Quia, quibusdam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia, quibusdam.
        </p>
        {/* [ ] Link */}
        <div>  
          <a className="link-mktg text-semibold color-fg-default py-1 f3-mktg" href="">
          Lorem Link <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
          </a>
        </div>
      </div>
      <div className="overflow-hidden rounded-bottom-3">
        <picture>
        <source srcSet={PORTAL} type='image/webp'/>
          <img className="rounded-3 width-full d-block height-auto js-build-in-item build-in-scale-fade build-in-animate" width="1208" height="804" loading="lazy" decoding="async" alt="" aria-hidden="true" src={PORTAL}/>
          </picture></div>
      

      <div data-target="card-skew.shine" className="position-absolute bottom-0 right-0 events-none z-n1" style={{transform: "translate(58.91px, -92.27px)"}}></div>
    </div> 
  </card-skew>

    </div>
        </div>
        <div className="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
          <div className="home-campaign-git-line mt-1 mb-n8 rounded js-build-in-item build-in-scale-top" style={{height: "160px", background: "linear-gradient(transparent, #F778BA 40%)"}}></div>
        </div>
      </div>
    </div>
  )
}

export default Experience