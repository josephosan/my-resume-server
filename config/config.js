const DBLocalURL = (DBPort) => `mongodb://localhost:${DBPort}/resume-database`;
const DBCloudURL = (username, password) => `mongodb+srv://${username}:${password}@resume-server.dcxswmz.mongodb.net/?retryWrites=true&w=majority`;


module.exports = {
  DBLocalURL,
  DBCloudURL
}