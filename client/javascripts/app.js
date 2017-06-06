(function(){

  angular.module('app', [])
    .component('advertisements', {
      controller: controller,
      templateUrl: '../views/advertisements.html'
    })

    controller.$inject = ['AdService']

    function controller(AdService) {


      const vm = this;
      vm.newAd = {};

      // console.log('hey one... inside the controller function')

      vm.$onInit = function() {



        AdService.getAds()
          .then(function(data) {
            vm.ads = data
            console.log(vm.ads);
        })

        vm.createAd = function() {
          let newAdObject = {
              title: vm.newAd.title,
              description: vm.newAd.description,
              price: vm.newAd.price,
              item_image: vm.newAd.item_image

          }

          AdService.createAd(newAdObject)
            .then(function(data) {
              AdService.getAds()
                .then(function(newData) {
                  vm.ads = newData
                  return(vm.ads)
                  console.log(vm.ads);
              })
            })
        }
        vm.editAd = function(ad) {

          AdService.patchAd(ad)
          .then(function() {
            AdService.getAds()
              .then(function(data) {
                vm.ads = data;
                return(vm.ads);
            })
          })
        }
        vm.deleteAd = function(event) {
          let id = event.target.id
          AdService.deleteAd(id)
          .then(function() {
              AdService.getAds()
                .then(function(data) {
                  vm.ads = data
            })
          })
        }

      }
    }
})()
