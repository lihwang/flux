# flux


用户==》View层==》Actions==>dispatch==>Store==>Views==>》Actions


Flux将一个应用分成四个部分。
View： 视图层 
Action（动作）：视图层发出的消息（比如mouseClick） 
Dispatcher（派发器）：用来接收Actions、执行回调函数
Store（数据层）：用来存放应用的状态，一旦发生变动就提醒Views要更新页面
