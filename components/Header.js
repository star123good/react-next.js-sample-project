import React from 'react';
import { Menu } from 'semantic-ui-react';

export default () => {
    return (
        <Menu style={{ marginTop: '10px' }}>
            <Menu.Item>
                First
            </Menu.Item>
            <Menu.Item>
                Second
            </Menu.Item>
            <Menu.Menu position="right">
                <Menu.Item>
                    Right
                </Menu.Item>
            </Menu.Menu>
        </Menu>
    );
};