        app.controller("MarkersDelayedEventsController", ["$scope", "leafletMarkerEvents", function($scope, leafletMarkerEvents){
            angular.extend($scope, {
                london: {
                    lat: 51.505,
                    lng: -0.09,
                    zoom: 8
                },
                markers: {}
            });
            $scope.addMarkers = function() {
                angular.extend($scope, {
                    markers: {
                        m1: {
                            lat: 51.505,
                            lng: -0.09,
                            message: "I'm a static marker",
                        },
                        m2: {
                            lat: 51,
                            lng: 0,
                            focus: true,
                            message: "Hey, drag me if you want",
                            draggable: true
                        }
                    }
                });
            };
            $scope.events = {
                markers: {
                    enable: leafletMarkerEvents.getAvailableEvents(),
                }
            };
            $scope.eventDetected = "No events yet...";
            var markerEvents = leafletMarkerEvents.getAvailableEvents();
            for (var k in markerEvents){
                var eventName = 'leafletDirectiveMarker.' + markerEvents[k];
                $scope.$on(eventName, function(event, args){
                    $scope.eventDetected = event.name;
                });
            }
            $scope.removeMarkers = function() {
                $scope.markers = {};
            }
            //$scope.addMarkers();
        }]);