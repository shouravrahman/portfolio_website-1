import React from 'react'

import {
	Section,
	SectionDivider,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents'

const Timeline = () => {
	// snap back to beginning of scroll when window is resized
	// avoids a bug where content is covered up if coming from smaller screen

	return (
		<Section id='about'>
			<SectionTitle>About Me</SectionTitle>
			<SectionText>
				I am a Javascript developer experienced in NodeJs,React,Nextjs and related
				tools and technologies.
				<br />
				<br />I love working with Javascript and its ecosystem.
			</SectionText>

			<SectionDivider />
		</Section>
	)
}

export default Timeline
