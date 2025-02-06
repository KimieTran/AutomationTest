import { chromium } from "@playwright/test";
import path from "path";

export const createBrowserContext = async () => {
    const pathToExtension01 = path.join(__dirname, "..", "data", "extension", "metamask")
    const pathToExtension02 = path.join(__dirname, "..", "data", "extension", "keplr")
    const pathToExtension03 = path.join(__dirname, "..", "data", "extension", "leap")

    return chromium.launchPersistentContext("", {
      channel: "chromium",
      args: [
        `--disable-extensions-except=${pathToExtension01},${pathToExtension02},${pathToExtension03}`,
        `--load-extension=${pathToExtension01},${pathToExtension02},${pathToExtension03}`,
        `--disable-web-security`,
        '--no-sandbox' 
      ],
    });
}