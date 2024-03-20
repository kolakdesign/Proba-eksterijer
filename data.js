var APP_DATA = {
  "scenes": [
    {
      "id": "0-ulaz",
      "name": "Ulaz",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.06712804815363071,
          "pitch": 0.035605954473554746,
          "rotation": 0,
          "target": "1-hodnik"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-hodnik",
      "name": "Hodnik",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.15966840743126198,
          "pitch": 0.016114467033631286,
          "rotation": 0,
          "target": "2-open-space"
        },
        {
          "yaw": 3.130885046579394,
          "pitch": 0.36930704784363577,
          "rotation": 0,
          "target": "0-ulaz"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-open-space",
      "name": "Open space",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5134740765254229,
          "pitch": 0.10957051294937514,
          "rotation": 0,
          "target": "3-terasa"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-terasa",
      "name": "Terasa",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.2381020354038217,
          "pitch": 0.13710229116947126,
          "rotation": 0,
          "target": "2-open-space"
        },
        {
          "yaw": 1.1346057711215778,
          "pitch": 0.08078244536117474,
          "rotation": 0,
          "target": "4-dvorite"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-dvorite",
      "name": "Dvorište",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [],
      "infoHotspots": []
    }
  ],
  "name": "Proba Eksterijer",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
