import React from 'react'

import giftshop from "../assets/giftshop.png"
import dinspiration from "../assets/dinspiration.png"
import criptocurrency from "../assets/criptocurrency.png"
import spaceinvaders from "../assets/spaceinvaders.png"



const Projects = () => {
	const projects = [
		{
			id: 1,
			src: giftshop,
		},
		{
			id: 2,
			src: dinspiration
		},
		{
			id: 3,
			src: criptocurrency
		},
		{
			id: 4,
			src: spaceinvaders
		},
	]
	return (
		<div
			name='projects'
			className='bg-gray-500 w-full text-white md:h-screen'>
			<div className='max-w-screen-lg pt-30 mx-auto flex flex-col w-full h-full'>
				<div className='pb-40'>
					<p className='py-8 text-3xl text-white font-bold flex justify-center border-b-4 border-white'>
						Projects
					</p>
					<p className='py-8 text-bold flex justify-center text-2xl'>Check out some of my work here</p>
				</div>
				<div className='grid sm:grid-cols-1 md:grid-cols-4 gap-10px md:pt-[-10]'>
					{projects.map(({ id, src }) => (
						<div key={id} className='shadow-md shadow-white rounded-lg'>
							<img
								src={src}
								alt=''
								className='rounded-md duration-200 hover:scale-105'
							/>
							<div className='flex items-center justify-center'>
								<button className='w-1/2 px-4 py-1 m-4 duration-200
							hover:scale-105'>
									<a href="https://github.com/shkendi"
										className='px-5'>ReadMe</a>
								</button>
							</div>
						</div>
					))}
				</div>

			</div>
		</div>
	)
}

export default Projects