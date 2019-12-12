import React, { useState } from 'react';
import { Form, Input, Modal, Button, Row, Col, Icon, message } from 'antd';

import '../../../static/css/CGitAddModal.less';
import '../../../static/css/CGitContent.less';

//import { AddGitContent } from '../../../utils/AddGitContent';
import { addGitContent } from '../../../utils/addGitContent';

function CGitAddModal(props) {
    const [loading, setloading] = useState(false);
    const [visible, setvisible] = useState(false);
    const showModal = () => {
        setvisible(true);
    };

    const handleOk = () => {
        setloading(true);
        props.inAdd();
        setvisible(false);
        setloading(false);

    };

    const handleCancel = () => {
        setvisible(false);
    };


    return (
        <div >
            <div className="divContaner " onClick={showModal}>
                <div className="AddDivBlock divBlock">
                    <svg t="1575510123505" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1410" width="90" height="90"><path d="M937 442.66H547V86.25a35 35 0 0 0-70 0v356.41H87a35 35 0 0 0 0 70h390V871a35 35 0 0 0 70 0V512.66h390a35 35 0 1 0 0-70z" fill="#CCCCCC" p-id="1411"></path></svg>
                </div>
            </div>
            <Modal

                visible={visible}
                title="导入issues"

                onCancel={handleCancel}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        返回
                     </Button>,
                    <Button key="submit" type="primary" loading={loading} onClick={function (event) { handleOk() }}>
                        导入
                    </Button>,
                ]}
            >
                <div>
                    <span>git url:</span><input className='gitIntrosInput'></input>
                </div>
            </Modal>
        </div>
    );

}

export default CGitAddModal;