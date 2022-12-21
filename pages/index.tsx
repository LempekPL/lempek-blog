import Blog from "../components/Blog";
import type {Post} from "../types/blog";

const Index = ({posts}: { posts: Post[] }) => {
    return <>
        <Blog posts={posts}/>
    </>;
}

export const getStaticProps = async () => {
    return {
        props: {
            posts
        },
        revalidate: 60 * 60
    }
}

export default Index;

// test posts
const posts: Post[] = [
    {
        id: "1",
        name: "This is test one",
        date: "2022-12-21T23:23:55.008Z",
        likes: 0,
        thumbnail: null,
        description: "This is test description",
        content: [
            {
                key: "first",
                type: "text",
                contents: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent egestas auctor turpis sed mollis. Donec in turpis vel metus tincidunt mollis. Vivamus tempus, velit vel facilisis consequat, odio turpis tristique ligula, ullamcorper ultrices elit leo non mi."
            },
            {
                key: "second",
                type: "text",
                contents: "Proin dui quam, interdum in ex eu, facilisis condimentum justo. Duis congue efficitur eros, at tincidunt sem eleifend ut. Curabitur sem eros, tincidunt quis gravida sed, aliquam eget sem. Donec fringilla nulla id dapibus tincidunt. Aenean id volutpat urna, vitae laoreet sem. Donec gravida sit amet eros viverra maximus."
            },
            {
                key: "third",
                type: "text",
                contents: "Curabitur rhoncus blandit quam vitae pellentesque. Fusce sagittis urna erat, eu tincidunt massa feugiat in. Vestibulum ultricies vel sem eget feugiat."
            }
        ],
        comments: []
    },
    {
        id: "2",
        name: "This is test two",
        date: "2022-12-21T22:23:55.008Z",
        likes: 10,
        thumbnail: "/images/lempek.png",
        description: null,
        content: [
            {
                key: "first",
                type: "text",
                contents: "Proin dui quam, interdum in ex eu, facilisis condimentum justo. Duis congue efficitur eros, at tincidunt sem eleifend ut. Curabitur sem eros, tincidunt quis gravida sed, aliquam eget sem. Donec fringilla nulla id dapibus tincidunt. Aenean id volutpat urna, vitae laoreet sem. Donec gravida sit amet eros viverra maximus."
            },
            {
                key: "second",
                type: "text",
                contents: "Curabitur rhoncus blandit quam vitae pellentesque. Fusce sagittis urna erat, eu tincidunt massa feugiat in. Vestibulum ultricies vel sem eget feugiat."
            }
        ],
        comments: []
    }
]
