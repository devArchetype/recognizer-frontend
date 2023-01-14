/* eslint-disable react-hooks/rules-of-hooks */
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { version } from '../../package.json';

const STORAGE_KEYS_PREFIX = `@recognizer-v${version}`;

const useStorage =
  (storage: Storage, keyPrefix: string) =>
  <T>(
    storageKey: string,
    fallbackState: T
  ): [T, Dispatch<SetStateAction<T>>] => {
    if (!storageKey)
      throw new Error(
        `"storageKey" must be a nonempty string, but "${storageKey}" was passed.`
      );

    const storedString = storage.getItem(keyPrefix + storageKey);
    let parsedObject = null;

    if (storedString !== null) parsedObject = JSON.parse(storedString);

    const [value, setValue] = useState<T>(parsedObject ?? fallbackState);

    useEffect(() => {
      storage.setItem(keyPrefix + storageKey, JSON.stringify(value));
    }, [value, storageKey]);

    return [value, setValue];
  };

const useLocalStorage = useStorage(localStorage, STORAGE_KEYS_PREFIX);
const useSessionStorage = useStorage(sessionStorage, STORAGE_KEYS_PREFIX);

export { useLocalStorage, useSessionStorage };
