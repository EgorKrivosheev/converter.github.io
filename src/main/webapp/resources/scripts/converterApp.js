'use strict';

const _CONVERTER_APP = angular.module("converterApp", [])
    .run(function ($rootScope) {

        $rootScope.version = "version: 0.6.3";

    });