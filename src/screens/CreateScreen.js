import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const ShowScreen = ({ navigation }) => {

    const { addBlogPost } = useContext(Context);

    return <BlogPostForm />

};

const styles = StyleSheet.create({

});

export default ShowScreen;