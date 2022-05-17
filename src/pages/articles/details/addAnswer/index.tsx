/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2022-05-17 15:55:00
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-17 18:07:32
 */
import { Editor } from '@tinymce/tinymce-react';
import { Button, Spin } from 'antd';
import React from 'react';
import { useRef, useState } from 'react';

const AddAnswerComponent:React.FC<{fetchAddAnswer: Function, closeAddComponent: Function}> = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const editorRef = useRef(null);

    let content = editorRef.current?.getContent();
    const log = () => {
        if(editorRef.current) {
            props.fetchAddAnswer(content);
            props.closeAddComponent();
        }
            // if (editorRef.current) {
            //     addArticle(articleData).then((res:any) => {
            //           message.success({
            //               content: res.result,
            //               className: 'success-class',
            //               style: {
            //                   marginTop: '8vh',
            //               },
            //           });
            //           setTimeout(function(){
            //               router.push('/articles');
            //           },1000);
            //       });
            // }
    };
    return (
        <div style={{ margin: '1em' }}>
            <Spin tip="富文本编辑器加载中..." style={{ visibility: isLoading ? 'visible' : 'hidden', position: 'absolute', top: '20em', left: '40em', zIndex: '99' }}></Spin>
            <Editor
                // selector='editorStateRef'
                apiKey='r98gorx85mnii60u76xmbdf2pwdrgeb0emk5ejkqtz104o2e'
                onInit={(evt, editor) => {editorRef.current = editor; setIsLoading(false);}}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: '15em',
                    plugins: [
                        'table lists image',
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: `formatselect | image |  bold italic strikethrough forecolor backcolor
            alignleft aligncenter alignright alignjustify
            numlist bullist outdent indent`,
                    file_picker_types: 'image',
                    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
                    // automatic_uploads={false}        
                    images_upload_url: '',
                    language: 'zh_CN',
                    image_uploadtab: true,
                }} />
            <div className="btnGroup" style={{ backgroundColor: 'white', padding: '5px 0', visibility: isLoading ? 'hidden': 'visible' }}>
                <Button onClick={log} type='primary' ghost style={{marginLeft: '90%'}}>发布回答</Button>
            </div>
        </div>
    )
}

export default AddAnswerComponent;