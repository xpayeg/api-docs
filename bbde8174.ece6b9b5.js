(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{71:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),b=(a(0),a(77)),l=(a(86),a(87),{id:"subscription",title:"Subscription"}),c={unversionedId:"subscription",id:"subscription",isDocsHomePage:!1,title:"Subscription",description:"One of the available payment tools that XPay offers is Recurring payments or Subscriptions.",source:"@site/docs\\subscription.mdx",slug:"/subscription",permalink:"/subscription",version:"current",sidebar:"docs",previous:{title:"Transactions",permalink:"/transactions"},next:{title:"Postman Collection",permalink:"/postman"}},i=[{value:"How it works",id:"how-it-works",children:[]},{value:"Create Subscription",id:"create-subscription",children:[{value:"URLs",id:"urls",children:[]},{value:"Parameters",id:"parameters",children:[]},{value:"Authentication",id:"authentication",children:[]},{value:"Request body",id:"request-body",children:[]},{value:"Example",id:"example",children:[]}]},{value:"Cancel Subscription",id:"cancel-subscription",children:[{value:"URLs",id:"urls-1",children:[]},{value:"Parameters",id:"parameters-1",children:[]},{value:"Authentication",id:"authentication-1",children:[]},{value:"Request body",id:"request-body-1",children:[]},{value:"Example",id:"example-1",children:[]}]},{value:"Log Subscription bills",id:"log-subscription-bills",children:[{value:"URLs",id:"urls-2",children:[]},{value:"Parameters",id:"parameters-2",children:[]},{value:"Authentication",id:"authentication-2",children:[]},{value:"bill object",id:"bill-object",children:[]},{value:"Example",id:"example-2",children:[]}]},{value:"Pay a Subscription bill",id:"pay-a-subscription-bill",children:[{value:"URLs",id:"urls-3",children:[]},{value:"Parameters",id:"parameters-3",children:[]},{value:"Authentication",id:"authentication-3",children:[]},{value:"Request body",id:"request-body-2",children:[]},{value:"Example",id:"example-3",children:[]}]}],o={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"One of the available payment tools that XPay offers is Recurring payments or Subscriptions."),Object(b.b)("p",null,"If your service includes subscription based payments or any other form of recurring payments,\nyou can use our endpoints to create Recurring payments that can be used to charge your user a fixed amount every set period of time with optional end date"),Object(b.b)("h2",{id:"how-it-works"},"How it works"),Object(b.b)("p",null,"When you create a subscription payment it starts generating bills for each period from the start date depending on the current date and an optional end date."),Object(b.b)("p",null,"For example, if you create a subscription with the start date of the current date and specify a subscription period of 30 days,\nit will generate a subscription bill with the current date as the due date and will generate another bill automatically every 30 days."),Object(b.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"First subscription bill payment have to be requested manually,\nafterwards the user will be charged automatically every subscription period."))),Object(b.b)("p",null,"To create a subscription payment and start billing your user follow the following steps:"),Object(b.b)("ol",null,Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#create-subscription"}),"Create Subscription")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#log-subscription-bills"}),"Log Subscription bills")),Object(b.b)("li",{parentName:"ol"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"#pay-a-subscription-bill"}),"Pay Subscription bill"))),Object(b.b)("h2",{id:"create-subscription"},"Create Subscription"),Object(b.b)("h3",{id:"urls"},"URLs"),Object(b.b)("h4",{id:"testing-server"},"Testing server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://staging.xpay.app/api/subscriptions/\n")),Object(b.b)("h4",{id:"live-server"},"Live server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://community.xpay.app/api/subscriptions/\n")),Object(b.b)("h3",{id:"parameters"},"Parameters"),Object(b.b)("p",null,"Do not supply any parameters."),Object(b.b)("h3",{id:"authentication"},"Authentication"),Object(b.b)("p",null,"Supply your API key in the request header"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'"x-api-key" : string\n')),Object(b.b)("h3",{id:"request-body"},"Request body"),Object(b.b)("h4",{id:"properties"},"Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"your recurring payment name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fixed service/bill cost"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start_date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"When do you want to start billing your user?"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'ex: "2020-9-1"')),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"period"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The interval of which you bill your user in days"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ex: 10")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"member_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Membership ID of your user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"if you choose to to not supply an ID, one will be generated and sent with the response")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"community_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID that is unique to your community"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"end_date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"If you want to stop billing your user on on a certain date, you can supply an end date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),'ex: "2021-9-1"')))),Object(b.b)("h3",{id:"example"},"Example"),Object(b.b)("p",null,"The following example and the next ones Requires Axios which is a Promise based HTTP client for the browser and node.js"),Object(b.b)("a",{target:"_blank",href:"https://github.com/axios/axios"},"Axios Github repo"),Object(b.b)("h4",{id:"installing"},"installing"),Object(b.b)("p",null,"Using npm:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),"$ npm install axios\n")),Object(b.b)("p",null,"Using jsDelivr CDN:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"><\/script>\n')),Object(b.b)("p",null,"Create a new subscription"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const createSubscriptionUrl = "https://new-dev.xpay.app/api/subscriptions/";\n\naxios({\n  method: "post",\n  url: createSubscriptionUrl,\n  data: {\n    name: "VIP Membership",\n    amount: 1500,\n    start_date: "2020-9-1",\n    period: 30,\n    member_id: "11204268",\n    community_id: "zogDmQW",\n    end_date: "2021-9-30",\n  },\n  headers: {\n    "x-api-key": "RiYBZNHU.PVTJB5GnLHF4Gu11UIty0V6D4QwtZvFO",\n  },\n})\n  .then((data) => {\n    console.log(data.data.data);\n  })\n  .catch((e) => {\n    console.log(e.response.data.status);\n  });\n')),Object(b.b)("p",null,"log output"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "amount": "1500.00",\n  "community_id": "zogDmQW",\n  "end_date": "2021-09-30",\n  "id": 1332,\n  "member_id": "11204268",\n  "name": "VIP Membership",\n  "period": 30,\n  "start_date": "2020-09-01"\n}\n')),Object(b.b)("h2",{id:"cancel-subscription"},"Cancel Subscription"),Object(b.b)("h3",{id:"urls-1"},"URLs"),Object(b.b)("h4",{id:"testing-server-1"},"Testing server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://staging.xpay.app/api/subscriptions/{{member_id}}/cancel\n")),Object(b.b)("h4",{id:"productionlive-server"},"Production(Live) server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://community.xpay.app/api/subscriptions/{{member_id}}/cancel\n")),Object(b.b)("h3",{id:"parameters-1"},"Parameters"),Object(b.b)("p",null,"Do not supply any parameters."),Object(b.b)("h3",{id:"authentication-1"},"Authentication"),Object(b.b)("p",null,"Supply your API key in the request header"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'"x-api-key" : string\n')),Object(b.b)("h3",{id:"request-body-1"},"Request body"),Object(b.b)("h4",{id:"properties-1"},"Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"community_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID that is unique to your community"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h3",{id:"example-1"},"Example"),Object(b.b)("p",null,"Create a new subscription"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const cancelSubscriptionUrl =\n  "https://new-dev.xpay.app/api/subscriptions/1327/cancel/";\n\naxios({\n  method: "post",\n  url: cancelSubscriptionUrl,\n  data: {\n    community_id: "zogDmQW",\n  },\n  headers: {\n    "x-api-key": "RiYBZNHU.PVTJB5GnLHF4Gu11UIty0V6D4QwtZvFO",\n  },\n})\n  .then((data) => {\n    if (data.status == 200) console.log("Subscription Canceled!");\n  })\n  .catch((e) => {\n    console.log(e.response.data.status);\n  });\n')),Object(b.b)("p",null,"log output"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'"Subscription Canceled!"\n')),Object(b.b)("h2",{id:"log-subscription-bills"},"Log Subscription bills"),Object(b.b)("p",null,"This endpoint returns all the bills generated for a subscription in the form of an array of ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#bill"}),"bills object")),Object(b.b)("h3",{id:"urls-2"},"URLs"),Object(b.b)("h4",{id:"testing-server-2"},"Testing server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://staging.xpay.app/api/subscriptions/bills\n")),Object(b.b)("h4",{id:"productionlive-server-1"},"Production(Live) server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://community.xpay.app/api/subscriptions/bills\n")),Object(b.b)("h3",{id:"parameters-2"},"Parameters"),Object(b.b)("h4",{id:"query-parameters"},"Query parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Required"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"member_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Membership ID of your user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"it is the same id you supplied while creating a subscription or the one that was created automatically for you")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"community_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"True"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID that is unique to your community"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Optional"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Filter the result by paid / unpaid subscription bills"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Takes values of False, false, True, true, 1, 0, yes, no")))),Object(b.b)("h3",{id:"authentication-2"},"Authentication"),Object(b.b)("p",null,"Supply your API key in the request header"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'"x-api-key" : string\n')),Object(b.b)("h3",{id:"bill-object"},"bill object"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Fixed service/bill cost"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"created"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"DateTime stamp of the bill creation date and time"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"due_date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subscription bill due date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"end_date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"End date of the subscription bill period"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subscription bill ID"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Subscription bill name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"paid"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bill Payment status"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"start_date"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Start billing date of the subscription bill"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"total.grand_total_amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"The total amount of bill including fess (if any)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"total.grand_total_amount_currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Bill amount currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(b.b)("h3",{id:"example-2"},"Example"),Object(b.b)("p",null,"Log all generated bills for a subscription"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const logSubscriptionBillsUrl =\n  "https://new-dev.xpay.app/api/subscriptions/bills?member_id=11204268w43sss3&community_id=zogDmQW";\n\naxios({\n  method: "get",\n  url: logSubscriptionBillsUrl,\n  headers: {\n    "x-api-key": "RiYBZNHU.PVTJB5GnLHF4Gu11UIty0V6D4QwtZvFO",\n  },\n})\n  .then((data) => {\n    console.log(data.data.data);\n  })\n  .catch((e) => {\n    console.log(e.response.data.status);\n  });\n')),Object(b.b)("p",null,"log output"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'[\n  {\n    "amount": "1500.00",\n    "created": "2020-10-28T15:58:58.040460+02:00",\n    "due_date": "2021-09-26",\n    "end_date": "2021-10-26",\n    "id": 1690,\n    "name": "VIP Membership - 2021-09-26",\n    "paid": false,\n    "start_date": "2021-09-26",\n    "subscription": {\n      "amount": "1500.00",\n      "community_id": "zogDmQW",\n      "end_date": "2021-09-30",\n      "id": 1332,\n      "member_id": "11204268w43sss3",\n      "name": "VIP Membership",\n      "period": 30,\n      "start_date": "2020-09-01"\n    },\n    "total": {\n      "grand_total_amount": 1502,\n      "grand_total_amount_currency": "EGP"\n    }\n  },\n  {\n    "amount": "1500.00",\n    "created": "2020-10-28T15:58:58.032506+02:00",\n    "due_date": "2021-08-27",\n    "end_date": "2021-09-26",\n    "id": 1689,\n    "name": "VIP Membership - 2021-08-27",\n    "paid": false,\n    "start_date": "2021-08-27",\n    "subscription": {\n      "amount": "1500.00",\n      "community_id": "zogDmQW",\n      "end_date": "2021-09-30",\n      "id": 1332,\n      "member_id": "11204268w43sss3",\n      "name": "VIP Membership",\n      "period": 30,\n      "start_date": "2020-09-01"\n    },\n    "total": {\n      "grand_total_amount": 1502,\n      "grand_total_amount_currency": "EGP"\n    }\n  },\n  ...\n]\n')),Object(b.b)("h2",{id:"pay-a-subscription-bill"},"Pay a Subscription bill"),Object(b.b)("h3",{id:"urls-3"},"URLs"),Object(b.b)("h4",{id:"testing-server-3"},"Testing server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://staging.xpay.app/api/v1/payments/pay/bills\n")),Object(b.b)("h4",{id:"productionlive-server-2"},"Production(Live) server:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),"POST https://community.xpay.app/api/v1/payments/pay/bills\n")),Object(b.b)("h3",{id:"parameters-3"},"Parameters"),Object(b.b)("p",null,"Do not supply any parameters."),Object(b.b)("h3",{id:"authentication-3"},"Authentication"),Object(b.b)("p",null,"Supply your API key in the request header"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'"x-api-key" : string\n')),Object(b.b)("h3",{id:"request-body-2"},"Request body"),Object(b.b)("h4",{id:"properties-2"},"Properties"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Property name"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Value"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Notes"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"community_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ID that is uniques to your community"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Currency"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Only 'EGP' is supported currently")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"pay_using"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user payment method"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Only card payments are supported")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"billing_data.name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user first and last name"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Must contain first and last name in ",Object(b.b)("strong",{parentName:"td"},"english letters")," with space between them.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"billing_data.email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user email"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"billing_data.phone_number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"user phone number"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(b.b)("strong",{parentName:"td"},"must contain country code")," prefixed")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"amount"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"float"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Total Amount of bills to pay"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Make sure to calculate the sum of the grand_total_amount value of the bills supplied in the ids parameter")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ids"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string","[number]"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Ids of the bills to pay"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"You can supply only one id in case of first payment")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"membership_id"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Membership ID of your user"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"It is the same id you supplied while creating a subscription or the one that was created automatically for you")))),Object(b.b)("h3",{id:"example-3"},"Example"),Object(b.b)("p",null,"Pay a subscription bill"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-jsx"}),'const paySubscriptionBill =\n  "https://new-dev.xpay.app/api/v1/payments/pay/bills";\n\naxios({\n  method: "post",\n  url: paySubscriptionBill,\n  data: {\n    billing_data: {\n      name: "John doe",\n      email: "j.doe@tes.com",\n      phone_number: "+201111111111",\n    },\n    amount: 1502,\n    currency: "EGP",\n    community_id: "zogDmQW",\n    pay_using: "card",\n    ids: ["1689"],\n    membership_id: "1332",\n  },\n  headers: {\n    "x-api-key": "RiYBZNHU.PVTJB5GnLHF4Gu11UIty0V6D4QwtZvFO",\n  },\n})\n  .then((data) => {\n    console.log(data.data.data);\n    const iframeUrl = data.data.data.iframe_url;\n  })\n  .catch((e) => {\n    console.log(e.response.data.status);\n  });\n')),Object(b.b)("p",null,"log output"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n  "iframe_url": "https://dev-payment.xpay.app/core/payment_iframe/5717/",\n  "transaction_id": 5366,\n  "transaction_status": "PENDING",\n  "transaction_uuid": "14e4da8c-3c7a-47c7-bb47-9081c99e0add",\n  "message": null,\n  "bill_reference": null,\n  "bm_session": null\n}\n')),Object(b.b)("div",{className:"admonition admonition-info alert alert--info"},Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(b.b)("h5",{parentName:"div"},Object(b.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(b.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(b.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(b.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(b.b)("p",{parentName:"div"},"you can either redirect your user to the link returned inside the ",Object(b.b)("inlineCode",{parentName:"p"},"iframe_url")," or embed it in your app.\nThis url contains the credit card form in which the user enters his credit card information"))))}s.isMDXComponent=!0},77:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),s=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,O=p["".concat(l,".").concat(d)]||p[d]||u[d]||b;return a?r.a.createElement(O,c(c({ref:t},o),{},{components:a})):r.a.createElement(O,c({ref:t},o))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,l=new Array(b);l[0]=d;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var o=2;o<b;o++)l[o]=a[o];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},81:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},83:function(e,t,a){"use strict";var n=a(0),r=a(84);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},84:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},86:function(e,t,a){"use strict";var n=a(0),r=a.n(n),b=a(83),l=a(81),c=a(47),i=a.n(c);const o=37,s=39;t.a=function(e){const{block:t,children:a,defaultValue:c,values:p,groupId:u,className:d}=e,{tabGroupChoices:O,setTabGroupChoices:j}=Object(b.a)(),[m,g]=Object(n.useState)(c),[h,N]=Object(n.useState)(!1);if(null!=u){const e=O[u];null!=e&&e!==m&&p.some((t=>t.value===e))&&g(e)}const y=e=>{g(e),null!=u&&j(u,e)},f=[],v=e=>{e.metaKey||e.altKey||e.ctrlKey||N(!0)},x=()=>{N(!1)};return Object(n.useEffect)((()=>(window.addEventListener("keydown",v),window.addEventListener("mousedown",x),()=>{window.removeEventListener("keydown",v),window.removeEventListener("mousedown",x)})),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t},d)},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":m===e,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":m===e}),style:h?{}:{outline:"none"},key:e,ref:e=>f.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case s:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case o:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(f,e.target,e),v(e)},onFocus:()=>y(e),onClick:()=>{y(e),N(!1)},onPointerDown:()=>N(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((e=>e.props.value===m))[0]))}},87:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}}}]);