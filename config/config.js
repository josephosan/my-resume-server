const DBLocalURL = () => `mongodb://localhost:27017/resume-database`;
const DBCloudURL = (username, password) => `mongodb+srv://${username}:${password}@resume-server.dcxswmz.mongodb.net/?retryWrites=true&w=majority`;


module.exports = {
  DBLocalURL,
  DBCloudURL
}