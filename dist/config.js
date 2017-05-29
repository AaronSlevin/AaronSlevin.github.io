var APP_URL = 'https://qwwbpoooqbgjzgr.form.io';
var API_URL = 'https://api.form.io';

// Parse query string
var query = {};
location.search.substr(1).split("&").forEach(function(item) {
  query[item.split("=")[0]] = item.split("=")[1] && decodeURIComponent(item.split("=")[1]);
});

APP_URL = query.appUrl || APP_URL;
API_URL = query.apiUrl || API_URL;

angular.module('formioAppBasic').constant('AppConfig', {
  appUrl: APP_URL,
  apiUrl: API_URL,
  forms: {
    userForm: APP_URL + '/user',
    userLoginForm: APP_URL + '/user/login',
    userRegisterForm: APP_URL + '/user/register'
  },
  resources: {
    admin: {
      form: APP_URL + '/admin',
      resource: 'AdminResource'
    },
    user: {
      form: APP_URL + '/user',
      resource: 'UserResource'
    },
    trainer: {
      form: APP_URL + '/trainer',
      resource: 'TrainerResource'
    },
    workout: {
      form: APP_URL + '/workout',
      resource: 'WorkoutResource'
    },
    exercise: {
      form: APP_URL + '/exercise',
      resource: 'ExerciseResource'
    },
    calculator: {
      form: APP_URL + '/calculator',
      resource: 'CalculatorResource'
    }
  }
});
