import { useState } from 'react';
import { BaseModal } from '../../base/BaseModal';
import {
  Dropzone,
  FileItem,
  FileValidated,
  FullScreenPreview,
} from '@dropzone-ui/react';

export const UploadExamsModal = () => {
  const [files, setFiles] = useState<FileValidated[]>([]);
  const [imgSource, setImgSource] = useState<string | undefined>(undefined);

  const updateFiles = (incommingFiles: FileValidated[]) => {
    setFiles(incommingFiles);
  };

  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  return (
    <BaseModal heading="Insira os Gabaritos">
      <Dropzone
        style={{ borderWidth: '2px' }}
        method="POST"
        textColor="red"
        onChange={updateFiles}
        value={files}
        accept="image/*"
        color="#4338CA"
        maxFileSize={3150000}
        url=""
        headerClassName={'header-extra-styles'}
        footer={false}
        localization="PT-pt"
      >
        {files.length <= 0 && (
          <h3 className="label-dropzone">Drop your files here</h3>
        )}

        {files.map((file) => (
          <FileItem
            {...file}
            onDelete={removeFile}
            onSee={(src) => {
              setImgSource(src);
            }}
            key={file.id}
            info
            preview
            hd
          />
        ))}
      </Dropzone>

      <FullScreenPreview
        imgSource={imgSource}
        openImage={!!imgSource}
        onClose={(e: Event) => setImgSource(undefined)}
      />
    </BaseModal>
  );
};
