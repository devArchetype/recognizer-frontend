import { useEffect, useState } from 'react';
import { BaseModal, ModalProps } from '../../base/BaseModal';
import {
  Dropzone,
  FileItem,
  FileValidated,
  FullScreenPreview,
} from '@dropzone-ui/react';

import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { createAnswer } from '../../../services/axios/requests/answers';

export const UploadExamsModal = ({ handleModalDisplay }: ModalProps) => {
  const { examId } = useParams();
  const [files, setFiles] = useState<FileValidated[]>([]);
  const [imgSource, setImgSource] = useState<string | undefined>(undefined);

  const updateFiles = (incommingFiles: FileValidated[]) => {
    setFiles(incommingFiles);
  };

  const removeFile = (id: number | string | undefined) => {
    setFiles(files.filter((x) => x.id !== id));
  };

  const handleClearForm = () => {
    handleModalDisplay!();
  };

  useEffect(() => {
    toast.warning(
      'Insira uma foto do gabarito que contenha somente a folha com as responstas!'
    );
  }, []);

  const handleAnswers = async () => {
    await createAnswer(examId, files);
    setFiles([]);
  };

  return (
    <BaseModal
      heading="Insira os Gabaritos"
      onCancel={handleClearForm}
      onClickButton={handleAnswers}
    >
      <Dropzone
        style={{ borderWidth: '2px' }}
        textColor="red"
        onChange={updateFiles}
        value={files}
        accept="image/*"
        color="#4338CA"
        maxFileSize={3150000}
        headerClassName={'header-extra-styles'}
        footer={false}
        localization="PT-pt"
      >
        {files.length <= 0 && (
          <h3 className="label-dropzone">Solte seus arquivos aqui</h3>
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
