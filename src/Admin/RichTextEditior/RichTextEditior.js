import React, { useRef } from 'react';
import JoditEditor from 'jodit-react';
const RichTextEditior = ({setContent, chapter}) => {
    const editor = useRef(null)
    return (
        <div>
            <JoditEditor
            ref={editor}
            onChange={(content)=> setContent(content)}
            value={chapter?.content}
            />
        </div>
    );
};

export default RichTextEditior;