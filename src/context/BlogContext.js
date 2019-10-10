import React, { useReducer } from 'react';

const BlogContext = React.createContext();

const blogReducer = (state, action) => {

    switch (action.type) {

        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}` }];
        default:
            return state;
    }

};

export const BlogProvider = ({ children }) => {

    // old way using useState
    //const [blogPosts, setBlogPosts] = useState([]);

    //new approach using Reducer
    const [blogPosts, dispatch] = useReducer(blogReducer, []);

    //if using useState
    // const addBlogPost = () => {
    //     setBlogPosts([...blogPosts, { title: `Blog Post #${blogPosts.length + 1}` }]);
    // }


    // using Reducer
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' });
    };

    return (
        // <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
        //     {children}
        // </BlogContext.Provider>

        <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
            {children}
        </BlogContext.Provider>
    );
};

export default BlogContext;