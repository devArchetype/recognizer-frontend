import { toast } from 'react-toastify';
import { recognizerApi } from '../instances';
import { FileValidated } from '@dropzone-ui/react';

export const createAnswer = async (
  examId: string | undefined,
  filesNotAccept: FileValidated[]
) => {
  try {
    filesNotAccept.forEach(async (fileA) => {
      const file = new FormData();
      file.append('file', fileA.file);

      const response = await recognizerApi.post(
        `/answers/store/${examId}`,
        file,
        { headers: { 'Content-Type': 'multipart/form-data' } }
      );

      const { message } = response.data;

      if (message) {
        toast.error(message);
      }
    });

    toast.info('Gabaritos corrigidos!');
  } catch (e) {
    console.log(e);
  }
};

export const getAnswer = async (answerId: string | undefined) => {
  try {
    const answerData = await recognizerApi.get('/answer/index/' + answerId);
    const { success, answer, message } = answerData.data;

    if (success) {
      return answer;
    } else {
      toast.error(message);
      return [];
    }
  } catch (e) {
    console.log(e);
  }
};
