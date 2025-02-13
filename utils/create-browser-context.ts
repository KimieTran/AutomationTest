import { chromium } from "@playwright/test";
import path from "path";

export const createBrowserContext = async (extensionName: string) => {
    const pathToExtension = path.join(__dirname, "..", "data", "extension", extensionName)

    return chromium.launchPersistentContext("", {
      channel: "chromium",
      args: [
        `--disable-extensions-except=${pathToExtension}`,
        `--load-extension=${pathToExtension}}`,
        '--no-sandbox' 
      ],
      permissions: ['clipboard-read', 'clipboard-write'],
      ignoreHTTPSErrors: true
    });
}