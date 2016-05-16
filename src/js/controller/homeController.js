'use strict';
(function(){

    //test controller
    myApp.controller('myController', function($scope){


        $scope.addItem = function (Category, price,categoryId,description,imgUrl) {
            price = parseFloat(price);
            if(Category != "" && !isNaN(price)) // тут какие то проверки
            {
                $scope.roleList1[i].push({ "Category": Category, "price": price, "categoryId": categoryId, "description": description, "imgUrl": imgUrl });
            }
        };

        function recurse_tree(item) {
            var c;
            for(c in item) {
                if (item[c] instanceof Object) {
                    // here: node is object
                    recurse_tree(item[c]);
                    continue;
                }
                // here: node isn't object
                document.writeln(c + ' = ' + item[c]);
            }
        }


        $scope.delete = function (currentNode) {
            currentNode = void(0);
            console.log(currentNode);
        };



        //test tree model 1
        $scope.roleList1 = [
            { "Category" : "Computer", "categoryId" : "1", "children" : [
                { "Category" : "Dell", "categoryId" : "2", "price": "1500", 'imgUrl':"img/dell.jpg",  "description":"111 Какой нибуть текст, Какой нибуть текст", "children" : [] },
                { "Category" : "Aser", "categoryId" : "3", "children" : [
                    { "Category" : "subAser2-1", "categoryId" : "4", "children" : [
                        { "Category" : "subAser2-1-1", "categoryId" : "5", "price": "1500", 'imgUrl':"img/aser.jpg", "description":"222 Какой нибуть текст, Какой нибуть текст", "children" : [] },
                        { "Category" : "subAser2-1-2", "categoryId" : "6", "price": "1500", 'imgUrl':"img/aser2.jpg","description":"333 Какой нибуть текст, Какой нибуть текст", "children" : [] }
                    ]}
                ]},
                { "Category" : "Smartphone", "categoryId" : "7", "price": "1500", 'imgUrl':"img/aser2.jpg", "description":"333 Какой нибуть текст, Какой нибуть текст", "children" : [] },

                { "Category" : "Tablet", "categoryId" : "8", "price": "1500", 'imgUrl':"img/apple.jpg", "description":"44 Какой нибуть текст, Какой нибуть текст", "children" : [] }
            ]},

            { "Category" : "Smartphone", "categoryId" : "7", "price": "1500", 'imgUrl':"img/aser2.jpg", "description":"333 Какой нибуть текст, Какой нибуть текст", "children" : [] },

            { "Category" : "Tablet", "categoryId" : "8", "price": "1500", 'imgUrl':"img/apple.jpg", "description":"44 Какой нибуть текст, Какой нибуть текст", "children" : [] }
        ];



        //roleList1 to treeview
        $scope.roleList = $scope.roleList1;

    });








})();


/*
 angular.treeview.js
 */
(function(l){l.module("angularTreeview",[]).directive("treeModel",function($compile){return{restrict:"A",link:function(a,g,c){var e=c.treeModel,h=c.nodeLabel||"label",d=c.nodeChildren||"children",k='<ul><li data-ng-repeat="node in '+e+'"><i class="collapsed" data-ng-show="node.'+d+'.length && node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="expanded" data-ng-show="node.'+d+'.length && !node.collapsed" data-ng-click="selectNodeHead(node, $event)"></i><i class="normal" data-ng-hide="node.'+
    d+'.length"></i> <span data-ng-class="node.selected" data-ng-click="selectNodeLabel(node, $event)">{{node.'+h+'}}</span><div data-ng-hide="node.collapsed" data-tree-model="node.'+d+'" data-node-id='+(c.nodeId||"id")+" data-node-label="+h+" data-node-children="+d+"></div></li></ul>";e&&e.length&&(c.angularTreeview?(a.$watch(e,function(m,b){g.empty().html($compile(k)(a))},!1),a.selectNodeHead=a.selectNodeHead||function(a,b){b.stopPropagation&&b.stopPropagation();b.preventDefault&&b.preventDefault();b.cancelBubble=
        !0;b.returnValue=!1;a.collapsed=!a.collapsed},a.selectNodeLabel=a.selectNodeLabel||function(c,b){b.stopPropagation&&b.stopPropagation();b.preventDefault&&b.preventDefault();b.cancelBubble=!0;b.returnValue=!1;a.currentNode&&a.currentNode.selected&&(a.currentNode.selected=void 0);c.selected="selected";a.currentNode=c}):g.html($compile(k)(a)))}}})})(angular);