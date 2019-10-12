import envVars from './dotenv-map';

export default arr => {
  return Math.floor((Math.max(...arr) / 100) * envVars.initialThreshold);
};
