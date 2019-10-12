import envVars from './dotenvMap';

export default arr => {
  return Math.floor((Math.max(...arr) / 100) * envVars.initialThreshold);
};
