import React from 'react';
import Layout from '../../components/Layout';

export default (props) => {
    return (
        <Layout>
            <h1>This is product page.</h1>
            <p>Product id is {props.url.query.id}.</p>
        </Layout>
    );
};