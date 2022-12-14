# Hive Frontend Engineer Challenge

## Requirements
- [x] A user should be able to open and close the dropdown menu.
- [x] The component must support a single selected option or multiple selected options. Please demonstrate both use cases separately.
- [x] A user should be able to select and deselect all options at once.
- [x] The selected option or options must be visible when the dropdown is closed.

## Component API
```ts
placeholder: string; // represents placeholder text to be shown if no item is selected
options: string[]; // list of all the dropdown menu items
isMultiselect?: boolean; // indicates whether dropdown should be multi select or single select
onChange?: (value: string) => void; // optional callback to be triggered when selecting or removing an item from dropdown menu
```

## How to run project

In the project directory, you can run:

### `npm install`

Installs the necessary dependencies.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Screenshot
<img width="858" alt="Screen Shot 2022-10-24 at 7 12 11 PM" src="https://user-images.githubusercontent.com/43249425/197647114-dea6965d-ddd9-4ba5-abfd-80edc2c83545.png">
