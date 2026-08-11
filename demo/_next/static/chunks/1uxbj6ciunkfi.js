(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([ "object" == typeof document ? document.currentScript : void 0, 22035, e => {
    "use strict";
    if ("object" == typeof document && !document.getElementById("mgp-sdk-card-redesign-styles")) {
        let e = document.createElement("link");
        e.id = "mgp-sdk-card-redesign-styles", e.rel = "stylesheet", e.href = "./demo-sdk-card-redesign.css?v=20260811-config-generation-46",
        document.head.appendChild(e);
    }
    var a = e.i(51503), n = e.i(97424), s = e.i(70391), l = e.i(12951);
    let i = (0, l.default)("arrow-left-right", [ [ "path", {
        d: "M8 3 4 7l4 4",
        key: "9rb6wj"
    } ], [ "path", {
        d: "M4 7h16",
        key: "6tx8e3"
    } ], [ "path", {
        d: "m16 21 4-4-4-4",
        key: "siv7j2"
    } ], [ "path", {
        d: "M20 17H4",
        key: "h6l3hr"
    } ] ]);
    var t = e.i(22794), r = e.i(30366), d = e.i(58121), o = e.i(3683), c = e.i(4980), m = e.i(18114), p = e.i(4974), h = e.i(81884), u = e.i(73068), g = e.i(39313), x = e.i(66695), j = e.i(51541), b = e.i(34598), f = e.i(32431);
    let SecretEyeIcon = (0, l.default)("eye", [ [ "path", {
        d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
        key: "1nclc0"
    } ], [ "circle", {
        cx: "12",
        cy: "12",
        r: "3",
        key: "1v7zrd"
    } ] ]);
    let y = (0, l.default)("ghost", [ [ "path", {
        d: "M9 10h.01",
        key: "qbtxuw"
    } ], [ "path", {
        d: "M15 10h.01",
        key: "1qmjsl"
    } ], [ "path", {
        d: "M12 2a8 8 0 0 0-8 8v12l3-3 2.5 2.5L12 19l2.5 2.5L17 19l3 3V10a8 8 0 0 0-8-8z",
        key: "uwwb07"
    } ] ]);
    var v = e.i(93099);
    let k = (0, l.default)("grip-vertical", [ [ "circle", {
        cx: "9",
        cy: "12",
        r: "1",
        key: "1vctgf"
    } ], [ "circle", {
        cx: "9",
        cy: "5",
        r: "1",
        key: "hp0tcf"
    } ], [ "circle", {
        cx: "9",
        cy: "19",
        r: "1",
        key: "fkjjf6"
    } ], [ "circle", {
        cx: "15",
        cy: "12",
        r: "1",
        key: "1tmaij"
    } ], [ "circle", {
        cx: "15",
        cy: "5",
        r: "1",
        key: "19l28e"
    } ], [ "circle", {
        cx: "15",
        cy: "19",
        r: "1",
        key: "f4zoj3"
    } ] ]);
    var N = e.i(27976);
    let C = (0, l.default)("info", [ [ "circle", {
        cx: "12",
        cy: "12",
        r: "10",
        key: "1mglay"
    } ], [ "path", {
        d: "M12 16v-4",
        key: "1dtifu"
    } ], [ "path", {
        d: "M12 8h.01",
        key: "e9boi3"
    } ] ]);
    var S = e.i(67988), w = e.i(39218), A = e.i(33469), $ = e.i(12148);
    let I = (0, l.default)("mail", [ [ "path", {
        d: "m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",
        key: "132q7q"
    } ], [ "rect", {
        x: "2",
        y: "4",
        width: "20",
        height: "16",
        rx: "2",
        key: "izxlao"
    } ] ]), D = (0, l.default)("music-2", [ [ "circle", {
        cx: "8",
        cy: "18",
        r: "4",
        key: "1fc0mg"
    } ], [ "path", {
        d: "M12 18V2l7 4",
        key: "g04rme"
    } ] ]);
    var E = e.i(41699);
    let q = (0, l.default)("pencil", [ [ "path", {
        d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
        key: "1a8usu"
    } ], [ "path", {
        d: "m15 5 4 4",
        key: "1mk7zo"
    } ] ]);
    var K = e.i(79895), z = e.i(58414), P = e.i(30770), O = e.i(5437), M = e.i(16213), L = e.i(90264), T = e.i(8406);
    let R = [ {
        id: "release",
        title: "支付",
        short: "支付",
        description: "维护渠道支付参数，SDK 下载时自动引用。",
        icon: u.CreditCard,
        help: "https://docs.meetgames.com/sdk/channel"
    }, {
        id: "login",
        title: "登录",
        short: "登录",
        description: "维护登录方式的通用、iOS 与 Android 参数。",
        icon: $.LogIn,
        help: "https://docs.meetgames.com/sdk/login"
    }, {
        id: "agreement",
        title: "协议与隐私",
        short: "协议与隐私",
        description: "维护隐私政策、用户协议及儿童隐私。",
        icon: b.FileCheck2
    }, {
        id: "compliance",
        title: "合规",
        short: "合规",
        description: "配置年龄与 KWS 验证参数。",
        icon: P.ShieldCheck,
        help: "https://docs.meetgames.com/sdk/compliance"
    }, {
        id: "data",
        title: "归因数据",
        short: "归因数据",
        description: "可配置多个归因数据平台；生成 SDK 时 AppsFlyer 与 Adjust 仅支持二选一。",
        icon: g.Database,
        help: "https://docs.meetgames.com/sdk/data"
    }, {
        id: "advertising",
        title: "广告变现",
        short: "广告变现",
        description: "可配置多个广告变现平台；生成 SDK 时仅能选择其中一个平台。",
        icon: r.BarChart3,
        help: "https://docs.meetgames.com/sdk/advertising"
    }, {
        id: "support",
        title: "客服工具",
        short: "客服工具",
        description: "配置在线客服、表单反馈、FAQ 或智能客服。",
        icon: N.Headphones
    } ], G = [ {
        id: "guest",
        code: "GUEST",
        displayName: "Guest",
        name: "游客登录",
        description: "默认必选，无需填写后台参数。",
        params: []
    }, {
        id: "email",
        code: "EMAIL",
        displayName: "Email",
        name: "邮箱登录",
        description: "保留为登录方式，无需填写后台参数。",
        params: []
    }, {
        id: "apple",
        code: "APPLE",
        displayName: "Apple",
        name: "Apple 登录",
        description: "保留为登录方式，无需填写后台参数。",
        params: []
    }, {
        id: "google",
        code: "GOOGLE",
        displayName: "Google",
        name: "Google 登录",
        description: "iOS 与 Android 使用不同的 OAuth Client ID。",
        help: "https://developers.google.com/identity/protocols/oauth2",
        params: [ {
            key: "clientId",
            label: "OAuth 2.0 Client ID",
            value: "398642465987-ios.apps.googleusercontent.com",
            helper: "Google Cloud Console > API 和服务 > 凭据中的 iOS 客户端 ID。",
            platform: "iOS"
        }, {
            key: "scheme",
            label: "iOS URL Scheme / REVERSED_CLIENT_ID",
            value: "com.googleusercontent.apps.398642465987-ios",
            helper: "填写 GoogleService-Info.plist 中的 REVERSED_CLIENT_ID。",
            format: "scheme",
            platform: "iOS"
        }, {
            key: "clientId",
            label: "OAuth 2.0 Client ID",
            value: "398642465987-android.apps.googleusercontent.com",
            helper: "Google Cloud Console > API 和服务 > 凭据中的 Android 客户端 ID。",
            platform: "Android"
        } ]
    }, {
        id: "kakao",
        code: "KAKAO",
        displayName: "Kakao",
        name: "Kakao 登录",
        description: "iOS 与 Android 共用一组应用参数。",
        help: "https://developers.kakao.com/docs/latest/en/kakaologin/common",
        params: [ {
            key: "clientId",
            label: "Native App Key",
            value: "kakao0123456789abcdef",
            helper: "Kakao Developers > App > App Keys 中的 Native App Key。",
            platform: "common"
        }, {
            key: "scheme",
            label: "URL Scheme",
            value: "kakao0123456789abcdef",
            helper: "与客户端工程中注册的 Kakao URL Scheme 保持一致。",
            format: "scheme",
            platform: "common"
        } ]
    }, {
        id: "facebook",
        code: "FACEBOOK",
        displayName: "Facebook",
        name: "Facebook 登录",
        description: "应用参数跨平台复用，iOS 额外填写展示名称。",
        help: "https://developers.facebook.com/docs/facebook-login/",
        params: [ {
            key: "clientId",
            label: "App ID",
            value: "123456789012345",
            helper: "Meta for Developers > 应用设置 > 基本中的 App ID。",
            platform: "common"
        }, {
            key: "scheme",
            label: "URL Scheme",
            value: "fb123456789012345",
            helper: "通常为 fb + App ID，例如 fb123456789012345。",
            format: "scheme",
            platform: "common"
        }, {
            key: "secret",
            label: "App Secret",
            value: "facebook_demo_app_secret",
            secret: !0,
            helper: "Meta for Developers > 应用设置 > 基本中的 App Secret。",
            platform: "common"
        }, {
            key: "name",
            label: "Display name",
            value: "MeetGames Demo",
            helper: "Facebook 后台展示的应用名称。",
            platform: "iOS"
        } ]
    }, {
        id: "twitter",
        code: "TWITTER",
        displayName: "X",
        name: "X 登录",
        description: "iOS 与 Android 共用同一组 X Developer Portal 参数。",
        help: "https://developer.x.com/en/docs/authentication/oauth-1-0a",
        params: [ {
            key: "clientId",
            label: "API Key / Consumer Key",
            value: "twitter_demo_api_key",
            helper: "X Developer Portal > Keys and tokens 中的 API Key。",
            platform: "common"
        }, {
            key: "secret",
            label: "API Key Secret / Consumer Secret",
            value: "twitter_demo_api_secret",
            secret: !0,
            helper: "X Developer Portal > Keys and tokens 中的 API Key Secret。",
            platform: "common"
        }, {
            key: "redirect",
            label: "Callback URL",
            value: "twitterKit.twitter_demo_api_key://",
            helper: "与 X Developer Portal 中登记的 Callback URL 完全一致。",
            format: "uri",
            platform: "common"
        } ]
    }, {
        id: "snapchat",
        code: "SNAPCHAT",
        displayName: "Snapchat",
        name: "Snapchat 登录",
        description: "基础授权参数跨平台复用，iOS 额外填写 URL Scheme。",
        help: "https://developers.snap.com/snap-kit/login-kit/overview",
        params: [ {
            key: "clientId",
            label: "OAuth Client ID",
            value: "snapchat_demo_client",
            helper: "Snap Kit Developer Portal 中的 OAuth Client ID。",
            platform: "common"
        }, {
            key: "redirect",
            label: "Redirect URI",
            value: "https://mg-static-rs.meetgames.com/html/oauth-redirect.html",
            helper: "默认使用 MeetGames OAuth 回调页，可按后台登记地址修改。",
            format: "https",
            platform: "common"
        }, {
            key: "scheme",
            label: "iOS URL Scheme",
            value: "snapchat-demo-ios",
            helper: "与 iOS 工程中注册的 URL Scheme 保持一致。",
            format: "scheme",
            platform: "iOS"
        } ]
    }, {
        id: "line",
        code: "LINE",
        displayName: "LINE",
        name: "LINE 登录",
        description: "Channel 参数跨平台复用，iOS 额外填写 URL Scheme。",
        help: "https://developers.line.biz/en/docs/line-login/overview/",
        params: [ {
            key: "clientId",
            label: "Channel ID",
            value: "line_demo_channel",
            helper: "LINE Developers Console > Basic settings 中的 Channel ID。",
            platform: "common"
        }, {
            key: "secret",
            label: "Channel Secret",
            value: "line_demo_secret",
            secret: !0,
            helper: "LINE Developers Console > Basic settings 中的 Channel secret。",
            platform: "common"
        }, {
            key: "scheme",
            label: "iOS URL Scheme",
            value: "line3rdp.com.demo.legend.global",
            helper: "推荐格式为 line3rdp.{包名}，保存前可按实际包名修改。",
            format: "scheme",
            platform: "iOS"
        } ]
    }, {
        id: "naver",
        code: "NAVER",
        displayName: "NAVER",
        name: "NAVER 登录",
        description: "应用名称与凭据跨平台复用，iOS 额外填写 URL Scheme。",
        help: "https://developers.naver.com/docs/login/overview/",
        params: [ {
            key: "name",
            label: "Application Name",
            value: "MeetGames Demo",
            helper: "NAVER Developers 中登记的应用名称。",
            platform: "common"
        }, {
            key: "clientId",
            label: "Client ID",
            value: "naver_demo_client",
            helper: "NAVER Developers 应用的 Client ID。",
            platform: "common"
        }, {
            key: "secret",
            label: "Client Secret",
            value: "naver_demo_secret",
            secret: !0,
            helper: "NAVER Developers 应用的 Client Secret。",
            platform: "common"
        }, {
            key: "scheme",
            label: "iOS URL Scheme",
            value: "naver-demo-ios",
            helper: "与 iOS 工程中注册的 URL Scheme 保持一致。",
            format: "scheme",
            platform: "iOS"
        } ]
    }, {
        id: "tiktok",
        code: "TIKTOK",
        displayName: "TikTok",
        name: "TikTok 登录",
        description: "iOS 与 Android 共用同一组 TikTok 应用参数。",
        help: "https://developers.tiktok.com/doc/login-kit-web/",
        params: [ {
            key: "clientId",
            label: "Client Key",
            value: "tiktok_demo_client",
            helper: "TikTok for Developers 应用的 Client Key。",
            platform: "common"
        }, {
            key: "secret",
            label: "Client Secret",
            value: "tiktok_demo_secret",
            secret: !0,
            helper: "TikTok for Developers 应用的 Client Secret。",
            platform: "common"
        }, {
            key: "redirect",
            label: "Redirect URI",
            value: "https://mg-static-rs.meetgames.com/html/oauth-redirect.html",
            helper: "默认使用 MeetGames OAuth 回调页，可按后台登记地址修改。",
            format: "https",
            platform: "common"
        } ]
    }, {
        id: "discord",
        code: "DISCORD",
        displayName: "Discord",
        name: "Discord 登录",
        description: "iOS 与 Android 共用同一组 Discord OAuth2 参数。",
        help: "https://discord.com/developers/docs/topics/oauth2",
        params: [ {
            key: "clientId",
            label: "Client ID",
            value: "discord_demo_client",
            helper: "Discord Developer Portal > OAuth2 中的 Client ID。",
            platform: "common"
        }, {
            key: "secret",
            label: "Client Secret",
            value: "discord_demo_secret",
            secret: !0,
            helper: "Discord Developer Portal > OAuth2 中的 Client Secret。",
            platform: "common"
        }, {
            key: "redirect",
            label: "Redirect URI",
            value: "https://mg-static-rs.meetgames.com/html/oauth-redirect.html",
            helper: "默认使用 MeetGames OAuth 回调页，可按后台登记地址修改。",
            format: "https",
            platform: "common"
        } ]
    } ], U = [ {
        key: "loginEvent",
        name: "登录",
        code: "login"
    }, {
        key: "signupEvent",
        name: "注册",
        code: "sign_up"
    }, {
        key: "tutorialBeginEvent",
        name: "新手引导开始",
        code: "tutorial_begin"
    }, {
        key: "tutorialCompleteEvent",
        name: "新手引导结束",
        code: "tutorial_complete"
    }, {
        key: "levelUpEvent",
        name: "角色升级",
        code: "level_up"
    }, {
        key: "achievementEvent",
        name: "成就解锁",
        code: "unlock_achievement"
    }, {
        key: "purchaseEvent",
        name: "支付",
        code: "purchase"
    }, {
        key: "shareEvent",
        name: "分享",
        code: "share"
    }, {
        key: "earnCurrencyEvent",
        name: "获取虚拟币",
        code: "earn_virtual_currency"
    }, {
        key: "spendCurrencyEvent",
        name: "支出虚拟币",
        code: "spend_virtual_currency"
    }, {
        key: "levelStartEvent",
        name: "关卡开始",
        code: "level_start"
    }, {
        key: "levelEndEvent",
        name: "关卡结束",
        code: "level_end"
    } ], F = [ {
        id: "firebase",
        name: "Firebase",
        description: "崩溃分析、基础事件与推送联动。",
        help: "https://firebase.google.com/docs",
        params: [ {
            key: "androidFile",
            label: "Android 配置文件",
            value: "google-services.json",
            upload: !0,
            helper: "从 Firebase 项目下载的 Android 配置文件。"
        }, {
            key: "iosFile",
            label: "iOS 配置文件",
            value: "GoogleService-Info.plist",
            upload: !0,
            helper: "从 Firebase 项目下载的 iOS 配置文件。"
        } ]
    }, {
        id: "appsflyer",
        name: "AppsFlyer",
        description: "广告归因、渠道效果与安装来源分析。",
        help: "https://dev.appsflyer.com/hc/docs",
        params: [ {
            key: "devKey",
            label: "dev_key",
            value: "af_demo_dev_key_2026",
            helper: "AppsFlyer 后台应用详情中的 dev_key。"
        }, {
            key: "appleAppId",
            label: "Apple App ID",
            value: "6748123091",
            helper: "iOS 应用的 App Store ID，Android 可保留示例值。"
        } ]
    }, {
        id: "adjust",
        name: "Adjust",
        description: "移动归因、事件回传与付费转化分析。",
        help: "https://help.adjust.com",
        params: [ {
            key: "appIdentifier",
            label: "应用识别码",
            value: ""
        }, ...U.map(e => ({
            key: e.key,
            label: `${e.name} eventID`,
            value: ""
        })) ]
    } ], _ = {
        firebase: 2.8,
        appsflyer: 1.6,
        adjust: 1.4
    }, B = [ {
        platform: "iOS",
        items: [ {
            id: "ios-app-store",
            name: "App Store",
            short: "APP STORE"
        } ]
    }, {
        platform: "Android",
        items: [ {
            id: "android-google",
            name: "Google Play",
            short: "GOOGLE PLAY"
        }, {
            id: "android-one-store",
            name: "ONE Store",
            short: "ONE STORE"
        } ]
    } ], V = B.flatMap(e => e.items.map(a => ({
        ...a,
        platform: e.platform
    }))), X = {
        "ios-app-store": {
            title: "App Store 支付配置",
            fields: [ [ "sharedSecret", "支付共享密钥", "demo_apple_shared_secret", "secret" ] ]
        },
        "android-google": {
            title: "Google Play 支付配置",
            fields: [ [ "googleServerConfig", "Google server端参数", "google-payment-config.json", "upload-json", "请上传Google支付后台下载的json文件。仅支持json格式。" ] ]
        },
        "android-one-store": {
            title: "ONE Store 支付配置",
            fields: [ [ "licenseKey", "License Key", "one-store-demo-license-key", "secret" ], [ "clientId", "Client ID", "one-store-demo-client" ] ]
        }
    }, H = {
        paypal: {
            name: "PayPal",
            fields: [ [ "clientId", "Client ID", "paypal-demo-client" ], [ "clientSecret", "Client Secret", "paypal-demo-secret", "secret" ], [ "webhookId", "Webhook ID", "WH-DEMO-001" ], [ "currency", "默认币种", "USD" ] ]
        },
        xsolla: {
            name: "Xsolla",
            fields: [ [ "projectId", "Project ID", "demo-project-001" ], [ "merchantId", "Merchant ID", "demo-merchant-001" ], [ "apiKey", "API Key", "xsolla-demo-api-key", "secret" ], [ "webhookUrl", "Webhook URL", "https://api.demo-game.com/pay/xsolla/webhook", "url" ] ]
        }
    };
    function Q(e) {
        if (X[e]) return X[e];
        let n = V.find(a => a.id === e);
        return {
            title: `${n?.short || "渠道"} 商店参数`,
            fields: [ [ "appId", "App ID", `${e}-demo-app` ], [ "merchantId", "Merchant ID", `${e}-demo-merchant` ], [ "appSecret", "App Secret", `${e}-demo-secret`, "secret" ], [ "deliveryUrl", "发货地址", `https://api.demo-game.com/pay/${e}/delivery`, "url" ] ]
        };
    }
    function W(e, a) {
        let [, n, , s] = e, l = String(a || "").trim();
        return l ? "upload-json" !== s || /\.json$/i.test(l) ? "url" !== s || /^https?:\/\/[^\s]+$/i.test(l) ? "" : "请输入以 http:// 或 https:// 开头的有效地址" : "仅支持 JSON 文件" : `请填写${n}`;
    }
    function J(e, a = !1) {
        return {
            official: Object.fromEntries(Q(e).fields.map(([e, , n]) => [ e, a ? n : "" ])),
            moreProvider: "",
            moreValues: {}
        };
    }
    function Z(e, a) {
        if (!a || !Q(e).fields.every(e => !W(e, a.official?.[e[0]]))) return !1;
        if (!a.moreProvider) return !0;
        let n = H[a.moreProvider];
        return !!n && n.fields.every(([e, , , n]) => {
            let s = String(a.moreValues?.[e] || "").trim();
            return !!s && ("url" !== n || /^https?:\/\//i.test(s));
        });
    }
    function paymentChannelIds() {
        return V.map(e => e.id);
    }
    function paymentChannelConfigMap(e = !1) {
        return Object.fromEntries(V.map(a => [ a.id, J(a.id, e) ]));
    }
    let Y = [ {
        id: "north-america",
        name: "北美",
        countries: [ {
            code: "US",
            name: "美国",
            english: "United States"
        }, {
            code: "CA",
            name: "加拿大",
            english: "Canada"
        }, {
            code: "MX",
            name: "墨西哥",
            english: "Mexico"
        } ]
    }, {
        id: "europe",
        name: "欧洲",
        countries: [ {
            code: "GB",
            name: "英国",
            english: "United Kingdom"
        }, {
            code: "DE",
            name: "德国",
            english: "Germany"
        }, {
            code: "FR",
            name: "法国",
            english: "France"
        }, {
            code: "IT",
            name: "意大利",
            english: "Italy"
        }, {
            code: "ES",
            name: "西班牙",
            english: "Spain"
        } ]
    }, {
        id: "greater-china",
        name: "港澳台",
        countries: [ {
            code: "HK",
            name: "中国香港",
            english: "Hong Kong"
        }, {
            code: "MO",
            name: "中国澳门",
            english: "Macao"
        }, {
            code: "TW",
            name: "中国台湾",
            english: "Taiwan"
        } ]
    }, {
        id: "asia-pacific",
        name: "亚洲",
        countries: [ {
            code: "JP",
            name: "日本",
            english: "Japan"
        }, {
            code: "KR",
            name: "韩国",
            english: "South Korea"
        }, {
            code: "KP",
            name: "朝鲜",
            english: "North Korea"
        }, {
            code: "SG",
            name: "新加坡",
            english: "Singapore"
        } ]
    }, {
        id: "oceania",
        name: "大洋洲",
        countries: [ {
            code: "AU",
            name: "澳大利亚",
            english: "Australia"
        }, {
            code: "NZ",
            name: "新西兰",
            english: "New Zealand"
        } ]
    }, {
        id: "southeast-asia",
        name: "东南亚",
        countries: [ {
            code: "MY",
            name: "马来西亚",
            english: "Malaysia"
        }, {
            code: "TH",
            name: "泰国",
            english: "Thailand"
        }, {
            code: "ID",
            name: "印度尼西亚",
            english: "Indonesia"
        }, {
            code: "VN",
            name: "越南",
            english: "Vietnam"
        }, {
            code: "PH",
            name: "菲律宾",
            english: "Philippines"
        } ]
    }, {
        id: "south-america",
        name: "南美",
        countries: [ {
            code: "BR",
            name: "巴西",
            english: "Brazil"
        }, {
            code: "AR",
            name: "阿根廷",
            english: "Argentina"
        }, {
            code: "CL",
            name: "智利",
            english: "Chile"
        } ]
    }, {
        id: "middle-east",
        name: "中东",
        countries: [ {
            code: "AE",
            name: "阿联酋",
            english: "United Arab Emirates"
        }, {
            code: "SA",
            name: "沙特阿拉伯",
            english: "Saudi Arabia"
        }, {
            code: "TR",
            name: "土耳其",
            english: "Türkiye"
        } ]
    } ], ee = Y.flatMap(e => e.countries), ea = {
        "ios-app-store": [ "KP" ],
        "android-google": [ "KP" ],
        "android-one-store": [ "KP" ]
    }, en = {
        "android-one-store": [ "KR" ]
    }, es = [ {
        id: "americas",
        name: "美洲",
        regions: [ {
            id: "north-america",
            name: "北美",
            countryCodes: [ "US", "CA", "MX" ]
        }, {
            id: "south-america",
            name: "南美",
            countryCodes: [ "BR", "AR", "CL" ]
        } ]
    }, {
        id: "europe",
        name: "欧洲",
        regions: [ {
            id: "western-europe",
            name: "西欧",
            countryCodes: [ "GB", "DE", "FR" ]
        }, {
            id: "southern-europe",
            name: "南欧",
            countryCodes: [ "IT", "ES" ]
        } ]
    }, {
        id: "asia",
        name: "亚洲",
        regions: [ {
            id: "east-asia",
            name: "东亚",
            countryCodes: [ "JP", "KR", "KP" ]
        }, {
            id: "greater-china",
            name: "港澳台",
            countryCodes: [ "HK", "MO", "TW" ]
        }, {
            id: "southeast-asia",
            name: "东南亚",
            countryCodes: [ "SG", "MY", "TH", "ID", "VN", "PH" ]
        }, {
            id: "middle-east",
            name: "中东",
            countryCodes: [ "AE", "SA", "TR" ]
        } ]
    }, {
        id: "oceania",
        name: "大洋洲",
        regions: [ {
            id: "australia-new-zealand",
            name: "澳新",
            countryCodes: [ "AU", "NZ" ]
        } ]
    } ];
    function el(e, a = null) {
        let n = ea[e] || [], s = en[e] || null;
        return Y.map(e => ({
            ...e,
            countries: e.countries.filter(e => !n.includes(e.code) && (!s || s.includes(e.code)) && (!a || a.includes(e.code)))
        })).filter(e => e.countries.length);
    }
    function ei(e) {
        let a = e$(e);
        return a?.platform === "iOS" ? "iOS Bundle ID 格式，例如 com.company.game；支持字母、数字、连字符和英文句点。" : "Android Application ID 格式，例如 com.company.game；仅支持小写字母、数字、下划线和英文句点。";
    }
    function et(e, a) {
        let n = String(a || "").trim();
        if (!n) return "请输入包名";
        if (!e) return "请先选择发行渠道";
        if (n.length > 150) return "包名不能超过 150 个字符";
        let s = e$(e);
        return (s?.platform === "iOS" ? /^[A-Za-z][A-Za-z0-9-]*(\.[A-Za-z0-9-]+)+$/.test(n) : /^[a-z][a-z0-9_]*(\.[a-z][a-z0-9_]*)+$/.test(n)) ? "" : ei(e);
    }
    let er = [ "消除", "益智", "超休闲", "动作", "博弈", "运动", "策略", "派对", "桌面游戏", "儿童类", "其他", "赛车", "角色扮演", "射击", "模拟" ], ed = [ "产品预研阶段", "上线营销阶段", "产品测试阶段", "长线运营阶段" ], eo = () => ({
        name: "",
        type: "",
        stage: "",
        link: ""
    }), ec = [ {
        id: "login",
        title: "登录"
    }, {
        id: "payment",
        title: "支付"
    }, {
        id: "agreement",
        title: "协议与隐私"
    }, {
        id: "compliance",
        title: "合规"
    }, {
        id: "support",
        title: "客服工具"
    }, {
        id: "ops-data",
        title: "归因数据"
    }, {
        id: "advertising",
        title: "广告变现"
    } ], em = {
        login: 4.8,
        payment: 3.2,
        support: 2.6,
        advertising: 6.4
    }, ep = [ {
        id: "admob",
        name: "Google AdMob",
        description: "Google 移动广告平台，支持横幅、插屏、激励视频等常用广告形态。"
    }, {
        id: "applovin-max",
        name: "AppLovin MAX",
        description: "广告聚合与竞价平台，可统一接入多家广告网络并优化填充率与收益。"
    } ], eh = () => ({
        provider: "none",
        admobAppId: "",
        maxSdkKey: ""
    });
    function eu(e) {
        return ep.find(a => a.id === e)?.name || "未开启";
    }
    function eg(e, a = []) {
        return "ops-data" === e ? function(e = []) {
            return e.reduce((e, a) => e + (_[a] || 0), 0);
        }(a) : em[e] || 0;
    }
    function ex(e = [], a = []) {
        return e.reduce((e, n) => e + eg(n, a), 0);
    }
    let ej = "login", eb = "support", ef = "ops-data", ey = "advertising", ev = "guest";
    function ek(e = {}) {
        return getStartedDataProviderIds(e).length > 0;
    }
    function eN(e = {}) {
        return !!(e.onlineEnabled || e.feedbackEnabled || e.faqEnabled || e.smartEnabled);
    }
    function eC(e = []) {
        return [ ev, ...Array.from(new Set((e || []).filter(e => !!e))).filter(e => e !== ev) ];
    }
    function createLoginParameter(key, label, secret = !1) {
        return {
            key: key,
            label: label,
            secret: secret
        };
    }
    let loginParameterScopes = [ "common", "iOS", "Android" ];
    function getLoginPlatformParameters(e, scope) {
        return (e?.params || []).filter(e => (e.platform || "common") === scope);
    }
    function getLoginScopeLabel(e) {
        return "common" === e ? "通用参数" : `${e} 参数`;
    }
    function getLoginScopeDescription(e) {
        return "common" === e ? "所有发行渠道共用，仅填写一次" : "iOS" === e ? "App Store 渠道使用" : "Google Play、ONE Store 使用";
    }
    function getLoginParameterError(field, rawValue) {
        let value = String(rawValue ?? "");
        if (!value.trim()) return `请填写${field.label}`;
        if (value !== value.trim()) return "请删除首尾空格";
        if (/[，。；：！？【】（）《》“”‘’、]/.test(value)) return "请使用英文标点";
        if ("https" === field.format && !/^https:\/\/[^\s]+$/i.test(value)) return "请输入以 https:// 开头的完整地址";
        if ("uri" === field.format && !/^[^\s]+:\/\/[^\s]*$/.test(value)) return "请输入完整的回调地址";
        if ("scheme" === field.format && !/^[A-Za-z][A-Za-z0-9+.-]*$/.test(value)) return "仅支持字母、数字、点、加号和连字符，且需以字母开头";
        return "";
    }
    function updateLoginPlatformValue(config, onChange, methodId, scope, key, value) {
        onChange({
            values: {
                ...(config.values || {}),
                [methodId]: {
                    ...(config.values?.[methodId] || {}),
                    [scope]: {
                        ...(config.values?.[methodId]?.[scope] || {}),
                        [key]: value
                    }
                }
            }
        });
    }
    function createDefaultLoginPlatformValue(e, scope, field) {
        if (void 0 !== field.value) return field.value;
        let scopeKey = scope.toLowerCase();
        return "redirect" === field.key ? `https://api.demo-game.com/login/${e.id}/${scopeKey}` : "scheme" === field.key ? `meetgames.${e.id}.${scopeKey}` : "name" === field.key ? `${e.displayName} Demo` : "secret" === field.key ? `demo_${e.id}_${scopeKey}_secret` : `${e.id}_${scopeKey}_client_id`;
    }
    function createDefaultLoginValues(e) {
        return Object.fromEntries(loginParameterScopes.map(scope => [ scope, Object.fromEntries(getLoginPlatformParameters(e, scope).map(field => [ field.key, createDefaultLoginPlatformValue(e, scope, field) ])) ]));
    }
    function getLoginPlatformValue(e, scope, key) {
        return e?.[scope]?.[key] || "";
    }
    function isLoginScopeComplete(e = {}, method, scope) {
        let fields = getLoginPlatformParameters(method, scope);
        return !fields.length || fields.every(field => !getLoginParameterError(field, getLoginPlatformValue(e.values?.[method.id], scope, field.key)));
    }
    function isLoginMethodCompleteForRuntime(e = {}, method, runtime) {
        return [ "common", runtime ].filter(Boolean).every(scope => isLoginScopeComplete(e, method, scope));
    }
    function getLoginMethodMissingScopes(e = {}, method, runtime) {
        return [ "common", runtime ].filter(Boolean).filter(scope => getLoginPlatformParameters(method, scope).length > 0 && !isLoginScopeComplete(e, method, scope));
    }
    function getLoginValuesForRuntime(e = {}, runtime) {
        return Object.fromEntries([ "common", runtime ].filter(Boolean).map(scope => [ scope, e?.[scope] || {} ]).filter(([, values]) => Object.keys(values).length > 0));
    }
    let eS = Object.fromEntries(G.map(e => [ e.id, createDefaultLoginValues(e) ])), ew = Object.fromEntries(F.map(e => [ e.id, Object.fromEntries(e.params.map(e => [ e.key, e.value ])) ])), eA = [ {
        id: 1,
        game: "test-欧美",
        packageName: "com.demo.legend.global",
        channels: 3,
        countries: 5,
        modules: 5,
        status: "已生成",
        time: "2026-07-27 16:42"
    }, {
        id: 2,
        game: "Kingdom Journey",
        packageName: "com.meetgames.kingdom",
        channels: 2,
        countries: 4,
        modules: 3,
        status: "已生成",
        time: "2026-07-26 11:18"
    }, {
        id: 3,
        game: "Puzzle Harbor",
        packageName: "com.meetgames.puzzle",
        channels: 2,
        countries: 2,
        modules: 3,
        status: "已生成",
        time: "2026-07-25 09:36"
    } ];
    function e$(e) {
        return V.find(a => a.id === e);
    }
    function eI(e, a = {}) {
        let n = function(e = {}) {
            return new Set((e.channels || []).map(e => e$(e)?.platform).filter(Boolean));
        }(a);
        return (e?.params || []).filter(e => {
            let a = e.platform || "common";
            return "common" === a || n.has(a);
        });
    }
    function eD(e = []) {
        return [ "guest", ...Array.from(new Set(Array.isArray(e) ? e.filter(Boolean) : [])).filter(e => "guest" !== e) ];
    }
    function eE(e) {
        return ee.find(a => a.code === e);
    }
    function eq(e) {
        return ec.find(a => a.id === e);
    }
    function eK(e) {
        let a = Array.isArray(e?.includedCapabilities) ? e.includedCapabilities : Array.isArray(e?.modules) ? e.modules : [];
        return Array.from(new Set(a)).filter(e => ec.some(a => a.id === e));
    }
    function ez(e) {
        return G.find(a => a.id === e);
    }
    let eP = "./assets/brands/apple.svg";
    function eO({platform: e, size: n = 20}) {
        return (0, a.jsx)("span", {
            className: `mgp-platform-logo ${"iOS" === e ? "ios" : "android"}`,
            style: {
                width: n,
                height: n
            },
            "aria-hidden": "true",
            children: (0, a.jsx)("img", {
                src: "iOS" === e ? eP : "./assets/brands/android.svg",
                alt: ""
            })
        });
    }
    function eM({storeId: e, size: n = 22}) {
        if (!e$(e)) return null;
        let s = e.includes("app-store") ? "apple" : e.includes("google") ? "google" : "one-store";
        return (0, a.jsx)("span", {
            className: `mgp-store-logo ${s}`,
            style: {
                width: n,
                height: n
            },
            "aria-hidden": "true",
            children: "one-store" === s ? (0, a.jsx)("b", {
                children: "1"
            }) : (0, a.jsx)("img", {
                src: "apple" === s ? "./assets/brands/app-store.svg" : "./assets/brands/google-play.svg",
                alt: ""
            })
        });
    }
    function eL({groups: e, selected: s, onSelect: l}) {
        let [i, t] = (0, n.useState)(!1);
        return (0, a.jsxs)("div", {
            className: `mgp-select-field mgp-store-select mgp-platform-select ${i ? "open" : ""}`,
            onBlur: e => {
                e.currentTarget.contains(e.relatedTarget) || t(!1);
            },
            onKeyDown: e => {
                "Escape" === e.key && t(!1);
            },
            children: [ (0, a.jsx)("span", {
                children: "平台"
            }), (0, a.jsxs)("button", {
                type: "button",
                className: "mgp-store-select-trigger",
                "aria-label": "选择平台",
                "aria-haspopup": "listbox",
                "aria-expanded": i,
                onClick: () => t(e => !e),
                children: [ (0, a.jsxs)("span", {
                    className: "mgp-select-trigger-value",
                    children: [ (0, a.jsx)(eO, {
                        platform: s,
                        size: 20
                    }), (0, a.jsx)("strong", {
                        children: s
                    }) ]
                }), (0, a.jsx)(m.ChevronDown, {
                    size: 15
                }) ]
            }), i ? (0, a.jsx)("div", {
                className: "mgp-store-select-menu",
                role: "listbox",
                "aria-label": "平台列表",
                children: e.map(e => (0, a.jsxs)("button", {
                    type: "button",
                    role: "option",
                    "aria-selected": s === e.platform,
                    onClick: () => {
                        l(e.platform), t(!1);
                    },
                    children: [ (0, a.jsx)(eO, {
                        platform: e.platform,
                        size: 24
                    }), (0, a.jsxs)("span", {
                        children: [ (0, a.jsx)("strong", {
                            children: e.platform
                        }), (0, a.jsx)("small", {
                            children: e.items.map(e => e.name).join("、")
                        }) ]
                    }), s === e.platform ? (0, a.jsx)(o.Check, {
                        size: 15
                    }) : null ]
                }, e.platform))
            }) : null ]
        });
    }
    function eT({channels: e, selected: s, onSelect: l}) {
        let [i, t] = (0, n.useState)(!1);
        return (0, a.jsxs)("div", {
            className: `mgp-select-field mgp-store-select ${i ? "open" : ""}`,
            onBlur: e => {
                e.currentTarget.contains(e.relatedTarget) || t(!1);
            },
            onKeyDown: e => {
                "Escape" === e.key && t(!1);
            },
            children: [ (0, a.jsx)("span", {
                children: "发行渠道"
            }), (0, a.jsxs)("button", {
                type: "button",
                className: "mgp-store-select-trigger",
                "aria-label": "请选择发行渠道",
                "aria-haspopup": "listbox",
                "aria-expanded": i,
                onClick: () => t(e => !e),
                children: [ (0, a.jsx)("span", {
                    children: "请选择发行渠道"
                }), (0, a.jsx)(m.ChevronDown, {
                    size: 15
                }) ]
            }), i ? (0, a.jsx)("div", {
                className: "mgp-store-select-menu",
                role: "listbox",
                "aria-label": "发行渠道列表",
                children: e.map(e => {
                    let n = s.includes(e.id);
                    return (0, a.jsxs)("button", {
                        type: "button",
                        role: "option",
                        "aria-selected": !1,
                        disabled: n,
                        onClick: () => {
                            l(e.id), t(!1);
                        },
                        children: [ (0, a.jsx)(eM, {
                            storeId: e.id,
                            size: 24
                        }), (0, a.jsxs)("span", {
                        children: (0, a.jsx)("strong", {
                            children: e.name
                        })
                        }), n ? (0, a.jsx)("em", {
                            children: "已添加"
                        }) : null ]
                    }, e.id);
                })
            }) : null ]
        });
    }
    function eR(e, a = {}) {
        if (!e.selected?.includes("guest")) return !1;
        let n = eD(e.selected).filter(e => "guest" !== e).map(e => G.find(a => a.id === e)).filter(Boolean), s = Array.from(new Set((a.channels || []).map(e => e$(e)?.platform).filter(e => "Android" === e || "iOS" === e)));
        return n.some(a => s.some(n => isLoginMethodCompleteForRuntime(e, a, n)));
    }
    function isPaymentConfigComplete(e = {}, a = "") {
        let n = String(e.deliveryUrl || "").trim(), s = a ? [ a ] : e.channels || [];
        return /^https?:\/\/[^\s]+$/i.test(n) && s.some(a => Z(a, e.channelPaymentConfigs?.[a]));
    }
    function eG(e = {}) {
        return isPaymentConfigComplete(e);
    }
    function eU(e = {}, a = {}, n = {}, s = {}, l = {}) {
        let i = a.channels || [];
        if (!i.length) return !1;
        let t = new Set([ ...!ek(n) ? [ ef ] : [], ...!eN(l) ? [ eb ] : [], ...!eV(s) ? [ ey ] : [] ]);
        return i.every(a => {
            let n = e.byChannel?.[a] || [];
            return n.length > 0 && n.every(e => ec.some(a => a.id === e) && !t.has(e));
        });
    }
    function eF(e) {
        return isSupportModuleComplete(e || {});
    }
    function getStartedDataProviderIds(e = {}) {
        return F.filter(a => a.params.some(a => String(e.values?.[a.id]?.[a.key] || "").trim())).map(e => e.id);
    }
    function getCompletedDataProviderIds(e = {}) {
        return F.filter(a => isDataProviderComplete(e, a.id)).map(e => e.id);
    }
    function e_(e = {}) {
        let a = getStartedDataProviderIds(e);
        return a.length > 0 && a.every(a => isDataProviderComplete(e, a));
    }
    function eB(e) {
        let a = String(e || "").trim();
        return a ? /^ca-app-pub-\d{16}~\d{10}$/i.test(a) ? "" : "请输入正确的 AdMob App ID，例如 ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy" : "请填写 AdMob App ID";
    }
    function getStartedAdvertisingProviderIds(e = {}) {
        return [ ...String(e.admobAppId || "").trim() ? [ "admob" ] : [], ...String(e.maxSdkKey || "").trim() ? [ "applovin-max" ] : [] ];
    }
    function getCompletedAdvertisingProviderIds(e = {}) {
        return [ ...!eB(e.admobAppId) ? [ "admob" ] : [], ...String(e.maxSdkKey || "").trim() ? [ "applovin-max" ] : [] ];
    }
    function eV(e = {}) {
        let a = getStartedAdvertisingProviderIds(e), n = new Set(getCompletedAdvertisingProviderIds(e));
        return a.length > 0 && a.every(e => n.has(e));
    }
    function advertisingConfigSnapshot(e = {}, a = getCompletedAdvertisingProviderIds(e).includes(e.provider) ? e.provider : getCompletedAdvertisingProviderIds(e)[0] || "none") {
        return "admob" === a ? {
            provider: "admob",
            admobAppId: e.admobAppId || ""
        } : "applovin-max" === a ? {
            provider: "applovin-max",
            maxSdkKey: e.maxSdkKey || ""
        } : {
            provider: "none"
        };
    }
    function eX(e, a = {}) {
        let n = e.groups || [];
        return n.length > 0 && n.every(e => eQ(e));
    }
    function eH(e, a) {
        let n = e.locales?.[a];
        return n || {
            name: e.agreementName || e.name || "",
            url: e.agreementUrl || e.privacyUrl || e.termsUrl || ""
        };
    }
    function eQ(e, a = "") {
        let n = e.languages || [], s = e.defaultLanguage || n[0];
        return !!e.name?.trim() && n.length > 0 && !!s && n.includes(s) && n.every(a => {
            let n = eH(e, a);
            return !!n.name?.trim() && /^https?:\/\/[^\s]+$/i.test(n.url?.trim() || "");
        });
    }
    function eW(e) {
        let a = String(e.ageThreshold || "").trim(), n = Number(a), s = String(e.kwsClientId || "").trim(), l = String(e.kwsClientSecret || "").trim(), t = String(e.kwsVerifySecret || "").trim(), i = String(e.kwsRedirect || "").trim();
        return !!a && Number.isInteger(n) && n >= 1 && n <= 18 && !!s && !!l && !!t && /^https?:\/\/[^\s]+$/i.test(i);
    }
    function isSupportModuleComplete(e = {}) {
        let a = e.onlineEnabled && !!String(e.onlineName || "").trim(), n = e.feedbackEnabled && (e.feedbackTypes || []).length > 0 && e.feedbackTypes.every(e => e.name?.trim() && e.description?.trim()), s = e.faqEnabled && (e.faqLanguages || []).length > 0 && (e.faqGroups || []).length > 0 && e.faqGroups.every(e => e.name?.trim()), l = e.smartEnabled && !!String(e.botName || "").trim() && !!String(e.fallbackText || "").trim() && (e.knowledgeItems || []).length > 0 && e.knowledgeItems.every(e => e.question?.trim());
        return !!(a || n || s || l);
    }
    function isConfigCardComplete(e, a = {}) {
        return "release" === e ? eG(a.release) : "login" === e ? eR(a.login || {}, a.release || {}) : "agreement" === e ? (a.agreement?.groups || []).some(e => eQ(e)) : "compliance" === e ? [ "ageThreshold", "kwsClientId", "kwsClientSecret", "kwsVerifySecret", "kwsRedirect" ].every(e => String(a.compliance?.[e] || "").trim()) && eW(a.compliance || {}) : "data" === e ? (a.data?.selected || []).length > 0 && e_(a.data || {}) : "advertising" === e ? eV(a.advertising || {}) : "support" === e && isSupportModuleComplete(a.support || {});
    }
    function isDataProviderComplete(e = {}, a) {
        let n = F.find(e => e.id === a);
        return !!n && n.params.every(n => String(e.values?.[a]?.[n.key] || "").trim());
    }
    function getCompletedLoginMethodsForPlatform(e = {}, a) {
        return eD(e.selected).filter(e => "guest" !== e).map(e => G.find(a => a.id === e)).filter(Boolean).filter(n => isLoginMethodCompleteForRuntime(e, n, a));
    }
    function getSupportModuleStates(e = {}) {
        return [ {
            id: "online",
            label: "在线客服",
            enabled: !!e.onlineEnabled,
            complete: !!e.onlineEnabled && !!String(e.onlineName || "").trim()
        }, {
            id: "feedback",
            label: "表单反馈",
            enabled: !!e.feedbackEnabled,
            complete: !!e.feedbackEnabled && (e.feedbackTypes || []).length > 0 && e.feedbackTypes.every(e => e.name?.trim() && e.description?.trim())
        }, {
            id: "faq",
            label: "FAQ",
            enabled: !!e.faqEnabled,
            complete: !!e.faqEnabled && (e.faqLanguages || []).length > 0 && (e.faqGroups || []).length > 0 && e.faqGroups.every(e => e.name?.trim())
        }, {
            id: "smart",
            label: "智能客服",
            enabled: !!e.smartEnabled,
            complete: !!e.smartEnabled && !!String(e.botName || "").trim() && !!String(e.fallbackText || "").trim() && (e.knowledgeItems || []).length > 0 && e.knowledgeItems.every(e => e.question?.trim())
        } ];
    }
    function loginConfigSnapshotForPlatform(e = {}, a = "") {
        let n = getCompletedLoginMethodsForPlatform(e, a).map(e => e.id), s = eD([ "guest", ...n ]);
        return {
            ...e,
            selected: s,
            values: Object.fromEntries(s.filter(a => e.values?.[a]).map(a => [ a, e.values[a] ]))
        };
    }
    function agreementConfigSnapshot(e = {}) {
        return {
            ...e,
            groups: (e.groups || []).filter(e => eQ(e))
        };
    }
    function supportConfigSnapshot(e = {}) {
        let a = new Set(getSupportModuleStates(e).filter(e => e.complete).map(e => e.id));
        return {
            ...e,
            onlineEnabled: a.has("online"),
            onlineName: a.has("online") ? e.onlineName || "" : "",
            feedbackEnabled: a.has("feedback"),
            feedbackTypes: a.has("feedback") ? e.feedbackTypes || [] : [],
            faqEnabled: a.has("faq"),
            faqLanguages: a.has("faq") ? e.faqLanguages || [] : [],
            faqGroups: a.has("faq") ? e.faqGroups || [] : [],
            faqItemsByGroup: a.has("faq") ? e.faqItemsByGroup || {} : {},
            smartEnabled: a.has("smart"),
            botName: a.has("smart") ? e.botName || "" : "",
            fallbackText: a.has("smart") ? e.fallbackText || "" : "",
            knowledgeItems: a.has("smart") ? e.knowledgeItems || [] : []
        };
    }
    function getConfigCardSummary(e, a = {}) {
        if ("release" === e) {
            if (!/^https?:\/\/[^\s]+$/i.test(String(a.release?.deliveryUrl || "").trim())) return [];
            return (a.release?.channels || []).filter(e => Z(e, a.release?.channelPaymentConfigs?.[e])).map(e => ({
                kind: "store",
                id: e,
                label: e$(e)?.name || e
            }));
        }
        if ("login" === e) {
            let n = Array.from(new Set((a.release?.channels || []).map(e => e$(e)?.platform).filter(Boolean)));
            return eD(a.login?.selected).filter(e => "guest" !== e).map(e => G.find(a => a.id === e)).filter(Boolean).filter(e => n.some(n => getCompletedLoginMethodsForPlatform(a.login || {}, n).some(a => a.id === e.id))).map(e => ({
                kind: "login",
                id: e.id,
                label: e.displayName
            }));
        }
        if ("agreement" === e) return (a.agreement?.groups || []).filter(e => eQ(e)).map(e => ({
            kind: "text",
            label: e.name
        }));
        if ("compliance" === e) return eW(a.compliance || {}) ? [ {
            kind: "text",
            label: "KWS"
        } ] : [];
        if ("data" === e) return getCompletedDataProviderIds(a.data || {}).map(e => ({
            kind: "text",
            label: F.find(a => a.id === e)?.name || e
        }));
        if ("advertising" === e) return getCompletedAdvertisingProviderIds(a.advertising || {}).map(e => ({
            kind: "text",
            label: eu(e)
        }));
        return "support" === e ? getSupportModuleStates(a.support || {}).filter(e => e.complete).map(e => ({
            kind: "text",
            label: e.label
        })) : [];
    }
    function getCapabilityConfigurationStatus(e, a = {}, n = "") {
        let s = e$(n), l = s?.platform || "", i = {
            ready: !1,
            defaultIncluded: !1,
            missing: []
        };
        if (!n) return {
            ...i,
            missing: [ "请先选择发行渠道" ]
        };
        if ("login" === e) {
            let e = eD(a.login?.selected).filter(e => "guest" !== e).map(e => G.find(a => a.id === e)).filter(Boolean), n = getCompletedLoginMethodsForPlatform(a.login || {}, l), s = new Set(n.map(e => e.id)), t = e.filter(e => !s.has(e.id)).flatMap(e => getLoginMethodMissingScopes(a.login || {}, e, l).map(n => `${e.displayName} ${getLoginScopeLabel(n)}`));
            return {
                ready: n.length > 0,
                defaultIncluded: n.length > 0,
                missing: e.length ? t : [ "至少添加一种非 Guest 登录方式" ]
            };
        }
        if ("payment" === e) {
            let e = [], s = /^https?:\/\/[^\s]+$/i.test(String(a.release?.deliveryUrl || "").trim()), l = Z(n, a.release?.channelPaymentConfigs?.[n]);
            l || e.push(`${e$(n)?.name || "当前渠道"}支付参数`), s || e.push("发货地址");
            return {
                ready: l && s,
                defaultIncluded: l && s,
                missing: e
            };
        }
        if ("agreement" === e) {
            let e = a.agreement?.groups || [], n = e.filter(e => eQ(e)), s = e.filter(e => !eQ(e)).map(e => e.name || "未命名协议");
            return {
                ready: n.length > 0,
                defaultIncluded: n.length > 0,
                missing: n.length ? s : [ "至少新增一个完整协议" ]
            };
        }
        if ("compliance" === e) {
            let e = {
                ageThreshold: "年龄阈值",
                kwsClientId: "KWS Client ID",
                kwsClientSecret: "KWS Client Secret",
                kwsVerifySecret: "KWS Verify Secret",
                kwsRedirect: "KWS Redirect"
            }, n = Object.keys(e).filter(n => !String(a.compliance?.[n] || "").trim()).map(a => e[a]), s = eW(a.compliance || {});
            return {
                ready: s,
                defaultIncluded: s,
                missing: n.length ? n : s ? [] : [ "KWS 参数格式" ]
            };
        }
        if ("support" === e) {
            let e = getSupportModuleStates(a.support || {}), n = e.filter(e => e.complete), s = e.filter(e => e.enabled && !e.complete).map(e => e.label);
            return {
                ready: n.length > 0,
                defaultIncluded: n.length > 0,
                missing: n.length ? s : [ "至少配置一个客服模块" ]
            };
        }
        if ("ops-data" === e) {
            let e = getStartedDataProviderIds(a.data || {}), n = getCompletedDataProviderIds(a.data || {}), s = e.filter(e => !n.includes(e)).map(e => F.find(a => a.id === e)?.name || e);
            return {
                ready: n.length > 0,
                defaultIncluded: n.length > 0,
                missing: e.length ? s : [ "至少配置一种归因数据平台" ]
            };
        }
        if ("advertising" === e) {
            let e = getStartedAdvertisingProviderIds(a.advertising || {}), n = getCompletedAdvertisingProviderIds(a.advertising || {}), s = e.filter(e => !n.includes(e)).map(e => eu(e));
            return {
                ready: n.length > 0,
                defaultIncluded: n.length > 0,
                missing: e.length ? s.map(e => `${e} 参数`) : [ "至少配置一个广告平台" ]
            };
        }
        return i;
    }
    function getCapabilityConfiguredPreview(e, a = {}) {
        let n = "payment" === e ? "release" : "ops-data" === e ? "data" : e, s = getConfigCardSummary(n, a);
        return s.length ? `已配置：${s.map(e => e.label).join("、")}` : "暂无已配置内容";
    }
    function getCapabilityConfiguredLogos(e, a = {}) {
        if ("login" !== e && "payment" !== e) return [];
        return getConfigCardSummary("payment" === e ? "release" : "login", a);
    }
    function eJ({checked: e, onChange: n, label: s, disabled: l = !1}) {
        return (0, a.jsx)("button", {
            type: "button",
            className: `mgp-switch ${e ? "on" : ""}`,
            role: "switch",
            "aria-checked": e,
            "aria-label": s,
            disabled: l,
            onClick: () => n(!e),
            children: (0, a.jsx)("span", {})
        });
    }
    function eZ({eyebrow: e, title: n, description: s, action: l}) {
        return (0, a.jsxs)("div", {
            className: "mgp-page-heading",
            children: [ (0, a.jsxs)("div", {
                children: [ e ? (0, a.jsx)("span", {
                    children: e
                }) : null, (0, a.jsx)("h1", {
                    children: n
                }), (0, a.jsx)("p", {
                    children: s
                }) ]
            }), l ]
        });
    }
    function SdkWorkbenchTabs({active: e, onConfig: n, onDownload: s}) {
        return (0, a.jsxs)("nav", {
            className: "mgp-sdk-workbench-tabs",
            "aria-label": "SDK工作台",
            children: [ (0, a.jsx)("button", {
                type: "button",
                className: "config" === e ? "active" : "",
                "data-sdk-workbench-tab": "config",
                "aria-current": "config" === e ? "page" : void 0,
                onClick: n,
                children: "SDK配置"
            }), (0, a.jsx)("button", {
                type: "button",
                className: "download" === e ? "active" : "",
                "data-sdk-workbench-tab": "download",
                "aria-current": "download" === e ? "page" : void 0,
                onClick: s,
                children: "SDK下载"
            }) ]
        });
    }
    function eY({label: e, value: s, onChange: l, helper: i, required: t, type: r = "text", placeholder: d, action: o, error: c}) {
        let [m, p] = (0, n.useState)(!1), h = "password" === r;
        return (0, a.jsxs)("label", {
            className: `mgp-field ${c ? "has-error" : ""}`,
            children: [ (0, a.jsxs)("span", {
                children: [ e, t ? (0, a.jsx)("em", {
                    children: "*"
                }) : null ]
            }), (0, a.jsxs)("div", {
                children: [ (0, a.jsx)("input", {
                    type: h && m ? "text" : r,
                    value: s,
                    placeholder: d,
                    "aria-invalid": !!c,
                    onChange: e => l(e.target.value)
                }), h ? (0, a.jsx)("button", {
                    type: "button",
                    className: `mgp-secret-visibility ${m ? "is-visible" : ""}`,
                    "aria-label": m ? `隐藏${e}` : `显示${e}`,
                    "aria-pressed": m,
                    onClick: e => {
                        e.preventDefault(), p(e => !e);
                    },
                    children: (0, a.jsx)(SecretEyeIcon, {
                        size: 16
                    })
                }) : o ]
            }), c ? (0, a.jsx)("small", {
                className: "mgp-field-error",
                children: c
            }) : null, !c && i ? (0, a.jsx)("small", {
                children: i
            }) : null ]
        });
    }
    function e0({label: e, value: s, fingerprint: l = "", onChange: i, helper: t, required: r, error: d, compact: c = !1, accept: accept = ".json,application/json", confirmOnDifferentName: confirmOnDifferentName = !1}) {
        let o = (0, n.useRef)(null), [m, p] = (0, n.useState)(null), [h, u] = (0, 
        n.useState)(""), g = async e => {
            let a = await e.arrayBuffer(), n = await crypto.subtle.digest("SHA-256", a);
            return Array.from(new Uint8Array(n)).map(e => e.toString(16).padStart(2, "0")).join("");
        }, x = async e => {
            let a = e.target.files?.[0];
            if (e.target.value = "", !a) return;
            u("");
            try {
                let e = await g(a), n = {
                    name: a.name,
                    size: a.size,
                    type: a.type || "application/json",
                    sha256: e
                };
                if (s && l && l === e && (!confirmOnDifferentName || s === a.name)) return void u("新文件与当前文件内容一致，无需覆盖。");
                s ? p({
                    file: a,
                    meta: n
                }) : i(a.name, n);
            } catch (e) {
                u("文件读取失败，请重新选择文件。");
            }
        };
        return (0, a.jsxs)("div", {
            className: `mgp-demo-upload ${c ? "compact" : ""} ${d ? "has-error" : ""}`,
            children: [ (0, a.jsxs)("span", {
                children: [ e, r ? (0, a.jsx)("em", {
                    children: "*"
                }) : null ]
            }), (0, a.jsx)("input", {
                ref: o,
                type: "file",
                accept: accept,
                tabIndex: -1,
                "aria-hidden": "true",
                onChange: x
            }), (0, a.jsxs)("div", {
                className: "mgp-demo-upload-control",
                children: [ (0, a.jsxs)("button", {
                    type: "button",
                    onClick: () => o.current?.click(),
                    children: [ (0, a.jsx)(M.UploadCloud, {
                        size: 15
                    }), "Upload" ]
                }), (0, a.jsx)("span", {
                    className: s ? "has-file" : "",
                    children: s || "未选择文件"
                }) ]
            }), d ? (0, a.jsx)("small", {
                className: "mgp-field-error",
                children: d
            }) : null, !d && t ? (0, a.jsx)("small", {
                children: t
            }) : null, h ? (0, a.jsx)("small", {
                className: "mgp-upload-consistency-notice",
                role: "status",
                children: h
            }) : null, m ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-upload-overwrite-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-upload-overwrite-modal",
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-labelledby": "upload-overwrite-title",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            id: "upload-overwrite-title",
                            children: "确认覆盖原文件"
                        }), (0, a.jsx)("p", {
                            children: m.file.name !== s ? "检测到新文件名称与当前文件不同，覆盖后原文件将被替换。" : "新文件与当前文件内容不一致，覆盖后原文件将被替换。"
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-upload-overwrite-files",
                        children: [ (0, a.jsxs)("span", {
                            children: [ (0, a.jsx)("small", {
                                children: "当前文件"
                            }), (0, a.jsx)("strong", {
                                children: s
                            }) ]
                        }), (0, a.jsxs)("span", {
                            children: [ (0, a.jsx)("small", {
                                children: "新文件"
                            }), (0, a.jsx)("strong", {
                                children: m.file.name
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => p(null),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: () => {
                                i(m.file.name, m.meta), p(null), u("已选择新文件，保存配置后完成覆盖。");
                            },
                            children: "确认覆盖"
                        }) ]
                    }) ]
                })
            }) : null ]
        });
    }
    function e1({label: e, value: n, onChange: s, helper: l, required: i, placeholder: t, error: r}) {
        return (0, a.jsxs)("label", {
            className: `mgp-field mgp-textarea-field ${r ? "has-error" : ""}`,
            children: [ (0, a.jsxs)("span", {
                children: [ e, i ? (0, a.jsx)("em", {
                    children: "*"
                }) : null ]
            }), (0, a.jsx)("textarea", {
                value: n,
                placeholder: t,
                "aria-invalid": !!r,
                onChange: e => s(e.target.value)
            }), r ? (0, a.jsx)("small", {
                className: "mgp-field-error",
                children: r
            }) : null, !r && l ? (0, a.jsx)("small", {
                children: l
            }) : null ]
        });
    }
    function e2({children: e}) {
        return (0, a.jsx)("p", {
            className: "mgp-config-error",
            role: "alert",
            children: e
        });
    }
    function e4({methodId: e}) {
        let n = null;
        return "guest" === e && (n = (0, a.jsx)(L.UserRound, {
            size: 16
        })), "email" === e && (n = (0, a.jsx)(I, {
            size: 16
        })), "apple" === e && (n = (0, a.jsx)("img", {
            src: eP,
            alt: ""
        })), "google" === e && (n = (0, a.jsx)("span", {
            children: "G"
        })), "kakao" === e && (n = (0, a.jsx)("img", {
            src: "./assets/brands/kakao.svg",
            alt: ""
        })), "facebook" === e && (n = (0, a.jsx)("span", {
            children: "f"
        })), "twitter" === e && (n = (0, a.jsx)("span", {
            children: "X"
        })), "snapchat" === e && (n = (0, a.jsx)(y, {
            size: 17
        })), "line" === e && (n = (0, a.jsx)("span", {
            children: "LINE"
        })), "naver" === e && (n = (0, a.jsx)("span", {
            children: "N"
        })), "tiktok" === e && (n = (0, a.jsx)(D, {
            size: 17
        })), "discord" === e && (n = (0, a.jsx)(f.Gamepad2, {
            size: 17
        })), (0, a.jsx)("span", {
            className: `mgp-login-brand ${e}`,
            "aria-hidden": "true",
            children: n
        });
    }
    function e8({checked: e, onChange: n, title: s, description: l, meta: i, brand: t, disabled: r = !1}) {
        return (0, a.jsxs)("label", {
            className: `mgp-check-card ${e ? "checked" : ""} ${t ? "with-brand" : ""} ${r ? "disabled" : ""}`,
            children: [ (0, a.jsx)("input", {
                type: "checkbox",
                checked: e,
                disabled: r,
                onChange: e => n(e.target.checked)
            }), (0, a.jsx)("span", {
                className: "mgp-check-box",
                children: e ? (0, a.jsx)(o.Check, {
                    size: 14
                }) : null
            }), t, (0, a.jsxs)("span", {
                className: "mgp-check-card-copy",
                children: [ (0, a.jsx)("strong", {
                    children: s
                }), l ? (0, a.jsx)("small", {
                    children: l
                }) : null ]
            }), i ? (0, a.jsx)("b", {
                children: i
            }) : null ]
        });
    }
    function e3({href: e, offlineHref: n = "", children: s = "帮助文档"}) {
        return (0, a.jsxs)("a", {
            className: "mgp-help-link",
            href: e,
            target: "_blank",
            rel: "noreferrer",
            onClick: e => {
                n && "file:" === window.location.protocol && (e.currentTarget.href = n);
            },
            children: [ s, (0, a.jsx)(j.ExternalLink, {
                size: 14
            }) ]
        });
    }
    function e5({activeView: e, onView: n, completeCount: s, children: l}) {
        let i = [ {
            title: "媒体采买",
            icon: r.BarChart3
        }, {
            title: "资产安全",
            icon: P.ShieldCheck
        }, {
            title: "测试服务",
            icon: f.Gamepad2
        }, {
            title: "广告投放",
            icon: u.CreditCard
        }, {
            title: "发行服务",
            icon: w.Layers3,
            expanded: !0
        } ];
        return (0, a.jsxs)("div", {
            className: "mgp-app",
            children: [ (0, a.jsxs)("header", {
                className: "mgp-topbar",
                children: [ (0, a.jsxs)("div", {
                    className: "mgp-brand",
                    "aria-label": "MeetGames",
                    children: [ (0, a.jsx)("span", {
                        children: "Meet"
                    }), (0, a.jsx)("b", {
                        children: "games"
                    }) ]
                }), (0, a.jsxs)("div", {
                    className: "mgp-top-actions",
                    children: [ (0, a.jsxs)("button", {
                        type: "button",
                        children: [ (0, a.jsx)(h.CircleHelp, {
                            size: 17
                        }), "帮助中心" ]
                    }), (0, a.jsxs)("button", {
                        type: "button",
                        className: "mgp-icon-button",
                        "aria-label": "消息通知",
                        children: [ (0, a.jsx)(d.Bell, {
                            size: 18
                        }), (0, a.jsx)("i", {}) ]
                    }), (0, a.jsxs)("button", {
                        type: "button",
                        className: "mgp-user",
                        children: [ (0, a.jsx)(L.UserRound, {
                            size: 17
                        }), (0, a.jsx)("span", {
                            children: "Anna"
                        }), (0, a.jsx)(m.ChevronDown, {
                            size: 14
                        }) ]
                    }) ]
                }) ]
            }), (0, a.jsxs)("aside", {
                className: "mgp-sidebar",
                children: [ (0, a.jsx)("div", {
                    className: "mgp-service-nav",
                    "aria-label": "产品服务导航",
                    children: i.map(e => {
                        let n = e.icon;
                        return (0, a.jsxs)("button", {
                            type: "button",
                            className: e.expanded ? "expanded" : "",
                            children: [ (0, a.jsx)(n, {
                                size: 16
                            }), (0, a.jsx)("span", {
                                children: e.title
                            }), (0, a.jsx)(m.ChevronDown, {
                                size: 14
                            }) ]
                        }, e.title);
                    })
                }), (0, a.jsx)("div", {
                    className: "mgp-sidebar-group-label",
                    children: "SDK"
                }), (0, a.jsx)("nav", {
                    "aria-label": "SDK主导航",
                    children: [ {
                        id: "config",
                        title: "配置中心"
                    }, {
                        id: "operations-plan",
                        title: "生成及运营中心"
                    }, {
                        id: "ops",
                        title: "运行监控"
                    } ].map(s => (0, a.jsx)("button", {
                        type: "button",
                        className: e === s.id ? "active" : "",
                        "data-nav-id": s.id,
                        onClick: () => n(s.id),
                        children: s.title
                    }, s.id))
                }) ]
            }), (0, a.jsx)("main", {
                className: "mgp-main",
                children: l
            }) ]
        });
    }
    function e6({title: e, description: s, items: l, selected: i, requiredIds: t = [], codeOnly: r = !1, onCancel: d, onSave: o}) {
        let initialSelectionRef = (0, n.useRef)(Array.from(new Set([ ...t, ...i ])).sort()), [c, m] = (0, n.useState)(() => Array.from(new Set([ ...t, ...i ]))), [closePromptOpen, setClosePromptOpen] = (0, 
        n.useState)(!1), normalizedSelection = () => Array.from(new Set([ ...t, ...c ])).sort(), requestClose = () => {
            JSON.stringify(normalizedSelection()) === JSON.stringify(initialSelectionRef.current) ? d() : setClosePromptOpen(!0);
        }, saveSelection = () => o(Array.from(new Set([ ...t, ...c ])));
        return (0, a.jsxs)(a.Fragment, {
            children: [ (0, a.jsx)("div", {
            className: "mgp-modal-backdrop",
            role: "presentation",
            children: (0, a.jsxs)("section", {
                className: "mgp-modal mgp-config-card-modal mgp-config-selection-modal",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": e,
                children: [ (0, a.jsxs)("header", {
                    children: [ (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("h2", {
                            children: e
                        }), (0, a.jsx)("p", {
                            children: s
                        }) ]
                    }), (0, a.jsx)("button", {
                        type: "button",
                        onClick: requestClose,
                        "aria-label": "关闭",
                        children: (0, a.jsx)(T.X, {
                            size: 18
                        })
                    }) ]
                }), (0, a.jsx)("div", {
                    className: "mgp-modal-body",
                    children: (0, a.jsx)("div", {
                        className: "mgp-modal-options",
                        children: l.map(e => {
                            let n = t.includes(e.id);
                            return (0, a.jsx)(e8, {
                                checked: c.includes(e.id),
                                title: r ? e.displayName || e.code : e.name || e.title,
                                description: r ? null : e.description,
                                meta: n ? "默认必选" : r ? null : e.code,
                                brand: r ? (0, a.jsx)(e4, {
                                    methodId: e.id
                                }) : null,
                                disabled: n,
                                onChange: () => {
                                    var a;
                                    return a = e.id, void (!t.includes(a) && m(e => e.includes(a) ? e.filter(e => e !== a) : [ ...e, a ]));
                                }
                            }, e.id);
                        })
                    })
                }), (0, a.jsxs)("footer", {
                    children: [ (0, a.jsxs)("span", {
                        children: [ "已选择 ", c.length, " 项" ]
                    }), (0, a.jsx)("div", {
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: saveSelection,
                            children: "确认添加"
                        })
                    }) ]
                }) ]
            })
        }), closePromptOpen ? (0, a.jsx)(UnsavedChangesDialog, {
            title: `${e}尚未保存`,
            description: `已选择的${e}还没有保存，是否保存本次修改？`,
            onSave: saveSelection,
            onDiscard: d,
            onCancel: () => setClosePromptOpen(!1)
        }) : null ]
        });
    }
    function UnsavedChangesDialog({title: e = "参数尚未保存", description: s = "当前修改尚未保存，是否保存本次修改？", saveLabel: l = "保存修改", discardLabel: i = "不保存", cancelLabel: t = "取消", onSave: r, onDiscard: d, onCancel: o}) {
        return (0, a.jsx)("div", {
            className: "mgp-modal-backdrop mgp-unsaved-changes-backdrop",
            role: "presentation",
            children: (0, a.jsxs)("section", {
                className: "mgp-modal mgp-unsaved-changes-modal",
                role: "alertdialog",
                "aria-modal": "true",
                "aria-label": e,
                children: [ (0, a.jsxs)("header", {
                    children: [ (0, a.jsx)("h2", {
                        children: e
                    }), (0, a.jsx)("p", {
                        children: s
                    }) ]
                }), (0, a.jsxs)("footer", {
                    children: [ (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-button secondary",
                        onClick: o,
                        children: t
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-button secondary mgp-unsaved-discard",
                        onClick: d,
                        children: i
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-button primary",
                        onClick: r,
                        children: l
                    }) ]
                }) ]
            })
        });
    }
    function e7({stepId: e}) {
        let n = R.find(a => a.id === e);
        return n ? (0, a.jsxs)("div", {
            className: "mgp-config-module-heading",
            children: [ (0, a.jsx)("h3", {
                className: "mgp-plain-section-title",
                children: n.title
            }), (0, a.jsx)("p", {
                children: n.description
            }) ]
        }) : null;
    }
    function e9({config: e, releaseConfig: s, onChange: l, onOpenChooser: i, showErrors: t}) {
        let [r, d] = (0, n.useState)({}), [visibleLoginSecrets, setVisibleLoginSecrets] = (0, n.useState)({}), o = eD(e.selected).map(e => G.find(a => a.id === e)).filter(Boolean), p = e.selected?.includes("guest"), h = o.some(e => "guest" !== e.id), selectedScopes = Array.from(new Set([ "common", ...(s.channels || []).map(e => e$(e)?.platform).filter(e => "Android" === e || "iOS" === e) ]));
        return (0, a.jsxs)("div", {
            className: "mgp-config-body",
            children: [ (0, a.jsx)(e7, {
                stepId: "login"
            }), (0, a.jsxs)("div", {
                className: `mgp-login-table ${t && (!p || !h) ? "has-error" : ""}`,
                role: "table",
                "aria-label": "登录方式配置",
                children: [ o.length ? (0, a.jsxs)("div", {
                    className: "mgp-login-head",
                    role: "row",
                    children: [ (0, a.jsx)("span", {
                        children: "登录方式"
                    }), (0, a.jsx)("span", {
                        children: "参数"
                    }) ]
                }) : null, o.map((n, i) => {
                    let o = selectedScopes.map(scope => {
                        let params = getLoginPlatformParameters(n, scope), filled = params.filter(a => !getLoginParameterError(a, getLoginPlatformValue(e.values[n.id], scope, a.key))).length, complete = !params.length || filled === params.length, stateKey = `${n.id}-${scope}`, expanded = !!params.length && !!r[stateKey], detailsId = `login-params-${n.id}-${scope.toLowerCase()}`;
                        return {
                            scope: scope,
                            params: params,
                            filled: filled,
                            complete: complete,
                            hasError: !1,
                            hasParams: params.length > 0,
                            stateKey: stateKey,
                            expanded: expanded,
                            detailsId: detailsId,
                            toggle: () => d(e => ({
                                ...e,
                                [stateKey]: !e[stateKey]
                            }))
                        };
                    });
                    let parameterScopes = o.filter(e => e.hasParams), p = parameterScopes.length > 0, u = !p || parameterScopes.every(e => e.complete), g = !!t;
                    o = o.map(e => ({
                        ...e,
                        hasError: g && e.hasParams && !e.complete
                    }));
                    parameterScopes = o.filter(e => e.hasParams);
                    let x = o.filter(e => e.expanded), totalFilled = parameterScopes.reduce((e, a) => e + a.filled, 0), totalParams = parameterScopes.reduce((e, a) => e + a.params.length, 0), allComplete = parameterScopes.every(e => e.complete), y = `login-required-${n.id}`;
                    return (0, a.jsxs)("div", {
                        className: `mgp-login-row checked ${p ? "has-params" : ""} ${g ? "has-error" : ""}`,
                        role: "row",
                        children: [ (0, a.jsxs)("span", {
                            className: "mgp-login-method",
                            children: [ (0, a.jsx)(e4, {
                                methodId: n.id
                            }), (0, a.jsxs)("span", {
                                className: "mgp-login-method-copy",
                                children: (0, a.jsx)("b", {
                                    children: n.displayName
                                })
                            }), "guest" === n.id ? (0, a.jsxs)("span", {
                                className: "mgp-login-required-mark",
                                children: [ (0, a.jsx)("span", {
                                    className: "mgp-login-required-star",
                                    "aria-hidden": "true",
                                    children: "*"
                                }), (0, a.jsxs)("button", {
                                    type: "button",
                                    className: "mgp-login-required-info",
                                    "aria-label": "Guest 默认必选",
                                    "aria-describedby": y,
                                    onClick: e => e.stopPropagation(),
                                    children: [ (0, a.jsx)(C, {
                                        size: 13,
                                        "aria-hidden": "true"
                                    }), (0, a.jsx)("span", {
                                        id: y,
                                        role: "tooltip",
                                        children: "默认必选"
                                    }) ]
                                }) ]
                            }) : null ]
                        }), (0, a.jsx)("div", {
                            className: "mgp-login-platforms",
                            role: "group",
                            "aria-label": `${n.displayName}参数`,
                            children: p ? (0, a.jsxs)("button", {
                                type: "button",
                                className: `mgp-login-platform-toggle mgp-login-platform-summary ${allComplete ? "complete" : ""}`,
                                "aria-expanded": x.length > 0,
                                "aria-controls": parameterScopes.map(e => e.detailsId).join(" "),
                                "aria-label": `${x.length ? "收起" : "展开"}${n.displayName}参数`,
                                onClick: () => d(e => ({
                                    ...e,
                                    ...Object.fromEntries(parameterScopes.map(e => [ e.stateKey, 0 === x.length ]))
                                })),
                                children: [ (0, a.jsx)("span", {
                                    className: "mgp-login-platform-status",
                                    children: allComplete ? (0, a.jsxs)(a.Fragment, {
                                        children: [ (0, a.jsx)(c.CheckCircle2, {
                                            size: 13
                                        }), "已配置" ]
                                    }) : 0 === totalFilled ? "未配置" : (0, a.jsxs)(a.Fragment, {
                                        children: [ "待完善 ", totalFilled, "/", totalParams ]
                                    })
                                }), (0, a.jsx)(m.ChevronDown, {
                                    size: 14,
                                    className: x.length ? "expanded" : ""
                                }) ]
                            }) : (0, a.jsxs)("span", {
                                className: "mgp-login-platform-empty mgp-login-platform-summary complete",
                                children: [ (0, a.jsx)(c.CheckCircle2, {
                                    size: 13
                                }), (0, a.jsx)("span", {
                                    children: "无需配置"
                                }) ]
                            })
                        }), x.length ? (0, a.jsxs)("div", {
                            className: "mgp-login-details mgp-login-platform-details",
                            children: [ [ "guest", "email", "apple" ].includes(n.id) ? null : (0, a.jsxs)("a", {
                                className: "mgp-help-link mgp-login-expanded-doc",
                                href: n.help || "https://docs.meetgames.com/sdk/login",
                                target: "_blank",
                                rel: "noreferrer",
                                "aria-label": `查看${n.name}帮助文档`,
                                children: [ "说明文档", (0, a.jsx)(j.ExternalLink, {
                                    size: 14
                                }) ]
                            }), x.map(p => (0, a.jsxs)("section", {
                                className: "mgp-login-platform-section",
                                id: p.detailsId,
                                children: [ (0, a.jsxs)("header", {
                                    children: (0, a.jsx)("strong", {
                                        children: getLoginScopeLabel(p.scope)
                                    })
                                }), (0, a.jsx)("div", {
                                    className: "mgp-inline-param-grid",
                                    children: p.params.map(s => {
                                        let r = getLoginPlatformValue(e.values[n.id], p.scope, s.key);
                                        let fieldError = getLoginParameterError(s, r), showFieldError = !!fieldError && (t || !!String(r).length), secretKey = `${n.id}-${p.scope}-${s.key}`, secretVisible = !!visibleLoginSecrets[secretKey];
                                        return (0, a.jsxs)("label", {
                                            className: `mgp-login-parameter-field ${showFieldError ? "has-error" : ""}`,
                                            children: [ (0, a.jsxs)("span", {
                                                className: "mgp-login-parameter-label",
                                                children: [ (0, a.jsx)("span", {
                                                    children: s.label
                                                }), (0, a.jsx)("code", {
                                                    children: s.key
                                                }) ]
                                            }), (0, a.jsxs)("div", {
                                                className: "mgp-secret-input-wrap",
                                                children: [ (0, a.jsx)("input", {
                                                    type: s.secret && !secretVisible ? "password" : "text",
                                                    value: r,
                                                    placeholder: `请输入${s.label}`,
                                                    autoComplete: "off",
                                                    spellCheck: !1,
                                                    required: !0,
                                                    "aria-required": "true",
                                                    "aria-label": `${n.displayName} ${getLoginScopeLabel(p.scope)} ${s.label}`,
                                                    "aria-invalid": showFieldError ? "true" : "false",
                                                    onChange: a => updateLoginPlatformValue(e, l, n.id, p.scope, s.key, a.target.value),
                                                    onBlur: a => {
                                                        let trimmedValue = a.target.value.trim();
                                                        trimmedValue !== a.target.value && updateLoginPlatformValue(e, l, n.id, p.scope, s.key, trimmedValue);
                                                    }
                                                }), s.secret ? (0, a.jsx)("button", {
                                                    type: "button",
                                                    className: `mgp-secret-visibility ${secretVisible ? "is-visible" : ""}`,
                                                    "aria-label": secretVisible ? `隐藏${n.displayName} ${s.label}` : `显示${n.displayName} ${s.label}`,
                                                    "aria-pressed": secretVisible,
                                                    onClick: () => setVisibleLoginSecrets(e => ({
                                                        ...e,
                                                        [secretKey]: !e[secretKey]
                                                    })),
                                                    children: (0, a.jsx)(SecretEyeIcon, {
                                                        size: 16
                                                    })
                                                }) : null ]
                                            }), showFieldError ? (0, a.jsx)("small", {
                                                className: "mgp-login-parameter-error",
                                                role: "alert",
                                                children: fieldError
                                            }) : null ]
                                        }, `${p.scope}-${s.key}`);
                                    })
                                }) ]
                            }, p.scope)) ]
                        }) : null ]
                    }, n.id);
                }), (0, a.jsx)("button", {
                    type: "button",
                    className: "mgp-add-row mgp-list-add-row",
                    onClick: i,
                    "aria-label": "添加登录方式",
                    title: "添加登录方式",
                    children: (0, a.jsx)(K.Plus, {
                        size: 18
                    })
                }) ]
            }), t && !p ? (0, a.jsx)(e2, {
                children: "Guest 是默认且必须保留的登录方式"
            }) : null, t && p && !h ? (0, a.jsx)(e2, {
                children: "请至少再添加一种登录方式"
            }) : null ]
        });
    }
    function ae({config: e, onChange: l, showErrors: r}) {
        e = {
            ...e,
            onlineEnabled: !0,
            feedbackEnabled: !0,
            faqEnabled: !0,
            smartEnabled: !0
        };
        let d = [ "简体中文", "繁体中文", "英语", "韩语", "阿拉伯语" ], [o, c] = (0, n.useState)("./assets/faq-support-background.png"), [p, u] = (0, 
        n.useState)(null), [g, x] = (0, n.useState)(null), [j, b] = (0, n.useState)(!1), [f, y] = (0, 
        n.useState)(null), [v, N] = (0, n.useState)(null), [C, S] = (0, n.useState)(e.faqLanguages), [w, A] = (0, 
        n.useState)([]), [$, I] = (0, n.useState)([]), [D, E] = (0, n.useState)(e.faqLanguages[0] || "简体中文"), [q, z] = (0, 
        n.useState)({
            online: e.onlineEnabled,
            feedback: e.feedbackEnabled,
            faq: e.faqEnabled,
            smart: e.smartEnabled
        }), [P, O] = (0, n.useState)(e.faqLanguages[1] || ""), [M, L] = (0, n.useState)(e.faqGroupTranslations || {}), R = e.faqGroups.find(e => e.id === g), G = e.faqItemsByGroup || {}, U = R && G[R.id] || [], F = (a, n, s) => {
            l({
                [a]: e[a].map(e => e.id === n ? {
                    ...e,
                    ...s
                } : e)
            });
        }, _ = (a, n) => {
            l({
                [a]: e[a].filter(e => e.id !== n)
            });
        }, B = a => {
            if (!R) return;
            let n = "function" == typeof a ? a(U) : a;
            l({
                faqItemsByGroup: {
                    ...G,
                    [R.id]: n
                },
                faqGroups: e.faqGroups.map(e => e.id === R.id ? {
                    ...e,
                    count: n.length,
                    status: n.length && n.every(e => "已翻译" === e.status) ? "已翻译" : "待翻译"
                } : e)
            });
        }, V = (e, a) => {
            B(n => n.map(n => n.id === e ? {
                ...n,
                ...a
            } : n));
        }, X = ({title: e, description: n}) => (0, a.jsx)("div", {
            className: "mgp-support-title-row",
            children: (0, a.jsxs)("div", {
                className: "mgp-support-title-static",
                children: [ (0, a.jsx)("h4", {
                    children: e
                }), (0, a.jsx)("small", {
                    className: "mgp-support-title-description",
                    children: n
                }) ]
            })
        }), H = e.faqLanguages.slice(1);
        return (0, a.jsxs)("div", {
            className: "mgp-config-body",
            children: [ (0, a.jsx)(e7, {
                stepId: "support"
            }), (0, a.jsxs)("div", {
                className: "mgp-support-stack",
                children: [ (0, a.jsxs)("section", {
                    className: `mgp-support-module ${e.onlineEnabled ? "is-enabled" : "is-disabled"} ${e.onlineEnabled && q.online ? "is-expanded" : ""}`,
                    children: [ X({
                        moduleKey: "online",
                        enabledKey: "onlineEnabled",
                        enabled: e.onlineEnabled,
                        title: "在线客服配置",
                        description: "配置玩家发起实时会话时展示的客服名称。"
                    }), e.onlineEnabled && q.online ? (0, a.jsx)("div", {
                        className: "mgp-support-content",
                        children: (0, a.jsx)("div", {
                            className: "mgp-form-grid",
                            children: (0, a.jsx)(eY, {
                                label: "在线客服昵称",
                                required: e.onlineEnabled,
                                value: e.onlineName,
                                error: r && e.onlineEnabled && !e.onlineName.trim() ? "请填写在线客服昵称" : "",
                                onChange: e => l({
                                    onlineName: e.slice(0, 20)
                                })
                            })
                        })
                    }) : null ]
                }), (0, a.jsxs)("section", {
                    className: `mgp-support-module ${e.feedbackEnabled ? "is-enabled" : "is-disabled"} ${e.feedbackEnabled && q.feedback ? "is-expanded" : ""}`,
                    children: [ X({
                        moduleKey: "feedback",
                        enabledKey: "feedbackEnabled",
                        enabled: e.feedbackEnabled,
                        title: "表单反馈",
                        description: "玩家可选择问题类型并提交文字反馈。"
                    }), e.feedbackEnabled && q.feedback ? (0, a.jsx)("div", {
                        className: "mgp-support-content",
                        children: (0, a.jsxs)("div", {
                            className: "mgp-edit-table",
                            children: [ (0, a.jsxs)("div", {
                                className: "mgp-edit-head",
                                children: [ (0, a.jsx)("span", {
                                    children: "反馈类型名称"
                                }), (0, a.jsx)("span", {
                                    children: "反馈类型描述"
                                }), (0, a.jsx)("span", {
                                    children: "操作"
                                }) ]
                            }), e.feedbackTypes.map(e => (0, a.jsxs)("div", {
                                className: "mgp-edit-row",
                                children: [ (0, a.jsx)("input", {
                                    className: r && !e.name.trim() ? "has-error" : "",
                                    value: e.name,
                                    placeholder: "例如：账号问题",
                                    "aria-invalid": r && !e.name.trim(),
                                    onChange: a => F("feedbackTypes", e.id, {
                                        name: a.target.value
                                    })
                                }), (0, a.jsx)("input", {
                                    className: r && !e.description.trim() ? "has-error" : "",
                                    value: e.description,
                                    placeholder: "请输入玩家可见的说明",
                                    "aria-invalid": r && !e.description.trim(),
                                    onChange: a => F("feedbackTypes", e.id, {
                                        description: a.target.value
                                    })
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action danger",
                                    onClick: () => _("feedbackTypes", e.id),
                                    children: "删除"
                                }) ]
                            }, e.id)), (0, a.jsxs)("button", {
                                type: "button",
                                className: "mgp-add-inline",
                                onClick: () => l({
                                    feedbackTypes: [ ...e.feedbackTypes, {
                                        id: `feedback-${Date.now()}`,
                                        name: "",
                                        description: ""
                                    } ]
                                }),
                                children: [ (0, a.jsx)(K.Plus, {
                                    size: 15
                                }), "添加反馈类型" ]
                            }), r && e.feedbackEnabled && (!e.feedbackTypes.length || e.feedbackTypes.some(e => !e.name.trim() || !e.description.trim())) ? (0, 
                            a.jsx)(e2, {
                                children: "请补全反馈类型名称和描述"
                            }) : null ]
                        })
                    }) : null ]
                }), (0, a.jsxs)("section", {
                    className: `mgp-support-module ${e.faqEnabled ? "is-enabled" : "is-disabled"} ${e.faqEnabled && q.faq ? "is-expanded" : ""}`,
                    children: [ X({
                        moduleKey: "faq",
                        enabledKey: "faqEnabled",
                        enabled: e.faqEnabled,
                        title: "FAQ配置",
                        description: "配置 FAQ 背景图、语种及问题分组。"
                    }), e.faqEnabled && q.faq ? (0, a.jsxs)("div", {
                        className: "mgp-support-content",
                        children: [ (0, a.jsx)("div", {
                            className: "mgp-form-grid",
                            children: (0, a.jsxs)("label", {
                                className: "mgp-upload-field",
                                children: [ (0, a.jsx)("span", {
                                    children: "FAQ 背景图"
                                }), (0, a.jsx)("input", {
                                    type: "file",
                                    accept: ".jpg,.jpeg,.png",
                                    onChange: e => {
                                        let a = e.target.files?.[0];
                                        a && (c(URL.createObjectURL(a)), l({
                                            faqBackground: a.name
                                        }));
                                    }
                                }), (0, a.jsxs)("span", {
                                    className: "mgp-faq-image-preview",
                                    children: [ (0, a.jsx)("img", {
                                        src: o,
                                        alt: "FAQ 背景图预览"
                                    }), (0, a.jsx)("i", {
                                        children: "点击更换背景图"
                                    }) ]
                                }), (0, a.jsx)("small", {
                                    children: "横屏游戏建议尺寸1920*1080，竖屏游戏建议尺寸1080*1920，≤3Mb，支持jpg、png。"
                                }) ]
                            })
                        }), (0, a.jsxs)("div", {
                            className: "mgp-faq-help-panel",
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)(h.CircleHelp, {
                                    size: 16
                                }), (0, a.jsx)("strong", {
                                    children: "帮助提示"
                                }) ]
                            }), (0, a.jsxs)("ol", {
                                children: [ (0, a.jsx)("li", {
                                    children: "FAQ为开发者自行配置内容，您需要配置FAQ分组，并在分组下配置对应的FAQ内容。"
                                }), (0, a.jsx)("li", {
                                    children: "FAQ支持多语种，游戏内会根据玩家的手机系统与应用配置显示对应语种的FAQ内容。"
                                }), (0, a.jsx)("li", {
                                    children: "如果您设置了默认语种，在无法识别语种的情况下，玩家将看到默认语种的FAQ内容。"
                                }), (0, a.jsx)("li", {
                                    children: "如果您没有配置语种和翻译，玩家将看到您配置的初始FAQ内容。"
                                }) ]
                            }) ]
                        }), (0, a.jsx)("div", {
                            className: "mgp-faq-table-toolbar",
                            children: (0, a.jsxs)("div", {
                                className: "mgp-faq-actions",
                                children: [ (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-button primary",
                                    onClick: () => {
                                        S(e.faqLanguages), E(e.faqLanguages[0] || "简体中文"), A([]), I([]), u("language");
                                    },
                                    children: "语种配置"
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-button primary",
                                    onClick: () => {
                                        O(H[0] || ""), L(e.faqGroupTranslations || {}), u("translation");
                                    },
                                    children: "分组多语种翻译"
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-button primary",
                                    onClick: () => u("group"),
                                    children: "分组配置"
                                }) ]
                            })
                        }), r && e.faqEnabled && !e.faqLanguages.length ? (0, a.jsx)(e2, {
                            children: "请至少配置一种 FAQ 语种"
                        }) : null, (0, a.jsxs)("div", {
                            className: "mgp-edit-table faq",
                            children: [ (0, a.jsxs)("div", {
                                className: "mgp-edit-head",
                                children: [ (0, a.jsx)("span", {
                                    children: "排序"
                                }), (0, a.jsx)("span", {
                                    children: "分组名"
                                }), (0, a.jsx)("span", {
                                    children: "FAQ 数量"
                                }), (0, a.jsx)("span", {
                                    children: "翻译状态"
                                }), (0, a.jsx)("span", {
                                    children: "操作"
                                }) ]
                            }), e.faqGroups.map((n, s) => (0, a.jsxs)("div", {
                                className: "mgp-edit-row",
                                children: [ (0, a.jsx)("span", {
                                    children: s + 1
                                }), (0, a.jsx)("input", {
                                    className: r && !n.name.trim() ? "has-error" : "",
                                    value: n.name,
                                    "aria-invalid": r && !n.name.trim(),
                                    onChange: e => F("faqGroups", n.id, {
                                        name: e.target.value
                                    })
                                }), (0, a.jsx)("span", {
                                    children: n.count
                                }), (0, a.jsx)("span", {
                                    className: "mgp-table-status",
                                    children: n.status
                                }), (0, a.jsxs)("span", {
                                    className: "mgp-faq-group-actions",
                                    children: [ (0, a.jsx)("button", {
                                        type: "button",
                                        className: "mgp-text-action",
                                        onClick: () => {
                                            x(n.id), b(!1), N(null);
                                        },
                                        children: "FAQ配置"
                                    }), (0, a.jsx)("button", {
                                        type: "button",
                                        className: "mgp-text-action danger",
                                        onClick: () => {
                                            let a = {
                                                ...G
                                            };
                                            delete a[n.id], l({
                                                faqGroups: e.faqGroups.filter(e => e.id !== n.id),
                                                faqItemsByGroup: a
                                            });
                                        },
                                        children: "删除"
                                    }) ]
                                }) ]
                            }, n.id)), (0, a.jsxs)("button", {
                                type: "button",
                                className: "mgp-add-inline",
                                onClick: () => l({
                                    faqGroups: [ ...e.faqGroups, {
                                        id: `faq-${Date.now()}`,
                                        name: "新 FAQ 分组",
                                        count: 0,
                                        status: "待翻译"
                                    } ]
                                }),
                                children: [ (0, a.jsx)(K.Plus, {
                                    size: 15
                                }), "添加 FAQ 分组" ]
                            }), r && e.faqEnabled && (!e.faqGroups.length || e.faqGroups.some(e => !e.name.trim())) ? (0, 
                            a.jsx)(e2, {
                                children: "请至少添加一个完整的 FAQ 分组"
                            }) : null ]
                        }) ]
                    }) : null ]
                }), (0, a.jsxs)("section", {
                    className: `mgp-support-module ${e.smartEnabled ? "is-enabled" : "is-disabled"} ${e.smartEnabled && q.smart ? "is-expanded" : ""}`,
                    children: [ X({
                        moduleKey: "smart",
                        enabledKey: "smartEnabled",
                        enabled: e.smartEnabled,
                        title: "智能客服配置",
                        description: "配置机器人欢迎语、通用回复和知识库。"
                    }), e.smartEnabled && q.smart ? (0, a.jsxs)("div", {
                        className: "mgp-support-content",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-form-grid",
                            children: [ (0, a.jsx)(eY, {
                                label: "机器人昵称",
                                required: e.smartEnabled,
                                value: e.botName,
                                error: r && e.smartEnabled && !e.botName.trim() ? "请填写机器人昵称" : "",
                                onChange: e => l({
                                    botName: e
                                })
                            }), (0, a.jsx)(eY, {
                                label: "欢迎语",
                                value: e.welcomeText,
                                onChange: e => l({
                                    welcomeText: e
                                })
                            }) ]
                        }), (0, a.jsx)(e1, {
                            label: "通用回复",
                            required: e.smartEnabled,
                            value: e.fallbackText,
                            helper: "机器人无法识别问题时展示，并引导玩家转人工客服。",
                            error: r && e.smartEnabled && !e.fallbackText.trim() ? "请填写通用回复" : "",
                            onChange: e => l({
                                fallbackText: e
                            })
                        }), (0, a.jsxs)("div", {
                            className: "mgp-edit-table knowledge",
                            children: [ (0, a.jsxs)("div", {
                                className: "mgp-edit-head",
                                children: [ (0, a.jsx)("span", {
                                    children: "知识标题"
                                }), (0, a.jsx)("span", {
                                    children: "状态"
                                }), (0, a.jsx)("span", {
                                    children: "启用状态"
                                }), (0, a.jsx)("span", {
                                    children: "操作"
                                }) ]
                            }), e.knowledgeItems.map(e => (0, a.jsxs)("div", {
                                className: "mgp-edit-row",
                                children: [ (0, a.jsx)("input", {
                                    className: r && !e.question.trim() ? "has-error" : "",
                                    value: e.question,
                                    "aria-invalid": r && !e.question.trim(),
                                    onChange: a => F("knowledgeItems", e.id, {
                                        question: a.target.value
                                    })
                                }), (0, a.jsx)("span", {
                                    className: "mgp-table-status",
                                    children: e.status
                                }), (0, a.jsx)(eJ, {
                                    checked: !1 !== e.enabled,
                                    label: `${e.question}启用状态`,
                                    onChange: a => F("knowledgeItems", e.id, {
                                        enabled: a
                                    })
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action danger",
                                    onClick: () => _("knowledgeItems", e.id),
                                    children: "删除"
                                }) ]
                            }, e.id)), (0, a.jsxs)("button", {
                                type: "button",
                                className: "mgp-add-inline",
                                onClick: () => l({
                                    knowledgeItems: [ ...e.knowledgeItems, {
                                        id: `knowledge-${Date.now()}`,
                                        question: "新知识条目",
                                        status: "已启用",
                                        enabled: !0
                                    } ]
                                }),
                                children: [ (0, a.jsx)(K.Plus, {
                                    size: 15
                                }), "新增知识" ]
                            }), r && e.smartEnabled && (!e.knowledgeItems.length || e.knowledgeItems.some(e => !e.question.trim())) ? (0, 
                            a.jsx)(e2, {
                                children: "请至少添加一条完整的知识内容"
                            }) : null ]
                        }) ]
                    }) : null ]
                }) ]
            }), "language" === p ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-language-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "语种配置",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "语种配置"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            onClick: () => u(null),
                            "aria-label": "关闭",
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsx)("div", {
                        className: "mgp-modal-body",
                        children: (0, a.jsxs)("div", {
                            className: "mgp-language-transfer",
                            children: [ (0, a.jsxs)("section", {
                                children: [ (0, a.jsxs)("header", {
                                    children: [ (0, a.jsx)("strong", {
                                        children: "可选语种"
                                    }), (0, a.jsxs)("span", {
                                        children: [ w.length, " / ", d.length - C.length ]
                                    }) ]
                                }), (0, a.jsx)("div", {
                                    children: d.filter(e => !C.includes(e)).map(e => (0, a.jsxs)("label", {
                                        children: [ (0, a.jsx)("input", {
                                            type: "checkbox",
                                            checked: w.includes(e),
                                            onChange: () => A(a => a.includes(e) ? a.filter(a => a !== e) : [ ...a, e ])
                                        }), e ]
                                    }, e))
                                }) ]
                            }), (0, a.jsxs)("div", {
                                className: "mgp-language-transfer-actions",
                                children: [ (0, a.jsxs)("button", {
                                    type: "button",
                                    disabled: !w.length,
                                    onClick: () => {
                                        S(e => [ ...e, ...w.filter(a => !e.includes(a)) ]), A([]);
                                    },
                                    children: [ (0, a.jsx)(t.ArrowRight, {
                                        size: 15
                                    }), "加入右侧" ]
                                }), (0, a.jsxs)("button", {
                                    type: "button",
                                    disabled: !$.length,
                                    onClick: () => {
                                        let e = $.filter(e => e !== D);
                                        S(a => a.filter(a => !e.includes(a))), I([]);
                                    },
                                    children: [ (0, a.jsx)(s.ArrowLeft, {
                                        size: 15
                                    }), "加入左侧" ]
                                }) ]
                            }), (0, a.jsxs)("section", {
                                children: [ (0, a.jsxs)("header", {
                                    children: [ (0, a.jsx)("strong", {
                                        children: "适配语种"
                                    }), (0, a.jsxs)("span", {
                                        children: [ $.length, " / ", C.length ]
                                    }) ]
                                }), (0, a.jsx)("div", {
                                    children: C.map(e => (0, a.jsxs)("label", {
                                        children: [ (0, a.jsx)("input", {
                                            type: "checkbox",
                                            checked: $.includes(e),
                                            onChange: () => I(a => a.includes(e) ? a.filter(a => a !== e) : [ ...a, e ])
                                        }), (0, a.jsx)("span", {
                                            children: e
                                        }), D === e ? (0, a.jsx)("small", {
                                            children: "默认语种"
                                        }) : (0, a.jsx)("button", {
                                            type: "button",
                                            onClick: () => E(e),
                                            children: "设为默认语种"
                                        }) ]
                                    }, e))
                                }) ]
                            }) ]
                        })
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => u(null),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            disabled: !C.length,
                            onClick: () => {
                                l({
                                    faqLanguages: [ D, ...C.filter(e => e !== D) ]
                                }), u(null);
                            },
                            children: "确定"
                        }) ]
                    }) ]
                })
            }) : null, "translation" === p ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-faq-translation-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "分组多语种翻译",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "分组多语种翻译"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            onClick: () => u(null),
                            "aria-label": "关闭",
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsx)("div", {
                        className: "mgp-modal-body",
                        children: H.length ? (0, a.jsxs)(a.Fragment, {
                            children: [ (0, a.jsxs)("div", {
                                className: "mgp-translation-toolbar",
                                children: [ (0, a.jsxs)("span", {
                                    children: [ "原文（", e.faqLanguages[0], "）" ]
                                }), (0, a.jsx)(i, {
                                    size: 17,
                                    "aria-hidden": "true"
                                }), (0, a.jsx)("nav", {
                                    "aria-label": "翻译语种",
                                    children: H.map(e => (0, a.jsx)("button", {
                                        type: "button",
                                        className: P === e ? "active" : "",
                                        onClick: () => O(e),
                                        children: e
                                    }, e))
                                }) ]
                            }), (0, a.jsx)("div", {
                                className: "mgp-translation-list",
                                children: e.faqGroups.map(e => (0, a.jsxs)("div", {
                                    className: "mgp-translation-row",
                                    children: [ (0, a.jsx)("input", {
                                        value: e.name,
                                        readOnly: !0,
                                        "aria-label": `${e.name}原文`
                                    }), (0, a.jsx)(t.ArrowRight, {
                                        size: 17,
                                        "aria-hidden": "true"
                                    }), (0, a.jsx)("input", {
                                        value: M[P]?.[e.id] || "",
                                        placeholder: "请输入翻译",
                                        "aria-label": `${e.name}${P}翻译`,
                                        onChange: a => L(n => ({
                                            ...n,
                                            [P]: {
                                                ...n[P] || {},
                                                [e.id]: a.target.value
                                            }
                                        }))
                                    }) ]
                                }, e.id))
                            }) ]
                        }) : (0, a.jsx)("div", {
                            className: "mgp-faq-translation-empty",
                            children: "请先在“语种配置”中添加至少一种翻译语种。"
                        })
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => u(null),
                            children: "关闭"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            disabled: !H.length,
                            onClick: () => {
                                l({
                                    faqGroupTranslations: M
                                }), u(null);
                            },
                            children: "确定"
                        }) ]
                    }) ]
                })
            }) : null, "group" === p ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-faq-tool-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "分组配置",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "分组配置"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            onClick: () => u(null),
                            "aria-label": "关闭",
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsx)("div", {
                        className: "mgp-modal-body mgp-faq-tool-list",
                        children: e.faqGroups.map(e => (0, a.jsxs)("label", {
                            children: [ (0, a.jsx)("span", {
                                children: "分组名称"
                            }), (0, a.jsx)("input", {
                                value: e.name,
                                onChange: a => F("faqGroups", e.id, {
                                    name: a.target.value
                                })
                            }) ]
                        }, e.id))
                    }), (0, a.jsx)("footer", {
                        children: (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: () => u(null),
                            children: "确定"
                        })
                    }) ]
                })
            }) : null, R ? (0, a.jsx)("div", {
                className: "mgp-drawer-backdrop",
                role: "presentation",
                onMouseDown: e => {
                    e.target === e.currentTarget && x(null);
                },
                children: (0, a.jsxs)("aside", {
                    className: "mgp-sdk-drawer mgp-faq-config-drawer",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": `${R.name} FAQ配置`,
                    children: [ (0, a.jsxs)("header", {
                        className: "mgp-sdk-drawer-header",
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("span", {
                                children: "客服配置 / FAQ配置"
                            }), (0, a.jsxs)("h2", {
                                children: [ "分组：", R.name ]
                            }) ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            "aria-label": "关闭FAQ配置",
                            onClick: () => x(null),
                            children: (0, a.jsx)(T.X, {
                                size: 19
                            })
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-sdk-drawer-body mgp-faq-config-body",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-faq-config-toolbar",
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("strong", {
                                    children: "FAQ列表"
                                }), (0, a.jsxs)("p", {
                                    children: [ "维护该分组下的问题、翻译与启用状态。", j ? "拖动列表行可调整展示顺序。" : "" ]
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsxs)("button", {
                                    type: "button",
                                    className: `mgp-button secondary ${j ? "is-active" : ""}`,
                                    onClick: () => {
                                        b(e => !e), y(null);
                                    },
                                    children: [ (0, a.jsx)(k, {
                                        size: 15
                                    }), j ? "完成排序" : "FAQ排序" ]
                                }), (0, a.jsxs)("button", {
                                    type: "button",
                                    className: "mgp-button primary",
                                    onClick: () => {
                                        let e = `faq-item-${Date.now()}`;
                                        B(a => [ ...a, {
                                            id: e,
                                            question: "新增 FAQ 问题",
                                            status: "待翻译",
                                            enabled: !0
                                        } ]), N(e);
                                    },
                                    children: [ (0, a.jsx)(K.Plus, {
                                        size: 15
                                    }), "新增FAQ" ]
                                }) ]
                            }) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-faq-detail-table",
                            children: [ (0, a.jsxs)("div", {
                                className: "mgp-faq-detail-head",
                                children: [ (0, a.jsx)("span", {
                                    children: "排序"
                                }), (0, a.jsx)("span", {
                                    children: "FAQ问题"
                                }), (0, a.jsx)("span", {
                                    children: "翻译状态"
                                }), (0, a.jsx)("span", {
                                    children: "启用状态"
                                }), (0, a.jsx)("span", {
                                    children: "操作"
                                }) ]
                            }), U.length ? U.map((e, n) => (0, a.jsxs)("div", {
                                className: `mgp-faq-detail-row ${j ? "is-sortable" : ""}`,
                                draggable: j,
                                onDragStart: () => y(e.id),
                                onDragOver: e => e.preventDefault(),
                                onDrop: () => {
                                    var a;
                                    return a = e.id, void (f && f !== a && (B(e => {
                                        let n = e.findIndex(e => e.id === f), s = e.findIndex(e => e.id === a);
                                        if (n < 0 || s < 0) return e;
                                        let l = [ ...e ], [i] = l.splice(n, 1);
                                        return l.splice(s, 0, i), l;
                                    }), y(null)));
                                },
                                onDragEnd: () => y(null),
                                children: [ (0, a.jsxs)("span", {
                                    className: "mgp-faq-order",
                                    children: [ j ? (0, a.jsx)(k, {
                                        size: 15
                                    }) : null, n + 1 ]
                                }), v === e.id ? (0, a.jsx)("input", {
                                    autoFocus: !0,
                                    value: e.question,
                                    onChange: a => V(e.id, {
                                        question: a.target.value
                                    })
                                }) : (0, a.jsx)("strong", {
                                    children: e.question
                                }), (0, a.jsx)("span", {
                                    className: `mgp-faq-translation-status ${"已翻译" === e.status ? "complete" : ""}`,
                                    children: e.status
                                }), (0, a.jsx)(eJ, {
                                    checked: e.enabled,
                                    label: `${e.question}启用状态`,
                                    onChange: a => V(e.id, {
                                        enabled: a
                                    })
                                }), (0, a.jsxs)("span", {
                                    className: "mgp-faq-item-actions",
                                    children: [ (0, a.jsx)("button", {
                                        type: "button",
                                        className: "mgp-text-action",
                                        onClick: () => V(e.id, {
                                            status: "已翻译"
                                        }),
                                        children: "多语种翻译"
                                    }), (0, a.jsx)("button", {
                                        type: "button",
                                        className: "mgp-text-action",
                                        onClick: () => N(a => a === e.id ? null : e.id),
                                        children: v === e.id ? "完成" : "编辑"
                                    }), (0, a.jsx)("button", {
                                        type: "button",
                                        className: "mgp-text-action danger",
                                        onClick: () => B(a => a.filter(a => a.id !== e.id)),
                                        children: "删除"
                                    }) ]
                                }) ]
                            }, e.id)) : (0, a.jsx)("div", {
                                className: "mgp-faq-detail-empty",
                                children: "暂无 FAQ，点击“新增FAQ”开始配置。"
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        className: "mgp-sdk-drawer-footer",
                        children: [ (0, a.jsxs)("span", {
                            children: [ "共 ", U.length, " 条 FAQ" ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: () => x(null),
                            children: "完成"
                        }) ]
                    }) ]
                })
            }) : null ]
        });
    }
    function aa({config: e, onChange: onChange, onOpenChooser: s, showErrors: l}) {
        let startedProviderIds = getStartedDataProviderIds(e), completedProviderIds = getCompletedDataProviderIds(e), [visibleProviderIds, setVisibleProviderIds] = (0, 
        n.useState)(() => {
            let e = F.filter(e => startedProviderIds.includes(e.id)).map(e => e.id);
            return e.length ? e : F[0]?.id ? [ F[0].id ] : [];
        }), visibleProviders = F.filter(e => visibleProviderIds.includes(e.id)), toggleVisibleProvider = providerId => setVisibleProviderIds(e => e.includes(providerId) ? e.filter(e => e !== providerId) : F.filter(a => e.includes(a.id) || a.id === providerId).map(e => e.id)), t = (a, s, l) => {
            let values = {
                ...e.values,
                [a]: {
                    ...e.values[a],
                    [s]: l
                }
            };
            onChange({
                values: values,
                selected: getStartedDataProviderIds({
                    values: values
                })
            });
        }, updateDataFile = (a, s, l, i) => {
            let values = {
                ...e.values,
                [a]: {
                    ...e.values[a],
                    [s]: l
                }
            };
            onChange({
                values: values,
                fileMeta: {
                    ...e.fileMeta || {},
                    [a]: {
                        ...e.fileMeta?.[a] || {},
                        [s]: i
                    }
                },
                selected: getStartedDataProviderIds({
                    values: values
                })
            });
        }, r = () => {
            let a = [ [ "eventname", "eventcode", "eventID" ], ...U.map(a => [ a.name, a.code, e.values.adjust?.[a.key] || "" ]) ].map(e => e.join(",")).join("\n"), n = URL.createObjectURL(new Blob([ `\ufeff${a}` ], {
                type: "text/csv;charset=utf-8"
            })), s = document.createElement("a");
            s.href = n, s.download = "adjust-event-template.csv", document.body.appendChild(s), 
            s.click(), s.remove(), URL.revokeObjectURL(n);
        };
        (0, n.useEffect)(() => {
            if (!l) return;
            let invalidIds = startedProviderIds.filter(e => !completedProviderIds.includes(e));
            invalidIds.length && setVisibleProviderIds(e => F.filter(a => e.includes(a.id) || invalidIds.includes(a.id)).map(e => e.id));
        }, [ l, startedProviderIds.join("|"), completedProviderIds.join("|") ]);
        return (0, a.jsxs)("div", {
            className: "mgp-config-body",
            children: [ (0, a.jsx)(e7, {
                stepId: "data"
            }), (0, a.jsx)("div", {
                className: "mgp-provider-choice-grid mgp-data-provider-choices",
                "aria-label": "归因数据平台配置",
                role: "group",
                children: F.map(s => {
                    let l = completedProviderIds.includes(s.id), i = startedProviderIds.includes(s.id), t = visibleProviderIds.includes(s.id);
                        return (0, a.jsxs)("button", {
                            type: "button",
                            "aria-pressed": t,
                            className: `mgp-provider-choice ${t ? "is-selected" : ""} ${l ? "is-configured" : ""} ${i && !l ? "has-error" : ""}`,
                            "data-data-provider": s.id,
                            onClick: () => toggleVisibleProvider(s.id),
                        children: [ (0, a.jsx)("strong", {
                            children: s.name
                        }), (0, a.jsx)("small", {
                            className: "mgp-provider-description",
                            children: s.description
                        }), !l && i ? (0, a.jsx)("i", {
                            "aria-hidden": "true",
                            children: "待完善"
                        }) : null ]
                    }, s.id);
                })
            }), (0, a.jsxs)("div", {
                    id: "data-provider-panels",
                    className: "mgp-param-table data",
                    role: "group",
                children: [ visibleProviders.length ? (0, a.jsxs)("div", {
                    className: "mgp-param-head",
                    children: [ (0, a.jsx)("span", {
                        children: "平台"
                    }), (0, a.jsx)("span", {
                        children: "平台参数"
                    }), (0, a.jsx)("span", {
                        children: "说明文档"
                    }) ]
                }) : null, visibleProviders.map(s => (0, a.jsxs)("div", {
                    className: "mgp-param-row",
                    children: [ (0, a.jsxs)("span", {
                        className: "mgp-method-cell",
                        children: [ (0, a.jsx)("b", {
                            children: s.name
                        }), (0, a.jsx)("small", {
                            children: s.description
                        }) ]
                    }), (0, a.jsx)("span", {
                        className: `mgp-param-fields ${"adjust" === s.id ? "adjust" : ""}`,
                        children: "adjust" === s.id ? (0, a.jsxs)("div", {
                            className: "mgp-adjust-config",
                            children: [ (0, a.jsx)(eY, {
                                label: "应用识别码",
                                required: !0,
                                value: e.values.adjust?.appIdentifier || "",
                                error: l && startedProviderIds.includes("adjust") && !String(e.values.adjust?.appIdentifier || "").trim() ? "请填写应用识别码" : "",
                                onChange: e => t("adjust", "appIdentifier", e)
                            }), (0, a.jsxs)("div", {
                                className: "mgp-adjust-event-table",
                                children: [ (0, a.jsxs)("div", {
                                    className: "mgp-adjust-event-head",
                                    children: [ (0, a.jsx)("span", {
                                        children: "eventname"
                                    }), (0, a.jsx)("span", {
                                        children: "eventcode"
                                    }), (0, a.jsx)("span", {
                                        children: "eventID（填写到 Adjust 后台后生成）"
                                    }) ]
                                }), U.map(n => (0, a.jsxs)("div", {
                                    className: "mgp-adjust-event-row",
                                    children: [ (0, a.jsx)("span", {
                                        children: n.name
                                    }), (0, a.jsx)("span", {
                                        children: n.code
                                    }), (0, a.jsx)("input", {
                                        className: l && startedProviderIds.includes("adjust") && !String(e.values.adjust?.[n.key] || "").trim() ? "has-error" : "",
                                        value: e.values.adjust?.[n.key] || "",
                                        "aria-invalid": l && startedProviderIds.includes("adjust") && !String(e.values.adjust?.[n.key] || "").trim(),
                                        onChange: e => t("adjust", n.key, e.target.value),
                                        "aria-label": `${n.name} eventID`
                                    }) ]
                                }, n.key)) ]
                            }), (0, a.jsxs)("button", {
                                type: "button",
                                className: "mgp-button secondary mgp-adjust-download",
                                onClick: r,
                                children: [ (0, a.jsx)(x.Download, {
                                    size: 15
                                }), "下载文件" ]
                            }), l && startedProviderIds.includes("adjust") && U.some(a => !String(e.values.adjust?.[a.key] || "").trim()) ? (0, a.jsx)(e2, {
                                children: "请补全所有 Adjust 事件 eventID"
                            }) : null ]
                        }) : s.params.map(n => n.upload ? (0, a.jsx)("div", {
                            className: "mgp-data-upload-field",
                            children: (0, a.jsx)(e0, {
                                label: n.label,
                                required: !0,
                                value: e.values[s.id]?.[n.key] || "",
                                fingerprint: e.fileMeta?.[s.id]?.[n.key]?.sha256 || "",
                                accept: "iosFile" === n.key ? ".plist,application/x-plist,application/xml,text/xml" : ".json,application/json",
                                confirmOnDifferentName: !0,
                                error: l && startedProviderIds.includes(s.id) && !String(e.values[s.id]?.[n.key] || "").trim() ? `请上传${n.label}` : "",
                                compact: !0,
                                onChange: (e, a) => updateDataFile(s.id, n.key, e, a)
                            })
                        }, n.key) : (0, a.jsx)(eY, {
                             label: n.label,
                             required: !0,
                             value: e.values[s.id]?.[n.key] || "",
                             error: l && startedProviderIds.includes(s.id) && !String(e.values[s.id]?.[n.key] || "").trim() ? `请填写${n.label}` : "",
                             onChange: e => t(s.id, n.key, e)
                         }, n.key))
                    }), (0, a.jsx)("span", {
                        className: "mgp-param-note",
                        children: (0, a.jsx)(e3, {
                            href: s.help,
                            children: "说明文档"
                        })
                    }) ]
                }, s.id)) ]
            }) ]
        });
    }
    function an({config: e = {}, onChange: onChange, showErrors: s}) {
        let l = getStartedAdvertisingProviderIds(e), i = getCompletedAdvertisingProviderIds(e), [visibleProviderIds, setVisibleProviderIds] = (0, 
        n.useState)(() => l.length ? ep.filter(e => l.includes(e.id)).map(e => e.id) : [ "admob" ]), visibleProviders = ep.filter(e => visibleProviderIds.includes(e.id)), toggleVisibleProvider = providerId => setVisibleProviderIds(e => e.includes(providerId) ? e.filter(e => e !== providerId) : ep.filter(a => e.includes(a.id) || a.id === providerId).map(e => e.id)), t = R.find(e => "advertising" === e.id)?.help, d = l.includes("admob") ? eB(e.admobAppId) : "", o = s && l.includes("applovin-max") && !String(e.maxSdkKey || "").trim() ? "请填写 MAX SDK Key" : "";
        (0, n.useEffect)(() => {
            if (!s) return;
            let invalidIds = l.filter(e => !i.includes(e));
            invalidIds.length && setVisibleProviderIds(e => ep.filter(a => e.includes(a.id) || invalidIds.includes(a.id)).map(e => e.id));
        }, [ s, l.join("|"), i.join("|") ]);
        return (0, a.jsxs)("div", {
            className: "mgp-config-body mgp-advertising-config",
            children: [ (0, a.jsx)(e7, {
                stepId: "advertising"
            }), (0, a.jsxs)("div", {
                className: "mgp-advertising-form",
                children: [ (0, a.jsx)("div", {
                    className: "mgp-provider-choice-grid mgp-advertising-provider-choices",
                    "aria-label": "广告变现平台配置",
                    role: "group",
                    children: ep.map(e => {
                        let configured = i.includes(e.id), started = l.includes(e.id), active = visibleProviderIds.includes(e.id);
                        return (0, a.jsxs)("button", {
                            type: "button",
                            "aria-pressed": active,
                            className: `mgp-provider-choice ${active ? "is-selected" : ""} ${configured ? "is-configured" : ""} ${started && !configured ? "has-error" : ""}`,
                            "data-advertising-provider": e.id,
                            onClick: () => toggleVisibleProvider(e.id),
                            children: [ (0, a.jsx)("strong", {
                                children: e.name
                            }), (0, a.jsx)("small", {
                                className: "mgp-provider-description",
                                children: e.description
                            }), !configured && started ? (0, a.jsx)("i", {
                                "aria-hidden": "true",
                                children: "待完善"
                            }) : null ]
                        }, e.id);
                    })
                }), (0, a.jsxs)("div", {
                     className: "mgp-advertising-card-list",
                     id: "advertising-provider-panels",
                     role: "group",
                     children: [ visibleProviders.some(e => "admob" === e.id) ? (0, a.jsxs)("section", {
                        className: `mgp-advertising-card ${d ? "has-error" : ""}`,
                        children: [ (0, a.jsxs)("header", {
                            children: [ (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)(r.BarChart3, {
                                    size: 17
                                }), (0, a.jsx)("strong", {
                                    children: "应用级广告配置"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                className: "mgp-advertising-card-header-actions",
                                children: (0, a.jsx)(e3, {
                                    href: t,
                                    children: "说明文档"
                                })
                            }) ]
                        }), (0, a.jsx)(eY, {
                            label: "AdMob App ID",
                            required: !0,
                            value: e.admobAppId || "",
                            placeholder: "例如：ca-app-pub-xxxxxxxxxxxxxxxx~yyyyyyyyyy",
                            error: d,
                            onChange: e => onChange({
                                admobAppId: e
                            })
                        }) ]
                     }) : null, visibleProviders.some(e => "applovin-max" === e.id) ? (0, a.jsxs)("section", {
                        className: `mgp-advertising-card ${o ? "has-error" : ""}`,
                        children: [ (0, a.jsxs)("header", {
                            children: [ (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)(S.KeyRound, {
                                    size: 17
                                }), (0, a.jsx)("strong", {
                                    children: "AppLovin MAX（平台专属配置）"
                                }) ]
                            }), (0, a.jsx)("div", {
                                className: "mgp-advertising-card-header-actions",
                                children: (0, a.jsx)(e3, {
                                    href: t,
                                    children: "说明文档"
                                })
                            }) ]
                        }), (0, a.jsx)(eY, {
                            label: "MAX SDK Key",
                            required: !0,
                            value: e.maxSdkKey || "",
                            placeholder: "请输入 MAX SDK Key",
                            helper: "用于初始化 AppLovin MAX 聚合平台",
                            error: o,
                            onChange: e => onChange({
                                maxSdkKey: e
                            })
                        }) ]
                    }) : null ]
                }) ]
            }) ]
        });
    }
    function as({config: e, onChange: s, availableChannels: l, onGoRelease: i, showErrors: t, onBeforeAction: onBeforeAgreementAction}) {
        let [r, d] = (0, n.useState)(null), [o, m] = (0, n.useState)("英语"), [p, u] = (0, 
        n.useState)(!1), g = (0, n.useRef)(null), [x, j] = (0, n.useState)(null), [f, y] = (0, 
        n.useState)(l[0]?.id || ""), v = [ "英语", "简体中文", "繁体中文", "韩语", "阿拉伯语" ], k = l.find(e => e.id === f), N = e.groups || [], C = e => "global" === e ? N : N.filter(a => 1 === (a.channels || []).length && a.channels[0] === e), S = C(f), w = l.filter(e => {
            let a = C(e.id);
            return !a.length || !a.every(a => eQ(a, e.id));
        });
        (0, n.useEffect)(() => {
            l.some(e => e.id === f) || y(l[0]?.id || "");
        }, [ f, l ]);
        let A = () => Object.fromEntries(v.map(e => [ e, {
            name: "",
            url: ""
        } ])), $ = r ? v.filter(e => {
            let a = r.locales[e];
            return !!a?.name.trim() && /^https?:\/\/[^\s]+$/i.test(a?.url.trim() || "");
        }) : [], I = r && v.every(e => {
            let a = r.locales[e], n = !!a?.name.trim(), s = !!a?.url.trim();
            return !n && !s || n && /^https?:\/\/[^\s]+$/i.test(a?.url.trim() || "");
        }), D = !!r?.name.trim() && !!$.length && !!I && !!r?.defaultLanguage && $.includes(r.defaultLanguage), E = [];
        r && (r.name.trim() || E.push("请填写分组名称"), $.length ? I || E.push("请补全已填写语种的协议名称和有效 URL") : E.push("请至少完整填写一个语种的协议名称和有效 URL"), 
        r.defaultLanguage ? $.includes(r.defaultLanguage) || E.push("默认语种的协议信息不完整，请补全后重新设置") : E.push("请将一个已完整填写的语种设为默认语种"));
        let q = E.length ? `暂时无法提交：${E.join("；")}。` : "", runAgreementAction = (e, a) => onBeforeAgreementAction ? onBeforeAgreementAction(e, a) : a(), openAgreementEditor = e => {
            let a, n, s;
            return n = (a = (e.languages || []).filter(e => v.includes(e))).includes(e.defaultLanguage) ? e.defaultLanguage : a[0] || "", 
            s = A(), void (a.forEach(a => {
                s[a] = {
                    ...eH(e, a)
                };
            }), m(n || "英语"), u(!1), d({
                ...e,
                channels: [],
                languages: a,
                locales: s,
                defaultLanguage: n
            }));
        }, openAgreementCreator = () => {
            f && (m("英语"), u(!1), d({
                id: null,
                channels: [],
                name: "",
                languages: [],
                locales: A(),
                defaultLanguage: "",
                privacyUrl: "",
                termsUrl: ""
            }));
        };
        return (0, a.jsxs)("div", {
            className: "mgp-config-body",
            children: [ (0, a.jsx)(e7, {
                stepId: "agreement"
            }), l.length ? (0, a.jsxs)(a.Fragment, {
                children: [ (0, a.jsxs)("div", {
                    className: "mgp-agreement-table",
                    role: "table",
                        "aria-label": "全局协议配置",
                    children: [ (0, a.jsxs)("div", {
                        className: "mgp-agreement-head",
                        role: "row",
                        children: [ (0, a.jsx)("span", {
                            children: "协议分组"
                        }), (0, a.jsx)("span", {
                            children: "协议语种"
                        }), (0, a.jsx)("span", {
                            children: "操作"
                        }) ]
                    }), S.map(e => {
                        let n = t && !eQ(e, f);
                        return (0, a.jsxs)("div", {
                            className: `mgp-agreement-row ${n ? "has-error" : ""}`,
                            "data-agreement-id": e.id,
                            role: "row",
                            children: [ (0, a.jsx)("span", {
                                children: e.name
                            }), (0, a.jsx)("span", {
                                children: (e.languages || []).join("、")
                            }), (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    onClick: () => runAgreementAction("编辑协议", () => openAgreementEditor(e)),
                                    children: "编辑"
                                }), (0, a.jsx)("i", {
                                    children: "|"
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action danger",
                                    "data-agreement-action": "delete",
                                    onClick: () => runAgreementAction("删除协议", () => s({
                                        groups: N.filter(a => a.id !== e.id)
                                    })),
                                    children: "删除"
                                }) ]
                            }) ]
                        }, e.id);
                    }), S.length ? null : (0, a.jsx)("div", {
                        className: "mgp-agreement-channel-empty",
                        role: "status",
                        children: "尚未配置全局协议，请点击下方按钮添加。"
                    }), (0, a.jsxs)("button", {
                        type: "button",
                        className: "mgp-add-row agreement",
                        onClick: () => runAgreementAction("添加协议", openAgreementCreator),
                        children: [ (0, a.jsx)(K.Plus, {
                            size: 17
                        }), "添加协议" ]
                    }), t && !S.length ? (0, a.jsxs)(e2, {
                        children: "请至少添加一组全局协议配置"
                    }) : null ]
                }) ]
            }) : (0, a.jsxs)("div", {
                className: `mgp-empty-state ${t ? "has-error" : ""}`,
                children: [ (0, a.jsx)(b.FileCheck2, {
                    size: 30
                }), (0, a.jsx)("strong", {
                    children: "暂时没有可配置的发行渠道"
                }), (0, a.jsx)("p", {
                    children: "请先在发行渠道中添加平台及发行渠道，再回到此处配置协议。"
                }), (0, a.jsx)("button", {
                    type: "button",
                    className: "mgp-button primary",
                    onClick: i,
                    children: "前往发行渠道"
                }), t ? (0, a.jsx)(e2, {
                    children: "请先完成发行渠道配置"
                }) : null ]
            }), r ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-agreement-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": `${r.id ? "编辑协议" : "添加协议"} - 全局协议配置`,
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("div", {
                            children: (0, a.jsx)("h2", {
                                children: r.id ? "编辑协议" : "添加协议"
                            })
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-icon-button",
                            onClick: () => {
                                u(!1), d(null);
                            },
                            "aria-label": "关闭",
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsx)("div", {
                        className: "mgp-modal-body",
                        children: (0, a.jsxs)("div", {
                            className: "mgp-agreement-editor",
                            children: [ (0, a.jsx)(eY, {
                                label: "分组名称",
                                required: !0,
                                value: r.name,
                                helper: "用于分组协议，用户不可见。",
                                placeholder: "请输入协议名称",
                                onChange: e => d(a => ({
                                    ...a,
                                    name: e
                                }))
                            }), (0, a.jsxs)("div", {
                                className: "mgp-agreement-language-note",
                                children: [ (0, a.jsx)("strong", {
                                    children: "协议语种"
                                }), (0, a.jsx)("p", {
                                    children: "固定支持以下五个语种，可按需填写；至少完整填写一个语种并设为默认语种。"
                                }) ]
                            }), (0, a.jsx)("nav", {
                                className: "mgp-agreement-language-tabs",
                                "aria-label": "协议语种",
                                children: v.map(e => (0, a.jsx)("button", {
                                    type: "button",
                                    className: `${o === e ? "active" : ""} ${$.includes(e) ? "complete" : ""}`,
                                    onClick: () => m(e),
                                    children: e
                                }, e))
                            }), (0, a.jsx)(eY, {
                                label: "协议名称",
                                value: r.locales[o]?.name || "",
                                helper: "用户看到的协议名称，请根据语种配置。",
                                error: r.locales[o]?.url?.trim() && !r.locales[o]?.name?.trim() ? "填写协议 URL 时也需要填写协议名称" : "",
                                placeholder: "请输入协议名称",
                                onChange: e => d(a => ({
                                    ...a,
                                    locales: {
                                        ...a.locales,
                                        [o]: {
                                            ...a.locales[o],
                                            name: e
                                        }
                                    }
                                }))
                            }), (0, a.jsx)(eY, {
                                label: "协议URL",
                                value: r.locales[o]?.url || "",
                                error: r.locales[o]?.name?.trim() && !r.locales[o]?.url?.trim() ? "填写协议名称时也需要填写协议 URL" : r.locales[o]?.url && !/^https?:\/\/[^\s]+$/i.test(r.locales[o]?.url.trim()) ? "请输入以 http:// 或 https:// 开头的有效地址" : "",
                                placeholder: "请输入协议 URL",
                                onChange: e => d(a => ({
                                    ...a,
                                    locales: {
                                        ...a.locales,
                                        [o]: {
                                            ...a.locales[o],
                                            url: e
                                        }
                                    }
                                }))
                            }), (0, a.jsxs)("div", {
                                className: "mgp-agreement-default-switch",
                                children: [ (0, a.jsxs)("span", {
                                    children: [ (0, a.jsx)("strong", {
                                        children: "设为默认语种"
                                    }), (0, a.jsx)("small", {
                                        children: "无法识别玩家语种时，将展示当前语种的协议内容。"
                                    }) ]
                                }), (0, a.jsx)(eJ, {
                                    checked: r.defaultLanguage === o,
                                    label: `将${o}设为默认语种`,
                                    disabled: !$.includes(o),
                                    onChange: e => {
                                        e ? d(e => ({
                                            ...e,
                                            defaultLanguage: o
                                        })) : d(e => ({
                                            ...e,
                                            defaultLanguage: e.defaultLanguage === o ? "" : e.defaultLanguage
                                        }));
                                    }
                                }) ]
                            }) ]
                        })
                    }), (0, a.jsxs)("footer", {
                        children: [ p && q ? (0, a.jsx)("p", {
                            id: "mgp-agreement-submit-feedback",
                            className: "mgp-agreement-submit-feedback",
                            role: "alert",
                            tabIndex: -1,
                            ref: g,
                            children: q
                        }) : null, (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary mgp-agreement-submit",
                            "aria-disabled": !D,
                            "aria-describedby": p && q ? "mgp-agreement-submit-feedback" : void 0,
                            onClick: () => {
                                if (!D) {
                                    u(!0), window.requestAnimationFrame(() => g.current?.focus());
                                    return;
                                }
                                let e = r.locales[r.defaultLanguage], a = [ r.defaultLanguage, ...v.filter(e => $.includes(e) && e !== r.defaultLanguage) ], n = {
                                    ...r,
                                    channels: [],
                                    languages: a,
                                    agreementName: e.name,
                                    agreementUrl: e.url,
                                    privacyUrl: e.url,
                                    termsUrl: e.url
                                };
                                s({
                                    groups: n.id ? N.map(e => e.id === n.id ? n : e) : [ ...N, {
                                        ...n,
                                        id: `agreement-global-${Date.now()}`
                                    } ]
                                }), d(null);
                            },
                            children: "提交"
                        }) ]
                    }) ]
                })
            }) : null ]
        });
    }
    function al({config: e, onChange: n, showErrors: s}) {
        let l = String(e.ageThreshold || "").trim(), i = l ? !Number.isInteger(Number(l)) || Number(l) < 1 || Number(l) > 18 ? "请输入 1-18 之间的整数" : "" : s ? "请填写年龄阈值" : "", t = String(e.kwsRedirect || "").trim(), r = t ? /^https?:\/\/[^\s]+$/i.test(t) ? "" : "请输入以 http:// 或 https:// 开头的有效地址" : s ? "请填写 KWS Redirect URL" : "", d = s && !String(e.kwsClientId || "").trim() ? "请填写 KWS Client ID" : "", o = s && !String(e.kwsClientSecret || "").trim() ? "请填写 KWS Client Secret" : "", c = s && !String(e.kwsVerifySecret || "").trim() ? "请填写 KWS Verify Secret" : "";
        return (0, a.jsxs)("div", {
            className: "mgp-config-body mgp-compliance-params",
            children: [ (0, a.jsx)(e7, {
                stepId: "compliance"
            }), (0, a.jsxs)("div", {
                className: "mgp-form-block mgp-kws-block",
                children: [ (0, a.jsxs)("div", {
                    className: "mgp-kws-heading",
                    children: [ (0, a.jsx)("h4", {
                        children: "年龄与 KWS 参数"
                    }), (0, a.jsx)(e3, {
                        href: "https://docs.meetgames.com/sdk/compliance",
                        children: "合规接入帮助"
                    }) ]
                }), (0, a.jsx)("p", {
                    children: "需要启用对应能力时，可在生成及运营中心的运营配置中开启。"
                }), (0, a.jsxs)("div", {
                    className: "mgp-form-grid five",
                    children: [ (0, a.jsx)(eY, {
                        label: "年龄阈值",
                        required: !0,
                        value: e.ageThreshold || "",
                        error: i,
                        onChange: e => n({
                            ageThreshold: e
                        })
                    }), (0, a.jsx)(eY, {
                        label: "KWS Client ID",
                        required: !0,
                        value: e.kwsClientId || "",
                        error: d,
                        onChange: e => n({
                            kwsClientId: e
                        })
                    }), (0, a.jsx)(eY, {
                        label: "KWS Client Secret",
                        required: !0,
                        type: "password",
                        value: e.kwsClientSecret || "",
                        error: o,
                        onChange: e => n({
                            kwsClientSecret: e
                        })
                    }), (0, a.jsx)(eY, {
                        label: "KWS Verify Secret",
                        required: !0,
                        type: "password",
                        value: e.kwsVerifySecret || "",
                        error: c,
                        onChange: e => n({
                            kwsVerifySecret: e
                        })
                    }), (0, a.jsx)(eY, {
                        label: "KWS Redirect URL",
                        required: !0,
                        value: e.kwsRedirect || "",
                        error: r,
                        onChange: e => n({
                            kwsRedirect: e
                        })
                    }) ]
                }) ]
            }) ]
        });
    }
    let ai = [ {
        id: "middle-east",
        title: "中东本地化支付",
        tone: "purple",
        rows: [ {
            code: "AE",
            region: "阿联酋",
            methods: "Visa Card、Mastercard"
        }, {
            code: "IR",
            region: "伊朗",
            methods: "Visa Card、Mastercard"
        }, {
            code: "TR",
            region: "土耳其",
            methods: "Visa Card、Mastercard"
        }, {
            code: "EG",
            region: "埃及",
            methods: "Visa Card、Mastercard"
        }, {
            code: "IQ",
            region: "伊拉克",
            methods: "Visa Card、Mastercard、Zain"
        } ]
    }, {
        id: "southeast-asia",
        title: "东南亚本地化支付",
        tone: "amber",
        rows: [ {
            code: "ID",
            region: "印度尼西亚",
            methods: "OVO Wallet、DOKU Wallet、GCash Wallet"
        }, {
            code: "MY",
            region: "马来西亚",
            methods: "FPX、Touch ’n Go、GrabPay"
        }, {
            code: "PH",
            region: "菲律宾",
            methods: "Dragonpay"
        }, {
            code: "TH",
            region: "泰国",
            methods: "TrueMoney、PromptPay"
        }, {
            code: "SG",
            region: "新加坡",
            methods: "eNETS"
        } ]
    } ];
    function at({onClose: e}) {
        let [s, l] = (0, n.useState)(null);
        return (0, a.jsx)("div", {
            className: "mgp-modal-backdrop",
            role: "presentation",
            onMouseDown: a => {
                a.target === a.currentTarget && e();
            },
            children: (0, a.jsxs)("section", {
                className: "mgp-modal mgp-local-payment-modal",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "其他支付方式",
                children: [ (0, a.jsxs)("header", {
                    children: [ (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("h2", {
                            children: "其他支付方式"
                        }), (0, a.jsx)("p", {
                            children: "查看可接入的区域本地化支付方式，具体费率与结算方案请联系运营。"
                        }) ]
                    }), (0, a.jsx)("button", {
                        type: "button",
                        onClick: e,
                        "aria-label": "关闭",
                        children: (0, a.jsx)(T.X, {
                            size: 18
                        })
                    }) ]
                }), (0, a.jsx)("div", {
                    className: "mgp-modal-body mgp-local-payment-grid",
                    children: ai.map(e => (0, a.jsxs)("section", {
                        className: "mgp-local-payment-panel",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-local-payment-title",
                            children: [ (0, a.jsx)("span", {
                                className: `mgp-local-payment-icon ${e.tone}`,
                                children: (0, a.jsx)(u.CreditCard, {
                                    size: 18
                                })
                            }), (0, a.jsx)("strong", {
                                children: e.title
                            }) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-local-payment-table",
                            children: [ (0, a.jsxs)("div", {
                                className: "mgp-local-payment-head",
                                children: [ (0, a.jsx)("span", {
                                    children: "地区"
                                }), (0, a.jsx)("span", {
                                    children: "支付方式"
                                }) ]
                            }), e.rows.map(e => (0, a.jsxs)("div", {
                                className: "mgp-local-payment-row",
                                children: [ (0, a.jsxs)("span", {
                                    children: [ (0, a.jsx)("small", {
                                        children: e.code
                                    }), e.region ]
                                }), (0, a.jsx)("span", {
                                    children: e.methods
                                }) ]
                            }, e.code)) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-local-payment-note",
                            children: [ (0, a.jsx)("span", {
                                children: "通道费用、保证金、结算周期"
                            }), (0, a.jsx)(h.CircleHelp, {
                                size: 15,
                                "aria-hidden": "true"
                            }) ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary mgp-local-payment-contact",
                            onClick: () => l(e.id),
                            children: s === e.id ? "已提交联系" : "联系运营"
                        }) ]
                    }, e.id))
                }), (0, a.jsx)("footer", {
                    children: (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-button secondary",
                        onClick: e,
                        children: "关闭"
                    })
                }) ]
            })
        });
    }
    function ar({config: e = {}, onChange: s, showErrors: l}) {
        let i = e.channels || [], t = e.channelPaymentConfigs || {}, r = e.packageNames || {}, d = String(e.deliveryUrl || ""), deliveryValue = d.trim(), o = deliveryValue ? /^https?:\/\/[^\s]+$/i.test(deliveryValue) ? "" : "请输入以 http:// 或 https:// 开头的有效地址" : l ? "请填写发货地址" : "";
        return (0, a.jsxs)("div", {
            className: "mgp-config-body mgp-release-platform-config",
            children: [ (0, a.jsx)(e7, {
                stepId: "release"
            }), (0, a.jsx)(am, {
                selected: i,
                paymentConfigs: t,
                packageNames: r,
                onSelect: e => {
                    i.includes(e) || s({
                        channels: [ ...i, e ],
                        channelPaymentConfigs: {
                            ...t,
                            [e]: J(e)
                        },
                        packageNames: {
                            ...r,
                            [e]: ""
                        }
                    });
                },
                onRemove: e => {
                    let a = {
                        ...t
                    }, n = {
                        ...r
                    };
                    delete a[e], delete n[e], s({
                        channels: i.filter(a => a !== e),
                        channelPaymentConfigs: a,
                        packageNames: n
                    });
                },
                onPackageNameChange: (e, a) => s({
                    packageNames: {
                        ...r,
                        [e]: a
                    }
                }),
                onPaymentChange: (e, a) => s({
                    channelPaymentConfigs: {
                        ...t,
                        [e]: a
                    }
                }),
                showErrors: l
            }), (0, a.jsx)("div", {
                className: "mgp-release-delivery-address",
                children: (0, a.jsx)(eY, {
                    label: "发货地址",
                    value: d,
                    required: !0,
                    helper: "用于接收渠道支付成功后的服务端发货回调。",
                    error: o,
                    placeholder: "请输入发货回调地址",
                    onChange: e => s({
                        deliveryUrl: e
                    })
                })
            }) ]
        });
    }
    function ad({config: e = {}, releaseConfig: s = {}, dataConfig: l = {}, advertisingConfig: i = {}, supportConfig: t = {}, onChange: r, showErrors: d}) {
        let o = s.channels || [], c = e.byChannel || {}, m = ek(l), p = eN(t), h = [ ...p ? [] : [ eb ], ...m ? [] : [ ef ], ...i.provider && "none" !== i.provider ? [] : [ ey ] ], u = (0, 
        n.useMemo)(() => {
            let e = (l.selected || []).map(e => F.find(a => a.id === e)).filter(Boolean).map(e => ({
                name: e.name,
                sizeMb: _[e.id] || 0
            })), a = e.reduce((e, a) => e + a.sizeMb, 0), n = `${a.toFixed(1)} MB`;
            return e.length ? {
                summary: `${e.map(e => e.name).join("、")} · 预计 ${n}`,
                tooltip: `${e.map(e => `${e.name} ${e.sizeMb.toFixed(1)} MB`).join("；")}；合计预计 ${n}。`
            } : {
                summary: "未配置数据平台 · 预计 0.0 MB",
                tooltip: "未配置"
            };
        }, [ l.selected ]), g = (0, n.useMemo)(() => ({
            summary: p ? "已配置" : "未配置",
            tooltip: p ? "已配置客服工具。" : "未配置"
        }), [ p ]), x = (0, n.useMemo)(() => {
            let e = eu(i.provider), a = `${em.advertising.toFixed(1)} MB`;
            return i.provider && "none" !== i.provider ? {
                summary: `${e} · 预计 ${a}`,
                tooltip: `当前全局广告平台为 ${e}，广告变现 SDK 预计增加 ${a}。`
            } : {
                summary: `未开启 · 预计 ${a}`,
                tooltip: "请先在“广告变现”步骤选择 Google AdMob 或 AppLovin MAX。"
            };
        }, [ i.provider ]);
        return (0, a.jsxs)("div", {
            className: "mgp-config-body mgp-capabilities-config",
            children: [ (0, a.jsx)(e7, {
                stepId: "capabilities"
            }), o.length ? (0, a.jsx)("div", {
                className: "mgp-capability-channel-list",
                children: o.map(e => {
                    let n = e$(e), l = c[e] || [];
                    return n ? (0, a.jsxs)("section", {
                        className: `mgp-capability-channel-card ${d && !l.length ? "has-error" : ""}`,
                        children: [ (0, a.jsxs)("header", {
                            children: [ (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)(eM, {
                                    storeId: e,
                                    size: 22
                                }), (0, a.jsx)("strong", {
                                    children: n.name
                                }) ]
                            }), (0, a.jsxs)("small", {
                            children: s.packageNames?.[e] || "未填写包名"
                            }) ]
                        }), (0, a.jsx)(ap, {
                            selected: l,
                            onToggle: a => {
                                let n, s;
                                return s = (n = c[e] || []).includes(a) ? n.filter(e => e !== a) : [ ...n, a ], 
                                void r({
                                    byChannel: {
                                        ...c,
                                        [e]: s
                                    }
                                });
                            },
                            moduleDetails: {
                                support: p ? void 0 : g,
                                "ops-data": u,
                                advertising: x
                            },
                            disabledModuleIds: h,
                            tooltipIdPrefix: `capability-${e}`
                        }), d && !l.length ? (0, a.jsx)(e2, {
                            children: "请至少选择一种 SDK 能力"
                        }) : null ]
                    }, e) : null;
                })
            }) : (0, a.jsx)("div", {
                className: "mgp-configured-channel-empty",
                children: (0, a.jsx)("span", {
                    children: "请先添加发行渠道并补全对应的渠道支付参数。"
                })
            }) ]
        });
    }
    function ao({gameName: e, games: games = [], onGameChange: onGameChange, gameProfile: s, packages: l, config: i, onStartNew: t, onResume: r, onDownload: d, onEnterOperations: o, onDelete: c, toast: m}) {
        let [p, h] = (0, n.useState)(null), [u, g] = (0, n.useState)(null), x = l.find(e => e.id === p), j = l.find(e => e.id === u);
        return (0, a.jsxs)(a.Fragment, {
            children: [ (0, a.jsxs)("section", {
                className: "mgp-sdk-list-panel mgp-config-package-list-panel",
                children: [ (0, a.jsx)("header", {
                    className: "mgp-sdk-release-list-toolbar",
                    children: (0, a.jsxs)("label", {
                        className: "mgp-sdk-release-game-selector",
                        children: [ (0, a.jsx)("span", {
                            children: "游戏名称"
                        }), (0, a.jsx)("select", {
                            "aria-label": "SDK下载游戏",
                            value: e,
                            onChange: e => onGameChange?.(e.target.value),
                            children: games.map(e => (0, a.jsx)("option", {
                                value: e,
                                children: e
                            }, e))
                        }) ]
                    })
                }), (0, a.jsxs)("div", {
                    className: "mgp-config-package-table",
                    role: "table",
                    "aria-label": "渠道包列表",
                    children: [ (0, a.jsxs)("div", {
                        className: "mgp-config-package-head",
                        role: "row",
                        children: [ (0, a.jsx)("span", {
                            role: "columnheader",
                            children: "发行渠道"
                        }), (0, a.jsx)("span", {
                            role: "columnheader",
                            children: "包名"
                        }), (0, a.jsx)("span", {
                            role: "columnheader",
                            children: "操作"
                        }) ]
                    }), l.map(n => {
                        let s = n.storeId || n.channels?.[0] || "", l = e$(s);
                        return (0, a.jsxs)("div", {
                            className: "mgp-config-package-row mgp-config-bundle-row",
                            role: "row",
                            "data-package-status": n.configurationComplete ? "complete" : "pending",
                            children: [ (0, a.jsxs)("span", {
                                className: "mgp-sdk-store-cell mgp-sdk-channel-primary-cell",
                                role: "cell",
                                children: [ (0, a.jsx)(eM, {
                                    storeId: s,
                                    size: 21
                                }), (0, a.jsxs)("span", {
                                    children: [ (0, a.jsx)("strong", {
                                        children: l?.name || "未配置"
                                    }) ]
                                }) ]
                            }), (0, a.jsx)("span", {
                                className: "mgp-sdk-package-cell",
                                role: "cell",
                                children: (0, a.jsx)("strong", {
                                    children: n.packageName || "未填写包名"
                                })
                            }), (0, a.jsxs)("span", {
                                className: "mgp-config-package-actions",
                                role: "cell",
                                children: [ (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    "aria-label": `修改${l?.name || s}渠道包`,
                                    onClick: () => r(n),
                                    children: "修改"
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    "aria-label": `查看${l?.name || s}渠道包详情`,
                                    onClick: () => h(n.id),
                                    children: "详情"
                                }), n.configurationComplete ? (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    "aria-label": `下载${l?.name || s}渠道包 ZIP`,
                                    onClick: () => {
                                        n.configurationComplete ? d(n) : m("当前渠道包尚未完成，暂时无法下载", "error");
                                    },
                                    children: "下载"
                                }) : null, n.configurationComplete ? (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    "aria-label": `进入${l?.name || s}运营配置`,
                                    onClick: () => o(n),
                                    children: "进入运营配置"
                                }) : null, (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action danger",
                                    "aria-label": `删除${l?.name || s}渠道包`,
                                    onClick: () => g(n.id),
                                    children: "删除"
                                }) ]
                            }) ]
                        }, n.id);
                    }), l.length ? null : (0, a.jsx)("div", {
                        className: "mgp-config-package-empty",
                            children: "暂无渠道包，点击下方“＋”开始构建。"
                    }) ]
                }), (0, a.jsxs)("button", {
                    type: "button",
                    className: "mgp-config-package-add-row",
                    onClick: t,
                    "aria-label": "新建渠道包",
                    children: [ (0, a.jsx)(K.Plus, {
                        size: 18
                    }), (0, a.jsx)("span", {
                        children: "新建渠道包"
                    }) ]
                }) ]
            }), x ? (0, a.jsx)(af, {
                item: x,
                gameName: e,
                gameProfile: s,
                configuredLoginMethodIds: eD(i.login?.selected),
                configuredAgreementGroups: i.agreement?.groups || [],
                configuredCompliance: i.compliance || {},
                configuredDataPlatformIds: i.data?.selected || [],
                configuredAdvertising: i.advertising || eh(),
                configuredSupport: i.support || {},
                onClose: () => h(null)
            }, x.id) : null, j ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-config-package-delete-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "删除渠道包",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("h2", {
                                children: "删除渠道包"
                            }), (0, a.jsx)("p", {
                                children: "删除后将无法继续下载或进入该渠道包的运营配置。"
                            }) ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-icon-button",
                            "aria-label": "关闭",
                            onClick: () => g(null),
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-modal-body mgp-config-package-delete-body",
                        children: [ (0, a.jsx)("span", {
                            children: "即将删除"
                        }), (0, a.jsx)("strong", {
                            children: j.packageName || "未填写包名"
                        }), (0, a.jsxs)("small", {
                            children: e$(j.storeId)?.name || "未配置渠道"
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => g(null),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button danger",
                            onClick: () => {
                                c(j.id), g(null);
                            },
                            children: "确认删除"
                        }) ]
                    }) ]
                })
            }) : null ]
        });
    }
    function QuickConfigEditor({capabilityId: capabilityId, storeId: storeId, config: config, existingPackageCount: existingPackageCount = 0, gameName: gameName = "当前游戏", onChange: onChange, onClose: onClose, onConfigured: onConfigured, toast: toast}) {
        let [showErrors, setShowErrors] = (0, n.useState)(!1), [chooser, setChooser] = (0, n.useState)(null), [loginEntryStage, setLoginEntryStage] = (0, n.useState)(() => "login" === capabilityId && !getCapabilityConfigurationStatus(capabilityId, config, storeId).ready ? "choose" : "edit"), [closePromptOpen, setClosePromptOpen] = (0, n.useState)(!1), [riskOpen, setRiskOpen] = (0, n.useState)(!1), [draftConfig, setDraftConfig] = (0, 
        n.useState)(() => JSON.parse(JSON.stringify(config))), stepId = "payment" === capabilityId ? "release" : "ops-data" === capabilityId ? "data" : capabilityId, step = R.find(e => e.id === stepId), scopedRelease = {
            ...draftConfig.release,
            channels: storeId ? [ storeId ] : draftConfig.release?.channels || []
        }, update = (e, a) => setDraftConfig(n => ({
            ...n,
            [e]: {
                ...n[e],
                ...a
            }
        })), status = getCapabilityConfigurationStatus(capabilityId, draftConfig, storeId), dirty = JSON.stringify(draftConfig[stepId]) !== JSON.stringify(config[stepId]), persist = () => {
            onChange(stepId, JSON.parse(JSON.stringify(draftConfig[stepId]))), status.ready ? (toast(`${step?.title || "SDK"}已配置，可继续出包`), onConfigured?.(capabilityId, draftConfig)) : toast(`${step?.title || "SDK"}草稿已保存，完成后可用于出包`), setRiskOpen(!1), setClosePromptOpen(!1), onClose();
        }, requestSave = () => {
            setShowErrors(!0), existingPackageCount > 0 && dirty ? setRiskOpen(!0) : persist();
        }, requestClose = () => dirty ? setClosePromptOpen(!0) : onClose();
        if (!step) return null;
        return (0, a.jsxs)(a.Fragment, {
            children: [ "edit" === loginEntryStage ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-sdk-quick-config-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    id: "login" === stepId ? "config-panel-login" : `sdk-quick-config-${stepId}`,
                    className: "mgp-config-panel mgp-foundation-panel mgp-config-card-modal mgp-sdk-quick-config-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": step.title,
                    children: [ (0, a.jsxs)("header", {
                        className: "mgp-config-card-modal-header",
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("h2", {
                                children: step.title
                            }), (0, a.jsx)("p", {
                                children: step.description
                            }) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-config-card-modal-header-actions",
                            children: [ "login" === stepId ? (0, a.jsx)("button", {
                                type: "button",
                                className: "mgp-button secondary mgp-login-csv-import",
                                onClick: () => {},
                                children: "批量导入"
                            }) : null, (0, a.jsx)("button", {
                                type: "button",
                                className: "mgp-icon-button",
                                "aria-label": `关闭${step.title}弹窗`,
                                onClick: requestClose,
                                children: (0, a.jsx)(T.X, {
                                    size: 18
                                })
                            }) ]
                        }) ]
                    }), "release" === stepId ? (0, a.jsx)(ar, {
                        config: scopedRelease,
                        onChange: e => {
                            let {
                                channels: a,
                                ...n
                            } = e;
                            update("release", n);
                        },
                        showErrors: showErrors
                    }) : null, "login" === stepId ? (0, a.jsx)(e9, {
                        config: draftConfig.login,
                        releaseConfig: scopedRelease,
                        onChange: e => update("login", e),
                        onOpenChooser: () => setChooser("login"),
                        showErrors: showErrors
                    }) : null, "agreement" === stepId ? (0, a.jsx)(as, {
                        config: draftConfig.agreement,
                        onChange: e => update("agreement", e),
                        availableChannels: [ {
                            id: "global",
                            name: "全局协议",
                            platform: "全部发行渠道"
                        } ],
                        onGoRelease: () => toast("请使用支付SDK卡片的“去配置”补充支付参数", "error"),
                        showErrors: showErrors
                    }) : null, "compliance" === stepId ? (0, a.jsx)(al, {
                        config: draftConfig.compliance,
                        onChange: e => update("compliance", e),
                        showErrors: showErrors
                    }) : null, "support" === stepId ? (0, a.jsx)(ae, {
                        config: draftConfig.support,
                        onChange: e => update("support", e),
                        showErrors: showErrors
                    }) : null, "data" === stepId ? (0, a.jsx)(aa, {
                        config: draftConfig.data,
                        onChange: e => update("data", e),
                        onOpenChooser: () => setChooser("data"),
                        showErrors: showErrors
                    }) : null, "advertising" === stepId ? (0, a.jsx)(an, {
                        config: draftConfig.advertising,
                        onChange: e => update("advertising", e),
                        showErrors: showErrors
                    }) : null, (0, a.jsxs)("footer", {
                        className: "mgp-config-footer",
                        children: [ (0, a.jsxs)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: requestSave,
                            children: [ (0, a.jsx)(z.Save, {
                                size: 16
                            }), "保存" ]
                        }) ]
                    }) ]
                })
            }) : null, "choose" === loginEntryStage ? (0, a.jsx)(e6, {
                title: "登录方式",
                description: "Guest 为默认必选登录方式，可继续多选其他登录方式。",
                items: G,
                selected: eD(draftConfig.login?.selected),
                requiredIds: [ "guest" ],
                codeOnly: !0,
                onCancel: onClose,
                onSave: e => {
                    update("login", {
                        selected: eD(e)
                    }), setLoginEntryStage("edit");
                }
            }) : null, "login" === chooser ? (0, a.jsx)(e6, {
                title: "登录方式",
                description: "Guest 为默认必选登录方式，可继续多选其他登录方式。",
                items: G,
                selected: eD(draftConfig.login?.selected),
                requiredIds: [ "guest" ],
                codeOnly: !0,
                onCancel: () => setChooser(null),
                onSave: e => {
                    update("login", {
                        selected: eD(e)
                    }), setChooser(null);
                }
            }) : null, "data" === chooser ? (0, a.jsx)(e6, {
                title: "添加归因数据平台",
                description: "当前仅开放 Firebase、AppsFlyer、Adjust 三个平台。",
                items: F,
                selected: draftConfig.data?.selected || [],
                onCancel: () => setChooser(null),
                onSave: e => {
                    update("data", {
                        selected: e
                    }), setChooser(null);
                }
            }) : null, closePromptOpen ? (0, a.jsx)(UnsavedChangesDialog, {
                title: `${step.title}参数尚未保存`,
                description: `当前${step.title}配置已修改但尚未保存，是否保存本次修改？`,
                discardLabel: "不保存修改",
                onSave: () => {
                    setClosePromptOpen(!1), requestSave();
                },
                onDiscard: onClose,
                onCancel: () => setClosePromptOpen(!1)
            }) : null, riskOpen ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-config-risk-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-config-risk-modal",
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-label": "确认修改线上 SDK 参数",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "确认修改线上 SDK 参数"
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-config-risk-content",
                        children: [ (0, a.jsxs)("p", {
                            className: "mgp-config-risk-summary",
                            children: [ "你所修改的", step.title, "参数可能会影响线上已有的 SDK 包。" ]
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => setRiskOpen(!1),
                            children: "返回检查"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: onClose,
                            children: "不保存"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button danger",
                            onClick: persist,
                            children: "确认风险并保存"
                        }) ]
                    }) ]
                })
            }) : null ]
        });
    }
    function ChannelPackageBuilder({gameName: gameName, games: games, onGameChange: onGameChange, gameProfile: gameProfile, packages: packages, config: config, onConfigChange: onConfigChange, onSave: onSave, onSaveDraft: onSaveDraft, onDiscardDraft: onDiscardDraft, onDownload: onDownload, onEnterOperations: onEnterOperations, onDelete: onDelete, initialSession: initialSession, onBackToConfig: onBackToConfig, toast: toast}) {
        let emptyForm = {
            platform: "",
            storeId: "",
            packageName: "",
            includedCapabilities: [],
            dataPlatformIds: [],
            advertisingProviderId: ""
        }, restoredSession = initialSession || {}, [editingId, setEditingId] = (0, n.useState)(restoredSession.editingId || null), [channelDrafts, setChannelDrafts] = (0, n.useState)(restoredSession.channelDrafts || {}), [downloadConfirmation, setDownloadConfirmation] = (0, n.useState)(null), [draftPackageId] = (0, 
        n.useState)(restoredSession.draftPackageId || `sdk-package-${Date.now()}`), drawerRef = (0, n.useRef)(null), [form, setForm] = (0, 
        n.useState)({
            ...emptyForm,
            ...restoredSession.form || {}
        }), [errors, setErrors] = (0, n.useState)({}), [quickConfigCapabilityId, setQuickConfigCapabilityId] = (0, n.useState)(null), [closeDecisionOpen, setCloseDecisionOpen] = (0, n.useState)(!1), initialSessionSignatureRef = (0, n.useRef)(JSON.stringify({
            editingId: restoredSession.editingId || null,
            form: {
                ...emptyForm,
                ...restoredSession.form || {}
            },
            channelDrafts: restoredSession.channelDrafts || {}
        })), completeDataPlatformIds = getCompletedDataProviderIds(config.data || {}), completeAdvertisingProviderIds = getCompletedAdvertisingProviderIds(config.advertising || {}), defaultDataPlatformIds = () => {
            let e = completeDataPlatformIds.includes("firebase") ? [ "firebase" ] : [], a = [ "appsflyer", "adjust" ].find(e => completeDataPlatformIds.includes(e));
            return a ? [ ...e, a ] : e.length ? e : completeDataPlatformIds.slice(0, 1);
        }, defaultAdvertisingProviderId = () => completeAdvertisingProviderIds[0] || "", configuredCapabilitiesFor = e => {
            return ec.filter(a => getCapabilityConfigurationStatus(a.id, config, e).ready).map(e => e.id);
        }, configuredIds = configuredCapabilitiesFor(form.storeId), configuredSet = new Set(configuredIds), validDataPlatformIds = [ ...completeDataPlatformIds.includes("firebase") && (form.dataPlatformIds || []).includes("firebase") ? [ "firebase" ] : [], ...[ "appsflyer", "adjust" ].find(e => completeDataPlatformIds.includes(e) && (form.dataPlatformIds || []).includes(e)) ? [ [ "appsflyer", "adjust" ].find(e => completeDataPlatformIds.includes(e) && (form.dataPlatformIds || []).includes(e)) ] : [] ], validAdvertisingProviderId = completeAdvertisingProviderIds.includes(form.advertisingProviderId) ? form.advertisingProviderId : "", effectiveIncludedCapabilities = Array.from(new Set([ ...form.includedCapabilities.filter(e => "ops-data" !== e && "advertising" !== e), ...validDataPlatformIds.length ? [ "ops-data" ] : [], ...validAdvertisingProviderId ? [ "advertising" ] : [] ])), editingPackage = editingId ? packages.find(e => e.id === editingId) : null, channelHasPackage = e => packages.some(a => a.storeId === e && a.id !== editingId), startNew = () => {
            setEditingId(null), setForm({
                platform: "",
                storeId: "",
                packageName: "",
                includedCapabilities: [],
                dataPlatformIds: [],
                advertisingProviderId: ""
            }), setErrors({});
        }, startEdit = e => {
            let a = e$(e.storeId);
            setEditingId(e.id), setForm({
                platform: a?.platform || "",
                storeId: e.storeId || "",
                packageName: e.packageName || "",
                includedCapabilities: eK(e).filter(a => getCapabilityConfigurationStatus(a, config, e.storeId).ready),
                dataPlatformIds: Object.prototype.hasOwnProperty.call(e, "dataPlatformIds") ? e.dataPlatformIds || [] : e.configSnapshot?.data?.selected || defaultDataPlatformIds(),
                advertisingProviderId: Object.prototype.hasOwnProperty.call(e, "advertisingProviderId") ? e.advertisingProviderId || "" : e.configSnapshot?.advertising?.provider && "none" !== e.configSnapshot.advertising.provider ? e.configSnapshot.advertising.provider : e.configSnapshot?.advertising ? "" : defaultAdvertisingProviderId()
            }), setErrors({});
        }, selectChannel = e => {
            if (editingId || channelHasPackage(e)) return;
            let a = e$(e), nextDrafts = {
                ...channelDrafts
            };
            form.storeId && (nextDrafts[form.storeId] = {
                editingId: editingId,
                form: {
                    ...form,
                    includedCapabilities: [ ...effectiveIncludedCapabilities ]
                }
            }), setChannelDrafts(nextDrafts);
            let saved = nextDrafts[e];
            saved ? (setEditingId(saved.editingId || null), setForm({
                ...emptyForm,
                ...saved.form,
                includedCapabilities: saved.form.includedCapabilities.filter(a => getCapabilityConfigurationStatus(a, config, e).ready)
            }), setErrors({})) : (setEditingId(null), setForm({
                platform: a?.platform || "",
                storeId: e,
                packageName: "",
                includedCapabilities: configuredCapabilitiesFor(e),
                dataPlatformIds: defaultDataPlatformIds(),
                advertisingProviderId: defaultAdvertisingProviderId()
            }), setErrors({}));
        }, submit = () => {
            let readyCapabilities = effectiveIncludedCapabilities.filter(e => getCapabilityConfigurationStatus(e, config, form.storeId).ready), invalidSelectedCapabilities = effectiveIncludedCapabilities.filter(e => !getCapabilityConfigurationStatus(e, config, form.storeId).ready), selectedDataPlatformIds = validDataPlatformIds, selectedAdvertisingProviderId = validAdvertisingProviderId;
            let a = {}, n = String(form.packageName || "").trim(), s = form.storeId ? et(form.storeId, n) : "请先选择发行渠道";
            form.storeId || (a.storeId = "请选择发行渠道"), s && (a.packageName = s), effectiveIncludedCapabilities.length || (a.capabilities = "请至少选择一种 SDK 能力");
            editingId && (!editingPackage || form.storeId !== editingPackage.storeId) && (a.storeId = "修改组合包时不支持变更发行渠道"), !editingId && channelHasPackage(form.storeId) && (a.storeId = "该发行渠道已有 SDK 组合包，请从列表进入修改");
            invalidSelectedCapabilities.length && (a.capabilities = `已选择的 ${invalidSelectedCapabilities.map(e => ec.find(a => a.id === e)?.title || e).join("、")} 配置已变化，请重新确认`);
            if (Object.keys(a).length) return setErrors(a), toast("请检查 SDK 生成信息", "error"), void 0;
            if (!readyCapabilities.length) return setErrors(e => ({...e, capabilities: "请至少选择一种已配置完成的 SDK 能力"})), toast("请先完成 SDK 能力配置", "error"), void 0;
            let i = {
                id: editingPackage?.id || draftPackageId,
                storeId: form.storeId,
                platform: form.platform,
                packageName: n,
                includedCapabilities: Array.from(new Set(readyCapabilities)),
                dataPlatformIds: readyCapabilities.includes("ops-data") ? selectedDataPlatformIds : [],
                advertisingProviderId: readyCapabilities.includes("advertising") ? selectedAdvertisingProviderId : "",
                operationsDraft: drawerRef.current?.__mgpStrategyModel || null,
                generatedAt: editingPackage?.generatedAt || (new Date).toISOString(),
                __mode: editingPackage ? "edit" : "create"
            };
            let {
                __mode: buildMode,
                ...packageItem
            } = i;
            !1 !== onSave(packageItem) && (window.__MGP_STRATEGY_GROUPS_API__?.commit?.(drawerRef.current), toast("edit" === buildMode ? "SDK 组合包已修改" : "SDK 组合包已生成"));
        }, unavailableCapabilities = form.storeId ? ec.map(e => ({
            ...e,
            status: getCapabilityConfigurationStatus(e.id, config, form.storeId)
        })).filter(e => !e.status.ready) : [], createSession = () => {
            let nextDrafts = {
                ...channelDrafts
            };
            return form.storeId && (nextDrafts[form.storeId] = {
                editingId: editingId,
                form: {
                    ...form,
                    includedCapabilities: [ ...effectiveIncludedCapabilities ]
                }
            }), {
                editingId: editingId,
                form: {
                    ...form,
                    includedCapabilities: [ ...effectiveIncludedCapabilities ]
                },
                channelDrafts: nextDrafts,
                draftPackageId: draftPackageId,
                operationsDraft: window.__MGP_STRATEGY_GROUPS_API__?.getModel?.(drawerRef.current) || restoredSession.operationsDraft || null
            };
        }, requestClose = () => {
            let currentSignature = JSON.stringify({
                editingId: editingId,
                form: form,
                channelDrafts: channelDrafts
            }), strategyDirty = window.__MGP_STRATEGY_GROUPS_API__?.isDirty?.(drawerRef.current);
            currentSignature !== initialSessionSignatureRef.current || strategyDirty ? setCloseDecisionOpen(!0) : onEnterOperations?.();
        }, saveDraftAndClose = () => {
            let session = createSession();
            window.__MGP_STRATEGY_GROUPS_API__?.commit?.(drawerRef.current), setCloseDecisionOpen(!1), onSaveDraft?.(session);
        }, discardDraftAndClose = () => {
            window.__MGP_STRATEGY_GROUPS_API__?.discard?.(drawerRef.current), setCloseDecisionOpen(!1), onDiscardDraft?.(draftPackageId);
        }, returnToConfig = () => onBackToConfig({
            session: createSession(),
            channelId: form.storeId,
            missingCapabilityIds: unavailableCapabilities.map(e => e.id)
        }), confirmGenerate = () => {
            let i = downloadConfirmation;
            if (!i) return;
            let {
                __mode: e,
                ...a
            } = i;
            !1 !== onSave(a) && (window.__MGP_STRATEGY_GROUPS_API__?.commit?.(drawerRef.current), toast("edit" === e ? "SDK 组合包已修改" : "SDK 组合包已生成"), setDownloadConfirmation(null));
        };
        (0, n.useEffect)(() => {
            let e = initialSession || {};
            setChannelDrafts(e.channelDrafts || {}), setEditingId(e.editingId || null), setForm({
                ...emptyForm,
                ...e.form || {}
            }), initialSessionSignatureRef.current = JSON.stringify({
                editingId: e.editingId || null,
                form: {
                    ...emptyForm,
                    ...e.form || {}
                },
                channelDrafts: e.channelDrafts || {}
            }), setErrors({}), setDownloadConfirmation(null), setCloseDecisionOpen(!1);
        }, [ gameName ]);
        let generationCountryCodes = form.storeId ? el(form.storeId).flatMap(e => e.countries.map(e => e.code)) : [], generationLoginIds = eD([ "guest", ...getCompletedLoginMethodsForPlatform(config.login || {}, e$(form.storeId)?.platform).map(e => e.id) ]), generationAgreementGroups = (config.agreement?.groups || []).filter(e => eQ(e)), generationDataPlatformIds = effectiveIncludedCapabilities.includes("ops-data") ? validDataPlatformIds : [], generationAdvertisingProviderId = effectiveIncludedCapabilities.includes("advertising") ? validAdvertisingProviderId : "", capabilityPreviewConfig = {
            ...config,
            release: {
                ...config.release || {},
                channels: form.storeId ? [ form.storeId ] : []
            }
        };
        return (0, a.jsxs)(a.Fragment, {
            children: [ (0, a.jsx)(ay, {
                gameName: gameName,
                games: games,
                onGameChange: onGameChange,
                gameProfile: gameProfile,
                packages: packages.filter(e => !1 !== e.configurationComplete),
                config: config,
                configuredLoginMethodIds: eD(config.login?.selected),
                configuredAgreementGroups: config.agreement?.groups || [],
                configuredCompliance: config.compliance || {},
                configuredDataPlatformIds: getCompletedDataProviderIds(config.data || {}),
                configuredAdvertising: config.advertising || eh(),
                configuredSupport: config.support || {},
                initialEditingPackageId: null,
                onInitialEditingHandled: () => {},
                onStartGenerate: () => {},
                onDownload: () => {},
                onSave: () => {},
                onGoLoginConfig: () => {},
                onGoAgreementConfig: () => {},
                toast: toast
            }), (0, a.jsxs)("div", {
            className: "mgp-drawer-backdrop mgp-generation-drawer-backdrop",
            role: "presentation",
            children: [ (0, a.jsxs)("section", {
                ref: drawerRef,
                className: "mgp-sdk-drawer mgp-generation-drawer mgp-builder-panel mgp-channel-package-builder",
                role: "dialog",
                "aria-modal": "true",
                "aria-label": editingId ? "修改SDK" : "生成SDK",
                "data-drawer-mode": editingId ? "edit" : "create",
                "data-package-capabilities": effectiveIncludedCapabilities.join(","),
                "data-store-id": form.storeId,
                "data-sdk-version-id": draftPackageId,
                "data-package-label": form.packageName || "待生成 SDK 组合包",
                "data-channel-country-codes": generationCountryCodes.join(","),
                "data-release-country-codes": generationCountryCodes.join(","),
                "data-configured-login-ids": generationLoginIds.join(","),
                "data-configured-agreement-groups": JSON.stringify(generationAgreementGroups),
                "data-configured-compliance": JSON.stringify(config.compliance || {}),
                "data-configured-support": JSON.stringify(config.support || {}),
                "data-configured-data-platform-ids": generationDataPlatformIds.join(","),
                "data-configured-advertising-provider": generationAdvertisingProviderId,
                "data-build-mode": editingId ? "edit" : "create",
                children: [ (0, a.jsxs)("header", {
                    className: "mgp-sdk-drawer-header",
                    children: [ (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("span", {
                            children: gameName
                        }), (0, a.jsx)("h2", {
                            children: editingId ? "修改SDK" : "生成SDK"
                        }), (0, a.jsx)("p", {
                            children: editingId ? "可重新调整包名、SDK 能力与运营配置。" : "选择发行渠道、填写包名、选择 SDK 能力并完成运营配置。"
                        }) ]
                    }), (0, a.jsx)("button", {
                        type: "button",
                        onClick: requestClose,
                        "aria-label": "关闭生成SDK抽屉",
                        children: (0, a.jsx)(T.X, {
                            size: 18
                        })
                    }) ]
                }), (0, a.jsxs)("div", {
                    className: "mgp-channel-package-builder-body mgp-sdk-drawer-body mgp-operations-drawer-body",
                    children: [ (0, a.jsxs)("section", {
                        className: "mgp-channel-package-target",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-channel-package-section-heading",
                            children: [ (0, a.jsx)("span", {
                                children: "1"
                            }), (0, a.jsxs)("div", {
                                children: (0, a.jsx)("h3", {
                                    children: editingId ? "发行渠道" : "选择发行渠道"
                                })
                            }) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-channel-package-fields",
                            children: [ (0, a.jsxs)("div", {
                                className: `mgp-channel-package-channel-field ${errors.storeId ? "has-error" : ""}`,
                                children: [ (0, a.jsx)("div", {
                                    className: "mgp-channel-package-channel-grid",
                                    role: "radiogroup",
                                    "aria-label": editingId ? "发行渠道不可修改" : "选择发行渠道",
                                    children: V.map(e => {
                                        let n = form.storeId === e.id, s = packages.filter(a => a.storeId === e.id).length, l = !!editingId || s > 0;
                                        return (0, a.jsxs)("button", {
                                            type: "button",
                                            role: "radio",
                                            "aria-checked": n,
                                            "aria-disabled": l,
                                            disabled: l,
                                            className: `${n ? "selected" : ""} ${l ? "is-locked" : ""} ${editingId && !n ? "is-edit-unavailable" : ""}`,
                                            "data-package-channel": e.id,
                                            onClick: () => selectChannel(e.id),
                                            children: [ (0, a.jsx)(eM, {
                                                storeId: e.id,
                                                size: 30
                                            }), (0, a.jsxs)("span", {
                                                children: [ (0, a.jsx)("strong", {
                                                    children: e.name
                                                }) ]
                                            }), editingId && n ? (0, a.jsx)("em", {
                                                children: "当前渠道"
                                            }) : s ? (0, a.jsx)("em", {
                                                children: "已有组合包"
                                            }) : null ]
                                        }, e.id);
                                    })
                                }), errors.storeId ? (0, a.jsx)("small", {
                                    className: "mgp-channel-package-error",
                                    children: errors.storeId
                                }) : null ]
                            }), form.storeId ? (0, a.jsxs)("label", {
                                className: errors.packageName ? "has-error" : "",
                                children: [ (0, a.jsx)("span", {
                                    children: "包名"
                                }), (0, a.jsx)("input", {
                                    type: "text",
                                    "aria-label": "渠道包包名",
                                    "data-package-field": "package-name",
                                    value: form.packageName,
                                    placeholder: "com.company.game",
                                    onChange: e => {
                                        setForm(a => ({
                                            ...a,
                                            packageName: e.target.value.trimStart()
                                        })), setErrors(a => ({
                                            ...a,
                                            packageName: ""
                                        }));
                                    }
                                }), (0, a.jsx)("small", {
                                    children: errors.packageName || (form.storeId ? ei(form.storeId) : "选择发行渠道后校验对应包名格式。")
                                }) ]
                            }) : null ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-channel-package-capabilities",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-channel-package-section-heading",
                            children: [ (0, a.jsx)("span", {
                                children: "2"
                            }), (0, a.jsxs)("div", {
                                children: (0, a.jsx)("h3", {
                                    children: "选择 SDK 能力"
                                })
                            }) ]
                        }), (0, a.jsx)("div", {
                            className: `mgp-channel-package-capability-grid ${errors.capabilities ? "has-error" : ""}`,
                             role: "group",
                             "aria-label": "选择要包含的SDK能力",
                             children: ec.map(e => {
                                 let s = getCapabilityConfigurationStatus(e.id, config, form.storeId), platformCapability = [ "ops-data", "advertising" ].includes(e.id), n = s.ready && ("ops-data" === e.id ? validDataPlatformIds.length > 0 : "advertising" === e.id ? !!validAdvertisingProviderId : effectiveIncludedCapabilities.includes(e.id)), configuredLogos = s.ready ? getCapabilityConfiguredLogos(e.id, capabilityPreviewConfig) : [], configuredPreview = s.ready ? getCapabilityConfiguredPreview(e.id, capabilityPreviewConfig) : "待配置", i = () => {
                                    if (!form.storeId || !s.ready || platformCapability) return;
                                    setForm(a => ({
                                        ...a,
                                        includedCapabilities: a.includedCapabilities.includes(e.id) ? a.includedCapabilities.filter(a => a !== e.id) : [ ...a.includedCapabilities, e.id ]
                                    })), setErrors(e => ({
                                        ...e,
                                        capabilities: ""
                                    }));
                                }, platformDescription = "ops-data" === e.id ? "AppsFlyer 与 Adjust 支持二选一。" : "advertising" === e.id ? "广告变现平台支持二选一。" : "", paymentDescription = "payment" === e.id ? "支付 SDK 仅在当前发行渠道生效，其他支付渠道的配置不生效。" : "", inlineProviderSelector = s.ready && "ops-data" === e.id ? (0, a.jsx)("div", {
                                    className: "mgp-capability-inline-provider",
                                    onClick: e => e.stopPropagation(),
                                    onKeyDown: e => e.stopPropagation(),
                                    children: (0, a.jsx)("div", {
                                        className: "mgp-package-provider-options",
                                        role: "group",
                                        "aria-label": "选择归因数据平台",
                                        children: completeDataPlatformIds.map(providerId => {
                                            let selected = validDataPlatformIds.includes(providerId), firebase = "firebase" === providerId;
                                            return (0, a.jsxs)("button", {
                                                type: "button",
                                                "aria-pressed": selected,
                                                className: selected ? "selected" : "",
                                                onClick: () => {
                                                    setForm(current => {
                                                        let rawIds = current.dataPlatformIds || [], exclusiveId = [ "appsflyer", "adjust" ].find(e => completeDataPlatformIds.includes(e) && rawIds.includes(e)), currentIds = [ ...completeDataPlatformIds.includes("firebase") && rawIds.includes("firebase") ? [ "firebase" ] : [], ...exclusiveId ? [ exclusiveId ] : [] ], nextIds = firebase ? currentIds.includes(providerId) ? currentIds.filter(e => e !== providerId) : [ ...currentIds, providerId ] : currentIds.includes(providerId) ? currentIds.filter(e => e !== providerId) : [ ...currentIds.filter(e => "appsflyer" !== e && "adjust" !== e), providerId ];
                                                        return {
                                                            ...current,
                                                            dataPlatformIds: nextIds,
                                                            includedCapabilities: nextIds.length ? current.includedCapabilities.includes("ops-data") ? current.includedCapabilities : [ ...current.includedCapabilities, "ops-data" ] : current.includedCapabilities.filter(e => "ops-data" !== e)
                                                        };
                                                    }), setErrors(e => ({
                                                        ...e,
                                                        capabilities: ""
                                                    }));
                                                },
                                                children: [ (0, a.jsx)("span", {
                                                    className: "mgp-package-provider-check",
                                                    "aria-hidden": "true",
                                                    children: selected ? (0, a.jsx)(o.Check, {
                                                        size: 11
                                                    }) : null
                                                }), F.find(e => e.id === providerId)?.name || providerId ]
                                            }, providerId);
                                        })
                                    })
                                }) : s.ready && "advertising" === e.id ? (0, a.jsx)("div", {
                                    className: "mgp-capability-inline-provider",
                                    onClick: e => e.stopPropagation(),
                                    onKeyDown: e => e.stopPropagation(),
                                    children: (0, a.jsx)("div", {
                                        className: "mgp-package-provider-options",
                                        role: "group",
                                        "aria-label": "选择广告变现平台",
                                        children: completeAdvertisingProviderIds.map(providerId => {
                                            let selected = validAdvertisingProviderId === providerId;
                                            return (0, a.jsxs)("button", {
                                                type: "button",
                                                "aria-pressed": selected,
                                                className: selected ? "selected" : "",
                                                onClick: () => {
                                                    setForm(current => {
                                                        let nextProviderId = current.advertisingProviderId === providerId ? "" : providerId;
                                                        return {
                                                            ...current,
                                                            advertisingProviderId: nextProviderId,
                                                            includedCapabilities: nextProviderId ? current.includedCapabilities.includes("advertising") ? current.includedCapabilities : [ ...current.includedCapabilities, "advertising" ] : current.includedCapabilities.filter(e => "advertising" !== e)
                                                        };
                                                    }), setErrors(e => ({
                                                        ...e,
                                                        capabilities: ""
                                                    }));
                                                },
                                                children: [ (0, a.jsx)("span", {
                                                    className: "mgp-package-provider-check",
                                                    "aria-hidden": "true",
                                                    children: selected ? (0, a.jsx)(o.Check, {
                                                        size: 11
                                                    }) : null
                                                }), eu(providerId) ]
                                            }, providerId);
                                        })
                                    })
                                 }) : null;
                                 return (0, a.jsxs)("div", {
                                     className: `mgp-channel-package-capability-card ${n ? "selected" : ""} ${s.ready ? "configured" : "pending"} ${platformCapability ? "supports-inline-provider platform-capability" : "simple-capability"} ${inlineProviderSelector ? "has-inline-provider" : ""} ${form.storeId ? "" : "disabled no-channel"}`,
                                    role: platformCapability || !s.ready ? "group" : "checkbox",
                                    tabIndex: !platformCapability && form.storeId && s.ready ? 0 : -1,
                                    "aria-checked": !platformCapability && s.ready ? n : void 0,
                                    "aria-disabled": !form.storeId ? !0 : void 0,
                                    "data-capability-id": e.id,
                                    onClick: platformCapability ? void 0 : i,
                                    onKeyDown: event => {
                                        !platformCapability && event.target === event.currentTarget && ("Enter" === event.key || " " === event.key) && (event.preventDefault(), i());
                                    },
                                    children: [ !platformCapability ? (0, a.jsx)("span", {
                                        className: "mgp-channel-package-capability-check",
                                        children: n ? (0, a.jsx)(o.Check, {
                                            size: 14
                                        }) : null
                                     }) : null, (0, a.jsxs)("span", {
                                         className: "mgp-channel-package-capability-copy",
                                          children: [ (0, a.jsx)("strong", {
                                              children: e.title
                                          }), form.storeId && paymentDescription ? (0, a.jsx)("small", {
                                              className: "mgp-channel-package-capability-scope-hint",
                                              children: paymentDescription
                                          }) : null, form.storeId && s.ready && platformCapability ? (0, a.jsx)("small", {
                                              className: "mgp-channel-package-capability-platform-hint",
                                              children: platformDescription
                                          }) : null, form.storeId && s.ready ? configuredLogos.length ? (0, a.jsx)("span", {
                                              className: "mgp-channel-package-capability-logos",
                                              "aria-label": configuredPreview,
                                             children: configuredLogos.map((item, index) => (0, a.jsx)("span", {
                                                 className: "mgp-channel-package-capability-logo-summary",
                                                 title: item.label,
                                                 children: "store" === item.kind ? (0, a.jsx)(eM, {
                                                     storeId: item.id,
                                                     size: 18
                                                 }) : (0, a.jsx)(e4, {
                                                     methodId: item.id
                                                 })
                                             }, `${item.kind}-${item.id || index}`))
                                          }) : platformCapability ? null : (0, a.jsx)("small", {
                                              className: "mgp-channel-package-capability-configured-copy",
                                              children: configuredPreview
                                         }) : form.storeId ? (0, a.jsx)("small", {
                                             children: "待配置"
                                         }) : null ]
                                     }), form.storeId && !s.ready ? (0, a.jsx)("span", {
                                         className: "mgp-channel-package-capability-actions",
                                         children: (0, a.jsx)("button", {
                                             type: "button",
                                             className: "mgp-capability-config-action",
                                            onClick: event => {
                                                event.stopPropagation(), setQuickConfigCapabilityId(e.id);
                                             },
                                             children: "前往配置"
                                         })
                                    }) : null, inlineProviderSelector ]
                                }, e.id);
                            })
                        }), errors.capabilities ? (0, a.jsx)("p", {
                            className: "mgp-channel-package-error",
                            children: errors.capabilities
                        }) : null ]
                    }), form.storeId && effectiveIncludedCapabilities.length ? (0, a.jsxs)(a.Fragment, {
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-generation-operations-heading",
                            children: [ (0, a.jsx)("span", {
                                children: "3"
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("h3", {
                                    children: "运营配置"
                                }), (0, a.jsx)("p", {
                                            children: "配置发行策略、SDK 和运行开关，生成后可继续调整。"
                                }) ]
                            }) ]
                        }), (0, a.jsx)("div", {
                            className: "mgp-operations-workspace-head",
                            children: (0, a.jsx)("strong", {
                                children: form.packageName || "待生成 SDK 组合包"
                            })
                        }), (0, a.jsx)("section", {
                            className: "mgp-operations-section",
                            children: "正在加载运营配置…"
                        }) ]
                    }) : null ]
                }), (0, a.jsxs)("footer", {
                    className: "mgp-sdk-drawer-footer",
                    children: [ (0, a.jsx)("span", {
                        children: form.storeId ? `已选择 ${effectiveIncludedCapabilities.length} / ${ec.length} 项能力` : "选择渠道后自动带入已配置能力"
                    }), (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: requestClose,
                            children: "返回列表"
                        }), (0, a.jsxs)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: submit,
                            children: [ (0, a.jsx)(z.Save, {
                                size: 16
                            }), editingId ? "保存修改" : "生成SDK" ]
                        }) ]
                    }) ]
                }) ]
            }), quickConfigCapabilityId ? (0, a.jsx)(QuickConfigEditor, {
                capabilityId: quickConfigCapabilityId,
                storeId: form.storeId,
                config: config,
                existingPackageCount: packages.length,
                gameName: gameName,
                onChange: (e, a) => onConfigChange?.(e, a),
                onClose: () => setQuickConfigCapabilityId(null),
                onConfigured: (e, nextConfig) => {
                    let dataIds = getCompletedDataProviderIds(nextConfig.data || {}), advertisingIds = getCompletedAdvertisingProviderIds(nextConfig.advertising || {}), defaultDataIds = [ ...dataIds.includes("firebase") ? [ "firebase" ] : [], ...[ "appsflyer", "adjust" ].find(e => dataIds.includes(e)) ? [ [ "appsflyer", "adjust" ].find(e => dataIds.includes(e)) ] : [] ];
                    setForm(a => ({
                        ...a,
                        includedCapabilities: a.includedCapabilities.includes(e) ? a.includedCapabilities : [ ...a.includedCapabilities, e ],
                        dataPlatformIds: "ops-data" === e && !(a.dataPlatformIds || []).length ? defaultDataIds.length ? defaultDataIds : dataIds.slice(0, 1) : a.dataPlatformIds,
                        advertisingProviderId: "advertising" === e && !a.advertisingProviderId ? advertisingIds[0] || "" : a.advertisingProviderId
                    })), setErrors(e => ({
                        ...e,
                        capabilities: ""
                    }));
                },
                toast: toast
            }, quickConfigCapabilityId) : null, closeDecisionOpen ? (0, a.jsx)(UnsavedChangesDialog, {
                title: "生成配置尚未完成",
                description: "当前 SDK 生成配置尚未完成，是否保存为草稿以便下次继续？",
                saveLabel: "保存草稿",
                discardLabel: "不保存",
                cancelLabel: "继续编辑",
                onSave: saveDraftAndClose,
                onDiscard: discardDraftAndClose,
                onCancel: () => setCloseDecisionOpen(!1)
            }) : null, downloadConfirmation ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-sdk-download-confirm-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-sdk-download-confirm-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "edit" === downloadConfirmation.__mode ? "确认修改SDK组合包" : "确认生成SDK",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "edit" === downloadConfirmation.__mode ? "确认修改 SDK 组合包" : "确认生成SDK"
                        }), (0, a.jsx)("p", {
                            children: "edit" === downloadConfirmation.__mode ? "请确认修改后的包名与 SDK 能力。" : "请确认本次生成的 SDK 组合包信息。"
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-sdk-download-confirm-content",
                        children: [ (0, a.jsxs)("dl", {
                            children: [ (0, a.jsx)("dt", {
                                children: "游戏名称"
                            }), (0, a.jsx)("dd", {
                                children: gameName
                            }), (0, a.jsx)("dt", {
                                children: "发行渠道"
                            }), (0, a.jsx)("dd", {
                                children: e$(downloadConfirmation.storeId)?.name || downloadConfirmation.storeId
                            }), (0, a.jsx)("dt", {
                                children: "包名"
                            }), (0, a.jsx)("dd", {
                                children: downloadConfirmation.packageName
                            }) ]
                        }), (0, a.jsxs)("section", {
                            children: [ (0, a.jsx)("strong", {
                                children: "SDK 能力"
                            }), (0, a.jsx)("div", {
                                className: "mgp-sdk-download-confirm-capabilities",
                                children: downloadConfirmation.includedCapabilities.map(e => (0, a.jsx)("span", {
                                    children: ec.find(a => a.id === e)?.title || e
                                }, e))
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => setDownloadConfirmation(null),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: confirmGenerate,
                            children: "edit" === downloadConfirmation.__mode ? "确认修改" : "确认生成"
                        }) ]
                    }) ]
                })
            }) : null ]
        }) ]
        });
    }
    const configRiskLabels = {
        selected: "已选择项目",
        channels: "发行渠道",
        deliveryUrl: "发货地址",
        provider: "服务平台",
        groups: "协议分组",
        languages: "协议语种",
        ageThreshold: "年龄阈值",
        kwsClientId: "KWS Client ID",
        kwsClientSecret: "KWS Client Secret",
        kwsVerifySecret: "KWS Verify Secret",
        kwsRedirect: "KWS Redirect URL",
        onlineName: "在线客服名称",
        feedbackTypes: "反馈类型",
        faqGroups: "FAQ 分组",
        botName: "智能客服名称",
        knowledgeItems: "知识库",
        admobAppId: "AdMob App ID",
        maxSdkKey: "MAX SDK Key",
        sharedSecret: "支付共享密钥",
        googleServerConfig: "Google server端参数",
        licenseKey: "License Key",
        clientId: "Client ID",
        clientSecret: "Client Secret",
        secret: "Secret",
        redirect: "Redirect",
        scheme: "Scheme"
    };
    const configRiskImpacts = {
        release: "可能导致支付校验、订单回调或发货异常。",
        login: "可能导致线上玩家登录失败、账号绑定或回调异常。",
        agreement: "可能改变线上协议内容、语种覆盖及用户确认流程。",
        compliance: "可能影响年龄判断、KWS 验证及游客保护流程。",
        data: "可能导致归因、埋点或事件数据中断。",
        advertising: "可能导致广告初始化失败、填充率或收入数据异常。",
        support: "可能影响线上客服、反馈、FAQ 或智能客服服务。"
    };
    function cloneConfigRiskValue(e) {
        return JSON.parse(JSON.stringify(null == e ? null : e));
    }
    function summarizeConfigRiskValue(e, key = "") {
        if (/(secret|token|password|private|license|sharedsecret|sdkkey)/i.test(key)) return null == e || "" === String(e).trim() ? "未配置" : "已配置（密文）";
        if (Array.isArray(e)) return e.length ? e.map(e => "object" == typeof e && e ? e.name || e.title || e.id || "配置项" : String(e)).join("、") : "无";
        if (e && "object" == typeof e) return Object.keys(e).length ? `${Object.keys(e).length} 项配置` : "无";
        if ("boolean" == typeof e) return e ? "开启" : "关闭";
        return null == e || "" === String(e).trim() ? "未配置" : String(e);
    }
    function buildConfigRiskChanges(e, a, path = [], result = []) {
        if (JSON.stringify(e) === JSON.stringify(a)) return result;
        let eObject = e && "object" == typeof e && !Array.isArray(e), aObject = a && "object" == typeof a && !Array.isArray(a);
        if (eObject && aObject) {
            Array.from(new Set([ ...Object.keys(e), ...Object.keys(a) ])).forEach(key => buildConfigRiskChanges(e[key], a[key], [ ...path, key ], result));
            return result;
        }
        let key = path[path.length - 1] || "配置内容", parent = path.length > 1 ? path[path.length - 2] : "", label = configRiskLabels[key] || configRiskLabels[parent] || key.replace(/([A-Z])/g, " $1").trim();
        let beforeValue = summarizeConfigRiskValue(e, key), afterValue = summarizeConfigRiskValue(a, key);
        beforeValue === afterValue && String(afterValue).includes("密文") && (afterValue = "已修改（密文）");
        result.push({
            label: label,
            before: beforeValue,
            after: afterValue
        });
        return result;
    }
    function ac({gameName: e, setGameName: l, games: i, gameProfiles: t, onAddGame: r, onUpdateGame: d, config: c, setConfig: p, activeStep: h, setActiveStep: u, validMap: g, completeMap: x, onStepSaved: j, onStepsDirty: b, toast: f, availableChannels: y, mode: v, packages: k, onModeChange: N, onDownloadPackage: downloadPackage, onEnterOperations: S, onDeletePackage: w, downloadReturnContext: downloadReturnContext, onOpenSdkDownload: onOpenSdkDownload}) {
        let [A, $] = (0, n.useState)(null), [I, D] = (0, n.useState)(!1), [sdkPreflightOpen, setSdkPreflightOpen] = (0, n.useState)(!1), [E, P] = (0, n.useState)("create"), [pendingDeleteButton, setPendingDeleteButton] = (0, n.useState)(null), [configRiskReview, setConfigRiskReview] = (0, n.useState)(null), [agreementRiskReview, setAgreementRiskReview] = (0, n.useState)(null), [unsavedCloseOpen, setUnsavedCloseOpen] = (0, n.useState)(!1), savedConfigBaselineRef = (0, n.useRef)({}), deleteBypassRef = (0, n.useRef)(new WeakSet), [O, M] = (0, 
        n.useState)(eo), [L, U] = (0, n.useState)(null), _ = h >= 0 ? R[h] : null, B = Object.values(x).filter(Boolean).length, sdkIncompleteSteps = R.filter(e => !x[e.id]), unresolvedReturnCapabilityIds = (downloadReturnContext?.missingCapabilityIds || []).filter(e => !getCapabilityConfigurationStatus(e, c, downloadReturnContext?.channelId || "").ready), returnMissingSet = new Set(unresolvedReturnCapabilityIds.map(e => "payment" === e ? "release" : "ops-data" === e ? "data" : e)), handleConfigDeleteCapture = e => {
            let button = e.target.closest?.("button");
            if (!button || !button.closest(".mgp-config-card-modal") || button.closest(".mgp-config-package-delete-modal") || button.classList.contains("mgp-login-delete") || button.hasAttribute("data-agreement-action")) return;
            if (deleteBypassRef.current.has(button)) return void deleteBypassRef.current.delete(button);
            let label = `${button.getAttribute("aria-label") || ""} ${button.textContent || ""}`.trim();
            if (!button.classList.contains("danger") && !label.includes("删除") && !label.includes("移除")) return;
            e.preventDefault(), e.stopPropagation(), setPendingDeleteButton(button);
        }, openSdkDownload = () => {
            if (downloadReturnContext) return onOpenSdkDownload();
            sdkIncompleteSteps.length ? setSdkPreflightOpen(!0) : onOpenSdkDownload();
        }, V = O.name.trim() && O.type && O.stage, X = (e, a) => {
            b([ e ]), p(n => ({
                ...n,
                [e]: {
                    ...n[e],
                    ...a
                }
            }));
        }, H = e => "login" === e ? eD(c.login?.selected).some(e => "guest" !== e) : "agreement" === e ? (c.agreement?.groups || []).length > 0 : "compliance" === e ? [ "ageThreshold", "kwsClientId", "kwsClientSecret", "kwsVerifySecret", "kwsRedirect" ].some(e => String(c.compliance?.[e] || "").trim()) : "data" === e ? getStartedDataProviderIds(c.data || {}).length > 0 : "advertising" === e ? getStartedAdvertisingProviderIds(c.advertising || {}).length > 0 : "support" === e && (!!String(c.support?.onlineName || "").trim() || (c.support?.feedbackTypes || []).length > 0 || !!String(c.support?.faqBackground || "").trim() || (c.support?.faqGroups || []).length > 0 || !!String(c.support?.botName || "").trim() || (c.support?.knowledgeItems || []).length > 0);
        let agreementPackages = k.filter(e => eK(e).includes("agreement")), requestAgreementAction = (actionName, proceed) => {
            if (!agreementPackages.length) return proceed();
            setAgreementRiskReview({
                actionName: actionName,
                affectedCount: agreementPackages.length,
                proceed: proceed
            });
        };
        savedConfigBaselineRef.current[e] || (savedConfigBaselineRef.current[e] = cloneConfigRiskValue(c));
        let finalizeConfigStepSave = (stepId, nextValue, message = "保存成功") => {
            JSON.stringify(c[stepId]) !== JSON.stringify(nextValue) && p(current => ({
                ...current,
                [stepId]: cloneConfigRiskValue(nextValue)
            }));
            savedConfigBaselineRef.current[e] = {
                ...savedConfigBaselineRef.current[e],
                [stepId]: cloneConfigRiskValue(nextValue)
            };
            let hasContent = "release" === stepId || "advertising" === stepId ? "release" === stepId || eV(nextValue || {}) : H(stepId);
            hasContent ? j(stepId) : b([ stepId ]), setConfigRiskReview(null), setUnsavedCloseOpen(!1), U(null), f(message), u(-1);
        }, requestConfigStepSave = () => {
            if (!_?.id) return;
            let stepId = _.id, nextValue = cloneConfigRiskValue(c[stepId]), message = g[stepId] ? "保存成功" : "配置草稿已保存，完成后可用于生成 SDK";
            if ("advertising" === stepId && !H("advertising")) nextValue = eh(), message = "未填写广告参数，已按未选择处理";
            let before = savedConfigBaselineRef.current[e]?.[stepId], changes = buildConfigRiskChanges(before, nextValue);
            if ("agreement" !== stepId && k.length && changes.length) {
                setConfigRiskReview({
                    stepId: stepId,
                    title: _.title,
                    nextValue: nextValue,
                    changes: changes,
                    affectedVersionCount: k.length,
                    message: message
                });
                return;
            }
            finalizeConfigStepSave(stepId, nextValue, message);
        }, discardConfigStep = () => {
            let stepId = _?.id, baseline = stepId ? savedConfigBaselineRef.current[e]?.[stepId] : null;
            stepId && void 0 !== baseline && JSON.stringify(c[stepId]) !== JSON.stringify(baseline) && p(current => ({
                ...current,
                [stepId]: cloneConfigRiskValue(baseline)
            })), setConfigRiskReview(null), setAgreementRiskReview(null), setUnsavedCloseOpen(!1), U(null), u(-1);
        }, requestCloseConfigStep = () => {
            let stepId = _?.id, baseline = stepId ? savedConfigBaselineRef.current[e]?.[stepId] : null;
            stepId && void 0 !== baseline && JSON.stringify(c[stepId]) !== JSON.stringify(baseline) ? k.length ? requestConfigStepSave() : setUnsavedCloseOpen(!0) : discardConfigStep();
        };
        return (0, a.jsxs)("div", {
            className: "mgp-page mgp-foundation-page",
            onClickCapture: handleConfigDeleteCapture,
            children: [ (0, a.jsx)(eZ, {
                eyebrow: null,
                title: "配置中心",
                description: "首次配置用于生成 SDK；后续修改会影响线上已接入的 SDK，请确认变更与风险后保存。",
                action: (0, a.jsxs)("section", {
                className: "mgp-foundation-toolbar mgp-foundation-toolbar-inline",
                children: [ (0, a.jsx)("div", {
                    className: "mgp-foundation-toolbar-row",
                    children: "home" === v ? (0, a.jsxs)(a.Fragment, {
                        children: [ (0, a.jsxs)("label", {
                            children: [ (0, a.jsx)("span", {
                                children: "游戏名称"
                            }), (0, a.jsx)("select", {
                                "aria-label": "游戏名称",
                                value: e,
                                onChange: e => {
                                    l(e.target.value), u(-1), U(null);
                                },
                                children: i.map(e => (0, a.jsx)("option", {
                                    children: e
                                }, e))
                            }), (0, a.jsx)(m.ChevronDown, {
                                size: 15
                            }) ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-edit-game-button",
                            "aria-label": "修改当前游戏",
                            title: "修改当前游戏",
                            onClick: () => {
                                P("edit"), M({
                                    ...eo(),
                                    name: e,
                                    ...t[e] || {}
                                }), D(!0);
                            },
                            children: (0, a.jsx)(q, {
                                size: 15
                            })
                        }), (0, a.jsxs)("button", {
                            type: "button",
                            className: "mgp-button primary mgp-add-game-button",
                            onClick: () => {
                                P("create"), M(eo()), D(!0);
                            },
                            children: [ (0, a.jsx)(K.Plus, {
                                size: 15
                            }), "添加游戏" ]
                        }) ]
                    }) : (0, a.jsxs)("div", {
                        className: "mgp-config-flow-game",
                        "aria-label": "当前配置游戏",
                        children: [ (0, a.jsx)("span", {
                            children: "游戏名称"
                        }), (0, a.jsx)("strong", {
                            children: e
                        }) ]
                    })
                }), !1 && downloadReturnContext ? (0, a.jsxs)("button", {
                    type: "button",
                    className: "mgp-button secondary mgp-return-sdk-generation",
                    onClick: openSdkDownload,
                    children: [ (0, a.jsx)(s.ArrowLeft, {
                        size: 15
                    }), "返回SDK生成" ]
                }) : null ]
            })
            }), !1 ? (0, a.jsx)(ao, {
                gameName: e,
                gameProfile: t[e],
                packages: k,
                config: c,
                onStartNew: () => {
                    u(0), U(null), N("flow");
                },
                onResume: () => {
                    u(0), U(null), N("flow");
                },
                onDownload: downloadPackage,
                onEnterOperations: S,
                onDelete: w,
                toast: f
            }) : (0, a.jsxs)(a.Fragment, {
                children: [ (0, a.jsxs)("div", {
                    className: "mgp-config-step-navigation",
                    children: [ (0, a.jsx)("div", {
                        className: "mgp-config-card-heading mgp-foundation-panel",
                        children: (0, a.jsxs)("div", {
                            className: "mgp-config-module-heading",
                            children: [ (0, a.jsx)("h3", {
                                className: "mgp-plain-section-title",
                                children: "SDK 配置"
                            }), (0, a.jsx)("p", {
                                children: "按需补充SDK"
                            }) ]
                        })
                    }), (0, a.jsx)("nav", {
                        className: "mgp-config-tabs mgp-foundation-tabs mgp-config-step-list mgp-config-card-grid",
                        "aria-label": "SDK 配置模块",
                        children: R.map(e => {
                            let n = R.findIndex(a => a.id === e.id), s = h === n, i = e.icon, t = getConfigCardSummary(e.id, c);
                            return (0, a.jsxs)("button", {
                                type: "button",
                                id: `config-tab-${e.id}`,
                                className: `mgp-config-card ${s ? "active" : ""} ${x[e.id] || t.length ? "configured" : ""} ${returnMissingSet.has(e.id) ? "needs-attention" : ""}`,
                                onClick: () => {
                                    U(null), "login" === e.id ? x.login ? ($(null), u(n)) : ($("login"), u(-1)) : u(n);
                                },
                                "aria-label": e.title,
                                "aria-controls": `config-panel-${e.id}`,
                                "data-config-card": e.id,
                                children: [ (0, a.jsx)("span", {
                                    className: "mgp-config-card-icon",
                                    "aria-hidden": "true",
                                    children: (0, a.jsx)(i, {
                                        size: 22
                                    })
                                }), (0, a.jsxs)("span", {
                                    className: "mgp-config-card-copy",
                                    children: [ (0, a.jsx)("strong", {
                                        children: e.title
                                    }), (0, a.jsx)("small", {
                                        children: e.description
                                    }), t.length ? (0, a.jsxs)("span", {
                                        className: "mgp-config-card-summary",
                                        children: [ (0, a.jsx)("em", {
                                            children: "已配置："
                                        }), (0, a.jsx)("span", {
                                            className: "mgp-config-card-summary-items",
                                            children: t.map((e, n) => (0, a.jsxs)("span", {
                                                className: `mgp-config-card-summary-item ${e.kind}`,
                                                title: e.label,
                                                children: "store" === e.kind ? (0, a.jsx)(eM, {
                                                    storeId: e.id,
                                                    size: 18
                                                }) : "login" === e.kind ? (0, a.jsx)(e4, {
                                                    methodId: e.id
                                                }) : e.label
                                            }, `${e.kind}-${e.id || e.label}-${n}`))
                                        }) ]
                                    }) : null ]
                                }), (0, a.jsx)(m.ChevronDown, {
                                    size: 18,
                                    className: "mgp-config-card-arrow",
                                    "aria-hidden": "true"
                                }) ]
                            }, e.id);
                        })
                    }) ]
                }), _ ? (0, a.jsxs)("section", {
                    id: `config-panel-${_.id}`,
                    className: "mgp-config-panel mgp-foundation-panel mgp-config-card-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-labelledby": `config-tab-${_.id}`,
                    "aria-label": _.title,
                    children: [ (0, a.jsxs)("header", {
                        className: "mgp-config-card-modal-header",
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("h2", {
                                children: _.title
                            }), (0, a.jsx)("p", {
                                children: _.description
                            }) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-config-card-modal-header-actions",
                            children: [ "login" === _.id ? (0, a.jsx)("button", {
                                type: "button",
                                className: "mgp-button secondary mgp-login-csv-import",
                                onClick: () => {},
                                children: "批量导入"
                            }) : null, (0, a.jsx)("button", {
                                type: "button",
                                className: "mgp-icon-button",
                                "aria-label": `关闭${_.title}弹窗`,
                                onClick: requestCloseConfigStep,
                                children: (0, a.jsx)(T.X, {
                                    size: 18
                                })
                            }) ]
                        }) ]
                    }), "release" === _.id ? (0, a.jsx)(ar, {
                        config: c.release,
                        onChange: e => {
                            b([ "release", "login" ]), p(a => ({
                                ...a,
                                release: {
                                    ...a.release,
                                    ...e
                                }
                            }));
                        },
                        showErrors: "release" === L
                    }) : null, "login" === _.id ? (0, a.jsx)(e9, {
                        config: c.login,
                        releaseConfig: c.release,
                        onChange: e => X("login", e),
                        onOpenChooser: () => $("login"),
                        showErrors: "login" === L
                    }) : null, "support" === _.id ? (0, a.jsx)(ae, {
                        config: c.support,
                        onChange: e => X("support", e),
                        showErrors: "support" === L
                    }) : null, "data" === _.id ? (0, a.jsx)(aa, {
                        config: c.data,
                        onChange: e => X("data", e),
                        onOpenChooser: () => $("data"),
                        showErrors: "data" === L
                    }) : null, "advertising" === _.id ? (0, a.jsx)(an, {
                        config: c.advertising,
                        onChange: e => X("advertising", e),
                        showErrors: "advertising" === L
                    }) : null, "agreement" === _.id ? (0, a.jsx)(as, {
                        config: c.agreement,
                        onChange: e => X("agreement", e),
                        availableChannels: [ {
                            id: "global",
                            name: "全局协议",
                            platform: "全部发行渠道"
                        } ],
                        onGoRelease: () => {
                            u(0), U(null);
                        },
                        onBeforeAction: requestAgreementAction,
                        showErrors: "agreement" === L
                    }) : null, "compliance" === _.id ? (0, a.jsx)(al, {
                        config: c.compliance,
                        onChange: e => X("compliance", e),
                        showErrors: "compliance" === L
                    }) : null, "capabilities" === _.id ? (0, a.jsx)(ad, {
                        config: c.capabilities,
                        releaseConfig: c.release,
                        dataConfig: c.data,
                        advertisingConfig: c.advertising,
                        supportConfig: c.support,
                        onChange: e => X("capabilities", e),
                        showErrors: "capabilities" === L
                    }) : null, (0, a.jsxs)("footer", {
                        className: "mgp-config-footer",
                        children: [ (0, a.jsxs)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            onClick: requestConfigStepSave,
                            children: [ (0, a.jsx)(z.Save, {
                                size: 16
                            }), "保存" ]
                        }) ]
                    }) ]
                }) : null ]
            }), !1 ? (0, a.jsx)("button", {
                type: "button",
                className: "mgp-sdk-download-fab",
                "aria-label": downloadReturnContext ? "返回SDK下载" : "SDK下载",
                onClick: openSdkDownload,
                children: downloadReturnContext ? "返回SDK下载" : "SDK下载"
            }) : null, !1 && sdkPreflightOpen ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-sdk-preflight-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-sdk-preflight-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "SDK配置检查",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "SDK 配置检查"
                        }), (0, a.jsx)("p", {
                            children: B ? `已有 ${B} 项能力可用于下载，${sdkIncompleteSteps.length} 项尚未完成配置。` : "当前还没有可用于下载的 SDK 能力。"
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-sdk-preflight-content",
                        children: [ (0, a.jsx)("p", {
                            children: "未配置能力进入 SDK下载后将置灰且不可选择。"
                        }), (0, a.jsx)("div", {
                            className: "mgp-sdk-preflight-list",
                            children: sdkIncompleteSteps.map(e => (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)(C, {
                                    size: 14,
                                    "aria-hidden": "true"
                                }), e.title ]
                            }, e.id))
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => setSdkPreflightOpen(!1),
                            children: "继续配置"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            disabled: 0 === B,
                            onClick: () => {
                                setSdkPreflightOpen(!1), onOpenSdkDownload();
                            },
                            children: "使用已配置能力下载"
                        }) ]
                    }) ]
                })
            }) : null, I ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-game-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "edit" === E ? "修改游戏" : "添加游戏",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "edit" === E ? "修改游戏" : "添加游戏"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-icon-button",
                            onClick: () => D(!1),
                            "aria-label": "关闭",
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-modal-body mgp-game-form",
                        children: [ (0, a.jsx)(eY, {
                            label: "游戏名称",
                            required: !0,
                            value: O.name,
                            placeholder: "请输入游戏名称",
                            onChange: e => M(a => ({
                                ...a,
                                name: e
                            }))
                        }), (0, a.jsxs)("fieldset", {
                            className: "mgp-game-choice-group",
                            children: [ (0, a.jsxs)("legend", {
                                children: [ (0, a.jsx)("b", {
                                    children: "*"
                                }), " 游戏类型" ]
                            }), (0, a.jsx)("div", {
                                className: "mgp-game-choice-options",
                                children: er.map(e => (0, a.jsxs)("label", {
                                    className: `mgp-game-choice ${O.type === e ? "selected" : ""}`,
                                    children: [ (0, a.jsx)("input", {
                                        type: "radio",
                                        name: "game-type",
                                        checked: O.type === e,
                                        onChange: () => M(a => ({
                                            ...a,
                                            type: e
                                        }))
                                    }), (0, a.jsx)("span", {
                                        children: e
                                    }) ]
                                }, e))
                            }) ]
                        }), (0, a.jsxs)("fieldset", {
                            className: "mgp-game-choice-group",
                            children: [ (0, a.jsxs)("legend", {
                                children: [ (0, a.jsx)("b", {
                                    children: "*"
                                }), " 游戏阶段" ]
                            }), (0, a.jsx)("div", {
                                className: "mgp-game-choice-options",
                                children: ed.map(e => (0, a.jsxs)("label", {
                                    className: `mgp-game-choice ${O.stage === e ? "selected" : ""}`,
                                    children: [ (0, a.jsx)("input", {
                                        type: "radio",
                                        name: "game-stage",
                                        checked: O.stage === e,
                                        onChange: () => M(a => ({
                                            ...a,
                                            stage: e
                                        }))
                                    }), (0, a.jsx)("span", {
                                        children: e
                                    }) ]
                                }, e))
                            }) ]
                        }), (0, a.jsx)(eY, {
                            label: "游戏链接",
                            value: O.link,
                            placeholder: "请输入商店地址或游戏视频地址",
                            onChange: e => M(a => ({
                                ...a,
                                link: e
                            }))
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => D(!1),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button primary",
                            disabled: !V,
                            onClick: () => {
                                !1 !== ("edit" === E ? d(e, O) : r(O)) && D(!1);
                            },
                            children: "提交"
                        }) ]
                    }) ]
                })
            }) : null, unsavedCloseOpen ? (0, a.jsx)(UnsavedChangesDialog, {
                title: "参数尚未保存",
                description: "当前配置已修改但尚未保存，是否保存本次修改？",
                discardLabel: "不保存修改",
                onSave: () => {
                    setUnsavedCloseOpen(!1), requestConfigStepSave();
                },
                onDiscard: discardConfigStep,
                onCancel: () => setUnsavedCloseOpen(!1)
            }) : null, agreementRiskReview ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-config-risk-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-config-risk-modal mgp-agreement-action-risk-modal",
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-labelledby": "agreement-action-risk-title",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("h2", {
                                id: "agreement-action-risk-title",
                                children: `确认${agreementRiskReview.actionName}`
                            }), (0, a.jsxs)("p", {
                                children: [ "当前游戏已有 ", agreementRiskReview.affectedCount, " 个 SDK 组合包包含协议与隐私能力。" ]
                            }) ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-icon-button",
                            "aria-label": "关闭协议风险提醒",
                            onClick: () => setAgreementRiskReview(null),
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-config-risk-body",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-config-risk-warning",
                            children: [ (0, a.jsx)(C, {
                                size: 18,
                                "aria-hidden": "true"
                            }), (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)("strong", {
                                    children: "该操作可能影响已生成 SDK 中的协议展示"
                                }), (0, a.jsx)("small", {
                                    children: "请确认线上协议内容、默认语种和链接已做好同步准备。"
                                }) ]
                            }) ]
                        }), (0, a.jsx)("p", {
                            className: "mgp-config-risk-impact",
                            children: "确认后将继续当前操作；配置卡最终保存时不再重复提示该风险。"
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => setAgreementRiskReview(null),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button danger",
                            onClick: () => {
                                let e = agreementRiskReview.proceed;
                                setAgreementRiskReview(null), e?.();
                            },
                            children: "确认风险并继续"
                        }) ]
                    }) ]
                })
            }) : null, configRiskReview ? (0, a.jsx)("div", {
                className: "mgp-modal-backdrop mgp-config-risk-backdrop",
                role: "presentation",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-config-risk-modal",
                    role: "alertdialog",
                    "aria-modal": "true",
                    "aria-labelledby": "config-risk-title",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("h2", {
                                id: "config-risk-title",
                                children: "确认修改线上 SDK 参数"
                            }) ]
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-icon-button",
                            "aria-label": "关闭风险确认",
                            onClick: () => setConfigRiskReview(null),
                            children: (0, a.jsx)(T.X, {
                                size: 18
                            })
                        }) ]
                    }), (0, a.jsxs)("div", {
                        className: "mgp-config-risk-body",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-config-risk-warning",
                            role: "status",
                            children: [ (0, a.jsx)(C, {
                                size: 18,
                                "aria-hidden": "true"
                            }), (0, a.jsxs)("span", {
                                children: [ (0, a.jsxs)("strong", {
                                    children: [ configRiskReview.title, "参数将更新" ]
                                }), (0, a.jsx)("small", {
                                    children: configRiskImpacts[configRiskReview.stepId] || "可能影响线上 SDK 的现有运行行为。"
                                }) ]
                            }) ]
                        }), (0, a.jsxs)("div", {
                            className: "mgp-config-risk-change-list",
                            children: [ (0, a.jsx)("h3", {
                                children: "本次变更"
                            }), configRiskReview.changes.map((change, index) => (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("strong", {
                                    children: change.label
                                }), (0, a.jsx)("span", {
                                    className: "before",
                                    children: change.before
                                }), (0, a.jsx)("span", {
                                    className: "mgp-config-risk-arrow",
                                    "aria-hidden": "true",
                                    children: "→"
                                }), (0, a.jsx)("span", {
                                    className: "after",
                                    children: change.after
                                }) ]
                            }, `${change.label}-${index}`)) ]
                        }) ]
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => setConfigRiskReview(null),
                            children: "返回检查"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: discardConfigStep,
                            children: "不保存"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button danger",
                            onClick: () => finalizeConfigStepSave(configRiskReview.stepId, configRiskReview.nextValue, configRiskReview.message),
                            children: "确认风险并保存"
                        }) ]
                    }) ]
                })
            }) : null, "login" === A ? (0, a.jsx)(e6, {
                title: "登录方式",
                description: "Guest 为默认必选登录方式，可继续多选其他登录方式。",
                items: G,
                selected: eD(c.login.selected),
                requiredIds: [ "guest" ],
                codeOnly: !0,
                onCancel: () => $(null),
                onSave: e => {
                    X("login", {
                        selected: eD(e)
                    }), $(null), u(R.findIndex(e => "login" === e.id)), U(null);
                }
            }) : null, "data" === A ? (0, a.jsx)(e6, {
                title: "添加归因数据平台",
                description: "当前仅开放 Firebase、AppsFlyer、Adjust 三个平台。",
                items: F,
                selected: c.data.selected,
                onCancel: () => $(null),
                onSave: e => {
                    X("data", {
                        selected: e
                    }), $(null);
                }
            }) : null, pendingDeleteButton ? (0, a.jsx)("div", {
                className: "mgp-modal-overlay mgp-sdk-config-delete-confirm-overlay",
                children: (0, a.jsxs)("section", {
                    className: "mgp-modal mgp-config-package-delete-modal mgp-sdk-config-delete-confirm-modal",
                    role: "dialog",
                    "aria-modal": "true",
                    "aria-label": "确认删除配置内容",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "确认删除"
                        }), (0, a.jsx)("p", {
                            children: "删除后将影响当前游戏的 SDK 配置，请确认是否继续。"
                        }) ]
                    }), (0, a.jsx)("div", {
                        className: "mgp-modal-body mgp-config-package-delete-body",
                        children: (0, a.jsxs)("p", {
                            children: [ "即将执行：", pendingDeleteButton.getAttribute("aria-label") || pendingDeleteButton.textContent?.trim() || "删除当前配置" ]
                        })
                    }), (0, a.jsxs)("footer", {
                        children: [ (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button secondary",
                            onClick: () => setPendingDeleteButton(null),
                            children: "取消"
                        }), (0, a.jsx)("button", {
                            type: "button",
                            className: "mgp-button danger",
                            onClick: () => {
                                let button = pendingDeleteButton;
                                setPendingDeleteButton(null), button && (deleteBypassRef.current.add(button), button.click());
                            },
                            children: "确认删除"
                        }) ]
                    }) ]
                })
            }) : null ]
        });
    }
    function am({selected: e, paymentConfigs: s, packageNames: l, onSelect: i, onRemove: t, onPackageNameChange: r, onPaymentChange: d, showErrors: o = !1}) {
        let [p, h] = (0, n.useState)(B[0].platform), [u, g] = (0, n.useState)({}), [visiblePaymentSecrets, setVisiblePaymentSecrets] = (0, n.useState)({}), x = B.find(e => e.platform === p) || B[0], j = (e, a) => {
            g(n => ({
                ...n,
                [e]: !a
            }));
        };
        return (0, a.jsxs)("div", {
            className: `mgp-channel-picker mgp-payment-method-picker ${o && !e.length ? "has-error" : ""}`,
            children: [ e.length ? (0, a.jsxs)("div", {
                className: "mgp-selected-channel-table",
                children: [ (0, a.jsxs)("div", {
                    className: "mgp-selected-channel-head",
                    children: [ (0, a.jsx)("span", {
                        children: "支付渠道"
                    }), (0, a.jsx)("span", {
                        children: "支付配置"
                    }), (0, a.jsx)("span", {
                        children: "说明文档"
                    }) ]
                }), e.map(e => {
                    let n = e$(e);
                    if (!n) return null;
                    let i = Q(n.id), p = s[n.id] || J(n.id), h = Z(n.id, p), y = o && !h, v = y, k = !0 === u[n.id], N = i.fields.filter(e => !W(e, p.official?.[e[0]])).length;
                    return (0, a.jsxs)("div", {
                        className: `mgp-selected-channel-row ${v ? "has-error" : ""}`,
                        "data-payment-channel": n.id,
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-selected-channel-summary",
                            role: "button",
                            tabIndex: 0,
                            "aria-label": `${n.name}支付配置`,
                            "aria-expanded": k,
                            "aria-controls": `channel-config-details-${n.id}`,
                            onClick: e => {
                                var a;
                                return a = n.id, void (!e.target.closest("a, button, input, textarea, select") && j(a, k));
                            },
                            onKeyDown: e => {
                                var a;
                                return a = n.id, void (e.target !== e.currentTarget || ("Enter" === e.key || " " === e.key) && (e.preventDefault(), 
                                j(a, k)));
                            },
                            children: [ (0, a.jsxs)("span", {
                                className: "mgp-release-store-label",
                                children: [ (0, a.jsx)(eM, {
                                    storeId: n.id,
                                    size: 20
                                }), (0, a.jsx)("span", {
                                    children: n.name
                                }) ]
                            }), (0, a.jsxs)("button", {
                                type: "button",
                                className: `mgp-payment-config-summary ${h ? "complete" : ""}`,
                                "aria-label": `${n.name}支付配置`,
                                "aria-expanded": k,
                                "aria-controls": `channel-config-details-${n.id}`,
                                onClick: () => j(n.id, k),
                                children: [ h ? (0, a.jsxs)(a.Fragment, {
                                    children: [ (0, a.jsx)(c.CheckCircle2, {
                                        size: 14
                                    }), "已配置" ]
                                }) : (0, a.jsxs)(a.Fragment, {
                                    children: [ "待完善 ", N, " / ", i.fields.length ]
                                }), (0, a.jsx)(m.ChevronDown, {
                                    size: 15,
                                    className: k ? "expanded" : ""
                                }) ]
                            }), (0, a.jsx)("span", {
                                className: "mgp-channel-help",
                                children: (0, a.jsx)(e3, {
                                    href: `/demo-v2/help?channel=${n.id}`,
                                    offlineHref: `./demo-v2/help/index.html?channel=${n.id}`,
                                    children: "说明文档"
                                })
                            }) ]
                        }), k ? (0, a.jsxs)("div", {
                            className: "mgp-selected-channel-details",
                            id: `channel-config-details-${n.id}`,
                            children: [ k ? (0, a.jsx)("div", {
                                className: "mgp-inline-payment-fields",
                                children: i.fields.map(e => {
                                    let [s, l, , i, t] = e, fieldValue = p.official?.[s], fieldError = W(e, fieldValue), r = o || String(fieldValue || "").trim() ? fieldError : "", c = e => d(n.id, {
                                        ...p,
                                        official: {
                                            ...p.official,
                                            [s]: e
                                        }
                                    });
                                    let secretKey = `${n.id}-${s}`, secretVisible = !!visiblePaymentSecrets[secretKey];
                                    return "upload-json" === i ? (0, a.jsx)(e0, {
                                        label: l,
                                        required: !0,
                                        compact: !0,
                                        value: p.official?.[s] || "",
                                        fingerprint: p.officialFileMeta?.[s]?.sha256 || "",
                                        helper: t,
                                        error: r,
                                        onChange: (e, a) => d(n.id, {
                                            ...p,
                                            official: {
                                                ...p.official,
                                                [s]: e
                                            },
                                            officialFileMeta: {
                                                ...p.officialFileMeta,
                                                [s]: a
                                            }
                                        })
                                    }, s) : (0, a.jsxs)("label", {
                                        className: r ? "has-error" : "",
                                        children: [ (0, a.jsx)("span", {
                                            children: l
                                        }), (0, a.jsxs)("div", {
                                            className: "mgp-secret-input-wrap",
                                            children: [ (0, a.jsx)("input", {
                                                type: "secret" === i && !secretVisible ? "password" : "text",
                                                value: p.official?.[s] || "",
                                                placeholder: `请输入${l}`,
                                                "aria-label": `${n.name} ${l}`,
                                                "aria-invalid": !!r,
                                                onChange: e => c(e.target.value)
                                            }), "secret" === i ? (0, a.jsx)("button", {
                                                type: "button",
                                                className: `mgp-secret-visibility ${secretVisible ? "is-visible" : ""}`,
                                                "aria-label": secretVisible ? `隐藏${n.name} ${l}` : `显示${n.name} ${l}`,
                                                "aria-pressed": secretVisible,
                                                onClick: () => setVisiblePaymentSecrets(e => ({
                                                    ...e,
                                                    [secretKey]: !e[secretKey]
                                                })),
                                                children: (0, a.jsx)(SecretEyeIcon, {
                                                    size: 16
                                                })
                                            }) : null ]
                                        }), r ? (0, a.jsx)("small", {
                                            className: "mgp-field-error",
                                            children: r
                                        }) : null ]
                                    }, s);
                                })
                            }) : null ]
                        }) : null ]
                    }, n.id);
                }) ]
            }) : null ]
        });
    }
    function ap({selected: e, onToggle: n, moduleDetails: s = {}, disabledModuleIds: l = [], tooltipIdPrefix: i = "sdk-module"}) {
        return (0, a.jsx)("div", {
            className: "mgp-module-grid",
            children: ec.map(t => {
                let r = e.includes(t.id), d = l.includes(t.id), c = s[t.id], m = `${i}-${t.id}-tooltip`;
                return (0, a.jsxs)("button", {
                    type: "button",
                    className: `${r ? "selected" : ""} ${d ? "disabled" : ""}`,
                    "aria-pressed": r,
                    "aria-disabled": d,
                    "aria-describedby": c ? m : void 0,
                    onClick: () => {
                        d || n(t.id);
                    },
                    children: [ (0, a.jsx)("span", {
                        className: "mgp-module-check",
                        children: r ? (0, a.jsx)(o.Check, {
                            size: 14
                        }) : null
                    }), (0, a.jsxs)("span", {
                        className: "mgp-module-title-row",
                        children: [ (0, a.jsx)("strong", {
                            children: t.title
                        }), c ? (0, a.jsxs)("span", {
                            className: "mgp-module-info",
                            title: c.tooltip,
                            "aria-label": `${t.title}说明：${c.tooltip}`,
                            children: [ (0, a.jsx)("span", {
                                "aria-hidden": "true",
                                children: "i"
                            }), (0, a.jsx)("span", {
                                className: "mgp-module-tooltip",
                                id: m,
                                role: "tooltip",
                                children: c.tooltip
                            }) ]
                        }) : null ]
                    }) ]
                }, t.id);
            })
        });
    }
    function ah({methods: e, selected: s, onToggle: l, onReorder: i, onGoConfig: r, disabled: d = !1, disabledReason: o = ""}) {
        let [c, m] = (0, n.useState)(""), [p, h] = (0, n.useState)(""), u = eC(s), g = [ ...u.map(a => e.find(e => e.id === a)).filter(Boolean), ...e.filter(e => !u.includes(e.id)) ];
        return (0, n.useEffect)(() => {
            d && (m(""), h(""));
        }, [ d ]), (0, a.jsxs)("section", {
            className: `mgp-country-login-methods ${d ? "is-disabled" : ""}`,
            "aria-label": "当前国家或地区的登录方式",
            "aria-disabled": d,
            children: [ (0, a.jsx)("header", {
                children: (0, a.jsxs)("div", {
                    children: [ (0, a.jsx)("strong", {
                        children: "登录方式选择及排序"
                    }), (0, a.jsx)("span", {
                        children: d ? o || "当前国家或地区未启用登录SDK，开启后可继续编辑。" : "Guest 为默认必选且固定首位；其他已选方式可直接拖拽排序。"
                    }) ]
                })
            }), e.length ? (0, a.jsx)("div", {
                className: "mgp-country-login-grid",
                children: g.map(e => {
                    let n = e.id === ev, s = u.includes(e.id), t = u.indexOf(e.id);
                    return (0, a.jsxs)("button", {
                        type: "button",
                        className: `mgp-country-login-option ${s ? "selected" : ""} ${n ? "is-required" : ""} ${p === e.id ? "drag-over" : ""}`,
                        "aria-pressed": s,
                        "aria-disabled": d || n,
                        "aria-grabbed": s && !n ? c === e.id : void 0,
                        disabled: d,
                        draggable: s && !d && !n,
                        onClick: () => {
                            d || n || l(e.id);
                        },
                        onDragStart: a => {
                            d || !s || n ? a.preventDefault() : (a.dataTransfer.effectAllowed = "move", a.dataTransfer.setData("text/plain", e.id), 
                            m(e.id));
                        },
                        onDragOver: a => {
                            !d && !n && s && c && (a.preventDefault(), a.dataTransfer.dropEffect = "move", h(e.id));
                        },
                        onDragLeave: () => {
                            p === e.id && h("");
                        },
                        onDrop: a => {
                            a.preventDefault(), ((e, a) => {
                                if (d || e === ev || a === ev) return;
                                let n = u.indexOf(e), s = u.indexOf(a);
                                if (n < 0 || s < 0 || n === s) return;
                                let l = [ ...u ];
                                l.splice(n, 1), l.splice(s, 0, e), i(eC(l));
                            })(a.dataTransfer.getData("text/plain") || c, e.id), m(""), h("");
                        },
                        onDragEnd: () => {
                            m(""), h("");
                        },
                        children: [ (0, a.jsx)(e4, {
                            methodId: e.id
                        }), (0, a.jsx)("strong", {
                            children: e.displayName
                        }), s ? (0, a.jsxs)("span", {
                            className: n ? "mgp-country-login-required" : "mgp-country-login-drag",
                            title: n ? "默认必选，固定首位" : "拖拽调整登录顺序",
                            "aria-label": n ? "Guest 默认必选，固定首位" : `当前顺序 ${t + 1}，拖拽调整`,
                            children: [ (0, a.jsx)("em", {
                                children: t + 1
                            }), n ? (0, a.jsx)(A.LockKeyhole, {
                                size: 14
                            }) : (0, a.jsx)(k, {
                                size: 15
                            }) ]
                        }) : (0, a.jsx)("span", {
                            className: "mgp-country-login-check"
                        }) ]
                    }, e.id);
                })
            }) : (0, a.jsxs)("div", {
                className: "mgp-country-login-empty",
                children: [ (0, a.jsx)("span", {
                    children: "当前游戏尚未配置登录方式"
                }), (0, a.jsxs)("button", {
                    type: "button",
                    onClick: r,
                    children: [ "前往配置中心", (0, a.jsx)(t.ArrowRight, {
                        size: 13
                    }) ]
                }) ]
            }) ]
        });
    }
    function au({groups: e, selected: n, onToggle: s, onGoConfig: l, batchCount: i, onApplyBatch: r}) {
        return (0, a.jsxs)("section", {
            className: "mgp-country-agreements",
            "aria-label": "当前国家或地区的协议配置",
            children: [ (0, a.jsx)("header", {
                children: (0, a.jsxs)("div", {
                    children: [ (0, a.jsx)("strong", {
                        children: "协议选择"
                    }), (0, a.jsx)("span", {
                        children: "仅显示当前游戏已在配置中心完成配置的协议，支持为当前国家或地区选择一个或多个协议组。"
                    }) ]
                })
            }), e.length ? (0, a.jsx)("div", {
                className: "mgp-country-agreement-grid",
                children: e.map(e => {
                    let l = n.includes(e.id);
                    return (0, a.jsxs)("button", {
                        type: "button",
                        className: l ? "selected" : "",
                        "aria-pressed": l,
                        onClick: () => s(e.id),
                        children: [ (0, a.jsx)(b.FileCheck2, {
                            size: 18
                        }), (0, a.jsxs)("span", {
                            children: [ (0, a.jsx)("strong", {
                                children: e.name
                            }), (0, a.jsx)("small", {
                                children: (e.languages || []).join("、") || "尚未配置语种"
                            }) ]
                        }), (0, a.jsx)("i", {
                            children: l ? (0, a.jsx)(o.Check, {
                                size: 13
                            }) : null
                        }) ]
                    }, e.id);
                })
            }) : (0, a.jsxs)("div", {
                className: "mgp-country-agreement-empty",
                children: [ (0, a.jsx)("span", {
                    children: "当前发行渠道暂无可用协议"
                }), (0, a.jsxs)("button", {
                    type: "button",
                    onClick: l,
                    children: [ "前往配置中心", (0, a.jsx)(t.ArrowRight, {
                        size: 13
                    }) ]
                }) ]
            }) ]
        });
    }
    function ag({modules: e, selected: n, onToggle: s}) {
        return e.length ? (0, a.jsxs)("section", {
            className: "mgp-country-sdk-modules",
            "aria-label": "当前国家或地区的SDK能力",
            children: [ (0, a.jsx)("header", {
                children: (0, a.jsxs)("div", {
                    children: [ (0, a.jsx)("strong", {
                        children: "SDK开关"
                    }), (0, a.jsx)("span", {
                        children: "组合包默认包含全部 SDK 能力，可按国家或地区分别控制是否启用。"
                    }) ]
                })
            }), (0, a.jsx)("div", {
                className: "mgp-country-sdk-module-list",
                children: e.map(e => {
                    let l = n.includes(e.id);
                    return (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("strong", {
                            children: e.title
                        }), (0, a.jsx)(eJ, {
                            checked: l,
                            label: `${e.title}${l ? "已启用" : "未启用"}`,
                            onChange: () => s(e.id)
                        }) ]
                    }, e.id);
                })
            }) ]
        }) : null;
    }
    function ax({channelId: e, selected: s, onChange: l, activeCountryCode: i, onActiveCountryChange: t}) {
        let r = (0, n.useMemo)(() => {
            let a = new Set(el(e).flatMap(e => e.countries.map(e => e.code)));
            return es.map(e => ({
                ...e,
                regions: e.regions.map(e => ({
                    ...e,
                    countries: e.countryCodes.filter(e => a.has(e)).map(e => eE(e)).filter(Boolean)
                })).filter(e => e.countries.length)
            })).filter(e => e.regions.length);
        }, [ e ]), [d, o] = (0, n.useState)(r[0]?.id || ""), c = r.find(e => e.id === d) || r[0], [m, h] = (0, 
        n.useState)(c?.regions[0]?.id || ""), u = c?.regions.find(e => e.id === m) || c?.regions[0], g = (0, 
        n.useMemo)(() => Object.fromEntries(r.flatMap(e => e.regions.flatMap(a => a.countries.map(n => [ n.code, {
            continentId: e.id,
            regionId: a.id
        } ])))), [ r ]);
        (0, n.useEffect)(() => {
            r.some(e => e.id === d) || o(r[0]?.id || "");
        }, [ d, r ]), (0, n.useEffect)(() => {
            c && !c.regions.some(e => e.id === m) && h(c.regions[0]?.id || "");
        }, [ c, m ]);
        let x = e => {
            let a = g[e];
            a && (o(a.continentId), h(a.regionId)), t(e);
        }, j = e => {
            let a = e.every(e => s.includes(e)) ? s.filter(a => !e.includes(a)) : Array.from(new Set([ ...s, ...e ]));
            if (l(a), !a.includes(i)) {
                let e = a[0] || "";
                e ? x(e) : t("");
            }
        };
        return (0, a.jsxs)("div", {
            className: "mgp-region-tree",
            "aria-label": "发行国家或地区选择",
            children: [ (0, a.jsxs)("section", {
                children: [ (0, a.jsx)("header", {
                    children: "洲"
                }), (0, a.jsx)("div", {
                    children: r.map(e => {
                        let n = e.regions.flatMap(e => e.countries.map(e => e.code)), l = n.filter(e => s.includes(e)).length;
                        return (0, a.jsxs)("div", {
                            className: c?.id === e.id ? "active" : "",
                            children: [ (0, a.jsx)("input", {
                                type: "checkbox",
                                "aria-label": `选择${e.name}`,
                                checked: l === n.length,
                                onChange: () => j(n)
                            }), (0, a.jsx)("button", {
                                type: "button",
                                onClick: () => {
                                    o(e.id), h(e.regions[0]?.id || "");
                                },
                                children: e.name
                            }), (0, a.jsxs)("small", {
                                children: [ l, "/", n.length ]
                            }), (0, a.jsx)(p.ChevronRight, {
                                size: 14
                            }) ]
                        }, e.id);
                    })
                }) ]
            }), (0, a.jsxs)("section", {
                children: [ (0, a.jsx)("header", {
                    children: "地区"
                }), (0, a.jsx)("div", {
                    children: (c?.regions || []).map(e => {
                        let n = e.countries.map(e => e.code), l = n.filter(e => s.includes(e)).length;
                        return (0, a.jsxs)("div", {
                            className: u?.id === e.id ? "active" : "",
                            children: [ (0, a.jsx)("input", {
                                type: "checkbox",
                                "aria-label": `选择${e.name}`,
                                checked: l === n.length,
                                onChange: () => j(n)
                            }), (0, a.jsx)("button", {
                                type: "button",
                                onClick: () => h(e.id),
                                children: e.name
                            }), (0, a.jsxs)("small", {
                                children: [ l, "/", n.length ]
                            }), (0, a.jsx)(p.ChevronRight, {
                                size: 14
                            }) ]
                        }, e.id);
                    })
                }) ]
            }), (0, a.jsxs)("section", {
                className: "mgp-region-country-column",
                children: [ (0, a.jsx)("header", {
                    children: "国家 / 地区"
                }), (0, a.jsx)("div", {
                    children: (u?.countries || []).map(e => (0, a.jsxs)("div", {
                        className: i === e.code ? "active" : "",
                        children: [ (0, a.jsx)("input", {
                            type: "checkbox",
                            checked: s.includes(e.code),
                            "aria-label": `选择${e.name}`,
                            onChange: () => {
                                let a = s.includes(e.code), n = a ? s.filter(a => a !== e.code) : [ ...s, e.code ];
                                if (l(n), a) {
                                    if (i === e.code) {
                                        let e = n[0] || "";
                                        e ? x(e) : t("");
                                    }
                                } else x(e.code);
                            }
                        }), (0, a.jsxs)("button", {
                            type: "button",
                            "aria-current": i === e.code ? "true" : void 0,
                            onClick: () => {
                                s.includes(e.code) || l([ ...s, e.code ]), x(e.code);
                            },
                            children: [ (0, a.jsx)("strong", {
                                children: e.name
                            }), (0, a.jsxs)("small", {
                                children: [ e.english, " · ", e.code ]
                            }) ]
                        }) ]
                    }, e.code))
                }) ]
            }), (0, a.jsxs)("section", {
                className: "mgp-region-selected-column",
                children: [ (0, a.jsx)("header", {
                    children: "当前已选择国家/地区"
                }), (0, a.jsx)("div", {
                    children: s.length ? s.map(e => {
                        let n = eE(e);
                        return n ? (0, a.jsxs)("div", {
                            className: i === n.code ? "active" : "",
                            children: [ (0, a.jsxs)("button", {
                                type: "button",
                                "aria-current": i === n.code ? "true" : void 0,
                                onClick: () => x(n.code),
                                children: [ (0, a.jsx)("strong", {
                                    children: n.name
                                }), (0, a.jsxs)("small", {
                                    children: [ n.english, " · ", n.code ]
                                }) ]
                            }), (0, a.jsx)("button", {
                                type: "button",
                                className: "mgp-region-selected-remove",
                                "aria-label": `移除${n.name}`,
                                onClick: () => {
                                    let e = s.filter(e => e !== n.code);
                                    if (l(e), i === n.code) {
                                        let a = e[0] || "";
                                        a ? x(a) : t("");
                                    }
                                },
                                children: (0, a.jsx)(T.X, {
                                    size: 14
                                })
                            }) ]
                        }, n.code) : null;
                    }) : (0, a.jsx)("div", {
                        className: "mgp-region-selected-empty",
                        children: "暂未选择国家/地区"
                    })
                }) ]
            }) ]
        });
    }
    function aj({countries: e, countryLoginMethods: a, countryAgreements: n, countryCapabilityEnabled: s, switches: l}) {
        let i = [ ...new Set(e || []) ].sort(), t = (e, a) => Object.fromEntries(i.map(n => [ n, a(e?.[n] || []) ]));
        return JSON.stringify({
            countries: i,
            countryLoginMethods: t(a, eC),
            countryAgreements: t(n, e => [ ...new Set(e) ].sort()),
            countryCapabilityEnabled: t(s, e => [ ...new Set(e) ].sort()),
            switches: Object.fromEntries(Object.keys(l || {}).sort().map(e => [ e, l[e] ]))
        });
    }
    function ab({item: e, configuredLoginMethodIds: s, configuredAgreementGroups: l, configuredCompliance: configuredCompliance = {}, configuredDataPlatformIds: configuredDataPlatformIds = [], configuredAdvertising: configuredAdvertising = {}, configuredSupport: configuredSupport = {}, onSave: i, onClose: t, onGoLoginConfig: r, onGoAgreementConfig: d, toast: o}) {
        let [c, m] = (0, n.useState)(!1), [p, h] = (0, n.useState)(!1), u = e.storeId || e.channels?.[0] || "", g = (0, 
        n.useMemo)(() => (l || []).filter(e => !!e.name?.trim() && !!(e.languages || []).length), [ l ]), x = (0, 
        n.useMemo)(() => el(u).flatMap(e => e.countries.map(e => e.code)), [ u ]), j = (e.countries || []).filter(e => x.includes(e)), [b, f] = (0, 
        n.useState)(j), y = Array.from(new Set([ ...e.countries || [], ...Object.keys(e.countryLoginMethods || {}), ...Object.keys(e.countryAgreements || {}), ...Object.keys(e.countryCapabilityEnabled || e.countryModules || {}) ])), v = Object.fromEntries(y.map(a => [ a, [ ...eC(e.countryLoginMethods?.[a] || []) ] ])), k = Object.fromEntries(y.map(a => [ a, [ ...e.countryAgreements?.[a] || [] ] ])), [N, C] = (0, 
        n.useState)(v), [S, w] = (0, n.useState)(k), [A, $] = (0, n.useState)(b[0] || ""), I = eK(e), capabilityVersion = Number(e.capabilityStateVersion || 0), D = capabilityVersion < 3 && I.includes(ej), E = capabilityVersion < 3 && I.includes(ey), q = Object.fromEntries(y.map(a => {
            let n = [ ...e.countryCapabilityEnabled?.[a] || e.countryModules?.[a] || I ].filter(e => I.includes(e));
            return D && !n.includes(ej) && n.unshift(ej), E && !n.includes(ey) && n.push(ey), 
            capabilityVersion < 4 && [ "agreement", "compliance" ].forEach(e => {
                I.includes(e) && !n.includes(e) && n.push(e);
            }), [ a, n ];
        })), [K, P] = (0, n.useState)(q), O = {
            ...aw,
            ...e.sdkSwitches || {},
            ...e.switches || {}
        }, [M, L] = (0, n.useState)(O), R = eC(s), U = G.filter(e => R.includes(e.id)), F = ec.filter(e => I.includes(e.id)), _ = e => K[e] ?? I, B = I.includes(ej), V = !!A && B && _(A).includes(ej), [X, H] = (0, 
        n.useState)("range"), Q = (0, n.useRef)(null), W = (0, n.useRef)(null), J = (0, 
        n.useRef)(null), Z = (0, n.useRef)(null), Y = e$(u), ee = aj({
            countries: j,
            countryLoginMethods: v,
            countryAgreements: k,
            countryCapabilityEnabled: q,
            switches: O
        }), ea = aj({
            countries: b,
            countryLoginMethods: N,
            countryAgreements: S,
            countryCapabilityEnabled: K,
            switches: M
        }) !== ee, en = [ {
            id: "range",
            label: "发行范围",
            ref: W
        }, {
            id: "regional",
            label: "区域化修改",
            ref: J
        }, {
            id: "sdk",
            label: "SDK与运行开关",
            ref: Z
        } ];
        (0, n.useEffect)(() => {
            let e = b.includes(A) ? A : b[0] || "";
            e !== A && $(e);
        }, [ A, b ]);
        let es = (e = t) => {
            c || (m(!0), window.setTimeout(e, 260));
        }, ei = (e = t) => {
            (!ea || window.confirm("当前运营配置有未保存修改，确定放弃修改并关闭吗？")) && es(e);
        };
        return (0, a.jsx)("div", {
            className: `mgp-drawer-backdrop ${c ? "is-closing" : ""}`,
            role: "presentation",
            children: (0, a.jsxs)("aside", {
                className: "mgp-sdk-drawer mgp-operations-drawer",
                role: "dialog",
                "aria-modal": "true",
                "data-package-capabilities": I.join(","),
                "data-store-id": u,
                "data-sdk-version-id": e.id,
                "data-channel-country-codes": x.join(","),
                "data-release-country-codes": j.join(","),
                "aria-label": `运营配置 ${e.packageName}`,
                children: [ (0, a.jsxs)("header", {
                    className: "mgp-sdk-drawer-header",
                    children: [ (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("span", {
                            children: e.packageName
                        }), (0, a.jsx)("h2", {
                            children: "运营配置"
                        }) ]
                    }), (0, a.jsx)("button", {
                        type: "button",
                        onClick: () => ei(),
                        "aria-label": "关闭",
                        children: (0, a.jsx)(T.X, {
                            size: 18
                        })
                    }) ]
                }), (0, a.jsxs)("div", {
                    className: "mgp-sdk-drawer-body mgp-operations-drawer-body",
                    ref: Q,
                    onScroll: () => {
                        let e = Q.current;
                        if (!e) return;
                        let a = e.getBoundingClientRect().top + 150, n = e.scrollTop + e.clientHeight >= e.scrollHeight - 8 ? en[en.length - 1] : en.reduce((e, n) => n.ref.current?.getBoundingClientRect().top <= a ? n : e, en[0]);
                        n.id !== X && H(n.id);
                    },
                    children: [ (0, a.jsxs)("div", {
                        className: "mgp-operations-workspace-head",
                        children: [ (0, a.jsxs)("div", {
                            className: "mgp-operations-workspace-context",
                            children: [ (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)("small", {
                                    children: "当前SDK组合包"
                                }), (0, a.jsxs)("strong", {
                                    children: [ Y?.name || u, " · ", e.packageName ]
                                }) ]
                            }), (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)("small", {
                                    children: "当前编辑国家/地区"
                                }), (0, a.jsx)("strong", {
                                    children: eE(A)?.name || "尚未选择"
                                }) ]
                            }), (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)("small", {
                                    children: "发行范围"
                                }), (0, a.jsxs)("strong", {
                                    children: [ b.length, " 个国家/地区" ]
                                }) ]
                            }), (0, a.jsx)("em", {
                                className: ea ? "is-dirty" : "is-synced",
                                role: "status",
                                children: ea ? "有未保存修改" : "配置已同步"
                            }) ]
                        }), (0, a.jsx)("nav", {
                            className: "mgp-operations-workspace-nav",
                            "aria-label": "运营配置导航",
                            children: en.map((e, n) => (0, a.jsxs)("button", {
                                type: "button",
                                className: X === e.id ? "active" : "",
                                "aria-current": X === e.id ? "step" : void 0,
                                onClick: () => {
                                    H(e.id), e.ref.current?.scrollIntoView({
                                        behavior: "smooth",
                                        block: "start"
                                    });
                                },
                                children: [ (0, a.jsx)("span", {
                                    children: n + 1
                                }), e.label ]
                            }, e.id))
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-operations-section",
                        id: "operations-workspace-range",
                        ref: W,
                        "data-workspace-section": "range",
                        children: [ (0, a.jsxs)("header", {
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("h3", {
                                    children: "发行国家/地区选择"
                                }), (0, a.jsx)("p", {
                                    children: "仅展示当前发行渠道支持且属于该游戏发行范围的国家或地区，可按洲、地区或国家多选。"
                                }) ]
                            }), (0, a.jsxs)("strong", {
                                children: [ "已选择 ", b.length, " 个" ]
                            }) ]
                        }), (0, a.jsx)(ax, {
                            channelId: u,
                            selected: b,
                            onChange: e => {
                                f(e), C(a => ({
                                    ...a,
                                    ...Object.fromEntries(e.map(e => [ e, eC(a[e] || R) ]))
                                })), w(a => ({
                                    ...a,
                                    ...Object.fromEntries(e.map(e => [ e, a[e] || [] ]))
                                })), P(a => ({
                                    ...a,
                                    ...Object.fromEntries(e.map(e => [ e, a[e] || [ ...I ] ]))
                                }));
                            },
                            activeCountryCode: A,
                            onActiveCountryChange: $
                        }), p && !b.length ? (0, a.jsx)(e2, {
                            children: "请至少选择一个发行国家或地区"
                        }) : null ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-operations-section",
                        id: "operations-workspace-regional",
                        ref: J,
                        "data-workspace-section": "regional",
                        children: [ (0, a.jsx)("header", {
                            children: (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("h3", {
                                    children: "区域化修改"
                                }), (0, a.jsx)("p", {
                                    children: "直接点击上方国家切换当前编辑对象；批量应用使用上方已勾选的国家集合。"
                                }) ]
                            })
                        }), b.length ? (0, a.jsx)("div", {
                            className: "mgp-operations-login-layout single",
                            children: (0, a.jsxs)("div", {
                                className: "mgp-operations-login-editor",
                                children: [ (0, a.jsxs)("div", {
                                    className: "mgp-operations-batch-bar",
                                    children: [ (0, a.jsxs)("span", {
                                        children: [ "当前编辑：", eE(A)?.name || A ]
                                    }), (0, a.jsxs)("button", {
                                        type: "button",
                                        className: "mgp-button secondary",
                                        disabled: !V || !b.length,
                                        onClick: () => {
                                            if (!A || !V || !b.length) return;
                                            let e = eC(N[A] || []);
                                            C(a => ({
                                                ...a,
                                                ...Object.fromEntries(b.map(a => [ a, eC(e) ]))
                                            })), o?.(`已成功应用到 ${b.length} 个国家`);
                                        },
                                        children: [ "应用到上方已选的 ", b.length, " 个国家/地区" ]
                                    }) ]
                                }), (0, a.jsx)(ah, {
                                    methods: U,
                                    selected: eC(N[A] || []).filter(e => R.includes(e)),
                                    onToggle: e => {
                                        A && V && e !== ev && C(a => {
                                            let n = eC(a[A] || []);
                                            return {
                                                ...a,
                                                [A]: eC(n.includes(e) ? n.filter(a => a !== e) : [ ...n, e ])
                                            };
                                        });
                                    },
                                    onReorder: e => C(a => {
                                        let n = eC(a[A] || []).filter(e => !R.includes(e));
                                        return {
                                            ...a,
                                            [A]: eC([ ...e, ...n ])
                                        };
                                    }),
                                    onGoConfig: () => ei(r),
                                    disabled: !V,
                                    disabledReason: B ? "当前国家或地区已关闭登录SDK，开启后可继续编辑；原选择与排序会保留。" : "当前SDK组合包未包含登录能力，登录方式选择与排序暂不可编辑。"
                                }), (0, a.jsx)(au, {
                                    groups: g,
                                    selected: (S[A] || []).filter(e => g.some(a => a.id === e)),
                                    onToggle: e => {
                                        A && w(a => {
                                            let n = a[A] || [];
                                            return {
                                                ...a,
                                                [A]: n.includes(e) ? n.filter(a => a !== e) : [ ...n, e ]
                                            };
                                        });
                                    },
                                    onGoConfig: () => ei(d),
                                    batchCount: b.length,
                                    onApplyBatch: () => {
                                        if (!A || !b.length) return;
                                        let e = S[A] || [];
                                        w(a => ({
                                            ...a,
                                            ...Object.fromEntries(b.map(a => [ a, [ ...e ] ]))
                                        })), o?.(`已成功应用到 ${b.length} 个国家`);
                                    }
                                }) ]
                            })
                        }) : (0, a.jsx)("div", {
                            className: "mgp-operations-empty",
                            children: "请先在上方选择发行国家或地区。"
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-operations-section mgp-operations-switches-section",
                        id: "operations-workspace-sdk",
                        ref: Z,
                        "data-workspace-section": "sdk",
                        children: [ (0, a.jsx)("header", {
                            children: (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("h3", {
                                    children: "SDK与运行开关"
                                }), (0, a.jsx)("p", {
                                    children: "仅可维护当前SDK组合包已包含的能力，并配置组合包运行开关。"
                                }) ]
                            })
                        }), b.length ? (0, a.jsx)(ag, {
                            modules: F,
                            selected: _(A).filter(e => I.includes(e)),
                            onToggle: e => {
                                A && P(a => {
                                    let n = a[A] ?? I;
                                    return {
                                        ...a,
                                        [A]: n.includes(e) ? n.filter(a => a !== e) : [ ...n, e ]
                                    };
                                });
                            }
                        }) : (0, a.jsx)("div", {
                            className: "mgp-operations-empty",
                            children: "请先在发行范围中选择国家或地区，再维护 SDK 能力。"
                        }), (0, a.jsxs)("div", {
                            className: "mgp-operations-switch-config",
                            children: [ (0, a.jsx)("div", {
                                className: "mgp-operations-subsection-heading",
                                children: (0, a.jsx)("h4", {
                                    children: "开关配置"
                                })
                            }), (0, a.jsx)(av, {
                                value: M,
                                onChange: L,
                                showTitle: !1
                            }) ]
                        }) ]
                    }) ]
                }), (0, a.jsxs)("footer", {
                    className: "mgp-sdk-drawer-footer",
                    children: [ (0, a.jsx)("span", {
                        className: `mgp-operations-save-state ${ea ? "is-dirty" : "is-synced"}`,
                        children: ea ? "有未保存修改" : "所有修改已保存"
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-button secondary",
                        disabled: c,
                        onClick: () => ei(),
                        children: "取消"
                    }), (0, a.jsxs)("button", {
                        type: "button",
                        className: "mgp-button primary",
                        disabled: c,
                        onClick: () => {
                            if (h(!0), !b.length) return;
                            let a = Object.fromEntries(b.map(e => [ e, [ ..._(e) ] ])), n = Object.fromEntries(b.map(e => [ e, eC(N[e] || []) ])), s = Object.fromEntries(b.map(e => [ e, [ ...S[e] || [] ] ]));
                            es(() => i(e.id, {
                                countries: b,
                                channelCountries: {
                                    ...e.channelCountries || {},
                                    [u]: b
                                },
                                countryCapabilityEnabled: a,
                                countryModules: a,
                                countryLoginMethods: n,
                                countryAgreements: s,
                                capabilityStateVersion: 4,
                                switches: M,
                                sdkSwitches: M
                            }));
                        },
                        children: [ (0, a.jsx)(z.Save, {
                            size: 16
                            }), "保存运营配置" ]
                    }) ]
                }) ]
            })
        });
    }
    function af({item: e, gameName: s, gameProfile: l, configuredLoginMethodIds: i, configuredAgreementGroups: t, configuredCompliance: complianceConfig = {}, configuredDataPlatformIds: r, configuredAdvertising: d = {}, configuredSupport: supportConfig = {}, onClose: o, onEdit: c}) {
        let [m, p] = (0, n.useState)(!1), [secretVisibility, setSecretVisibility] = (0, n.useState)({}), h = {
            ...eh(),
            ...d
        }, u = e.storeId || e.channels?.[0] || "", x = e$(u), j = e.channelPaymentConfigs?.[u] || J(u), b = Q(u), f = eD(i || []).map(e => ez(e)).filter(Boolean), y = t || [], v = (r || []).map(e => F.find(a => a.id === e)).filter(Boolean), S = (e.countries || []).map(e => eE(e)?.name || e).filter(Boolean), w = (e = o) => {
            m || (p(!0), window.setTimeout(e, 260));
        }, renderSecretValue = (key, value) => {
            let normalizedValue = String(value || "").trim(), visible = !!secretVisibility[key];
            return normalizedValue ? (0, a.jsxs)("span", {
                className: "mgp-detail-secret",
                children: [ (0, a.jsx)("span", {
                    children: visible ? normalizedValue : "••••••••"
                }), (0, a.jsx)("button", {
                    type: "button",
                    className: "mgp-detail-secret-toggle",
                    "aria-label": visible ? "隐藏密文" : "显示明文",
                    "aria-pressed": visible,
                    onClick: () => setSecretVisibility(e => ({
                        ...e,
                        [key]: !e[key]
                    })),
                    children: (0, a.jsx)(SecretEyeIcon, {
                        size: 15
                    })
                }) ]
            }) : "未填写";
        };
        return (0, a.jsx)("div", {
            className: `mgp-drawer-backdrop ${m ? "is-closing" : ""}`,
            role: "presentation",
            children: (0, a.jsxs)("aside", {
                className: "mgp-sdk-drawer mgp-sdk-detail-drawer mgp-template-detail-drawer",
                role: "dialog",
                "aria-modal": "true",
            "aria-label": `SDK详情 ${x?.name || u}`,
                children: [ (0, a.jsxs)("header", {
                    className: "mgp-sdk-drawer-header",
                    children: [ (0, a.jsxs)("div", {
                        children: [ (0, a.jsxs)("span", {
                            children: [ "当前游戏：", e.gameName || s ]
                        }), (0, a.jsx)("h2", {
                        children: "SDK详情"
                        }) ]
                    }), (0, a.jsx)("button", {
                        type: "button",
                        onClick: () => w(),
                        "aria-label": "关闭",
                        children: (0, a.jsx)(T.X, {
                            size: 18
                        })
                    }) ]
                }), (0, a.jsxs)("div", {
                    className: "mgp-sdk-drawer-body",
                    children: [ (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "SDK信息"
                        }), (0, a.jsxs)("dl", {
                            className: "mgp-package-overview",
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "游戏"
                                }), (0, a.jsx)("dd", {
                                    children: e.gameName || s
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "游戏类型 / 阶段"
                                }), (0, a.jsx)("dd", {
                                    children: [ l?.type, l?.stage ].filter(Boolean).join(" · ") || "未填写"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "发行渠道"
                                }), (0, a.jsxs)("dd", {
                                    className: "mgp-detail-store",
                                    children: [ (0, a.jsx)(eM, {
                                        storeId: u,
                                        size: 24
                                    }), (0, a.jsxs)("span", {
                                        children: x?.name || u
                                    }) ]
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "包名"
                                }), (0, a.jsx)("dd", {
                                    children: e.packageName
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "生成时间"
                                }), (0, a.jsx)("dd", {
                                    children: new Date(e.generatedAt || Date.now()).toLocaleString("zh-CN", {
                                        hour12: !1
                                    })
                                }) ]
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "支付配置"
                        }), (0, a.jsxs)("dl", {
                            className: "mgp-package-config-list",
                            children: [ b.fields.map(([e, n, , s]) => {
                                let l = String(j.official?.[e] || "").trim();
                                return (0, a.jsxs)("div", {
                                    children: [ (0, a.jsx)("dt", {
                                        children: n
                                    }), (0, a.jsx)("dd", {
                                        children: "secret" === s ? renderSecretValue(`payment-${e}`, l) : l || "未填写"
                                    }) ]
                                }, e);
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "其他支付渠道"
                                }), (0, a.jsx)("dd", {
                                    children: j.moreProvider ? H[j.moreProvider]?.name || j.moreProvider : "未启用"
                                }) ]
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "登录方式"
                        }), (0, a.jsx)("div", {
                            className: "mgp-template-detail-tags",
                            children: f.map(e => (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)(e4, {
                                    methodId: e.id
                                }), e.displayName || e.name ]
                            }, e.id))
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "协议配置"
                        }), (0, a.jsxs)("div", {
                            className: "mgp-template-agreement-list",
                            children: [ y.map(e => (0, a.jsxs)("article", {
                                children: [ (0, a.jsx)("strong", {
                                    children: e.name
                                }), (0, a.jsx)("span", {
                                    children: (e.languages || []).join("、") || "未配置语种"
                                }), (0, a.jsxs)("small", {
                                    children: [ "默认语种：", e.defaultLanguage || e.languages?.[0] || "未设置" ]
                                }) ]
                            }, e.id)), y.length ? null : (0, a.jsx)("p", {
                                children: "当前渠道暂无协议配置。"
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "合规配置"
                        }), (0, a.jsxs)("dl", {
                            className: "mgp-package-config-list",
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "年龄阈值"
                                }), (0, a.jsx)("dd", {
                                    children: String(complianceConfig.ageThreshold || "").trim() ? `${complianceConfig.ageThreshold} 岁` : "未填写"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "KWS Client ID"
                                }), (0, a.jsx)("dd", {
                                    children: complianceConfig.kwsClientId || "未填写"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "KWS Client Secret"
                                }), (0, a.jsx)("dd", {
                                    children: renderSecretValue("kws-client-secret", complianceConfig.kwsClientSecret)
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "KWS Verify Secret"
                                }), (0, a.jsx)("dd", {
                                    children: renderSecretValue("kws-verify-secret", complianceConfig.kwsVerifySecret)
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "KWS Redirect URL"
                                }), (0, a.jsx)("dd", {
                                    children: complianceConfig.kwsRedirect || "未填写"
                                }) ]
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "归因数据配置"
                        }), (0, a.jsxs)("div", {
                            className: "mgp-template-detail-tags compact",
                            children: [ v.map(e => (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)(g.Database, {
                                    size: 15
                                }), e.name ]
                            }, e.id)), v.length ? null : (0, a.jsx)("p", {
                                children: "未启用归因数据平台。"
                            }) ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("div", {
                            className: "mgp-template-capability-heading",
                            children: (0, a.jsx)("h3", {
                                children: "广告变现"
                            })
                        }), (0, a.jsxs)("dl", {
                            className: "mgp-package-config-list mgp-advertising-detail-list",
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "广告平台"
                                }), (0, a.jsx)("dd", {
                                    children: eu(h.provider)
                                }) ]
                            }), "admob" === h.provider ? (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "AdMob App ID"
                                }), (0, a.jsx)("dd", {
                                    children: h.admobAppId || "未填写"
                                }) ]
                            }) : null, "applovin-max" === h.provider ? (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "MAX SDK Key"
                                }), (0, a.jsx)("dd", {
                                    children: h.maxSdkKey ? "••••••••" : "未填写"
                                }) ]
                            }) : null ]
                        }) ]
                    }), (0, a.jsxs)("section", {
                        className: "mgp-package-detail-section",
                        children: [ (0, a.jsx)("h3", {
                            children: "客服配置"
                        }), (0, a.jsxs)("dl", {
                            className: "mgp-package-config-list",
                            children: [ (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "在线客服昵称"
                                }), (0, a.jsx)("dd", {
                                    children: supportConfig.onlineName || "未填写"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "表单反馈"
                                }), (0, a.jsx)("dd", {
                                    children: (supportConfig.feedbackTypes || []).map(e => e.name).filter(Boolean).join("、") || "未配置"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "FAQ"
                                }), (0, a.jsx)("dd", {
                                    children: (supportConfig.faqGroups || []).length ? `${supportConfig.faqGroups.length} 个分组${(supportConfig.faqLanguages || []).length ? ` · ${(supportConfig.faqLanguages || []).join("、")}` : ""}` : "未配置"
                                }) ]
                            }), (0, a.jsxs)("div", {
                                children: [ (0, a.jsx)("dt", {
                                    children: "智能客服"
                                }), (0, a.jsx)("dd", {
                                    children: supportConfig.botName ? `${supportConfig.botName} · ${(supportConfig.knowledgeItems || []).length} 条知识` : (supportConfig.knowledgeItems || []).length ? `${supportConfig.knowledgeItems.length} 条知识` : "未配置"
                                }) ]
                            }) ]
                        }) ]
                    }) ]
                }), (0, a.jsxs)("footer", {
                    className: "mgp-sdk-drawer-footer",
                    children: [ (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-button secondary",
                        disabled: m,
                        onClick: () => w(),
                        children: "关闭"
                    }), c ? (0, a.jsxs)("button", {
                        type: "button",
                        className: "mgp-button primary",
                        disabled: m,
                        onClick: () => w(c),
                        children: [ (0, a.jsx)(q, {
                            size: 15
                        }), "运营配置" ]
                    }) : null ]
                }) ]
            })
        });
    }
    function ay({gameName: e, games: s, onGameChange: l, packages: i, config: currentConfig = {}, configuredLoginMethodIds: t, configuredAgreementGroups: r, configuredCompliance: configuredCompliance, configuredDataPlatformIds: d, configuredAdvertising: o, configuredSupport: configuredSupport, gameProfile: c, initialEditingPackageId: p, onInitialEditingHandled: h, onSave: u, onGoLoginConfig: g, onGoAgreementConfig: x, onStartGenerate: onStartGenerate, onDownload: onDownload, toast: j}) {
        let [b, f] = (0, n.useState)(p || null), k = i.filter(a => !a.gameName || a.gameName === e), N = k.find(e => e.id === b), allChannelsUsed = V.every(e => k.some(a => a.storeId === e.id));
        return (0, n.useEffect)(() => {
            p && (f(p), h?.());
        }, [ p, h ]), (0, a.jsxs)("div", {
            className: "mgp-page mgp-sdk-page mgp-operations-plan-page",
            children: [ (0, a.jsx)(eZ, {
                eyebrow: null,
                title: "生成及运营中心",
                description: "生成、下载并管理各发行渠道的 SDK 组合包，并配置组合包内已有的 SDK 能力。",
                action: (0, a.jsx)("section", {
                    className: "mgp-foundation-toolbar mgp-operations-game-toolbar mgp-foundation-toolbar-inline",
                    children: (0, a.jsxs)("div", {
                        className: "mgp-foundation-toolbar-row",
                        children: (0, a.jsxs)("label", {
                            children: [ (0, a.jsx)("span", {
                                children: "游戏名称"
                            }), (0, a.jsx)("select", {
                                "aria-label": "生成及运营中心当前游戏",
                                value: e,
                                onChange: e => {
                                    f(null), l(e.target.value);
                                },
                                children: s.map(e => (0, a.jsx)("option", {
                                    value: e,
                                    children: e
                                }, e))
                            }), (0, a.jsx)(m.ChevronDown, {
                                size: 15
                            }) ]
                        })
                    })
                })
            }), (0, a.jsxs)("section", {
                className: "mgp-sdk-list-panel",
                children: [ (0, a.jsxs)("div", {
                    className: "mgp-operation-plan-table",
                    children: [ (0, a.jsxs)("div", {
                        className: "mgp-operation-plan-head",
                        children: [ (0, a.jsx)("span", {
                            children: "发行渠道"
                        }), (0, a.jsx)("span", {
                            children: "SDK 能力"
                        }), (0, a.jsx)("span", {
                            children: "生成时间"
                        }), (0, a.jsx)("span", {
                            children: "操作"
                        }) ]
                    }), k.map(n => {
                        let s = n.storeId || n.channels?.[0], l = e$(s), snapshot = n.configSnapshot || currentConfig || {}, scopedSnapshot = {
                            ...snapshot,
                            release: {
                                ...snapshot.release,
                                channels: [ s ]
                            }
                        }, i = eK(n).map(e => ({
                            id: e,
                            title: eq(e)?.title || e,
                            detail: getCapabilityConfiguredPreview(e, scopedSnapshot)
                        })), t = new Date(n.generatedAt || Date.now()).toLocaleString("zh-CN", {
                            hour12: !1
                        });
                        return (0, a.jsxs)("div", {
                            className: "mgp-operation-plan-row",
                            "data-sdk-version-id": n.id,
                            children: [ (0, a.jsxs)("span", {
                                className: "mgp-sdk-store-cell",
                                children: [ (0, a.jsx)(eM, {
                                    storeId: s,
                                    size: 20
                                }), (0, a.jsxs)("span", {
                                    className: "mgp-sdk-store-copy",
                                    children: [ (0, a.jsx)("strong", {
                                        children: l?.name || "未配置"
                                    }), (0, a.jsx)("small", {
                                        children: n.packageName
                                    }) ]
                                }) ]
                            }), (0, a.jsx)("span", {
                                className: "mgp-sdk-capability-cell",
                                children: (0, a.jsx)("span", {
                                    className: "mgp-sdk-capability-chips",
                                    role: "list",
                                    "aria-label": "SDK能力及配置摘要",
                                    children: i.map(e => {
                                        let s = `sdk-capability-tooltip-${n.id}-${e.id}`;
                                        return (0, a.jsxs)("span", {
                                            className: "mgp-sdk-capability-chip",
                                            role: "listitem",
                                            tabIndex: 0,
                                            "aria-describedby": s,
                                            children: [ (0, a.jsx)("span", {
                                                children: e.title
                                            }), (0, a.jsx)("span", {
                                                id: s,
                                                className: "mgp-sdk-capability-tooltip",
                                                role: "tooltip",
                                                children: e.detail
                                            }) ]
                                        }, e.id);
                                    })
                                })
                            }), (0, a.jsx)("span", {
                                className: "mgp-sdk-generated-time",
                                children: t
                            }), (0, a.jsxs)("span", {
                                children: [ (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    "aria-label": `下载${n.packageName}`,
                                    onClick: () => onDownload(n),
                                    children: "下载"
                                }), (0, a.jsx)("button", {
                                    type: "button",
                                    className: "mgp-text-action",
                                    "aria-label": `运营配置${n.packageName}`,
                                    onClick: () => {
                                        f(n.id);
                                    },
                                    children: "运营配置"
                                }) ]
                            }) ]
                        }, n.id);
                    }), k.length ? null : (0, a.jsx)("div", {
                        className: "mgp-operation-plan-empty",
                        children: "当前游戏暂无 SDK 组合包。"
                    }), (0, a.jsx)("button", {
                        type: "button",
                        className: "mgp-sdk-version-add-row",
                        "aria-label": "生成SDK",
                        disabled: allChannelsUsed,
                        title: allChannelsUsed ? "所有发行渠道均已有 SDK 组合包" : "生成SDK",
                        onClick: onStartGenerate,
                        children: allChannelsUsed ? "所有发行渠道均已有 SDK 组合包" : (0, a.jsx)(K.Plus, {
                            size: 18
                        })
                    }) ]
                }) ]
            }), N ? (0, a.jsx)(ab, {
                item: N,
                configuredLoginMethodIds: eD(N.configSnapshot?.login?.selected || t),
                configuredAgreementGroups: N.configSnapshot?.agreement?.groups || r,
                configuredCompliance: N.configSnapshot?.compliance || configuredCompliance,
                configuredDataPlatformIds: N.configSnapshot?.data?.selected || d,
                configuredAdvertising: N.configSnapshot?.advertising || o,
                configuredSupport: N.configSnapshot?.support || configuredSupport,
                onSave: (e, a) => {
                    u(e, a), f(null);
                },
                onClose: () => f(null),
                onGoLoginConfig: g,
                onGoAgreementConfig: x,
                toast: j
            }, N.id) : null ]
        });
    }
    function av({value: e, onChange: n, showTitle: s = !0}) {
        return (0, a.jsxs)("section", {
            className: "mgp-sdk-switches-plain",
            "aria-label": "SDK开关配置",
            children: [ s ? (0, a.jsx)("h3", {
                children: "开关配置"
            }) : null, (0, a.jsx)("div", {
                className: "mgp-sdk-switch-list",
                children: [ [ "agreementReminder", "协议提醒开关" ], [ "welcomeMessage", "欢迎语开关" ], [ "guestLogoutReminder", "游客退出登录提醒开关" ], [ "guestPayment", "游客支付开关" ] ].map(([s, l]) => (0, 
                a.jsxs)("div", {
                    children: [ (0, a.jsx)("span", {
                        children: l
                    }), (0, a.jsx)(eJ, {
                        checked: e[s],
                        label: l,
                        onChange: a => n({
                            ...e,
                            [s]: a
                        })
                    }) ]
                }, s))
            }), (0, a.jsxs)("label", {
                className: "mgp-sdk-silent-login",
                children: [ (0, a.jsx)("span", {
                    children: "静默登录方式"
                }), (0, a.jsxs)("select", {
                    value: e.silentLoginMethod,
                    onChange: a => n({
                        ...e,
                        silentLoginMethod: a.target.value
                    }),
                    children: [ (0, a.jsx)("option", {
                        value: "none",
                        children: "关"
                    }), (0, a.jsx)("option", {
                        value: "last",
                        children: "上次登录方式"
                    }), (0, a.jsx)("option", {
                        value: "guest",
                        children: "游客登录"
                    }) ]
                }) ]
            }) ]
        });
    }
    function ak({gameName: e, records: n}) {
        return (0, a.jsxs)("div", {
            className: "mgp-page",
            children: [ (0, a.jsx)(eZ, {
                eyebrow: "发行服务 / SDK 工具",
                title: "运行监控",
                description: "查看 SDK 包生成记录、登录支付状态和运行表现。",
                action: (0, a.jsx)("span", {
                    className: "mgp-demo-label",
                    children: "演示数据"
                })
            }), (0, a.jsx)("section", {
                className: "mgp-metrics",
                children: [ [ "本月生成SDK", "12", "较上月 +20%", E.PackageCheck, "purple" ], [ "今日活跃用户", "128,460", "较昨日 +8.4%", L.UserRound, "blue" ], [ "登录成功率", "99.32%", "稳定运行", $.LogIn, "green" ], [ "支付成功率", "96.84%", "较昨日 +0.7%", u.CreditCard, "orange" ] ].map(([e, n, s, l, i]) => (0,
                a.jsxs)("article", {
                    className: `mgp-metric ${i}`,
                    role: "group",
                    "aria-label": e,
                    children: [ (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("span", {
                            children: e
                        }), (0, a.jsx)("strong", {
                            children: n
                        }), (0, a.jsx)("small", {
                            children: s
                        }) ]
                    }), (0, a.jsx)("i", {
                        children: (0, a.jsx)(l, {
                            size: 21
                        })
                    }) ]
                }, e))
            }), (0, a.jsxs)("section", {
                className: "mgp-ops-grid",
                children: [ (0, a.jsxs)("article", {
                    className: "mgp-chart",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsxs)("div", {
                            children: [ (0, a.jsx)("h2", {
                                children: "近 7 日 SDK 活跃趋势"
                            }), (0, a.jsx)("p", {
                                children: "活跃设备数（万）"
                            }) ]
                        }), (0, a.jsx)("span", {
                            children: "07.21 - 07.27"
                        }) ]
                    }), (0, a.jsx)("div", {
                        children: [ 54, 68, 61, 74, 69, 82, 88 ].map((e, n) => (0, a.jsxs)("span", {
                            children: [ (0, a.jsx)("b", {
                                children: (1.7 * e).toFixed(1)
                            }), (0, a.jsx)("i", {
                                style: {
                                    height: `${e}%`
                                }
                            }), (0, a.jsx)("small", {
                                children: `07.${21 + n}`
                            }) ]
                        }, e + n))
                    }) ]
                }), (0, a.jsxs)("article", {
                    className: "mgp-distribution",
                    children: [ (0, a.jsxs)("header", {
                        children: [ (0, a.jsx)("h2", {
                            children: "国家用户分布"
                        }), (0, a.jsx)("p", {
                            children: "近 7 日活跃用户"
                        }) ]
                    }), [ [ "美国", "34.8%", 82 ], [ "德国", "18.2%", 58 ], [ "澳大利亚", "16.5%", 52 ], [ "日本", "14.1%", 46 ], [ "其他", "16.4%", 48 ] ].map(([e, n, s]) => (0, 
                    a.jsxs)("div", {
                        children: [ (0, a.jsx)("span", {
                            children: e
                        }), (0, a.jsx)("i", {
                            children: (0, a.jsx)("b", {
                                style: {
                                    width: `${s}%`
                                }
                            })
                        }), (0, a.jsx)("strong", {
                            children: n
                        }) ]
                    }, e)) ]
                }) ]
            }), (0, a.jsxs)("section", {
                className: "mgp-record-panel",
                children: [ (0, a.jsx)("header", {
                    children: (0, a.jsxs)("div", {
                        children: [ (0, a.jsx)("h2", {
                            children: "最近生成记录"
                        }), (0, a.jsxs)("p", {
                            children: [ "当前游戏：", e ]
                        }) ]
                    })
                }), (0, a.jsxs)("div", {
                    className: "mgp-record-table",
                    children: [ (0, a.jsxs)("div", {
                        className: "mgp-record-head",
                        children: [ (0, a.jsx)("span", {
                            children: "游戏 / 包名"
                        }), (0, a.jsx)("span", {
                            children: "渠道数"
                        }), (0, a.jsx)("span", {
                            children: "国家数"
                        }), (0, a.jsx)("span", {
                            children: "SDK包数"
                        }), (0, a.jsx)("span", {
                            children: "生成时间"
                        }), (0, a.jsx)("span", {
                            children: "状态"
                        }) ]
                    }), n.map(e => (0, a.jsxs)("div", {
                        className: "mgp-record-row",
                        children: [ (0, a.jsxs)("span", {
                            children: [ (0, a.jsx)("strong", {
                                children: e.game
                            }), (0, a.jsx)("small", {
                                children: e.packageName
                            }) ]
                        }), (0, a.jsx)("span", {
                            children: e.channels
                        }), (0, a.jsx)("span", {
                            children: e.countries
                        }), (0, a.jsx)("span", {
                            children: e.modules
                        }), (0, a.jsx)("span", {
                            children: e.time
                        }), (0, a.jsxs)("span", {
                            children: [ (0, a.jsx)(c.CheckCircle2, {
                                size: 14
                            }), e.status ]
                        }) ]
                    }, e.id)) ]
                }) ]
            }) ]
        });
    }
    function aN(e) {
        return [ 255 & e, e >>> 8 & 255 ];
    }
    function aC(e) {
        return [ 255 & e, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255 ];
    }
    function aS(e, a = "package") {
        return String(e || "").trim().replace(/[<>:"/\\|?*\u0000-\u001f]/g, "-").replace(/\s+/g, "-").replace(/-+/g, "-") || a;
    }
    function downloadChannelPackageArchive(e, n, s, l, i) {
        let t = e.storeId || e.channels?.[0] || "", r = e$(t), d = eK(e), o = eD(n.login?.selected || []), c = n.agreement?.groups || [], m = n.data?.selected || [], p = {
            schemaVersion: "meetgames-sdk-channel-bundle-v1.7",
            generatedAt: (new Date).toISOString(),
            game: {
                name: e.gameName || s,
                profile: l || null
            },
            release: {
                storeId: t,
                channel: r?.name || t,
                packageName: e.packageName,
                deliveryUrl: n.release?.deliveryUrl || "",
                payment: d.includes("payment") ? e.channelPaymentConfigs?.[t] || n.release?.channelPaymentConfigs?.[t] || null : null
            },
            login: {
                methods: d.includes("login") ? o.map(e => ({
                    id: e,
                    name: ez(e)?.displayName || e,
                    values: getLoginValuesForRuntime(n.login?.values?.[e] || {}, r?.platform)
                })) : []
            },
            agreements: d.includes("agreement") ? c : [],
            dataPlatforms: d.includes("ops-data") ? m.map(e => ({
                id: e,
                name: F.find(a => a.id === e)?.name || e,
                values: n.data?.values?.[e] || {}
            })) : [],
            advertising: d.includes("advertising") ? advertisingConfigSnapshot(n.advertising || eh()) : null,
            support: d.includes("support") ? n.support || {} : null,
            compliance: d.includes("compliance") ? n.compliance || {} : null,
            sdkCapabilities: {
                estimatedSizeMb: Number(ex(d, m).toFixed(1)),
                items: d.map(e => ({
                    id: e,
                    name: eq(e)?.title || e,
                    estimatedSizeMb: eg(e, m)
                }))
            },
            operations: {
                countries: e.countries || [],
                countryCapabilityEnabled: e.countryCapabilityEnabled || e.countryModules || {},
                countryLoginMethods: e.countryLoginMethods || {},
                countryAgreements: e.countryAgreements || {},
                sdkSwitches: e.sdkSwitches || e.switches || {}
            }
        }, h = p.release, u = [ {
            name: "README.txt",
            content: `MeetGames SDK 渠道包\n游戏：${p.game.name}\n发行渠道：${h.channel}（${h.platform}）\n包名：${h.packageName}\nSDK 能力：${p.sdkCapabilities.items.map(e => e.name).join("、")}\n预计体积：${p.sdkCapabilities.estimatedSizeMb.toFixed(1)} MB\n\n本 ZIP 为可验证的 Demo 渠道包，包含本次构建快照与接入清单。`
        }, {
            name: "manifest.json",
            content: JSON.stringify(p, null, 2)
        }, {
            name: "config/release.json",
            content: JSON.stringify(p.release, null, 2)
        }, {
            name: "config/sdk-capabilities.json",
            content: JSON.stringify(p.sdkCapabilities, null, 2)
        } ];
        d.includes("login") && u.push({
            name: "config/login.json",
            content: JSON.stringify(p.login, null, 2)
        }), d.includes("agreement") && u.push({
            name: "config/agreements.json",
            content: JSON.stringify(p.agreements, null, 2)
        }), d.includes("ops-data") && u.push({
            name: "config/data-platforms.json",
            content: JSON.stringify(p.dataPlatforms, null, 2)
        }), d.includes("advertising") && u.push({
            name: "config/advertising.json",
            content: JSON.stringify(p.advertising, null, 2)
        }), d.includes("support") && u.push({
            name: "config/support.json",
            content: JSON.stringify(p.support, null, 2)
        }), d.includes("compliance") && u.push({
            name: "config/compliance.json",
            content: JSON.stringify(p.compliance, null, 2)
        });
        let g = new TextEncoder, x = [], j = [], b = 0;
        u.forEach(e => {
            let n = g.encode(e.name), s = g.encode(e.content), l = function(e) {
                let a = 4294967295;
                for (let n of e) {
                    a ^= n;
                    for (let e = 0; e < 8; e += 1) a = a >>> 1 ^ 3988292384 & -(1 & a);
                }
                return (4294967295 ^ a) >>> 0;
            }(s), i = new Uint8Array([ ...aC(67324752), ...aN(20), ...aN(2048), ...aN(0), ...aN(0), ...aN(0), ...aC(l), ...aC(s.length), ...aC(s.length), ...aN(n.length), ...aN(0), ...n, ...s ]);
            x.push(i);
            let t = new Uint8Array([ ...aC(33639248), ...aN(20), ...aN(20), ...aN(2048), ...aN(0), ...aN(0), ...aN(0), ...aC(l), ...aC(s.length), ...aC(s.length), ...aN(n.length), ...aN(0), ...aN(0), ...aN(0), ...aN(0), ...aC(0), ...aC(b), ...n ]);
            j.push(t), b += i.length;
        });
        let f = j.reduce((e, a) => e + a.length, 0), y = new Blob([ ...x, ...j, new Uint8Array([ ...aC(101010256), ...aN(0), ...aN(0), ...aN(u.length), ...aN(u.length), ...aC(f), ...aC(b), ...aN(0) ]) ], {
            type: "application/zip"
        }), v = `MeetGames-${aS(s, "game")}-${aS(r?.name || t, "channel")}-SDK.zip`, k = URL.createObjectURL(y), N = document.createElement("a");
        N.href = k, N.download = v, document.body.appendChild(N), N.click(), N.remove(), window.setTimeout(() => URL.revokeObjectURL(k), 0), i(`${r?.name || t} 渠道包下载已开始`);
    }
    let aw = {
        agreementReminder: !0,
        welcomeMessage: !0,
        guestLogoutReminder: !0,
        guestPayment: !1,
        crashReport: !0,
        personalizedAds: !1,
        silentLoginMethod: "none",
        silentLoginMode: "auto"
    }, aA = () => ({
        storeId: "",
        packageName: "",
        channels: [],
        countries: [],
        channelCountries: {},
        countryModules: {},
        countryLoginMethods: {},
        countryAgreements: {},
        modules: [],
        channelPaymentConfigs: {},
        paymentConfigured: [],
        sdkSwitches: {
            ...aw
        }
    });
    e.s([ "default", 0, function() {
        let [e, s] = (0, n.useState)("config"), [l, i] = (0, n.useState)("home"), [t, r] = (0, 
        n.useState)(null), [d, o] = (0, n.useState)([ "test-欧美", "Kingdom Journey", "Puzzle Harbor" ]), [m, p] = (0, 
        n.useState)("test-欧美"), [u, g] = (0, n.useState)({
            "test-欧美": {
                name: "test-欧美",
                type: "角色扮演",
                stage: "长线运营阶段",
                link: ""
            }
        }), [x, j] = (0, n.useState)({}), [b, f] = (0, n.useState)({
            "test-欧美": R.map(e => e.id)
        }), [y, v] = (0, n.useState)(-1), [k, N] = (0, n.useState)({
            release: {
                channels: paymentChannelIds(),
                channelPaymentConfigs: paymentChannelConfigMap(!0),
                packageNames: {},
                deliveryUrl: ""
            },
            login: {
                selected: [ "guest", "email", "google", "facebook", "discord" ],
                values: eS
            },
            support: {
                onlineEnabled: !0,
                feedbackEnabled: !1,
                faqEnabled: !1,
                smartEnabled: !1,
                onlineName: "Online Service",
                feedbackTypes: [ {
                    id: "feedback-account",
                    name: "账号问题",
                    description: "登录、绑定或账号找回"
                }, {
                    id: "feedback-payment",
                    name: "充值问题",
                    description: "支付、不到账或退款"
                } ],
                faqBackground: "support-faq-header.png",
                faqLanguages: [ "简体中文", "英语" ],
                faqGroupTranslations: {},
                faqGroups: [ {
                    id: "faq-start",
                    name: "新手帮助",
                    count: 8,
                    status: "已翻译"
                }, {
                    id: "faq-payment",
                    name: "充值问题",
                    count: 6,
                    status: "已翻译"
                } ],
                faqItemsByGroup: {
                    "faq-start": [ {
                        id: "faq-start-1",
                        question: "如何开始游戏？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-2",
                        question: "游客账号如何绑定？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-3",
                        question: "如何切换登录方式？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-4",
                        question: "忘记账号怎么办？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-5",
                        question: "如何开启消息通知？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-6",
                        question: "如何联系客服？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-7",
                        question: "游戏数据如何同步？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-start-8",
                        question: "如何删除游戏账号？",
                        status: "已翻译",
                        enabled: !0
                    } ],
                    "faq-payment": [ {
                        id: "faq-payment-1",
                        question: "支付未到账怎么办？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-payment-2",
                        question: "如何申请退款？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-payment-3",
                        question: "支持哪些支付方式？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-payment-4",
                        question: "订单重复扣款怎么办？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-payment-5",
                        question: "支付失败如何处理？",
                        status: "已翻译",
                        enabled: !0
                    }, {
                        id: "faq-payment-6",
                        question: "如何查询充值记录？",
                        status: "已翻译",
                        enabled: !0
                    } ]
                },
                botName: "Game Assistant",
                welcomeText: "Hello, I am glad to serve you!",
                fallbackText: "Sorry, I did not understand. I can transfer you to online support.",
                knowledgeItems: [ {
                    id: "knowledge-account",
                    question: "如何找回账号？",
                    status: "已启用",
                    enabled: !0
                }, {
                    id: "knowledge-payment",
                    question: "支付未到账怎么办？",
                    status: "已启用",
                    enabled: !0
                } ]
            },
            data: {
                selected: [ "firebase", "appsflyer" ],
                values: ew
            },
            advertising: {
                provider: "applovin-max",
                admobAppId: "ca-app-pub-3940256099942544~3347511713",
                maxSdkKey: "demo-max-sdk-key-2026-meetgames"
            },
            agreement: {
                groups: [ {
                    id: "agreement-default",
                    channels: [ "android-google" ],
                    name: "默认协议分组",
                    languages: [ "英语", "简体中文" ],
                    defaultLanguage: "英语",
                    locales: {
                        "英语": {
                            name: "Privacy Policy",
                            url: "https://demo-game.com/privacy/en"
                        },
                        "简体中文": {
                            name: "隐私政策",
                            url: "https://demo-game.com/privacy/zh-cn"
                        }
                    },
                    agreementName: "Privacy Policy",
                    agreementUrl: "https://demo-game.com/privacy/en",
                    privacyUrl: "https://demo-game.com/privacy",
                    termsUrl: "https://demo-game.com/terms"
                } ]
            },
            compliance: {
                gdpr: !0,
                ageGate: !0,
                ageThreshold: "13",
                coppa: !0,
                kwsEnabled: !0,
                kwsClientId: "kws_demo_client",
                kwsClientSecret: "kws_demo_secret",
                kwsVerifySecret: "kws_demo_verify_secret",
                kwsRedirect: "https://api.demo-game.com/kws/callback"
            },
            capabilities: {
                byChannel: {
                    "android-google": [ "login", "payment", "agreement", "compliance", "support", "ops-data", "advertising" ]
                }
            }
        }), [C, S] = (0, n.useState)({
            "test-欧美": {
                "android-google": {
                    capabilityStateVersion: 4,
                    countries: [ "US", "DE", "FR" ],
                    channelCountries: {
                        "android-google": [ "US", "DE", "FR" ]
                    },
                    countryCapabilityEnabled: {
                        US: [ "login", "payment", "agreement", "compliance", "support", "ops-data", "advertising" ],
                        DE: [ "login", "payment", "agreement", "compliance", "support", "advertising" ],
                        FR: [ "login", "payment", "agreement", "compliance", "ops-data", "advertising" ]
                    },
                    countryLoginMethods: {
                        US: [ "guest", "email", "google", "facebook", "discord" ],
                        DE: [ "guest", "email", "google" ],
                        FR: [ "guest", "email", "facebook" ]
                    },
                    countryAgreements: {
                        US: [ "agreement-default" ],
                        DE: [ "agreement-default" ],
                        FR: [ "agreement-default" ]
                    },
                    switches: {
                        ...aw
                    }
                }
            }
        }), [channelBundles, setChannelBundles] = (0, n.useState)({
            "test-欧美": [ {
                id: "channel-bundle-demo-google-play",
                storeId: "android-google",
                platform: "Android",
                packageName: "com.demo.legend.global",
                version: 1,
                includedCapabilities: ec.map(e => e.id),
                generatedAt: "2026-08-06T00:00:00.000Z"
            } ]
        }), [w, A] = (0, n.useState)([]), [$, I] = (0, n.useState)([]), [D, E] = (0, n.useState)(!1), [q, K] = (0, 
        n.useState)("list"), [z, P] = (0, n.useState)(0), [O, M] = (0, n.useState)(aA), [L, T] = (0, 
        n.useState)(null), [G, U] = (0, n.useState)(null), [_, B] = (0, n.useState)(eA), [V, X] = (0, 
        n.useState)(null), [sdkDownloadSessions, setSdkDownloadSessions] = (0, n.useState)({}), [sdkReturnContext, setSdkReturnContext] = (0, n.useState)(null), H = e => JSON.parse(JSON.stringify(e)), Q = (0, n.useRef)(null);
        Q.current || (Q.current = H(k));
        let W = (0, n.useMemo)(() => Object.fromEntries(R.map(e => {
            var a;
            return [ e.id, (a = e.id, "release" === a ? eG(k.release) : "login" === a ? eR(k.login, k.release) : "support" === a ? eF(k.support) : "data" === a ? e_(k.data) : "advertising" === a ? eV(k.advertising || {}) : "agreement" === a ? eX(k.agreement, k.release) : "capabilities" === a ? eU(k.capabilities, k.release, k.data, k.advertising, k.support) : "compliance" === a && eW(k.compliance)) ];
        })), [ k ]), savedStepIds = b[m] || [], Y = (0, n.useMemo)(() => Object.fromEntries(R.map(e => [ e.id, isConfigCardComplete(e.id, k) ])), [ k ]), ee = Object.values(Y).filter(Boolean).length, ea = (0, 
        n.useMemo)(() => {
            let e = C[m] || {};
            return (channelBundles[m] || []).map(a => {
                let n = e[a.id] || e[a.storeId] || {}, s = eK(a), versionConfig = a.configSnapshot || k, l = {
                    ...aw,
                    ...n.sdkSwitches || {},
                    ...n.switches || {}
                }, i = n.countryCapabilityEnabled || n.countryModules || {};
                return {
                    ...n,
                    ...a,
                    id: a.id,
                    gameName: m,
                    storeId: a.storeId,
                    channels: [ a.storeId ],
                    packageName: String(a.packageName || "").trim(),
                    includedCapabilities: s,
                    modules: s,
                    channelPaymentConfigs: {
                        [a.storeId]: versionConfig.release?.channelPaymentConfigs?.[a.storeId]
                    },
                    paymentConfigured: Z(a.storeId, versionConfig.release?.channelPaymentConfigs?.[a.storeId]) ? [ a.storeId ] : [],
                    countryCapabilityEnabled: i,
                    countryModules: i,
                    switches: l,
                    sdkSwitches: l
                };
            });
        }, [ channelBundles, k.release, m, C ]), en = (0, n.useMemo)(() => ea.map(e => ({
            ...e,
            configurationComplete: !!e.storeId && !et(e.storeId, e.packageName) && eK(e).length > 0
        })), [ ea, k ]), es = (0, n.useMemo)(() => en.filter(e => e.configurationComplete), [ en ]), el = (e, a = "success") => {
            X({
                message: e,
                tone: a
            }), window.setTimeout(() => X(null), 2600);
        }, ei = e => {
            let a = new Set(e);
            f(e => {
                let n = e[m] || [], s = n.filter(e => !a.has(e));
                return s.length === n.length ? e : {
                    ...e,
                    [m]: s
                };
            });
        }, createEmptyGameConfig = () => {
            let e = H(Q.current);
            return e.release = {
                channels: paymentChannelIds(),
                channelPaymentConfigs: paymentChannelConfigMap(),
                packageNames: {},
                deliveryUrl: ""
            }, e.login.selected = [ "guest" ], e.login.values = {}, e.support = {
                onlineEnabled: !0,
                feedbackEnabled: !0,
                faqEnabled: !0,
                smartEnabled: !0,
                onlineName: "",
                feedbackTypes: [],
                faqBackground: "",
                faqLanguages: [],
                faqGroupTranslations: {},
                faqGroups: [],
                faqItemsByGroup: {},
                botName: "",
                welcomeText: "",
                fallbackText: "",
                knowledgeItems: []
            }, e.data.selected = [], e.advertising = eh(), e.agreement.groups = [], e.compliance = {
                gdpr: !1,
                ageGate: !1,
                ageThreshold: "",
                coppa: !1,
                kwsEnabled: !1,
                kwsClientId: "",
                kwsClientSecret: "",
                kwsVerifySecret: "",
                kwsRedirect: ""
            }, e.capabilities = {
                byChannel: {}
            }, e;
        }, er = e => {
            if (!e || e === m) return;
            let a = x[e] ? H(x[e]) : createEmptyGameConfig();
            a.login = {
                ...a.login || {},
                selected: eD(a.login?.selected)
            }, j(e => ({
                ...e,
                [m]: H(k)
            })), f(a => Object.prototype.hasOwnProperty.call(a, e) ? a : {
                ...a,
                [e]: []
            }), N(a), p(e), v(-1);
        }, ed = null;
        return ed = "config" === e ? (0, a.jsx)(ac, {
            gameName: m,
            setGameName: er,
            games: d,
            gameProfiles: u,
            onAddGame: e => {
                let a = e.name.trim();
                if (!a) return !1;
                if (d.includes(a)) return er(a), el("游戏已存在，已切换到该游戏"), !0;
                let n = createEmptyGameConfig();
                return j(e => ({
                    ...e,
                    [m]: H(k),
                    [a]: H(n)
                })), f(e => ({
                    ...e,
                    [a]: []
                })), o(e => [ ...e, a ]), g(n => ({
                    ...n,
                    [a]: {
                        ...e,
                        name: a
                    }
                })), N(n), p(a), v(-1), el("游戏已添加，可开始独立配置"), !0;
            },
            onUpdateGame: (e, a) => {
                let n = a.name.trim();
                return !!n && (n !== e && d.includes(n) ? (el("游戏名称已存在，请更换名称", "error"), !1) : (o(a => a.map(a => a === e ? n : a)), 
                g(s => {
                    let l = {
                        ...s,
                        [n]: {
                            ...a,
                            name: n
                        }
                    };
                    return n !== e && delete l[e], l;
                }), j(a => {
                    let s = {
                        ...a,
                        [n]: H(k)
                    };
                    return n !== e && delete s[e], s;
                }), f(a => {
                    if (n === e) return a;
                    let s = {
                        ...a,
                        [n]: a[e] || []
                    };
                    return delete s[e], s;
                }), S(a => {
                    if (n === e) return a;
                    let s = {
                        ...a,
                        [n]: a[e] || {}
                    };
                    return delete s[e], s;
                }), p(n), v(-1), el("游戏信息已更新"), !0));
            },
            config: k,
            setConfig: N,
            activeStep: y,
            setActiveStep: v,
            validMap: W,
            completeMap: Y,
            onStepSaved: e => {
                f(a => {
                    let n = a[m] || [];
                    return n.includes(e) ? a : {
                        ...a,
                        [m]: [ ...n, e ]
                    };
                });
            },
            onStepsDirty: ei,
            toast: el,
            availableChannels: (k.release?.channels || []).map(e => e$(e)).filter(Boolean),
            mode: l,
            packages: en,
            downloadReturnContext: sdkReturnContext?.gameName === m ? sdkReturnContext : null,
            onModeChange: i,
            onDownloadPackage: e => {
                var a, n, s;
                let l, i, t, r, d, o, c, p = e.storeId || e.channels?.[0] || "", h = e$(p);
                a = function(e, a, n, s, l = "") {
                    let i, t, r, d, o, c, m = (t = e$(i = e.storeId || e.channels?.[0] || ""), r = eK(e), 
                    d = eD(a.login?.selected || []), o = a.agreement?.groups || [], 
                    c = a.data?.selected || [], {
                        schemaVersion: "meetgames-sdk-channel-bundle-v1.7",
                        generatedAt: (new Date).toISOString(),
                        game: {
                            name: e.gameName || n,
                            profile: s || null
                        },
                        release: {
                            storeId: i,
                            channel: t?.name || i,
                            packageName: e.packageName,
                            deliveryUrl: a.release?.deliveryUrl || "",
                            payment: e.channelPaymentConfigs?.[i] || null
                        },
                        login: {
                            methods: d.map(e => ({
                                id: e,
                                name: ez(e)?.displayName || e,
                                values: getLoginValuesForRuntime(a.login?.values?.[e] || {}, t?.platform)
                            }))
                        },
                        agreements: o,
                        dataPlatforms: c.map(e => ({
                            id: e,
                            name: F.find(a => a.id === e)?.name || e,
                            values: a.data?.values?.[e] || {}
                        })),
                        advertising: advertisingConfigSnapshot(a.advertising || eh()),
                        support: a.support || {},
                        compliance: a.compliance || {},
                        sdkCapabilities: {
                            estimatedSizeMb: Number(ex(r, c).toFixed(1)),
                            items: r.map(e => ({
                                id: e,
                                name: eq(e)?.title || e,
                                estimatedSizeMb: eg(e, c)
                            }))
                        },
                        operations: {
                            countries: e.countries || [],
                            countryCapabilityEnabled: e.countryCapabilityEnabled || e.countryModules || {},
                            countryLoginMethods: e.countryLoginMethods || {},
                            countryAgreements: e.countryAgreements || {},
                            sdkSwitches: e.sdkSwitches || e.switches || {}
                        }
                    }), p = m.release;
                    return [ {
                        name: `${l}README.txt`,
                        content: `MeetGames SDK 渠道组合包\n游戏：${m.game.name}\n发行渠道：${p.channel}\n包名：${p.packageName}\nSDK 能力：${m.sdkCapabilities.items.map(e => e.name).join("、")}\n预计体积：${m.sdkCapabilities.estimatedSizeMb.toFixed(1)} MB\n\n本 ZIP 为可验证的 Demo 组合包，包含本次配置快照与接入清单。`
                    }, {
                        name: `${l}manifest.json`,
                        content: JSON.stringify(m, null, 2)
                    }, {
                        name: `${l}config/release.json`,
                        content: JSON.stringify(m.release, null, 2)
                    }, {
                        name: `${l}config/login.json`,
                        content: JSON.stringify(m.login, null, 2)
                    }, {
                        name: `${l}config/agreements.json`,
                        content: JSON.stringify(m.agreements, null, 2)
                    }, {
                        name: `${l}config/data-platforms.json`,
                        content: JSON.stringify(m.dataPlatforms, null, 2)
                    }, {
                        name: `${l}config/advertising.json`,
                        content: JSON.stringify(m.advertising, null, 2)
                    }, {
                        name: `${l}config/sdk-capabilities.json`,
                        content: JSON.stringify(m.sdkCapabilities, null, 2)
                    } ];
                }(e, k, m, u[m]), l = new TextEncoder, i = [], t = [], r = 0, a.forEach(e => {
                    let a = l.encode(e.name), n = l.encode(e.content), s = function(e) {
                        let a = 4294967295;
                        for (let n of e) {
                            a ^= n;
                            for (let e = 0; e < 8; e += 1) a = a >>> 1 ^ 3988292384 & -(1 & a);
                        }
                        return (4294967295 ^ a) >>> 0;
                    }(n), d = new Uint8Array([ ...aC(67324752), ...aN(20), ...aN(2048), ...aN(0), ...aN(0), ...aN(0), ...aC(s), ...aC(n.length), ...aC(n.length), ...aN(a.length), ...aN(0), ...a, ...n ]);
                    i.push(d);
                    let o = new Uint8Array([ ...aC(33639248), ...aN(20), ...aN(20), ...aN(2048), ...aN(0), ...aN(0), ...aN(0), ...aC(s), ...aC(n.length), ...aC(n.length), ...aN(a.length), ...aN(0), ...aN(0), ...aN(0), ...aN(0), ...aC(0), ...aC(r), ...a ]);
                    t.push(o), r += d.length;
                }), d = t.reduce((e, a) => e + a.length, 0), n = new Blob([ ...i, ...t, new Uint8Array([ ...aC(101010256), ...aN(0), ...aN(0), ...aN(a.length), ...aN(a.length), ...aC(d), ...aC(r), ...aN(0) ]) ], {
                    type: "application/zip"
                }), s = `MeetGames-${aS(m, "game")}-${aS(h?.name || p, "channel")}-SDK.zip`, o = URL.createObjectURL(n), 
                (c = document.createElement("a")).href = o, c.download = s, document.body.appendChild(c), 
                c.click(), c.remove(), window.setTimeout(() => URL.revokeObjectURL(o), 0), el(`${h?.name || p} 组合包下载已开始`);
            },
            onEnterOperations: () => {
                r(null), s("operations-plan");
            },
            onDeletePackage: e => {
                e && (N(a => {
                    let n = {
                        ...a.release?.packageNames || {}
                    }, s = {
                        ...a.release?.channelPaymentConfigs || {}
                    }, l = {
                        ...a.capabilities?.byChannel || {}
                    };
                    return delete n[e], delete s[e], delete l[e], {
                        ...a,
                        release: {
                            ...a.release,
                            channels: (a.release?.channels || []).filter(a => a !== e),
                            packageNames: n,
                            channelPaymentConfigs: s
                        },
                        agreement: a.agreement,
                        capabilities: {
                            ...a.capabilities,
                            byChannel: l
                        }
                    };
                }), S(a => {
                    let n = {
                        ...a[m] || {}
                    };
                    return delete n[e], {
                        ...a,
                        [m]: n
                    };
                }), r(a => a === `${m}::${e}` ? null : a), ei([ "release", "login", "agreement", "capabilities" ]), 
                el("渠道包已删除"));
            },
            onOpenSdkDownload: () => {
                setSdkReturnContext(null), v(-1), s("channel-packages");
            }
        }) : "channel-packages" === e ? (0, a.jsx)(ChannelPackageBuilder, {
            gameName: m,
            games: d,
            onGameChange: er,
            gameProfile: u[m],
            packages: en,
            config: k,
            onConfigChange: (e, a) => N(n => ({
                ...n,
                [e]: {
                    ...n[e],
                    ...a
                }
            })),
            initialSession: sdkDownloadSessions[m] || null,
            onSave: e => {
                if ((channelBundles[m] || []).some(a => a.storeId === e.storeId && a.id !== e.id)) return el("该发行渠道已有 SDK 组合包，请返回列表修改", "error"), !1;
                return setChannelBundles(a => {
                    let packageConfigSnapshot = H(k), selectedDataPlatformIds = e.dataPlatformIds || [], includedCapabilitySet = new Set(e.includedCapabilities || []), storePlatform = e$(e.storeId)?.platform || "";
                    packageConfigSnapshot.release = {
                        ...packageConfigSnapshot.release,
                        channels: [ e.storeId ],
                        channelPaymentConfigs: includedCapabilitySet.has("payment") ? {
                            [e.storeId]: packageConfigSnapshot.release?.channelPaymentConfigs?.[e.storeId] || J(e.storeId)
                        } : {},
                        packageNames: {
                            [e.storeId]: packageConfigSnapshot.release?.packageNames?.[e.storeId] || e.packageName || ""
                        }
                    }, packageConfigSnapshot.login = includedCapabilitySet.has("login") ? loginConfigSnapshotForPlatform(packageConfigSnapshot.login || {}, storePlatform) : {
                        ...packageConfigSnapshot.login,
                        selected: [ "guest" ],
                        values: {}
                    }, packageConfigSnapshot.agreement = includedCapabilitySet.has("agreement") ? agreementConfigSnapshot(packageConfigSnapshot.agreement || {}) : {
                        ...packageConfigSnapshot.agreement,
                        groups: []
                    }, packageConfigSnapshot.support = includedCapabilitySet.has("support") ? supportConfigSnapshot(packageConfigSnapshot.support || {}) : supportConfigSnapshot({});
                    packageConfigSnapshot.data = {
                        ...packageConfigSnapshot.data,
                        selected: selectedDataPlatformIds,
                        values: Object.fromEntries(selectedDataPlatformIds.map(e => [ e, packageConfigSnapshot.data?.values?.[e] || {} ])),
                        fileMeta: Object.fromEntries(selectedDataPlatformIds.filter(e => packageConfigSnapshot.data?.fileMeta?.[e]).map(e => [ e, packageConfigSnapshot.data.fileMeta[e] ]))
                    }, packageConfigSnapshot.advertising = advertisingConfigSnapshot(k.advertising || {}, e.advertisingProviderId || "none");
                    let storedVersion = {
                        ...e,
                        configSnapshot: packageConfigSnapshot
                    }, n = a[m] || [], s = n.findIndex(a => a.id === storedVersion.id), l = s >= 0 ? n.map((a, n) => n === s ? storedVersion : a) : [ ...n, storedVersion ];
                    return {
                        ...a,
                        [m]: l
                    };
                }), setSdkDownloadSessions(a => ({
                    ...a,
                    [m]: null
                })), setSdkReturnContext(null), s("operations-plan"), !0;
            },
            onSaveDraft: e => {
                setSdkDownloadSessions(a => ({
                    ...a,
                    [m]: {
                        ...e,
                        status: "saved-draft"
                    }
                })), setSdkReturnContext(null), s("operations-plan"), el("SDK 生成草稿已保存");
            },
            onDiscardDraft: () => {
                setSdkDownloadSessions(a => ({
                    ...a,
                    [m]: null
                })), setSdkReturnContext(null), s("operations-plan");
            },
            onDownload: e => downloadChannelPackageArchive(e, e.configSnapshot || k, m, u[m], el),
            onBackToConfig: e => {
                setSdkDownloadSessions(a => ({
                    ...a,
                    [m]: e?.session || null
                })), setSdkReturnContext({
                    gameName: m,
                    channelId: e?.channelId || "",
                    missingCapabilityIds: e?.missingCapabilityIds || []
                }), v(-1), s("config");
            },
            onEnterOperations: e => {
                r(e?.id || null), s("operations-plan");
            },
            onDelete: e => {
                let a = en.find(a => a.id === e);
                setChannelBundles(a => ({
                    ...a,
                    [m]: (a[m] || []).filter(a => a.id !== e)
                })), a && S(e => {
                    let n = {
                        ...e[m] || {}
                    };
                    return delete n[a.storeId], {
                        ...e,
                        [m]: n
                    };
                }), r(a => a === e ? null : a), el("渠道包已删除");
            },
            toast: el
        }) : "operations-plan" === e ? (0, a.jsx)(ay, {
            gameName: m,
            games: d,
            onGameChange: er,
            gameProfile: u[m],
            packages: es,
            config: k,
            configuredLoginMethodIds: eD(k.login?.selected),
            configuredAgreementGroups: k.agreement?.groups || [],
            configuredCompliance: k.compliance || {},
            configuredDataPlatformIds: getCompletedDataProviderIds(k.data || {}),
            configuredAdvertising: k.advertising || eh(),
            configuredSupport: k.support || {},
            initialEditingPackageId: t,
            onInitialEditingHandled: () => r(null),
            onStartGenerate: () => {
                setSdkReturnContext(null), s("channel-packages");
            },
            onDownload: e => downloadChannelPackageArchive(e, e.configSnapshot || k, m, u[m], el),
            onSave: (e, a) => {
                let n = es.find(a => a.id === e);
                n && (S(e => {
                    let s = e[m] || {}, l = {
                        ...s[n.id] || s[n.storeId] || {}
                    };
                    Object.prototype.hasOwnProperty.call(a, "countries") && (l.countries = a.countries), 
                    Object.prototype.hasOwnProperty.call(a, "channelCountries") && (l.channelCountries = a.channelCountries);
                    let i = a.countryCapabilityEnabled ?? a.countryModules;
                    void 0 !== i && (l.countryCapabilityEnabled = i), Object.prototype.hasOwnProperty.call(a, "capabilityStateVersion") && (l.capabilityStateVersion = a.capabilityStateVersion), 
                    Object.prototype.hasOwnProperty.call(a, "countryLoginMethods") && (l.countryLoginMethods = a.countryLoginMethods), 
                    Object.prototype.hasOwnProperty.call(a, "countryAgreements") && (l.countryAgreements = a.countryAgreements);
                    let t = a.switches ?? a.sdkSwitches;
                    return void 0 !== t && (l.switches = t), {
                        ...e,
                        [m]: {
                            ...s,
                            [n.id]: l
                        }
                    };
                }), el("运营配置已保存"));
            },
            onGoLoginConfig: () => {
                s("config"), i("flow"), v(1);
            },
            onGoAgreementConfig: () => {
                s("config"), i("flow"), v(2);
            },
            toast: el
        }) : (0, a.jsx)(ak, {
            gameName: m,
            records: _
        }), (0, a.jsxs)(e5, {
            activeView: e,
            onView: e => {
                "config" === e && (i("home"), v(-1)), s(e);
            },
            completeCount: ee,
            children: [ ed, V ? (0, a.jsxs)("div", {
                className: `mgp-toast ${V.tone}`,
                role: "status",
                children: [ "error" === V.tone ? (0, a.jsx)(h.CircleHelp, {
                    size: 17
                }) : (0, a.jsx)(c.CheckCircle2, {
                    size: 17
                }), V.message ]
            }) : null ]
        });
    } ], 22035);
} ]);
