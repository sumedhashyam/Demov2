'use strict';
app.config([
        '$ocLazyLoadProvider', function ($ocLazyLoadProvider) {
            $ocLazyLoadProvider.config({
                debug: true,
                events: true,
                modules: [
                    {
                        //name: 'toaster',
                        //files: [
                        //    'lib/modules/angularjs-toaster/toaster.css',
                        //    'lib/modules/angularjs-toaster/toaster.js'
                        //]
                    }
                ]
            });
        }
    ]);