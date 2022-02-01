import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { SectionTitle } from '../../styles/GlobalComponents'

import { SocialIcons } from '../Header/HeaderStyles'
import {
	CompanyContainer,
	FooterWrapper,
	LinkColumn,
	LinkItem,
	LinkList,
	LinkTitle,
	Slogan,
	SocialContainer,
	SocialIconsContainer,
} from './FooterStyles'

const Footer = () => {
	return (
		<FooterWrapper>
			<SectionTitle>Contact</SectionTitle>
			<LinkList>
				{/* <LinkColumn>
					<LinkTitle>Call</LinkTitle>
					<LinkItem href='tel:314-343-3432'>314-343-3432</LinkItem>
				</LinkColumn> */}
				<LinkColumn>
					<LinkTitle>
						Email <br /> (click below to send a mail)
					</LinkTitle>
					<LinkItem href='mailto:shouravrahman006@gmail.com'>
						shouravrahman006@gmail.com
					</LinkItem>
				</LinkColumn>
			</LinkList>
			<SocialIconsContainer>
				{/* <CompanyContainer>
					<Slogan>Innovating one project at a time</Slogan>
				</CompanyContainer> */}
				<SocialContainer>
					<SocialIcons href='https://github.com/shouravrahman'>
						<AiFillGithub size='3rem' />
					</SocialIcons>
					<SocialIcons href='https://linkedin.com/shouravrahman'>
						<AiFillLinkedin size='3rem' />
					</SocialIcons>
				</SocialContainer>
			</SocialIconsContainer>
		</FooterWrapper>
	)
}

export default Footer
