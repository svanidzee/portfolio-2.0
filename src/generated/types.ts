export default {
    "scalars": [
        8,
        33,
        55,
        59,
        60,
        61,
        65,
        66,
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
        "About": {
            "stage": [
                122
            ],
            "documentInStages": [
                0,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        55,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        55,
                        "Boolean!"
                    ]
                }
            ],
            "publishedAt": [
                60
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
            ],
            "id": [
                67
            ],
            "content1": [
                123
            ],
            "content2": [
                123
            ],
            "toolsTitle": [
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
                        55
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
                        55
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
                        55
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
                        55
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
        "AboutConnectInput": {
            "where": [
                20
            ],
            "position": [
                58
            ],
            "__typename": [
                123
            ]
        },
        "AboutConnection": {
            "pageInfo": [
                79
            ],
            "edges": [
                6
            ],
            "aggregate": [
                21
            ],
            "__typename": [
                123
            ]
        },
        "AboutCreateInput": {
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
            ],
            "content1": [
                123
            ],
            "content2": [
                123
            ],
            "toolsTitle": [
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
        "AboutCreateManyInlineInput": {
            "create": [
                3
            ],
            "connect": [
                20
            ],
            "__typename": [
                123
            ]
        },
        "AboutCreateOneInlineInput": {
            "create": [
                3
            ],
            "connect": [
                20
            ],
            "__typename": [
                123
            ]
        },
        "AboutEdge": {
            "node": [
                0
            ],
            "cursor": [
                123
            ],
            "__typename": [
                123
            ]
        },
        "AboutManyWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                18
            ],
            "OR": [
                18
            ],
            "NOT": [
                18
            ],
            "documentInStages_every": [
                19
            ],
            "documentInStages_some": [
                19
            ],
            "documentInStages_none": [
                19
            ],
            "publishedAt": [
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
            "content1": [
                123
            ],
            "content1_not": [
                123
            ],
            "content1_in": [
                123
            ],
            "content1_not_in": [
                123
            ],
            "content1_contains": [
                123
            ],
            "content1_not_contains": [
                123
            ],
            "content1_starts_with": [
                123
            ],
            "content1_not_starts_with": [
                123
            ],
            "content1_ends_with": [
                123
            ],
            "content1_not_ends_with": [
                123
            ],
            "content2": [
                123
            ],
            "content2_not": [
                123
            ],
            "content2_in": [
                123
            ],
            "content2_not_in": [
                123
            ],
            "content2_contains": [
                123
            ],
            "content2_not_contains": [
                123
            ],
            "content2_starts_with": [
                123
            ],
            "content2_not_starts_with": [
                123
            ],
            "content2_ends_with": [
                123
            ],
            "content2_not_ends_with": [
                123
            ],
            "toolsTitle": [
                123
            ],
            "toolsTitle_not": [
                123
            ],
            "toolsTitle_in": [
                123
            ],
            "toolsTitle_not_in": [
                123
            ],
            "toolsTitle_contains": [
                123
            ],
            "toolsTitle_not_contains": [
                123
            ],
            "toolsTitle_starts_with": [
                123
            ],
            "toolsTitle_not_starts_with": [
                123
            ],
            "toolsTitle_ends_with": [
                123
            ],
            "toolsTitle_not_ends_with": [
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
        "AboutOrderByInput": {},
        "AboutUpdateInput": {
            "content1": [
                123
            ],
            "content2": [
                123
            ],
            "toolsTitle": [
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
        "AboutUpdateManyInlineInput": {
            "create": [
                3
            ],
            "connect": [
                1
            ],
            "set": [
                20
            ],
            "update": [
                14
            ],
            "upsert": [
                16
            ],
            "disconnect": [
                20
            ],
            "delete": [
                20
            ],
            "__typename": [
                123
            ]
        },
        "AboutUpdateManyInput": {
            "content1": [
                123
            ],
            "content2": [
                123
            ],
            "toolsTitle": [
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
        "AboutUpdateManyWithNestedWhereInput": {
            "where": [
                18
            ],
            "data": [
                11
            ],
            "__typename": [
                123
            ]
        },
        "AboutUpdateOneInlineInput": {
            "create": [
                3
            ],
            "update": [
                14
            ],
            "upsert": [
                16
            ],
            "connect": [
                20
            ],
            "disconnect": [
                55
            ],
            "delete": [
                55
            ],
            "__typename": [
                123
            ]
        },
        "AboutUpdateWithNestedWhereUniqueInput": {
            "where": [
                20
            ],
            "data": [
                9
            ],
            "__typename": [
                123
            ]
        },
        "AboutUpsertInput": {
            "create": [
                3
            ],
            "update": [
                9
            ],
            "__typename": [
                123
            ]
        },
        "AboutUpsertWithNestedWhereUniqueInput": {
            "where": [
                20
            ],
            "data": [
                15
            ],
            "__typename": [
                123
            ]
        },
        "AboutWhereComparatorInput": {
            "outdated_to": [
                55
            ],
            "__typename": [
                123
            ]
        },
        "AboutWhereInput": {
            "_search": [
                123
            ],
            "AND": [
                18
            ],
            "OR": [
                18
            ],
            "NOT": [
                18
            ],
            "documentInStages_every": [
                19
            ],
            "documentInStages_some": [
                19
            ],
            "documentInStages_none": [
                19
            ],
            "publishedAt": [
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
            "content1": [
                123
            ],
            "content1_not": [
                123
            ],
            "content1_in": [
                123
            ],
            "content1_not_in": [
                123
            ],
            "content1_contains": [
                123
            ],
            "content1_not_contains": [
                123
            ],
            "content1_starts_with": [
                123
            ],
            "content1_not_starts_with": [
                123
            ],
            "content1_ends_with": [
                123
            ],
            "content1_not_ends_with": [
                123
            ],
            "content2": [
                123
            ],
            "content2_not": [
                123
            ],
            "content2_in": [
                123
            ],
            "content2_not_in": [
                123
            ],
            "content2_contains": [
                123
            ],
            "content2_not_contains": [
                123
            ],
            "content2_starts_with": [
                123
            ],
            "content2_not_starts_with": [
                123
            ],
            "content2_ends_with": [
                123
            ],
            "content2_not_ends_with": [
                123
            ],
            "toolsTitle": [
                123
            ],
            "toolsTitle_not": [
                123
            ],
            "toolsTitle_in": [
                123
            ],
            "toolsTitle_not_in": [
                123
            ],
            "toolsTitle_contains": [
                123
            ],
            "toolsTitle_not_contains": [
                123
            ],
            "toolsTitle_starts_with": [
                123
            ],
            "toolsTitle_not_starts_with": [
                123
            ],
            "toolsTitle_ends_with": [
                123
            ],
            "toolsTitle_not_ends_with": [
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
        "AboutWhereStageInput": {
            "AND": [
                19
            ],
            "OR": [
                19
            ],
            "NOT": [
                19
            ],
            "stage": [
                122
            ],
            "compareWithParent": [
                17
            ],
            "__typename": [
                123
            ]
        },
        "AboutWhereUniqueInput": {
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
                22,
                {
                    "locales": [
                        73,
                        "[Locale!]!"
                    ],
                    "includeCurrent": [
                        55,
                        "Boolean!"
                    ]
                }
            ],
            "documentInStages": [
                22,
                {
                    "stages": [
                        122,
                        "[Stage!]!"
                    ],
                    "includeCurrent": [
                        55,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        55,
                        "Boolean!"
                    ]
                }
            ],
            "mimeType": [
                123
            ],
            "size": [
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "publishedAt": [
                60,
                {
                    "variation": [
                        124,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "updatedAt": [
                60,
                {
                    "variation": [
                        124,
                        "SystemDateTimeFieldVariation!"
                    ]
                }
            ],
            "createdAt": [
                60,
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
                        55
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
                        55
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
                        55
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
                        55
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
                        55
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
                        34
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "AssetConnectInput": {
            "where": [
                53
            ],
            "position": [
                58
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
                31
            ],
            "aggregate": [
                21
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
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
            ],
            "bgWorks": [
                147
            ],
            "localizations": [
                28
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
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
            ],
            "fileName": [
                123
            ],
            "handle": [
                123
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateLocalizationInput": {
            "data": [
                26
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
                27
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateManyInlineInput": {
            "create": [
                25
            ],
            "connect": [
                53
            ],
            "__typename": [
                123
            ]
        },
        "AssetCreateOneInlineInput": {
            "create": [
                25
            ],
            "connect": [
                53
            ],
            "__typename": [
                123
            ]
        },
        "AssetEdge": {
            "node": [
                22
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
                51
            ],
            "OR": [
                51
            ],
            "NOT": [
                51
            ],
            "documentInStages_every": [
                52
            ],
            "documentInStages_some": [
                52
            ],
            "documentInStages_none": [
                52
            ],
            "publishedAt": [
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                63
            ],
            "validateOptions": [
                55
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
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
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
                38
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
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
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
                36
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
                27
            ],
            "update": [
                37
            ],
            "upsert": [
                48
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
                25
            ],
            "connect": [
                23
            ],
            "set": [
                53
            ],
            "update": [
                46
            ],
            "upsert": [
                49
            ],
            "disconnect": [
                53
            ],
            "delete": [
                53
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
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
            ],
            "fileName": [
                123
            ],
            "localizations": [
                43
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
                65
            ],
            "width": [
                65
            ],
            "height": [
                65
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
                41
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
                42
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateManyWithNestedWhereInput": {
            "where": [
                51
            ],
            "data": [
                40
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateOneInlineInput": {
            "create": [
                25
            ],
            "update": [
                46
            ],
            "upsert": [
                49
            ],
            "connect": [
                53
            ],
            "disconnect": [
                55
            ],
            "delete": [
                55
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpdateWithNestedWhereUniqueInput": {
            "where": [
                53
            ],
            "data": [
                35
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpsertInput": {
            "create": [
                25
            ],
            "update": [
                35
            ],
            "__typename": [
                123
            ]
        },
        "AssetUpsertLocalizationInput": {
            "update": [
                36
            ],
            "create": [
                26
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
                53
            ],
            "data": [
                47
            ],
            "__typename": [
                123
            ]
        },
        "AssetWhereComparatorInput": {
            "outdated_to": [
                55
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
                51
            ],
            "OR": [
                51
            ],
            "NOT": [
                51
            ],
            "documentInStages_every": [
                52
            ],
            "documentInStages_some": [
                52
            ],
            "documentInStages_none": [
                52
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
                65
            ],
            "size_not": [
                65
            ],
            "size_in": [
                65
            ],
            "size_not_in": [
                65
            ],
            "size_lt": [
                65
            ],
            "size_lte": [
                65
            ],
            "size_gt": [
                65
            ],
            "size_gte": [
                65
            ],
            "width": [
                65
            ],
            "width_not": [
                65
            ],
            "width_in": [
                65
            ],
            "width_not_in": [
                65
            ],
            "width_lt": [
                65
            ],
            "width_lte": [
                65
            ],
            "width_gt": [
                65
            ],
            "width_gte": [
                65
            ],
            "height": [
                65
            ],
            "height_not": [
                65
            ],
            "height_in": [
                65
            ],
            "height_not_in": [
                65
            ],
            "height_lt": [
                65
            ],
            "height_lte": [
                65
            ],
            "height_gt": [
                65
            ],
            "height_gte": [
                65
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                52
            ],
            "OR": [
                52
            ],
            "NOT": [
                52
            ],
            "stage": [
                122
            ],
            "compareWithParent": [
                50
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
                66
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
                66
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
                55
            ],
            "end": [
                55
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
                61
            ],
            "__typename": [
                123
            ]
        },
        "DocumentTransformationInput": {
            "output": [
                62
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
                60
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
                65
            ],
            "longitude": [
                65
            ],
            "distance": [
                65,
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
                65
            ],
            "longitude": [
                65
            ],
            "__typename": [
                123
            ]
        },
        "Long": {},
        "Mutation": {
            "createAbout": [
                0,
                {
                    "data": [
                        3,
                        "AboutCreateInput!"
                    ]
                }
            ],
            "updateAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ],
                    "data": [
                        9,
                        "AboutUpdateInput!"
                    ]
                }
            ],
            "deleteAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ]
                }
            ],
            "upsertAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ],
                    "upsert": [
                        15,
                        "AboutUpsertInput!"
                    ]
                }
            ],
            "publishAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "updateManyAbout_pageConnection": [
                2,
                {
                    "where": [
                        7
                    ],
                    "data": [
                        11,
                        "AboutUpdateManyInput!"
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
            "deleteManyAbout_pageConnection": [
                2,
                {
                    "where": [
                        7
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
            "publishManyAbout_pageConnection": [
                2,
                {
                    "where": [
                        7
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
            "unpublishManyAbout_pageConnection": [
                2,
                {
                    "where": [
                        7
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
            "updateManyAbout_page": [
                54,
                {
                    "where": [
                        7
                    ],
                    "data": [
                        11,
                        "AboutUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyAbout_page": [
                54,
                {
                    "where": [
                        7
                    ]
                }
            ],
            "publishManyAbout_page": [
                54,
                {
                    "where": [
                        7
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishManyAbout_page": [
                54,
                {
                    "where": [
                        7
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "schedulePublishAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        60
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "scheduleUnpublishAbout": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        60
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "createAsset": [
                22,
                {
                    "data": [
                        25,
                        "AssetCreateInput!"
                    ]
                }
            ],
            "updateAsset": [
                22,
                {
                    "where": [
                        53,
                        "AssetWhereUniqueInput!"
                    ],
                    "data": [
                        35,
                        "AssetUpdateInput!"
                    ]
                }
            ],
            "deleteAsset": [
                22,
                {
                    "where": [
                        53,
                        "AssetWhereUniqueInput!"
                    ]
                }
            ],
            "upsertAsset": [
                22,
                {
                    "where": [
                        53,
                        "AssetWhereUniqueInput!"
                    ],
                    "upsert": [
                        47,
                        "AssetUpsertInput!"
                    ]
                }
            ],
            "publishAsset": [
                22,
                {
                    "where": [
                        53,
                        "AssetWhereUniqueInput!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        55
                    ],
                    "withDefaultLocale": [
                        55
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ]
                }
            ],
            "unpublishAsset": [
                22,
                {
                    "where": [
                        53,
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
                        55
                    ]
                }
            ],
            "updateManyAssetsConnection": [
                24,
                {
                    "where": [
                        32
                    ],
                    "data": [
                        40,
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
                24,
                {
                    "where": [
                        32
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
                24,
                {
                    "where": [
                        32
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
                        55
                    ],
                    "withDefaultLocale": [
                        55
                    ]
                }
            ],
            "unpublishManyAssetsConnection": [
                24,
                {
                    "where": [
                        32
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
                        55
                    ]
                }
            ],
            "updateManyAssets": [
                54,
                {
                    "where": [
                        32
                    ],
                    "data": [
                        40,
                        "AssetUpdateManyInput!"
                    ]
                }
            ],
            "deleteManyAssets": [
                54,
                {
                    "where": [
                        32
                    ]
                }
            ],
            "publishManyAssets": [
                54,
                {
                    "where": [
                        32
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
                        55
                    ],
                    "withDefaultLocale": [
                        55
                    ]
                }
            ],
            "unpublishManyAssets": [
                54,
                {
                    "where": [
                        32
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
                        55
                    ]
                }
            ],
            "schedulePublishAsset": [
                22,
                {
                    "where": [
                        53,
                        "AssetWhereUniqueInput!"
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "publishBase": [
                        55
                    ],
                    "withDefaultLocale": [
                        55
                    ],
                    "to": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        60
                    ],
                    "releaseId": [
                        123
                    ]
                }
            ],
            "scheduleUnpublishAsset": [
                22,
                {
                    "where": [
                        53,
                        "AssetWhereUniqueInput!"
                    ],
                    "from": [
                        122,
                        "[Stage!]!"
                    ],
                    "releaseAt": [
                        60
                    ],
                    "releaseId": [
                        123
                    ],
                    "locales": [
                        73,
                        "[Locale!]"
                    ],
                    "unpublishBase": [
                        55
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
                54,
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
                54,
                {
                    "where": [
                        150
                    ]
                }
            ],
            "publishManyWork": [
                54,
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
                54,
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
                        60
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
                        60
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
            "on_About": [
                0
            ],
            "on_Asset": [
                22
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
                55
            ],
            "hasPreviousPage": [
                55
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
            "about_page": [
                0,
                {
                    "where": [
                        18
                    ],
                    "orderBy": [
                        8
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
            "about": [
                0,
                {
                    "where": [
                        20,
                        "AboutWhereUniqueInput!"
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
            "about_pageConnection": [
                2,
                {
                    "where": [
                        18
                    ],
                    "orderBy": [
                        8
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
            "aboutVersion": [
                64,
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
                22,
                {
                    "where": [
                        51
                    ],
                    "orderBy": [
                        33
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
                22,
                {
                    "where": [
                        53,
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
                24,
                {
                    "where": [
                        51
                    ],
                    "orderBy": [
                        33
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
                64,
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
                64,
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
                        55,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        55,
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
                60
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
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
                        55
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
                        55
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
                        55
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
                        55
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
                        55
                    ]
                }
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledOperationAffectedDocument": {
            "on_About": [
                0
            ],
            "on_Asset": [
                22
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
                58
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
                21
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                55
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                        55,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        55,
                        "Boolean!"
                    ]
                }
            ],
            "releaseAt": [
                60
            ],
            "isImplicit": [
                55
            ],
            "isActive": [
                55
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
                60
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
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
                        55
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
                        55
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
                        55
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
                        55
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
                58
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
                21
            ],
            "__typename": [
                123
            ]
        },
        "ScheduledReleaseCreateInput": {
            "releaseAt": [
                60
            ],
            "isActive": [
                55
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
                60
            ],
            "createdAt": [
                60
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
                60
            ],
            "releaseAt_not": [
                60
            ],
            "releaseAt_in": [
                60
            ],
            "releaseAt_not_in": [
                60
            ],
            "releaseAt_lt": [
                60
            ],
            "releaseAt_lte": [
                60
            ],
            "releaseAt_gt": [
                60
            ],
            "releaseAt_gte": [
                60
            ],
            "isImplicit": [
                55
            ],
            "isImplicit_not": [
                55
            ],
            "isActive": [
                55
            ],
            "isActive_not": [
                55
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                60
            ],
            "isActive": [
                55
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
                60
            ],
            "isActive": [
                55
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
                55
            ],
            "delete": [
                55
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
                60
            ],
            "releaseAt_not": [
                60
            ],
            "releaseAt_in": [
                60
            ],
            "releaseAt_not_in": [
                60
            ],
            "releaseAt_lt": [
                60
            ],
            "releaseAt_lte": [
                60
            ],
            "releaseAt_gt": [
                60
            ],
            "releaseAt_gte": [
                60
            ],
            "isImplicit": [
                55
            ],
            "isImplicit_not": [
                55
            ],
            "isActive": [
                55
            ],
            "isActive_not": [
                55
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                        55,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        55,
                        "Boolean!"
                    ]
                }
            ],
            "isActive": [
                55
            ],
            "picture": [
                123
            ],
            "name": [
                123
            ],
            "publishedAt": [
                60
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
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
                58
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
                21
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
                55
            ],
            "isActive_not": [
                55
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                55
            ],
            "__typename": [
                123
            ]
        },
        "UserWhereComparatorInput": {
            "outdated_to": [
                55
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
                55
            ],
            "isActive_not": [
                55
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
                60
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
                        55,
                        "Boolean!"
                    ],
                    "inheritLocale": [
                        55,
                        "Boolean!"
                    ]
                }
            ],
            "publishedAt": [
                60
            ],
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
            ],
            "id": [
                67
            ],
            "works": [
                123
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
                        55
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
                        55
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
                        55
                    ]
                }
            ],
            "bg": [
                22,
                {
                    "where": [
                        51
                    ],
                    "orderBy": [
                        33
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
                        55
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
                        55
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
                58
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
                21
            ],
            "__typename": [
                123
            ]
        },
        "WorksCreateInput": {
            "updatedAt": [
                60
            ],
            "createdAt": [
                60
            ],
            "works": [
                123
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
                29
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
            "works": [
                123
            ],
            "works_not": [
                123
            ],
            "works_in": [
                123
            ],
            "works_not_in": [
                123
            ],
            "works_contains": [
                123
            ],
            "works_not_contains": [
                123
            ],
            "works_starts_with": [
                123
            ],
            "works_not_starts_with": [
                123
            ],
            "works_ends_with": [
                123
            ],
            "works_not_ends_with": [
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
                51
            ],
            "bg_some": [
                51
            ],
            "bg_none": [
                51
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
            "works": [
                123
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
                39
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
            "works": [
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
                55
            ],
            "delete": [
                55
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
                55
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
                60
            ],
            "publishedAt_not": [
                60
            ],
            "publishedAt_in": [
                60
            ],
            "publishedAt_not_in": [
                60
            ],
            "publishedAt_lt": [
                60
            ],
            "publishedAt_lte": [
                60
            ],
            "publishedAt_gt": [
                60
            ],
            "publishedAt_gte": [
                60
            ],
            "updatedAt": [
                60
            ],
            "updatedAt_not": [
                60
            ],
            "updatedAt_in": [
                60
            ],
            "updatedAt_not_in": [
                60
            ],
            "updatedAt_lt": [
                60
            ],
            "updatedAt_lte": [
                60
            ],
            "updatedAt_gt": [
                60
            ],
            "updatedAt_gte": [
                60
            ],
            "createdAt": [
                60
            ],
            "createdAt_not": [
                60
            ],
            "createdAt_in": [
                60
            ],
            "createdAt_not_in": [
                60
            ],
            "createdAt_lt": [
                60
            ],
            "createdAt_lte": [
                60
            ],
            "createdAt_gt": [
                60
            ],
            "createdAt_gte": [
                60
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
            "works": [
                123
            ],
            "works_not": [
                123
            ],
            "works_in": [
                123
            ],
            "works_not_in": [
                123
            ],
            "works_contains": [
                123
            ],
            "works_not_contains": [
                123
            ],
            "works_starts_with": [
                123
            ],
            "works_not_starts_with": [
                123
            ],
            "works_ends_with": [
                123
            ],
            "works_not_ends_with": [
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
                51
            ],
            "bg_some": [
                51
            ],
            "bg_none": [
                51
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