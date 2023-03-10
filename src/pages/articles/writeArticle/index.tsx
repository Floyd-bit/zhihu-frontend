/*
 * @Description: 
 * @version: 1.0
 * @Author: 赵卓轩
 * @Date: 2021-10-27 17:39:37
 * @LastEditors: 赵卓轩
 * @LastEditTime: 2022-05-17 16:57:10
 */
import React, { useCallback, useRef, useState } from "react";
import { Editor } from '@tinymce/tinymce-react';
import { Button, Input, message, Spin } from 'antd';
import { EditOutlined } from "@ant-design/icons";
import { addArticle } from "@/request/api/article";
import router from "umi/router";
import { addArticleParam } from "@/request/api/api";

const { TextArea } = Input;


const WriteArticleComponent: React.FC<{}> = () => {
    const [input, setInput] = useState('');
    const [textInput, setText] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    const editorRef = useRef(null);

    let content = editorRef.current?.getContent();
    let date = new Date().getDate().toLocaleString();
    const articleData: addArticleParam = {
        articleAbstract: textInput,
        articleContentHtml: content,
        articleContentMd: "",
        articleCover: "",
        articleDate: date,
        articleTitle: input
    }
    const log = () => {
        if (!input.length || !textInput.length) {
            message.error({
                content: '标题或摘要不能为空',
                className: 'custom-class',
                style: {
                    marginTop: '8vh',
                },
            });
        } else {
            if (editorRef.current) {
                addArticle(articleData).then((res:any) => {
                      message.success({
                          content: res.result,
                          className: 'success-class',
                          style: {
                              marginTop: '8vh',
                          },
                      });
                      setTimeout(function(){
                          router.push('/articles');
                      },1000);
                  });
            }
        }
    };

    const inputChange = useCallback((e: any) => {
        e.persist();
        setText(e.target.defaultValue)
    },[]);
    const textChange = useCallback((e: any) => {
        e.persist();
        setInput(e.target.defaultValue)
    },[]);
    return (
        <div style={{ height: '60vh', margin: '1em' }}>
            <Spin tip="富文本编辑器加载中..." style={{ visibility: isLoading ? 'visible' : 'hidden', position: 'absolute', top: '20em', left: '40em', zIndex: '99' }}></Spin>
            <Input size="large" placeholder="请输入文章标题" prefix={<EditOutlined />} maxLength={20} onChange={inputChange} />
            <TextArea rows={4} placeholder="请输入文章摘要" onChange={textChange} />
            <Editor
                // selector='editorStateRef'
                apiKey='r98gorx85mnii60u76xmbdf2pwdrgeb0emk5ejkqtz104o2e'
                onInit={(evt, editor) => {editorRef.current = editor; setIsLoading(false);}}
                initialValue="<p>This is the initial content of the editor.</p>"
                init={{
                    height: '100%',
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
            <div className="btnGroup" style={{ marginTop: '1em' }}>
                <Button onClick={log} type='primary'>保存</Button>
                <Button onClick={()=>{router.push('/articles')}}>取消</Button>
            </div>
        </div>

    )
}

export default WriteArticleComponent;