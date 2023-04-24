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
import {useEffect, useState} from "react";
import {useDebounce, useEffectOnce} from "usehooks-ts";

export const BlogComponent = ({posts}: { posts: Post[] }) => {
    const [postsList, setPostsList] = useState<JSX.Element[]>([]);
    const [value, setValue] = useState<string>("");
    const debouncedKeyword = useDebounce<string>(value, 300)

    useEffectOnce(() => {
        const postComponents: JSX.Element[] = []
        for (let i = 0; i < posts.length; i++) {
            let img;
            if (posts[i].thumbnail) {
                img = <PostThumbnail>
                    <Image src={posts[i].thumbnail as string} alt="thumbnail" fill/>
                </PostThumbnail>
            }
            let desc;
            if (posts[i].description) {
                desc = posts[i].description;
            } else {
                desc = posts[i].content[0].type === "text" ? posts[i].content[0].contents : posts[i].content[1].contents;
            }
            postComponents.push(<PostBox key={posts[i].id}>
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
        setPostsList(postComponents)
    });

    const searchPosts = (value: string) => {
        setValue(value)
    }

    useEffect(() => {
        console.log(debouncedKeyword)
        let orderedPosts = posts
            .filter(post => {
                return post.name.toLowerCase().includes(debouncedKeyword.toLowerCase());
            })
            .sort((a, b) => {
                if (a.name.toLowerCase().indexOf(debouncedKeyword.toLowerCase()) > b.name.toLowerCase().indexOf(debouncedKeyword.toLowerCase())) {
                    return 1;
                } else if (a.name.toLowerCase().indexOf(debouncedKeyword.toLowerCase()) < b.name.toLowerCase().indexOf(debouncedKeyword.toLowerCase())) {
                    return -1;
                }
                if (a.name > b.name) return 1;
                return -1;
            });
        const postComponents: JSX.Element[] = [];
        for (let i = 0; i < orderedPosts.length; i++) {
            let img;
            if (orderedPosts[i].thumbnail) {
                img = <PostThumbnail>
                    <Image src={orderedPosts[i].thumbnail as string} alt="thumbnail" fill/>
                </PostThumbnail>
            }
            let desc;
            if (orderedPosts[i].description) {
                desc = orderedPosts[i].description;
            } else {
                desc = orderedPosts[i].content[0].type === "text" ? posts[i].content[0].contents : posts[i].content[1].contents;
            }
            postComponents.push(<PostBox key={orderedPosts[i].id}>
                {img}
                <PostContent>
                    <PostTop>
                        <PostName>
                            {orderedPosts[i].name}
                        </PostName>
                        <PostLikes>
                            {orderedPosts[i].likes}
                        </PostLikes>
                    </PostTop>
                    <PostDesc>
                        {desc}
                    </PostDesc>
                    <PostStats>
                        <PostComments>
                            {orderedPosts[i].comments.length}
                        </PostComments>
                        <PostTime>
                            {new Date(orderedPosts[i].date).toLocaleString()}
                        </PostTime>
                    </PostStats>
                </PostContent>
            </PostBox>)
        }
        setPostsList(postComponents)
    }, [debouncedKeyword, posts])

    return <>
        <MainLayout>
            <MainBox>
                <SearchBar searchPosts={searchPosts}/>
                <PostsBox>
                    {postsList.map((item) => item)}
                </PostsBox>
            </MainBox>
        </MainLayout>
    </>
}