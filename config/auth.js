//expose our config directly to our application using module.exports
module.exports = {

  'facebookAuth':{
    'clientID'    : '1768702676699839',
    'clientSecret': '6011c1c49e718519c7786cf982236da5',
    'callbackURL' : 'http://localhost:3000/auth/facebook/callback'
  },

  'twitterAuth':{
    'consumerKey'    : 'Ics32wOowtid0vGhdbT9jwHCp',
    'consumerSecret' : 'OkUEtFpNiSEdNQzIkor1mCBac9shE909tCpUToO4RKJsceRyqB',
    'callbackURL'    : 'http://localhost:3000/auth/twitter/callback'
  },

  'googleAuth' : {
    'clientID'    : 'client',
    'clientSecret': 'secret',
    'callbackURL' : 'http://localhost:3000/auth/google/callback'
  }

}
