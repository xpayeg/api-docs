/*! For license information please see 04737758.17abcb52.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(1),r=n(6),l=(n(0),n(150)),i=n(156),b=n(155),c={id:"pay",title:"Pay endpoint"},s={id:"version-0/pay",title:"Pay endpoint",description:"This endpoint will take the required payment info and pass them to our Core Payment API and return the resultant response.\r",source:"@site/versioned_docs\\version-0\\pay.mdx",permalink:"/api-docs/0/pay",version:"0",sidebar:"version-0/docs",previous:{title:"Prepare Amount endpoint",permalink:"/api-docs/0/prepare-amount"},next:{title:"Transactions",permalink:"/api-docs/0/transactions"}},o=[{value:"REQUEST",id:"request",children:[{value:"testing server:",id:"testing-server",children:[]},{value:"production(Live) server:",id:"productionlive-server",children:[]}]},{value:"Parameters",id:"parameters",children:[{value:"Authorization",id:"authorization",children:[]}]},{value:"Request body",id:"request-body",children:[{value:"Required Properties",id:"required-properties-1",children:[]}]},{value:"Response",id:"response",children:[]},{value:"Example",id:"example",children:[]},{value:"Payment Options",id:"payment-options",children:[{value:"Pay using card",id:"pay-using-card",children:[]},{value:"Pay using kiosk",id:"pay-using-kiosk",children:[]},{value:"Pay using cash collection",id:"pay-using-cash-collection",children:[]}]},{value:"Custom Fields",id:"custom-fields",children:[{value:"Example",id:"example-3",children:[]},{value:"Request body",id:"request-body-3",children:[]}]}],u={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"This endpoint will take the required payment info and pass them to our Core Payment API and return the resultant response."),Object(l.b)("h2",{id:"request"},"REQUEST"),Object(l.b)("h3",{id:"testing-server"},"testing server:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"POST https://staging.xpay.app/api/payments/pay/variable-amount\n")),Object(l.b)("h3",{id:"productionlive-server"},"production(Live) server:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{}),"POST https://community.xpay.app/api/payments/pay/variable-amount\n")),Object(l.b)("h2",{id:"parameters"},"Parameters"),Object(l.b)("h3",{id:"authorization"},"Authorization"),Object(l.b)("p",null,"This method requires authorization, supply the header with a key value pair with that structure"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'"x-api-key" : string\n')),Object(l.b)("h4",{id:"required-properties"},"Required Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"x-api-key"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"API key linked to your community"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"api_key.md"}),"generate API key"))))),Object(l.b)("p",null,"\u200b"),Object(l.b)("h2",{id:"request-body"},"Request body"),Object(l.b)("h3",{id:"required-properties-1"},"Required Properties"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"community_id"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ID that is uniques to your community"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"amount_piasters"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"represents the amount you want to charge the user"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"if your community fees is included in bill then use the value returned from ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"prepare_amount.md"}),"prepare amount endpoint")," , otherwise use the amount you want to charge the user directly in ",Object(l.b)("strong",{parentName:"td"},"piasters"),".")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"variable_amount_id"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"ID that refrences an ",Object(l.b)("strong",{parentName:"td"},"API Payment")),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"api_payments.md"}),"create/view your api payments"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"pay_using"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"user payment method"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#payment-options"}),"see payment available payment methods"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"billing_data.name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"user first and last name"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"must contain first and last name in ",Object(l.b)("strong",{parentName:"td"},"english letters")," with space between them.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"billing_data.email"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"user email"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"billing_data.phone_number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"user phone number"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(l.b)("strong",{parentName:"td"},"must contain country code")," prefixed")))),Object(l.b)("div",{className:"admonition admonition-danger alert alert--danger"},Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(l.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"})))),"danger")),Object(l.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Hardcoding the billing data in the production version of your app will raise a risk in the payment processor and the transaction will be declined"))),Object(l.b)("h2",{id:"response"},"Response"),Object(l.b)("p",null,"If successful, this method returns a response body with the following structure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": integer,\n    "message": string,\n    "errors": []\n  },\n  "data": {\n    "iframe_url": string,\n    "transaction_id": integer,\n    "transaction_status": string,\n    "transaction_uuid": string\n  },\n  "count": integer,\n  "next": string,\n  "previous": string\n}\n')),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Property name"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Value"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Notes"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iframe_url"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"iframe url"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"you can either embed that url in your website or redirect your user it so he/she can proceed with the payment process at.")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"transaction_id"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"integer"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"transaction ID in XPay system"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"transaction_uuid"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"transaction UUID in XPay system"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"you can use this value to retrieve transaction info in your app. ",Object(l.b)("a",Object(a.a)({parentName:"td"},{href:"#3-api-key"}),"see available payment methods"))),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"transaction_status"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"transaction status"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}))))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)(i.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"request",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "billing_data": {\n    "name": "Islam Rostom",\n    "email": "irostom@xpay.app",\n    "phone_number": "+201119045759"\n  },\n  "amount_piasters": 5000,\n  "variable_amount_id": 4,\n  "community_id": "1",\n  "pay_using": "card"\n}\n'))),Object(l.b)(b.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": 200,\n    "message": "success",\n    "errors": []\n  },\n  "data": {\n    "iframe_url": "https://dev-payment.xpay.app/core/payment_iframe/2733/",\n    "transaction_id": 3220,\n    "transaction_status": "SUCCESSFUL",\n    "transaction_uuid": "94fdb93f-c7f0-4b4d-8c8f-1c463c931344"\n  },\n  "count": null,\n  "next": null,\n  "previous": null\n}\n')))),Object(l.b)("h2",{id:"payment-options"},"Payment Options"),Object(l.b)("p",null,"There are three payment options available at the moment"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"card"),Object(l.b)("li",{parentName:"ul"},"cash collection"),Object(l.b)("li",{parentName:"ul"},"kiosk (aman / masary)")),Object(l.b)("h3",{id:"pay-using-card"},"Pay using card"),Object(l.b)("p",null,"\u200bto use payment using card, just ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"#example"}),"follow the example above"),"."),Object(l.b)("h3",{id:"pay-using-kiosk"},"Pay using kiosk"),Object(l.b)("p",null,"\u200bto use payment using kiosk,change the value of ",Object(l.b)("inlineCode",{parentName:"p"},"<pay_using>")," attribute in the request body to ",Object(l.b)("inlineCode",{parentName:"p"},'"kiosk"'),"."),Object(l.b)("h4",{id:"request-body-1"},"Request body"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "pay_using": "kiosk"\n}\n')),Object(l.b)("h4",{id:"response-1"},"Response"),Object(l.b)("p",null,"If successful, this method returns a response body with the following structure example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": integer,\n    "message": string,\n    "errors": []\n  },\n  "data": {\n    "iframe_url": string,\n    "transaction_id": integer,\n    "transaction_status": string,\n    "transaction_uuid": string,\n    "message": string,\n    "bill_refrence": integer\n  },\n  "count": integer,\n  "next": string,\n  "previous": string\n}\n')),Object(l.b)("h4",{id:"example-1"},"Example"),Object(l.b)(i.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"request",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "billing_data": {\n    "name": "Islam Rostom",\n    "email": "irostom@xpay.app",\n    "phone_number": "+201119045759"\n  },\n  "amount_piasters": 5000,\n  "variable_amount_id": 4,\n  "community_id": "1",\n  "pay_using": "kiosk"\n}\n'))),Object(l.b)(b.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": 200,\n    "message": "success",\n    "errors": []\n  },\n  "data": {\n        "iframe_url": null,\n        "transaction_id": 3220,\n        "transaction_status": "PENDING",\n        "transaction_uuid": "94fdb93f-c7f0-4b4d-8c8f-1c463c931344"\n        "message": "Go to the nearest kiosk that has Masary/Aman payment machines and ask the seller to pay for(Madfouaat Mutanouea Accept \u0645\u062f\u0641\u0648\u0639\u0627\u062a \u0645\u062a\u0646\u0648\u0639\u0629 \u0627\u0643\u0633\u0628\u062a) and give them that number 4424",\n        "bill_reference": 4424\n    },\n  "count": null,\n  "next": null,\n  "previous": null\n}\n')))),Object(l.b)("h3",{id:"pay-using-cash-collection"},"Pay using cash collection"),Object(l.b)("p",null,"\u200bto use payment using cash collection option, you need to change two things in the default payload:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"supply the billing info attribute with this structure instead of the default one"),Object(l.b)("li",{parentName:"ul"},"change the value of ",Object(l.b)("inlineCode",{parentName:"li"},"<pay_using>")," attribute to ",Object(l.b)("inlineCode",{parentName:"li"},"cash"))),Object(l.b)("h4",{id:"request-body-2"},"Request body"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "billing_data": {\n    "name": string,\n    "email": string,\n    "phone_number": string,\n    "country": string,\n    "state": string,\n    "city": string,\n    "street": string,\n    "building": string,\n    "apartment": string,\n    "floor": string\n  },\n  "pay_using": "cash"\n}\n')),Object(l.b)("p",null,"Notes:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"you can find all state-city combinations in this ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"state-city.json"}),"JSON file"),".")),Object(l.b)("h4",{id:"response-2"},"Response"),Object(l.b)("p",null,"If successful, this method returns a response body with the following structure example:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": integer,\n    "message": string,\n    "errors": []\n  },\n  "data": {\n    "iframe_url": string,\n    "transaction_id": integer,\n    "transaction_status": string,\n    "transaction_uuid": string,\n    "message": string\n  },\n  "count": integer,\n  "next": string,\n  "previous": string\n}\n')),Object(l.b)("h4",{id:"example-2"},"Example"),Object(l.b)(i.a,{defaultValue:"request",values:[{label:"Request Body",value:"request"},{label:"Response Body",value:"response"}],mdxType:"Tabs"},Object(l.b)(b.a,{value:"request",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "billing_data": {\n    "name": "Islam Rostom",\n    "email": "islam.rostom93@gmail.com",\n    "phone_number": "+201119045759",\n    "country": "EG",\n    "state": "Al Meniya",\n    "city": "Mghagha",\n    "street": "random street name",\n    "building": "5",\n    "apartment": "5",\n    "floor": "5"\n  },\n  "amount_piasters": 5000,\n  "variable_amount_id": 4,\n  "community_id": "1",\n  "pay_using": "card"\n}\n'))),Object(l.b)(b.a,{value:"response",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": {\n    "code": 200,\n    "message": "success",\n    "errors": []\n  },\n  "data": {\n    "iframe_url": null,\n    "transaction_id": 3273,\n    "transaction_status": "PENDING",\n    "transaction_uuid": "411889e5-fc8f-4db3-810d-c1beddb5a2a4",\n    "message": "Our representative will go to the address you provided to collect the cash from you"\n  },\n  "count": null,\n  "next": null,\n  "previous": null\n}\n')))),Object(l.b)("h2",{id:"custom-fields"},"Custom Fields"),Object(l.b)("p",null,"If your API payment template conatins ",Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"/api-docs/0/custom-fields"}),"custom fields"),",\nyou need to send the values of the custom fields value within the request body inside a new ",Object(l.b)("inlineCode",{parentName:"p"},"custom_fields")," parameter which takes an array of the following structure:"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "field_label": "custom field label value",\n  "field_value": "custom field input value"\n}\n')),Object(l.b)("p",null,"Notes: "),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"field_value")," parameter can be string, number OR boolean depending on the custom field type.\nfor more info, refer to the ",Object(l.b)("a",Object(a.a)({parentName:"li"},{href:"/api-docs/0/custom-fields"}),"custom fields guide")),Object(l.b)("li",{parentName:"ul"},"if any of the custom fields are required, you will get an error if you don't send it's value inside the request body.")),Object(l.b)("h3",{id:"example-3"},"Example"),Object(l.b)("h3",{id:"request-body-3"},"Request body"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  ...\n  "custom_fields": [\n    {\n      "field_label": "test label1",\n      "field_value": "test one"\n    },\n    {\n      "field_label": "test label3",\n      "field_value": false\n    },\n    {\n      "field_label": "test label2",\n      "field_value": 25\n    }\n  ]\n}\n')))}p.isMDXComponent=!0},150:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),o=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},u=function(e){var t=o(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=o(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||l;return n?r.a.createElement(m,b({ref:t},s,{components:n})):r.a.createElement(m,b({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var b={};for(var c in t)hasOwnProperty.call(t,c)&&(b[c]=t[c]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var s=2;s<l;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},153:function(e,t,n){var a;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var i=r.apply(null,a);i&&e.push(i)}else if("object"===l)for(var b in a)n.call(a,b)&&a[b]&&e.push(b)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},154:function(e,t,n){"use strict";var a=n(0);const r=Object(a.createContext)({tabGroupChoices:{},setTabGroupChoices:()=>{}});t.a=r},155:function(e,t,n){"use strict";var a=n(0),r=n.n(a);t.a=function(e){return r.a.createElement("div",null,e.children)}},156:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(154);var i=function(){return Object(a.useContext)(l.a)},b=n(153),c=n.n(b),s=n(93),o=n.n(s);const u=37,p=39;t.a=function(e){const{block:t,children:n,defaultValue:l,values:b,groupId:s}=e,{tabGroupChoices:d,setTabGroupChoices:m}=i(),[O,j]=Object(a.useState)(l);if(null!=s){const e=d[s];null!=e&&e!==O&&j(e)}const g=e=>{j(e),null!=s&&m(s,e)},h=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:c()("tabs",{"tabs--block":t})},b.map(({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":O===e,className:c()("tab-item",o.a.tabItem,{"tab-item--active":O===e}),key:e,ref:e=>h.push(e),onKeyDown:e=>((e,t,n)=>{switch(n.keyCode){case p:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case u:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),onFocus:()=>g(e),onClick:()=>g(e)},t))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},a.Children.toArray(n).filter(e=>e.props.value===O)[0]))}}}]);