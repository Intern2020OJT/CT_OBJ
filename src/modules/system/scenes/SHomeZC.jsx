import React from 'react';

import CGitContent from '../components/CGitContent'

import '../../../static/css/homeZC.less';

const SHomeZC = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><a>更新</a></li>
                    <li><a>多选</a></li>
                </ul>
            </nav>
            <div className='contentBody'>
                <div>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                    <CGitContent></CGitContent>
                </div>
            </div>
        </div>
    );
};

export default SHomeZC;