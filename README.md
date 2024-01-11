# Night Shift Google Drive - v1.1.1

Night Shift Google Drive is a Firefox extension designed to bring a dark mode experience to Google Drive. This extension transforms the default Google Drive interface into a darker, more visually comfortable environment. With a single JavaScript file named `darkmode.js`, Night Shift Google Drive is a lightweight and easy-to-use extension.


## Installation

### Regular Installation (Recommended)

Night Shift Google Drive is available for easy installation in multiple ways:

1. **Mozilla Firefox Add-ons Website:**
   - Visit the official Mozilla Firefox Add-ons website [here](https://addons.mozilla.org/en-US/firefox/addon/night-shift-google-drive/).
   - Click on the "Add to Firefox" button to install the extension directly.

2. **Search in the Firefox Browser:**
   - Open the Firefox browser.
   - Navigate to the extension section by clicking on the three horizontal lines in the upper right corner and selecting "Add-ons."
   - In the search bar, type "Night Shift Google Drive."
   - Find the extension in the search results and click on "Add to Firefox" to install.

### Installation for Testing

1. Download the extension by cloning the repository or downloading the `darkmode.js` file.
2. Open Firefox and go to `about:debugging`.
3. Click on "This Firefox" and then click the "Load Temporary Add-on" button.
4. Select the `darkmode.js` file from the downloaded extension directory.

Night Shift Google Drive will be installed and active until you restart Firefox.

## Features

- **Dark Mode:** Enables a dark color scheme for Google Drive, reducing eye strain in low-light conditions.

## Usage

1. After installation, visit Google Drive or any of its subdomains.
2. Experience the transformed dark mode interface for a more comfortable browsing experience.

**Note:** Night Shift Google Drive may not work on certain domains, and it's recommended to disable the extension for those cases.

## Files and Directory Structure

The extension follows a simple file and directory structure:

- **manifest.json:** Contains metadata about the extension, including name, version, description, and icon information.
- **darkmode.js:** The JavaScript file responsible for applying the dark mode to Google Drive.
- **icons/border-48.png:** The icon used to represent the extension in the Add-ons Manager.

## Customization

Feel free to customize the extension according to your preferences:

- Modify `darkmode.js` to adjust the dark mode styling.
- Replace the icon (`icons/border-48.png`) with your preferred icon.

## Testing

To test the extension:

1. Visit Google Drive or its subdomains.
2. Verify that the dark mode is applied as expected.

**Note:** Extensions may not work in private browsing by default. If testing in private mode, open "about:addons," click on the extension, and select the "Allow" option for "Run in Private Windows."

## Contribution

If you encounter any issues or have suggestions for improvement, feel free to contribute by reporting issues or submitting pull requests on [GitHub](https://github.com/Hthrace/night-shift-google-drive).

Thank you for using Night Shift Google Drive! Enjoy a more comfortable Google Drive experience in dark mode.
