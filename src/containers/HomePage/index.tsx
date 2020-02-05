import * as React from 'react'
import PersonalBlogWrapper from './style'
import Intro from './Intro'
import Posts from './Posts'
import FeaturedPosts from './FeaturedPost'
import InstagramShowcase from '../InstagramShowcase'

type PersonalBlogProps = {}

const PersonalBlog: React.FunctionComponent<PersonalBlogProps> = ({ ...props }) => {
	return (
		<PersonalBlogWrapper {...props}>
			<Intro />
			<FeaturedPosts />
			<Posts />
			{process.env.INSTAGRAM_TOKEN == '' ? '' : <InstagramShowcase />}
		</PersonalBlogWrapper>
	)
}

export default PersonalBlog
