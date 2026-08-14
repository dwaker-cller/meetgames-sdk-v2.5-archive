const fs = require('fs');
const path = require('path');
const { chromium } = require('playwright');

const root = __dirname;
const indexPath = path.join(root, 'index.html');
const offlinePath = path.join(root, '打开Demo.html');
const edge = 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe';
const url = process.env.SDK_DEMO_URL || 'http://127.0.0.1:4173/index.html';

function updateMetadata(content) {
  return content
    .replaceAll(
      '配置中心、SDK下载、运营配置与 SDK 交互 Demo',
      '配置中心、SDK生成、运营配置与 SDK 交互 Demo',
    )
    .replaceAll('20260805-feedback-9', '20260806-channel-bundle-build-1')
    .replaceAll('20260805-strategy-groups-v2-feedback-5', '20260806-channel-bundle-build-1')
    .replaceAll('20260806-channel-bundle-build-1', '20260806-sdk-release-feedback-1')
    .replaceAll('20260806-sdk-release-feedback-1', '20260806-sdk-download-feedback-2')
    .replaceAll('20260806-sdk-download-feedback-2', '20260806-sdk-tabs-feedback-3')
    .replaceAll('20260806-sdk-tabs-feedback-3', '20260806-sdk-locking-feedback-4')
    .replaceAll('20260806-sdk-locking-feedback-4', '20260806-sdk-channel-layout-feedback-5')
    .replaceAll('20260806-sdk-channel-layout-feedback-5', '20260806-sdk-workbench-heading-feedback-6')
    .replaceAll('20260806-sdk-workbench-heading-feedback-6', '20260806-sdk-download-surface-feedback-7')
    .replaceAll('20260806-sdk-download-surface-feedback-7', '20260806-sdk-borderless-sections-feedback-8')
    .replaceAll('20260806-sdk-borderless-sections-feedback-8', '20260806-sdk-copy-cleanup-feedback-9')
    .replaceAll('20260806-sdk-copy-cleanup-feedback-9', '20260806-sdk-capability-names-feedback-10')
    .replaceAll('20260806-sdk-capability-names-feedback-10', '20260806-sdk-back-label-feedback-11')
    .replaceAll('20260806-sdk-back-label-feedback-11', '20260806-sdk-save-sync-feedback-12')
    .replaceAll('20260806-sdk-save-sync-feedback-12', '20260806-sdk-channel-confirm-feedback-13')
    .replaceAll('20260806-sdk-channel-confirm-feedback-13', '20260806-sdk-quick-title-feedback-14')
    .replaceAll('20260806-sdk-quick-title-feedback-14', '20260807-channel-scoped-login-15')
    .replaceAll('20260807-channel-scoped-login-15', '20260807-download-validation-loop-16')
    .replaceAll('20260807-download-validation-loop-16', '20260807-personalization-controls-25')
    .replaceAll('20260807-personalization-controls-25', '20260807-personalization-controls-26')
    .replaceAll('20260807-personalization-controls-26', '20260810-advertising-platform-control-27')
    .replaceAll('20260810-advertising-platform-control-27', '20260810-operations-config-copy-28')
    .replaceAll('20260810-operations-config-copy-28', '20260810-login-operations-risk-29')
    .replaceAll('20260810-login-operations-risk-29', '20260810-single-channel-edit-30')
    .replaceAll('20260810-single-channel-edit-30', '20260810-runtime-switch-config-31')
    .replaceAll('20260810-runtime-switch-config-31', '20260811-no-sdk-version-32')
    .replaceAll('20260811-no-sdk-version-32', '20260811-config-generation-33')
    .replaceAll('20260811-config-generation-33', '20260811-config-generation-34')
    .replaceAll('20260811-config-generation-34', '20260811-config-generation-35')
    .replaceAll('20260811-config-generation-35', '20260811-config-generation-36')
    .replaceAll('20260811-config-generation-36', '20260811-config-generation-37')
    .replaceAll('20260811-config-generation-37', '20260811-config-generation-38')
    .replaceAll('20260811-config-generation-38', '20260811-config-generation-39')
    .replaceAll('20260811-config-generation-39', '20260811-config-generation-40')
    .replaceAll('20260811-config-generation-40', '20260811-config-generation-41')
    .replaceAll('20260811-config-generation-41', '20260811-config-generation-42')
    .replaceAll('20260811-config-generation-42', '20260811-config-generation-43')
    .replaceAll('20260811-config-generation-43', '20260811-config-generation-44')
    .replaceAll('20260811-config-generation-44', '20260811-config-generation-45')
    .replaceAll('20260811-config-generation-45', '20260811-config-generation-46')
    .replaceAll('20260811-config-generation-46', '20260812-config-generation-48')
    .replaceAll('20260812-config-generation-48', '20260812-config-generation-49')
    .replaceAll('20260812-config-generation-49', '20260812-config-generation-50')
    .replaceAll('20260812-config-generation-50', '20260812-config-generation-51')
    .replaceAll('20260812-config-generation-51', '20260812-config-generation-52')
    .replaceAll('20260812-config-generation-52', '20260813-config-generation-53')
    .replaceAll('20260813-config-generation-53', '20260813-config-generation-54')
    .replaceAll('MeetGames SDK 工具 Demo V1.9', 'MeetGames SDK 工具 Demo V2.0')
    .replaceAll('MeetGames SDK 工具 Demo V2.0', 'MeetGames SDK 工具 Demo V2.1')
    .replaceAll('MeetGames SDK 工具 Demo V2.1', 'MeetGames SDK 工具 Demo V2.2')
    .replaceAll('MeetGames SDK 工具 Demo V2.2', 'MeetGames SDK 工具 Demo V2.3')
    .replaceAll('MeetGames SDK 工具 Demo V2.3', 'MeetGames SDK 工具 Demo V2.4')
    .replaceAll(
      '配置中心、运营配置与 SDK 组合包交互 Demo',
      '配置中心、SDK生成、运营配置与 SDK 交互 Demo',
    )
    .replaceAll(
      '配置中心、渠道包构建、运营配置与 SDK 交互 Demo',
      '配置中心、SDK生成、运营配置与 SDK 交互 Demo',
    )
    .replaceAll(
      '配置中心、SDK发行、运营配置与 SDK 交互 Demo',
      '配置中心、SDK生成、运营配置与 SDK 交互 Demo',
    );
}

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: edge });
  try {
    const page = await browser.newPage({ viewport: { width: 1569, height: 912 } });
    const target = url.includes('?') ? `${url}&staticSync=${Date.now()}` : `${url}?staticSync=${Date.now()}`;
    await page.goto(target, { waitUntil: 'networkidle' });
    await page.locator('[data-nav-id="config"]').waitFor();
    const appHtml = await page.locator('.mgp-app').evaluate((element) => element.outerHTML);

    let html = fs.readFileSync(indexPath, 'utf8');
    const appStart = html.indexOf('<div class="mgp-app">');
    const runtimeStart = html.indexOf(
      '<script src="./_next/static/chunks/311qtovt98m4l.js"',
      appStart,
    );
    if (appStart < 0 || runtimeStart < 0) {
      throw new Error('无法定位静态入口中的应用主体或 Next.js 运行时。');
    }

    html = `${html.slice(0, appStart)}${appHtml}<!--$--><!--/$-->${html.slice(runtimeStart)}`;
    html = updateMetadata(html);
    fs.writeFileSync(indexPath, html, 'utf8');
    fs.writeFileSync(offlinePath, html, 'utf8');

    for (const file of [
      'index.txt',
      '__next._full.txt',
      '__next._head.txt',
      '404.html',
      '404/index.html',
      '_not-found/index.html',
      '_not-found/index.txt',
      '_not-found/__next._full.txt',
      '_not-found/__next._head.txt',
    ]) {
      const targetPath = path.join(root, file);
      fs.writeFileSync(targetPath, updateMetadata(fs.readFileSync(targetPath, 'utf8')), 'utf8');
    }

    console.log(
      JSON.stringify(
        {
          ok: true,
          appHtmlLength: appHtml.length,
          entryLength: html.length,
          synchronizedEntries: ['index.html', '打开Demo.html'],
        },
        null,
        2,
      ),
    );
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error.stack || error);
  process.exitCode = 1;
});
