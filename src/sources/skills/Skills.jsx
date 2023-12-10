import React from 'react'

// CSS
import './Skills.css'

// Images
import IMG2 from '../../assets/wood.jpg?w=300;400;500;600;700;800;900;1000;1200;1500&format=webp&as=srcset';
import IMG2_fall from '../../assets/wood.jpg'
import IMG3 from '../../assets/mev.jpg?w=300;400;500;600;700;800;900;1000;1200;1500;1800;2000&format=webp&as=srcset';
import IMG3_fall from '../../assets/mev.jpg'
import IMG4 from '../../assets/graphs/diabplot.png?w=300;400;500;600;700;800;900;1000;1200;1500;1800;2000&format=webp&as=srcset'
import IMG4_fall from '../../assets/graphs/diabplot.png'
import IMG5 from '../../assets/graphs/surv2.png?w=300;400;500;600;700;800;900;1000;1200;1500;1800;2000&format=webp&as=srcset'
import IMG5_fall from '../../assets/graphs/surv2.png'
import IMG6 from '../../assets/graphs/lambda.png?w=300;400;500;600;700;800;900;1000;1200;1500;1800;2000&format=webp&as=srcset'
import IMG6_fall from '../../assets/graphs/lambda.png'


function Skills() {
  return (
    <div className='color-skills js-section overflow-hidden px-3 pb-8 pt-5'>
      {/* SKILLS */}
      <div className='container-xl'>
  {/* Title */}
  <div className='d-flex js-build-in-trigger position-relative'>
    <div className='col-1 d-flex flex-column flex-items-center'>
      <div className='mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade' style={{transitionDelay: "0ms"}}>
      <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" className="octicon octicon-briefcase">
        <path d="M7.5 1.75C7.5.784 8.284 0 9.25 0h5.5c.966 0 1.75.784 1.75 1.75V4h4.75c.966 0 1.75.784 1.75 1.75v14.5A1.75 1.75 0 0 1 21.25 22H2.75A1.75 1.75 0 0 1 1 20.25V5.75C1 4.784 1.784 4 2.75 4H7.5Zm-5 10.24v8.26c0 .138.112.25.25.25h18.5a.25.25 0 0 0 .25-.25v-8.26A4.235 4.235 0 0 1 18.75 13H5.25a4.235 4.235 0 0 1-2.75-1.01Zm19-3.24v-3a.25.25 0 0 0-.25-.25H2.75a.25.25 0 0 0-.25.25v3a2.75 2.75 0 0 0 2.75 2.75h13.5a2.75 2.75 0 0 0 2.75-2.75Zm-6.5-7a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V4h6Z"></path>
      </svg>
      <span className='position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1' style={{backgroundColor: "var(--mktg-accent-primary)", filter: "blur(18px)"}}></span>
      </div>
      <div className='home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top' style={{background: "linear-gradient(rgb(63, 185, 80), rgb(46, 160, 67), transparent)", transitionDelay: "500ms"}}></div>
    </div>
    <div className="col-11 col-lg-8 ml-2 ml-md-0 mb-6 mb-md-10">
      <h2 className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left" style={{transitionDelay: "200ms"}}>About Me</h2>
      <h3 className='h3-mktg mb-4 text-medium js-build-in-item build-in-slideX-left' style={{transitionDelay: "300ms"}}>
        <span className='text-accent-primary d-block'>Master in Bioinformatics & Biostatistics</span>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, iste fugiat officia.
      </h3>
    </div>
    <img alt="" aria-hidden="true" width="626" height="626" className="animation-reverse-rotate position-absolute height-auto d-none d-md-block col-6 events-none js-build-in-item build-in-fade home-shape-rotate" style={{top: "0px", right: "-25%", transitionDelay: "400ms"}} loading="lazy" decoding="async" src="https://github.githubassets.com/assets/shape-0-df97fa6b0c27.svg"/>
  </div>
  {/* 1st Image center */}
  <div className="js-build-in-trigger">
    <picture>
      <source srcSet={IMG2} type='image/webp' sizes=''/>
      <img aria-hidden="true" loading='lazy' decoding='async' className='width-full d-block height-auto position-relative z-1 rounded-3 border js-build-in-item build-in-slideX-right' src={IMG2_fall} alt="" />
      </picture>
  </div>
  <div className='d-flex js-build-in-trigger position-relative'>
  <img alt="" aria-hidden="true" width="584" height="584" className="animation-rotate position-absolute height-auto d-none d-md-block col-7 events-none home-shape-rotate" style={{bottom: "-50%", right: "-20%", animationDuration: "300s"}} loading="lazy" decoding="async" src="https://github.githubassets.com/assets/shape-1-c219318e479a.svg"/>
  <div className="col-1 d-flex flex-column flex-items-center position-relative">
    <div className="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top" style={{transitionDuration: "900ms", background: "linear-gradient(transparent, rgb(63, 185, 80), rgb(63, 185, 80), transparent)", transitionDelay: "0ms",}}></div>
    <img alt="" aria-hidden="true" width="81" height="485" style={{left: "calc(50% - 2px)", height: "auto", maxWidth: "9vw", transitionDelay: "100ms",}} className="d-none d-md-block position-absolute bottom-4 js-build-in-item build-in-scale-fade" loading="lazy" decoding="async" src="https://github.githubassets.com/assets/git-branch-productivity-c304b83d09c7.svg"></img>
  </div>
  <div className="col-11 ml-2 ml-md-6">
    <div className="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7">
      <div className="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right" style={{transitionDelay: "0ms"}}>
        <div className="pr-md-4">
          <h2 className="color-fg-default mb-3 f2-mktg color-fg-muted">
            <em>Lorem Ipsum </em>
            dolor sit amet consectetur adipisicing elit. Totam voluptas quae ab architecto, tempore excepturi nulla corporis laudantium eaque? Harum quia officia, qui tempore neque aut saepe esse earum assumenda!
          </h2>
          <a href="" className="link-mktg text-semibold color-fg-default py-1 f3-mktg">Lorem ipsum</a>
        </div>
      </div>
      <div className="col-12 py-3 col-md-6 col-lg-6">
        <div className="position-relative">
          <div className="d-flex flex-column position-relative">
          <div className="js-build-in-item build-in-slideX-right overflow-hidden rounded-3 position-relative z-1 d-none d-md-block" style={{maxWidth: "480px", marginTop: "-100%", transitionDelay: "100ms",}}>
            {/* Lateral image */}
            {/* [ ] REPLACE IMAGE */}
            <picture>
              <source srcSet={IMG3} type='image/webp'/>
              <img src={IMG3_fall} loading="lazy" width="960" height="1222" alt="" decoding="async" className="rounded-3 width-full d-block height-auto"/></picture>
          </div>
          <div className='js-build-in-item build-in-slideX-right overflow-hidden rounded-3 position-absolute right-3 bottom-3 bottom-sm-0 z-1 d-md-none style={{bottom: "-300px", right: "-200px", transitionDelay: "300ms",}} '>
          <img alt="" aria-hidden="true" width="1000" height="1000" className="width-full d-block height-auto" loading="lazy" decoding="async" src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png"></img>
          </div>
          
          </div>
        </div>
      </div>
    </div>
    <div className="mb-6 mb-md-7 pb-4 js-build-in-trigger">
        <div className="py-3 text-left col-sm-8 col-md-7 col-lg-6 col-xl-5 js-build-in-item build-in-slideX-left" style={{transitionDelay: "600ms"}}>
          <div className="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg" style={{top: "-1px"}}>
          <span className="text-gradient-mktg text-semibold">What do I have?</span>
          </div>
          <h3 className="text-accent-primary mb-2 mt-3 h1-mktg text-medium">Skills</h3>
          <p className="mb-3 f2-mktg text-medium col-6-max">Proficient with multiple programming languages and skills</p>
          <a href="" className="link-mktg text-semibold color-fg-default py-1 f3-mktg">Button</a>
        </div>
      </div>
  </div>
  </div>
  {/* CARD CENTRAL 1 */}
  <div className="position-relative z-1 mb-md-5">
    <card-skew className="overflow-hidden rounded-1 mb-3 mb-md-5">
      <div className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row">
        <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
          <p className="f2-mktg text-medium color-fg-muted mb-4">
            <em>Lorem ipsum </em>
            dolor sit amet consectetur adipisicing elit. Quasi, quibusdam.
          </p>
          <div>
            <a href="" className="link-mktg text-semibold color-fg-default py-1 f3-mktg">Button</a>
          </div>
        </div>
        <div className="overflow-hidden col-md-6 rounded-right-3">
          {/* IMG */}
          <picture>
            <source srcSet={IMG4} type='image/webp'/>
          <img className="rounded-3 width-full d-block height-auto" width="1306" loading="lazy" decoding="async" alt="" aria-hidden="true" src={IMG4_fall}/>
          </picture>
        </div>
        <div className="position-absolute bottom-0 right-0 events-none z-n1" style={{transform: "translate(165px, 81.92px)",}}></div>
      </div>
    </card-skew>
  </div>
  {/* VERTICAL CARDS */}
  <div className="d-flex flex-column flex-md-row gutter js-build-in-trigger">
    {/* C1 */}
    <div className="col-md-6 d-flex">
      <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5">
        <div className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column">
          <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
            <p className="f2-mktg text-medium color-fg-muted mb-4">
              <em>Lorem ipsum </em>
              dolor sit amet consectetur adipisicing elit. Quasi, quibusdam.
            </p>
            <div>
              <a href="" className="link-mktg text-semibold color-fg-default py-1 f3-mktg">Button</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-bottom-3">
            {/* IMG */}
            <picture>
              <source src={IMG5} type='image/webp'/>
            <img className="width-full d-block height-auto rounded-3 js-build-in-item build-in-scale-fade" loading="lazy" decoding="async" alt="" aria-hidden="true" src={IMG5_fall}/>
            </picture>
          </div>
          <div className="position-absolute bottom-0 right-0 events-none z-n1"></div>
        </div>
      </card-skew>
    </div>
    {/* C2 */}
    <div className="col-md-6 d-flex">
    <card-skew className="overflow-hidden rounded-3 mb-3 mb-md-5">
        <div className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column">
          <div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
            <p className="f2-mktg text-medium color-fg-muted mb-4">
              <em>Lorem ipsum </em>
              dolor sit amet consectetur adipisicing elit. Quasi, quibusdam.
            </p>
            <div>
              <a href="" className="link-mktg text-semibold color-fg-default py-1 f3-mktg">Button</a>
            </div>
          </div>
          <div className="overflow-hidden rounded-bottom-3">
            {/* IMG */}
            <picture>
              <source src={IMG6} type='image/webp'/>
            <img className="width-full d-block height-auto js-build-in-item build-in-scale-fade rounded-3" loading="lazy" decoding="async" alt="" aria-hidden="true" src={IMG6_fall}/>
            </picture>
          </div>
          <div className="position-absolute bottom-0 right-0 events-none z-n1"></div>
        </div>
      </card-skew>
    </div>
  </div>
  <div className="col-1 d-flex flex-column flex-items-center js-build-in-trigger">
    <div className="home-campaign-git-line mt-md-1 mb-n8 rounded js-build-in-item build-in-scale-top" style={{height: "160px", background: "linear-gradient(transparent, #33B3AE 40%)",}}></div>
  </div>
  </div>
    </div>
  )
}

export default Skills