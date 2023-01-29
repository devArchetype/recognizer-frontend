import { BaseModal } from '../../base/BaseModal';

import { Uploader } from 'uploader';
import { UploadDropzone } from 'react-uploader';

export const UploadExamsModal = () => {
  const uploader = Uploader({
    apiKey: 'free',
  });
  const options = { multi: true };

  return (
    <BaseModal heading="Inserir provas">
      <UploadDropzone
        uploader={uploader}
        options={options}
        onUpdate={(files) => alert(files.map((x) => x.fileUrl).join('\n'))}
        width="100%"
        height="400px"
      />
    </BaseModal>
  );
};
