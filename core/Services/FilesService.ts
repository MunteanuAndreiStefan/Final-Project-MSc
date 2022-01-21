const AWS = require('aws-sdk');
const s3 = new AWS.S3();

let BUCKET_NAME = 'social-media-app-main-bucket'
let BUCKET_URL = 'https://social-media-app-main-bucket.s3-eu-west-1.amazonaws.com/'

export async function getFileByName(filename: String) {
    try {
        const params = {
            Bucket: BUCKET_NAME,
            Key: filename
        };
        return s3.getObject(params).promise();
    } catch (error) {
        console.log(error);
    }
}

export async function upload(base64Img: String, imageName: String) {
    let imageBuffer = Buffer.from(base64Img.replace(/^data:image\/\w+;base64,/, ""), 'base64')
    const data = {
        Bucket: BUCKET_NAME,
        Key: imageName,
        Body: imageBuffer,
        ContentEncoding: 'base64',
        ContentType: 'image/jpeg',
        ACL: 'public-read'
    };
    return s3.putObject(data).promise();
}

export function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export {
    BUCKET_URL
}