import React from 'react'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
// import { Link } from 'react-scroll'


const Contact = () => {
	// const social = [

	// ]
	return (
		<div
			name='contact'
			className='w-full h-screen bg-gradient-to-b from-gray-500 to-green-200
		p-4 text-gray-800'>
			<div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
				<div className='pb-8'>
					<p className='text-3xl flex justify-center font-bold border-b-4
					border-gray-700'>Contact Me</p>
					<p className='text-2xl flex justify-center py-6'>Submit the form below to get in touch with me</p>
				</div>

				<div className="flex justify-center items-center">
					<form action="https://getform.io/f/8ecc7a36-a723-41d7-82cf-ac9a6c776533" method="POST" className="text-gray-700 flex flex-col w-full md:w-full h-full">

						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-3 border-2 rounded-md text-gray-700
						focus:outline-none" />

						<input
							type="text"
							name="email"
							placeholder="Enter your email"
							className="p-3 border-2 rounded-md text-gray-700
						focus:outline-none" />
						<textarea
							name="massage"
							placeholder="Enter your message"
							rows="6"
							className="p-3 border-2 rounded-md text-gray-700
						focus:outline-none">
						</textarea>

						<button className="text-white bg-gradient-to-b from-gray-500 to-gray-800
						px-6 py-3 my-8 mx-auto flex items-center rounded-md">
							<p>Send </p>
						</button>
						<p className='flex justify-center text-2xl'>Contact me if you would like to work with me</p>
						<div className='flex justify-evenly'>


							<a href="https://linkedin.com/in/shkendinaqellari"
								className='text-2xl pt-10'>Linkedin<FaLinkedin /></a>

							<a href="https://github.com/shkendi"
								className='text-2xl pt-10'>GitHub<FaGithub /></a>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact