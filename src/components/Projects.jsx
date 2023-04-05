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
			title: "Project Four",
			subtitle: "Giftshop",
			description: "The Giftshop app is an online shop for all gift lovers. It is for all of them who believe that buying a present occasionally or regularly can be a life-changer for some of us and a thoughtful gesture towards people we love and care about.",
			href: "https://giftshopapp.netlify.app",
			ReadMe: "https://github.com/shkendi/Pjoject-4/blob/main/README.md",
		},
		{
			id: 2,
			src: dinspiration,
			title: "Project Three",
			subtitle: "Dinspiration",
			description: "Project 3 was a full-stack MERN app that we built for all food lovers that in busy times would like to have something quick and healthy on their table when coming back home.",
			href: " https://dinspiration.netlify.app",
			ReadMe: "https://github.com/shkendi/Dinspiration/blob/main/README.md"
		},
		{
			id: 3,
			src: criptocurrency,
			title: "Project Two",
			subtitle: "Cripto App",
			description: "Project-2 consists in creating a single-page app using React and a public API. I often wondered why people are attracted to virtual coins, wanting to make money in an easy way, and came up with the idea of building my own crypto app.",
			href: "https://criptoapp-project-2.netlify.app/coins",
			ReadMe: "https://github.com/shkendi/Project-2#readme"
		},
		{
			id: 4,
			src: spaceinvaders,
			title: "Project One",
			subtitle: "Space Invaders",
			description: "Space Invaders is my first-ever front-end development project, produced as part of General Assembly's Immersive Software Engineering Bootcamp. My task was to create a grid-based game rendered in the browser that utilises JavaScript, HTML and CSS.",
			href: "https://shkendi.github.io/Project-1/",
			ReadMe: "https://github.com/shkendi/Project-1/blob/main/README.md"
		},
	]
	return (
		<div
			name='projects'
			className='bg-gray-200 w-full text-gray-700 md:h-screen'>
			<div className='max-w-screen-lg pt-6 md:pt-0 mx-auto flex flex-col w-full h-full'>
				<div className='pb-40'>
					<p className='py-0 text-3xl text-gray-700 font-bold flex justify-center border-b-4 border-gray-700'>
						Projects
					</p>
					{/* <p className='py-0 text-bold flex justify-center text-2xl'>Check out some of my work here</p> */}
				</div>
				<div className='grid sm:grid-cols-1 md:grid-cols-4 justify-center p-0 w-full h-full gap-10px'>
					{projects.map(({ id, src, href, ReadMe, title, subtitle, description }) => (
						<div key={id} className='border-4 rounded-lg'>
							<img
								src={src}
								alt=''
								className='rounded-md duration-200 hover:scale-105'
							/>
							<div className='flex items-center justify-center'>
								<button className='w-1/2 px-6 py-3 m-2 duration-200
							hover:scale-105 text-green-600'>
									<a href={href}
										>App</a>
								</button>
								<button className='w-1/2 ps-6 py-3 m-2 duration-200
							hover:scale-105 text-green-600'>
									<a href={ReadMe}
										>ReadMe</a>
								</button>
							</div>
							<div>
							<section>
								<div className='pt-0 px-2'>
								<div><h5 className='text-center'>{title}</h5>
									{/* <p className='text-center'>{subtitle}</p> */}
									<p className='text-4px'>{description}</p></div>
									</div>
							</section>
							</div>
							{/* <div className='flex absolute justify-center'>
								<button className='w-1/2 px-4 py-0 m-4 duration-200
							hover:scale-105 text-green-500'>
									<a href={href}
										className='px-5'>App</a>
								</button>
								<button className='w-1/2 px-4 py-0 m-4 duration-200
							hover:scale-105 text-green-500'>
									<a href={ReadMe}
										className='px-5'>ReadMe</a>
								</button>
							</div> */}
							
						</div>
					))}
					
				</div>

			</div>
		</div>
	)
}

export default Projects