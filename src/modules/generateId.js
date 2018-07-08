 /* eslint max-len: ["error", { "ignoreStrings": true, "ignoreComments": true }]*/

 /**
   * @return {string} randomly generated id
  *  @It return some random generated id
  */
function generateId() {
  let text = '';
  const possible= 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < 10; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export default generateId;
