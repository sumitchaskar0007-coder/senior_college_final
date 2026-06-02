import React, { useState, useEffect, useRef } from 'react';
import {
  FiBold, FiItalic, FiUnderline, FiAlignLeft, FiAlignCenter, FiAlignRight,
  FiList, FiLink, FiImage, FiQuote, FiMinus,
  FiType, FiEye, FiMaximize2, FiMinimize2
} from 'react-icons/fi';

import { MdFormatListNumbered } from 'react-icons/md'; // ✅ FIXED

const AdvancedRichTextEditor = ({ value, onChange, placeholder }) => {
  const [editorContent, setEditorContent] = useState(value || '');
  const [showPreview, setShowPreview] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const editorRef = useRef(null);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current.innerHTML = value || '';
    }
  }, [value]);

  const execCommand = (command) => {
    document.execCommand(command, false, null);
    handleContentChange();
  };

  const handleContentChange = () => {
    const content = editorRef.current.innerHTML;
    setEditorContent(content);
    onChange(content);
  };

  const insertList = (ordered) => {
    document.execCommand(ordered ? 'insertOrderedList' : 'insertUnorderedList');
    handleContentChange();
  };

  return (
    <div className={`border bg-white ${isFullscreen ? 'fixed inset-0 z-50' : ''}`}>

      {/* Toolbar */}
      <div className="flex flex-wrap gap-2 p-3 border-b bg-gray-50">

        <button onClick={() => execCommand('bold')}><FiBold /></button>
        <button onClick={() => execCommand('italic')}><FiItalic /></button>
        <button onClick={() => execCommand('underline')}><FiUnderline /></button>

        <button onClick={() => execCommand('justifyLeft')}><FiAlignLeft /></button>
        <button onClick={() => execCommand('justifyCenter')}><FiAlignCenter /></button>
        <button onClick={() => execCommand('justifyRight')}><FiAlignRight /></button>

        {/* ✅ Lists FIXED */}
        <button onClick={() => insertList(false)}><FiList /></button>
        <button onClick={() => insertList(true)}><MdFormatListNumbered /></button>

        <button onClick={() => setShowPreview(!showPreview)}><FiEye /></button>
        <button onClick={() => setIsFullscreen(!isFullscreen)}>
          {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
        </button>
      </div>

      {/* Editor */}
      {showPreview ? (
        <div
          className="p-6"
          dangerouslySetInnerHTML={{ __html: editorContent }}
        />
      ) : (
        <div
          ref={editorRef}
          contentEditable
          className="p-6 min-h-[300px] outline-none"
          onInput={handleContentChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default AdvancedRichTextEditor;