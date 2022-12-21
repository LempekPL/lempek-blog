import {MainBox, MainLayout} from "../../styles/universal";
import {Post} from "../../types/blog";
import {
    PostBox,
    PostComments, PostContent,
    PostDesc,
    PostLikes, PostName,
    PostsBox,
    PostStats,
    PostThumbnail, PostTime,
    PostTop
} from "../../styles/Blog/blog";
import SearchBar from "./SearchBar";
import Image from "next/image";

const Blog = ({posts}: {posts: Post[]}) => {
    const posts_list = [];
    for (let i = 0; i < posts.length; i++) {
        let img;
        if (posts[i].thumbnail) {
            img = <PostThumbnail>
                <Image src={posts[i].thumbnail as string} alt="thumbnail" fill />
            </PostThumbnail>
        }
        let desc;
        if (posts[i].description) {
            desc = posts[i].description;
        } else {
            desc = posts[i].content[0].type === "text" ? posts[i].content[0].contents : posts[i].content[1].contents;
        }
        posts_list.push(<PostBox key={posts[i].id}>
            {img}
            <PostContent>
                <PostTop>
                    <PostName>
                        {posts[i].name}
                    </PostName>
                    <PostLikes>
                        {posts[i].likes}
                    </PostLikes>
                </PostTop>
                <PostDesc>
                    {desc}
                </PostDesc>
                <PostStats>
                    <PostComments>
                        {posts[i].comments.length}
                    </PostComments>
                    <PostTime>
                        {new Date(posts[i].date).toLocaleString()}
                    </PostTime>
                </PostStats>
            </PostContent>
        </PostBox>)
    }

    return <>
        <MainLayout>
            <MainBox>
                <SearchBar/>
                <PostsBox>
                    {posts_list}
                </PostsBox>
            </MainBox>
        </MainLayout>
    </>
}

export default Blog;