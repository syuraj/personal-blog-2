import * as React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'
import { IoMdArrowRoundForward } from 'react-icons/io'
import PostCardMinimal from '../../../components/PostCardMinimal/postCardMinimal'
import { PaginationWrapper, NextPage } from '../../../components/Pagination/pagination.style'
import BlogPostsWrapper, { SecTitle } from './style'

type PostsProps = {}

const Posts: React.FunctionComponent<PostsProps> = (props) => {
	const Data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					title
				}
			}
			allSitePage(filter: { path: { eq: "/page/1" } }) {
				nodes {
					context {
						numPages
						currentPage
					}
				}
			}
			allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2) {
				totalCount
				edges {
					node {
						excerpt(pruneLength: 300)
						fields {
							slug
						}
						frontmatter {
							date(formatString: "DD [<span>] MMM [</span>]")
							title
							description
							tags
							cover {
								childImageSharp {
									fluid(maxWidth: 325, maxHeight: 325, quality: 90) {
										...GatsbyImageSharpFluid_withWebp_tracedSVG
									}
								}
							}
						}
					}
				}
			}
		}
	`)

	const Posts = Data.allMarkdownRemark.edges

	return (
		<BlogPostsWrapper>
			<SecTitle>Latest Posts</SecTitle>
			{Posts.map(({ node }: any) => {
				const title = node.frontmatter.title || node.fields.slug
				return (
					<PostCardMinimal
						key={node.fields.slug}
						title={title}
						image={node.frontmatter.cover == null ? null : node.frontmatter.cover.childImageSharp.fluid}
						url={node.fields.slug}
						description={node.frontmatter.description || node.excerpt}
						date={node.frontmatter.date}
						tags={node.frontmatter.tags}
					/>
				)
			})}

			<PaginationWrapper>
				<div></div>
				<NextPage>
					<Link to="/blog" aria-label="More">
						<IoMdArrowRoundForward />
					</Link>
				</NextPage>
			</PaginationWrapper>
		</BlogPostsWrapper>
	)
}

export default Posts
