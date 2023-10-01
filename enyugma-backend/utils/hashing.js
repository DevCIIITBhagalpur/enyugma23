import { randomBytes, createCipheriv, createDecipheriv } from 'crypto';

const algorithm = 'aes-256-ctr';

export const encrypt = (text,key) => {
    const iv = randomBytes(16);
    const cipher = createCipheriv(algorithm, key, iv);
    const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);
    const randomIv = iv.toString('hex');

    return `${iv.toString('hex')}.${encrypted.toString('hex')}.${randomIv}`;
}

export const decrypt = (hash,key) => {
    const [iv, encrypted, _] = hash.split('.');
    const decipher = createDecipheriv(algorithm, key, Buffer.from(iv, 'hex'));
    const decrpyted = Buffer.concat([decipher.update(Buffer.from(encrypted, 'hex')), decipher.final()]);

    return decrpyted.toString();
}
