import React, {useState, useEffect, useCallback} from "react";
import {Editor, Toolbar} from '@wangeditor/editor-for-react'

export default function WangEditor() {
  const [editor, setEditor] = useState(null);
  const [html, setHtml] = useState('<p>hello wangEditor</p>');

  // 模拟 ajax 请求，异步设置 html
  useEffect(() => {
    setTimeout(() => {
      setHtml('<p>hello world</p>')
    }, 1500)
  }, [])

  // 工具栏配置
  const toolbarConfig = {}

  // 编辑器配置
  const editorConfig = {
    placeholder: '请输入内容...',
  }

  // 及时销毁 editor ，重要！
  useEffect(() => {
    return () => {
      if (editor == null) return
      editor.destroy()
      setEditor(null)
    }
  }, [editor])

  const handleEditorChange = useCallback((editor) => {
    setHtml(editor.getHtml());

    const html = editor.getHtml();
    const text = editor.getText();

    console.log('html', html);
    console.log('text', text);
  }, [])

  return (
    <div>
      <div style={{border: '1px solid #ccc', zIndex: 100}}>
        <Toolbar
          editor={editor}
          defaultConfig={toolbarConfig}
          mode="default"
          style={{borderBottom: '1px solid #ccc'}}
        />
        <Editor
          defaultConfig={editorConfig}
          value={html}
          onCreated={setEditor}
          onChange={editor => handleEditorChange(editor)}
          mode="default"
          style={{height: '500px', overflowY: 'hidden'}}
        />
      </div>
      <div style={{marginTop: '15px'}}>
        {html}
      </div>
    </div>
  )
}