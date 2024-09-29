"use client";

import { MDXEditor, MDXEditorMethods, headingsPlugin, listsPlugin, toolbarPlugin, UndoRedo, BoldItalicUnderlineToggles, ListsToggle } from "@mdxeditor/editor";
import { FC } from "react";
import '@mdxeditor/editor/style.css'

interface EditorProps {
  markdown: string;
  editorRef?: React.MutableRefObject<MDXEditorMethods | null>;
}

/**
 * Extend this Component further with the necessary plugins or props you need.
 * proxying the ref is necessary. Next.js dynamically imported components don't support refs.
 */
const Editor: FC<EditorProps> = ({ markdown, editorRef }) => {
  console.log(markdown)
    return (
      <div>
        <MDXEditor
        className="editor w-screen"
        contentEditableClassName="prose"
        ref={editorRef}
        markdown={markdown}
        plugins={[toolbarPlugin({
            toolbarContents: () => (
                <>
                {' '}
                <UndoRedo />
                <BoldItalicUnderlineToggles />
                <ListsToggle options={["bullet", "number"]}/>
                
                </>
            )
            }), headingsPlugin(), listsPlugin()]}
    />
      </div>
    
  );
};

export default Editor;