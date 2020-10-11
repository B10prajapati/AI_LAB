(this.webpackJsonpai_lab=this.webpackJsonpai_lab||[]).push([[0],{123:function(e,n,t){e.exports=t(579)},128:function(e,n,t){},579:function(e,n,t){"use strict";t.r(n);var a=t(0),l=t.n(a),r=t(9),i=t.n(r),s=(t(128),t(114)),u=t(635),o=t(636),f=t(62),c=t(17),p=t(73),g=t(12),d=t(26),h=t(32),m=t(618),y=t(25),x=t(622),E=t(623),J=t(46),j=t(624),b=t(109),v=t.n(b),X=t(641),Y=t(115),k=t(625),w=t(621),S=Object(m.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(h.a)({},e.breakpoints.down("xs"),{flexGrow:1}),headerOptions:{display:"flex",flex:1,justifyContent:"space-evenly"}}})),F=Object(g.f)((function(e){var n=e.history,t=S(),a=l.a.useState(null),r=Object(d.a)(a,2),i=r[0],s=r[1],u=Boolean(i),o=Object(y.a)(),f=Object(w.a)(o.breakpoints.down("xs")),c=function(e){n.push(e)};return l.a.createElement("div",{className:t.root},l.a.createElement(x.a,{position:"static"},l.a.createElement(E.a,null,l.a.createElement(J.a,{variant:"h6",className:t.title},"AI LAB"),f?l.a.createElement(l.a.Fragment,null,l.a.createElement(j.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"menu",onClick:function(e){s(e.currentTarget)}},l.a.createElement(v.a,null)),l.a.createElement(Y.a,{id:"menu-appbar",anchorEl:i,anchorOrigin:{vertical:"top",horizontal:"right"},keepMounted:!0,transformOrigin:{vertical:"top",horizontal:"right"},open:u,onClose:function(){return s(null)}},[{menuTitle:"Home",pageURL:"/AI_LAB/"},{menuTitle:"Lab3",pageURL:"/AI_LAB/lab3"}].map((function(e){var t=e.menuTitle,a=e.pageURL;return l.a.createElement(X.a,{onClick:function(){return function(e){n.push(e),s(null)}(a)}},t)})))):l.a.createElement("div",{className:t.headerOptions},l.a.createElement(k.a,{variant:"contained",onClick:function(){return c("/AI_LAB/")}},"HOME"),l.a.createElement(k.a,{variant:"contained",onClick:function(){return c("/AI_LAB/lab3")}},"Lab3")))),l.a.createElement(E.a,null))})),O=t(60),P=t(630),D=t(626),B=t(627),N=t(631),C=t(628),R=t(638),A=t(632),_=t(634),T=t(77),L=t(58),q=Object(L.b)({name:"graph",initialState:{node:[],graph:{},selectedNode:0,DFSPath:[],BFSPath:[]},reducers:{addNode:function(e,n){var t=e.graph,a=e.node,l=e.selectedNode,r=n.payload.name;e.node.push(r),r!==a[l]&&(t[a[l]]=Object(T.a)(Object(T.a)({},t[a[l]]),{},Object(h.a)({},a.length-1,r)))},resetGraph:function(e,n){e.node=[],e.graph={},e.selectedNode=0,e.DFSPath=[],e.BFSPath=[]},removeNode:function(e,n){},changeHighlightedNode:function(e,n){e.selectedNode=n.payload.index},showDFS:function(e,n){e.DFSPath=n.payload.DFSPath},showBFS:function(e,n){e.BFSPath=n.payload.BFSPath}}}),I=q.actions,G=I.addNode,W=(I.removeNode,I.showDFS),U=I.showBFS,V=I.changeHighlightedNode,H=I.resetGraph,z=function(e){return e.graph.node},M=function(e){return e.graph.graph},K=function(e){return e.graph.selectedNode},$=function(e){return e.graph.BFSPath},Q=function(e){return e.graph.DFSPath},Z=q.reducer,ee=t(629),ne=t(637),te=t(78),ae=t(110),le=function e(){var n=this;Object(ae.a)(this,e),this.addEdge=function(e,t){void 0===n.graph[e]&&(n.graph[e]=[]),n.graph[e].push(t)},this.DFS=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],a=[];for(n.stack.push(e);0!==n.stack.length;){var l=n.stack.pop();if(a.push(l),void 0===n.graph[l]);else{var r=void 0;r=t?n.graph[l].slice().reverse():n.graph[l];var i,s=Object(te.a)(r);try{for(s.s();!(i=s.n()).done;){var u=i.value;n.stack.push(u)}}catch(o){s.e(o)}finally{s.f()}}}return a},this.BFS=function(e){n.queue.push(e);for(var t=[];0!==n.queue.length;){var a=n.queue.shift();if(t.push(a),void 0===n.graph[a]);else{var l,r=n.graph[a],i=Object(te.a)(r);try{for(i.s();!(l=i.n()).done;){var s=l.value;n.queue.push(s)}}catch(u){i.e(u)}finally{i.f()}}}return t},this.graph=[],this.stack=[],this.queue=[]},re=function(e){var n=e.name,t=e.index,a=e.x_position,r=e.y_position,i=Object(c.b)(),s="black";return Object(c.c)(K)===t&&(s="green"),l.a.createElement(l.a.Fragment,null,l.a.createElement("svg",{x:a,y:r,onClick:function(){return i(V({index:t}))}},l.a.createElement("circle",{cx:"30",cy:"30",r:"20",stroke:s,strokeWidth:"3",fill:"red",fillOpacity:"0.5"}),l.a.createElement("text",{textAnchor:"middle",x:"30",y:"30"},n)))},ie=function e(n){var t,a=n.parentName,r=n.parentIndex,i=n.x_position,s=void 0===i?0:i,u=n.y_position,o=void 0===u?0:u,f=n.height,p=n.width,g=Object(c.c)(M),d=!1,h=g[a],m=[];if(t=function e(n){if("undefined"===typeof n)return 0;for(var t=0,a=0,l=Object.keys(n);a<l.length;a++){var r=l[a];t++,t+=e(g[n[r]])}return t}(h),"undefined"!==typeof h){d=!0;for(var y=0,x=Object.keys(h);y<x.length;y++){var E=x[y];m.push([E,h[E]])}}var J=25*-t;return l.a.createElement("svg",{x_position:s,y_position:o,width:p,height:f},l.a.createElement(re,{x_position:0===r?p/2:s,y_position:o,name:a,index:r}),d?m.map((function(n,a){return J+=25*t,"undefined"!==typeof g[n[1]]?l.a.createElement(e,{x_position:s+J,y_position:o+100,width:p,height:f,key:a,parentName:n[1],parentIndex:n[0]}):l.a.createElement(e,{x_position:s+J,y_position:o+100,key:a,parentName:n[1],parentIndex:n[0]})})):null)},se=new le,ue=l.a.memo((function(){var e=Object(c.c)(z),n=Object(c.c)(K),t=Object(c.c)($),r=Object(c.c)(Q),i=Object(c.b)(),s=Object(a.useState)(""),u=Object(d.a)(s,2),o=u[0],f=u[1],p=function(){f(""),e.includes(o)||(i(G({name:o||"Node"})),"undefined"!==typeof e[n]&&se.addEdge(e[n],o))};return l.a.createElement(D.a,{direction:"column",container:!0,spacing:2},l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(C.a,null,l.a.createElement(D.a,{container:!0},l.a.createElement(D.a,{item:!0},l.a.createElement(J.a,{variant:"h5"},"Breadth First Search:"),l.a.createElement(J.a,null,0!==t.length?t.map((function(e){return e===t[t.length-1]?e:e+"->"})):"(BFS Path)"),l.a.createElement(J.a,{variant:"h5"},"Depth First Search:"),l.a.createElement(J.a,null,0!==r.length?r.map((function(e){return e===r[r.length-1]?e:e+"->"})):"(DFS Path)"),l.a.createElement(J.a,null,"Enter node name to draw tree graph.")))),l.a.createElement(ee.a,null,l.a.createElement(ne.a,{label:"Node Name",placeholder:"Node",variant:"outlined","aria-label":"Node name",value:o,onChange:function(e){return f(e.target.value)},onKeyPress:function(e){"Enter"===e.key&&p()}}),l.a.createElement(k.a,{variant:"outlined",onClick:p},"Add node"),l.a.createElement(k.a,{variant:"outlined",onClick:function(){var t=se.DFS(e[n],!0);i(W({DFSPath:t}))}},"Show DFS"),l.a.createElement(k.a,{variant:"outlined",onClick:function(){var t=se.BFS(e[n]);i(U({BFSPath:t}))}},"Show BFS"),l.a.createElement(k.a,{variant:"outlined",onClick:function(){se=new le,i(H())}},"Reset Tree Graph")))),l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(C.a,null,l.a.createElement(J.a,{variant:"h4",align:"center"},"Tree Graph"),0!==e.length?l.a.createElement(ie,{width:window.innerWidth/2+window.innerWidth/4,height:600,parentName:e[0],parentIndex:0}):null))))})),oe=t(639),fe="\n  DFS = (key, rev = false) => {\n    let dfs = [];\n    this.stack.push(key);\n    while (1) {\n      if (this.stack.length === 0) {\n        // array empty or does not exist\n        break;\n      }\n      const popped = this.stack.pop();\n\n      dfs.push(popped);\n      if (this.graph[popped] === undefined) {\n      } else {\n        let childData;\n        if (rev) childData = this.graph[popped].slice().reverse();\n        else childData = this.graph[popped];\n        for (let i of childData) {\n          this.stack.push(i);\n        }\n      }\n    }\n    return dfs;\n  };",ce="\n  BFS = (key) => {\n    this.queue.push(key);\n    let bfs = [];\n    while (1) {\n      if (this.queue.length === 0) {\n        // array empty or does not exist\n        break;\n      }\n      const popped = this.queue.shift();\n      bfs.push(popped);\n\n      if (this.graph[popped] === undefined) {\n      } else {\n        const childData = this.graph[popped];\n        for (let i of childData) {\n          this.queue.push(i);\n        }\n      }\n    }\n    return bfs;\n  };",pe="\n  class Graph {\n    constructor() {\n      this.graph = [];\n      this.stack = [];\n      this.queue = [];\n    }\n    addEdge = (node, newNode) => {\n      if (this.graph[node] === undefined) this.graph[node] = [];\n      this.graph[node].push(newNode);\n    };\n  \n    DFS = (key, rev = false) => {\n      let dfs = [];\n      this.stack.push(key);\n      while (1) {\n        if (this.stack.length === 0) {\n          // array empty or does not exist\n          break;\n        }\n        const popped = this.stack.pop();\n  \n        dfs.push(popped);\n        if (this.graph[popped] === undefined) {\n        } else {\n          let childData;\n          if (rev) childData = this.graph[popped].slice().reverse();\n          else childData = this.graph[popped];\n          for (let i of childData) {\n            this.stack.push(i);\n          }\n        }\n      }\n      return dfs;\n    };\n    BFS = (key) => {\n      this.queue.push(key);\n      let bfs = [];\n      while (1) {\n        if (this.queue.length === 0) {\n          // array empty or does not exist\n          break;\n        }\n        const popped = this.queue.shift();\n        bfs.push(popped);\n  \n        if (this.graph[popped] === undefined) {\n        } else {\n          const childData = this.graph[popped];\n          for (let i of childData) {\n            this.queue.push(i);\n          }\n        }\n      }\n      return bfs;\n    };\n  }\n  ",ge="\n  class WaterJug():\n    def __init__(self,x,y,target):\n        self.capX = x\n        self.capY = y\n        self.x = 0\n        self.y = 0\n        self.target = target\n        self.path = []\n        \n    def rule(self,x, d=0):\n        w.printVolume()\n        print('Rule {}'.format(x),end=' ')\n        # fill capX gallon jug completely\n        if(x==1):\n                if self.x<self.capX:\n                    self.x=self.capX\n                print('Fill jugX completely')\n        # fill capY gallon jug completely\n        elif (x==2):\n                if self.y<self.capY:\n                    self.y=self.capY\n                print('Fill jugY completely')\n        # pour some part from x jug\n        elif(x==3):\n                if self.x>0:\n                    self.x= self.x - d\n                print('Pour Some part D from X jug')\n        # pour some part from y jug        \n        elif(x==4):\n                if self.y>0:\n                    self.y = self.y - d\n                \n                print('Pour Some part D from Y jug')\n        # empty jug x        \n        elif(x==5):\n                if self.x>0:\n                    self.x=0\n                print('Empty jugX')\n        # empty jug y        \n        elif(x==6):\n                if self.y>0:\n                    self.y=0\n                print('Empty jugY')\n        # pour water from y jug to fill x jug        \n        elif(x==7):\n                if self.x+self.y < self.capX+self.capY:\n                    self.y= self.y-(self.capX-self.x)\n                    self.x = self.capX\n                print('Pour from jugY to fill jugX')\n        #pour water from x jug to fill y jug\n        elif(x==8):\n                if self.x+self.y < self.capX+self.capY:\n                    self.x=self.x-(self.capY-self.y)\n                    self.y = self.capY\n                print('Pour from jugX to fill jugY')\n        # pour all water from y jug to x jug\n        elif(x==9):\n                if self.x+self.y < self.capX:\n                    self.x= self.x+self.y\n                    self.y=0\n                print('Pour all from jugY to jugX')\n        #pour all water from x jug to y jug\n        elif(x==10):\n                if self.x+self.y < self.capY:\n                    self.x=0\n                    self.y=self.x+self.y     \n                    print('Pour all from jugX to jugY')\n\n        w.printVolume()\n        print('---')\n        self.appendPath()\n             \n    def printVolume(self):\n        print('[JugX={}, JugY={}]'.format(self.x, self.y))\n    \n    # print each state leading upto solution\n    def printPath(self):\n        for state in self.path:\n            if state==self.path[-1]:\n                print(f'[JugX:{state[0]}, JugY:{state[1]}]')\n                continue\n            print(f'[JugX:{state[0]}, JugY:{state[1]}]', end='->')\n    \n    # add new state generated to path\n    def appendPath(self):\n        self.path.append([self.x, self.y])\n    \n    def reset(self):\n        self.x=0\n        self.y=0\n        self.path=[]\n        \n    def pour(self): \n        self.reset()\n        yJug= self.capY\n        xJug=0\n#         self.rule(2)\n        step = 1\n        while ((yJug  is not self.target) and (xJug is not self.target)): \n            print('({},{})'.format(xJug, yJug))\n            \n\n            if(yJug < (self.capX-xJug)):\n                temp = yJug\n#                 self.rule(9)\n            else:\n                temp = (self.capX-xJug)\n#                 self.rule(7)\n            xJug = xJug + temp\n            yJug = yJug - temp\n\n#             temp = min(yJug, self.capX-xJug) \n#             xJug = xJug + temp \n#             yJug = yJug - temp \n\n            print('({},{})'.format(xJug, yJug))\n\n            step =  step + 1\n            if ((yJug == self.target) or (xJug == self.target)): \n                break\n\n            if yJug == 0: \n                yJug = self.capY\n#                 self.rule(2)\n                step =  step + 1\n\n            if xJug == self.capX: \n                xJug = 0\n#                 self.rule(5)\n                step =  step + 1\n    \n    # Solve using rules\n    def pourRule(self):\n        self.reset()\n        self.rule(2)\n        step = 1\n        while(1):\n            if(self.y==self.target or self.x==self.target):\n                break\n            \n            if(self.y < (self.capX-self.x)):\n                self.rule(9)\n            else:\n                self.rule(7)\n            \n            step=step+1\n            if(self.y==self.target or self.x==self.target):\n                break\n            \n            if self.y==0:\n                self.rule(2)\n                step = step + 1\n            \n            if self.x==self.capX:\n                self.rule(5)\n                step = step+1\n        return step \n\n    # Reverse the capacity of jugs\n    def reverseJugCapacity(self):\n        self.capX, self.capY = self.capY, self.capX\n    \n    # Solve  for both x,y and y,x conditions \n    def solve(self):\n        print(f'With JugXCapacity {self.capX} and JugYCapacity {self.capY}',end='\\n\\n\\n')\n        print(f'Total steps to solve : {self.pourRule()}',end='\\n\\n')\n        self.printPath()\n        print('*'*100)\n        print(f'With JugXCapacity {self.capX} and JugYCapacity {self.capY}',end='\\n\\n\\n')\n        self.reverseJugCapacity()\n        print(f'Total steps to solve : {self.pourRule()}',end='\\n\\n')\n        self.printPath()\n  ",de="\n  # Solve using rules\n  def pourRule(self):\n      self.reset()\n      self.rule(2)\n      step = 1\n      while(1):\n          if(self.y==self.target or self.x==self.target):\n              break\n          \n          if(self.y < (self.capX-self.x)):\n              self.rule(9)\n          else:\n              self.rule(7)\n          \n          step=step+1\n          if(self.y==self.target or self.x==self.target):\n              break\n          \n          if self.y==0:\n              self.rule(2)\n              step = step + 1\n          \n          if self.x==self.capX:\n              self.rule(5)\n              step = step+1\n      return step \n  ",he="\n  def rule(self,x, d=0):\n    w.printVolume()\n    print('Rule {}'.format(x),end=' ')\n    # fill capX gallon jug completely\n    if(x==1):\n            if self.x<self.capX:\n                self.x=self.capX\n            print('Fill jugX completely')\n    # fill capY gallon jug completely\n    elif (x==2):\n            if self.y<self.capY:\n                self.y=self.capY\n            print('Fill jugY completely')\n    # pour some part from x jug\n    elif(x==3):\n            if self.x>0:\n                self.x= self.x - d\n            print('Pour Some part D from X jug')\n    # pour some part from y jug        \n    elif(x==4):\n            if self.y>0:\n                self.y = self.y - d\n            \n            print('Pour Some part D from Y jug')\n    # empty jug x        \n    elif(x==5):\n            if self.x>0:\n                self.x=0\n            print('Empty jugX')\n    # empty jug y        \n    elif(x==6):\n            if self.y>0:\n                self.y=0\n            print('Empty jugY')\n    # pour water from y jug to fill x jug        \n    elif(x==7):\n            if self.x+self.y < self.capX+self.capY:\n                self.y= self.y-(self.capX-self.x)\n                self.x = self.capX\n            print('Pour from jugY to fill jugX')\n    #pour water from x jug to fill y jug\n    elif(x==8):\n            if self.x+self.y < self.capX+self.capY:\n                self.x=self.x-(self.capY-self.y)\n                self.y = self.capY\n            print('Pour from jugX to fill jugY')\n    # pour all water from y jug to x jug\n    elif(x==9):\n            if self.x+self.y < self.capX:\n                self.x= self.x+self.y\n                self.y=0\n            print('Pour all from jugY to jugX')\n    #pour all water from x jug to y jug\n    elif(x==10):\n            if self.x+self.y < self.capY:\n                self.x=0\n                self.y=self.x+self.y     \n                print('Pour all from jugX to jugY')\n\n    w.printVolume()\n    print('---')\n    self.appendPath()\n  ",me="\n  w = WaterJug(5,3,4)\n  w.solve()\n  \n  OUTPUT:\n    With JugXCapacity 5 and JugYCapacity 3\n\n\n    [JugX=0, JugY=0]\n    Rule 2 Fill jugY completely\n    [JugX=0, JugY=3]\n    ---\n    [JugX=0, JugY=3]\n    Rule 9 Pour all from jugY to jugX\n    [JugX=3, JugY=0]\n    ---\n    [JugX=3, JugY=0]\n    Rule 2 Fill jugY completely\n    [JugX=3, JugY=3]\n    ---\n    [JugX=3, JugY=3]\n    Rule 7 Pour from jugY to fill jugX\n    [JugX=5, JugY=1]\n    ---\n    [JugX=5, JugY=1]\n    Rule 5 Empty jugX\n    [JugX=0, JugY=1]\n    ---\n    [JugX=0, JugY=1]\n    Rule 9 Pour all from jugY to jugX\n    [JugX=1, JugY=0]\n    ---\n    [JugX=1, JugY=0]\n    Rule 2 Fill jugY completely\n    [JugX=1, JugY=3]\n    ---\n    [JugX=1, JugY=3]\n    Rule 9 Pour all from jugY to jugX\n    [JugX=4, JugY=0]\n    ---\n    Total steps to solve : 8\n\n    [JugX:0, JugY:3]-> [JugX:3, JugY:0]-> [JugX:3, JugY:3]-> [JugX:5, JugY:1]->\n    [JugX:0, JugY:1]-> [JugX:1, JugY:0]-> [JugX:1, JugY:3]-> [JugX:4, JugY:0]\n    *****************************************************\n    With JugXCapacity 5 and JugYCapacity 3\n\n\n    [JugX=0, JugY=0]\n    Rule 2 Fill jugY completely\n    [JugX=0, JugY=5]\n    ---\n    [JugX=0, JugY=5]\n    Rule 7 Pour from jugY to fill jugX\n    [JugX=3, JugY=2]\n    ---\n    [JugX=3, JugY=2]\n    Rule 5 Empty jugX\n    [JugX=0, JugY=2]\n    ---\n    [JugX=0, JugY=2]\n    Rule 9 Pour all from jugY to jugX\n    [JugX=2, JugY=0]\n    ---\n    [JugX=2, JugY=0]\n    Rule 2 Fill jugY completely\n    [JugX=2, JugY=5]\n    ---\n    [JugX=2, JugY=5]\n    Rule 7 Pour from jugY to fill jugX\n    [JugX=3, JugY=4]\n    ---\n    Total steps to solve : 6\n\n    [JugX:0, JugY:5]->[JugX:3, JugY:2]->[JugX:0, JugY:2]\n    ->[JugX:2, JugY:0]->[JugX:2, JugY:5]->[JugX:3, JugY:4]\n\n  ",ye=t(633);function xe(e){var n=e.children,t=e.value,a=e.index,r=Object(O.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},r),t===a&&l.a.createElement(l.a.Fragment,null," ",n," "))}function Ee(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Je=function(){var e=l.a.useState(0),n=Object(d.a)(e,2),t=n[0],a=n[1];return l.a.createElement(P.a,{maxwidth:"lg"},l.a.createElement(D.a,{container:!0,direction:"column",spacing:2},l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(N.a,{title:"DFS and BFS"}),l.a.createElement(C.a,null,l.a.createElement(J.a,{variant:"body1"},"Each node can be selected. A green highlight is around currently selected node."),l.a.createElement(J.a,{variant:"body1"},"'Add node' adds child node to the currently selected node."),l.a.createElement(J.a,{variant:"body1"},"Show DFS and Show BFS calculates path from currently selected node to all its leaf nodes."),l.a.createElement(J.a,{variant:"body1"},"Two Nodes cannot have the same name."),l.a.createElement(J.a,{variant:"body2"},"*Capable of displaying Tree of Depth 6 nodes with each node having 2 children on a full screen")))),l.a.createElement(D.a,{item:!0,container:!0},l.a.createElement(ue,null)),l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(N.a,{title:"Code"}),l.a.createElement(C.a,null,l.a.createElement(R.a,{value:t,onChange:function(e,n){a(n)},"aria-label":"Tree Graph"},l.a.createElement(A.a,Object.assign({label:"BFS"},Ee(0))),l.a.createElement(A.a,Object.assign({label:"DFS"},Ee(1))),l.a.createElement(A.a,Object.assign({label:"Graph Class"},Ee(2)))),l.a.createElement(xe,{value:t,index:0},l.a.createElement(oe.a,{language:"javascript",style:ye.a},ce)),l.a.createElement(xe,{value:t,index:1},l.a.createElement(oe.a,{language:"javascript",style:ye.a},fe)),l.a.createElement(xe,{value:t,index:2},l.a.createElement(oe.a,{language:"javascript",style:ye.a},pe))))),l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(N.a,{title:"Adding Node"}),l.a.createElement(C.a,null,l.a.createElement(J.a,null,"   A dictionary/object is used to store list of its children to maintain relation between each node and its childrens. i.e  {'parentNode': [children]}.\nTo add node, either children are added to existing parent key or a new parent key is created to store children for that node. \nA function addEdge(node, newNode) takes two input 'node'i.e. parent Node and 'newNode'i.e. to be added child node.\n")))),l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(N.a,{title:"Github Link"}),l.a.createElement(C.a,null,l.a.createElement(_.a,{color:"secondary",href:"https://github.com/B10prajapati/AI_LAB",variant:"body2"},"Github Link"))))))},je=t(640);function be(e){var n=e.children,t=e.value,a=e.index,r=Object(O.a)(e,["children","value","index"]);return l.a.createElement("div",Object.assign({role:"tabpanel",hidden:t!==a,id:"simple-tabpanel-".concat(a),"aria-labelledby":"simple-tab-".concat(a)},r),t===a&&l.a.createElement(l.a.Fragment,null," ",n," "))}function ve(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}var Xe=function(){var e=l.a.useState(0),n=Object(d.a)(e,2),t=n[0],a=n[1];return l.a.createElement(P.a,null,l.a.createElement(D.a,{container:!0},l.a.createElement(D.a,{item:!0},l.a.createElement(B.a,null,l.a.createElement(N.a,{title:"Code"}),l.a.createElement(C.a,null,l.a.createElement(R.a,{value:t,onChange:function(e,n){a(n)},"aria-label":"Tree Graph"},l.a.createElement(A.a,Object.assign({label:"Solved Example"},ve(0))),l.a.createElement(A.a,Object.assign({label:"Rules"},ve(1))),l.a.createElement(A.a,Object.assign({label:"Solution"},ve(2))),l.a.createElement(A.a,Object.assign({label:"Class"},ve(3)))),l.a.createElement(be,{value:t,index:0},l.a.createElement(je.a,{language:"python",style:ye.a},me)),l.a.createElement(be,{value:t,index:1},l.a.createElement(je.a,{language:"python",style:ye.a},he)),l.a.createElement(be,{value:t,index:2},l.a.createElement(je.a,{language:"python",style:ye.a},de)),l.a.createElement(be,{value:t,index:3},l.a.createElement(je.a,{language:"python",style:ye.a},ge)))))))},Ye=Object(L.a)({reducer:{graph:Z}}),ke=Object(s.a)({palette:{type:"dark",primary:{main:"#26292C",light:"rgb(81, 91, 95)",dark:"rgb(26, 35, 39)",contrastText:"#ffffff"},secondary:{main:"#FFB74D",light:"rgb(255, 197, 112)",dark:"rgb(200, 147, 89)",contrastText:"rgba(0, 0, 0, 0.87)"},titleBar:{main:"#555555",contrastText:"#ffffff"},error:{main:f.a.A400}}}),we=function(){return l.a.createElement(u.a,{theme:ke},l.a.createElement(c.a,{store:Ye},l.a.createElement(o.a,null),l.a.createElement(p.a,null,l.a.createElement(F,null),l.a.createElement(g.c,null,l.a.createElement(g.a,{exact:!0,from:"/AI_LAB/",render:function(e){return l.a.createElement(Je,e)}}),l.a.createElement(g.a,{exact:!0,path:"/AI_LAB/lab2",render:function(e){return l.a.createElement(Je,e)}}),l.a.createElement(g.a,{exact:!0,path:"/AI_LAB/lab3",render:function(e){return l.a.createElement(Xe,e)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(we,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[123,1,2]]]);
//# sourceMappingURL=main.9c8db1f5.chunk.js.map