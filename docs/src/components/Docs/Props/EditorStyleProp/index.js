import React from 'react';
import Codemirror from 'react-codemirror';

export default () => (
  <div>
    <h4>Styling the editor</h4>
    <div className="docs-desc">
      The editor by default will have uses DraftJS editor as it is without
      any styling and it will occupy 100% width of container.
      Some styling to add border to editor and set width will be nice.
    </div>
    <ol>
      <li><b>wrapperClassName</b>: class applied around both the editor and the toolbar</li>
      <li><b>editorClassName</b>: class applied around both the editor</li>
      <li><b>toolbarClassName</b>: class applied around both the toolbar</li>
      <li><b>wrapperStyle</b>: style object applied around both the editor and the toolbar</li>
      <li><b>editorStyle</b>: style object applied around both the editor</li>
      <li><b>toolbarStyle</b>: style object applied around both the toolbar</li>
    </ol>
    <Codemirror
      value={
        '<Editor\n' +
        '  wrapperClassName="wrapper-class"\n' +
        '  editorClassName="editor-class"\n' +
        '  toolbarClassName="toolbar-class"\n' +
        '  wrapperStyle={<wrapperStyleObject>}\n' +
        '  editorStyle={<editorStyleObject>}\n' +
        '  toolbarStyle={<toolbarStyleObject>}\n' +
        '/>'
      }
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
    <div className="docs-desc top-margined">
      Toolbar can be styles using toolbar property, detailed below. <br />
      For more detailed styling, css classes in react-draft-wysiwyg.css can be overriden.
    </div>
  </div>
);
