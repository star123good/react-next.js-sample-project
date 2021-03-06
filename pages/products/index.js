import React from 'react';
import { Button } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import { Link } from '../../routes';

export default () => {
    return (
        <Layout>
            <h1>This is Product List page.</h1>
            <Link route="/products/10">
                <a>
                    <Button>Go Products/10</Button>
                </a>
            </Link>
        </Layout>
    );
};