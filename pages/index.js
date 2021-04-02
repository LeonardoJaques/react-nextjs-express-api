import axios from 'axios';
import Link from 'next/link';

function Index({ posts }) {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Intedex Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/p/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
//jsonplaceholder.typicode.com/posts
Index.getInitialProps = async ({ posts }) => {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
  const { data } = res;
  return { posts: data };
};

export default Index;
