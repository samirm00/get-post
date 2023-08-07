import dom from '../dom.js';
import createPost from '../components/createPost.js';
import getPosts from '../../apis/getPosts.js';

const loadHandler = () => {
    getPosts()
        .then((todos) => {
            todos.forEach((todoData) => {
                const todoDom = createPost(todoData);
                dom.root.append(todoDom);
            });
        })
        .catch((err) => console.error(err));
};

export default loadHandler;
