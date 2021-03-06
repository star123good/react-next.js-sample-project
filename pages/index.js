import React from 'react';
import { Card } from 'semantic-ui-react';
import Layout from '../components/Layout';

export default () => {
    return (
        <Layout>
            <h1>Hello, there!</h1>
            <Card>
                <Card.Header>
                    Index
                </Card.Header>
                <Card.Content>
                    This is Index Page
                </Card.Content>
            </Card>
        </Layout>
    );
};