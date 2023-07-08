export default {
    "scalars": [
        12,
        34,
        38,
        39,
        40,
        44,
        45,
        54,
        67,
        68,
        71,
        72,
        73,
        76,
        83,
        85,
        87,
        96,
        97,
        110,
        111,
        122,
        123,
        124,
        132,
        134,
        151,
        164,
        165,
        166,
        167,
        168,
        169,
        170,
        171
    ],
    "types": {
        "Aggregate": {
            "count": [
                71
            ],
            "__typename": [
                123
            ]
        },
        "Asset": {
            "stage": [
                122
            ],
            "locale": [
                73
            ],
            "localizations": [
                1,
                {
                    "locales": [
                        73,
                        "[Locale!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "documentInStages": [
                1,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "publishedAt": [
                39,
                {
                    "variation": [
                        124,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "updatedAt": [
                39,
                {
                    "variation": [
                        124,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "createdAt": [
                39,
                {
                    "variation": [
                        124,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "id": [
                67
            ],
            "publishedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "updatedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "createdBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "bgWorks": [
                143,
                {
                    "where": [
                        161
                    ],
                    "orderBy": [
                        151
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "scheduledIn": [
                88,
                {
                    "where": [
                        100
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "history": [
                141,
                {
                    "limit": [
                        71,
                        "Int!"
                    ],
                    "skip": [
                        71,
                        "Int!"
                    ],
                    "stageOverride": [
                        122
                    ]
                }
            ],
            "url": [
                123,
                {
                    "transformation": [
                        13
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "AssetConnectInput": {
            "where": [
                32
            ],
            "position": [
                37
            ],
            "__typename": [
                123
            ]
        },
        "AssetConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                10
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateInput": {
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "bgWorks": [
                147
            ],
            "localizations": [
                7
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateLocalizationDataInput": {
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateLocalizationInput": {
            "data": [
                5
            ],
            "locale": [
                73
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateLocalizationsInput": {
            "create": [
                6
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateManyInlineInput": {
            "create": [
                4
            ],
            "connect": [
                32
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateOneInlineInput": {
            "create": [
                4
            ],
            "connect": [
                32
            ],
            "__typename": [
                123
            ]
        },
        "AssetEdge": {
            "node": [
                1
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "AssetManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                30
            ],
            "OR": [
                30
            ],
            "NOT": [
                30
            ],
            "documentInStages_every": [
                31
            ],
            "documentInStages_some": [
                31
            ],
            "documentInStages_none": [
                31
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "bgWorks_every": [
                161
            ],
            "bgWorks_some": [
                161
            ],
            "bgWorks_none": [
                161
            ],
            "scheduledIn_every": [
                100
            ],
            "scheduledIn_some": [
                100
            ],
            "scheduledIn_none": [
                100
            ],
            "__typename": [
                123
            ]
        },
        "AssetOrderByInput": {},
        "AssetTransformationInput": {
            "image": [
                70
            ],
            "document": [
                42
            ],
            "validateOptions": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateInput": {
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "bgWorks": [
                153
            ],
            "localizations": [
                17
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateLocalizationDataInput": {
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateLocalizationInput": {
            "data": [
                15
            ],
            "locale": [
                73
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateLocalizationsInput": {
            "create": [
                6
            ],
            "update": [
                16
            ],
            "upsert": [
                27
            ],
            "delete": [
                73
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyInlineInput": {
            "create": [
                4
            ],
            "connect": [
                2
            ],
            "set": [
                32
            ],
            "update": [
                25
            ],
            "upsert": [
                28
            ],
            "disconnect": [
                32
            ],
            "delete": [
                32
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyInput": {
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "localizations": [
                22
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyLocalizationDataInput": {
            "mimeType": [
                123
            ],
            "size": [
                44
            ],
            "width": [
                44
            ],
            "height": [
                44
            ],
            "fileName": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyLocalizationInput": {
            "data": [
                20
            ],
            "locale": [
                73
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyLocalizationsInput": {
            "update": [
                21
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyWithNestedWhereInput": {
            "where": [
                30
            ],
            "data": [
                19
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateOneInlineInput": {
            "create": [
                4
            ],
            "update": [
                25
            ],
            "upsert": [
                28
            ],
            "connect": [
                32
            ],
            "disconnect": [
                34
            ],
            "delete": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateWithNestedWhereUniqueInput": {
            "where": [
                32
            ],
            "data": [
                14
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpsertInput": {
            "create": [
                4
            ],
            "update": [
                14
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpsertLocalizationInput": {
            "update": [
                15
            ],
            "create": [
                5
            ],
            "locale": [
                73
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpsertWithNestedWhereUniqueInput": {
            "where": [
                32
            ],
            "data": [
                26
            ],
            "__typename": [
                123
            ]
        },
        "AssetWhereComparatorInput": {
            "outdated_to": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "AssetWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                30
            ],
            "OR": [
                30
            ],
            "NOT": [
                30
            ],
            "documentInStages_every": [
                31
            ],
            "documentInStages_some": [
                31
            ],
            "documentInStages_none": [
                31
            ],
            "mimeType": [
                123
            ],
            "mimeType_not": [
                123
            ],
            "mimeType_in": [
                123
            ],
            "mimeType_not_in": [
                123
            ],
            "mimeType_contains": [
                123
            ],
            "mimeType_not_contains": [
                123
            ],
            "mimeType_starts_with": [
                123
            ],
            "mimeType_not_starts_with": [
                123
            ],
            "mimeType_ends_with": [
                123
            ],
            "mimeType_not_ends_with": [
                123
            ],
            "size": [
                44
            ],
            "size_not": [
                44
            ],
            "size_in": [
                44
            ],
            "size_not_in": [
                44
            ],
            "size_lt": [
                44
            ],
            "size_lte": [
                44
            ],
            "size_gt": [
                44
            ],
            "size_gte": [
                44
            ],
            "width": [
                44
            ],
            "width_not": [
                44
            ],
            "width_in": [
                44
            ],
            "width_not_in": [
                44
            ],
            "width_lt": [
                44
            ],
            "width_lte": [
                44
            ],
            "width_gt": [
                44
            ],
            "width_gte": [
                44
            ],
            "height": [
                44
            ],
            "height_not": [
                44
            ],
            "height_in": [
                44
            ],
            "height_not_in": [
                44
            ],
            "height_lt": [
                44
            ],
            "height_lte": [
                44
            ],
            "height_gt": [
                44
            ],
            "height_gte": [
                44
            ],
            "fileName": [
                123
            ],
            "fileName_not": [
                123
            ],
            "fileName_in": [
                123
            ],
            "fileName_not_in": [
                123
            ],
            "fileName_contains": [
                123
            ],
            "fileName_not_contains": [
                123
            ],
            "fileName_starts_with": [
                123
            ],
            "fileName_not_starts_with": [
                123
            ],
            "fileName_ends_with": [
                123
            ],
            "fileName_not_ends_with": [
                123
            ],
            "handle": [
                123
            ],
            "handle_not": [
                123
            ],
            "handle_in": [
                123
            ],
            "handle_not_in": [
                123
            ],
            "handle_contains": [
                123
            ],
            "handle_not_contains": [
                123
            ],
            "handle_starts_with": [
                123
            ],
            "handle_not_starts_with": [
                123
            ],
            "handle_ends_with": [
                123
            ],
            "handle_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "bgWorks_every": [
                161
            ],
            "bgWorks_some": [
                161
            ],
            "bgWorks_none": [
                161
            ],
            "scheduledIn_every": [
                100
            ],
            "scheduledIn_some": [
                100
            ],
            "scheduledIn_none": [
                100
            ],
            "__typename": [
                123
            ]
        },
        "AssetWhereStageInput": {
            "AND": [
                31
            ],
            "OR": [
                31
            ],
            "NOT": [
                31
            ],
            "stage": [
                122
            ],
            "compareWithParent": [
                29
            ],
            "__typename": [
                123
            ]
        },
        "AssetWhereUniqueInput": {
            "id": [
                67
            ],
            "__typename": [
                123
            ]
        },
        "BatchPayload": {
            "count": [
                76
            ],
            "__typename": [
                123
            ]
        },
        "Boolean": {},
        "Color": {
            "hex": [
                45
            ],
            "rgba": [
                82
            ],
            "css": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ColorInput": {
            "hex": [
                45
            ],
            "rgba": [
                84
            ],
            "__typename": [
                123
            ]
        },
        "ConnectPositionInput": {
            "after": [
                67
            ],
            "before": [
                67
            ],
            "start": [
                34
            ],
            "end": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "Date": {},
        "DateTime": {},
        "DocumentFileTypes": {},
        "DocumentOutputInput": {
            "format": [
                40
            ],
            "__typename": [
                123
            ]
        },
        "DocumentTransformationInput": {
            "output": [
                41
            ],
            "__typename": [
                123
            ]
        },
        "DocumentVersion": {
            "id": [
                67
            ],
            "stage": [
                122
            ],
            "revision": [
                71
            ],
            "createdAt": [
                39
            ],
            "data": [
                72
            ],
            "__typename": [
                123
            ]
        },
        "Float": {},
        "Hex": {},
        "Home": {
            "stage": [
                122
            ],
            "documentInStages": [
                46,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "publishedAt": [
                39
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "id": [
                67
            ],
            "about": [
                123
            ],
            "title": [
                123
            ],
            "slug": [
                123
            ],
            "stack": [
                123
            ],
            "hobbies": [
                123
            ],
            "publishedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "updatedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "createdBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "scheduledIn": [
                88,
                {
                    "where": [
                        100
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "history": [
                141,
                {
                    "limit": [
                        71,
                        "Int!"
                    ],
                    "skip": [
                        71,
                        "Int!"
                    ],
                    "stageOverride": [
                        122
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "HomeConnectInput": {
            "where": [
                66
            ],
            "position": [
                37
            ],
            "__typename": [
                123
            ]
        },
        "HomeConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                52
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                123
            ]
        },
        "HomeCreateInput": {
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "about": [
                123
            ],
            "title": [
                123
            ],
            "slug": [
                123
            ],
            "stack": [
                123
            ],
            "hobbies": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "HomeCreateManyInlineInput": {
            "create": [
                49
            ],
            "connect": [
                66
            ],
            "__typename": [
                123
            ]
        },
        "HomeCreateOneInlineInput": {
            "create": [
                49
            ],
            "connect": [
                66
            ],
            "__typename": [
                123
            ]
        },
        "HomeEdge": {
            "node": [
                46
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "HomeManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                64
            ],
            "OR": [
                64
            ],
            "NOT": [
                64
            ],
            "documentInStages_every": [
                65
            ],
            "documentInStages_some": [
                65
            ],
            "documentInStages_none": [
                65
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "about": [
                123
            ],
            "about_not": [
                123
            ],
            "about_in": [
                123
            ],
            "about_not_in": [
                123
            ],
            "about_contains": [
                123
            ],
            "about_not_contains": [
                123
            ],
            "about_starts_with": [
                123
            ],
            "about_not_starts_with": [
                123
            ],
            "about_ends_with": [
                123
            ],
            "about_not_ends_with": [
                123
            ],
            "title": [
                123
            ],
            "title_not": [
                123
            ],
            "title_in": [
                123
            ],
            "title_not_in": [
                123
            ],
            "title_contains": [
                123
            ],
            "title_not_contains": [
                123
            ],
            "title_starts_with": [
                123
            ],
            "title_not_starts_with": [
                123
            ],
            "title_ends_with": [
                123
            ],
            "title_not_ends_with": [
                123
            ],
            "slug": [
                123
            ],
            "slug_not": [
                123
            ],
            "slug_in": [
                123
            ],
            "slug_not_in": [
                123
            ],
            "slug_contains": [
                123
            ],
            "slug_not_contains": [
                123
            ],
            "slug_starts_with": [
                123
            ],
            "slug_not_starts_with": [
                123
            ],
            "slug_ends_with": [
                123
            ],
            "slug_not_ends_with": [
                123
            ],
            "stack": [
                123
            ],
            "stack_not": [
                123
            ],
            "stack_contains_all": [
                123
            ],
            "stack_contains_some": [
                123
            ],
            "stack_contains_none": [
                123
            ],
            "hobbies": [
                123
            ],
            "hobbies_not": [
                123
            ],
            "hobbies_in": [
                123
            ],
            "hobbies_not_in": [
                123
            ],
            "hobbies_contains": [
                123
            ],
            "hobbies_not_contains": [
                123
            ],
            "hobbies_starts_with": [
                123
            ],
            "hobbies_not_starts_with": [
                123
            ],
            "hobbies_ends_with": [
                123
            ],
            "hobbies_not_ends_with": [
                123
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "scheduledIn_every": [
                100
            ],
            "scheduledIn_some": [
                100
            ],
            "scheduledIn_none": [
                100
            ],
            "__typename": [
                123
            ]
        },
        "HomeOrderByInput": {},
        "HomeUpdateInput": {
            "about": [
                123
            ],
            "title": [
                123
            ],
            "slug": [
                123
            ],
            "stack": [
                123
            ],
            "hobbies": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpdateManyInlineInput": {
            "create": [
                49
            ],
            "connect": [
                47
            ],
            "set": [
                66
            ],
            "update": [
                60
            ],
            "upsert": [
                62
            ],
            "disconnect": [
                66
            ],
            "delete": [
                66
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpdateManyInput": {
            "about": [
                123
            ],
            "title": [
                123
            ],
            "stack": [
                123
            ],
            "hobbies": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpdateManyWithNestedWhereInput": {
            "where": [
                64
            ],
            "data": [
                57
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpdateOneInlineInput": {
            "create": [
                49
            ],
            "update": [
                60
            ],
            "upsert": [
                62
            ],
            "connect": [
                66
            ],
            "disconnect": [
                34
            ],
            "delete": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpdateWithNestedWhereUniqueInput": {
            "where": [
                66
            ],
            "data": [
                55
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpsertInput": {
            "create": [
                49
            ],
            "update": [
                55
            ],
            "__typename": [
                123
            ]
        },
        "HomeUpsertWithNestedWhereUniqueInput": {
            "where": [
                66
            ],
            "data": [
                61
            ],
            "__typename": [
                123
            ]
        },
        "HomeWhereComparatorInput": {
            "outdated_to": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "HomeWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                64
            ],
            "OR": [
                64
            ],
            "NOT": [
                64
            ],
            "documentInStages_every": [
                65
            ],
            "documentInStages_some": [
                65
            ],
            "documentInStages_none": [
                65
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "about": [
                123
            ],
            "about_not": [
                123
            ],
            "about_in": [
                123
            ],
            "about_not_in": [
                123
            ],
            "about_contains": [
                123
            ],
            "about_not_contains": [
                123
            ],
            "about_starts_with": [
                123
            ],
            "about_not_starts_with": [
                123
            ],
            "about_ends_with": [
                123
            ],
            "about_not_ends_with": [
                123
            ],
            "title": [
                123
            ],
            "title_not": [
                123
            ],
            "title_in": [
                123
            ],
            "title_not_in": [
                123
            ],
            "title_contains": [
                123
            ],
            "title_not_contains": [
                123
            ],
            "title_starts_with": [
                123
            ],
            "title_not_starts_with": [
                123
            ],
            "title_ends_with": [
                123
            ],
            "title_not_ends_with": [
                123
            ],
            "slug": [
                123
            ],
            "slug_not": [
                123
            ],
            "slug_in": [
                123
            ],
            "slug_not_in": [
                123
            ],
            "slug_contains": [
                123
            ],
            "slug_not_contains": [
                123
            ],
            "slug_starts_with": [
                123
            ],
            "slug_not_starts_with": [
                123
            ],
            "slug_ends_with": [
                123
            ],
            "slug_not_ends_with": [
                123
            ],
            "stack": [
                123
            ],
            "stack_not": [
                123
            ],
            "stack_contains_all": [
                123
            ],
            "stack_contains_some": [
                123
            ],
            "stack_contains_none": [
                123
            ],
            "hobbies": [
                123
            ],
            "hobbies_not": [
                123
            ],
            "hobbies_in": [
                123
            ],
            "hobbies_not_in": [
                123
            ],
            "hobbies_contains": [
                123
            ],
            "hobbies_not_contains": [
                123
            ],
            "hobbies_starts_with": [
                123
            ],
            "hobbies_not_starts_with": [
                123
            ],
            "hobbies_ends_with": [
                123
            ],
            "hobbies_not_ends_with": [
                123
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "scheduledIn_every": [
                100
            ],
            "scheduledIn_some": [
                100
            ],
            "scheduledIn_none": [
                100
            ],
            "__typename": [
                123
            ]
        },
        "HomeWhereStageInput": {
            "AND": [
                65
            ],
            "OR": [
                65
            ],
            "NOT": [
                65
            ],
            "stage": [
                122
            ],
            "compareWithParent": [
                63
            ],
            "__typename": [
                123
            ]
        },
        "HomeWhereUniqueInput": {
            "id": [
                67
            ],
            "slug": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ID": {},
        "ImageFit": {},
        "ImageResizeInput": {
            "width": [
                71
            ],
            "height": [
                71
            ],
            "fit": [
                68
            ],
            "__typename": [
                123
            ]
        },
        "ImageTransformationInput": {
            "resize": [
                69
            ],
            "__typename": [
                123
            ]
        },
        "Int": {},
        "Json": {},
        "Locale": {},
        "Location": {
            "latitude": [
                44
            ],
            "longitude": [
                44
            ],
            "distance": [
                44,
                {
                    "from": [
                        75,
                        "LocationInput!"
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "LocationInput": {
            "latitude": [
                44
            ],
            "longitude": [
                44
            ],
            "__typename": [
                123
            ]
        },
        "Long": {},
        "Mutation": {
            "createHome": [
                46,
                {
                    "data": [
                        49,
                        "HomeCreateInput!"
                    ]
                }
            ],
            "updateHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "data": [
                        55,
                        "HomeUpdateInput!"
                    ]
                }
            ],
            "deleteHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ]
                }
            ],
            "upsertHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "upsert": [
                        61,
                        "HomeUpsertInput!"
                    ]
                }
            ],
            "publishHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "updateManyHome_pageConnection": [
                48,
                {
                    "where": [
                        53
                    ],
                    "data": [
                        57,
                        "HomeUpdateManyInput!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "deleteManyHome_pageConnection": [
                48,
                {
                    "where": [
                        53
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "publishManyHome_pageConnection": [
                48,
                {
                    "where": [
                        53
                    ],
                    "from": [
                        122
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "unpublishManyHome_pageConnection": [
                48,
                {
                    "where": [
                        53
                    ],
                    "stage": [
                        122
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "updateManyHome_page": [
                33,
                {
                    "where": [
                        53
                    ],
                    "data": [
                        57,
                        "HomeUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyHome_page": [
                33,
                {
                    "where": [
                        53
                    ]
                }
            ],
            "publishManyHome_page": [
                33,
                {
                    "where": [
                        53
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishManyHome_page": [
                33,
                {
                    "where": [
                        53
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "schedulePublishHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        39
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "scheduleUnpublishHome": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        39
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "createAsset": [
                1,
                {
                    "data": [
                        4,
                        "AssetCreateInput!"
                    ]
                }
            ],
            "updateAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "data": [
                        14,
                        "AssetUpdateInput!"
                    ]
                }
            ],
            "deleteAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ]
                }
            ],
            "upsertAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "upsert": [
                        26,
                        "AssetUpsertInput!"
                    ]
                }
            ],
            "publishAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        34
                    ],
                    "withDefaultLocale": [
                        34
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        34
                    ]
                }
            ],
            "updateManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "data": [
                        19,
                        "AssetUpdateManyInput!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "deleteManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "publishManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "from": [
                        122
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        34
                    ],
                    "withDefaultLocale": [
                        34
                    ]
                }
            ],
            "unpublishManyAssetsConnection": [
                3,
                {
                    "where": [
                        11
                    ],
                    "stage": [
                        122
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        34
                    ]
                }
            ],
            "updateManyAssets": [
                33,
                {
                    "where": [
                        11
                    ],
                    "data": [
                        19,
                        "AssetUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyAssets": [
                33,
                {
                    "where": [
                        11
                    ]
                }
            ],
            "publishManyAssets": [
                33,
                {
                    "where": [
                        11
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        34
                    ],
                    "withDefaultLocale": [
                        34
                    ]
                }
            ],
            "unpublishManyAssets": [
                33,
                {
                    "where": [
                        11
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        34
                    ]
                }
            ],
            "schedulePublishAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        34
                    ],
                    "withDefaultLocale": [
                        34
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        39
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "scheduleUnpublishAsset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        39
                    ],
                    "releaseId": [
                        123
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        34
                    ]
                }
            ],
            "deleteScheduledOperation": [
                88,
                {
                    "where": [
                        101,
                        "ScheduledOperationWhereUniqueInput!"
                    ]
                }
            ],
            "createScheduledRelease": [
                102,
                {
                    "data": [
                        105,
                        "ScheduledReleaseCreateInput!"
                    ]
                }
            ],
            "updateScheduledRelease": [
                102,
                {
                    "where": [
                        121,
                        "ScheduledReleaseWhereUniqueInput!"
                    ],
                    "data": [
                        112,
                        "ScheduledReleaseUpdateInput!"
                    ]
                }
            ],
            "deleteScheduledRelease": [
                102,
                {
                    "where": [
                        121,
                        "ScheduledReleaseWhereUniqueInput!"
                    ]
                }
            ],
            "createWorks": [
                143,
                {
                    "data": [
                        146,
                        "WorksCreateInput!"
                    ]
                }
            ],
            "updateWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "data": [
                        152,
                        "WorksUpdateInput!"
                    ]
                }
            ],
            "deleteWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ]
                }
            ],
            "upsertWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "upsert": [
                        158,
                        "WorksUpsertInput!"
                    ]
                }
            ],
            "publishWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "updateManyWorkConnection": [
                145,
                {
                    "where": [
                        150
                    ],
                    "data": [
                        154,
                        "WorksUpdateManyInput!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "deleteManyWorkConnection": [
                145,
                {
                    "where": [
                        150
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "publishManyWorkConnection": [
                145,
                {
                    "where": [
                        150
                    ],
                    "from": [
                        122
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "unpublishManyWorkConnection": [
                145,
                {
                    "where": [
                        150
                    ],
                    "stage": [
                        122
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "skip": [
                        71
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "before": [
                        67
                    ],
                    "after": [
                        67
                    ]
                }
            ],
            "updateManyWork": [
                33,
                {
                    "where": [
                        150
                    ],
                    "data": [
                        154,
                        "WorksUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyWork": [
                33,
                {
                    "where": [
                        150
                    ]
                }
            ],
            "publishManyWork": [
                33,
                {
                    "where": [
                        150
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishManyWork": [
                33,
                {
                    "where": [
                        150
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "schedulePublishWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        39
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "scheduleUnpublishWorks": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        39
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "Node": {
            "id": [
                67
            ],
            "stage": [
                122
            ],
            "on_Asset": [
                1
            ],
            "on_Home": [
                46
            ],
            "on_ScheduledOperation": [
                88
            ],
            "on_ScheduledRelease": [
                102
            ],
            "on_User": [
                126
            ],
            "on_Works": [
                143
            ],
            "__typename": [
                123
            ]
        },
        "PageInfo": {
            "hasNextPage": [
                34
            ],
            "hasPreviousPage": [
                34
            ],
            "startCursor": [
                123
            ],
            "endCursor": [
                123
            ],
            "pageSize": [
                71
            ],
            "__typename": [
                123
            ]
        },
        "PublishLocaleInput": {
            "locale": [
                73
            ],
            "stages": [
                122
            ],
            "__typename": [
                123
            ]
        },
        "Query": {
            "node": [
                78,
                {
                    "id": [
                        67,
                        "ID!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "home_page": [
                46,
                {
                    "where": [
                        64
                    ],
                    "orderBy": [
                        54
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "home": [
                46,
                {
                    "where": [
                        66,
                        "HomeWhereUniqueInput!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "home_pageConnection": [
                48,
                {
                    "where": [
                        64
                    ],
                    "orderBy": [
                        54
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "homeVersion": [
                43,
                {
                    "where": [
                        142,
                        "VersionWhereInput!"
                    ]
                }
            ],
            "users": [
                126,
                {
                    "where": [
                        138
                    ],
                    "orderBy": [
                        134
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "user": [
                126,
                {
                    "where": [
                        140,
                        "UserWhereUniqueInput!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "usersConnection": [
                128,
                {
                    "where": [
                        138
                    ],
                    "orderBy": [
                        134
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "assets": [
                1,
                {
                    "where": [
                        30
                    ],
                    "orderBy": [
                        12
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "asset": [
                1,
                {
                    "where": [
                        32,
                        "AssetWhereUniqueInput!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "assetsConnection": [
                3,
                {
                    "where": [
                        30
                    ],
                    "orderBy": [
                        12
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "assetVersion": [
                43,
                {
                    "where": [
                        142,
                        "VersionWhereInput!"
                    ]
                }
            ],
            "scheduledOperations": [
                88,
                {
                    "where": [
                        100
                    ],
                    "orderBy": [
                        96
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "scheduledOperation": [
                88,
                {
                    "where": [
                        101,
                        "ScheduledOperationWhereUniqueInput!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "scheduledOperationsConnection": [
                91,
                {
                    "where": [
                        100
                    ],
                    "orderBy": [
                        96
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "scheduledReleases": [
                102,
                {
                    "where": [
                        120
                    ],
                    "orderBy": [
                        110
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "scheduledRelease": [
                102,
                {
                    "where": [
                        121,
                        "ScheduledReleaseWhereUniqueInput!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "scheduledReleasesConnection": [
                104,
                {
                    "where": [
                        120
                    ],
                    "orderBy": [
                        110
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "work": [
                143,
                {
                    "where": [
                        161
                    ],
                    "orderBy": [
                        151
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "works": [
                143,
                {
                    "where": [
                        163,
                        "WorksWhereUniqueInput!"
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "workConnection": [
                145,
                {
                    "where": [
                        161
                    ],
                    "orderBy": [
                        151
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "stage": [
                        122,
                        "Stage!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]!"
                    ]
                }
            ],
            "worksVersion": [
                43,
                {
                    "where": [
                        142,
                        "VersionWhereInput!"
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "RGBA": {
            "r": [
                83
            ],
            "g": [
                83
            ],
            "b": [
                83
            ],
            "a": [
                85
            ],
            "__typename": [
                123
            ]
        },
        "RGBAHue": {},
        "RGBAInput": {
            "r": [
                83
            ],
            "g": [
                83
            ],
            "b": [
                83
            ],
            "a": [
                85
            ],
            "__typename": [
                123
            ]
        },
        "RGBATransparency": {},
        "RichText": {
            "raw": [
                87
            ],
            "html": [
                123
            ],
            "markdown": [
                123
            ],
            "text": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "RichTextAST": {},
        "ScheduledOperation": {
            "stage": [
                122
            ],
            "documentInStages": [
                88,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "rawPayload": [
                72
            ],
            "errorMessage": [
                123
            ],
            "description": [
                123
            ],
            "publishedAt": [
                39
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "id": [
                67
            ],
            "release": [
                102,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "publishedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "updatedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "createdBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "status": [
                97
            ],
            "affectedDocuments": [
                89,
                {
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationAffectedDocument": {
            "on_Asset": [
                1
            ],
            "on_Home": [
                46
            ],
            "on_Works": [
                143
            ],
            "on_Node": [
                78
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationConnectInput": {
            "where": [
                101
            ],
            "position": [
                37
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                94
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationCreateManyInlineInput": {
            "connect": [
                101
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationCreateOneInlineInput": {
            "connect": [
                101
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationEdge": {
            "node": [
                88
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                100
            ],
            "OR": [
                100
            ],
            "NOT": [
                100
            ],
            "rawPayload_json_path_exists": [
                123
            ],
            "rawPayload_value_recursive": [
                72
            ],
            "errorMessage": [
                123
            ],
            "errorMessage_not": [
                123
            ],
            "errorMessage_in": [
                123
            ],
            "errorMessage_not_in": [
                123
            ],
            "errorMessage_contains": [
                123
            ],
            "errorMessage_not_contains": [
                123
            ],
            "errorMessage_starts_with": [
                123
            ],
            "errorMessage_not_starts_with": [
                123
            ],
            "errorMessage_ends_with": [
                123
            ],
            "errorMessage_not_ends_with": [
                123
            ],
            "description": [
                123
            ],
            "description_not": [
                123
            ],
            "description_in": [
                123
            ],
            "description_not_in": [
                123
            ],
            "description_contains": [
                123
            ],
            "description_not_contains": [
                123
            ],
            "description_starts_with": [
                123
            ],
            "description_not_starts_with": [
                123
            ],
            "description_ends_with": [
                123
            ],
            "description_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "release": [
                120
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "status": [
                97
            ],
            "status_not": [
                97
            ],
            "status_in": [
                97
            ],
            "status_not_in": [
                97
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationOrderByInput": {},
        "ScheduledOperationStatus": {},
        "ScheduledOperationUpdateManyInlineInput": {
            "connect": [
                90
            ],
            "set": [
                101
            ],
            "disconnect": [
                101
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationUpdateOneInlineInput": {
            "connect": [
                101
            ],
            "disconnect": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                100
            ],
            "OR": [
                100
            ],
            "NOT": [
                100
            ],
            "rawPayload_json_path_exists": [
                123
            ],
            "rawPayload_value_recursive": [
                72
            ],
            "errorMessage": [
                123
            ],
            "errorMessage_not": [
                123
            ],
            "errorMessage_in": [
                123
            ],
            "errorMessage_not_in": [
                123
            ],
            "errorMessage_contains": [
                123
            ],
            "errorMessage_not_contains": [
                123
            ],
            "errorMessage_starts_with": [
                123
            ],
            "errorMessage_not_starts_with": [
                123
            ],
            "errorMessage_ends_with": [
                123
            ],
            "errorMessage_not_ends_with": [
                123
            ],
            "description": [
                123
            ],
            "description_not": [
                123
            ],
            "description_in": [
                123
            ],
            "description_not_in": [
                123
            ],
            "description_contains": [
                123
            ],
            "description_not_contains": [
                123
            ],
            "description_starts_with": [
                123
            ],
            "description_not_starts_with": [
                123
            ],
            "description_ends_with": [
                123
            ],
            "description_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "release": [
                120
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "status": [
                97
            ],
            "status_not": [
                97
            ],
            "status_in": [
                97
            ],
            "status_not_in": [
                97
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationWhereUniqueInput": {
            "id": [
                67
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledRelease": {
            "stage": [
                122
            ],
            "documentInStages": [
                102,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "releaseAt": [
                39
            ],
            "isImplicit": [
                34
            ],
            "isActive": [
                34
            ],
            "errorMessage": [
                123
            ],
            "description": [
                123
            ],
            "title": [
                123
            ],
            "publishedAt": [
                39
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "id": [
                67
            ],
            "operations": [
                88,
                {
                    "where": [
                        100
                    ],
                    "orderBy": [
                        96
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "publishedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "updatedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "createdBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "status": [
                111
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseConnectInput": {
            "where": [
                121
            ],
            "position": [
                37
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                108
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseCreateInput": {
            "releaseAt": [
                39
            ],
            "isActive": [
                34
            ],
            "errorMessage": [
                123
            ],
            "description": [
                123
            ],
            "title": [
                123
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseCreateManyInlineInput": {
            "create": [
                105
            ],
            "connect": [
                121
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseCreateOneInlineInput": {
            "create": [
                105
            ],
            "connect": [
                121
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseEdge": {
            "node": [
                102
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                120
            ],
            "OR": [
                120
            ],
            "NOT": [
                120
            ],
            "releaseAt": [
                39
            ],
            "releaseAt_not": [
                39
            ],
            "releaseAt_in": [
                39
            ],
            "releaseAt_not_in": [
                39
            ],
            "releaseAt_lt": [
                39
            ],
            "releaseAt_lte": [
                39
            ],
            "releaseAt_gt": [
                39
            ],
            "releaseAt_gte": [
                39
            ],
            "isImplicit": [
                34
            ],
            "isImplicit_not": [
                34
            ],
            "isActive": [
                34
            ],
            "isActive_not": [
                34
            ],
            "errorMessage": [
                123
            ],
            "errorMessage_not": [
                123
            ],
            "errorMessage_in": [
                123
            ],
            "errorMessage_not_in": [
                123
            ],
            "errorMessage_contains": [
                123
            ],
            "errorMessage_not_contains": [
                123
            ],
            "errorMessage_starts_with": [
                123
            ],
            "errorMessage_not_starts_with": [
                123
            ],
            "errorMessage_ends_with": [
                123
            ],
            "errorMessage_not_ends_with": [
                123
            ],
            "description": [
                123
            ],
            "description_not": [
                123
            ],
            "description_in": [
                123
            ],
            "description_not_in": [
                123
            ],
            "description_contains": [
                123
            ],
            "description_not_contains": [
                123
            ],
            "description_starts_with": [
                123
            ],
            "description_not_starts_with": [
                123
            ],
            "description_ends_with": [
                123
            ],
            "description_not_ends_with": [
                123
            ],
            "title": [
                123
            ],
            "title_not": [
                123
            ],
            "title_in": [
                123
            ],
            "title_not_in": [
                123
            ],
            "title_contains": [
                123
            ],
            "title_not_contains": [
                123
            ],
            "title_starts_with": [
                123
            ],
            "title_not_starts_with": [
                123
            ],
            "title_ends_with": [
                123
            ],
            "title_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "operations_every": [
                100
            ],
            "operations_some": [
                100
            ],
            "operations_none": [
                100
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "status": [
                111
            ],
            "status_not": [
                111
            ],
            "status_in": [
                111
            ],
            "status_not_in": [
                111
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseOrderByInput": {},
        "ScheduledReleaseStatus": {},
        "ScheduledReleaseUpdateInput": {
            "releaseAt": [
                39
            ],
            "isActive": [
                34
            ],
            "errorMessage": [
                123
            ],
            "description": [
                123
            ],
            "title": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpdateManyInlineInput": {
            "create": [
                105
            ],
            "connect": [
                103
            ],
            "set": [
                121
            ],
            "update": [
                117
            ],
            "upsert": [
                119
            ],
            "disconnect": [
                121
            ],
            "delete": [
                121
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpdateManyInput": {
            "releaseAt": [
                39
            ],
            "isActive": [
                34
            ],
            "errorMessage": [
                123
            ],
            "description": [
                123
            ],
            "title": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpdateManyWithNestedWhereInput": {
            "where": [
                120
            ],
            "data": [
                114
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpdateOneInlineInput": {
            "create": [
                105
            ],
            "update": [
                117
            ],
            "upsert": [
                119
            ],
            "connect": [
                121
            ],
            "disconnect": [
                34
            ],
            "delete": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpdateWithNestedWhereUniqueInput": {
            "where": [
                121
            ],
            "data": [
                112
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpsertInput": {
            "create": [
                105
            ],
            "update": [
                112
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseUpsertWithNestedWhereUniqueInput": {
            "where": [
                121
            ],
            "data": [
                118
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                120
            ],
            "OR": [
                120
            ],
            "NOT": [
                120
            ],
            "releaseAt": [
                39
            ],
            "releaseAt_not": [
                39
            ],
            "releaseAt_in": [
                39
            ],
            "releaseAt_not_in": [
                39
            ],
            "releaseAt_lt": [
                39
            ],
            "releaseAt_lte": [
                39
            ],
            "releaseAt_gt": [
                39
            ],
            "releaseAt_gte": [
                39
            ],
            "isImplicit": [
                34
            ],
            "isImplicit_not": [
                34
            ],
            "isActive": [
                34
            ],
            "isActive_not": [
                34
            ],
            "errorMessage": [
                123
            ],
            "errorMessage_not": [
                123
            ],
            "errorMessage_in": [
                123
            ],
            "errorMessage_not_in": [
                123
            ],
            "errorMessage_contains": [
                123
            ],
            "errorMessage_not_contains": [
                123
            ],
            "errorMessage_starts_with": [
                123
            ],
            "errorMessage_not_starts_with": [
                123
            ],
            "errorMessage_ends_with": [
                123
            ],
            "errorMessage_not_ends_with": [
                123
            ],
            "description": [
                123
            ],
            "description_not": [
                123
            ],
            "description_in": [
                123
            ],
            "description_not_in": [
                123
            ],
            "description_contains": [
                123
            ],
            "description_not_contains": [
                123
            ],
            "description_starts_with": [
                123
            ],
            "description_not_starts_with": [
                123
            ],
            "description_ends_with": [
                123
            ],
            "description_not_ends_with": [
                123
            ],
            "title": [
                123
            ],
            "title_not": [
                123
            ],
            "title_in": [
                123
            ],
            "title_not_in": [
                123
            ],
            "title_contains": [
                123
            ],
            "title_not_contains": [
                123
            ],
            "title_starts_with": [
                123
            ],
            "title_not_starts_with": [
                123
            ],
            "title_ends_with": [
                123
            ],
            "title_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "operations_every": [
                100
            ],
            "operations_some": [
                100
            ],
            "operations_none": [
                100
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "status": [
                111
            ],
            "status_not": [
                111
            ],
            "status_in": [
                111
            ],
            "status_not_in": [
                111
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseWhereUniqueInput": {
            "id": [
                67
            ],
            "__typename": [
                123
            ]
        },
        "Stage": {},
        "String": {},
        "SystemDateTimeFieldVariation": {},
        "UnpublishLocaleInput": {
            "locale": [
                73
            ],
            "stages": [
                122
            ],
            "__typename": [
                123
            ]
        },
        "User": {
            "stage": [
                122
            ],
            "documentInStages": [
                126,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "isActive": [
                34
            ],
            "picture": [
                123
            ],
            "name": [
                123
            ],
            "publishedAt": [
                39
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "id": [
                67
            ],
            "kind": [
                132
            ],
            "__typename": [
                123
            ]
        },
        "UserConnectInput": {
            "where": [
                140
            ],
            "position": [
                37
            ],
            "__typename": [
                123
            ]
        },
        "UserConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                131
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                123
            ]
        },
        "UserCreateManyInlineInput": {
            "connect": [
                140
            ],
            "__typename": [
                123
            ]
        },
        "UserCreateOneInlineInput": {
            "connect": [
                140
            ],
            "__typename": [
                123
            ]
        },
        "UserEdge": {
            "node": [
                126
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "UserKind": {},
        "UserManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                138
            ],
            "OR": [
                138
            ],
            "NOT": [
                138
            ],
            "documentInStages_every": [
                139
            ],
            "documentInStages_some": [
                139
            ],
            "documentInStages_none": [
                139
            ],
            "isActive": [
                34
            ],
            "isActive_not": [
                34
            ],
            "picture": [
                123
            ],
            "picture_not": [
                123
            ],
            "picture_in": [
                123
            ],
            "picture_not_in": [
                123
            ],
            "picture_contains": [
                123
            ],
            "picture_not_contains": [
                123
            ],
            "picture_starts_with": [
                123
            ],
            "picture_not_starts_with": [
                123
            ],
            "picture_ends_with": [
                123
            ],
            "picture_not_ends_with": [
                123
            ],
            "name": [
                123
            ],
            "name_not": [
                123
            ],
            "name_in": [
                123
            ],
            "name_not_in": [
                123
            ],
            "name_contains": [
                123
            ],
            "name_not_contains": [
                123
            ],
            "name_starts_with": [
                123
            ],
            "name_not_starts_with": [
                123
            ],
            "name_ends_with": [
                123
            ],
            "name_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "kind": [
                132
            ],
            "kind_not": [
                132
            ],
            "kind_in": [
                132
            ],
            "kind_not_in": [
                132
            ],
            "__typename": [
                123
            ]
        },
        "UserOrderByInput": {},
        "UserUpdateManyInlineInput": {
            "connect": [
                127
            ],
            "set": [
                140
            ],
            "disconnect": [
                140
            ],
            "__typename": [
                123
            ]
        },
        "UserUpdateOneInlineInput": {
            "connect": [
                140
            ],
            "disconnect": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "UserWhereComparatorInput": {
            "outdated_to": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "UserWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                138
            ],
            "OR": [
                138
            ],
            "NOT": [
                138
            ],
            "documentInStages_every": [
                139
            ],
            "documentInStages_some": [
                139
            ],
            "documentInStages_none": [
                139
            ],
            "isActive": [
                34
            ],
            "isActive_not": [
                34
            ],
            "picture": [
                123
            ],
            "picture_not": [
                123
            ],
            "picture_in": [
                123
            ],
            "picture_not_in": [
                123
            ],
            "picture_contains": [
                123
            ],
            "picture_not_contains": [
                123
            ],
            "picture_starts_with": [
                123
            ],
            "picture_not_starts_with": [
                123
            ],
            "picture_ends_with": [
                123
            ],
            "picture_not_ends_with": [
                123
            ],
            "name": [
                123
            ],
            "name_not": [
                123
            ],
            "name_in": [
                123
            ],
            "name_not_in": [
                123
            ],
            "name_contains": [
                123
            ],
            "name_not_contains": [
                123
            ],
            "name_starts_with": [
                123
            ],
            "name_not_starts_with": [
                123
            ],
            "name_ends_with": [
                123
            ],
            "name_not_ends_with": [
                123
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "kind": [
                132
            ],
            "kind_not": [
                132
            ],
            "kind_in": [
                132
            ],
            "kind_not_in": [
                132
            ],
            "__typename": [
                123
            ]
        },
        "UserWhereStageInput": {
            "AND": [
                139
            ],
            "OR": [
                139
            ],
            "NOT": [
                139
            ],
            "stage": [
                122
            ],
            "compareWithParent": [
                137
            ],
            "__typename": [
                123
            ]
        },
        "UserWhereUniqueInput": {
            "id": [
                67
            ],
            "__typename": [
                123
            ]
        },
        "Version": {
            "id": [
                67
            ],
            "stage": [
                122
            ],
            "revision": [
                71
            ],
            "createdAt": [
                39
            ],
            "__typename": [
                123
            ]
        },
        "VersionWhereInput": {
            "id": [
                67
            ],
            "stage": [
                122
            ],
            "revision": [
                71
            ],
            "__typename": [
                123
            ]
        },
        "Works": {
            "stage": [
                122
            ],
            "documentInStages": [
                143,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        34,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        34,
                        "Boolean!"
                    ]
                }
            ],
            "publishedAt": [
                39
            ],
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "id": [
                67
            ],
            "slug": [
                123
            ],
            "stack": [
                123
            ],
            "description": [
                123
            ],
            "name": [
                123
            ],
            "githubUrl": [
                123
            ],
            "publishedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "updatedBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "createdBy": [
                126,
                {
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "bg": [
                1,
                {
                    "where": [
                        30
                    ],
                    "orderBy": [
                        12
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "scheduledIn": [
                88,
                {
                    "where": [
                        100
                    ],
                    "skip": [
                        71
                    ],
                    "after": [
                        123
                    ],
                    "before": [
                        123
                    ],
                    "first": [
                        71
                    ],
                    "last": [
                        71
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "forceParentLocale": [
                        34
                    ]
                }
            ],
            "history": [
                141,
                {
                    "limit": [
                        71,
                        "Int!"
                    ],
                    "skip": [
                        71,
                        "Int!"
                    ],
                    "stageOverride": [
                        122
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "WorksConnectInput": {
            "where": [
                163
            ],
            "position": [
                37
            ],
            "__typename": [
                123
            ]
        },
        "WorksConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                149
            ],
            "aggregate": [
                0
            ],
            "__typename": [
                123
            ]
        },
        "WorksCreateInput": {
            "updatedAt": [
                39
            ],
            "createdAt": [
                39
            ],
            "slug": [
                123
            ],
            "stack": [
                123
            ],
            "description": [
                123
            ],
            "name": [
                123
            ],
            "githubUrl": [
                123
            ],
            "bg": [
                8
            ],
            "__typename": [
                123
            ]
        },
        "WorksCreateManyInlineInput": {
            "create": [
                146
            ],
            "connect": [
                163
            ],
            "__typename": [
                123
            ]
        },
        "WorksCreateOneInlineInput": {
            "create": [
                146
            ],
            "connect": [
                163
            ],
            "__typename": [
                123
            ]
        },
        "WorksEdge": {
            "node": [
                143
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "WorksManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                161
            ],
            "OR": [
                161
            ],
            "NOT": [
                161
            ],
            "documentInStages_every": [
                162
            ],
            "documentInStages_some": [
                162
            ],
            "documentInStages_none": [
                162
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "slug": [
                123
            ],
            "slug_not": [
                123
            ],
            "slug_in": [
                123
            ],
            "slug_not_in": [
                123
            ],
            "slug_contains": [
                123
            ],
            "slug_not_contains": [
                123
            ],
            "slug_starts_with": [
                123
            ],
            "slug_not_starts_with": [
                123
            ],
            "slug_ends_with": [
                123
            ],
            "slug_not_ends_with": [
                123
            ],
            "stack": [
                123
            ],
            "stack_not": [
                123
            ],
            "stack_contains_all": [
                123
            ],
            "stack_contains_some": [
                123
            ],
            "stack_contains_none": [
                123
            ],
            "description": [
                123
            ],
            "description_not": [
                123
            ],
            "description_in": [
                123
            ],
            "description_not_in": [
                123
            ],
            "description_contains": [
                123
            ],
            "description_not_contains": [
                123
            ],
            "description_starts_with": [
                123
            ],
            "description_not_starts_with": [
                123
            ],
            "description_ends_with": [
                123
            ],
            "description_not_ends_with": [
                123
            ],
            "name": [
                123
            ],
            "name_not": [
                123
            ],
            "name_in": [
                123
            ],
            "name_not_in": [
                123
            ],
            "name_contains": [
                123
            ],
            "name_not_contains": [
                123
            ],
            "name_starts_with": [
                123
            ],
            "name_not_starts_with": [
                123
            ],
            "name_ends_with": [
                123
            ],
            "name_not_ends_with": [
                123
            ],
            "githubUrl": [
                123
            ],
            "githubUrl_not": [
                123
            ],
            "githubUrl_in": [
                123
            ],
            "githubUrl_not_in": [
                123
            ],
            "githubUrl_contains": [
                123
            ],
            "githubUrl_not_contains": [
                123
            ],
            "githubUrl_starts_with": [
                123
            ],
            "githubUrl_not_starts_with": [
                123
            ],
            "githubUrl_ends_with": [
                123
            ],
            "githubUrl_not_ends_with": [
                123
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "bg_every": [
                30
            ],
            "bg_some": [
                30
            ],
            "bg_none": [
                30
            ],
            "scheduledIn_every": [
                100
            ],
            "scheduledIn_some": [
                100
            ],
            "scheduledIn_none": [
                100
            ],
            "__typename": [
                123
            ]
        },
        "WorksOrderByInput": {},
        "WorksUpdateInput": {
            "slug": [
                123
            ],
            "stack": [
                123
            ],
            "description": [
                123
            ],
            "name": [
                123
            ],
            "githubUrl": [
                123
            ],
            "bg": [
                18
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpdateManyInlineInput": {
            "create": [
                146
            ],
            "connect": [
                144
            ],
            "set": [
                163
            ],
            "update": [
                157
            ],
            "upsert": [
                159
            ],
            "disconnect": [
                163
            ],
            "delete": [
                163
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpdateManyInput": {
            "stack": [
                123
            ],
            "description": [
                123
            ],
            "name": [
                123
            ],
            "githubUrl": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpdateManyWithNestedWhereInput": {
            "where": [
                161
            ],
            "data": [
                154
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpdateOneInlineInput": {
            "create": [
                146
            ],
            "update": [
                157
            ],
            "upsert": [
                159
            ],
            "connect": [
                163
            ],
            "disconnect": [
                34
            ],
            "delete": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpdateWithNestedWhereUniqueInput": {
            "where": [
                163
            ],
            "data": [
                152
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpsertInput": {
            "create": [
                146
            ],
            "update": [
                152
            ],
            "__typename": [
                123
            ]
        },
        "WorksUpsertWithNestedWhereUniqueInput": {
            "where": [
                163
            ],
            "data": [
                158
            ],
            "__typename": [
                123
            ]
        },
        "WorksWhereComparatorInput": {
            "outdated_to": [
                34
            ],
            "__typename": [
                123
            ]
        },
        "WorksWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                161
            ],
            "OR": [
                161
            ],
            "NOT": [
                161
            ],
            "documentInStages_every": [
                162
            ],
            "documentInStages_some": [
                162
            ],
            "documentInStages_none": [
                162
            ],
            "publishedAt": [
                39
            ],
            "publishedAt_not": [
                39
            ],
            "publishedAt_in": [
                39
            ],
            "publishedAt_not_in": [
                39
            ],
            "publishedAt_lt": [
                39
            ],
            "publishedAt_lte": [
                39
            ],
            "publishedAt_gt": [
                39
            ],
            "publishedAt_gte": [
                39
            ],
            "updatedAt": [
                39
            ],
            "updatedAt_not": [
                39
            ],
            "updatedAt_in": [
                39
            ],
            "updatedAt_not_in": [
                39
            ],
            "updatedAt_lt": [
                39
            ],
            "updatedAt_lte": [
                39
            ],
            "updatedAt_gt": [
                39
            ],
            "updatedAt_gte": [
                39
            ],
            "createdAt": [
                39
            ],
            "createdAt_not": [
                39
            ],
            "createdAt_in": [
                39
            ],
            "createdAt_not_in": [
                39
            ],
            "createdAt_lt": [
                39
            ],
            "createdAt_lte": [
                39
            ],
            "createdAt_gt": [
                39
            ],
            "createdAt_gte": [
                39
            ],
            "id": [
                67
            ],
            "id_not": [
                67
            ],
            "id_in": [
                67
            ],
            "id_not_in": [
                67
            ],
            "id_contains": [
                67
            ],
            "id_not_contains": [
                67
            ],
            "id_starts_with": [
                67
            ],
            "id_not_starts_with": [
                67
            ],
            "id_ends_with": [
                67
            ],
            "id_not_ends_with": [
                67
            ],
            "slug": [
                123
            ],
            "slug_not": [
                123
            ],
            "slug_in": [
                123
            ],
            "slug_not_in": [
                123
            ],
            "slug_contains": [
                123
            ],
            "slug_not_contains": [
                123
            ],
            "slug_starts_with": [
                123
            ],
            "slug_not_starts_with": [
                123
            ],
            "slug_ends_with": [
                123
            ],
            "slug_not_ends_with": [
                123
            ],
            "stack": [
                123
            ],
            "stack_not": [
                123
            ],
            "stack_contains_all": [
                123
            ],
            "stack_contains_some": [
                123
            ],
            "stack_contains_none": [
                123
            ],
            "description": [
                123
            ],
            "description_not": [
                123
            ],
            "description_in": [
                123
            ],
            "description_not_in": [
                123
            ],
            "description_contains": [
                123
            ],
            "description_not_contains": [
                123
            ],
            "description_starts_with": [
                123
            ],
            "description_not_starts_with": [
                123
            ],
            "description_ends_with": [
                123
            ],
            "description_not_ends_with": [
                123
            ],
            "name": [
                123
            ],
            "name_not": [
                123
            ],
            "name_in": [
                123
            ],
            "name_not_in": [
                123
            ],
            "name_contains": [
                123
            ],
            "name_not_contains": [
                123
            ],
            "name_starts_with": [
                123
            ],
            "name_not_starts_with": [
                123
            ],
            "name_ends_with": [
                123
            ],
            "name_not_ends_with": [
                123
            ],
            "githubUrl": [
                123
            ],
            "githubUrl_not": [
                123
            ],
            "githubUrl_in": [
                123
            ],
            "githubUrl_not_in": [
                123
            ],
            "githubUrl_contains": [
                123
            ],
            "githubUrl_not_contains": [
                123
            ],
            "githubUrl_starts_with": [
                123
            ],
            "githubUrl_not_starts_with": [
                123
            ],
            "githubUrl_ends_with": [
                123
            ],
            "githubUrl_not_ends_with": [
                123
            ],
            "publishedBy": [
                138
            ],
            "updatedBy": [
                138
            ],
            "createdBy": [
                138
            ],
            "bg_every": [
                30
            ],
            "bg_some": [
                30
            ],
            "bg_none": [
                30
            ],
            "scheduledIn_every": [
                100
            ],
            "scheduledIn_some": [
                100
            ],
            "scheduledIn_none": [
                100
            ],
            "__typename": [
                123
            ]
        },
        "WorksWhereStageInput": {
            "AND": [
                162
            ],
            "OR": [
                162
            ],
            "NOT": [
                162
            ],
            "stage": [
                122
            ],
            "compareWithParent": [
                160
            ],
            "__typename": [
                123
            ]
        },
        "WorksWhereUniqueInput": {
            "id": [
                67
            ],
            "slug": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "_FilterKind": {},
        "_MutationInputFieldKind": {},
        "_MutationKind": {},
        "_OrderDirection": {},
        "_RelationInputCardinality": {},
        "_RelationInputKind": {},
        "_RelationKind": {},
        "_SystemDateTimeFieldVariation": {}
    }
}