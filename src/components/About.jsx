import React from 'react'

const About = () => {
	return (
		<div
			name='about'
			className='w-full h-screen bg-gradient-to-b from-green-200 to-white text-gray-800'
		>
			<div className='max-w-screen-lg p-4 mx-auto flex flex-col w-full h-full'>
				<div className='pb-6'>
					<p className='text-4xl pt-6 flex justify-center font-bold text-gray-800 border-b-4 border-gray-700'>
						About Me
					</p>
				</div>
				<section className='text-gray-800'>
					<h4 className='text-2xl' >Travelling</h4>
					<p>I love to explore new cultures and immerse myself in different ways of life. I've had the opportunuty to visit many countries, and I enjoy experiencing local cuisine, architecture, and customs. I also like being close to nature. My last journey was near Toulouse, visiting organic plantations and farms and talking to people to whom farms are treated 100% with organic fertilisers and acknowledging their fantastic job towards nature and the planet.</p>
					<br></br>

					<span><h4 className='text-2xl'>Gardening</h4></span>

					<p className=''>
						I find gardening to be a therapeutic activity that allows me to connect with nature and create something beautiful. I enjoy growing vegetables and herbs, and I live the satisfaction of seeing them flourish
					</p>
					<br />
					<h4 className='text-2xl'>Sports</h4>
					<p className=''>
						I love sports, especially football. I take my son to a local junior team regularly and watching the game is my favourite part of the week. I follow the most important football events and Messi is my favourite footballer.
					</p>
				</section>

			</div>
		</div>
	)
}
export default About

