import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createAppStore} from 'store';
import App from './app';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        (
            <Provider store={createAppStore()}>
                <App />
            </Provider>
        ),
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
