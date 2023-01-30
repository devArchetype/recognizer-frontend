import { toast } from 'react-toastify';
import { recognizerApi } from '../instances';
import { FileValidated } from '@dropzone-ui/react';

export const createAnswer = async (
  examId: string | undefined,
  filesNotAccept: FileValidated[]
) => {
  try {
    const files = new FormData();
    filesNotAccept.forEach((file) => {
      files.append('files', file.file);
    });

    const response = await recognizerApi.post(
      `/answers/store/${examId}`,
      files,
      { headers: { 'Content-Type': 'multipart/form-data' } }
    );

    const { success, message } = response.data;

    if (message) {
      toast.error(message);
    }

    if (success) {
      toast.info(success);
    }
  } catch (e) {
    console.log(e);
  }
};
