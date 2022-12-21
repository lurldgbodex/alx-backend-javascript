export default function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      const successObject = {
        status: 200,
        body: 'Success',
      };
      resolve(successObject);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
