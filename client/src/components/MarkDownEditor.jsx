import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

export default function MarkDownEditor() {
  return (
    <div className="App  p-12">
      <div>
        <h1 className="my-10">
          Store Description<span className="text-[#D37130] font-bold">*</span>
        </h1>
        <CKEditor
          editor={ClassicEditor}
          onChange={(event, editor) => {
            const data = editor.getData();
            console.log({ event, editor, data });
          }}
        />
      </div>
    </div>
  );
}
