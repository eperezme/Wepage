import React from "react";
import Tilt from "../../functions/tilt.jsx";

// IMG

function Projects() {
	return (
		<div className="color-projects home-campaign-collaboration js-section pt-5 px-3">
			<div className="container-xl">
				<div className="d-flex js-build-in-trigger position-relative">
					<div className="col-1 d-flex flex-column flex-items-center">
						<div
							className="mb-4 position-relative home-campaign-glowing-icon js-build-in-item build-in-scale-fade"
							style={{ transitionDelay: "0ms" }}
						>
							<svg
								aria-hidden="true"
								height="24"
								viewBox="0 0 24 24"
								version="1.1"
								width="24"
								data-view-component="true"
								className="octicon octicon-code-of-conduct"
							>
								<path d="M2.828 4.328C5.26 1.896 9.5 1.881 11.935 4.317c.024.024.046.05.067.076 1.391-1.078 2.993-1.886 4.777-1.89a6.22 6.22 0 0 1 4.424 1.825c.559.56 1.023 1.165 1.34 1.922.318.756.47 1.617.468 2.663 0 2.972-2.047 5.808-4.269 8.074-2.098 2.14-4.507 3.924-5.974 5.009l-.311.23a.752.752 0 0 1-.897 0l-.312-.23c-1.466-1.085-3.875-2.869-5.973-5.009-2.22-2.263-4.264-5.095-4.27-8.063a6.216 6.216 0 0 1 1.823-4.596Zm8.033 1.042c-1.846-1.834-5.124-1.823-6.969.022a4.712 4.712 0 0 0-1.382 3.52c0 2.332 1.65 4.79 3.839 7.022 1.947 1.986 4.184 3.66 5.66 4.752a78.214 78.214 0 0 0 2.159-1.645l-2.14-1.974a.752.752 0 0 1 1.02-1.106l2.295 2.118c.616-.52 1.242-1.08 1.85-1.672l-2.16-1.992a.753.753 0 0 1 1.021-1.106l2.188 2.02a18.963 18.963 0 0 0 1.528-1.877l-.585-.586-1.651-1.652c-1.078-1.074-2.837-1.055-3.935.043-.379.38-.76.758-1.132 1.126-1.14 1.124-2.96 1.077-4.07-.043-.489-.495-.98-.988-1.475-1.482a.752.752 0 0 1-.04-1.019c.234-.276.483-.576.745-.893.928-1.12 2.023-2.442 3.234-3.576Zm9.725 6.77c.579-1.08.92-2.167.92-3.228.002-.899-.128-1.552-.35-2.08-.22-.526-.551-.974-1.017-1.44a4.71 4.71 0 0 0-3.356-1.384c-1.66.004-3.25.951-4.77 2.346-1.18 1.084-2.233 2.353-3.188 3.506l-.351.423c.331.332.663.664.993.998a1.375 1.375 0 0 0 1.943.03c.37-.365.748-.74 1.125-1.118 1.662-1.663 4.373-1.726 6.06-.045.56.558 1.12 1.12 1.658 1.658Z"></path>
							</svg>
							<span
								className="position-absolute left-0 top-0 height-full width-full home-campaign-glowing-icon-glow circle z-n1"
								style={{
									backgroundColor: "var(--mktg-accent-primary)",
									filter: "blur(18px)",
								}}
							></span>
						</div>
						<div
							className="home-campaign-git-line height-full rounded js-build-in-item build-in-scale-top"
							style={{
								background:
									"linear-gradient(rgb(247, 120, 186) 40%, transparent)",
								transitionDelay: "500ms",
							}}
							data-build-delay="500"
						></div>
					</div>
					<div className="col-11 col-lg-8 ml-2 ml-md-0 mb-6 mb-md-10 pr-lg-3">
						<h3
							className="h5-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
							style={{ transitionDelay: "200ms" }}
						>
							Learning
						</h3>
						<h2
							className="h4-mktg mb-4 text-medium js-build-in-item build-in-slideX-left"
							style={{ transitionDelay: "300ms" }}
						>
							<span className="h3-mktg text-accent-primary d-block">
								Personal Projects
							</span>
							Stuff I made for fun
						</h2>
					</div>
					{/* Rotating image */}
					{/* [ ] FIX OVERFLOW */}
					<img
						alt=""
						aria-hidden="true"
						width="502"
						height="735"
						className="overflow animation-rotate position-absolute height-auto d-none d-md-block col-5 events-none js-build-in-item build-in-fade"
						style={{ top: "-9%", right: "-12%", transitionDelay: "1000ms!" }}
						loading="lazy"
						decoding="async"
						src="https://github.githubassets.com/assets/shape-3-9e542b5c31b8.svg"
					></img>
				</div>

				{/* IMAGEN CENTRAL */}

				{/* <picture>
        <source srcSet={PORTAL} type='image/webp'/>
        <img className="position-relative z-1 width-full height-auto d-block rounded-3 border box-shadow-card-dark-mktg" loading="lazy" decoding="async" alt="Illustration of project table view with cards grouped by 'Feature planning' phase." src={PORTAL}></img>
        </picture> */}
				{/* <img className="position-relative z-1 width-full height-auto d-block rounded-3 js-build-in-item build-in-fade" loading="lazy" decoding="async" alt="" aria-hidden="true" src='https://cms.eperezme.com/uploads/Circular_Tree_5fc6a8d9ab.svg'></img> */}
				<img
					className="position-relative z-1 width-full height-auto d-block rounded-3 js-build-in-item build-in-fade"
					loading="lazy"
					decoding="async"
					alt=""
					aria-hidden="true"
					src="https://cms.eperezme.com/uploads/BENRETALLAT_0019fa9677.svg"
				></img>

				<div className="d-flex position-relative">
					<div className="col-1 d-flex flex-column flex-items-center position-relative js-build-in-trigger">
						<div
							className="home-campaign-git-line height-full position-relative z-1 js-build-in-item build-in-scale-top"
							style={{
								transitionDuration: "1100ms",
								background:
									"linear-gradient(transparent, #F778BA, #F778BA, transparent)",
							}}
						></div>
						<img
							alt=""
							aria-hidden="true"
							width="81"
							height="612"
							style={{
								left: "calc(50% - 2px)",
								height: "auto",
								maxWidth: "9vw",
							}}
							className="d-none d-md-block position-absolute js-build-in-item build-in-scale-fade bottom-0"
							loading="lazy"
							decoding="async"
							src="https://github.githubassets.com/assets/git-branch-collaboration-2-e46b1fb1d363.svg"
						></img>
					</div>
					<div className="col-11 ml-2 ml-md-6">
						<div className="river-mktg js-build-in-trigger d-flex gutter gutter-spacious my-5 my-sm-7 my-md-8 position-relative flex-column-reverse flex-md-items-center flex-md-row flex-column pb-4 pb-md-7">
							<div
								className="col-12 py-3 mb-2 js-build-in-item col-sm-10 col-md-6 text-left col-lg-6 build-in-slideX-right"
								style={{ transitionDelay: "0ms" }}
							>
								<div className="pr-md-4">
									<h2 className="color-fg-default mb-3 f2-mktg color-fg-muted">
										In microscopic marvels and cosmic tapestries,{" "}
										<em>evolution's grand narrative unfolds</em>.
									</h2>

									{/* [ ] Link */}
									{/* <a className="link-mktg text-semibold color-fg-default py-1 f3-mktg" href="">
                    Lorem ipsum very long link <svg xmlns="http://www.w3.org/2000/svg" className="octicon arrow-symbol-mktg" width="16" height="16" viewBox="0 0 16 16" fill="none"><path fill="currentColor" d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"></path><path className="octicon-chevrow-stem" stroke="currentColor" d="M1.75 8H11" strokeWidth="1.5" strokeLinecap="round"></path></svg>
                  </a> */}
								</div>
							</div>
							<div className="col-12 py-3 col-md-6 col-lg-6">
								<div className="position-relative">
									<div className="d-flex flex-column position-relative">
										<div
											className="js-build-in-item build-in-slideY overflow-hidden rounded-2 position-relative left-4 z-1"
											style={{
												maxWidth: "700px",
												marginTop: "-50%",
												transitionDelay: "100ms",
											}}
										>
											<img
												src="https://cms.eperezme.com/uploads/BBML_black_5c4f561b3b.svg"
												className="width-full height-auto d-block"
												alt=""
											/>
										</div>
										<img
											alt=""
											aria-hidden="true"
											width="1000"
											height="1000"
											className="position-absolute d-none d-md-block events-none js-build-in-item build-in-fade"
											style={{
												bottom: "var(--mouse-y)",
												right: "var(--mouse-x)",
												transitionDelay: "200ms",
											}}
											loading="lazy"
											decoding="async"
											src="https://github.githubassets.com/assets/bg-glow-purple-6e9a6a96cb04.png"
										></img>
									</div>
								</div>
							</div>
						</div>
						<div className="mb-6 mb-md-9 pb-4 js-build-in-trigger">
							<div className="py-3 text-left col-sm-10 col-md-6 col-lg-3 js-build-in-item build-in-slideX-left">
								<div
									className="gradient-border-mktg d-inline-block z-1 position-relative px-2 lh-condensed f6-mktg"
									style={{ top: "-1px" }}
								>
									<span className="text-gradient-mktg text-semibold">
										What more?
									</span>
								</div>
								<h3 className="text-accent-primary mb-2 mt-3 h1-mktg text-medium">
									Other Projects
								</h3>
								<p className="mb-3 f2-mktg text-medium col-6-max">
									Here you can view and browse other non biology projects I have
									worked on.
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* CARDS */}
				<div className="d-flex flex-column flex-md-row gutter js-build-in-trigger mb-3 mb-md-5">
					{/* Left Card */}
					<div className="position-relative z-1 col-md-6 d-flex">
						<Tilt>
							<card-skew
								class="overflow-hidden rounded-3 mb-3 mb-md-5"
								data-catalyst
								data-perspective="700"
							>
								<div
									className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
									data-target="card-skew.bounding"
								>
									<div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
										<h3 className="h3-mktg">
											🪐<em>Keplerian Orbits </em>
										</h3>
										<p className="f2-mktg text-medium color-fg-muted mb-4">
											<br />A Java application for simulating Keplerian orbits.
										</p>
										<div>
											<a
												className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
												href="https://github.com/eperezme/KeplerianOrbits"
											>
												Source Code{" "}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="octicon arrow-symbol-mktg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														fill="currentColor"
														d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
													></path>
													<path
														className="octicon-chevrow-stem"
														stroke="currentColor"
														d="M1.75 8H11"
														strokeWidth="1.5"
														strokeLinecap="round"
													></path>
												</svg>
											</a>
										</div>
									</div>
									<div className="overflow-hidden rounded-bottom-3">
										{/* <picture> */}
										{/* <source srcSet={PORTAL} type='image/webp'/> */}
										<img
											className="width-full d-block height-auto js-build-in-item build-in-scale-up rounded-bottom-img"
											loading="lazy"
											decoding="async"
											alt=""
											aria-hidden="true"
											src="https://cdn.eperezme.com/upload/h_600,o_webp/https://cms.eperezme.com/uploads/orbit_e10_az90_9941f0473b.png"
										></img>
										{/* </picture> */}
									</div>
									<div
										data-target="card-skew.shine"
										className="position-absolute events-none z-n1"
									></div>
								</div>
							</card-skew>
						</Tilt>
					</div>

					{/* Right Card */}
					<div className="col-md-6 d-flex">
						<Tilt>
							<card-skew
								class="overflow-hidden rounded-3 mb-3 mb-md-5"
								data-catalyst
								data-perspective="700"
								style={{
									transform:
										"perspective(700px) rotateX(-0.03deg) rotateY(-0.03deg)",
								}}
							>
								<div
									className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-column"
									data-target="card-skew.bounding"
								>
									<div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 flex-justify-start">
										<h3 className="h3-mktg">
											📄<em>CodeBlog </em>
										</h3>
										<p className="f2-mktg text-medium color-fg-muted mb-4">
											<br />
											<em>My personal blog </em>
											where I write about things I do and learn related to
											coding.
										</p>
										<div className="d-flex flex-row">
											<a
												className="text-semibold btn-mktg py-1 f3-mktg"
												href="https://blog.eperezme.com/"
											>
												Blog
											</a>
											<a
												className="ml-6 link-mktg text-semibold color-fg-default py-1 f3-mktg"
												href="https://github.com/eperezme/CodeBlog"
											>
												Source Code{" "}
												<svg
													xmlns="http://www.w3.org/2000/svg"
													className="octicon arrow-symbol-mktg"
													width="16"
													height="16"
													viewBox="0 0 16 16"
													fill="none"
												>
													<path
														fill="currentColor"
														d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
													></path>
													<path
														className="octicon-chevrow-stem"
														stroke="currentColor"
														d="M1.75 8H11"
														strokeWidth="1.5"
														strokeLinecap="round"
													></path>
												</svg>
											</a>
										</div>
									</div>
									<div className="overflow-hidden rounded-bottom-3">
										{/* <picture> */}
										{/* <source srcSet={PORTAL} type='image/webp'/> */}
										<img
											className="width-full d-block height-auto js-build-in-item build-in-scale-up rounded-bottom-img"
											loading="lazy"
											decoding="async"
											alt=""
											aria-hidden="true"
											src="https://cdn.eperezme.com/upload/o_webp/https://i.imgur.com/71aIpTd.png"
										></img>
										{/* </picture> */}
									</div>
									<div
										data-target="card-skew.shine"
										className="position-absolute events-none z-n1"
									></div>
								</div>
							</card-skew>
						</Tilt>
					</div>
				</div>

				{/* Horizontal Card */}
				<Tilt>
					<card-skew
						class="overflow-hidden rounded-3 mb-3 mb-md-5"
						data-catalyst
						data-perspective="700"
						data-tilt
						data-tilt-max="1.5"
						data-tilt-perspective="500"
					>
						<div
							className="feature-card-mktg d-md-flex rounded-3 color-bg-subtle border position-relative flex-justify-between z-1 height-full flex-row"
							data-target="card-skew.bounding"
						>
							<div className="d-md-flex flex-column flex-1 p-5 p-sm-6 py-lg-8 pl-lg-8 pr-lg-12 col-md-6 flex-justify-between">
								<h3 className="h3-mktg">
									💻<em>My portfolio </em>
								</h3>
								<p className="f2-mktg text-medium color-fg-muted mb-4">
									<em>This portfolio </em>
									that you are watching was made from scratch, without knowing
									HTML, CSS or JS.
								</p>
								<div>
									{/* [ ] Link */}
									<a
										className="link-mktg text-semibold color-fg-default py-1 f3-mktg"
										href="https://github.com/eperezme/Wepage.git"
									>
										Source Code{" "}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="octicon arrow-symbol-mktg"
											width="16"
											height="16"
											viewBox="0 0 16 16"
											fill="none"
										>
											<path
												fill="currentColor"
												d="M7.28033 3.21967C6.98744 2.92678 6.51256 2.92678 6.21967 3.21967C5.92678 3.51256 5.92678 3.98744 6.21967 4.28033L7.28033 3.21967ZM11 8L11.5303 8.53033C11.8232 8.23744 11.8232 7.76256 11.5303 7.46967L11 8ZM6.21967 11.7197C5.92678 12.0126 5.92678 12.4874 6.21967 12.7803C6.51256 13.0732 6.98744 13.0732 7.28033 12.7803L6.21967 11.7197ZM6.21967 4.28033L10.4697 8.53033L11.5303 7.46967L7.28033 3.21967L6.21967 4.28033ZM10.4697 7.46967L6.21967 11.7197L7.28033 12.7803L11.5303 8.53033L10.4697 7.46967Z"
											></path>
											<path
												className="octicon-chevrow-stem"
												stroke="currentColor"
												d="M1.75 8H11"
												strokeWidth="1.5"
												strokeLinecap="round"
											></path>
										</svg>
									</a>
								</div>
							</div>
							<div className="overflow-hidden col-md-6 rounded-right-3">
								<div className="">
									{/* [ ] IMAGE */}
									{/* <picture> */}
									{/* <source srcSet={PORTAL} type='image/webp'/> */}
									<img
										className="width-full d-block height-auto js-build-in-item build-in-scale-fade rounded-right-img"
										loading="lazy"
										decoding="async"
										alt=""
										aria-hidden="true"
										src="https://cdn.eperezme.com/upload/w_600,o_webp/https://cms.eperezme.com/uploads/principal_f404945add.png"
									/>
									{/* </picture> */}
								</div>
							</div>
							<div
								data-target="card-skew.shine"
								className="position-absolute events-none z-n1"
							></div>
						</div>
					</card-skew>
				</Tilt>
			</div>
		</div>
	);
}

export default Projects;
