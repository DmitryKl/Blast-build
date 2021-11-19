System.register("chunks:///_virtual/BlastGame.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Utils.ts"],(function(t){"use strict";var i,e,o,s;return{setters:[function(t){i=t.defineProperty},function(t){e=t.cclegacy},function(t){o=t.Utils,s=t.Position}],execute:function(){var n,r;t({GameResult:void 0,TileType:void 0}),e._RF.push({},"0e2c4uyT/pPJr5Tq3Z1HVKD","BlastGame",void 0),function(t){t[t.Win=0]="Win",t[t.Loose=1]="Loose"}(n||(n=t("GameResult",{}))),function(t){t[t.Blue=0]="Blue",t[t.Green=1]="Green",t[t.Purple=2]="Purple",t[t.Red=3]="Red",t[t.Yellow=4]="Yellow",t[t.Super=5]="Super"}(r||(r=t("TileType",{})));t("BlastGame",function(){function t(t,e,s,n,r,h,l,u,a){i(this,"height",void 0),i(this,"width",void 0),i(this,"colorsCount",void 0),i(this,"maxReshuffleCount",void 0),i(this,"minCombinationCount",void 0),i(this,"superTileActivateThreshold",void 0),i(this,"superTileRadius",void 0),i(this,"tiles",void 0),i(this,"score",0),i(this,"scoreGoal",void 0),i(this,"movesCount",void 0),i(this,"removeTileEvent",void 0),i(this,"fallTileEvent",void 0),i(this,"tilesFallenEvent",void 0),i(this,"superTileAddedEvent",void 0),i(this,"tilesSwappedEvent",void 0),i(this,"gameOverEvent",void 0),this.height=t,this.width=e,this.colorsCount=s,this.maxReshuffleCount=n,this.minCombinationCount=r,this.superTileActivateThreshold=h,this.superTileRadius=l,this.scoreGoal=u,this.movesCount=a,this.tiles=o.init2dArray(this.height,this.width,0);for(var c=0;c<this.height;c++)for(var f=0;f<this.width;f++)this.tiles[c][f]=this.getRandomTile()}var e=t.prototype;return e.getRandomTile=function(){return Math.floor(Math.random()*this.colorsCount)},e.tapTile=function(t){var i=this.getCombination(t),e=this.tiles[t.row][t.column]==r.Super;(i.length>=this.minCombinationCount||e)&&(this.movesCount--,this.score+=this.getScoreByCombinationLength(i.length),this.removeTiles(i),this.fallTiles(),this.fillEmptyTiles(),this.tilesFallenEvent(),this.tryAddSuperTile(t,i,e)&&this.superTileAddedEvent(t),this.reshuffleIfNeed(),this.score>=this.scoreGoal?this.gameOverEvent(n.Win):0==this.movesCount&&this.gameOverEvent(n.Loose))},e.getCombination=function(t,i){var e=this;void 0===i&&(i=[]);var s=[];switch(this.tiles[t.row][t.column]){case r.Super:s=this.getCombinationByRadius(t,this.superTileRadius);break;default:s=this.getCombinationSimple(t)}return s.forEach((function(n){e.tiles[n.row][n.column]!=r.Super||n.equal(t)||o.arrayContainsValue(i,n)||(s=o.mergeArraysWithoutDuplicates(s,e.getCombination(n,s)))})),s},e.getCombinationSimple=function(t){var i=this,e=[],n=[],r=o.init2dArray(this.height,this.width,!1);n.push(t),r[t.row][t.column]=!0;for(var h=function(){var t=n.pop();e.push(t),[new s(-1,0),new s(1,0),new s(0,-1),new s(0,1)].forEach((function(e){var o=t.addPosition(e);i.positionInField(o)&&!r[o.row][o.column]&&i.tiles[t.row][t.column]==i.tiles[o.row][o.column]&&(n.push(o),r[o.row][o.column]=!0)}))};n.length>0;)h();return e},e.removeTiles=function(t){var i=this;t.forEach((function(t){i.tiles[t.row][t.column]=null,i.removeTileEvent(t)}))},e.fillEmptyTiles=function(){for(var t=0;t<this.height;t++)for(var i=0;i<this.width;i++)null===this.tiles[t][i]&&(this.tiles[t][i]=this.getRandomTile())},e.fallTiles=function(){for(var t=!0;t;){t=!1;for(var i=0;i<this.height-1;i++)for(var e=0;e<this.width;e++)null===this.tiles[i][e]&&null!==this.tiles[i+1][e]&&(this.fallTile(new s(i+1,e)),t=!0)}},e.fallTile=function(t){this.tiles[t.row-1][t.column]=this.tiles[t.row][t.column],this.tiles[t.row][t.column]=null,this.fallTileEvent(t)},e.reshuffleIfNeed=function(){for(var t=0,i=this.moveExists();!i&&t<this.maxReshuffleCount;)this.reshuffle(),t++,i=this.moveExists();i||t!=this.maxReshuffleCount||this.gameOverEvent(n.Loose),t>0&&this.tilesSwappedEvent()},e.reshuffle=function(){for(var t=[],i=0;i<this.height;i++)for(var e=0;e<this.width;e++)t.push(new s(i,e));for(;t.length>1;){var o=t.pop(),n=Math.floor(Math.random()*t.length),r=t[n];this.swapTiles(o,r),t.splice(n,1)}},e.swapTiles=function(t,i){var e=this.tiles[t.row][t.column];this.tiles[t.row][t.column]=this.tiles[i.row][i.column],this.tiles[i.row][i.column]=e},e.moveExists=function(){for(var t=o.init2dArray(this.height,this.width,!1),i=0;i<this.height;i++)for(var e=0;e<this.width;e++){if(this.tiles[i][e]==r.Super)return!0;if(!t[i][e]){var n=this.getCombinationSimple(new s(i,e));if(n.length>=this.minCombinationCount)return!0;n.forEach((function(i){t[i.row][i.column]=!0}))}}return!1},e.getScoreByCombinationLength=function(t){switch(t){case 1:case 2:case 3:case 4:return 10*t;case 5:case 6:case 7:return 15*t;default:return 20*t}},e.tryAddSuperTile=function(t,i,e){return!e&&(i.length>=this.superTileActivateThreshold&&(this.tiles[t.row][t.column]=r.Super,!0))},e.getCombinationByRadius=function(t,i,e){for(var o=[],n=Array.from({length:2*i-1},(function(t,e){return i-Math.abs(e+1-i)})),r=t.row-i+1,h=0;h<n.length;h++){for(var l=n[h],u=t.column-l+1;u<t.column+l;u++){var a=new s(r,u);this.positionInField(a)&&o.push(a)}r++}return o},e.positionInField=function(t){return t.column>=0&&t.column<this.width&&t.row>=0&&t.row<this.height},t}());e._RF.pop()}}}));

System.register("chunks:///_virtual/GameResultComponent.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(e){"use strict";var t,o,n,r,s,a,i;return{setters:[function(e){t=e.inheritsLoose,o=e.defineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,s=e._decorator,a=e.game,i=e.Component}],execute:function(){var u;r._RF.push({},"3f096jOkrJMMqu203XAahl+","GameResultComponent",void 0);var c=s.ccclass;s.property,e("GameResultComponent",c("GameResultComponent")(u=function(e){function r(){for(var t,r=arguments.length,s=new Array(r),a=0;a<r;a++)s[a]=arguments[a];return t=e.call.apply(e,[this].concat(s))||this,o(n(t),"gameResult",void 0),t}return t(r,e),r.prototype.onLoad=function(){a.addPersistRootNode(this.node)},r}(i))||u);r._RF.pop()}}}));

System.register("chunks:///_virtual/GameComponent.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./Utils.ts","./BlastGame.ts","./GameResultComponent.ts","./TileComponent.ts"],(function(e){"use strict";var t,i,n,r,o,l,a,s,u,h,c,p,m,f,d,g,b,w,y,v,S,C,z,T,P,R,G,F;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,r=e.assertThisInitialized,o=e.defineProperty},function(e){l=e.cclegacy,a=e._decorator,s=e.Node,u=e.SpriteFrame,h=e.Prefab,c=e.Label,p=e.ProgressBar,m=e.find,f=e.instantiate,d=e.tween,g=e.director,b=e.Size,w=e.UITransform,y=e.Vec2,v=e.BoxCollider2D,S=e.Sprite,C=e.Component},function(e){z=e.Position,T=e.Utils},function(e){P=e.BlastGame,R=e.TileType},function(e){G=e.GameResultComponent},function(e){F=e.TileComponent}],execute:function(){var N,B,x,E,A,_,D,I,L,U,X,Y,O,j,k,q,H,J,K,M,V,W,Q,Z,$,ee,te,ie,ne,re;l._RF.push({},"5e9d9zv/NtJgIcx+Kq/dcWP","GameComponent",void 0);var oe=a.ccclass,le=a.property;e("GameComponent",(N=oe("GameComponent"),B=le({type:s}),x=le({type:[u]}),E=le({type:u}),A=le({type:h}),_=le({type:h}),D=le({type:c}),I=le({type:c}),L=le({type:p}),N((Y=t((X=function(e){function t(){for(var t,i=arguments.length,l=new Array(i),a=0;a<i;a++)l[a]=arguments[a];return t=e.call.apply(e,[this].concat(l))||this,n(r(t),"height",Y,r(t)),n(r(t),"width",O,r(t)),n(r(t),"colorsCount",j,r(t)),n(r(t),"maxReshuffleCount",k,r(t)),n(r(t),"minCombinationCount",q,r(t)),n(r(t),"superTileActivateThreshold",H,r(t)),n(r(t),"superTileRadius",J,r(t)),n(r(t),"fieldPaddingY",K,r(t)),n(r(t),"fieldPaddingX",M,r(t)),n(r(t),"scoreGoal",V,r(t)),n(r(t),"movesCount",W,r(t)),n(r(t),"field",Q,r(t)),n(r(t),"tileSpriteFrames",Z,r(t)),n(r(t),"superTileSpriteFrame",$,r(t)),n(r(t),"tilePrefab",ee,r(t)),n(r(t),"removePSPrefab",te,r(t)),n(r(t),"score",ie,r(t)),n(r(t),"moves",ne,r(t)),n(r(t),"progressBar",re,r(t)),o(r(t),"gameResultComponent",void 0),o(r(t),"tiles",void 0),o(r(t),"tileSize",void 0),o(r(t),"tileStartPoint",void 0),o(r(t),"game",void 0),t}i(t,e);var l=t.prototype;return l.start=function(){this.game=new P(this.height,this.width,this.colorsCount,this.maxReshuffleCount,this.minCombinationCount,this.superTileActivateThreshold,this.superTileRadius,this.scoreGoal,this.movesCount),this.bindEvents(),this.calculateSizes(),this.initTiles(),this.fillTileNodes(),this.gameResultComponent=m("GameResult").getComponent(G),this.game.reshuffleIfNeed()},l.update=function(){this.score.string=String(this.game.score),this.moves.string="Ходов:\n"+this.game.movesCount,this.progressBar.progress=this.game.score/this.game.scoreGoal},l.bindEvents=function(){var e=this;this.game.removeTileEvent=function(t){var i=f(e.removePSPrefab);e.field.addChild(i),i.setPosition(e.tiles[t.row][t.column].node.position),e.tiles[t.row][t.column].node.destroy(),e.tiles[t.row][t.column]=null},this.game.fallTileEvent=function(t){null!=e.tiles[t.row][t.column]&&(e.tiles[t.row-1][t.column]=e.tiles[t.row][t.column],e.tiles[t.row-1][t.column].getComponent(F).tilePosition=new z(t.row-1,t.column),e.tiles[t.row][t.column]=null)},this.game.tilesFallenEvent=function(){e.fillTileNodes()},this.game.superTileAddedEvent=function(t){d(e).delay(.5).call((function(){return e.fillSuperTileNode(t)})).start()},this.game.tilesSwappedEvent=function(){d(e).delay(1).call((function(){for(var t=0;t<e.height;t++)for(var i=0;i<e.width;i++)e.tiles[t][i].node.destroy(),e.tiles[t][i]=null})).call((function(){e.fillTileNodes()})).start()},this.game.gameOverEvent=function(t){e.gameResultComponent.gameResult=t,d(e).delay(.5).call((function(){return g.loadScene("GameOver")})).start()}},l.calculateSizes=function(){this.tileSize=new b((this.field.getComponent(w).width-2*this.fieldPaddingX)/this.width,(this.field.getComponent(w).height-2*this.fieldPaddingY)/this.height),this.tileStartPoint=new y(-this.tileSize.width*(this.width-1)/2,-this.tileSize.height*this.height/2),this.tilePrefab.data.getComponent(w).contentSize=new b(this.tileSize.width,1.1*this.tileSize.height),this.tilePrefab.data.getComponent(v).size=new b(this.tileSize.width-2,this.tileSize.height),this.tilePrefab.data.getComponent(v).offset=new y(0,.04*-this.tileSize.height)},l.initTiles=function(){this.tiles=T.init2dArray(this.height,this.width)},l.fillTileNodes=function(){for(var e=T.initArray(this.width,0),t=0;t<this.height;t++)for(var i=0;i<this.width;i++)null==this.tiles[t][i]&&(this.tiles[t][i]=this.createTileNode(new z(t,i),new y(this.tileStartPoint.x+i*this.tileSize.width,this.tileStartPoint.y+this.tileSize.height*this.height+e[i])),e[i]+=this.tileSize.height)},l.createTileNode=function(e,t){var i=f(this.tilePrefab).getComponent(F);return this.field.addChild(i.node),i.node.setPosition(t.x,t.y),i.getComponent(S).spriteFrame=this.getTileSpriteFrameByType(this.game.tiles[e.row][e.column]),i.getComponent(F).tilePosition=e,i.getComponent(F).game=this.game,i},l.getTileSpriteFrameByType=function(e){return e==R.Super?this.superTileSpriteFrame:this.tileSpriteFrames[e]},l.fillSuperTileNode=function(e){this.tiles[e.row][e.column].node.destroy(),this.tiles[e.row][e.column]=this.createTileNode(new z(e.row,e.column),new y(this.tileStartPoint.x+e.column*this.tileSize.width,this.tileStartPoint.y+e.row*this.tileSize.height))},t}(C)).prototype,"height",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 8}}),O=t(X.prototype,"width",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),j=t(X.prototype,"colorsCount",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),k=t(X.prototype,"maxReshuffleCount",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),q=t(X.prototype,"minCombinationCount",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2}}),H=t(X.prototype,"superTileActivateThreshold",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 5}}),J=t(X.prototype,"superTileRadius",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 3}}),K=t(X.prototype,"fieldPaddingY",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),M=t(X.prototype,"fieldPaddingX",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 10}}),V=t(X.prototype,"scoreGoal",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 2e3}}),W=t(X.prototype,"movesCount",[le],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return 20}}),Q=t(X.prototype,"field",[B],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),Z=t(X.prototype,"tileSpriteFrames",[x],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),$=t(X.prototype,"superTileSpriteFrame",[E],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ee=t(X.prototype,"tilePrefab",[A],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),te=t(X.prototype,"removePSPrefab",[_],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ie=t(X.prototype,"score",[D],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),ne=t(X.prototype,"moves",[I],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),re=t(X.prototype,"progressBar",[L],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),U=X))||U));l._RF.pop()}}}));

System.register("chunks:///_virtual/Utils.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(n){"use strict";var t,r;return{setters:[function(n){t=n.defineProperty},function(n){r=n.cclegacy}],execute:function(){r._RF.push({},"c3a28LVwmlD0Y+wLRO5Bb45","Utils",void 0);n("Position",function(){function n(n,r){void 0===n&&(n=0),void 0===r&&(r=0),t(this,"row",void 0),t(this,"column",void 0),this.row=n,this.column=r}var r=n.prototype;return r.addPosition=function(t){return new n(this.row+t.row,this.column+t.column)},r.equal=function(n){return this.row==n.row&&this.column==n.column},n}()),n("Utils",function(){function n(){}return n.init2dArray=function(n,t,r){void 0===r&&(r=null);for(var i=[],o=0;o<n;o++){i[o]=[];for(var u=0;u<t;u++)i[o][u]=r}return i},n.initArrayByFunction=function(n,t){for(var r=[],i=0;i<n;i++)r[i]=t();return r},n.initArray=function(n,t){return void 0===t&&(t=null),this.initArrayByFunction(n,(function(){return t}))},n.mergeArraysWithoutDuplicates=function(n,t){var r=this,i=[];return n.forEach((function(n){i.push(n)})),t.forEach((function(n){r.arrayContainsValue(i,n)||i.push(n)})),i},n.arrayContainsValue=function(n,t){var r=!1;return n.forEach((function(n){n.equal(t)&&(r=!0)})),r},n}());r._RF.pop()}}}));

System.register("chunks:///_virtual/GameOverComponent.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./BlastGame.ts","./GameResultComponent.ts"],(function(e){"use strict";var t,n,r,o,a,i,s,l,u,c,p,m;return{setters:[function(e){t=e.applyDecoratedDescriptor,n=e.inheritsLoose,r=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){a=e.cclegacy,i=e._decorator,s=e.Label,l=e.find,u=e.director,c=e.Component},function(e){p=e.GameResult},function(e){m=e.GameResultComponent}],execute:function(){var f,v,G,y,b;a._RF.push({},"eaa0fT9cFJOL7QGZ8JUUB6B","GameOverComponent",void 0);var d=i.ccclass,g=i.property;e("GameOverComponent",(f=d("GameOverComponent"),v=g({type:s}),f((b=t((y=function(e){function t(){for(var t,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return t=e.call.apply(e,[this].concat(a))||this,r(o(t),"resultLabel",b,o(t)),t}n(t,e);var a=t.prototype;return a.start=function(){var e=l("GameResult").getComponent(m);this.resultLabel.string=e.gameResult===p.Loose?"Вы проиграли.":"Победа!"},a.restartGame=function(){u.loadScene("Game")},t}(c)).prototype,"resultLabel",[v],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return null}}),G=y))||G));a._RF.pop()}}}));

System.register("chunks:///_virtual/TileComponent.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(t){"use strict";var e,o,n,i,r,s,a,c,l;return{setters:[function(t){e=t.inheritsLoose,o=t.defineProperty,n=t.assertThisInitialized},function(t){i=t.cclegacy,r=t._decorator,s=t.tween,a=t.Sprite,c=t.Node,l=t.Component}],execute:function(){var p;i._RF.push({},"ffa288XZ4tO4JZ1HDnVh7wC","TileComponent",void 0);var u=r.ccclass;r.property,t("TileComponent",u("TileComponent")(p=function(t){function i(){for(var e,i=arguments.length,r=new Array(i),s=0;s<i;s++)r[s]=arguments[s];return e=t.call.apply(t,[this].concat(r))||this,o(n(e),"tilePosition",void 0),o(n(e),"game",void 0),e}e(i,t);var r=i.prototype;return r.onLoad=function(){},r.start=function(){var t=this;s(this.getComponent(a).color).to(0,{a:0}).to(.2,{a:255}).start(),this.node.on(c.EventType.TOUCH_END,(function(){t.game.tapTile(t.tilePosition)}))},i}(l))||p);i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Utils.ts","./BlastGame.ts","./GameResultComponent.ts","./TileComponent.ts","./GameComponent.ts","./GameOverComponent.ts"],(function(){"use strict";return{setters:[null,null,null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});