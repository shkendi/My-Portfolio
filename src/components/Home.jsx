import React from 'react'
import photo from '../assets/photo.png'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'
const About = () => {
	return (
		<div
			name="home" classname="h-screen w-full bg-gradient-to-b
    from-black to-gray-800"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col
		items-center justify-center h-full px-4 md:flex-row bg-gradient-to-b from-gray-400 to-gray-600">
				<div>
					<img src={photo} alt="my profile"
						className='rounded-2xl mx-auto w-2/3 md:w-2/3'
					/>
				</div>

				<div class="flex flex-col justify-center h-full">
					<h2 className='text-3xl mt-8 md:text-5xl font-bold text-white'>
						I am a Full Stack Developer
					</h2>
					<p className='text-white py-4 max-w-md'>
						I am a dedicated and enthusiastic Software Engineer with a passion
						for problem-solving and creating innovative solutions.</p>
					<br />

					<p className='text-white'>
						My strong foundation in software development principles, coupled with
						my proficiency in programming languages such as JavaScript and Python, enables me
						to easily tackle complex challenges. I possess great communication skills,
						empowering me to collaborate effectively with cross-functional teams and stakeholders.</p>
					<br>
					</br>
					<p className='text-white'>
						I am committed to delivering high-quality work and continuously striving to improve
						my skills and knowledge to create software that meets the needs of end users.
					</p>
					<div>
						<Link
							to="contact"
							smoth duration={500}
							className="group text-gray-900 w-fit px-6 py-3 my-2 flex items-center 
						rounded-md bg-gradient-to-r from-cyan-300 to-green-500 cursor-pointer">
							Contact
							<span className="group-hover:rotate-90 duration-300">
								<MdOutlineKeyboardArrowRight size={30} className="ml-1" />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	)
}

export default About