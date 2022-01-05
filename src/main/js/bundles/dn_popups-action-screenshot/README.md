# dn_popups-action-screenshot

This bundle adds a new action to save popup contents to a file.
It is built with [html2canvas](https://github.com/niklasvh/html2canvas) and [jsPDF](https://github.com/parallax/jsPDF).

## Usage

1. Add the bundle "dn_popups-action-screenshot" to your app.
2. Use the custom action _export-screenshot_

```
"bundles": {
    "map-init": {
        "Config": {
            "map": {
                "layers": [
                    {
                        ...
                        "popupTemplate": {
                            "customActions": ["export-screenshot"]
                        }
                    }
                ]
            }
        }
    }
}
```

## Configuration Reference

### Config

```json
"Config": {
    "fileFormat": "pdf",
    "fileName": "Popup"
}
```

| Property     | Type   | Possible Values            | Default     | Description         |
|--------------|--------|----------------------------|-------------|---------------------|
| fileFormat   | String | ```pdf``` &#124; ```png``` | ```pdf```   | Export file format. |
| fileName     | String |                            | ```Popup``` | Export file name.   |
