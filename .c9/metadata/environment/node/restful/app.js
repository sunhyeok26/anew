{"filter":false,"title":"app.js","tooltip":"/node/restful/app.js","undoManager":{"mark":20,"position":20,"stack":[[{"start":{"row":0,"column":0},"end":{"row":20,"column":3},"action":"insert","lines":["const express = require('express');","const morgan = require('morgan');","const path = require('path');","const app = express();","const bodyParser = require('body-parser');","const cookieParser = require('cookie-parser');","const router = express.Router();","app.set('port', process.env.PORT || 3000)","","app.use(morgan('dev'));","app.use(bodyParser.json());","app.use(bodyParser.urlencoded({ extended: false }));","app.use(cookieParser());","app.use(express.static(path.join(__dirname, 'public')));","","var restful = require('./routes/restful.js');","app.use('/', restful);","","app.listen(app.get('port'), () =>{","\tconsole.log('3000 Port : 서버 실행 중')","});"],"id":1}],[{"start":{"row":20,"column":3},"end":{"row":21,"column":0},"action":"insert","lines":["",""],"id":2,"ignore":true}],[{"start":{"row":6,"column":32},"end":{"row":7,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":7,"column":0},"end":{"row":8,"column":0},"action":"insert","lines":["",""]},{"start":{"row":8,"column":0},"end":{"row":8,"column":1},"action":"insert","lines":["/"]},{"start":{"row":8,"column":1},"end":{"row":8,"column":2},"action":"insert","lines":["/"]}],[{"start":{"row":8,"column":2},"end":{"row":8,"column":3},"action":"insert","lines":[" "],"id":4},{"start":{"row":8,"column":3},"end":{"row":8,"column":4},"action":"insert","lines":["v"]},{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["i"]},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["e"]},{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["w"]}],[{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":[" "],"id":5},{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["e"]},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["n"]},{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["g"]},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["i"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["n"]},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["e"]}],[{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":[" "],"id":6},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["s"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["e"]},{"start":{"row":8,"column":17},"end":{"row":8,"column":18},"action":"insert","lines":["t"]},{"start":{"row":8,"column":18},"end":{"row":8,"column":19},"action":"insert","lines":["u"]},{"start":{"row":8,"column":19},"end":{"row":8,"column":20},"action":"insert","lines":["p"]}],[{"start":{"row":8,"column":20},"end":{"row":9,"column":0},"action":"insert","lines":["",""],"id":7},{"start":{"row":9,"column":0},"end":{"row":9,"column":1},"action":"insert","lines":["a"]},{"start":{"row":9,"column":1},"end":{"row":9,"column":2},"action":"insert","lines":["p"]},{"start":{"row":9,"column":2},"end":{"row":9,"column":3},"action":"insert","lines":["p"]},{"start":{"row":9,"column":3},"end":{"row":9,"column":4},"action":"insert","lines":["."]},{"start":{"row":9,"column":4},"end":{"row":9,"column":5},"action":"insert","lines":["s"]},{"start":{"row":9,"column":5},"end":{"row":9,"column":6},"action":"insert","lines":["e"]},{"start":{"row":9,"column":6},"end":{"row":9,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":9,"column":7},"end":{"row":9,"column":9},"action":"insert","lines":["()"],"id":8}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"insert","lines":[";"],"id":9}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":9},"action":"remove","lines":[";"],"id":10}],[{"start":{"row":9,"column":8},"end":{"row":9,"column":10},"action":"insert","lines":["''"],"id":11}],[{"start":{"row":9,"column":9},"end":{"row":9,"column":10},"action":"insert","lines":["v"],"id":12},{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"remove","lines":["e"],"id":13}],[{"start":{"row":9,"column":10},"end":{"row":9,"column":11},"action":"insert","lines":["i"],"id":14},{"start":{"row":9,"column":11},"end":{"row":9,"column":12},"action":"insert","lines":["e"]},{"start":{"row":9,"column":12},"end":{"row":9,"column":13},"action":"insert","lines":["w"]}],[{"start":{"row":9,"column":13},"end":{"row":9,"column":14},"action":"insert","lines":[" "],"id":15},{"start":{"row":9,"column":14},"end":{"row":9,"column":15},"action":"insert","lines":["e"]},{"start":{"row":9,"column":15},"end":{"row":9,"column":16},"action":"insert","lines":["n"]},{"start":{"row":9,"column":16},"end":{"row":9,"column":17},"action":"insert","lines":["g"]},{"start":{"row":9,"column":17},"end":{"row":9,"column":18},"action":"insert","lines":["i"]},{"start":{"row":9,"column":18},"end":{"row":9,"column":19},"action":"insert","lines":["n"]},{"start":{"row":9,"column":19},"end":{"row":9,"column":20},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":21},"end":{"row":9,"column":22},"action":"insert","lines":[","],"id":16}],[{"start":{"row":9,"column":22},"end":{"row":9,"column":23},"action":"insert","lines":[" "],"id":17}],[{"start":{"row":9,"column":23},"end":{"row":9,"column":25},"action":"insert","lines":["''"],"id":18}],[{"start":{"row":9,"column":24},"end":{"row":9,"column":25},"action":"insert","lines":["j"],"id":19},{"start":{"row":9,"column":25},"end":{"row":9,"column":26},"action":"insert","lines":["a"]},{"start":{"row":9,"column":26},"end":{"row":9,"column":27},"action":"insert","lines":["d"]},{"start":{"row":9,"column":27},"end":{"row":9,"column":28},"action":"insert","lines":["e"]}],[{"start":{"row":9,"column":30},"end":{"row":9,"column":31},"action":"insert","lines":[";"],"id":20}],[{"start":{"row":9,"column":0},"end":{"row":9,"column":31},"action":"remove","lines":["app.set('view engine', 'jade');"],"id":21},{"start":{"row":8,"column":20},"end":{"row":9,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":0,"column":0},"end":{"row":23,"column":0},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":57,"mode":"ace/mode/javascript"}},"timestamp":1669947177323,"hash":"4f64287187e40f33d91d4ca01d42913c1a3dec14"}