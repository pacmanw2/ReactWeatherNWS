const responseObject = {
    "@context": [
        "https://raw.githubusercontent.com/geojson/geojson-ld/master/contexts/geojson-base.jsonld",
        {
            "wx": "https://api.weather.gov/ontology#",
            "@vocab": "https://api.weather.gov/ontology#"
        }
    ],
    "type": "FeatureCollection",
    "features": [
        {
            "id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4025905-3417122",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4025905-3417122",
                "@type": "wx:Alert",
                "id": "NWS-IDP-PROD-4025905-3417122",
                "areaDesc": "Escambia Coastal; Baldwin Coastal; Santa Rosa Coastal; Mobile Coastal; Okaloosa Coastal",
                "geocode": {
                    "UGC": [
                        "FLZ202",
                        "ALZ266",
                        "FLZ204",
                        "ALZ265",
                        "FLZ206"
                    ],
                    "SAME": [
                        "012033",
                        "001003",
                        "012113",
                        "001097",
                        "012091"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/FLZ202",
                    "https://api.weather.gov/zones/forecast/ALZ266",
                    "https://api.weather.gov/zones/forecast/FLZ204",
                    "https://api.weather.gov/zones/forecast/ALZ265",
                    "https://api.weather.gov/zones/forecast/FLZ206"
                ],
                "references": [
                    {
                        "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4023990-3415662",
                        "identifier": "NWS-IDP-PROD-4023990-3415662",
                        "sender": "w-nws.webmaster@noaa.gov",
                        "sent": "2020-01-22T06:14:00-06:00"
                    },
                    {
                        "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4025432-3416756",
                        "identifier": "NWS-IDP-PROD-4025432-3416756",
                        "sender": "w-nws.webmaster@noaa.gov",
                        "sent": "2020-01-23T13:51:00-06:00"
                    },
                    {
                        "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4025097-3416508",
                        "identifier": "NWS-IDP-PROD-4025097-3416508",
                        "sender": "w-nws.webmaster@noaa.gov",
                        "sent": "2020-01-23T06:54:00-06:00"
                    },
                    {
                        "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4024390-3415992",
                        "identifier": "NWS-IDP-PROD-4024390-3415992",
                        "sender": "w-nws.webmaster@noaa.gov",
                        "sent": "2020-01-22T14:20:00-06:00"
                    },
                    {
                        "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4024807-3416297",
                        "identifier": "NWS-IDP-PROD-4024807-3416297",
                        "sender": "w-nws.webmaster@noaa.gov",
                        "sent": "2020-01-22T22:37:00-06:00"
                    }
                ],
                "sent": "2020-01-23T23:28:00-06:00",
                "effective": "2020-01-23T23:28:00-06:00",
                "onset": "2020-01-23T23:28:00-06:00",
                "expires": "2020-01-24T07:30:00-06:00",
                "ends": "2020-01-24T18:00:00-06:00",
                "status": "Actual",
                "messageType": "Update",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Rip Current Statement",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Mobile AL",
                "headline": "Rip Current Statement issued January 23 at 11:28PM CST until January 24 at 6:00PM CST by NWS Mobile AL",
                "description": "* WHAT...Dangerous rip currents expected.\n\n* WHERE...In Alabama, Mobile Coastal and Baldwin Coastal\nCounties. In Florida, Escambia Coastal, Santa Rosa Coastal and\nOkaloosa Coastal Counties.\n\n* WHEN...From Thursday morning through Friday afternoon.\n\n* IMPACTS...Rip currents can sweep even the best swimmers away\nfrom shore into deeper water.",
                "instruction": "Swim near a lifeguard. If caught in a rip current, relax and\nfloat. Don't swim against the current. If able, swim in a\ndirection following the shoreline. If unable to escape, face the\nshore and call or wave for help.",
                "response": "Avoid",
                "parameters": {
                    "NWSheadline": [
                        "HIGH RIP CURRENT RISK REMAINS IN EFFECT THROUGH FRIDAY AFTERNOON"
                    ],
                    "VTEC": [
                        "/O.CON.KMOB.RP.S.0005.000000T0000Z-200125T0000Z/"
                    ],
                    "PIL": [
                        "MOBCFWMOB"
                    ],
                    "BLOCKCHANNEL": [
                        "CMAS",
                        "EAS",
                        "NWEM"
                    ],
                    "eventEndingTime": [
                        "2020-01-24T18:00:00-06:00"
                    ]
                }
            }
        },
        {
            "id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4025850-3417070",
            "type": "Feature",
            "geometry": null,
            "properties": {
                "@id": "https://api.weather.gov/alerts/NWS-IDP-PROD-4025850-3417070",
                "@type": "wx:Alert",
                "id": "NWS-IDP-PROD-4025850-3417070",
                "areaDesc": "Baldwin Inland; Escambia Coastal; Conecuh; Mobile Inland; Washington; Mobile Central; Greene; Escambia Inland; Monroe; George; Stone; Wayne; Baldwin Coastal; Escambia; Perry; Mobile Coastal; Baldwin Central; Clarke; Santa Rosa Inland",
                "geocode": {
                    "UGC": [
                        "ALZ262",
                        "FLZ202",
                        "ALZ056",
                        "ALZ261",
                        "ALZ052",
                        "ALZ263",
                        "MSZ076",
                        "FLZ201",
                        "ALZ055",
                        "MSZ079",
                        "MSZ078",
                        "MSZ067",
                        "ALZ266",
                        "ALZ059",
                        "MSZ075",
                        "ALZ265",
                        "ALZ264",
                        "ALZ053",
                        "FLZ203"
                    ],
                    "SAME": [
                        "001003",
                        "012033",
                        "001035",
                        "001097",
                        "001129",
                        "028041",
                        "001099",
                        "028039",
                        "028131",
                        "028153",
                        "001053",
                        "028111",
                        "001025",
                        "012113"
                    ]
                },
                "affectedZones": [
                    "https://api.weather.gov/zones/forecast/ALZ262",
                    "https://api.weather.gov/zones/forecast/FLZ202",
                    "https://api.weather.gov/zones/forecast/ALZ056",
                    "https://api.weather.gov/zones/forecast/ALZ261",
                    "https://api.weather.gov/zones/forecast/ALZ052",
                    "https://api.weather.gov/zones/forecast/ALZ263",
                    "https://api.weather.gov/zones/forecast/MSZ076",
                    "https://api.weather.gov/zones/forecast/FLZ201",
                    "https://api.weather.gov/zones/forecast/ALZ055",
                    "https://api.weather.gov/zones/forecast/MSZ079",
                    "https://api.weather.gov/zones/forecast/MSZ078",
                    "https://api.weather.gov/zones/forecast/MSZ067",
                    "https://api.weather.gov/zones/forecast/ALZ266",
                    "https://api.weather.gov/zones/forecast/ALZ059",
                    "https://api.weather.gov/zones/forecast/MSZ075",
                    "https://api.weather.gov/zones/forecast/ALZ265",
                    "https://api.weather.gov/zones/forecast/ALZ264",
                    "https://api.weather.gov/zones/forecast/ALZ053",
                    "https://api.weather.gov/zones/forecast/FLZ203"
                ],
                "references": [],
                "sent": "2020-01-23T22:07:00-06:00",
                "effective": "2020-01-23T22:07:00-06:00",
                "onset": "2020-01-23T22:07:00-06:00",
                "expires": "2020-01-24T06:00:00-06:00",
                "ends": "2020-01-24T06:00:00-06:00",
                "status": "Actual",
                "messageType": "Alert",
                "category": "Met",
                "severity": "Moderate",
                "certainty": "Likely",
                "urgency": "Expected",
                "event": "Dense Fog Advisory",
                "sender": "w-nws.webmaster@noaa.gov",
                "senderName": "NWS Mobile AL",
                "headline": "Dense Fog Advisory issued January 23 at 10:07PM CST until January 24 at 6:00AM CST by NWS Mobile AL",
                "description": "* WHAT...Visibility a quarter mile or less in dense fog.\n\n* WHERE...Portions of south central and southwest Alabama,\nnorthwest Florida and southeast Mississippi.\n\n* WHEN...Until 6 AM CST Friday.\n\n* IMPACTS...Hazardous driving conditions due to low visibility.",
                "instruction": "If driving, slow down, use your headlights, and leave plenty of\ndistance ahead of you.",
                "response": "Execute",
                "parameters": {
                    "NWSheadline": [
                        "DENSE FOG ADVISORY IN EFFECT UNTIL 6 AM CST FRIDAY"
                    ],
                    "VTEC": [
                        "/O.NEW.KMOB.FG.Y.0007.200124T0407Z-200124T1200Z/"
                    ],
                    "PIL": [
                        "MOBNPWMOB"
                    ],
                    "BLOCKCHANNEL": [
                        "CMAS",
                        "EAS",
                        "NWEM"
                    ],
                    "eventEndingTime": [
                        "2020-01-24T06:00:00-06:00"
                    ]
                }
            }
        }
    ],
    "title": "current watches, warnings, and advisories for 31 N, 88 W",
    "updated": "2020-01-24T08:44:06+00:00"
}

export default responseObject;