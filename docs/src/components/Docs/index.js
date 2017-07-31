import React, { Component } from 'react';
import Installation from './Installation';
import Usage from './Usage';
import Props from './Props';
import './styles.css';

export default class Demo2 extends Component {

  state: any = {
    editorContent: undefined,
  };

  onEditorChange: Function = (editorContent) => {
    this.setState({
      editorContent,
    });
  };

  render() {
    return (
      <div className="docs-root">
        <Installation />
        <Usage />
        <Props />
        
        <div className="docs-section">
          <div className="docs-label">
            Using custom react component for toolbar options.
          </div>
          <div className="docs-desc">
            Custom react components can be used for exiting toolbar options. For an example check <a href="https://github.com/jpuri/react-draft-wysiwyg/blob/master/docs/src/components/Demo/ColorPic/index.js">here</a>.
            Custom components are passed following 5 properties:
          </div>
          <div>
            <code>
              {'<ColorPickerComponent'}<br />
              &nbsp;&nbsp;{'config={config}'}<br />
              &nbsp;&nbsp;{'translations={translations}'}<br />
              &nbsp;&nbsp;{'onChange={this.toggleColor}'}<br />
              &nbsp;&nbsp;{'expanded={expanded}'}<br />
              &nbsp;&nbsp;{'onExpandEvent={this.onExpandEvent}'}<br />
              &nbsp;&nbsp;{'doExpand={this.doExpand}'}<br />
              &nbsp;&nbsp;{'doCollapse={this.doCollapse}'}<br />
              &nbsp;&nbsp;{'currentState={{ color: currentColor, bgColor: currentBgColor }}'}<br />
              {'/>'}<br />
            </code>
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Adding custom options to toolbar.
          </div>
          <div className="docs-desc">
            Property toolbarCustomButtons can be used to add custom options to the toolbar.
            It takes an array of react components and adds the options in toolbar. Properties editorState and onChange are added to the components.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Internationalizing toolbar.
          </div>
          <div className="docs-desc">
            Toolbar labels can be internationalized using property localization. Localization has 2 parameters: locale and translations. <br/>
            User can either provide locale or a JavaScript object for translations. Currently supported locales are: English('en'), French('fr'), Chinese('zh'), Russian('ru'), Portuguese('pt') and Korean('ko').<br/>
            For an example of translations check <a href="https://github.com/jpuri/react-draft-wysiwyg/blob/master/src/i18n/en.js">here</a>.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Custom block rendering.
          </div>
          <div className="docs-desc">
            Property customBlockRenderFunc can be used to pass function for custom rendering of blocks, <a  target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/draft-js/docs/advanced-topics-block-components.html#custom-block-components">ref.</a>
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Custom decorators.
          </div>
          <div className="docs-desc">
            Property customDecorators can be used to pass an array of custom decorators.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Image
          </div>
          <div className="docs-sub-label">
            Uploading Image
          </div>
          <div className="docs-desc">
            If callback function uploadCallback is passed in toolbar configuration property, image control shows the option to upload image.
            The callback should return a promise.
          </div>
          <div>
            <code>
              {'export default function uploadCallback(file) {'}<br />
              &nbsp;&nbsp;return new Promise(<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'(resolve, reject) => {'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{'resolve({ data: { link: "http://dummy_image_src.com" } });'}<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{'}'}<br />
              &nbsp;&nbsp;);<br />
              {'}'}<br />
              {'<Editor toolbar={{ image: { uploadCallback: this.uploadCallback }}}} />'}
            </code>
          </div>
          <div className="docs-desc top-margined">
            PLEASE NOTE: Property uploadCallback of editor component has been deprecated and will be removed in release 2.0. Its  now recommended to pass uploadCallback inside toolbar property.
          </div>
          <div className="docs-sub-label">
            Set DefaultSize for images
          </div>
          <div className="docs-desc">
            Default image size is (height: auto, width: 100%). This can be overridden using property defaultSize in toolbar configurations.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Enabling mentions
          </div>
          <div className="docs-desc">
            Mentions can be enabled by passing mention property to the editor.
          </div>
          <div>
            <code>
              {'<Editor'}<br />
              &nbsp;&nbsp;{'wrapperClassName="wrapper-class"'} <br />
              &nbsp;&nbsp;{'editorClassName="editor-class"'} <br />
              &nbsp;&nbsp;{'toolbarClassName="toolbar-class"'} <br />
              &nbsp;&nbsp;{'mention={{'} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;separator: {"' '"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;trigger: {"'@'"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;caseSensitive: false, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"mentionClassName: 'mention-className'"},<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"dropdownClassName: 'dropdown-className'"},<br />
              &nbsp;&nbsp;&nbsp;&nbsp;{"optionClassName: 'option-className'"},<br />
              &nbsp;&nbsp;&nbsp;&nbsp;suggestions: [ <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'apple', value: 'apple', url: 'apple' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'banana', value: 'banana', url: 'banana' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'cherry', value: 'cherry', url: 'cherry' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'durian', value: 'durian', url: 'durian' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'eggfruit', value: 'eggfruit', url: 'eggfruit' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'fig', value: 'fig', url: 'fig' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'grapefruit', value: 'grapefruit', url: 'grapefruit' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"{ text: 'honeydew', value: 'honeydew', url: 'honeydew' }"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;], <br />
              &nbsp;&nbsp;{'}}'} <br />
              {'/>'}
            </code>
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Enabling hashtags
          </div>
          <div className="docs-desc">
            Hashtags can be enabled by passing hashtag property to the editor.
          </div>
          <div>
            <code>
              {'<Editor'}<br />
              &nbsp;&nbsp;{'wrapperClassName="wrapper-class"'} <br />
              &nbsp;&nbsp;{'editorClassName="editor-class"'} <br />
              &nbsp;&nbsp;{'toolbarClassName="toolbar-class"'} <br />
              &nbsp;&nbsp;{'hashtag={{'} <br />
              &nbsp;&nbsp;&nbsp;&nbsp;separator: {"' '"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;trigger: {"'#'"}, <br />
              &nbsp;&nbsp;&nbsp;&nbsp;className: {"'hashtag-className'"},<br />
              &nbsp;&nbsp;{'}}'} <br />
              {'/>'}
            </code>
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Embedded links
          </div>
          <div className="docs-desc">
            Embedded link can be added to the editor using embedded control, it shows-up in the editor in fixed dimentions. <br />
            I definitely plan to improve it in future.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            RTL and Text Alignment
          </div>
          <div className="docs-desc">
            DraftJS library has out of box sopport for RTL, it decides text-direction using bidi algorithm. It works at block-level. <br /><br />
            Property 'textAlignment' can be used to force text-alignment in a particular direction. It can have values 'left', 'right' and 'center'.
            It will over-ride the results of bidi-algorigthm. This property will be applicable to all blocks.
            Toobar option of text-alignment will override 'textAlignment' property also at block level.
          </div>
          <div>
            <code>
              {'<Editor textAlignment="left" />'}
            </code>
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            DraftJS Properties
          </div>
          <div className="docs-desc">
            Properties like spellCheck, readOnly, tabIndex, placeholder, stripPastedStyles, etc are passed over to the DraftJS editor component.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            DOM Event Callbacks
          </div>
          <div className="docs-desc">
            Editor provides onFocus, onBlur and onTab callbacks.<br />
            Default behavior of editor on tab is to change depth of block if current block is of type list.
            If onTab callback returns true editor assumes that Tab has been handled by the callback and the default behavior is not executed.
          </div>
          <div>
            <code>
              {'<Editor onFocus={myFocusCallback} onBlur={myBlurCallback} onTab={myTabCallback} />'}
            </code>
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            Generating HTML / Markdown
          </div>
          <div className="docs-desc">
            Two add-on libraries have been made for this purpose: draftjs-to-html, draftjs-to-markdown. These are also available for download from npm. <br />
            Raw editor content can be converted to HTML or markdown simply by calling methods draftToHtml, draftToMarkdown respectively.
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            HTML to Editor Content conversion
          </div>
          <div className="docs-desc">
            Add-on library html-to-draftjs provides the option to convert HTML generated by react-draft-wysiwyg back to draftJS ContentState which can be used to initialize the Editor.<br />
          </div>
        </div>
        <div className="docs-section">
          <div className="docs-label">
            WAI-ARIA Support
          </div>
          <div className="docs-desc">
            All ARIA props supported by DraftJS editor are available in react-draft-wysiwyg <a target="_blank" rel="noopener noreferrer" href="https://facebook.github.io/draft-js/docs/api-reference-editor.html#aria-props">Ref</a>.
            In addition editor and all option in toolbar have other ARIA attributes also added with pre-configured values.
          </div>
        </div>
        <div className="docs-text">
          For code examples you can check <a href="https://github.com/jpuri/react-draft-wysiwyg/blob/master/docs/src/components/Demo/index.js">here</a>.
        </div>
      </div>
    );
  }
}
