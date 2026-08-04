(() => {
  "use strict";

  if (window.__MEETGAMES_COUNTRY_STRATEGY_V18__) return;
  window.__MEETGAMES_COUNTRY_STRATEGY_V18__ = true;

  const countryGroups = [
    {
      name: "美洲",
      regions: [
        {
          name: "北美",
          countries: [
            ["US", "美国", "United States"],
            ["CA", "加拿大", "Canada"],
            ["MX", "墨西哥", "Mexico"],
          ],
        },
        {
          name: "南美",
          countries: [
            ["BR", "巴西", "Brazil"],
            ["AR", "阿根廷", "Argentina"],
            ["CL", "智利", "Chile"],
          ],
        },
      ],
    },
    {
      name: "欧洲",
      regions: [
        {
          name: "西欧",
          countries: [
            ["GB", "英国", "United Kingdom"],
            ["DE", "德国", "Germany"],
            ["FR", "法国", "France"],
          ],
        },
        {
          name: "南欧",
          countries: [
            ["IT", "意大利", "Italy"],
            ["ES", "西班牙", "Spain"],
          ],
        },
      ],
    },
    {
      name: "亚洲",
      regions: [
        {
          name: "东亚",
          countries: [
            ["JP", "日本", "Japan"],
            ["KR", "韩国", "South Korea"],
          ],
        },
        {
          name: "港澳台",
          countries: [
            ["HK", "中国香港", "Hong Kong"],
            ["MO", "中国澳门", "Macao"],
            ["TW", "中国台湾", "Taiwan"],
          ],
        },
        {
          name: "东南亚",
          countries: [
            ["SG", "新加坡", "Singapore"],
            ["MY", "马来西亚", "Malaysia"],
            ["TH", "泰国", "Thailand"],
            ["ID", "印度尼西亚", "Indonesia"],
            ["VN", "越南", "Vietnam"],
            ["PH", "菲律宾", "Philippines"],
          ],
        },
        {
          name: "中东",
          countries: [
            ["AE", "阿联酋", "United Arab Emirates"],
            ["SA", "沙特阿拉伯", "Saudi Arabia"],
            ["TR", "土耳其", "Türkiye"],
          ],
        },
      ],
    },
    {
      name: "大洋洲",
      regions: [
        {
          name: "澳新",
          countries: [
            ["AU", "澳大利亚", "Australia"],
            ["NZ", "新西兰", "New Zealand"],
          ],
        },
      ],
    },
  ];

  const countries = countryGroups.flatMap((continent) =>
    continent.regions.flatMap((region) =>
      region.countries.map(([code, name, english]) => ({
        code,
        name,
        english,
        continent: continent.name,
        region: region.name,
      })),
    ),
  );
  const countryByCode = new Map(countries.map((country) => [country.code, country]));
  const countryByName = new Map(countries.map((country) => [country.name, country]));
  const modalRegions = [
    ["north-america", "北美", ["US", "CA", "MX"]],
    ["east-asia", "东亚", ["JP", "KR"]],
    ["greater-china", "港澳台", ["HK", "MO", "TW"]],
    ["southeast-asia", "东南亚", ["SG", "MY", "TH", "ID", "VN", "PH"]],
    ["middle-east", "中东", ["AE", "SA", "TR"]],
    ["europe", "欧洲", ["GB", "DE", "FR", "IT", "ES"]],
    ["latin-america", "拉丁美洲", ["BR", "AR", "CL"]],
    ["oceania", "澳新", ["AU", "NZ"]],
  ].map(([id, name, codes]) => ({
    id,
    name,
    countries: codes.map((code) => countryByCode.get(code)).filter(Boolean),
  }));
  const state = {
    active: "default",
    scheduled: false,
    modal: null,
    allowOriginalBatchAction: false,
    suppressOriginalBatchToastUntil: 0,
  };

  const escapeHtml = (value) =>
    String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");

  const nextFrame = () =>
    new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));

  function selectedCountryCodes(section) {
    const entries = section.querySelectorAll(
      ".mgp-region-selected-column > div > div",
    );
    return Array.from(entries)
      .map((entry) => {
        const detail = entry.querySelector("small")?.textContent ?? "";
        return detail.match(/·\s*([A-Z]{2})\s*$/)?.[1] ?? "";
      })
      .filter((code) => countryByCode.has(code));
  }

  function selectedEntry(section, code) {
    return Array.from(
      section.querySelectorAll(".mgp-region-selected-column > div > div"),
    ).find((entry) => {
      const detail = entry.querySelector("small")?.textContent ?? "";
      return detail.match(/·\s*([A-Z]{2})\s*$/)?.[1] === code;
    });
  }

  function scheduleSync() {
    if (state.scheduled) return;
    state.scheduled = true;
    requestAnimationFrame(() => {
      state.scheduled = false;
      syncStrategyPanel();
      syncEditingContext();
      syncBatchApplyButton();
    });
  }

  const regionStateId = (regionId) => `region:${regionId}`;

  function completeStrategyRegions(selectedCodes) {
    const selected = new Set(selectedCodes);
    return modalRegions.filter(
      (region) =>
        region.countries.length > 1 &&
        region.countries.every((country) => selected.has(country.code)),
    );
  }

  function activeStrategyRegion() {
    if (!state.active.startsWith("region:")) return null;
    const regionId = state.active.slice("region:".length);
    return modalRegions.find((region) => region.id === regionId) ?? null;
  }

  function regionStrategyLabel(region) {
    return `${region.name}（${region.countries.length}个国家）`;
  }

  function renderTabs(section, root, selectedCodes) {
    const completeRegions = completeStrategyRegions(selectedCodes);
    const activeRegion = activeStrategyRegion();
    if (activeRegion && !completeRegions.some((region) => region.id === activeRegion.id)) {
      state.active = "default";
    } else if (state.active !== "default" && !activeRegion && !selectedCodes.includes(state.active)) {
      state.active = "default";
    }

    if (state.active !== "default" && !activeStrategyRegion()) {
      const groupedRegion = completeRegions.find((region) =>
        region.countries.some((country) => country.code === state.active),
      );
      if (groupedRegion) state.active = regionStateId(groupedRegion.id);
    }
    const signature = `${selectedCodes.join(",")}|${state.active}`;
    if (root.dataset.signature === signature) return;
    root.dataset.signature = signature;

    const countryTabs = selectedCodes
      .map((code) => countryByCode.get(code))
      .filter(Boolean)
      .map(
        (country) => `
          <div class="mgp-country-strategy-tab ${
            state.active === country.code ? "is-active" : ""
          }" role="presentation">
            <button class="mgp-country-strategy-tab-select" type="button" role="tab"
              aria-selected="${state.active === country.code}"
              data-action="select" data-code="${country.code}">
              ${escapeHtml(country.name)}
            </button>
            <button class="mgp-country-strategy-tab-remove" type="button"
              aria-label="删除${escapeHtml(country.name)}差异化策略"
              title="删除差异化策略" data-action="remove" data-code="${country.code}">×</button>
          </div>`,
      )
      .join("");

    root.innerHTML = `
      <div class="mgp-country-strategy-toolbar">
        <div class="mgp-country-strategy-tabs" role="tablist" aria-label="国家策略">
          <button class="mgp-country-strategy-default ${
            state.active === "default" ? "is-active" : ""
          }" type="button" role="tab" aria-selected="${
            state.active === "default"
          }" data-action="default">默认策略</button>
          ${countryTabs}
        </div>
        <button class="mgp-country-strategy-add" type="button" data-action="add"
          aria-haspopup="dialog"><span aria-hidden="true">＋</span>添加差异化国家</button>
      </div>`;

    completeRegions.forEach((region) => {
      const regionTabs = region.countries
        .map((country) =>
          root
            .querySelector(`.mgp-country-strategy-tab-select[data-code="${country.code}"]`)
            ?.closest(".mgp-country-strategy-tab"),
        )
        .filter(Boolean);
      const groupTab = regionTabs[0];
      if (!groupTab) return;

      const label = regionStrategyLabel(region);
      const activeId = regionStateId(region.id);
      const selectButton = groupTab.querySelector(".mgp-country-strategy-tab-select");
      selectButton.textContent = label;
      selectButton.dataset.action = "select-region";
      selectButton.dataset.regionId = region.id;
      delete selectButton.dataset.code;
      selectButton.setAttribute("aria-selected", String(state.active === activeId));
      groupTab.classList.toggle("is-active", state.active === activeId);

      const removeButton = groupTab.querySelector(".mgp-country-strategy-tab-remove");
      removeButton.dataset.action = "remove-region";
      removeButton.dataset.regionId = region.id;
      delete removeButton.dataset.code;
      removeButton.setAttribute("aria-label", `删除${label}差异化策略`);
      removeButton.title = "删除区域差异化策略";
      regionTabs.slice(1).forEach((tab) => tab.remove());
    });

    root.onclick = async (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      const action = button.dataset.action;
      const code = button.dataset.code;
      const regionId = button.dataset.regionId;

      if (action === "default") {
        state.active = "default";
        root.dataset.signature = "";
        renderTabs(section, root, selectedCountryCodes(section));
        return;
      }

      if (action === "select" && code) {
        state.active = code;
        const entry = selectedEntry(section, code);
        entry?.querySelector("button:not(.mgp-region-selected-remove)")?.click();
        root.dataset.signature = "";
        renderTabs(section, root, selectedCountryCodes(section));
        return;
      }

      if (action === "select-region" && regionId) {
        const region = modalRegions.find((candidate) => candidate.id === regionId);
        if (!region) return;
        state.active = regionStateId(region.id);
        const sourceCode = region.countries.find((country) => selectedCodes.includes(country.code))?.code;
        const entry = sourceCode ? selectedEntry(section, sourceCode) : null;
        entry?.querySelector("button:not(.mgp-region-selected-remove)")?.click();
        root.dataset.signature = "";
        renderTabs(section, root, selectedCountryCodes(section));
        return;
      }

      if (action === "remove" && code) {
        const entry = selectedEntry(section, code);
        entry?.querySelector(".mgp-region-selected-remove")?.click();
        if (state.active === code) state.active = "default";
        scheduleSync();
        return;
      }

      if (action === "remove-region" && regionId) {
        const region = modalRegions.find((candidate) => candidate.id === regionId);
        if (!region) return;
        const label = regionStrategyLabel(region);
        if (
          !window.confirm(
            `确认删除“${label}”差异化策略吗？\n删除后，该区域内的国家将恢复默认策略。`,
          )
        ) {
          return;
        }
        state.active = "default";
        for (const country of region.countries) {
          const entry = selectedEntry(section, country.code);
          entry?.querySelector(".mgp-region-selected-remove")?.click();
          await nextFrame();
        }
        scheduleSync();
        return;
      }

      if (action === "add") openCountryModal(section);
    };
  }

  function syncStrategyPanel() {
    const section = document.querySelector("#operations-workspace-range");
    if (!section) return;
    const tree = section.querySelector(".mgp-region-tree");
    if (!tree) return;

    section.dataset.strategyUpgraded = "true";
    const heading = section.querySelector(":scope > header h3");
    const description = section.querySelector(":scope > header p");
    const count = section.querySelector(":scope > header > strong");
    if (heading && heading.textContent !== "国家策略配置") {
      heading.textContent = "国家策略配置";
    }
    if (description) {
      description.textContent =
        "设置当前 SDK 包内服务在不同发行国家的展示、启用与顺序；未单独设置的国家使用默认策略。";
    }

    const selectedCodes = selectedCountryCodes(section);
    if (count) count.textContent = `已配置 ${selectedCodes.length} 个差异化国家`;

    let root = section.querySelector(":scope > .mgp-country-strategy-upgrade");
    if (!root) {
      root = document.createElement("div");
      root.className = "mgp-country-strategy-upgrade";
      tree.before(root);
    }
    renderTabs(section, root, selectedCodes);
  }

  async function waitFor(getter, attempts = 30) {
    for (let index = 0; index < attempts; index += 1) {
      const value = getter();
      if (value) return value;
      await nextFrame();
    }
    return null;
  }

  function exactButton(container, label) {
    return Array.from(container?.querySelectorAll("button") ?? []).find(
      (button) => button.textContent?.trim() === label,
    );
  }

  async function addCountryToOriginal(section, country) {
    let tree = section.querySelector(".mgp-region-tree");
    if (!tree) return false;
    exactButton(tree.children[0], country.continent)?.click();
    await nextFrame();

    tree = await waitFor(() => section.querySelector(".mgp-region-tree"));
    const regionButton = await waitFor(() => exactButton(tree?.children[1], country.region));
    regionButton?.click();
    await nextFrame();

    tree = await waitFor(() => section.querySelector(".mgp-region-tree"));
    const input = await waitFor(() =>
      tree?.querySelector(`input[aria-label="选择${country.name}"]`),
    );
    if (!input) return false;
    if (!input.checked) input.click();
    await nextFrame();
    return true;
  }

  async function removeCountryFromOriginal(section, code) {
    const entry = selectedEntry(section, code);
    const remove = entry?.querySelector(".mgp-region-selected-remove");
    if (!remove) return false;
    remove.click();
    const removed = await waitFor(() => !selectedCountryCodes(section).includes(code));
    return Boolean(removed);
  }

  function batchApplyButton() {
    return document.querySelector(
      ".mgp-operations-login-layout.single .mgp-operations-login-editor > .mgp-operations-batch-bar > button",
    );
  }

  function currentEditingCountryCode() {
    if (state.active === "default") return "";
    const region = activeStrategyRegion();
    return region?.countries[0]?.code ?? state.active;
  }

  function syncEditingContext() {
    const region = activeStrategyRegion();
    const activeLabel =
      state.active === "default"
        ? "默认策略"
        : region
          ? regionStrategyLabel(region)
          : countryByCode.get(state.active)?.name ?? "默认策略";
    const batchLabel = document.querySelector(
      ".mgp-operations-login-layout.single .mgp-operations-login-editor > .mgp-operations-batch-bar > span",
    );
    if (batchLabel && batchLabel.textContent?.trim() !== `当前编辑：${activeLabel}`) {
      batchLabel.textContent = `当前编辑：${activeLabel}`;
    }

    const contextItem = Array.from(
      document.querySelectorAll(".mgp-operations-workspace-context > span"),
    ).find((item) => item.querySelector("small")?.textContent?.trim() === "当前编辑国家/地区");
    const contextValue = contextItem?.querySelector("strong");
    if (contextValue && contextValue.textContent?.trim() !== activeLabel) {
      contextValue.textContent = activeLabel;
    }

    const regionalDescription = document.querySelector(
      "#operations-workspace-regional > header p",
    );
    const description =
      "点击上方国家或区域可切换编辑，默认策略适用于所有未单独设置的发行国家。";
    if (regionalDescription && regionalDescription.textContent?.trim() !== description) {
      regionalDescription.textContent = description;
    }
  }

  function syncBatchApplyButton() {
    const button = batchApplyButton();
    if (!button) return;
    if (state.active === "default") {
      if (!("originalDisabled" in button.dataset)) {
        button.dataset.originalDisabled = String(button.disabled);
      }
      button.disabled = true;
      button.title = "默认策略自动适用于所有未单独设置的发行国家";
      delete button.dataset.countrySyncProxy;
    } else {
      if ("originalDisabled" in button.dataset) {
        button.disabled = button.dataset.originalDisabled === "true";
        delete button.dataset.originalDisabled;
      }
      button.removeAttribute("title");
      button.dataset.countrySyncProxy = "true";
    }
    if (button.textContent?.trim() !== "应用到其他国家") {
      button.textContent = "应用到其他国家";
    }
    const originalBatchToasts = Array.from(
      document.querySelectorAll('.mgp-toast.success[role="status"]'),
    );
    if (Date.now() < state.suppressOriginalBatchToastUntil) {
      originalBatchToasts
        .filter((node) => node.textContent?.includes("已成功应用到"))
        .forEach((node) => {
          node.style.display = "none";
        });
    } else {
      originalBatchToasts.forEach((node) => node.style.removeProperty("display"));
    }
  }

  function showToast(message) {
    document.querySelector(".mgp-country-strategy-toast")?.remove();
    const toast = document.createElement("div");
    toast.className = "mgp-country-strategy-toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    document.body.append(toast);
    window.setTimeout(() => toast.remove(), 2200);
  }

  function closeCountryModal() {
    state.modal?.remove();
    state.modal = null;
  }

  function openCountryModal(section) {
    closeCountryModal();
    const selectedCodes = new Set(selectedCountryCodes(section));
    const pendingCodes = new Set();
    let activeRegionId =
      modalRegions.find((region) =>
        region.countries.some((country) => !selectedCodes.has(country.code)),
      )?.id ?? modalRegions[0].id;
    const layer = document.createElement("div");
    layer.className = "mgp-country-strategy-modal-layer";
    layer.innerHTML = `
      <section class="mgp-country-strategy-modal" role="dialog" aria-modal="true"
        aria-labelledby="country-strategy-modal-title">
        <header>
          <div>
            <h3 id="country-strategy-modal-title">添加差异化国家</h3>
            <p>先选择区域，再勾选需要单独配置策略的国家；已配置项不可重复添加。</p>
          </div>
          <button class="mgp-country-strategy-modal-close" type="button"
            data-action="close" aria-label="关闭">×</button>
        </header>
        <div class="mgp-country-strategy-region-body">
          <aside class="mgp-country-strategy-region-nav" aria-label="区域列表"></aside>
          <section class="mgp-country-strategy-region-detail">
            <header></header>
            <div class="mgp-country-strategy-region-grid"></div>
            <p>新增国家会先继承默认策略，进入国家页签后可调整为差异化配置。</p>
          </section>
        </div>
        <footer>
          <span></span>
          <button type="button" data-action="close">取消</button>
          <button type="button" data-action="confirm" disabled>添加</button>
        </footer>
      </section>`;
    document.body.append(layer);
    state.modal = layer;

    const confirm = layer.querySelector('button[data-action="confirm"]');
    const summary = layer.querySelector("footer span");
    const regionNav = layer.querySelector(".mgp-country-strategy-region-nav");
    const regionHeader = layer.querySelector(".mgp-country-strategy-region-detail > header");
    const regionGrid = layer.querySelector(".mgp-country-strategy-region-grid");

    const renderRegion = () => {
      const activeRegion = modalRegions.find((region) => region.id === activeRegionId);
      regionNav.innerHTML = modalRegions
        .map((region) => {
          const configuredCount = region.countries.filter((country) =>
            selectedCodes.has(country.code),
          ).length;
          const pendingCount = region.countries.filter((country) =>
            pendingCodes.has(country.code),
          ).length;
          return `
            <button type="button" class="${region.id === activeRegionId ? "is-active" : ""}"
              data-action="region" data-region="${region.id}">
              <strong>${region.name}</strong>
              <span>${configuredCount + pendingCount}/${region.countries.length}</span>
            </button>`;
        })
        .join("");

      const selectableCountries = activeRegion.countries.filter(
        (country) => !selectedCodes.has(country.code),
      );
      const pendingInRegion = selectableCountries.filter((country) =>
        pendingCodes.has(country.code),
      ).length;
      const allPending =
        selectableCountries.length > 0 && pendingInRegion === selectableCountries.length;

      regionHeader.innerHTML = `
        <div>
          <h4>${activeRegion.name}</h4>
          <span>已添加的国家不可重复选择</span>
        </div>
        <label class="mgp-country-strategy-region-select-all">
          <input type="checkbox" data-action="select-region" ${
            allPending ? "checked" : ""
          } ${selectableCountries.length ? "" : "disabled"}>
          <strong>选择整个${activeRegion.name}</strong>
        </label>
        <em>待添加 ${pendingInRegion} 个</em>`;

      regionGrid.innerHTML = activeRegion.countries
        .map((country) => {
          const configured = selectedCodes.has(country.code);
          const pending = pendingCodes.has(country.code);
          return `
            <label class="mgp-country-strategy-region-country ${
              configured ? "is-configured" : pending ? "is-pending" : ""
            }">
              <input type="checkbox" data-country-code="${country.code}" ${
                configured || pending ? "checked" : ""
              } ${configured ? "disabled" : ""}>
              <strong>${country.name}</strong>
              <small>${country.code}</small>
              ${configured ? "<em>已添加</em>" : ""}
            </label>`;
        })
        .join("");

      confirm.disabled = pendingCodes.size === 0;
      summary.textContent = pendingCodes.size
        ? `已选择 ${pendingCodes.size} 个待添加国家`
        : `还有 ${countries.length - selectedCodes.size} 个国家可添加`;
    };

    layer.addEventListener("change", (event) => {
      const input = event.target;
      const activeRegion = modalRegions.find((region) => region.id === activeRegionId);
      if (input.matches('input[data-action="select-region"]')) {
        activeRegion.countries
          .filter((country) => !selectedCodes.has(country.code))
          .forEach((country) => {
            if (input.checked) pendingCodes.add(country.code);
            else pendingCodes.delete(country.code);
          });
        renderRegion();
        return;
      }
      const code = input.dataset.countryCode;
      if (!code) return;
      if (input.checked) pendingCodes.add(code);
      else pendingCodes.delete(code);
      renderRegion();
    });
    layer.addEventListener("click", async (event) => {
      const actionButton = event.target.closest("button[data-action]");
      if (!actionButton) return;
      if (actionButton.dataset.action === "region") {
        activeRegionId = actionButton.dataset.region;
        renderRegion();
        return;
      }
      if (actionButton.dataset.action === "close") {
        closeCountryModal();
        return;
      }
      if (actionButton.dataset.action !== "confirm") return;

      const additions = Array.from(pendingCodes)
        .map((code) => countryByCode.get(code))
        .filter(Boolean);
      if (!additions.length) return;
      actionButton.disabled = true;
      actionButton.textContent = "添加中…";

      let added = 0;
      for (const country of additions) {
        if (await addCountryToOriginal(section, country)) added += 1;
      }
      state.active = additions.at(-1)?.code ?? "default";
      closeCountryModal();
      showToast(`已添加 ${added} 个差异化国家`);
      scheduleSync();
    });
    renderRegion();
    layer.querySelector(".mgp-country-strategy-region-nav button")?.focus();
  }

  async function applyLoginToCountries(section, sourceCode, targetCodes) {
    const originalCodes = selectedCountryCodes(section);
    const keep = new Set([sourceCode, ...targetCodes]);
    const temporarilyRemoved = originalCodes.filter((code) => !keep.has(code));

    for (const code of temporarilyRemoved) {
      await removeCountryFromOriginal(section, code);
    }

    const originalAction = await waitFor(() => batchApplyButton());
    if (!originalAction) return false;
    state.suppressOriginalBatchToastUntil = Date.now() + 2600;
    state.allowOriginalBatchAction = true;
    originalAction.click();
    await nextFrame();
    state.suppressOriginalBatchToastUntil = 0;

    for (const code of temporarilyRemoved) {
      const country = countryByCode.get(code);
      if (country) await addCountryToOriginal(section, country);
    }
    const sourceEntry = await waitFor(() => selectedEntry(section, sourceCode));
    sourceEntry
      ?.querySelector("button:not(.mgp-region-selected-remove)")
      ?.click();
    await nextFrame();
    state.active = sourceCode;
    scheduleSync();
    return true;
  }

  function openApplyCountryModal(section) {
    closeCountryModal();
    const sourceCode = currentEditingCountryCode();
    const sourceCountry = countryByCode.get(sourceCode);
    const targets = selectedCountryCodes(section)
      .filter((code) => code !== sourceCode)
      .map((code) => countryByCode.get(code))
      .filter(Boolean);
    if (!sourceCountry || !targets.length) {
      showToast("当前没有可应用的其他国家");
      return;
    }

    const layer = document.createElement("div");
    layer.className = "mgp-country-strategy-modal-layer";
    layer.innerHTML = `
      <section class="mgp-country-strategy-modal mgp-country-sync-modal" role="dialog"
        aria-modal="true" aria-labelledby="country-sync-modal-title">
        <header>
          <div>
            <h3 id="country-sync-modal-title">应用到其他国家</h3>
            <p>将${sourceCountry.name}当前的登录方式与排序同步到选中的国家。</p>
          </div>
          <button class="mgp-country-strategy-modal-close" type="button"
            data-action="close" aria-label="关闭">×</button>
        </header>
        <div class="mgp-country-sync-modal-body">
          <div class="mgp-country-sync-source">
            <span>策略来源</span><strong>${sourceCountry.name}</strong>
          </div>
          <label class="mgp-country-sync-select-all">
            <input type="checkbox" data-action="select-all">
            <strong>选择全部其他国家</strong>
          </label>
          <div class="mgp-country-sync-options">
            ${targets
              .map(
                (country) => `
                  <label class="mgp-country-strategy-region-country">
                    <input type="checkbox" data-country-code="${country.code}">
                    <strong>${country.name}</strong>
                    <small>${country.english} · ${country.code}</small>
                  </label>`,
              )
              .join("")}
          </div>
        </div>
        <footer>
          <span>请选择目标国家</span>
          <button type="button" data-action="close">取消</button>
          <button type="button" data-action="confirm" disabled>应用</button>
        </footer>
      </section>`;
    document.body.append(layer);
    state.modal = layer;

    const confirm = layer.querySelector('button[data-action="confirm"]');
    const summary = layer.querySelector("footer span");
    const targetInputs = () =>
      Array.from(layer.querySelectorAll("input[data-country-code]"));
    const update = () => {
      const checked = targetInputs().filter((input) => input.checked);
      confirm.disabled = checked.length === 0;
      summary.textContent = checked.length
        ? `已选择 ${checked.length} 个目标国家`
        : "请选择目标国家";
      const selectAll = layer.querySelector('input[data-action="select-all"]');
      selectAll.checked = checked.length === targetInputs().length;
    };

    layer.addEventListener("change", (event) => {
      if (event.target.matches('input[data-action="select-all"]')) {
        targetInputs().forEach((input) => {
          input.checked = event.target.checked;
        });
      }
      update();
    });
    layer.addEventListener("click", async (event) => {
      const button = event.target.closest("button[data-action]");
      if (!button) return;
      if (button.dataset.action === "close") {
        closeCountryModal();
        return;
      }
      if (button.dataset.action !== "confirm") return;
      const targetCodes = targetInputs()
        .filter((input) => input.checked)
        .map((input) => input.dataset.countryCode);
      button.disabled = true;
      button.textContent = "应用中…";
      const applied = await applyLoginToCountries(section, sourceCode, targetCodes);
      closeCountryModal();
      showToast(applied ? `已应用到 ${targetCodes.length} 个国家` : "应用失败，请重试");
    });
    layer.querySelector("input[data-country-code]")?.focus();
  }

  document.addEventListener(
    "click",
    (event) => {
      const button = event.target.closest('button[data-country-sync-proxy="true"]');
      if (!button) return;
      if (state.allowOriginalBatchAction) {
        state.allowOriginalBatchAction = false;
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      event.stopImmediatePropagation();
      const section = document.querySelector("#operations-workspace-range");
      if (section) openApplyCountryModal(section);
    },
    true,
  );

  const observer = new MutationObserver(scheduleSync);
  observer.observe(document.documentElement, { childList: true, subtree: true });
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", scheduleSync, { once: true });
  } else {
    scheduleSync();
  }
})();
