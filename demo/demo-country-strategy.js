(() => {
  "use strict";

  if (window.__MGP_STRATEGY_GROUPS_V2__) return;
  window.__MGP_STRATEGY_GROUPS_V2__ = true;

  const STORAGE_PREFIX = "meetgames:operations-strategy-groups:v2:";
  const MODULES = [
    ["login", "登录SDK", "为当前策略选择登录方式并调整展示顺序。"],
    ["agreement", "协议SDK", "为当前策略选择需要生效的协议分组。"],
    ["payment", "支付SDK", "沿用当前发行渠道在配置中心维护的支付参数。"],
    ["compliance", "合规SDK", "按策略维护年龄门槛、KWS 验证与游客保护。"],
    ["support", "客服工具SDK", "按策略启用在线客服、表单反馈与 FAQ。"],
    ["data", "归因数据SDK", "控制 Firebase 与归因平台是否在当前策略中运行。"],
    ["advertising", "广告变现SDK", "控制组合包中的广告变现能力是否在当前策略中运行。"],
  ];
  const MODULE_KEY_BY_TITLE = new Map(MODULES.map(([key, title]) => [title, key]));
  const LOGIN_METHODS = [
    ["guest", "Guest", "访客登录"],
    ["apple", "Apple", "Apple 登录"],
    ["email", "Email", "邮箱登录"],
    ["google", "Google", "Google 登录"],
    ["facebook", "Facebook", "Facebook 登录"],
    ["kakao", "Kakao", "Kakao 登录"],
    ["x", "X", "X 登录"],
    ["line", "LINE", "LINE 登录"],
    ["tiktok", "TikTok", "TikTok 登录"],
    ["snapchat", "Snapchat", "Snapchat 登录"],
    ["naver", "NAVER", "NAVER 登录"],
    ["discord", "Discord", "Discord 登录"],
  ];
  const LOGIN_ID_BY_NAME = new Map(
    LOGIN_METHODS.flatMap(([id, name]) => [[name.toLowerCase(), id], [id, id]]),
  );
  const LOGIN_BY_ID = new Map(LOGIN_METHODS.map((method) => [method[0], method]));
  const LOGIN_LOGO_IMAGES = {
    apple: "./assets/brands/apple.svg",
    kakao: "./assets/brands/kakao.svg",
  };
  const LOGIN_LOGO_GLYPHS = {
    guest: "♙",
    email: "@",
    google: "G",
    facebook: "f",
    x: "𝕏",
    line: "N",
    tiktok: "♪",
    snapchat: "👻",
    naver: "N",
    discord: "⌁",
  };
  const COUNTRIES = [
    ["美洲", "北美", "US", "美国", "United States"],
    ["美洲", "北美", "CA", "加拿大", "Canada"],
    ["美洲", "北美", "MX", "墨西哥", "Mexico"],
    ["美洲", "南美", "BR", "巴西", "Brazil"],
    ["美洲", "南美", "AR", "阿根廷", "Argentina"],
    ["美洲", "南美", "CL", "智利", "Chile"],
    ["欧洲", "西欧", "GB", "英国", "United Kingdom"],
    ["欧洲", "西欧", "DE", "德国", "Germany"],
    ["欧洲", "西欧", "FR", "法国", "France"],
    ["欧洲", "南欧", "IT", "意大利", "Italy"],
    ["欧洲", "南欧", "ES", "西班牙", "Spain"],
    ["亚洲", "东亚", "JP", "日本", "Japan"],
    ["亚洲", "东亚", "KR", "韩国", "South Korea"],
    ["亚洲", "港澳台", "HK", "中国香港", "Hong Kong"],
    ["亚洲", "港澳台", "MO", "中国澳门", "Macao"],
    ["亚洲", "港澳台", "TW", "中国台湾", "Taiwan"],
    ["亚洲", "东南亚", "SG", "新加坡", "Singapore"],
    ["亚洲", "东南亚", "MY", "马来西亚", "Malaysia"],
    ["亚洲", "东南亚", "TH", "泰国", "Thailand"],
    ["亚洲", "东南亚", "ID", "印度尼西亚", "Indonesia"],
    ["亚洲", "东南亚", "VN", "越南", "Vietnam"],
    ["亚洲", "东南亚", "PH", "菲律宾", "Philippines"],
    ["亚洲", "中东", "AE", "阿联酋", "United Arab Emirates"],
    ["亚洲", "中东", "SA", "沙特阿拉伯", "Saudi Arabia"],
    ["亚洲", "中东", "TR", "土耳其", "Türkiye"],
    ["大洋洲", "澳新", "AU", "澳大利亚", "Australia"],
    ["大洋洲", "澳新", "NZ", "新西兰", "New Zealand"],
  ].map(([continent, region, code, name, english]) => ({
    continent,
    region,
    code,
    name,
    english,
  }));
  const COUNTRY_BY_CODE = new Map(COUNTRIES.map((country) => [country.code, country]));
  const STRATEGY_REGION_FILTERS = [
    ["all", "全部"],
    ["asia", "亚洲"],
    ["europe", "欧洲"],
    ["north-america", "北美洲"],
    ["south-america", "南美洲"],
    ["oceania", "大洋洲"],
    ["africa", "非洲"],
  ];
  const DEFAULT_RUNTIME = {
    agreementReminder: true,
    welcomeMessage: true,
    guestLogoutReminder: true,
    guestPayment: false,
    crashReport: true,
    personalizedAds: false,
    silentLoginMethod: "none",
  };
  const RUNTIME_OWNER = {
    agreementReminder: "agreement",
    welcomeMessage: "agreement",
    guestLogoutReminder: "login",
    guestPayment: "login",
  };
  const instances = new WeakMap();
  const configuredSourceCache = new WeakMap();
  let scheduled = false;
  let activeModal = null;

  const escapeHtml = (value) =>
    String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const clone = (value) => JSON.parse(JSON.stringify(value));

  function unique(values) {
    return Array.from(new Set(values.filter(Boolean)));
  }

  function countryName(code) {
    return COUNTRY_BY_CODE.get(code)?.name || code;
  }

  function strategyRegionId(country) {
    if (country.continent === "亚洲") return "asia";
    if (country.continent === "欧洲") return "europe";
    if (country.continent === "大洋洲") return "oceania";
    if (country.continent === "非洲") return "africa";
    if (country.region === "北美") return "north-america";
    if (country.region === "南美") return "south-america";
    return "other";
  }

  function channelCountryCodes(drawer) {
    const configured = String(drawer.dataset.channelCountryCodes || "")
      .split(",")
      .map((code) => code.trim())
      .filter((code) => COUNTRY_BY_CODE.has(code));
    return unique(configured.length ? configured : COUNTRIES.map((country) => country.code));
  }

  function normalizeLoginIds(ids, availableIds) {
    const allowed = new Set(availableIds);
    const normalized = unique(ids).filter((id) => allowed.has(id));
    const withoutGuest = normalized.filter((id) => id !== "guest");
    return allowed.has("guest") ? ["guest", ...withoutGuest] : withoutGuest;
  }

  function selectedCountryCodes(drawer) {
    return Array.from(
      drawer.querySelectorAll(".mgp-region-selected-column > div > div"),
    )
      .map((entry) => {
        const detail = entry.querySelector("small")?.textContent || "";
        return detail.match(/·\s*([A-Z]{2})\s*$/)?.[1] || "";
      })
      .filter((code) => COUNTRY_BY_CODE.has(code));
  }

  function extractConfiguredSource(drawer) {
    if (configuredSourceCache.has(drawer)) return configuredSourceCache.get(drawer);
    const source = {
      loginMethodIds: [],
      agreementGroups: [],
      compliance: {},
      supportModules: {},
      dataPlatformIds: [],
      advertisingProvider: "",
    };
    const fiberKey = Object.keys(drawer).find((key) => key.startsWith("__reactFiber$"));
    let fiber = fiberKey ? drawer[fiberKey] : null;
    for (let depth = 0; fiber && depth < 48; depth += 1, fiber = fiber.return) {
      const props = fiber.memoizedProps;
      if (!props || typeof props !== "object") continue;
      if (Array.isArray(props.configuredLoginMethodIds) && props.configuredLoginMethodIds.length) {
        source.loginMethodIds = props.configuredLoginMethodIds.map((id) =>
          String(id).toLowerCase() === "twitter" ? "x" : String(id).toLowerCase(),
        );
      }
      if (Array.isArray(props.configuredAgreementGroups) && props.configuredAgreementGroups.length) {
        source.agreementGroups = props.configuredAgreementGroups.map((group, index) => ({
          id: String(group.id || `agreement-${index + 1}`),
          name: String(group.name || `协议分组${index + 1}`),
          languages: Array.isArray(group.languages)
            ? group.languages.join("、")
            : String(group.languages || ""),
        }));
      }
      if (props.configuredCompliance && typeof props.configuredCompliance === "object") {
        source.compliance = {
          ageThreshold: String(props.configuredCompliance.ageThreshold || "").trim(),
          gdprPrompt: props.configuredCompliance.gdpr !== false,
          ageParentalControl: props.configuredCompliance.ageGate !== false,
          kwsVerification: props.configuredCompliance.kwsEnabled !== false,
        };
      }
      if (props.configuredSupport && typeof props.configuredSupport === "object") {
        const support = props.configuredSupport;
        source.supportModules = {
          onlineService: support.onlineEnabled !== false && Boolean(String(support.onlineName || "").trim()),
          feedback: support.feedbackEnabled !== false && Boolean((support.feedbackTypes || []).some((item) => String(item?.name || item || "").trim())),
          faq: support.faqEnabled !== false && Boolean((support.faqGroups || []).length),
          smartService: support.smartEnabled !== false && Boolean(String(support.botName || "").trim() || (support.knowledgeItems || []).length),
        };
      }
      if (Array.isArray(props.configuredDataPlatformIds)) {
        source.dataPlatformIds = unique(props.configuredDataPlatformIds.map((id) => String(id).toLowerCase()));
      }
      if (props.configuredAdvertising && typeof props.configuredAdvertising === "object") {
        const advertising = props.configuredAdvertising;
        const provider = String(advertising.provider || "").toLowerCase();
        const configured = provider === "admob"
          ? Boolean(String(advertising.admobAppId || "").trim())
          : provider === "applovin-max"
            ? Boolean(String(advertising.maxSdkKey || "").trim())
            : false;
        source.advertisingProvider = configured ? provider : "";
      }
      if (props.item?.id) break;
    }
    if (drawer.dataset.configuredLoginIds !== undefined) {
      source.loginMethodIds = unique(
        String(drawer.dataset.configuredLoginIds || "").split(",").map((id) => id.trim().toLowerCase()),
      );
    }
    if (drawer.dataset.configuredAgreementGroups) {
      try {
        const groups = JSON.parse(drawer.dataset.configuredAgreementGroups);
        if (Array.isArray(groups)) {
          source.agreementGroups = groups.map((group, index) => ({
            id: String(group.id || `agreement-${index + 1}`),
            name: String(group.name || `协议分组${index + 1}`),
            languages: Array.isArray(group.languages) ? group.languages.join("、") : String(group.languages || ""),
          }));
        }
      } catch (_error) {}
    }
    if (drawer.dataset.configuredCompliance) {
      try {
        const compliance = JSON.parse(drawer.dataset.configuredCompliance);
        source.compliance = {
          ageThreshold: String(compliance.ageThreshold || "").trim(),
          gdprPrompt: compliance.gdpr !== false,
          ageParentalControl: compliance.ageGate !== false,
          kwsVerification: compliance.kwsEnabled !== false,
        };
      } catch (_error) {}
    }
    if (drawer.dataset.configuredSupport) {
      try {
        const support = JSON.parse(drawer.dataset.configuredSupport);
        source.supportModules = {
          onlineService: support.onlineEnabled !== false && Boolean(String(support.onlineName || "").trim()),
          feedback: support.feedbackEnabled !== false && Boolean((support.feedbackTypes || []).some((item) => String(item?.name || item || "").trim())),
          faq: support.faqEnabled !== false && Boolean((support.faqGroups || []).length),
          smartService: support.smartEnabled !== false && Boolean(String(support.botName || "").trim() || (support.knowledgeItems || []).length),
        };
      } catch (_error) {}
    }
    if (drawer.dataset.configuredDataPlatformIds !== undefined) {
      source.dataPlatformIds = unique(
        String(drawer.dataset.configuredDataPlatformIds || "").split(",").map((id) => id.trim().toLowerCase()),
      );
    }
    if (drawer.dataset.configuredAdvertisingProvider !== undefined) {
      source.advertisingProvider = String(drawer.dataset.configuredAdvertisingProvider || "").trim().toLowerCase();
    }
    configuredSourceCache.set(drawer, source);
    return source;
  }

  function extractLoginOptions(drawer) {
    const renderedOptions = Array.from(drawer.querySelectorAll(".mgp-country-login-option"))
      .map((button) => {
        const rawName = button.querySelector("strong")?.textContent?.trim() || "";
        const id = LOGIN_ID_BY_NAME.get(rawName.toLowerCase()) || rawName.toLowerCase();
        const order = Number(button.querySelector("em")?.textContent || 999);
        return {
          id,
          name: rawName || id,
          selected: button.classList.contains("selected"),
          order,
        };
      })
      .filter((option) => option.id);
    const renderedById = new Map(renderedOptions.map((option) => [option.id, option]));
    const configuredIds = unique(extractConfiguredSource(drawer).loginMethodIds)
      .filter((id) => LOGIN_BY_ID.has(id));
    if (configuredIds.length) {
      return configuredIds.map((id, index) => {
        const method = LOGIN_BY_ID.get(id);
        const rendered = renderedById.get(id);
        return {
          id,
          name: method?.[1] || id,
          selected: rendered ? rendered.selected : true,
          order: rendered?.order ?? index + 1,
        };
      });
    }
    if (!renderedOptions.length) {
      return LOGIN_METHODS.slice(0, 5).map(([id, name], index) => ({
        id,
        name,
        selected: true,
        order: index + 1,
      }));
    }
    return renderedOptions;
  }

  function loginLogoMarkup(id) {
    const image = LOGIN_LOGO_IMAGES[id];
    if (image) {
      return `<img src="${image}" alt="" aria-hidden="true">`;
    }
    return `<span class="osg-login-logo-glyph osg-login-logo-${escapeHtml(id)}" aria-hidden="true">${escapeHtml(LOGIN_LOGO_GLYPHS[id] || id.slice(0, 1).toUpperCase())}</span>`;
  }

  function extractAgreementGroups(drawer) {
    const renderedGroups = Array.from(
      drawer.querySelectorAll(".mgp-country-agreement-grid > button"),
    ).map((button, index) => ({
      id: button.dataset.groupId || `agreement-${index + 1}`,
      name: button.querySelector("strong")?.textContent?.trim() || `协议分组${index + 1}`,
      languages: button.querySelector("small")?.textContent?.trim() || "",
      selected: button.classList.contains("selected"),
    }));
    const selectedNames = new Set(
      renderedGroups.filter((group) => group.selected).map((group) => group.name),
    );
    const configuredGroups = extractConfiguredSource(drawer).agreementGroups;
    if (configuredGroups.length) {
      return configuredGroups.map((group) => ({
        ...group,
        selected: selectedNames.size ? selectedNames.has(group.name) : true,
      }));
    }
    return renderedGroups.length
      ? renderedGroups
      : [{ id: "agreement-default", name: "默认协议分组", languages: "英语、简体中文", selected: true }];
  }

  function extractModuleFlags(drawer) {
    const flags = {};
    const packageCapabilities = String(drawer.dataset.packageCapabilities || "")
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    packageCapabilities.forEach((key) => {
      flags[key === "ops-data" ? "data" : key] = true;
    });
    drawer.querySelectorAll(".mgp-country-sdk-module-list > div").forEach((item) => {
      const title = item.querySelector(":scope > strong")?.textContent?.trim();
      const key = MODULE_KEY_BY_TITLE.get(title);
      if (!key) return;
      const control = item.querySelector('[role="switch"]');
      flags[key] = control?.getAttribute("aria-checked") !== "false";
    });
    return flags;
  }

  function createBaseConfig(drawer) {
    const loginOptions = extractLoginOptions(drawer);
    const configuredSource = extractConfiguredSource(drawer);
    const configuredCompliance = configuredSource.compliance;
    // The operations drawer only renders methods selected in 配置中心; the
    // selected class itself is the per-country strategy override.
    const availableLoginIds = unique(loginOptions.map((option) => option.id));
    const selectedLoginIds = loginOptions
      .filter((option) => option.selected)
      .sort((left, right) => left.order - right.order)
      .map((option) => option.id);
    const agreementGroups = extractAgreementGroups(drawer);
    const modules = extractModuleFlags(drawer);
    const availableSupportModules = Object.entries(configuredSource.supportModules || {})
      .filter(([, configured]) => configured)
      .map(([key]) => key);
    const availableDataPlatformIds = unique(configuredSource.dataPlatformIds || []);
    const advertisingProvider = configuredSource.advertisingProvider || "";
    if (!availableSupportModules.length) delete modules.support;
    if (!availableDataPlatformIds.length) delete modules.data;
    if (!advertisingProvider) delete modules.advertising;
    return {
      modules,
      availableLoginIds,
      loginMethodIds: normalizeLoginIds(selectedLoginIds, availableLoginIds),
      availableAgreementGroups: agreementGroups.map(({ id, name, languages }) => ({
        id,
        name,
        languages,
      })),
      agreementGroupIds: agreementGroups.filter((group) => group.selected).map((group) => group.id),
      compliance: {
        ageThreshold: configuredCompliance.ageThreshold || "13",
        gdprPrompt: configuredCompliance.gdprPrompt ?? true,
        ageParentalControl: configuredCompliance.ageParentalControl ?? true,
        kwsVerification: configuredCompliance.kwsVerification ?? true,
      },
      support: {
        availableModules: availableSupportModules,
        onlineService: availableSupportModules.includes("onlineService"),
        feedback: availableSupportModules.includes("feedback"),
        faq: availableSupportModules.includes("faq"),
        smartService: availableSupportModules.includes("smartService"),
        faqGroup: "default",
      },
      dataPlatforms: Object.fromEntries(availableDataPlatformIds.map((id) => [id, true])),
      advertisingPlatform: {
        id: advertisingProvider,
        enabled: Boolean(advertisingProvider),
      },
      runtime: { ...DEFAULT_RUNTIME },
    };
  }

  function packageIdentity(drawer) {
    const versionId = String(drawer.dataset.sdkVersionId || "").trim();
    if (versionId) return versionId;
    const label = drawer.querySelector(".mgp-operations-workspace-context strong")?.textContent?.trim();
    return label || drawer.getAttribute("aria-label") || "default-package";
  }

  function packageDisplayLabel(drawer) {
    return String(drawer.dataset.packageLabel || "").trim()
      || drawer.querySelector(".mgp-operations-workspace-context strong")?.textContent?.trim()
      || drawer.getAttribute("aria-label")
      || "当前 SDK 组合包";
  }

  function storageKey(packageId) {
    return `${STORAGE_PREFIX}${packageId}`;
  }

  function initialModel(drawer, packageId) {
    const baseConfig = createBaseConfig(drawer);
    const allowedCountryCodes = channelCountryCodes(drawer);
    return {
      version: 2,
      packageId,
      allowedCountryCodes,
      releaseCountryCodes: [...allowedCountryCodes],
      strategies: [
        {
          id: "default",
          name: "默认策略",
          countryCodes: [],
          config: baseConfig,
        },
      ],
      activeStrategyId: "default",
    };
  }

  function normalizeStoredModel(model, fallback) {
    if (!model || model.version !== 2 || !Array.isArray(model.strategies)) return fallback;
    if (!model.strategies.length || model.strategies.some((strategy) => !strategy?.config)) return fallback;
    const normalized = clone(model);
    normalized.packageId = fallback.packageId;
    const allowedCountryCodes = unique(fallback.allowedCountryCodes || fallback.releaseCountryCodes);
    const allowedCountrySet = new Set(allowedCountryCodes);
    normalized.allowedCountryCodes = allowedCountryCodes;
    normalized.releaseCountryCodes = [...allowedCountryCodes];
    normalized.strategies = normalized.strategies.map((strategy) => ({
      ...strategy,
      countryCodes: strategy.id === "default"
        ? []
        : unique(strategy.countryCodes || []).filter((code) => allowedCountrySet.has(code)),
      config: {
        ...clone(fallback.strategies[0].config),
        ...strategy.config,
        availableLoginIds: unique(
          strategy.config?.availableLoginIds || fallback.strategies[0].config.availableLoginIds,
        ),
        loginMethodIds: normalizeLoginIds(
          strategy.config?.loginMethodIds || fallback.strategies[0].config.loginMethodIds,
          strategy.config?.availableLoginIds || fallback.strategies[0].config.availableLoginIds,
        ),
        modules: Object.fromEntries(
          Object.keys(fallback.strategies[0].config.modules).map((key) => [
            key,
            strategy.config?.modules?.[key] ?? fallback.strategies[0].config.modules[key],
          ]),
        ),
        compliance: {
          ...fallback.strategies[0].config.compliance,
          ...(strategy.config?.compliance || {}),
        },
        support: {
          ...fallback.strategies[0].config.support,
          ...(strategy.config?.support || {}),
        },
        dataPlatforms: {
          ...fallback.strategies[0].config.dataPlatforms,
          ...(strategy.config?.dataPlatforms || {}),
        },
        advertisingPlatform: {
          ...fallback.strategies[0].config.advertisingPlatform,
          ...(strategy.config?.advertisingPlatform || {}),
        },
        runtime: {
          ...fallback.strategies[0].config.runtime,
          ...(strategy.config?.runtime || {}),
        },
      },
    }));
    normalized.strategies.forEach((strategy) => {
      if (!strategy.config.compliance.ageParentalControl) {
        strategy.config.compliance.kwsVerification = false;
      }
    });
    if (!normalized.strategies.some((strategy) => strategy.id === normalized.activeStrategyId)) {
      normalized.activeStrategyId = "default";
    }
    return normalized;
  }

  function syncConfigurationSources(model, fallback) {
    const fallbackConfig = fallback.strategies[0].config;
    const availableLoginIds = unique(fallbackConfig.availableLoginIds);
    const availableAgreementGroups = clone(fallbackConfig.availableAgreementGroups || []);
    const fallbackAgreementIds = unique(fallbackConfig.agreementGroupIds || []);
    const availableSupportModules = unique(fallbackConfig.support?.availableModules || []);
    const availableDataPlatformIds = Object.keys(fallbackConfig.dataPlatforms || {});
    const advertisingProvider = fallbackConfig.advertisingPlatform?.id || "";
    model.strategies.forEach((strategy) => {
      const config = strategy.config;
      const previousAvailableLoginIds = unique(config.availableLoginIds || availableLoginIds);
      const previousLoginIds = normalizeLoginIds(config.loginMethodIds, previousAvailableLoginIds);
      const retainedLoginIds = previousLoginIds.filter((id) => availableLoginIds.includes(id));
      const newLoginIds = availableLoginIds.filter((id) => !previousAvailableLoginIds.includes(id));
      config.availableLoginIds = [...availableLoginIds];
      config.loginMethodIds = normalizeLoginIds(
        [...retainedLoginIds, ...newLoginIds],
        availableLoginIds,
      );

      const previousAgreementGroups = config.availableAgreementGroups || availableAgreementGroups;
      const previousAgreementIds = unique(config.agreementGroupIds || []);
      const retainedAgreementIds = previousAgreementIds.filter((id) =>
        availableAgreementGroups.some((group) => group.id === id),
      );
      const newDefaultAgreementIds = strategy.id === "default"
        ? fallbackAgreementIds.filter((id) => !previousAgreementGroups.some((group) => group.id === id))
        : [];
      config.availableAgreementGroups = clone(availableAgreementGroups);
      config.agreementGroupIds = unique([...retainedAgreementIds, ...newDefaultAgreementIds]);
      config.compliance.ageThreshold = fallbackConfig.compliance.ageThreshold;
      if (!config.compliance.ageParentalControl) config.compliance.kwsVerification = false;
      config.support.availableModules = [...availableSupportModules];
      ["onlineService", "feedback", "faq", "smartService"].forEach((key) => {
        config.support[key] = availableSupportModules.includes(key) && config.support[key] !== false;
      });
      config.dataPlatforms = Object.fromEntries(
        availableDataPlatformIds.map((id) => [id, config.dataPlatforms?.[id] !== false]),
      );
      config.advertisingPlatform = {
        id: advertisingProvider,
        enabled: Boolean(advertisingProvider) && config.advertisingPlatform?.enabled !== false,
      };
      if (!availableSupportModules.length) delete config.modules.support;
      if (!availableDataPlatformIds.length) delete config.modules.data;
      if (!advertisingProvider) delete config.modules.advertising;
      ["login", "agreement", "compliance"].forEach((key) => {
        if (Object.hasOwn(fallbackConfig.modules, key)) config.modules[key] = true;
      });
    });
    return model;
  }

  function loadModel(drawer, packageId) {
    const fallback = initialModel(drawer, packageId);
    try {
      const stored = JSON.parse(localStorage.getItem(storageKey(packageId)) || "null");
      return syncConfigurationSources(normalizeStoredModel(stored, fallback), fallback);
    } catch (_error) {
      return fallback;
    }
  }

  function modelSignature(model) {
    return JSON.stringify({
      releaseCountryCodes: unique(model.releaseCountryCodes).sort(),
      strategies: model.strategies.map((strategy) => ({
        id: strategy.id,
        name: strategy.name,
        countryCodes: unique(strategy.countryCodes).sort(),
        config: strategy.config,
      })),
    });
  }

  function explicitCountryOwner(model, code) {
    return model.strategies.find(
      (strategy) => strategy.id !== "default" && strategy.countryCodes.includes(code),
    );
  }

  function defaultCountryCodes(model) {
    const assigned = new Set(
      model.strategies
        .filter((strategy) => strategy.id !== "default")
        .flatMap((strategy) => strategy.countryCodes),
    );
    return model.releaseCountryCodes.filter((code) => !assigned.has(code));
  }

  function activeStrategy(instance) {
    return (
      instance.model.strategies.find(
        (strategy) => strategy.id === instance.model.activeStrategyId,
      ) || instance.model.strategies[0]
    );
  }

  function strategyCountryCodes(instance, strategy) {
    return strategy.id === "default"
      ? defaultCountryCodes(instance.model)
      : strategy.countryCodes;
  }

  function conciseCountryList(codes) {
    if (!codes.length) return "暂无国家";
    const names = codes.slice(0, 2).map(countryName);
    return codes.length > 2 ? `${names.join("、")}等 ${codes.length} 个` : names.join("、");
  }

  function strategyTabs(instance) {
    return instance.model.strategies
      .map((strategy) => {
        const codes = strategyCountryCodes(instance, strategy);
        const active = strategy.id === instance.model.activeStrategyId;
        return `
          <div class="osg-strategy-tab-wrap ${active ? "is-active" : ""}">
            <button type="button" class="osg-strategy-tab" role="tab"
              aria-selected="${active}" data-action="select-strategy"
              data-strategy-id="${escapeHtml(strategy.id)}">
              <strong>${escapeHtml(strategy.name)}</strong>
              <small>${strategy.id === "default" ? "全球" : escapeHtml(conciseCountryList(codes))}</small>
            </button>
            <button type="button" class="osg-strategy-remove" data-action="remove-strategy"
              data-strategy-id="${escapeHtml(strategy.id)}"
              aria-label="删除${escapeHtml(strategy.name)}">×</button>
          </div>`;
      })
      .join("");
  }

  function switchButton(moduleKey, checked, label) {
    return `
      <button type="button" class="osg-switch ${checked ? "is-on" : ""}"
        role="switch" aria-checked="${checked}" data-action="toggle-module"
        data-module="${escapeHtml(moduleKey)}" aria-label="${escapeHtml(label)}">
        <span></span>
      </button>`;
  }

  function inlineSwitch(action, key, checked, label, disabled = false) {
    return `
      <button type="button" class="osg-switch ${checked ? "is-on" : ""} ${disabled ? "is-disabled" : ""}"
        role="switch" aria-checked="${checked}" data-action="${escapeHtml(action)}"
        data-key="${escapeHtml(key)}" aria-label="${escapeHtml(label)}" ${disabled ? 'disabled aria-disabled="true"' : ""}>
        <span></span>
      </button>`;
  }

  function moduleSection(key, title, description, enabled, body, extraClass = "", expanded = false) {
    const hasBody = Boolean(String(body || "").trim());
    const heading = hasBody
      ? `<button type="button" class="osg-sdk-section-toggle ${expanded ? "is-expanded" : ""}"
          data-action="toggle-section" data-section="${escapeHtml(key)}" aria-expanded="${expanded}">
          <span class="osg-sdk-section-heading-copy">
            <span class="osg-sdk-section-heading-title">${escapeHtml(title)}</span>
            <span class="osg-sdk-section-heading-description">${escapeHtml(description)}</span>
          </span>
          <span class="osg-section-chevron" aria-hidden="true">⌄</span>
        </button>`
      : `<div><h3>${escapeHtml(title)}</h3><p>${escapeHtml(description)}</p></div>`;
    return `
      <section class="osg-sdk-section ${enabled ? "is-enabled" : "is-disabled"} ${extraClass}"
        data-module-section="${escapeHtml(key)}">
        <header>
          ${heading}
        </header>
        ${hasBody && expanded ? `<div class="osg-sdk-section-body" aria-disabled="${!enabled}">${body}</div>` : ""}
      </section>`;
  }

  function loginSection(config) {
    const selectedIds = normalizeLoginIds(config.loginMethodIds, config.availableLoginIds);
    const selectedOrder = new Map(selectedIds.map((id, index) => [id, index]));
    const orderedIds = [
      ...selectedIds,
      ...config.availableLoginIds.filter((id) => !selectedOrder.has(id)),
    ];
    const cards = orderedIds
      .map((id) => {
        const method = LOGIN_BY_ID.get(id) || [id, id, "登录方式"];
        const selected = selectedOrder.has(id);
        const required = id === "guest";
        return `
          <button type="button" class="osg-login-method ${selected ? "is-selected" : ""}"
            data-action="toggle-login" data-login-id="${escapeHtml(id)}"
            draggable="${selected && !required}" aria-pressed="${selected}"
            ${required ? 'aria-disabled="true"' : ""}>
            <span class="osg-login-order" aria-label="排序 ${selected ? selectedOrder.get(id) + 1 : "未选择"}">${selected ? selectedOrder.get(id) + 1 : "—"}</span>
            <span class="osg-login-logo">${loginLogoMarkup(id)}</span>
            <span class="osg-login-copy"><strong>${escapeHtml(method[1])}</strong><small>${escapeHtml(method[2])}</small></span>
            <span class="osg-login-drag" aria-hidden="true">${required ? "🔒" : selected ? "⋮⋮" : ""}</span>
            <span class="osg-login-check" aria-hidden="true">${selected ? "✓" : ""}</span>
          </button>`;
      })
      .join("");
    return `<div class="osg-login-grid" aria-label="登录方式选择及排序">${cards}</div>${loginRuntimeSettings(config)}`;
  }

  function agreementSection(config) {
    const groups = config.availableAgreementGroups || [];
    const groupContent = groups.length
      ? `<div class="osg-agreement-grid">${groups
          .map((group) => {
            const checked = config.agreementGroupIds.includes(group.id);
            return `
              <button type="button" class="osg-agreement-option ${checked ? "is-selected" : ""}"
                data-action="toggle-agreement" data-agreement-id="${escapeHtml(group.id)}"
                aria-pressed="${checked}">
                <span class="osg-agreement-icon">▤</span>
                <span class="osg-agreement-copy"><strong>${escapeHtml(group.name)}</strong><small>${escapeHtml(group.languages || "尚未配置语种")}</small></span>
                <i class="osg-agreement-check" aria-hidden="true">${checked ? "✓" : ""}</i>
              </button>`;
          })
          .join("")}</div>`
      : '<div class="osg-empty">当前发行渠道暂无可用协议，请先前往配置中心维护。</div>';
    return `${groupContent}${agreementRuntimeSettings(config)}`;
  }

  function complianceSection(config) {
    const ageParentalControl = Boolean(config.compliance.ageParentalControl);
    const kwsVerification = ageParentalControl && Boolean(config.compliance.kwsVerification);
    return `
      <fieldset class="osg-field-grid osg-compliance-fields">
        <div class="osg-readonly-field"><span>年龄门槛</span><strong aria-readonly="true">${escapeHtml(config.compliance.ageThreshold)} 岁</strong></div>
        <div class="osg-compliance-switches">
          <div class="osg-inline-setting"><span><strong>GDPR 隐私协议弹窗</strong><small>控制隐私协议同意弹窗。</small></span>${inlineSwitch("toggle-compliance", "gdprPrompt", config.compliance.gdprPrompt, "GDPR 隐私协议弹窗")}</div>
          <div class="osg-inline-setting"><span><strong>年龄获取与家长控制</strong><small>开启后可控制 KWS 年龄验证。</small></span>${inlineSwitch("toggle-compliance", "ageParentalControl", ageParentalControl, "年龄获取与家长控制")}</div>
          <div class="osg-inline-setting"><span><strong>KWS 年龄验证</strong><small>${ageParentalControl ? "需要家长验证时接入 KWS。" : "请先开启年龄获取与家长控制。"}</small></span>${inlineSwitch("toggle-compliance", "kwsVerification", kwsVerification, "KWS 年龄验证", !ageParentalControl)}</div>
        </div>
      </fieldset>`;
  }

  function supportSection(config) {
    const items = [
      ["onlineService", "在线客服", "实时会话与客服名称"],
      ["feedback", "表单反馈", "玩家问题类型与反馈表单"],
      ["faq", "FAQ", "FAQ 语种与问题分组"],
      ["smartService", "智能客服配置", "智能客服问答与推荐"],
    ].filter(([key]) => (config.support.availableModules || []).includes(key));
    if (!items.length) return "";
    return `
      <div class="osg-support-options">${items
        .map(([key, title, detail]) => `
          <div><span><strong>${title}</strong><small>${detail}</small></span>
            ${inlineSwitch("toggle-support", key, config.support[key], title)}
          </div>`)
        .join("")}</div>
      <label class="osg-compact-field"><span>FAQ 分组</span>
        <select data-field="support.faqGroup" ${config.support.faq ? "" : "disabled"}>
          <option value="default" ${config.support.faqGroup === "default" ? "selected" : ""}>默认 FAQ 分组</option>
          <option value="payment" ${config.support.faqGroup === "payment" ? "selected" : ""}>支付问题 FAQ</option>
          <option value="account" ${config.support.faqGroup === "account" ? "selected" : ""}>账号问题 FAQ</option>
        </select>
      </label>`;
  }

  function dataSection(config) {
    const platformNames = {
      firebase: "Firebase",
      appsflyer: "AppsFlyer",
      adjust: "Adjust",
    };
    const platforms = Object.keys(config.dataPlatforms || {});
    if (!platforms.length) return "";
    return `<div class="osg-data-platform-options" aria-label="归因数据平台开关">${platforms
      .map((id) => `<div><span><strong>${escapeHtml(platformNames[id] || id)}</strong><small>控制该平台是否在当前策略中运行</small></span>${inlineSwitch("toggle-data-platform", id, config.dataPlatforms[id], `${platformNames[id] || id} 开关`)}</div>`)
      .join("")}</div>`;
  }

  function advertisingSection(config) {
    const platformNames = {
      admob: "Google AdMob",
      "applovin-max": "AppLovin MAX",
    };
    const platform = config.advertisingPlatform || {};
    if (!platform.id) return "";
    const name = platformNames[platform.id] || platform.id;
    return `<div class="osg-data-platform-options osg-advertising-platform-options" aria-label="广告变现平台开关">
      <div><span><strong>${escapeHtml(name)}</strong><small>已配置的广告变现平台</small></span>${inlineSwitch("toggle-advertising-platform", platform.id, platform.enabled, `${name} 开关`)}</div>
    </div>`;
  }

  function agreementRuntimeSettings(config) {
    const items = [
      ["agreementReminder", "协议提醒开关"],
      ["welcomeMessage", "欢迎语开关"],
    ];
    return `<div class="osg-runtime-subsection osg-agreement-runtime-settings">
      <div class="osg-runtime-grid">${items
        .map(([key, title]) => `<div><strong>${title}</strong>${inlineSwitch("toggle-runtime", key, config.runtime[key], title)}</div>`)
        .join("")}</div>
    </div>`;
  }

  function loginRuntimeSettings(config) {
    const items = [
      ["guestLogoutReminder", "游客退出登录提醒开关"],
      ["guestPayment", "游客支付开关"],
    ];
    return `<div class="osg-runtime-subsection osg-login-runtime-settings">
      <div class="osg-runtime-grid">${items
        .map(([key, title]) => `<div><strong>${title}</strong>${inlineSwitch("toggle-runtime", key, config.runtime[key], title)}</div>`)
        .join("")}</div>
      <label class="osg-silent-login"><span>静默登录方式</span>
        <select data-field="runtime.silentLoginMethod">
          <option value="none" ${config.runtime.silentLoginMethod === "none" ? "selected" : ""}>关</option>
          <option value="last" ${config.runtime.silentLoginMethod === "last" ? "selected" : ""}>上次登录方式</option>
          <option value="guest" ${config.runtime.silentLoginMethod === "guest" ? "selected" : ""}>游客登录</option>
        </select>
      </label>
    </div>`;
  }

  function render(instance) {
    const strategy = activeStrategy(instance);
    const config = strategy.config;
    const strategyCodes = strategyCountryCodes(instance, strategy);
    const packageLabel = instance.packageLabel;
    instance.root.innerHTML = `
      <div class="osg-context">
        <span><small>当前渠道包</small><strong>${escapeHtml(packageLabel)}</strong></span>
        <span><small>发行范围</small><strong>${instance.model.releaseCountryCodes.length} 个国家/地区</strong></span>
        <em class="${instance.dirty ? "is-dirty" : "is-synced"}" role="status">${instance.dirty ? "有未保存修改" : "配置已同步"}</em>
      </div>
      <section class="osg-strategy-panel">
        <header>
          <div><h3>发行策略</h3><p>一次选择一个或多个国家创建一个策略组；未单独分组的国家使用默认策略。</p></div>
          <button type="button" class="osg-add-strategy" data-action="add-strategy"><span>+</span>添加</button>
        </header>
        <nav class="osg-strategy-tabs" role="tablist" aria-label="策略组">${strategyTabs(instance)}</nav>
        <div class="osg-current-strategy">
          <span>当前编辑：<strong>${escapeHtml(strategy.name)}</strong></span>
          <small>${strategy.id === "default" ? "全球" : escapeHtml(conciseCountryList(strategyCodes))}</small>
        </div>
      </section>
      <div class="osg-sdk-stack">
        ${Object.hasOwn(config.modules, "login") ? moduleSection("login", "登录SDK", MODULES[0][2], true, loginSection(config), "", instance.expandedModules.has("login")) : ""}
        ${Object.hasOwn(config.modules, "agreement") ? moduleSection("agreement", "协议SDK", MODULES[1][2], true, agreementSection(config), "", instance.expandedModules.has("agreement")) : ""}
        ${Object.hasOwn(config.modules, "compliance") ? moduleSection("compliance", "合规SDK", MODULES[3][2], true, complianceSection(config), "", instance.expandedModules.has("compliance")) : ""}
      </div>`;
    instance.root
      .querySelectorAll(
        ".osg-sdk-section.is-disabled .osg-sdk-section-body button, .osg-sdk-section.is-disabled .osg-sdk-section-body select, .osg-sdk-section.is-disabled .osg-sdk-section-body input",
      )
      .forEach((control) => {
        control.disabled = true;
        control.setAttribute("aria-disabled", "true");
      });
    instance.drawer.__mgpStrategyModel = clone(instance.model);
    updateFooterState(instance);
  }

  function setDirty(instance) {
    instance.dirty = modelSignature(instance.model) !== instance.savedSignature;
    render(instance);
  }

  function updateFooterState(instance) {
    const footerState = instance.drawer.querySelector(".mgp-operations-save-state");
    if (!footerState) return;
    footerState.classList.toggle("is-dirty", instance.dirty);
    footerState.classList.toggle("is-synced", !instance.dirty);
    footerState.textContent = instance.dirty ? "有未保存修改" : "所有修改已保存";
  }

  function closeModal() {
    activeModal?.remove();
    activeModal = null;
  }

  function openStrategyModal(instance) {
    closeModal();
    const pending = new Set();
    const usedNumbers = instance.model.strategies
      .map((strategy) => Number(strategy.name.match(/^策略(\d+)$/)?.[1]))
      .filter(Number.isFinite);
    const nextNumber = usedNumbers.length ? Math.max(...usedNumbers) + 1 : 1;
    let strategyName = `策略${nextNumber}`;
    let activeFilter = "all";
    let searchQuery = "";
    const layer = document.createElement("div");
    layer.className = "osg-modal-layer";
    const assignedOwners = new Map();
    instance.model.strategies
      .filter((strategy) => strategy.id !== "default")
      .forEach((strategy) =>
        strategy.countryCodes.forEach((code) => assignedOwners.set(code, strategy)),
      );
    const allowedCountrySet = new Set(
      instance.model.allowedCountryCodes || channelCountryCodes(instance.drawer),
    );
    const allowedCountries = COUNTRIES.filter((country) => allowedCountrySet.has(country.code));
    const regionLabelById = new Map(STRATEGY_REGION_FILTERS);
    const regionCount = (filterId) => allowedCountries.filter((country) => {
      if (filterId === "all") return true;
      return strategyRegionId(country) === filterId;
    }).length;
    layer.innerHTML = `
      <section class="osg-modal osg-strategy-creator" role="dialog" aria-modal="true" aria-labelledby="osg-modal-title" aria-describedby="osg-modal-description">
        <header>
          <div><h3 id="osg-modal-title">添加策略组</h3><p id="osg-modal-description">为当前发行渠道创建国家/地区策略；未分组国家自动使用默认策略。</p></div>
          <button type="button" data-action="close-modal" aria-label="关闭">×</button>
        </header>
        <div class="osg-strategy-creator-fields">
          <label class="osg-strategy-name-field" for="osg-strategy-name"><span>策略名称</span><input id="osg-strategy-name" type="text" value="${escapeHtml(strategyName)}" maxlength="30" autocomplete="off" data-field="strategy-name"></label>
          <div class="osg-country-search-field"><label for="osg-country-search">搜索国家/地区</label><div><span aria-hidden="true">⌕</span><input id="osg-country-search" type="search" placeholder="输入中文、英文或两位代码" autocomplete="off" data-field="country-search"><button type="button" data-action="clear-search" aria-label="清除搜索" hidden>×</button></div></div>
        </div>
        <nav class="osg-country-filter-tabs" role="tablist" aria-label="国家区域筛选">${STRATEGY_REGION_FILTERS
          .map(([id, label]) => `<button type="button" role="tab" class="${id === activeFilter ? "is-active" : ""}" aria-selected="${id === activeFilter}" data-action="select-country-filter" data-filter-id="${id}"><span>${label}</span><em data-filter-count="${id}">${regionCount(id)}</em></button>`)
          .join("")}</nav>
        <div class="osg-modal-body">
          <section class="osg-country-picker" aria-label="可选国家/地区">
            <header><div><strong data-filter-title>全部</strong><span data-filter-result-count></span></div><div><button type="button" data-action="select-filtered">全选当前筛选</button><button type="button" data-action="clear-selection">清空</button></div></header>
            <div class="osg-country-list" role="group" aria-label="国家/地区列表"></div>
            <div class="osg-country-empty" hidden><strong>没有匹配的国家/地区</strong><span>请尝试其他搜索词或区域筛选。</span></div>
          </section>
          <aside class="osg-selected-panel" aria-label="已选国家/地区">
            <header><div><span>已选国家/地区</span><strong data-selected-count>0</strong></div></header>
            <div class="osg-selected-list"></div>
          </aside>
        </div>
        <footer><span data-modal-validation>至少选择 1 个国家/地区</span><button type="button" data-action="close-modal">取消</button><button type="button" class="primary" data-action="confirm-strategy" disabled>创建策略组</button></footer>
      </section>`;
    document.body.append(layer);
    activeModal = layer;
    const confirm = layer.querySelector('[data-action="confirm-strategy"]');
    const validation = layer.querySelector("[data-modal-validation]");
    const countryList = layer.querySelector(".osg-country-list");
    const countryEmpty = layer.querySelector(".osg-country-empty");
    const selectedList = layer.querySelector(".osg-selected-list");
    const selectedCount = layer.querySelector("[data-selected-count]");
    const filterTitle = layer.querySelector("[data-filter-title]");
    const filterResultCount = layer.querySelector("[data-filter-result-count]");
    const selectFilteredButton = layer.querySelector('[data-action="select-filtered"]');
    const searchInput = layer.querySelector('[data-field="country-search"]');
    const clearSearchButton = layer.querySelector('[data-action="clear-search"]');

    const filteredCountries = () => {
      const query = searchQuery.trim().toLocaleLowerCase();
      return allowedCountries.filter((country) => {
        const matchesRegion = activeFilter === "all"
          || strategyRegionId(country) === activeFilter;
        if (!matchesRegion) return false;
        if (!query) return true;
        return `${country.name} ${country.english} ${country.code}`
          .toLocaleLowerCase()
          .includes(query);
      });
    };

    const updateValidation = () => {
      const hasName = Boolean(strategyName.trim());
      confirm.disabled = !hasName || pending.size === 0;
      validation.textContent = !hasName
        ? "请输入策略名称"
        : pending.size
          ? `已选择 ${pending.size} 个国家/地区`
          : "至少选择 1 个国家/地区";
    };

    const renderPicker = () => {
      const visibleCountries = filteredCountries().sort(
        (left, right) => Number(assignedOwners.has(left.code)) - Number(assignedOwners.has(right.code)),
      );
      const selectableCountries = visibleCountries.filter(
        (country) => !assignedOwners.has(country.code),
      );
      layer.querySelectorAll('[data-action="select-country-filter"]').forEach((button) => {
        const selected = button.dataset.filterId === activeFilter;
        button.classList.toggle("is-active", selected);
        button.setAttribute("aria-selected", String(selected));
      });
      filterTitle.textContent = regionLabelById.get(activeFilter) || "全部";
      filterResultCount.textContent = `显示 ${visibleCountries.length} 个`;
      clearSearchButton.hidden = !searchQuery;
      selectFilteredButton.disabled = !selectableCountries.some(
        (country) => !pending.has(country.code),
      );
      countryList.innerHTML = visibleCountries.map((country) => {
        const owner = assignedOwners.get(country.code);
        const selected = pending.has(country.code);
        return `<label class="osg-country-option ${owner ? "is-assigned" : ""} ${selected ? "is-selected" : ""}">
          <input type="checkbox" data-country-code="${country.code}" ${selected ? "checked" : ""} ${owner ? "disabled" : ""}>
          <span><strong>${escapeHtml(country.name)}</strong></span>
          ${owner ? `<em title="已属于${escapeHtml(owner.name)}"><b>已分组</b>${escapeHtml(owner.name)}</em>` : ""}
        </label>`;
      }).join("");
      countryList.hidden = visibleCountries.length === 0;
      countryEmpty.hidden = visibleCountries.length > 0;

      const selectedCountries = allowedCountries.filter((country) => pending.has(country.code));
      selectedCount.textContent = String(selectedCountries.length);
      selectedList.innerHTML = selectedCountries.length
        ? selectedCountries.map((country) => `<div class="osg-selected-country"><span><strong>${escapeHtml(country.name)}</strong></span><button type="button" data-action="remove-selected-country" data-code="${country.code}" aria-label="移除${escapeHtml(country.name)}">×</button></div>`).join("")
        : `<div class="osg-selected-empty"><strong>尚未选择</strong><span>从左侧勾选要共用此策略的国家/地区。</span></div>`;
      layer.querySelectorAll('[data-action="clear-selection"]').forEach((button) => {
        button.disabled = pending.size === 0;
      });
      updateValidation();
    };

    layer.addEventListener("change", (event) => {
      const code = event.target.dataset.countryCode;
      if (!code) return;
      if (event.target.checked) pending.add(code);
      else pending.delete(code);
      renderPicker();
    });
    layer.addEventListener("input", (event) => {
      if (event.target.dataset.field === "strategy-name") {
        strategyName = event.target.value;
        updateValidation();
        return;
      }
      if (event.target.dataset.field !== "country-search") return;
      searchQuery = event.target.value;
      renderPicker();
    });
    layer.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const action = button.dataset.action;
      if (action === "close-modal") {
        closeModal();
        return;
      }
      if (action === "select-country-filter") {
        activeFilter = button.dataset.filterId;
        renderPicker();
        return;
      }
      if (action === "clear-search") {
        searchQuery = "";
        searchInput.value = "";
        renderPicker();
        searchInput.focus();
        return;
      }
      if (action === "select-filtered") {
        filteredCountries().forEach((country) => {
          if (!assignedOwners.has(country.code)) pending.add(country.code);
        });
        renderPicker();
        return;
      }
      if (action === "clear-selection") {
        pending.clear();
        renderPicker();
        return;
      }
      if (action === "remove-selected-country") {
        pending.delete(button.dataset.code);
        renderPicker();
        return;
      }
      if (action !== "confirm-strategy" || !pending.size || !strategyName.trim()) return;
      const templateStrategy = instance.model.strategies.find(
        (strategy) => strategy.id === "default",
      ) || activeStrategy(instance);
      const defaultConfig = clone(templateStrategy.config);
      const strategy = {
        id: `strategy-${Date.now()}-${nextNumber}`,
        name: strategyName.trim(),
        countryCodes: allowedCountries
          .filter((country) => pending.has(country.code))
          .map((country) => country.code),
        config: defaultConfig,
      };
      instance.model.strategies.push(strategy);
      instance.model.activeStrategyId = strategy.id;
      closeModal();
      setDirty(instance);
    });
    renderPicker();
    layer.querySelector('[data-field="strategy-name"]')?.focus();
    layer.querySelector('[data-field="strategy-name"]')?.select();
  }

  function toggleLogin(instance, id) {
    if (id === "guest") return;
    const config = activeStrategy(instance).config;
    const current = normalizeLoginIds(config.loginMethodIds, config.availableLoginIds);
    config.loginMethodIds = current.includes(id)
      ? current.filter((methodId) => methodId !== id)
      : [...current, id];
    config.loginMethodIds = normalizeLoginIds(config.loginMethodIds, config.availableLoginIds);
    setDirty(instance);
  }

  function reorderLogin(instance, sourceId, targetId) {
    if (!sourceId || !targetId || sourceId === "guest" || sourceId === targetId) return;
    const config = activeStrategy(instance).config;
    const current = normalizeLoginIds(config.loginMethodIds, config.availableLoginIds);
    const sourceIndex = current.indexOf(sourceId);
    const targetIndex = current.indexOf(targetId);
    if (sourceIndex < 1 || targetIndex < 1) return;
    const next = [...current];
    next.splice(sourceIndex, 1);
    next.splice(targetIndex, 0, sourceId);
    config.loginMethodIds = next;
    instance.draggedLoginId = "";
    instance.suppressLoginClickUntil = Date.now() + 250;
    setDirty(instance);
  }

  function handleRootClick(instance, event) {
    const button = event.target.closest("button[data-action]");
    if (!button || !instance.root.contains(button)) return;
    const action = button.dataset.action;
    if (action === "toggle-section") {
      const sectionKey = button.dataset.section;
      if (instance.expandedModules.has(sectionKey)) {
        instance.expandedModules.delete(sectionKey);
      } else {
        instance.expandedModules.add(sectionKey);
      }
      render(instance);
      return;
    }
    if (action === "add-strategy") {
      openStrategyModal(instance);
      return;
    }
    if (action === "select-strategy") {
      instance.model.activeStrategyId = button.dataset.strategyId;
      render(instance);
      return;
    }
    if (action === "remove-strategy") {
      const strategy = instance.model.strategies.find(
        (item) => item.id === button.dataset.strategyId,
      );
      if (!strategy) return;
      if (instance.model.strategies.length === 1) {
        window.alert("至少保留一个发行策略。");
        return;
      }
      const confirmation = strategy.id === "default"
        ? "确认删除“默认策略”吗？删除后将仅保留已创建的区域策略。"
        : `确认删除“${strategy.name}”吗？该组国家将回落到默认策略。`;
      if (!window.confirm(confirmation)) return;
      instance.model.strategies = instance.model.strategies.filter(
        (item) => item.id !== strategy.id,
      );
      if (instance.model.activeStrategyId === strategy.id) {
        instance.model.activeStrategyId = instance.model.strategies[0]?.id || "";
      }
      setDirty(instance);
      return;
    }
    const strategy = activeStrategy(instance);
    if (action === "toggle-module") {
      const moduleKey = button.dataset.module;
      strategy.config.modules[moduleKey] = !strategy.config.modules[moduleKey];
      setDirty(instance);
      return;
    }
    if (action === "toggle-login") {
      if (Date.now() < instance.suppressLoginClickUntil) return;
      toggleLogin(instance, button.dataset.loginId);
      return;
    }
    if (action === "toggle-agreement") {
      const id = button.dataset.agreementId;
      strategy.config.agreementGroupIds = strategy.config.agreementGroupIds.includes(id)
        ? strategy.config.agreementGroupIds.filter((groupId) => groupId !== id)
        : [...strategy.config.agreementGroupIds, id];
      setDirty(instance);
      return;
    }
    if (action === "toggle-compliance") {
      const key = button.dataset.key;
      if (key === "kwsVerification" && !strategy.config.compliance.ageParentalControl) return;
      strategy.config.compliance[key] = !strategy.config.compliance[key];
      if (key === "ageParentalControl" && !strategy.config.compliance.ageParentalControl) {
        strategy.config.compliance.kwsVerification = false;
      }
      setDirty(instance);
      return;
    }
    if (action === "toggle-support") {
      if (!strategy.config.modules.support) return;
      const key = button.dataset.key;
      strategy.config.support[key] = !strategy.config.support[key];
      setDirty(instance);
      return;
    }
    if (action === "toggle-data-platform") {
      if (!strategy.config.modules.data) return;
      const key = button.dataset.key;
      strategy.config.dataPlatforms[key] = !strategy.config.dataPlatforms[key];
      setDirty(instance);
      return;
    }
    if (action === "toggle-advertising-platform") {
      if (!strategy.config.modules.advertising) return;
      strategy.config.advertisingPlatform.enabled = !strategy.config.advertisingPlatform.enabled;
      setDirty(instance);
      return;
    }
    if (action === "toggle-runtime") {
      const key = button.dataset.key;
      const owner = RUNTIME_OWNER[key];
      if (!owner || !Object.hasOwn(strategy.config.modules, owner)) return;
      strategy.config.runtime[key] = !strategy.config.runtime[key];
      setDirty(instance);
      return;
    }
  }

  function handleRootChange(instance, event) {
    const field = event.target.dataset.field;
    if (!field) return;
    const [group, key] = field.split(".");
    const strategy = activeStrategy(instance);
    if (group === "compliance" && !strategy.config.modules.compliance) return;
    if (group === "support" && !strategy.config.modules.support) return;
    if (group === "runtime") {
      if (key !== "silentLoginMethod" || !Object.hasOwn(strategy.config.modules, "login")) return;
      if (!["none", "last", "guest"].includes(event.target.value)) return;
    }
    strategy.config[group][key] = event.target.value;
    setDirty(instance);
  }

  function wireRoot(instance) {
    instance.root.addEventListener("click", (event) => handleRootClick(instance, event));
    instance.root.addEventListener("change", (event) => handleRootChange(instance, event));
    instance.root.addEventListener("dragstart", (event) => {
      const item = event.target.closest(".osg-login-method[draggable='true']");
      if (!item) return;
      instance.draggedLoginId = item.dataset.loginId;
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setData("text/plain", instance.draggedLoginId);
    });
    instance.root.addEventListener("dragover", (event) => {
      const target = event.target.closest(".osg-login-method.is-selected");
      if (!target || target.dataset.loginId === "guest" || !instance.draggedLoginId) return;
      event.preventDefault();
      event.dataTransfer.dropEffect = "move";
    });
    instance.root.addEventListener("drop", (event) => {
      const target = event.target.closest(".osg-login-method.is-selected");
      if (!target) return;
      event.preventDefault();
      reorderLogin(
        instance,
        event.dataTransfer.getData("text/plain") || instance.draggedLoginId,
        target.dataset.loginId,
      );
    });
    instance.root.addEventListener("dragend", () => {
      instance.draggedLoginId = "";
    });
  }

  function drawerSourceSignature(drawer) {
    return [
      drawer.dataset.packageCapabilities,
      drawer.dataset.storeId,
      drawer.dataset.packageLabel,
      drawer.dataset.channelCountryCodes,
      drawer.dataset.configuredLoginIds,
      drawer.dataset.configuredAgreementGroups,
      drawer.dataset.configuredCompliance,
      drawer.dataset.configuredSupport,
      drawer.dataset.configuredDataPlatformIds,
      drawer.dataset.configuredAdvertisingProvider,
    ].map((value) => String(value || "")).join("|");
  }

  function installStrategyDrawer(drawer) {
    const body = drawer.querySelector(".mgp-operations-drawer-body");
    const oldHead = body?.querySelector(":scope > .mgp-operations-workspace-head");
    const oldSections = body?.querySelectorAll(":scope > .mgp-operations-section");
    if (!body || !oldHead || !oldSections?.length) return;
    const packageId = packageIdentity(drawer);
    const sourceSignature = drawerSourceSignature(drawer);
    const existing = instances.get(drawer);
    if (existing) {
      if (existing.sourceSignature !== sourceSignature) {
        configuredSourceCache.delete(drawer);
        const fallback = initialModel(drawer, packageId);
        existing.model = syncConfigurationSources(
          normalizeStoredModel(existing.model, fallback),
          fallback,
        );
        existing.packageLabel = packageDisplayLabel(drawer);
        existing.sourceSignature = sourceSignature;
        existing.dirty = modelSignature(existing.model) !== existing.savedSignature;
        render(existing);
      }
      return;
    }
    const root = document.createElement("div");
    root.className = "osg-workspace";
    root.dataset.packageId = packageId;
    oldHead.before(root);
    oldHead.classList.add("osg-original-hidden");
    oldSections.forEach((section) => section.classList.add("osg-original-hidden"));
    const model = loadModel(drawer, packageId);
    const instance = {
      drawer,
      body,
      root,
      model,
      packageLabel: packageDisplayLabel(drawer),
      savedSignature: modelSignature(model),
      dirty: false,
      draggedLoginId: "",
      suppressLoginClickUntil: 0,
      expandedModules: new Set(),
      sourceSignature,
    };
    instances.set(drawer, instance);
    wireRoot(instance);
    render(instance);
  }

  function moveOtherPaymentButton() {
    const panel = document.querySelector("#config-panel-release");
    const fields = panel?.querySelector(".mgp-channel-picker-fields");
    const button = panel?.querySelector(".mgp-other-payment-link");
    if (!fields || !button || button.closest(".mgp-other-payment-inline")) return;
    const wrapper = document.createElement("div");
    wrapper.className = "mgp-other-payment-inline";
    fields.append(wrapper);
    wrapper.append(button);
  }

  function scheduleSync() {
    if (scheduled) return;
    scheduled = true;
    requestAnimationFrame(() => {
      scheduled = false;
      document.querySelectorAll(".mgp-operations-drawer, .mgp-generation-drawer").forEach(installStrategyDrawer);
      moveOtherPaymentButton();
    });
  }

  document.addEventListener(
    "click",
    (event) => {
      const drawer = event.target.closest(".mgp-operations-drawer, .mgp-generation-drawer");
      if (!drawer) return;
      const instance = instances.get(drawer);
      if (!instance) return;
      const saveButton = event.target.closest(
        ".mgp-sdk-drawer-footer .mgp-button.primary",
      );
      if (saveButton) {
        if (drawer.classList.contains("mgp-generation-drawer")) return;
        localStorage.setItem(storageKey(instance.model.packageId), JSON.stringify(instance.model));
        instance.savedSignature = modelSignature(instance.model);
        instance.dirty = false;
        updateFooterState(instance);
        return;
      }
      const closeButton = event.target.closest(
        ".mgp-sdk-drawer-header > button, .mgp-sdk-drawer-footer .mgp-button.secondary",
      );
      if (drawer.classList.contains("mgp-generation-drawer")) return;
      if (!closeButton || !instance.dirty) return;
      if (!window.confirm("当前运营配置有未保存修改，确定放弃修改并关闭吗？")) {
        event.preventDefault();
        event.stopPropagation();
        event.stopImmediatePropagation();
      }
    },
    true,
  );

  window.__MGP_STRATEGY_GROUPS_API__ = {
    getModel(drawer) {
      const instance = drawer ? instances.get(drawer) : null;
      return instance ? clone(instance.model) : null;
    },
    isDirty(drawer) {
      const instance = drawer ? instances.get(drawer) : null;
      return Boolean(instance?.dirty);
    },
    commit(drawer) {
      const instance = drawer ? instances.get(drawer) : null;
      if (!instance) return false;
      localStorage.setItem(storageKey(instance.model.packageId), JSON.stringify(instance.model));
      instance.savedSignature = modelSignature(instance.model);
      instance.dirty = false;
      drawer.__mgpStrategyModel = clone(instance.model);
      updateFooterState(instance);
      return true;
    },
    discard(drawer) {
      const instance = drawer ? instances.get(drawer) : null;
      if (!instance) return false;
      localStorage.removeItem(storageKey(instance.model.packageId));
      instance.dirty = false;
      drawer.__mgpStrategyModel = null;
      updateFooterState(instance);
      return true;
    },
  };

  const observer = new MutationObserver(scheduleSync);
  observer.observe(document.documentElement, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: [
      "data-package-capabilities",
      "data-store-id",
      "data-package-label",
      "data-channel-country-codes",
      "data-configured-login-ids",
      "data-configured-agreement-groups",
      "data-configured-compliance",
      "data-configured-support",
      "data-configured-data-platform-ids",
      "data-configured-advertising-provider",
    ],
  });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleSync, { once: true });
  } else {
    scheduleSync();
  }
})();
