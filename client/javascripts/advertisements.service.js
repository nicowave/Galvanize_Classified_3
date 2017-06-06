(function(){
  angular.module('app')
    .service('AdService', function($http) {

      return {

      getAds: function() {
          return $http.get('/advertisements')
            .then(function(payload) {
              console.log(payload.data);
              return payload.data
          })
      },

      createAd: function(newAd) {
        console.log(newAd);
          return $http.post('/advertisements', newAd)
            .then(function(payload) {

              console.log('here is the payload!', payload.data);
              return payload.data
          })
      },

      patchAd: function(editFormObject) {
        console.log(editFormObject);
          return $http.patch(`/advertisements/${editFormObject.id}`, editFormObject)
          .then(function(req, res) {
            console.log(req.body + "req");
            console.log(res.body + "res");
          })
      },

      deleteAd: function(adToBeDeleted) {
          console.log('adToBeDeleted', adToBeDeleted);
          return $http.delete(`/advertisements/${adToBeDeleted}`, adToBeDeleted)
            .then(function(payload) {
              return payload.data
          })
        }
      }
    })
})()
