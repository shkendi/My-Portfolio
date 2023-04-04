import React from 'react'
import HTML from '../assets/HTML.png'
import CSS from '../assets/CSS.png'
import JavaScript from '../assets/JavaScript.png'
import ReactLogo from '../assets/ReactLogo.png'
import Python from '../assets/Python.png'
import Bulma from '../assets/Bulma.png'
import Tailwind from '../assets/Tailwind.png'
import Flask from '../assets/Flask.png'
import SQL from '../assets/SQL.png'
import MongoDB from '../assets/MongoDB.png'
// import GitHub from '../assets/GitHub.png'
// import SASS from '../assets/SASS.png'
import TypeScript from '../assets/TypeScript.png'
import Express from '../assets/Express.png'



const Skills = () => {
	const techs = [
		{
			id: 1,
			src: HTML,
			title: 'HTML',
			style: 'shadow-orange-500'
		},
		{
			id: 2,
			src: CSS,
			title: 'CSS',
			style: 'shadow-blue'
		},
		{
			id: 3,
			src: JavaScript,
			title: 'JavaScript',
			style: 'shadow-yellow-500'
		},
		{
			id: 4,
			src: ReactLogo,
			title: 'React',
			style: 'shadow-blue-600'
		},
		{
			id: 5,
			src: TypeScript,
			title: 'TypeScript',
			style: 'shadow-blue'
		},
		{
			id: 6,
			src: SQL,
			title: 'SQL',
			style: 'shadow-white'
		},
		{
			id: 7,
			src: Tailwind,
			title: 'Tailwind',
			style: 'shadow-sky-400'
		},
		{
			id: 8,
			src: MongoDB,
			title: 'Mongo',
			style: 'shadow-white'
		},
		{
			id: 9,
			src: Bulma,
			title: 'Bulma',
			style: 'shadow-orange-500'
		},
		{
			id: 10,
			src: Flask,
			title: 'Flask',
			style: 'shadow-white'
		},
		{
			id: 11,
			src: Python,
			title: 'Python',
			style: 'shadow-pink'
		},
		{
			id: 12,
			src: Express,
			title: 'Express',
			style: 'shadow-green-300'
		},
	]
	return (
		<div name='skills'
			className='bg-gradient-to-b from-green-200 to-white w-full h-screen'>
			<div className='max-w-screen-lg mx-auto pb-10 flex
			flex-col justify-center w-full h-full text-white'>
				<div>
					<p className='text-3xl flex justify-center text-gray-700 font-bold border-b-4 border-gray-700 p-0'>
						Skills
					</p>
					{/* <p className='text-2xl flex justify-center py-6 text-black '>These are the technologies I work with</p> */}
				</div>

				<div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-8 text-center items-center justify-between
				py-8 px-12 sm:px-0'>
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={`hover:scale-105 duration-500 py-2 rounded-lg`}>
							<img src={src} alt='' className='w-20 mx-auto' />
							<p className='mt-4 text-black'>{title}</p>
						</div>

					))
					}
				</div>
			</div>
		</div>
	)
}

export default Skills