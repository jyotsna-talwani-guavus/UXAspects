webpackJsonp([58],{1797:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=function(){function n(n){var t=this;this.snippets={compiled:{},raw:{}},n.keys().forEach(function(a){var s=a.replace("./","").replace(/\W+(\w)/g,function(n){return n[1].toUpperCase()}),e=n(a);e.snippet&&(t.snippets.compiled[s]=e.snippet),e.example&&(t.snippets.raw[s]=e.example)})}return n}();t.BaseDocumentationSection=s},1801:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MAPPINGS={NgxBootstrap:{alias:"ngx-bootstrap",source:"https://unpkg.com/ngx-bootstrap"},Chance:{alias:"chance",source:"npm:chance@1.0.6"},ChartJs:{alias:"chart.js",source:"https://unpkg.com/chart.js@2.5.0/dist/Chart.min.js"},Ng2Charts:{alias:"ng2-charts",source:"https://unpkg.com/ng2-charts@1.5.0/bundles/ng2-charts.umd.min.js"}}},2491:function(n,t,a){"use strict";var s=this&&this.__decorate||function(n,t,a,s){var e,o=arguments.length,p=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(n,t,a,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(p=(o<3?e(p):o>3?e(t,a,p):e(t,a))||p);return o>3&&p&&Object.defineProperty(t,a,p),p},e=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var o=a(0),p=a(25),c=a(464),i=a(184),u=a(465),l=a(466),r=a(2492),d=a(83),b=[r.ComponentsPageHeaderComponent],h=[{path:"**",component:u.DocumentationCategoryComponent,data:{category:i.ResolverService.resolveCategoryData(i.DocumentationPage.Components,"Page Header")}}],k=function(){function n(n,t){t.registerResolver(n)}return n}();k=s([o.NgModule({imports:[l.TabsModule,d.PageHeaderModule,c.DocumentationComponentsModule,p.RouterModule.forChild(h)],exports:b,declarations:b,entryComponents:b}),e("design:paramtypes",[o.ComponentFactoryResolver,i.ResolverService])],k),t.ComponentsPageHeaderModule=k},2492:function(n,t,a){"use strict";var s=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var a in t)t.hasOwnProperty(a)&&(n[a]=t[a])};return function(t,a){function s(){this.constructor=t}n(t,a),t.prototype=null===a?Object.create(a):(s.prototype=a.prototype,new s)}}(),e=this&&this.__decorate||function(n,t,a,s){var e,o=arguments.length,p=o<3?t:null===s?s=Object.getOwnPropertyDescriptor(t,a):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)p=Reflect.decorate(n,t,a,s);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(p=(o<3?e(p):o>3?e(t,a,p):e(t,a))||p);return o>3&&p&&Object.defineProperty(t,a,p),p},o=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var p=a(0),c=a(463),i=a(1801),u=a(1797),l=function(n){function t(){var t=n.call(this,a(2493))||this;return t.plunk={files:{"app.component.html":t.snippets.raw.appHtml,"app.component.ts":t.snippets.raw.appTs},modules:[{imports:["PageHeaderModule"],library:"@ux-aspects/ux-aspects"},{library:"ngx-bootstrap",imports:["BsDropdownModule"],providers:["BsDropdownModule.forRoot()"]}],mappings:[i.MAPPINGS.NgxBootstrap]},t.condensed=!1,t.crumbs=[{title:"Archive"}],t.items=[{icon:"hpe-home",title:"Home"},{icon:"hpe-analytics",title:"Analytics",children:[{title:"Bar Charts"},{title:"Pie Charts",children:[{title:"Daily View"},{title:"Weekly View"},{title:"Monthly View"}]}]}],t.iconMenus=[{icon:"hpe-notification",badge:3,dropdown:[{icon:"hpe-chat",title:"You have 16 messages",subtitle:"4 minutes ago",divider:!0},{icon:"hpe-social-twitter",title:"3 New Followers",subtitle:"12 minutes ago",divider:!0},{icon:"hpe-cloud",title:"Server Rebooted",subtitle:"22 minutes ago"}]},{icon:"hpe-actions",dropdown:[{header:!0,title:"John Doe",divider:!0},{icon:"hpe-user-settings",title:"Settings"},{icon:"hpe-logout",title:"Log Out"},{title:"Show Tips"}]}],t}return s(t,n),t}(u.BaseDocumentationSection);l=e([p.Component({selector:"uxd-components-page-header",template:a(2496)}),c.DocumentationSectionComponent("ComponentsPageHeaderComponent"),o("design:paramtypes",[])],l),t.ComponentsPageHeaderComponent=l},2493:function(n,t,a){function s(n){return a(e(n))}function e(n){var t=o[n];if(!(t+1))throw new Error("Cannot find module '"+n+"'.");return t}var o={"./app.html":2494,"./app.ts":2495};s.keys=function(){return Object.keys(o)},s.resolve=e,n.exports=s,s.id=2493},2494:function(n,t){n.exports={snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ux-page-header</span> <span class="token attr-name">header</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>My Page<span class="token punctuation">"</span></span> <span class="token attr-name">[crumbs]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>crumbs<span class="token punctuation">"</span></span> <span class="token attr-name">[items]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>items<span class="token punctuation">"</span></span> \n                <span class="token attr-name">[condensed]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>condensed<span class="token punctuation">"</span></span> <span class="token attr-name">[iconMenus]</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>iconMenus<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ux-page-header</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>br</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>btn button-primary<span class="token punctuation">"</span></span> <span class="token attr-name">(click)</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>condensed = !condensed<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Toggle Condensed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n',example:'<ux-page-header header="My Page" [crumbs]="crumbs" [items]="items" \n                [condensed]="condensed" [iconMenus]="iconMenus"></ux-page-header>\n\n<br>\n\n<button class="btn button-primary" (click)="condensed = !condensed">Toggle Condensed</button>\n'}},2495:function(n,t){n.exports={snippet:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Component <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@angular/core\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb<span class="token punctuation">,</span> PageHeaderNavigationItem<span class="token punctuation">,</span> PageHeaderIconMenu <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'@ux-aspects/ux-aspects\'</span><span class="token punctuation">;</span>\n\n@<span class="token function">Component</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n    selector<span class="token punctuation">:</span> <span class="token string">\'app\'</span><span class="token punctuation">,</span>\n    templateUrl<span class="token punctuation">:</span> <span class="token string">\'./src/app.component.html\'</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n<span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">AppComponent</span> <span class="token punctuation">{</span>\n\n    condensed<span class="token punctuation">:</span> boolean <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>\n\n    crumbs<span class="token punctuation">:</span> Breadcrumb<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span>\n        title<span class="token punctuation">:</span> <span class="token string">\'Archive\'</span>\n    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    items<span class="token punctuation">:</span> PageHeaderNavigationItem<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            icon<span class="token punctuation">:</span> <span class="token string">\'hpe-home\'</span><span class="token punctuation">,</span>\n            title<span class="token punctuation">:</span> <span class="token string">\'Home\'</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            icon<span class="token punctuation">:</span> <span class="token string">\'hpe-analytics\'</span><span class="token punctuation">,</span>\n            title<span class="token punctuation">:</span> <span class="token string">\'Analytics\'</span><span class="token punctuation">,</span>\n            children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Bar Charts\'</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Pie Charts\'</span><span class="token punctuation">,</span>\n                    children<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                        <span class="token punctuation">{</span>\n                            title<span class="token punctuation">:</span> <span class="token string">\'Daily View\'</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">{</span>\n                            title<span class="token punctuation">:</span> <span class="token string">\'Weekly View\'</span>\n                        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                        <span class="token punctuation">{</span>\n                            title<span class="token punctuation">:</span> <span class="token string">\'Monthly View\'</span>\n                        <span class="token punctuation">}</span>\n                    <span class="token punctuation">]</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n    iconMenus<span class="token punctuation">:</span> PageHeaderIconMenu<span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">[</span>\n        <span class="token punctuation">{</span>\n            icon<span class="token punctuation">:</span> <span class="token string">\'hpe-notification\'</span><span class="token punctuation">,</span>\n            badge<span class="token punctuation">:</span> <span class="token number">3</span><span class="token punctuation">,</span>\n            dropdown<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    icon<span class="token punctuation">:</span> <span class="token string">\'hpe-chat\'</span><span class="token punctuation">,</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'You have 16 messages\'</span><span class="token punctuation">,</span>\n                    subtitle<span class="token punctuation">:</span> <span class="token string">\'4 minutes ago\'</span><span class="token punctuation">,</span>\n                    divider<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    icon<span class="token punctuation">:</span> <span class="token string">\'hpe-social-twitter\'</span><span class="token punctuation">,</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'3 New Followers\'</span><span class="token punctuation">,</span>\n                    subtitle<span class="token punctuation">:</span> <span class="token string">\'12 minutes ago\'</span><span class="token punctuation">,</span>\n                    divider<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    icon<span class="token punctuation">:</span> <span class="token string">\'hpe-cloud\'</span><span class="token punctuation">,</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Server Rebooted\'</span><span class="token punctuation">,</span>\n                    subtitle<span class="token punctuation">:</span> <span class="token string">\'22 minutes ago\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span>\n        <span class="token punctuation">{</span>\n            icon<span class="token punctuation">:</span> <span class="token string">\'hpe-actions\'</span><span class="token punctuation">,</span>\n            dropdown<span class="token punctuation">:</span> <span class="token punctuation">[</span>\n                <span class="token punctuation">{</span>\n                    header<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'John Doe\'</span><span class="token punctuation">,</span>\n                    divider<span class="token punctuation">:</span> <span class="token boolean">true</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    icon<span class="token punctuation">:</span> <span class="token string">\'hpe-user-settings\'</span><span class="token punctuation">,</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Settings\'</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    icon<span class="token punctuation">:</span> <span class="token string">\'hpe-logout\'</span><span class="token punctuation">,</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Log Out\'</span>\n                <span class="token punctuation">}</span><span class="token punctuation">,</span>\n                <span class="token punctuation">{</span>\n                    title<span class="token punctuation">:</span> <span class="token string">\'Show Tips\'</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">]</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token punctuation">}</span>',example:"import { Component } from '@angular/core';\nimport { Breadcrumb, PageHeaderNavigationItem, PageHeaderIconMenu } from '@ux-aspects/ux-aspects';\n\n@Component({\n    selector: 'app',\n    templateUrl: './src/app.component.html'\n})\nexport class AppComponent {\n\n    condensed: boolean = false;\n\n    crumbs: Breadcrumb[] = [{\n        title: 'Archive'\n    }];\n\n    items: PageHeaderNavigationItem[] = [\n        {\n            icon: 'hpe-home',\n            title: 'Home'\n        },\n        {\n            icon: 'hpe-analytics',\n            title: 'Analytics',\n            children: [\n                {\n                    title: 'Bar Charts'\n                },\n                {\n                    title: 'Pie Charts',\n                    children: [\n                        {\n                            title: 'Daily View'\n                        },\n                        {\n                            title: 'Weekly View'\n                        },\n                        {\n                            title: 'Monthly View'\n                        }\n                    ]\n                }\n            ]\n        }\n    ];\n\n    iconMenus: PageHeaderIconMenu[] = [\n        {\n            icon: 'hpe-notification',\n            badge: 3,\n            dropdown: [\n                {\n                    icon: 'hpe-chat',\n                    title: 'You have 16 messages',\n                    subtitle: '4 minutes ago',\n                    divider: true\n                },\n                {\n                    icon: 'hpe-social-twitter',\n                    title: '3 New Followers',\n                    subtitle: '12 minutes ago',\n                    divider: true\n                },\n                {\n                    icon: 'hpe-cloud',\n                    title: 'Server Rebooted',\n                    subtitle: '22 minutes ago'\n                }\n            ]\n        },\n        {\n            icon: 'hpe-actions',\n            dropdown: [\n                {\n                    header: true,\n                    title: 'John Doe',\n                    divider: true\n                },\n                {\n                    icon: 'hpe-user-settings',\n                    title: 'Settings'\n                },\n                {\n                    icon: 'hpe-logout',\n                    title: 'Log Out'\n                },\n                {\n                    title: 'Show Tips'\n                }\n            ]\n        }\n    ];\n\n}"}},2496:function(n,t){n.exports='<ux-page-header header="My Page" [crumbs]="crumbs" [items]="items" [condensed]="condensed" [iconMenus]="iconMenus"></ux-page-header>\n\n<br>\n\n<button class="btn button-primary" (click)="condensed = !condensed">Toggle Condensed</button>\n\n<hr>\n\n<p>\n    The <code>ux-page-header</code> component can be used to easily provide navigation for your application. It can display\n    a page title, application logo, breadcrumbs, icon menus and a navigation menu with support for dropdowns and nested dropdowns.\n    The component can be displayed in both regular and condensed forms.\n</p>\n\n<p>The appearance and behavior of the component can be configured using the following attributes:</p>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>@Input</b> logo</td>\n            <td><b>string</b></td>\n            <td>The path to an image to display within the top left part of the header.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> items</td>\n            <td><b>PageHeaderNavigationItem[]</b></td>\n            <td>The list of items to display in the navigation menu.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> crumbs</td>\n            <td><b>Breadcrumb</b></td>\n            <td>The breadcrumbs to display above the page header.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> header</td>\n            <td><b>string</b></td>\n            <td>The title of the current page.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> alignment</td>\n            <td><b>left, center, right</b></td>\n            <td>Defines how the navigation menu should be positioned horizontally. Default <code>center</code>.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> condensed</td>\n            <td><b>boolean</b></td>\n            <td>Determines whether or not to display the page header in the regular or condensed form.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> iconMenus</td>\n            <td><b>PageHeaderIconMenu[]</b></td>\n            <td>The list of icon menus to display in the top right area of the page header.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Input</b> backVisible</td>\n            <td><b>boolean</b></td>\n            <td>Determines whether or not a back button should be visible in the page header.</td>\n        </tr>\n\n        <tr>\n            <td><b>@Output</b> backClick</td>\n            <td><b>EventEmitter</b></td>\n            <td>The event fired when the back button is clicked.</td>\n        </tr>\n\n    </tbody>\n</table>\n\n<p>The following interfaces are used within the configuration of the page header:</p>\n\n<h4>PageHeaderNavigationItem</h4>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>icon</b></td>\n            <td><b>string?</b></td>\n            <td>The icon from the <a routerLink="/css/icons">UX Aspects iconset</a> to display in the navigation item.</td>\n        </tr>\n\n        <tr>\n            <td><b>title</b></td>\n            <td><b>string</b></td>\n            <td>The text to be displayed in the navigation button.</td>\n        </tr>\n\n        <tr>\n            <td><b>select</b></td>\n            <td><b>(item: PageHeaderNavigationItem) => void</b></td>\n            <td>Function that will be called when the navigation button is clicked.</td>\n        </tr>\n\n        <tr>\n            <td><b>children</b></td>\n            <td><b>PageHeaderNavigationDropdownItem[]?</b></td>\n            <td>If specified, a dropdown will be displayed containing additional items for the user to select.</td>\n        </tr>\n\n    </tbody>\n\n</table>\n\n<hr>\n\n\n<h4>PageHeaderNavigationDropdownItem</h4>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>title</b></td>\n            <td><b>string</b></td>\n            <td>The text to be displayed in the dropdown item.</td>\n        </tr>\n\n        <tr>\n            <td><b>select</b></td>\n            <td><b>(item: PageHeaderNavigationDropdownItem) => void</b></td>\n            <td>Function that will be called when the dropdown item is clicked.</td>\n        </tr>\n\n        <tr>\n            <td><b>children</b></td>\n            <td><b>PageHeaderNavigationDropdownItem[]?</b></td>\n            <td>If specified, a nested dropdown will be displayed containing additional items for the user to select (maximum of 1 nested level).</td>\n        </tr>\n\n    </tbody>\n\n</table>\n\n<hr>\n\n\n<h4>Breadcrumb</h4>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>title</b></td>\n            <td><b>string</b></td>\n            <td>The text to be displayed in the breadcrumb.</td>\n        </tr>\n\n        <tr>\n            <td><b>routerLink</b></td>\n            <td><b>string?</b></td>\n            <td>Performs navigation to a router link if that breadcrumb is clicked.</td>\n        </tr>\n\n        <tr>\n            <td><b>fragment</b></td>\n            <td><b>string?</b></td>\n            <td>Performs navigation to a fragment if that breadcrumb is clicked.</td>\n        </tr>\n\n        <tr>\n            <td><b>queryParams</b></td>\n            <td><b>string?</b></td>\n            <td>Allows you to pass query parameters to a route when a breadcrumb is clicked.</td>\n        </tr>\n\n        <tr>\n            <td><b>onClick</b></td>\n            <td><b>(event: MouseEvent) => void</b></td>\n            <td>This function will be called when a breadcrumb is clicked.</td>\n        </tr>\n\n    </tbody>\n\n</table>\n\n<hr>\n\n\n<h4>PageHeaderIconMenu</h4>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>icon</b></td>\n            <td><b>string</b></td>\n            <td>The icon from the <a routerLink="/css/icons">UX Aspects iconset</a> to display.</td>\n        </tr>\n\n        <tr>\n            <td><b>badge</b></td>\n            <td><b>string? | number?</b></td>\n            <td>The text/number to be displayed in a badge beside the icon.</td>\n        </tr>\n\n        <tr>\n            <td><b>select</b></td>\n            <td><b>(menu: PageHeaderIconMenu) => void</b></td>\n            <td>This function will be called when the icon is clicked.</td>\n        </tr>\n\n        <tr>\n            <td><b>dropdown</b></td>\n            <td><b>PageHeaderIconMenuDropdownItem[]?</b></td>\n            <td>The items to display in the dropdown menu that will appear when the icon is clicked.</td>\n        </tr>\n\n    </tbody>\n\n</table>\n\n<hr>\n\n<h4>PageHeaderIconMenuDropdownItem</h4>\n\n<table class="table">\n\n    <thead>\n        <tr>\n            <th>Name</th>\n            <th>Type</th>\n            <th>Description</th>\n        </tr>\n    </thead>\n\n    <tbody>\n\n        <tr>\n            <td><b>icon</b></td>\n            <td><b>string</b></td>\n            <td>The icon from the <a routerLink="/css/icons">UX Aspects iconset</a> to display in the dropdown item.</td>\n        </tr>\n\n        <tr>\n            <td><b>title</b></td>\n            <td><b>string? | number?</b></td>\n            <td>The text to display in the dropdown item.</td>\n        </tr>\n\n        <tr>\n            <td><b>subtitle</b></td>\n            <td><b>string?</b></td>\n            <td>The text to display on the right side of the dropdown item.</td>\n        </tr>\n\n        <tr>\n            <td><b>header</b></td>\n            <td><b>boolean?</b></td>\n            <td>Determines if this item should be displayed as a dropdown header.</td>\n        </tr>\n\n        <tr>\n            <td><b>divider</b></td>\n            <td><b>boolean?</b></td>\n            <td>If <code>true</code> a divider will be placed beneath this dropdown item.</td>\n        </tr>\n\n        <tr>\n            <td><b>select</b></td>\n            <td><b>() => void</b></td>\n            <td>This function will be called when a dropdown item is clicked.</td>\n        </tr>\n\n    </tbody>\n\n</table>\n\n<hr>\n\n<p>\n    Additionally you can add custom menu items to the top right of the page header by using the <code>uxPageHeaderCustomMenu</code> \n    structural directive as content of the <code>ux-page-header</code> component. This is used to define templates for menu items and \n    you can add custom click behavior.\n</p>\n\n<hr>\n\n<p>The following code can be used to create the example above:</p>\n\n<tabset>\n\n    <tab heading="HTML">\n        <uxd-snippet language="html" [content]="snippets.compiled.appHtml"></uxd-snippet>\n    </tab>\n    \n    <tab heading="TypeScript">\n        <uxd-snippet language="javascript" [content]="snippets.compiled.appTs"></uxd-snippet>\n    </tab>\n\n</tabset>\n'}});