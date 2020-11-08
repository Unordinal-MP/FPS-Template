(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{372:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"reconciliation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reconciliation"}},[t._v("#")]),t._v(" Reconciliation")]),t._v(" "),s("p",[t._v("Reconciliation is the process of correcting the client's predicted position. In real environments reconciliation is probably the hardest thing to get done correctly. Because if a player has a very bad connection his predictions will almost always be wrong which will make that player jitter around and creates ruber band effects. Some games increase the size of both the client and the server buffer in that case to fix that. It's not a bad approach but will add a huge delay on players with bad connections which means their server position will be behind what they actually see by a lot.")]),t._v(" "),s("p",[t._v("We will just do basic reconciliation with the expectation that the server performs 1 client input per frame.")]),t._v(" "),s("p",[t._v("So how is reconciliation done?")]),t._v(" "),s("ul",[s("li",[t._v("We store all inputs and positions and their respective frame numbers that we predicted in a list (called a historyBuffer or just history).")]),t._v(" "),s("li",[t._v("When we receive a server message we receive a last processed input value (the uint Frame in the GameUpdateData).")]),t._v(" "),s("li",[t._v("We can then delete all entries in the history which have a smaller number then the one we received.")]),t._v(" "),s("li",[t._v("Next we compare the received position to the stored predicted position. If it differs enough we will set the players position to the server position.")]),t._v(" "),s("li",[t._v("But now we've set the player to a position in the past so we have to fix that. We do that by iteration through the rest of the entries and applying all inputs again.")])]),t._v(" "),s("p",[t._v("So open the ClientPlayer script and create a new Struct above the ClientPlayer class:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReconciliationInfo")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReconciliationInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")])]),t._v(" frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerUpdateData")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerInputData")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        Frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Data "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        Input "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("uint")])]),t._v(" Frame"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerUpdateData")]),t._v(" Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerInputData")]),t._v(" Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("Then in the ClientPlayer class create a history to store our predicted information:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ReconciliationInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" reconciliationHistory "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("Queue"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ReconciliationInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("in FixedUpdate after:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("using")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Message")]),t._v(" message "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Create")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ushort")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" Tags"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("GamePlayerInput"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    ConnectionManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Client"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SendMessage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" SendMode"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Reliable"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("add the input and position to the history:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[t._v("    reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Enqueue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token constructor-invocation class-name"}},[t._v("ReconciliationInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("GameManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ClientTick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" nextStateData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" inputData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("p",[t._v("Now let's implement the reconciliation. We will do that in the if(IsOwn) brackets of the OnServerUpdate function of the ClientPlayer. Fill it with the following lines:")]),t._v(" "),s("div",{staticClass:"language-csharp extra-class"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" GameManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastReceivedServerTick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dequeue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Peek")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Frame "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" GameManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Instance"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LastReceivedServerTick"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ReconciliationInfo")]),t._v(" info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Dequeue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Vector3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Distance")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("info"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" playerStateData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.05f")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("ReconciliationInfo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" infos "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" reconciliationHistory"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ToList")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        interpolation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentData "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" playerStateData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("position "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" playerStateData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Position"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        transform"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("rotation "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" playerStateData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("LookDirection"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")])]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" infos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Count"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" i"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PlayerStateData")]),t._v(" u "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" playerLogic"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetNextFrameData")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("infos"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Input"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" interpolation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("CurrentData"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            interpolation"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("SetFramePosition")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("u"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("This is just basic reconciliation as explained at the beginning of this section. We correct the player if his position is off more then 0.05f. It's possible to choose a much bigger value for that something like 1f or 2f to allow players with bad connections to play with less corrections but that will cause rubber banding which is also terrible to play with. The best way to support players with bad connections is still to use bigger buffers.")]),t._v(" "),s("p",[t._v("This is already everything we need for reconciliation it should work now you can test it by stopping the server and moving a player by hand and resume it, then the client will also make a jump.")]),t._v(" "),s("p",[t._v("In the next section we will implement shooting, health and lag compensation for shots.")])])}),[],!1,null,null,null);a.default=e.exports}}]);