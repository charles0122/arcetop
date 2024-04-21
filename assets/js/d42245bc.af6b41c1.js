"use strict";(self.webpackChunkarce_top=self.webpackChunkarce_top||[]).push([[3371],{19123:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>c,contentTitle:()=>o,default:()=>R,frontMatter:()=>a,metadata:()=>s,toc:()=>E});var t=n(13274),r=n(99128);const a={slug:"spring-cloud-gateway",title:"Gateway \u670d\u52a1\u7f51\u5173",author:"Arce",author_title:"\u72ec\u7acb\u6e38\u620f\u5f00\u53d1\u8005",author_url:"https://github.com/charles0122",author_image_url:"https://avatars.githubusercontent.com/u/70085736?v=4",description:"\u6d4b\u8bd5",tags:["Unity","CSharp"],activityId:"\u76f8\u5173\u52a8\u6001 ID",bvid:"\u76f8\u5173\u89c6\u9891 ID\uff08\u4e0e activityId 2\u9009\u4e00\uff09",oid:"oid"},o=void 0,s={permalink:"/arcetop/blog/spring-cloud-gateway",editUrl:"https://github.com/charles0122/arce.top/edit/main/arce.top/blog/2023-03-12-spring-cloud-gateway.md",source:"@site/blog/2023-03-12-spring-cloud-gateway.md",title:"Gateway \u670d\u52a1\u7f51\u5173",description:"\u6d4b\u8bd5",date:"2023-03-12T00:00:00.000Z",tags:[{label:"Unity",permalink:"/arcetop/blog/tags/unity"},{label:"CSharp",permalink:"/arcetop/blog/tags/c-sharp"}],readingTime:4.215,hasTruncateMarker:!0,authors:[{name:"Arce",title:"\u72ec\u7acb\u6e38\u620f\u5f00\u53d1\u8005",url:"https://github.com/charles0122",imageURL:"https://avatars.githubusercontent.com/u/70085736?v=4"}],frontMatter:{slug:"spring-cloud-gateway",title:"Gateway \u670d\u52a1\u7f51\u5173",author:"Arce",author_title:"\u72ec\u7acb\u6e38\u620f\u5f00\u53d1\u8005",author_url:"https://github.com/charles0122",author_image_url:"https://avatars.githubusercontent.com/u/70085736?v=4",description:"\u6d4b\u8bd5",tags:["Unity","CSharp"],activityId:"\u76f8\u5173\u52a8\u6001 ID",bvid:"\u76f8\u5173\u89c6\u9891 ID\uff08\u4e0e activityId 2\u9009\u4e00\uff09",oid:"oid"},unlisted:!1,prevItem:{title:"Feign \u8fdc\u7a0b\u8c03\u7528",permalink:"/arcetop/blog/spring-cloud-feign"},nextItem:{title:"Hystrix \u670d\u52a1\u7194\u65ad",permalink:"/arcetop/blog/spring-cloud-hystrix"}},c={authorsImageUrls:[void 0]},E=[{value:"\u90e8\u7f72\u7f51\u5173",id:"\u90e8\u7f72\u7f51\u5173",level:3},{value:"\u8def\u7531\u8fc7\u6ee4\u5668",id:"\u8def\u7531\u8fc7\u6ee4\u5668",level:3}];function l(e){const i={a:"a",blockquote:"blockquote",code:"code",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.p,{children:(0,t.jsx)(i.a,{href:"https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/",children:"Gateway\u5b98\u65b9\u6587\u6863"})}),"\n",(0,t.jsx)(i.h3,{id:"\u90e8\u7f72\u7f51\u5173",children:"\u90e8\u7f72\u7f51\u5173"}),"\n",(0,t.jsx)(i.p,{children:"\u521b\u5efa\u4e00\u4e2a\u7f51\u5173\u5fae\u670d\u52a1\uff0c\u6dfb\u52a0\u4f9d\u8d56"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-xml",children:"<dependencies>\n  <dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-gateway</artifactId>\n  </dependency>\n  <dependency>\n    <groupId>org.springframework.cloud</groupId>\n    <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>\n  </dependency>\n</dependencies>\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u6dfb\u52a0\u914d\u7f6e\u6587\u4ef6"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"server:\n  port: 8500\neureka:\n  client:\n   service-url:\n    defaultZone: http://localhost:8801/eureka, http://localhost:8802/eureka\nspring:\n  application:\n   name: gateway\n  cloud:\n   gateway:\n    # \u914d\u7f6e\u8def\u7531\uff0c\u6ce8\u610f\u8fd9\u91cc\u662f\u4e2a\u5217\u8868\uff0c\u6bcf\u4e00\u9879\u90fd\u5305\u542b\u4e86\u5f88\u591a\u4fe1\u606f\n    routes:\n    - id: borrow-service   # \u8def\u7531\u540d\u79f0\n      uri: lb://BorrowService  # \u8def\u7531\u7684\u5730\u5740\uff0clb\u8868\u793a\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5230\u5fae\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528http\u6b63\u5e38\u8f6c\u53d1\n      predicates: # \u8def\u7531\u89c4\u5219\uff0c\u65ad\u8a00\u4ec0\u4e48\u8bf7\u6c42\u4f1a\u88ab\u8def\u7531\n      - Path=/borrows/**  # \u53ea\u8981\u662f\u8bbf\u95ee\u7684\u8fd9\u4e2a\u8def\u5f84\uff0c\u4e00\u5f8b\u90fd\u88ab\u8def\u7531\u5230\u4e0a\u9762\u6307\u5b9a\u7684\u670d\u52a1\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u542f\u52a8\u7c7b"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:"@SpringBootApplication\npublic class GatewayApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(GatewayApplication.class,args);\n    }\n}\n"})}),"\n",(0,t.jsxs)(i.p,{children:["\u8bbf\u95ee\u4ee5\u4e0b\u63a5\u53e3",(0,t.jsx)(i.code,{children:"http://localhost:8500/borrows/1"}),"\n\u5c06\u8def\u7531\u5230 ",(0,t.jsx)(i.code,{children:"http://BorrowService/borrows/1"})]}),"\n",(0,t.jsx)(i.h3,{id:"\u8def\u7531\u8fc7\u6ee4\u5668",children:"\u8def\u7531\u8fc7\u6ee4\u5668"}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.a,{href:"https://docs.spring.io/spring-cloud-gateway/docs/current/reference/html/#gatewayfilter-factories",children:"Spring Cloud Gateway \u8def\u7531\u8fc7\u6ee4\u5668\u6587\u6863"}),"\n\u8def\u7531\u7b5b\u9009\u5668\u5141\u8bb8\u4ee5\u67d0\u79cd\u65b9\u5f0f\u4fee\u6539\u4f20\u5165 HTTP \u8bf7\u6c42\u6216\u4f20\u51fa HTTP \u54cd\u5e94\u3002\n\u5c1d\u8bd5\u7ed9\u8bf7\u6c42\u6dfb\u52a0\u4e00\u4e2aHeader"]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-yaml",children:"server:\n  port: 8500\neureka:\n  client:\n   service-url:\n    defaultZone: http://localhost:8801/eureka, http://localhost:8802/eureka\nspring:\n  application:\n   name: gateway\n  cloud:\n   gateway:\n    # \u914d\u7f6e\u8def\u7531\uff0c\u6ce8\u610f\u8fd9\u91cc\u662f\u4e2a\u5217\u8868\uff0c\u6bcf\u4e00\u9879\u90fd\u5305\u542b\u4e86\u5f88\u591a\u4fe1\u606f\n    routes:\n    - id: borrow-service   # \u8def\u7531\u540d\u79f0\n      uri: lb://BorrowService  # \u8def\u7531\u7684\u5730\u5740\uff0clb\u8868\u793a\u4f7f\u7528\u8d1f\u8f7d\u5747\u8861\u5230\u5fae\u670d\u52a1\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528http\u6b63\u5e38\u8f6c\u53d1\n      predicates: # \u8def\u7531\u89c4\u5219\uff0c\u65ad\u8a00\u4ec0\u4e48\u8bf7\u6c42\u4f1a\u88ab\u8def\u7531\n      - Path=/borrows/**  # \u53ea\u8981\u662f\u8bbf\u95ee\u7684\u8fd9\u4e2a\u8def\u5f84\uff0c\u4e00\u5f8b\u90fd\u88ab\u8def\u7531\u5230\u4e0a\u9762\u6307\u5b9a\u7684\u670d\u52a1\n    - id: book-service\n      uri: lb://BookService\n      predicates:\n      - Path=/books/**\n      filters: # \u6dfb\u52a0\u8fc7\u6ee4\u5668\n      - AddRequestHeader=Test, HelloWorld!\n      # AddRequestHeader \u5c31\u662f\u6dfb\u52a0\u8bf7\u6c42\u5934\u4fe1\u606f\uff0c\u5176\u4ed6\u5de5\u5382\u8bf7\u67e5\u9605\u5b98\u7f51\n"})}),"\n",(0,t.jsx)(i.p,{children:"\u5728\u8def\u7531\u5bf9\u5e94\u5fae\u670d\u52a1\u7684controller\u5c42\u4e2d\u83b7\u53d6header"}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@GetMapping("/{bid}")\nBook findBookById(@PathVariable("bid") int bid,\n                  HttpServletRequest request){\n    System.out.println(request.getHeader("Test"));\n    return bookService.getBookById(bid);\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:["\u6211\u4eec\u4e5f\u53ef\u4ee5\u81ea\u5b9a\u4e49\u5168\u5c40\u8fc7\u6ee4\u5668",(0,t.jsx)(i.code,{children:"\u5224\u65ad\u662f\u5426\u5305\u542btest\u53c2\u6570\uff0c\u4e14\u53c2\u6570\u503c\u5305\u542b 1"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@Component   //\u9700\u8981\u6ce8\u518c\u4e3aBean\npublic class TestFilter implements GlobalFilter {\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        //\u5148\u83b7\u53d6ServerHttpRequest\u5bf9\u8c61\uff0c\u6ce8\u610f\u4e0d\u662fHttpServletRequest\n        ServerHttpRequest request = exchange.getRequest();\n        //\u6253\u5370\u4e00\u4e0b\u6240\u6709\u7684\u8bf7\u6c42\u53c2\u6570\n        System.out.println(request.getQueryParams());\n        //\u5224\u65ad\u662f\u5426\u5305\u542btest\u53c2\u6570\uff0c\u4e14\u53c2\u6570\u503c\u5305\u542b 1\n        List<String> value = request.getQueryParams().get("test");\n        if(value != null && value.contains("1")) {\n            //\u5c06ServerWebExchange\u5411\u8fc7\u6ee4\u94fe\u7684\u4e0b\u4e00\u7ea7\u4f20\u9012\uff08\u8ddfJavaWeb\u4e2d\u4ecb\u7ecd\u7684\u8fc7\u6ee4\u5668\u5176\u5b9e\u662f\u5dee\u4e0d\u591a\u7684\uff09\n            return chain.filter(exchange);\n        }else {\n            //\u76f4\u63a5\u5728\u8fd9\u91cc\u4e0d\u518d\u5411\u4e0b\u4f20\u9012\uff0c\u7136\u540e\u8fd4\u56de\u54cd\u5e94\n            return exchange.getResponse().setComplete();\n        }\n    }\n}\n'})}),"\n",(0,t.jsxs)(i.p,{children:[(0,t.jsx)(i.img,{alt:"image.png",src:n(48104).A+"",width:"549",height:"206"}),"\n",(0,t.jsx)(i.img,{alt:"image.png",src:n(90226).A+"",width:"689",height:"587"}),"\n\u624b\u52a8\u6307\u5b9a\u8fc7\u6ee4\u5668\u4f18\u5148\u7ea7 ",(0,t.jsx)(i.code,{children:"Ordered"})," \u63a5\u53e3 ",(0,t.jsx)(i.strong,{children:"getOrder\u65b9\u6cd5\u7684\u8fd4\u56de\u503c\u503c\u8d8a\u5c0f\u4f18\u5148\u7ea7\u8d8a\u9ad8"})]}),"\n",(0,t.jsx)(i.pre,{children:(0,t.jsx)(i.code,{className:"language-java",children:'@Component   //\u9700\u8981\u6ce8\u518c\u4e3aBean\npublic class TestFilter implements GlobalFilter , Ordered {\n    @Override\n    public Mono<Void> filter(ServerWebExchange exchange, GatewayFilterChain chain) {\n        //\u5148\u83b7\u53d6ServerHttpRequest\u5bf9\u8c61\uff0c\u6ce8\u610f\u4e0d\u662fHttpServletRequest\n        ServerHttpRequest request = exchange.getRequest();\n        //\u6253\u5370\u4e00\u4e0b\u6240\u6709\u7684\u8bf7\u6c42\u53c2\u6570\n        System.out.println(request.getQueryParams());\n        //\u5224\u65ad\u662f\u5426\u5305\u542btest\u53c2\u6570\uff0c\u4e14\u53c2\u6570\u503c\u4e3a 1\n        List<String> value = request.getQueryParams().get("test");\n        if(value != null && value.contains("1")) {\n            //\u5c06ServerWebExchange\u5411\u8fc7\u6ee4\u94fe\u7684\u4e0b\u4e00\u7ea7\u4f20\u9012\uff08\u8ddfJavaWeb\u4e2d\u4ecb\u7ecd\u7684\u8fc7\u6ee4\u5668\u5176\u5b9e\u662f\u5dee\u4e0d\u591a\u7684\uff09\n            return chain.filter(exchange);\n        }else {\n            //\u76f4\u63a5\u5728\u8fd9\u91cc\u4e0d\u518d\u5411\u4e0b\u4f20\u9012\uff0c\u7136\u540e\u8fd4\u56de\u54cd\u5e94\n            return exchange.getResponse().setComplete();\n        }\n    }\n    @Override\n    public int getOrder() {\n        return 0;\n    }\n}\n'})}),"\n",(0,t.jsxs)(i.blockquote,{children:["\n",(0,t.jsxs)(i.p,{children:["\u5355\u4e2a\u8def\u7531\u7684\u8fc7\u6ee4\u5668Order\u503c\u6309\u4ece\u4e0a\u5f80\u4e0b\u7684\u987a\u5e8f\u4ece1\u5f00\u59cb\u9012\u589e\n\u5f53Order\u503c\u4e00\u6837\u65f6 \u5168\u5c40\u8def\u7531\u8fc7\u6ee4\u5668\u6267\u884c ",(0,t.jsx)(i.code,{children:"\u4f18\u4e8e"})," \u5355\u72ec\u7684\u8def\u7531\u8fc7\u6ee4\u5668\u6267\u884c\u3002"]}),"\n"]}),"\n",(0,t.jsx)(i.p,{children:"\u7cfb\u7edf\u5168\u5c40\u8fc7\u6ee4\u5668\u6267\u884c\u987a\u5e8f\uff08\u540d\u79f0\u3001order\uff09"})]})}function R(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},90226:(e,i,n)=>{n.d(i,{A:()=>t});const t=n.p+"assets/images/1660726207425-fe7e6619-4511-4816-849f-f822e4f2183a-ff9fe436f78808d905b18ca65df94114.png"},48104:(e,i,n)=>{n.d(i,{A:()=>t});const t="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAiUAAADOCAYAAADhcXKDAAAgAElEQVR4nO3de0zUZ9738bePLhMIQzAQRoYl4TAKnTyo7HY0qx2j0NTCxkOzLCa23BHbZBtqbZs8DbW2/tEtbV3vZLvamjZZsVmsSalNW82ttqloHOum0g1UGk6ikHAzHAKBMAYzBLfPHwM4nLULzmX5vP4xnbm45prpwO8z3+swC9auXfsTIiIiIiH2f0I9ABERERFQKBERERFDKJSIiIiIERaFegDyy+f3+xkaGmJoaIifftISJhERmZxCicyZf//73wwMDDA0NBTqoYiIyANA0zcyZxRIRETkXiiUyJwYHBxUIBlHU1ciItNTKJE5MTg4GOohGGfBggWhHoKIiNEUSmRO3L59O9RDEBGRB4xCicwJTVWIiMi9UigRERERIyiUiIiIiBEUSkRERMQIOjztAeBwOFi6dClLliwBoKOjg2vXrtHU1DRpe7fbzbVr1+jo6LifwzSay+UiMjKS9PR0AOrr6/H5fHz//fchHpmIiIwwPpTk5OTgdrt59dVXQz2U+2rJkiXk5+eTk5OD1WqdtI3P58Pj8VBaWjomgLz99tuUlpZSWlp6v4ZrJLvdTlFREVlZWURFRU3apr+/n4qKCg4fPozX673PIxQRkWBGh5KcnBz27t1LVVVVqIdyX+3evZv8/HwAPB4Pp0+fnlD5cDgcrFu3jtzcXHJzczly5AiffvopN2/eDNWwjVJcXExBQQE+n4/Kykrq6+tH/wVIT0/H5XKRnp5OdnY2W7du5R//+Ad/+ctfQjxyEZH5a8HatWuN3Ls5cmE+c+YMJSUloR7OfREZGclbb73Fb37zG0pLSzl9+vRdTcHs3LmTnTt3cu3aNZ5//nnOnj0b8kpJX19fSB7XarVy9OhR0tPTqaysZO/evTNWQOx2OyUlJbhcLurr6yksLMTn892nEYuIyAgjF7ru3bt3XgaSQ4cOsWzZMnbs2DFhSmY6paWl7Nixg/j4eA4dOjTHIzXXSCBJSEhg//79FBYW3tWUjNfrpbCwkP3795OQkMDRo0ennDKbfU9x9PKP/PjjSd68T494d97k5I8/8uPlozw1/raTZo10/onBvf1P/Gm7m5hQD0Vklhk1fRMZGcnu3bvJycmhvLycgwcPhnpI983u3buJj48nLy/vZ03BNDU1sWfPnnkdSg4ePEh6ejqFhYVUVlbe88+XlZXR1tbGwYMHefPNN3nhhRfmYJQSCpFJq9iwKgP74sCfvKFeLzVXznOlZfzv2jI2/WkD9sk68Z7nw1ON424M59erHmVNhp1A10P0tl7m3Fd19ExyqHH0Q9lkP5xEbMQiYIiBzkY833iYMIwJUnns6UdJbP2GI1+Hpgr5ixK9ivxtmVD1CeVX+mBhDA+tX8/DSbFEDF8Vp36PyFwyJpSMVAqWLl1KSUkJZ86cCfWQ7pucnBxyc3PZs2fPPQUSt9uNw+EYc9u1a9dYunTpbA/ReFu2bMHlclFWVjZtIHG5XNjtdr788stJ76+oqKCsrIyCggK2bNkyZTsJoacOcPKZtUQ1H2Z94bEZm4cv20TeBjsWfy9NVTV4sZPhdJC5MQ/b+U841XjrTuPoGKzAkM9Le9+4VOEdP6UXzrJN29hgt+DrbKCqoQ+Lw4kzcR1522L5/LiHrqDWce7tPOG04u9tpbamGX9MBk6Hk4150Zz/5BTBwxgvLCOD5EUDNNRcB9VH/mPxK9NYTCeXq/uAaFb9IY/MxX56vQ00NHUyGOvAucw++XtE5pQRoWQ+BxKA/Px8qqqq8Hg89/RzL7zwwug24fHa29tnY2gPjOeeew6v18vhw4enbXf06FEgED6mWjdy+PBhsrOzKSoqUigxUXoaKbFR9DffTeMk3G47Fn8zX330NS0A1FFX42XT9nXY16wmvvECo78tCwN/En1N5zl9ZYYPCKlu3HYLvtrPOe4Zjh911TS4t/OE08n6VTWBT+EA0atY77Ti957nk1ON3BoeR03rJrZtsON2p9L49fUpHiialQ/ZoLeK6vn1az1HUslIjWCo+TI1gwALGeyp4uRnV2gfzaF1VH//UOA9snrce0TmVMhDicPhYO/evcTHx/P888/Pu502mZmZLF26lD179tzzz+bl5c3BiB48WVlZ2O12du/ePeMC1cOHD5OQkDBtO5/PxzvvvMPBgwfJysqioqJitocs90t0PLGLgK6W4UAy7FYdDV3rsNutWCEolMBCwNc3U8UyjIyMZBYNNfOdp2vMPV2e72he9ijJjgxirnjoYeSTeS9VnpFAMjyMRg+1K7eRmexkGdcZPzkEQPxK0hZD5+VqNHHznxtbdQLoofpcz8SGt+qobV+HPTGOxEho1yzOfRHSUOJwODh06BALFixg165dUx4G9kuWmZkJcM9VErkjOzsb4K7WkcxUSRkx0ld2dnboQklaPgdKilibHEuUJXCTv7+N+jNHePnP5Uy2hDct/wAlRWtJjo0i8CN++m9U8MbmlzkLYH+c4n1FbHGljPZJfxuVX75B4f5v735sa4v5oHgLrpThx5mmD/vjxewrCmoL+PtvcOnIfl44Mq792qf5W/HTPJISNP7uSo6sf5YjvMnJH7eSMtw0yvUKP/74CtBP5TtrKDyzivy8TBb3VnGi/Ao9AH3tdA8txxoWQTgEBYJoosOBIT+DwY8fHU0E3MXFP5FEG+BtZWJ94zqtXY+SbI8mDughmiR7BAy00DKh4z5a2gfIXByNLQ4auyZ0RmpGKhFDzVyuGZx4J5EkuR/FvcwWWAsxNEB3y/ecO1c36XMIrK1xErfYEvjjP+Snt72aC+er6RozQzG8tsZ7ng+/GcCd+yjOWAu+q59w/J8LcW/Pw0ktJ47XEJeby7pEK7R+w4enR16NhcQ8tJ71o+tnAmPrvH6ZCxeu3xlb0mM8vTGZW7UnOO4JDgaRrMp/kszFXi5+eIq6oHti3NvJcw5R9XE5V24C0amsX7+GVFvEnefUepnTXzcyMUfcW9VpYMAPLBopoMl9ELKXWoEkIDMzc95Vh2ab3W7H6/Xe1TbeoqIiYOZw4vP58Hq92O2TLnmce1sO8NW+HBIs0H+jknMN3RCbxorlKazYto8TKWHkFR4LCiZ2nvrgOC89EouFfm5UnqOhexCrPY30WCuxw62eKtlHgSuK/rYfuHTVi8+ajMuVjqvgAEfb1nAXSzTAksDRAy6WD9ZTeeZbSHbhSk+YtA/Xix/zt2dWEIWf7vpLVDT7sNqXs3xFCtkvHeRk8m42vzYcTFxvcvLgVlIs/bT9cImrXj+xaStYnmInGYBKKs5YaLC7yFkRi//GJSoafEA/PzRMNdgWPB4v9g2r2bS+j9OeFm4SSZI7l8zFfrznPWMrKAD46Jvkg/MYMXaiAV/fJCkC6Orzgd1KbAzQE0esFfB2Mlnrrs4+cNqJjoYJDcIyyEhexEBDzSThJwznpjyc0T6aai7iHYwleVkqiY51bLNFc+L4P+kJahu/Po/NaVYY6Kap6ju8Piu2NAdpiat5YlviFOtaIsjYuAHnyBto0cIx99rXb2JNYkTgPxaO3BdJxtY81tgsDPm81H7XRDfDY0t7lG12+531Ni0tdJGMPcZOGD13AmKkk6TFAHEkJkHd6P+kSFLjreCr5fpNIOZ3bM9bjtXfS2ttDc3dYYHnFGvDwiSh5J6qTtEkxllgyEu7SlT3TchCyXvvvUdkZCQAH3300az23d7ezh//+MdZ7XOuOBwOPv3001nvNycnh/z8fAoLC2e9b9O4XK67rma4XK677re+vp6HH3745w7rP7CFD17KIcHST+U7eRQeC6qJ2PP54Pg+HnG9xIGnj/HkkeGbXzwQCCT9lbyTV8ixqXZC9zdz7o03eKH8zlXc/uLHnHpmBa6txXBs/8zDS3CRVvkOm4JC0dq/fcWH2Qksz3kRjr073HExxQUriPLf4Ivdm3ktuCiy9nVOHNxG+tZ9HPhyIy9XguspFykWaDuTx8aXg+LW448Ph5IvefflL+HNk4FQ0nOJl18OTlFXKP/wyoTh3mo8xRcRf+APqzfyZNrIrUN0f/fZhAWMkdHhgBVn3p9wDrcb6G6h5vJ3VAfX763hgcrL0CRbbEaFE24F/NGEA9yeri2ER0fCuMto9MqHsNFL1WQf660Olvku8nFZ3ehP1VVf5tfZ2/m9YznujH/xxUh1JWk9G9PGr2mBurorfJf0GHkbk9mwMYOWL2rGVo6sTjJo4KuPPbTcHBn/8ELbhYlkJPn47vNPqO6681PRq3JZYxu31gaoq/YQveoPbMt0snF9E2UX2oEWWjrBbksiiZrR6auwZDuLh3z4bluxJ8VDy8jzT8S2GPwNTYFpsYw0rAxQe7qc0WU9dVfwREYyNj4FTF91Git8mRvnYhhoqJkkuMpcCVko8Xg85OTk4PP5Zv2i/CAt8pyr8zDi4+Pn1S6ckZNaZ7vPrKysWe93Rk/n44oF/w9HxgYSAG85z5Zt4V8vrSA960U48i5gpyhrBRa6ubR/mkACHHvhScYXQ7zvNtP2zApSwu72vVjPmb3Hxkwffbv/Km3ZCSTEJmAHvIDrpSzSLdB25s9jAwnAt39mf8UjHM1JYPlTLgiaerOEJQ/3MDy+s2cnnaq6W9EZW9m6OpbbvU3U1HjxWWJxOJ3YV28ld+ATTgcHk74uWhtaaO70gdVGst1OvM3B6s2JpH53is+qh2sPYYHpD1/PdB+hF2EJAyzDbX3Tf9xeZLEwNpTEszLwsZ7qSX+0lxpP3bgYc5v/9VTT6ViDLSkVauqAMDJWJmOhk8tfjV3TAnCr5QLVncmssaWSFlbDmOu1dYimTy5MvmU5Ipzub45TPaa6MzzmgQbOeybWhfquXKYhbTNpSWnE0047gzRc72SNLY6kJGgcvvonJdmg6yJVrGOd3UEM7YGqT1IicQzR2hL8N34hYWFjH+f2zZtMiIDTVp3GWhjv5okNdiy+Wj6/8OBcT34JQhZKRg5Fy8nJYcmSJbz11luhGkpI3bx5k/j4+Fnvd+nSpfPqyPmRL9qb7T5DcbLr464ELED91SOTNzjSTNtLK0hJSOdx4Cz5JCcA/c1U3MVmobQtL1KQ42K5PZbYhFgsFktg/UZsAk/BhNAyQVszR8anBK8fP4A1lqzhPrKSE4Bums9NvtanstJLf04CCQlZQCWV5ZXceCSBlOyDXDhxiS/KDvPul1POy9ydGDe5a2wwvkJQ/X1gO++GJ/hdz3H+OZw1bjZe4PToatO6wFqGyIfYlLcO+2o3GbVfjLloL7SEAVN96vYT/PYJWxg2RbuAgb5x77XUDFIjhmi+XDP5I/i7aJ0srAx66fGBzRpLDNCDnfgYoNdL86QdDdLa6QNbDPF2qAkuC/jauT5lluqiZfzVPTKRuAgYam6ZYrdKO609kBa0eHSw2UvvGhu2xDho6QJSSYqDzivXuU4a69bEYA+DnkGIT7KziC5ahsfYXnsdX5oTx++3E1H7Pd9910jXFP87pq06jVpIzMpcNq22Y+mt5eRnnkmn3GTuhPRE15KSEsrLy8nNzZ13X7g34tq1axPOGpkNDoeDa9euzXq/JqqsrCQtLW3mhvcoPT19TiowM4m1hAH9+NqmalFPTz8QZhleKxKL1QJ0t1E+bc9ref3EZT4reYatj6QTG+Wnu62eyjM/0H0vA/T776pyYQ0D6Kf77BQNytsCjztSofn2NZ7dW0ZlG8SmZ/NMyWf868IJDuT//HU98RmpWOml9vz4CsEtGj219GIlLWOGDwU36/DU9gI2EhOHb+vpwwdERE9XXRrk9iDQ04kPsMxQFb3tD76aDu/uGbhOzVQf6wdvTxmHxgrDsgi41TfJws+Avh4fo5WdYL5Oplxe4+ubeN9wVejWranDfJ9v+LFGVj3fvE67DyLik4gESEolcVEn1xsGA4EFG0lJANEk2S3QGbSTqsvDJycu0uoLx+7cwBOFf2L7plX8Onz8o45UneqmqDoF+s/YVEDe6hh8tf/DP8o9QVuE5X4J+THzBw8epKSkhNzcXI4ePTq6zmS+mKvDzuLj4+dNKPF6vSQkJMzqVJjVah1dQHu/BS40UVgTpmqRgDUK8PUzpo4QFcvj0/Rrf/0ltqVH0f/DX/nD//0ta9ZvZvPmJ3n25Wb6Z2Xkk4kidqpBPR5LFOD33YlE3rP7Kdz4Wx77f3/nXH03xKaTs+84H2z5eY9utVqAW0y6w7evj1vMHBYCTQORZnQtp6+PAcBqjZ60fVy0FejD2wPgw+cHrDFM1jrOFg346A7+SB69kods0NtQ/TPOx7ASHg4wNDyFcTvwb3g0U/11DaylGVvZ+VluDwEQHj71a2oNDwcGuFMY6qHJ64fFdpLDhqshI1Wdmy20D0BcUhKEJWKzQuf1hjFh7HZPHaePH+HvJ85T6/VhtWfy+22PkRT8oCNVp5opqk7E4d6+jTUxPqpOlvGZ538nTHPJ/RHyUAKMfsfN0qVLOXTo0LwKJiNbgd1u96z1OdLXfNnVc+7cOeDeFrHOZKSvkb7vp/L6QBBKXv705A2eXk4y4O++SmBi5BLebiA2mexpXoKsFDvQT8OZI2PDzHA4mG2XAoMieYpBubKTiQW6vRO3EXvPvssLeevZfaYNiGX51vyfNYbA2tLwwM6W8aLvbgFqoGk4MMRoMWN4ioS4RCbWWVJJjAM6W2kFoD0QTqw2EifM4ESTFB8BA94x24VHThytm/pjPVgD0xoTxCdhWwR+b8vwDpNOunsZvehPFEayfTHQR89Mu45m0tdO9xAssiVN8roAxJNkWwQDfXQHpYP2Fi9D2EhKisNht+Brvz5c1emitXOIRbZE4pOSsNGLd/I5KG73NOI5dZzPa31gScaZeuf5TV91CiM1NxdnmJeLJz7jisojIWVEKIFAMNmzZ8/ol8pNdVLpL01VVRUdHR3s3r17VsLYyPcHdXR0zJuzTyoqKvB6vRQXF89KtcRqtVJcXIzX6w3NGSX7v6CyHywrnuboU+OmLuz5fFAQWNRaWT6y5uQsRyrbgASyXj/A49POdkRhTQ5usJY3i1yjW4Zn09kjl7gBJGS9zptrx9259nWKsxLAX0/FXwPRyvX444yfhPu2rRs/MOgPquXU99APWMJmHvX1hmaGWIzTvYyxFf1IHnI7WcwQzQ0zLHuMfAh3xmIYuB603qKHmqZesKThXjU28cS5V5O8yE9z9Z1P5Y01zfix8dv1qWN2hYzs8BhbERk5cXTcotMJbKxcnzTuecXh3pBGBD6u14z0eJPq6sBF/7cbx78OEJ60npU28DdXz/B4d6OFfzX6ICKNDe64CfdGr1pDWsQkFaCWRlqHIMa5hkSrj9baO+mopaULIuJ5OC0msMYlqOoVPsnfzL6+AWCI0Y1RM1WdIlfy20QLvbUe6ubPMjxjGXUkjMfjYdeuXbz33nscPXqU559/fl6cX1JSUsKhQ4fIz8+ntLT0P+pr586dxMfH/6wTYh9k77//PiUlJRQVFbF//9TbWsvKymbsq6ioiISEBPbu3TubQ7wHx9h7OJvjr7hwvfI1l/MrqQw6pyTW4ufGF3t5NmhRa+XLb/BF2kG2puTw36dcFF39IeicEi9/3/gsx841UORykb7tBCdTKmnojyJtxXJS8NGNZfaDSeVr7P9iOQe3prD1w3/xSH0llaPnlCQQRT+V7+xm//AMWdq2fbzy3/to++EqV70+woafr8V/gzNlQQtTKm7gfcVF+op8Tn6QQLM1Gc7k8cJkh6dd9+Bx2tlg38B/bXfS6vXSjY3ERDuxEeD3nsczmkli+F1+LvZbXrpavXT7rdgcSSTZF2PBR+2psUeN9125QK3jCZyZ29huq6W2yYfV4cRpD2y99QQvGG3xcNlrZ0PyoxTkJ1Fb4wV7Bk7HYiy+Wk5fuVMRmXji6BQGOvHZNrItv5Xrjc10h9lxpjmIjQBf7TcEn0U22PgNHsc2NiRu4L8KMmhqqB09pyTVZmWRr5bPv56dja89nm+4Gv8Ey51P8HSil8ba4XNKUpNIjI3A7z3PqSvjK0AttHRBst2Gxd9AU3DFpqWFTtZgt9/ZCjwiccOTbIjuprXlOs3dfqw2J2lpseCrpXr46Yz9nptJ2G0sBgYS15A71S+Bt4rTOuP/vjAqlEDg225HgsmhQ4fmRTCpqqqiqqqKnTt3cvHixZ/9fDMzM3/29+g86L788kuys7MpKCigoqJiytNdZ6p8ZGVljfYRyu+98R4rZHv3yEmoLrKHjzHt767nzP69vFw+flfKt7y2eTtXD5RQtDadFFd24ORTfz/d9d8GpmuOFfJywlH2bXEN3z982uuzfp76euucVEu+fW0z268OnzKb/gg56RA4ZfYSZYffYP/ZO2t2Gn64yo00FykrHiFhxbh2wTM83j/z17IU9uW7SHkkhxTaODdl1rxF46kyeoZPF01Ms5EIDA1003TxAhfqeoK2jvrp6fOTlugg1j68+HzIT6+3igvnr0yyLbYLz/FP6M59jDWJTlbbgaFevFX/wzdXxq9JuEXjqU8YcG9kwzIHmescgdNXmy7yxZjTV+/hxNHbPXg+/x7nxg0sW52Ic/R5neNc3fgL8C0aT995HRyZ63AwMt6vOH+lZcpFsPeui3+Wf0z7qg2scsbhXB2ozAXGdnrca35HS+DAEoa843buDDbj7V2DbfEQ3paxL4q3oYnu1UkkOleTGHgQupsucvpC3XB4Gf89N1OLiE0kYqo7FzahLx66PxasXbv2p1APYjJLlizhnXfewWaz8dZbb/3iL7KRkZG899572Gw2Xn311XteD+J2u3n11Vfp7Oxk165dId8O3Nd3/49AtFqtfPTRR8THx3P48GGOHbub40nvKCgooLi4mIaGBnbs2BGS7cAyz8Wvp2BzGr7LR+8cfCY/W1jGVgrXWGk4WYaOG3kwGLOmZLyOjg527dpFZ2fnvNgufPPmzdHne+jQobteYzKyhuTtt982JpCEis/nY8eOHbS3t/PKK69QWlp6V8fE2+12SktLFUgk5EZOHK1RIJkFI1WnBhU5HiDGVkpGREZGsmTJkl/8FE6wnTt3snPnTnw+Hx6Ph4sXL9LR0TH6GixZsgSHw8G6detwu91YrVZKS0v/4/UosykUlZJgxcXFFBQU0N/fT2VlJfX19VRWVtLQEJj2SEtLw+VykZ6ejsvlIioqirKysmnXo4iIyNwyPpTMV0uWLCE/P59169ZNuROpo6ODixcvUl5eTkdHx30e4fRCHUogUAF57rnnyMrKmnJXjs/no6Kigvfffz8kZ5KIiMgdCiUPgMzMTJYuXTo6nXPz5k2uXbtm9DkkJoSSYC6XC6vVOnocfX19PT6fb8oFsSIicv8plMicMC2UiIiI+Yxd6CoiIiLzi0KJiIiIGEGhRERERIygUCJzYsGCBaEegoiIPGAUSmROLFy4cOZGIiIiQRRKZE6EhU36Henz2k8/aaObiMh0FEpkToSFhbFokXHf9xhSmtISEZmeQonMmfDw8FAPQUREHiAKJTJnFi5cSHR0NOHh4fzqV79SpUBERKal+rrMOYvFgsViCfUwRETEcKqUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhhUUZGRqjHICIiIqJKiYiIiJhhwU/6Qg4RERExgColIiIiYgSFEhERETGCQomIiIgYQaFEREREjKBQIiIiIkZQKBEREREjKJSIiIiIERRKRERExAgKJSIiImIEhRIRERExgkKJiIiIGEGhRERERIygUCIiIiJGUCgRERERIyiUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhBoURERESMoFAiIiIiRlAoERERESMolIiIiIgRFEpERETECAolIiIiYgSFEhERETGCQomIiIgYQaFEREREjKBQIiIiIkZQKBEREREjKJSIiIiIERRKRERExAgKJSIiImIEhRIRERExgkKJiIiIGEGhRERERIygUCIiIiJGUCgRERERIyiUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhBoURERESMoFAiIiIiRlAoERERESMolIiIiIgRFEpERETECAolIiIiYgSFEhERETGCQomIiIgYQaFEREREjKBQIiIiIkZQKBEREREjKJSIiIiIERRKRERExAgKJSIiImIEhRIRERExgkKJiIiIGEGhRERERIygUCIiIiJGUCgRERERIyiUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhBoURERESMoFAiIiIiRlAoERERESMolIiIiIgRFEpERETECAolIiIiYgSFEhERETGCQomIiIgYQaFEREREjKBQIiIiIkZQKBEREREjKJSIiIiIERRKRERExAgKJSIiImIEhRIRERExgkKJiIiIGEGhRERERIygUCIiIiJGUCgRERERIyiUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhBoURERESMoFAiIiIiRlAoERERESMolIiIiIgRFEpERETECAolIiIiYgSFEhERETGCQomIiIgYQaFEREREjKBQIiIiIkZQKBEREREjKJSIiIiIERRKRERExAgKJSIiImIEhRIRERExgkKJiIiIGEGhRERERIygUCIiIiJGUCgRERERIyiUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhBoURERESMoFAiIiIiRlAoERERESMolIiIiIgRFEpERETECAolIiIiYgSFEhERETGCQomIiIgYQaFEREREjKBQIiIiIkZQKBEREREjKJSIiIiIERRKRERExAgKJSIiImIEhRIRERExgkKJiIiIGEGhRERERIygUCIiIiJGUCgRERERIyiUiIiIiBEUSkRERMQICiUiIiJiBIUSERERMYJCiYiIiBhBoURERESMoFAiIiIiRlAoERERESMolIiIiBq6VOAAAAArSURBVIgRFEpERETECAolIiIiYgSFEhERETGCQomIiIgYQaFEREREjPD/AR5C/SXZB8auAAAAAElFTkSuQmCC"},99128:(e,i,n)=>{n.d(i,{R:()=>o,x:()=>s});var t=n(79474);const r={},a=t.createContext(r);function o(e){const i=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function s(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(a.Provider,{value:i},e.children)}}}]);