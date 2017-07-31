import React from 'react';
import defaultToolbar from './defaultToolbar';
import Codemirror from 'react-codemirror';

export default () => (
  <div>
    <h4>Customizing toolbar</h4>
    <ol>
      <li><b>toolbarOnFocus</b>: Toolbar is visible only when editor is focused.</li>
      <li><b>toolbarHidden</b>: Toolbar is hidden if this property is true.</li>
      <li><b>toolbar</b>: customizing pre-built toolbar options.</li>
      <li><b>toolbarCustomButtons</b>: adding new options to the toolbar.</li>
    </ol>
    <div className="docs-desc top-margined">
      <b>toolbarOnFocus</b>
    </div>
    <Codemirror
      value={
        '<Editor\n' +
        '  toolbarOnFocus\n' +
        '  wrapperClassName="wrapper-class"\n' +
        '  editorClassName="editor-class"\n' +
        '  toolbarClassName="toolbar-class"\n' +
        '/>'
      }
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
    <div className="docs-desc top-margined">
      <b>toolbarHidden</b>
    </div>
    <Codemirror
      value={
        '<Editor\n' +
        '  toolbarOnFocus\n' +
        '  wrapperClassName="wrapper-class"\n' +
        '  editorClassName="editor-class"\n' +
        '  toolbarClassName="toolbar-class"\n' +
        '/>'
      }
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
    <div className="docs-desc top-margined">
      <b>toolbar</b>
      <div className="docs-desc">
        toolbar property provides a lot of parameters to customize pre-built option in the toolbar.
      </div>
    </div>
    <Codemirror
      value={
        '<Editor\n' +
        '  toolbarHidden\n' +
        '  wrapperClassName="wrapper-class"\n' +
        '  editorClassName="editor-class"\n' +
        '  toolbarClassName="toolbar-class"\n' +
        '  toolbar={{\n' +
        '    inline: { inDropdown: true },\n' +
        '    list: { inDropdown: true },\n' +
        '    textAlign: { inDropdown: true },\n' +
        '    link: { inDropdown: true },\n' +
        '    history: { inDropdown: true },\n' +
        '  }}\n' +
        '/>'
      }
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
    <div className="docs-desc top-margined">
      Default value of toolbar property is as shown below. The various parameters and their use is:
      <ol>
        <li><b>options</b>: Its an array of available options in the toolbar and in each menu option. Only those options specified in this property are added to toolbar and in the order in which they are specified. By default all options are present. In case of fontSize options can be used to add more font-sizes to the droption.</li>
        <li><b>classname</b>: This property can be used to pass classname for buttons and dropdowns in the toolbar.</li>
        <li><b>inDropdown</b>: If there are multiple related options like inline styles, lists this can be used to group them in dropdown.</li>
        <li><b>component</b>: This property can be used to configure a custom compoennt to be used for toolbar options, instead of the pre-built ones.</li>
        <li><b>icon</b>: This can be used to specify icon for toolbar buttons.</li>
        <li><b>colorPicker: colors</b>: This is array of colors to be shown in color-picker. Value should be a rgb value.</li>
        <li><b>link: showOpenOptionOnHover</b>: If this is true a small arrow icon is shown over links on hover. Clicking this icon will open link in new tab. Value is true by default.</li>
        <li><b>link: defaultTargetOption</b>: This property sets the target of link in the editor. Default value is '_self'.</li>
        <li><b></b>: .</li>
        <li><b></b>: .</li>
        <li><b></b>: .</li>
      </ol>
    </div>
    <Codemirror
      value={defaultToolbar}
      options={{
        lineNumbers: true,
        mode: 'jsx',
        readOnly: true,
      }}
    />
  </div>
)
