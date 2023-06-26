// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    Boolean: boolean,
    Date: any,
    DateTime: any,
    Float: number,
    Hex: any,
    ID: string,
    Int: number,
    Json: any,
    Long: any,
    RGBAHue: any,
    RGBATransparency: any,
    RichTextAST: any,
    String: string,
}

export interface Aggregate {
    count: Scalars['Int']
    __typename: 'Aggregate'
}


/** Asset system model */
export interface Asset {
    /** System stage field */
    stage: Stage
    /** System Locale field */
    locale: Locale
    /** Get the other localizations for this document */
    localizations: Asset[]
    /** Get the document in other stages */
    documentInStages: Asset[]
    /** The mime type of the file */
    mimeType: (Scalars['String'] | null)
    /** The file size */
    size: (Scalars['Float'] | null)
    /** The file width */
    width: (Scalars['Float'] | null)
    /** The height of the file */
    height: (Scalars['Float'] | null)
    /** The file name */
    fileName: Scalars['String']
    /** The file handle */
    handle: Scalars['String']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt: (Scalars['DateTime'] | null)
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']
    /** The time the document was created */
    createdAt: Scalars['DateTime']
    /** The unique identifier */
    id: Scalars['ID']
    /** User that last published this document */
    publishedBy: (User | null)
    /** User that last updated this document */
    updatedBy: (User | null)
    /** User that created this document */
    createdBy: (User | null)
    bgWorks: Works[]
    scheduledIn: ScheduledOperation[]
    /** List of Asset versions */
    history: Version[]
    /** Get the url for the asset with provided transformations applied. */
    url: Scalars['String']
    __typename: 'Asset'
}


/** A connection to a list of items. */
export interface AssetConnection {
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges: AssetEdge[]
    aggregate: Aggregate
    __typename: 'AssetConnection'
}


/** An edge in a connection. */
export interface AssetEdge {
    /** The item at the end of the edge. */
    node: Asset
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'AssetEdge'
}

export type AssetOrderByInput = 'mimeType_ASC' | 'mimeType_DESC' | 'size_ASC' | 'size_DESC' | 'width_ASC' | 'width_DESC' | 'height_ASC' | 'height_DESC' | 'fileName_ASC' | 'fileName_DESC' | 'handle_ASC' | 'handle_DESC' | 'publishedAt_ASC' | 'publishedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC'

export interface BatchPayload {
    /** The number of nodes that have been affected by the Batch operation. */
    count: Scalars['Long']
    __typename: 'BatchPayload'
}


/** Representing a color value comprising of HEX, RGBA and css color values */
export interface Color {
    hex: Scalars['Hex']
    rgba: RGBA
    css: Scalars['String']
    __typename: 'Color'
}

export type DocumentFileTypes = 'jpg' | 'odp' | 'ods' | 'odt' | 'png' | 'svg' | 'txt' | 'webp' | 'docx' | 'pdf' | 'html' | 'doc' | 'xlsx' | 'xls' | 'pptx' | 'ppt'

export interface DocumentVersion {
    id: Scalars['ID']
    stage: Stage
    revision: Scalars['Int']
    createdAt: Scalars['DateTime']
    data: (Scalars['Json'] | null)
    __typename: 'DocumentVersion'
}

export type ImageFit = 'clip' | 'crop' | 'scale' | 'max'


/** Locale system enumeration */
export type Locale = 'en'


/** Representing a geolocation point with latitude and longitude */
export interface Location {
    latitude: Scalars['Float']
    longitude: Scalars['Float']
    distance: Scalars['Float']
    __typename: 'Location'
}

export interface Mutation {
    /**
     * @deprecated Asset mutations will be overhauled soon
     * Create one asset
     */
    createAsset: (Asset | null)
    /** Update one asset */
    updateAsset: (Asset | null)
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset: (Asset | null)
    /** Upsert one asset */
    upsertAsset: (Asset | null)
    /** Publish one asset */
    publishAsset: (Asset | null)
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset: (Asset | null)
    /** Update many Asset documents */
    updateManyAssetsConnection: AssetConnection
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection: AssetConnection
    /** Publish many Asset documents */
    publishManyAssetsConnection: AssetConnection
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection: AssetConnection
    /**
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     * Update many assets
     */
    updateManyAssets: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     * Delete many Asset documents
     */
    deleteManyAssets: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     * Publish many Asset documents
     */
    publishManyAssets: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     * Unpublish many Asset documents
     */
    unpublishManyAssets: BatchPayload
    /** Schedule to publish one asset */
    schedulePublishAsset: (Asset | null)
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset: (Asset | null)
    /** Delete and return scheduled operation */
    deleteScheduledOperation: (ScheduledOperation | null)
    /** Create one scheduledRelease */
    createScheduledRelease: (ScheduledRelease | null)
    /** Update one scheduledRelease */
    updateScheduledRelease: (ScheduledRelease | null)
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease: (ScheduledRelease | null)
    /** Create one page */
    createPage: (Page | null)
    /** Update one page */
    updatePage: (Page | null)
    /** Delete one page from _all_ existing stages. Returns deleted document. */
    deletePage: (Page | null)
    /** Upsert one page */
    upsertPage: (Page | null)
    /** Publish one page */
    publishPage: (Page | null)
    /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishPage: (Page | null)
    /** Update many Page documents */
    updateManyPagesConnection: PageConnection
    /** Delete many Page documents, return deleted documents */
    deleteManyPagesConnection: PageConnection
    /** Publish many Page documents */
    publishManyPagesConnection: PageConnection
    /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyPagesConnection: PageConnection
    /**
     * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
     * Update many pages
     */
    updateManyPages: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
     * Delete many Page documents
     */
    deleteManyPages: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
     * Publish many Page documents
     */
    publishManyPages: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
     * Unpublish many Page documents
     */
    unpublishManyPages: BatchPayload
    /** Schedule to publish one page */
    schedulePublishPage: (Page | null)
    /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishPage: (Page | null)
    /** Create one works */
    createWorks: (Works | null)
    /** Update one works */
    updateWorks: (Works | null)
    /** Delete one works from _all_ existing stages. Returns deleted document. */
    deleteWorks: (Works | null)
    /** Upsert one works */
    upsertWorks: (Works | null)
    /** Publish one works */
    publishWorks: (Works | null)
    /** Unpublish one works from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishWorks: (Works | null)
    /** Update many Works documents */
    updateManyWorkConnection: WorksConnection
    /** Delete many Works documents, return deleted documents */
    deleteManyWorkConnection: WorksConnection
    /** Publish many Works documents */
    publishManyWorkConnection: WorksConnection
    /** Find many Works documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyWorkConnection: WorksConnection
    /**
     * @deprecated Please use the new paginated many mutation (updateManyWorkConnection)
     * Update many work
     */
    updateManyWork: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (deleteManyWorkConnection)
     * Delete many Works documents
     */
    deleteManyWork: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (publishManyWorkConnection)
     * Publish many Works documents
     */
    publishManyWork: BatchPayload
    /**
     * @deprecated Please use the new paginated many mutation (unpublishManyWorkConnection)
     * Unpublish many Works documents
     */
    unpublishManyWork: BatchPayload
    /** Schedule to publish one works */
    schedulePublishWorks: (Works | null)
    /** Unpublish one works from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishWorks: (Works | null)
    __typename: 'Mutation'
}


/** An object with an ID */
export type Node = (Asset | Page | ScheduledOperation | ScheduledRelease | User | Works) & { __isUnion?: true }

export interface Page {
    /** System stage field */
    stage: Stage
    /** Get the document in other stages */
    documentInStages: Page[]
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt: (Scalars['DateTime'] | null)
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']
    /** The time the document was created */
    createdAt: Scalars['DateTime']
    /** The unique identifier */
    id: Scalars['ID']
    name: (Scalars['String'] | null)
    myName: (Scalars['String'] | null)
    myposition: (Scalars['String'] | null)
    aboutTitle: (Scalars['String'] | null)
    aboutContent: (Scalars['String'] | null)
    toolsTitle: (Scalars['String'] | null)
    toolsContent: (Scalars['String'] | null)
    hobbies: (Scalars['String'] | null)
    hobbiesTitle: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    stack: Scalars['String'][]
    /** User that last published this document */
    publishedBy: (User | null)
    /** User that last updated this document */
    updatedBy: (User | null)
    /** User that created this document */
    createdBy: (User | null)
    scheduledIn: ScheduledOperation[]
    /** List of Page versions */
    history: Version[]
    __typename: 'Page'
}


/** A connection to a list of items. */
export interface PageConnection {
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges: PageEdge[]
    aggregate: Aggregate
    __typename: 'PageConnection'
}


/** An edge in a connection. */
export interface PageEdge {
    /** The item at the end of the edge. */
    node: Page
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'PageEdge'
}


/** Information about pagination in a connection. */
export interface PageInfo {
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** Number of items in the current page. */
    pageSize: (Scalars['Int'] | null)
    __typename: 'PageInfo'
}

export type PageOrderByInput = 'publishedAt_ASC' | 'publishedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | 'name_ASC' | 'name_DESC' | 'myName_ASC' | 'myName_DESC' | 'myposition_ASC' | 'myposition_DESC' | 'aboutTitle_ASC' | 'aboutTitle_DESC' | 'aboutContent_ASC' | 'aboutContent_DESC' | 'toolsTitle_ASC' | 'toolsTitle_DESC' | 'toolsContent_ASC' | 'toolsContent_DESC' | 'hobbies_ASC' | 'hobbies_DESC' | 'hobbiesTitle_ASC' | 'hobbiesTitle_DESC' | 'slug_ASC' | 'slug_DESC' | 'stack_ASC' | 'stack_DESC'

export interface Query {
    /** Fetches an object given its ID */
    node: (Node | null)
    /** Retrieve multiple users */
    users: User[]
    /** Retrieve a single user */
    user: (User | null)
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection: UserConnection
    /** Retrieve multiple assets */
    assets: Asset[]
    /** Retrieve a single asset */
    asset: (Asset | null)
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection: AssetConnection
    /** Retrieve document version */
    assetVersion: (DocumentVersion | null)
    /** Retrieve multiple scheduledOperations */
    scheduledOperations: ScheduledOperation[]
    /** Retrieve a single scheduledOperation */
    scheduledOperation: (ScheduledOperation | null)
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection: ScheduledOperationConnection
    /** Retrieve multiple scheduledReleases */
    scheduledReleases: ScheduledRelease[]
    /** Retrieve a single scheduledRelease */
    scheduledRelease: (ScheduledRelease | null)
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection: ScheduledReleaseConnection
    /** Retrieve multiple pages */
    pages: Page[]
    /** Retrieve a single page */
    page: (Page | null)
    /** Retrieve multiple pages using the Relay connection interface */
    pagesConnection: PageConnection
    /** Retrieve document version */
    pageVersion: (DocumentVersion | null)
    /** Retrieve multiple work */
    work: Works[]
    /** Retrieve a single works */
    works: (Works | null)
    /** Retrieve multiple work using the Relay connection interface */
    workConnection: WorksConnection
    /** Retrieve document version */
    worksVersion: (DocumentVersion | null)
    __typename: 'Query'
}


/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RGBA {
    r: Scalars['RGBAHue']
    g: Scalars['RGBAHue']
    b: Scalars['RGBAHue']
    a: Scalars['RGBATransparency']
    __typename: 'RGBA'
}


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export interface RichText {
    /** Returns AST representation */
    raw: Scalars['RichTextAST']
    /** Returns HTMl representation */
    html: Scalars['String']
    /** Returns Markdown representation */
    markdown: Scalars['String']
    /** Returns plain-text contents of RichText */
    text: Scalars['String']
    __typename: 'RichText'
}


/** Scheduled Operation system model */
export interface ScheduledOperation {
    /** System stage field */
    stage: Stage
    /** Get the document in other stages */
    documentInStages: ScheduledOperation[]
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload: Scalars['Json']
    /** Operation error message */
    errorMessage: (Scalars['String'] | null)
    /** Operation description */
    description: (Scalars['String'] | null)
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt: (Scalars['DateTime'] | null)
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']
    /** The time the document was created */
    createdAt: Scalars['DateTime']
    /** The unique identifier */
    id: Scalars['ID']
    /** The release this operation is scheduled for */
    release: (ScheduledRelease | null)
    /** User that last published this document */
    publishedBy: (User | null)
    /** User that last updated this document */
    updatedBy: (User | null)
    /** User that created this document */
    createdBy: (User | null)
    /** operation Status */
    status: ScheduledOperationStatus
    affectedDocuments: ScheduledOperationAffectedDocument[]
    __typename: 'ScheduledOperation'
}

export type ScheduledOperationAffectedDocument = (Asset | Page | Works) & { __isUnion?: true }


/** A connection to a list of items. */
export interface ScheduledOperationConnection {
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges: ScheduledOperationEdge[]
    aggregate: Aggregate
    __typename: 'ScheduledOperationConnection'
}


/** An edge in a connection. */
export interface ScheduledOperationEdge {
    /** The item at the end of the edge. */
    node: ScheduledOperation
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ScheduledOperationEdge'
}

export type ScheduledOperationOrderByInput = 'errorMessage_ASC' | 'errorMessage_DESC' | 'description_ASC' | 'description_DESC' | 'publishedAt_ASC' | 'publishedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | 'status_ASC' | 'status_DESC'


/** System Scheduled Operation Status */
export type ScheduledOperationStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED' | 'CANCELED'


/** Scheduled Release system model */
export interface ScheduledRelease {
    /** System stage field */
    stage: Stage
    /** Get the document in other stages */
    documentInStages: ScheduledRelease[]
    /** Release date and time */
    releaseAt: (Scalars['DateTime'] | null)
    /** Whether scheduled release is implicit */
    isImplicit: Scalars['Boolean']
    /** Whether scheduled release should be run */
    isActive: Scalars['Boolean']
    /** Release error message */
    errorMessage: (Scalars['String'] | null)
    /** Release description */
    description: (Scalars['String'] | null)
    /** Release Title */
    title: (Scalars['String'] | null)
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt: (Scalars['DateTime'] | null)
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']
    /** The time the document was created */
    createdAt: Scalars['DateTime']
    /** The unique identifier */
    id: Scalars['ID']
    /** Operations to run with this release */
    operations: ScheduledOperation[]
    /** User that last published this document */
    publishedBy: (User | null)
    /** User that last updated this document */
    updatedBy: (User | null)
    /** User that created this document */
    createdBy: (User | null)
    /** Release Status */
    status: ScheduledReleaseStatus
    __typename: 'ScheduledRelease'
}


/** A connection to a list of items. */
export interface ScheduledReleaseConnection {
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges: ScheduledReleaseEdge[]
    aggregate: Aggregate
    __typename: 'ScheduledReleaseConnection'
}


/** An edge in a connection. */
export interface ScheduledReleaseEdge {
    /** The item at the end of the edge. */
    node: ScheduledRelease
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'ScheduledReleaseEdge'
}

export type ScheduledReleaseOrderByInput = 'releaseAt_ASC' | 'releaseAt_DESC' | 'isImplicit_ASC' | 'isImplicit_DESC' | 'isActive_ASC' | 'isActive_DESC' | 'errorMessage_ASC' | 'errorMessage_DESC' | 'description_ASC' | 'description_DESC' | 'title_ASC' | 'title_DESC' | 'publishedAt_ASC' | 'publishedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | 'status_ASC' | 'status_DESC'


/** System Scheduled Release Status */
export type ScheduledReleaseStatus = 'PENDING' | 'IN_PROGRESS' | 'COMPLETED' | 'FAILED'


/** Stage system enumeration */
export type Stage = 'DRAFT' | 'PUBLISHED'

export type SystemDateTimeFieldVariation = 'BASE' | 'LOCALIZATION' | 'COMBINED'


/** User system model */
export interface User {
    /** System stage field */
    stage: Stage
    /** Get the document in other stages */
    documentInStages: User[]
    /** Flag to determine if user is active or not */
    isActive: Scalars['Boolean']
    /** Profile Picture url */
    picture: (Scalars['String'] | null)
    /** The username */
    name: Scalars['String']
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt: (Scalars['DateTime'] | null)
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']
    /** The time the document was created */
    createdAt: Scalars['DateTime']
    /** The unique identifier */
    id: Scalars['ID']
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind: UserKind
    __typename: 'User'
}


/** A connection to a list of items. */
export interface UserConnection {
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges: UserEdge[]
    aggregate: Aggregate
    __typename: 'UserConnection'
}


/** An edge in a connection. */
export interface UserEdge {
    /** The item at the end of the edge. */
    node: User
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'UserEdge'
}


/** System User Kind */
export type UserKind = 'MEMBER' | 'PAT' | 'PUBLIC' | 'WEBHOOK'

export type UserOrderByInput = 'isActive_ASC' | 'isActive_DESC' | 'picture_ASC' | 'picture_DESC' | 'name_ASC' | 'name_DESC' | 'publishedAt_ASC' | 'publishedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | 'kind_ASC' | 'kind_DESC'

export interface Version {
    id: Scalars['ID']
    stage: Stage
    revision: Scalars['Int']
    createdAt: Scalars['DateTime']
    __typename: 'Version'
}

export interface Works {
    /** System stage field */
    stage: Stage
    /** Get the document in other stages */
    documentInStages: Works[]
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt: (Scalars['DateTime'] | null)
    /** The time the document was updated */
    updatedAt: Scalars['DateTime']
    /** The time the document was created */
    createdAt: Scalars['DateTime']
    /** The unique identifier */
    id: Scalars['ID']
    works: (Scalars['String'] | null)
    slug: (Scalars['String'] | null)
    stack: Scalars['String'][]
    description: (Scalars['String'] | null)
    name: (Scalars['String'] | null)
    githubUrl: (Scalars['String'] | null)
    /** User that last published this document */
    publishedBy: (User | null)
    /** User that last updated this document */
    updatedBy: (User | null)
    /** User that created this document */
    createdBy: (User | null)
    bg: Asset[]
    scheduledIn: ScheduledOperation[]
    /** List of Works versions */
    history: Version[]
    __typename: 'Works'
}


/** A connection to a list of items. */
export interface WorksConnection {
    /** Information to aid in pagination. */
    pageInfo: PageInfo
    /** A list of edges. */
    edges: WorksEdge[]
    aggregate: Aggregate
    __typename: 'WorksConnection'
}


/** An edge in a connection. */
export interface WorksEdge {
    /** The item at the end of the edge. */
    node: Works
    /** A cursor for use in pagination. */
    cursor: Scalars['String']
    __typename: 'WorksEdge'
}

export type WorksOrderByInput = 'publishedAt_ASC' | 'publishedAt_DESC' | 'updatedAt_ASC' | 'updatedAt_DESC' | 'createdAt_ASC' | 'createdAt_DESC' | 'id_ASC' | 'id_DESC' | 'works_ASC' | 'works_DESC' | 'slug_ASC' | 'slug_DESC' | 'stack_ASC' | 'stack_DESC' | 'description_ASC' | 'description_DESC' | 'name_ASC' | 'name_DESC' | 'githubUrl_ASC' | 'githubUrl_DESC'

export type _FilterKind = 'search' | 'AND' | 'OR' | 'NOT' | 'eq' | 'eq_not' | 'in' | 'not_in' | 'lt' | 'lte' | 'gt' | 'gte' | 'contains' | 'not_contains' | 'starts_with' | 'not_starts_with' | 'ends_with' | 'not_ends_with' | 'contains_all' | 'contains_some' | 'contains_none' | 'relational_single' | 'relational_every' | 'relational_some' | 'relational_none' | 'json_path_exists' | 'json_value_recursive' | 'union_empty' | 'union_single' | 'union_some' | 'union_every' | 'union_none'

export type _MutationInputFieldKind = 'scalar' | 'richText' | 'richTextWithEmbeds' | 'enum' | 'relation' | 'union' | 'virtual'

export type _MutationKind = 'create' | 'publish' | 'unpublish' | 'update' | 'upsert' | 'delete' | 'updateMany' | 'publishMany' | 'unpublishMany' | 'deleteMany' | 'schedulePublish' | 'scheduleUnpublish'

export type _OrderDirection = 'asc' | 'desc'

export type _RelationInputCardinality = 'one' | 'many'

export type _RelationInputKind = 'create' | 'update'

export type _RelationKind = 'regular' | 'union'

export type _SystemDateTimeFieldVariation = 'base' | 'localization' | 'combined'

export interface AggregateGenqlSelection{
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Asset system model */
export interface AssetGenqlSelection{
    /** System stage field */
    stage?: boolean | number
    /** System Locale field */
    locale?: boolean | number
    /** Get the other localizations for this document */
    localizations?: (AssetGenqlSelection & { __args: {
    /**
     * Potential locales that should be returned. 
     * 
     * The order of locales will also override locale fall-backing behaviour in the query's subtree.
     * 
     * Note any related model with localized fields in the query's subtree will be affected.
     * The first locale matching the provided list will be returned, localized entries that do not have the provided locale defined will be filtered out.
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     * 
     * Consider using this in conjunction with forceParentLocale on the children relation fields.
     */
    locales: Locale[], 
    /** Decides if the current locale should be included or not */
    includeCurrent: Scalars['Boolean']} })
    /** Get the document in other stages */
    documentInStages?: (AssetGenqlSelection & { __args: {
    /** Potential stages that should be returned */
    stages: Stage[], 
    /** Decides if the current stage should be included or not */
    includeCurrent: Scalars['Boolean'], 
    /** Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree */
    inheritLocale: Scalars['Boolean']} })
    /** The mime type of the file */
    mimeType?: boolean | number
    /** The file size */
    size?: boolean | number
    /** The file width */
    width?: boolean | number
    /** The height of the file */
    height?: boolean | number
    /** The file name */
    fileName?: boolean | number
    /** The file handle */
    handle?: boolean | number
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: { __args: {
    /** Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both */
    variation: SystemDateTimeFieldVariation} }
    /** The time the document was updated */
    updatedAt?: { __args: {
    /** Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both */
    variation: SystemDateTimeFieldVariation} }
    /** The time the document was created */
    createdAt?: { __args: {
    /** Variation of DateTime field to return, allows value from base document, current localization, or combined by returning the newer value of both */
    variation: SystemDateTimeFieldVariation} }
    /** The unique identifier */
    id?: boolean | number
    /** User that last published this document */
    publishedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last updated this document */
    updatedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that created this document */
    createdBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    bgWorks?: (WorksGenqlSelection & { __args?: {where?: (WorksWhereInput | null), orderBy?: (WorksOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `bgWorks` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `bgWorks` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    scheduledIn?: (ScheduledOperationGenqlSelection & { __args?: {where?: (ScheduledOperationWhereInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** List of Asset versions */
    history?: (VersionGenqlSelection & { __args: {limit: Scalars['Int'], skip: Scalars['Int'], 
    /** This is optional and can be used to fetch the document version history for a specific stage instead of the current one */
    stageOverride?: (Stage | null)} })
    /** Get the url for the asset with provided transformations applied. */
    url?: { __args: {transformation?: (AssetTransformationInput | null)} } | boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AssetConnectInput {
/** Document to connect */
where?: AssetWhereUniqueInput,
/** Allow to specify document position in list of connected documents, will default to appending at end of list */
position?: (ConnectPositionInput | null)}


/** A connection to a list of items. */
export interface AssetConnectionGenqlSelection{
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** A list of edges. */
    edges?: AssetEdgeGenqlSelection
    aggregate?: AggregateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface AssetCreateInput {mimeType?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),fileName?: Scalars['String'],handle?: Scalars['String'],updatedAt?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),bgWorks?: (WorksCreateManyInlineInput | null),
/** Inline mutations for managing document localizations excluding the default locale */
localizations?: (AssetCreateLocalizationsInput | null)}

export interface AssetCreateLocalizationDataInput {mimeType?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),fileName?: Scalars['String'],handle?: Scalars['String'],updatedAt?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null)}

export interface AssetCreateLocalizationInput {
/** Localization input */
data?: AssetCreateLocalizationDataInput,locale?: Locale}

export interface AssetCreateLocalizationsInput {
/** Create localizations for the newly-created document */
create?: (AssetCreateLocalizationInput[] | null)}

export interface AssetCreateManyInlineInput {
/** Create and connect multiple existing Asset documents */
create?: (AssetCreateInput[] | null),
/** Connect multiple existing Asset documents */
connect?: (AssetWhereUniqueInput[] | null)}

export interface AssetCreateOneInlineInput {
/** Create and connect one Asset document */
create?: (AssetCreateInput | null),
/** Connect one existing Asset document */
connect?: (AssetWhereUniqueInput | null)}


/** An edge in a connection. */
export interface AssetEdgeGenqlSelection{
    /** The item at the end of the edge. */
    node?: AssetGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identifies documents */
export interface AssetManyWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (AssetWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (AssetWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (AssetWhereInput[] | null),documentInStages_every?: (AssetWhereStageInput | null),documentInStages_some?: (AssetWhereStageInput | null),documentInStages_none?: (AssetWhereStageInput | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),bgWorks_every?: (WorksWhereInput | null),bgWorks_some?: (WorksWhereInput | null),bgWorks_none?: (WorksWhereInput | null),scheduledIn_every?: (ScheduledOperationWhereInput | null),scheduledIn_some?: (ScheduledOperationWhereInput | null),scheduledIn_none?: (ScheduledOperationWhereInput | null)}


/** Transformations for Assets */
export interface AssetTransformationInput {image?: (ImageTransformationInput | null),document?: (DocumentTransformationInput | null),
/** Pass true if you want to validate the passed transformation parameters */
validateOptions?: (Scalars['Boolean'] | null)}

export interface AssetUpdateInput {mimeType?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),fileName?: (Scalars['String'] | null),handle?: (Scalars['String'] | null),bgWorks?: (WorksUpdateManyInlineInput | null),
/** Manage document localizations */
localizations?: (AssetUpdateLocalizationsInput | null)}

export interface AssetUpdateLocalizationDataInput {mimeType?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),fileName?: (Scalars['String'] | null),handle?: (Scalars['String'] | null)}

export interface AssetUpdateLocalizationInput {data?: AssetUpdateLocalizationDataInput,locale?: Locale}

export interface AssetUpdateLocalizationsInput {
/** Localizations to create */
create?: (AssetCreateLocalizationInput[] | null),
/** Localizations to update */
update?: (AssetUpdateLocalizationInput[] | null),upsert?: (AssetUpsertLocalizationInput[] | null),
/** Localizations to delete */
delete?: (Locale[] | null)}

export interface AssetUpdateManyInlineInput {
/** Create and connect multiple Asset documents */
create?: (AssetCreateInput[] | null),
/** Connect multiple existing Asset documents */
connect?: (AssetConnectInput[] | null),
/** Override currently-connected documents with multiple existing Asset documents */
set?: (AssetWhereUniqueInput[] | null),
/** Update multiple Asset documents */
update?: (AssetUpdateWithNestedWhereUniqueInput[] | null),
/** Upsert multiple Asset documents */
upsert?: (AssetUpsertWithNestedWhereUniqueInput[] | null),
/** Disconnect multiple Asset documents */
disconnect?: (AssetWhereUniqueInput[] | null),
/** Delete multiple Asset documents */
delete?: (AssetWhereUniqueInput[] | null)}

export interface AssetUpdateManyInput {mimeType?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),fileName?: (Scalars['String'] | null),
/** Optional updates to localizations */
localizations?: (AssetUpdateManyLocalizationsInput | null)}

export interface AssetUpdateManyLocalizationDataInput {mimeType?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),fileName?: (Scalars['String'] | null)}

export interface AssetUpdateManyLocalizationInput {data?: AssetUpdateManyLocalizationDataInput,locale?: Locale}

export interface AssetUpdateManyLocalizationsInput {
/** Localizations to update */
update?: (AssetUpdateManyLocalizationInput[] | null)}

export interface AssetUpdateManyWithNestedWhereInput {
/** Document search */
where?: AssetWhereInput,
/** Update many input */
data?: AssetUpdateManyInput}

export interface AssetUpdateOneInlineInput {
/** Create and connect one Asset document */
create?: (AssetCreateInput | null),
/** Update single Asset document */
update?: (AssetUpdateWithNestedWhereUniqueInput | null),
/** Upsert single Asset document */
upsert?: (AssetUpsertWithNestedWhereUniqueInput | null),
/** Connect existing Asset document */
connect?: (AssetWhereUniqueInput | null),
/** Disconnect currently connected Asset document */
disconnect?: (Scalars['Boolean'] | null),
/** Delete currently connected Asset document */
delete?: (Scalars['Boolean'] | null)}

export interface AssetUpdateWithNestedWhereUniqueInput {
/** Unique document search */
where?: AssetWhereUniqueInput,
/** Document to update */
data?: AssetUpdateInput}

export interface AssetUpsertInput {
/** Create document if it didn't exist */
create?: AssetCreateInput,
/** Update document if it exists */
update?: AssetUpdateInput}

export interface AssetUpsertLocalizationInput {update?: AssetUpdateLocalizationDataInput,create?: AssetCreateLocalizationDataInput,locale?: Locale}

export interface AssetUpsertWithNestedWhereUniqueInput {
/** Unique document search */
where?: AssetWhereUniqueInput,
/** Upsert data */
data?: AssetUpsertInput}


/** This contains a set of filters that can be used to compare values internally */
export interface AssetWhereComparatorInput {
/** This field can be used to request to check if the entry is outdated by internal comparison */
outdated_to?: (Scalars['Boolean'] | null)}


/** Identifies documents */
export interface AssetWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (AssetWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (AssetWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (AssetWhereInput[] | null),documentInStages_every?: (AssetWhereStageInput | null),documentInStages_some?: (AssetWhereStageInput | null),documentInStages_none?: (AssetWhereStageInput | null),mimeType?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
mimeType_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
mimeType_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
mimeType_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
mimeType_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
mimeType_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
mimeType_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
mimeType_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
mimeType_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
mimeType_not_ends_with?: (Scalars['String'] | null),size?: (Scalars['Float'] | null),
/** Any other value that exists and is not equal to the given value. */
size_not?: (Scalars['Float'] | null),
/** All values that are contained in given list. */
size_in?: ((Scalars['Float'] | null)[] | null),
/** All values that are not contained in given list. */
size_not_in?: ((Scalars['Float'] | null)[] | null),
/** All values less than the given value. */
size_lt?: (Scalars['Float'] | null),
/** All values less than or equal the given value. */
size_lte?: (Scalars['Float'] | null),
/** All values greater than the given value. */
size_gt?: (Scalars['Float'] | null),
/** All values greater than or equal the given value. */
size_gte?: (Scalars['Float'] | null),width?: (Scalars['Float'] | null),
/** Any other value that exists and is not equal to the given value. */
width_not?: (Scalars['Float'] | null),
/** All values that are contained in given list. */
width_in?: ((Scalars['Float'] | null)[] | null),
/** All values that are not contained in given list. */
width_not_in?: ((Scalars['Float'] | null)[] | null),
/** All values less than the given value. */
width_lt?: (Scalars['Float'] | null),
/** All values less than or equal the given value. */
width_lte?: (Scalars['Float'] | null),
/** All values greater than the given value. */
width_gt?: (Scalars['Float'] | null),
/** All values greater than or equal the given value. */
width_gte?: (Scalars['Float'] | null),height?: (Scalars['Float'] | null),
/** Any other value that exists and is not equal to the given value. */
height_not?: (Scalars['Float'] | null),
/** All values that are contained in given list. */
height_in?: ((Scalars['Float'] | null)[] | null),
/** All values that are not contained in given list. */
height_not_in?: ((Scalars['Float'] | null)[] | null),
/** All values less than the given value. */
height_lt?: (Scalars['Float'] | null),
/** All values less than or equal the given value. */
height_lte?: (Scalars['Float'] | null),
/** All values greater than the given value. */
height_gt?: (Scalars['Float'] | null),
/** All values greater than or equal the given value. */
height_gte?: (Scalars['Float'] | null),fileName?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
fileName_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
fileName_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
fileName_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
fileName_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
fileName_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
fileName_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
fileName_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
fileName_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
fileName_not_ends_with?: (Scalars['String'] | null),handle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
handle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
handle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
handle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
handle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
handle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
handle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
handle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
handle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
handle_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),bgWorks_every?: (WorksWhereInput | null),bgWorks_some?: (WorksWhereInput | null),bgWorks_none?: (WorksWhereInput | null),scheduledIn_every?: (ScheduledOperationWhereInput | null),scheduledIn_some?: (ScheduledOperationWhereInput | null),scheduledIn_none?: (ScheduledOperationWhereInput | null)}


/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface AssetWhereStageInput {
/** Logical AND on all given filters. */
AND?: (AssetWhereStageInput[] | null),
/** Logical OR on all given filters. */
OR?: (AssetWhereStageInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (AssetWhereStageInput[] | null),
/** Specify the stage to compare with */
stage?: (Stage | null),
/** This field contains fields which can be set as true or false to specify an internal comparison */
compareWithParent?: (AssetWhereComparatorInput | null)}


/** References Asset record uniquely */
export interface AssetWhereUniqueInput {id?: (Scalars['ID'] | null)}

export interface BatchPayloadGenqlSelection{
    /** The number of nodes that have been affected by the Batch operation. */
    count?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Representing a color value comprising of HEX, RGBA and css color values */
export interface ColorGenqlSelection{
    hex?: boolean | number
    rgba?: RGBAGenqlSelection
    css?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Accepts either HEX or RGBA color value. At least one of hex or rgba value should be passed. If both are passed RGBA is used. */
export interface ColorInput {hex?: (Scalars['Hex'] | null),rgba?: (RGBAInput | null)}

export interface ConnectPositionInput {
/** Connect document after specified document */
after?: (Scalars['ID'] | null),
/** Connect document before specified document */
before?: (Scalars['ID'] | null),
/** Connect document at first position */
start?: (Scalars['Boolean'] | null),
/** Connect document at last position */
end?: (Scalars['Boolean'] | null)}

export interface DocumentOutputInput {
/**
 * Transforms a document into a desired file type.
 * See this matrix for format support:
 * 
 * PDF:	jpg, odp, ods, odt, png, svg, txt, and webp
 * DOC:	docx, html, jpg, odt, pdf, png, svg, txt, and webp
 * DOCX:	doc, html, jpg, odt, pdf, png, svg, txt, and webp
 * ODT:	doc, docx, html, jpg, pdf, png, svg, txt, and webp
 * XLS:	jpg, pdf, ods, png, svg, xlsx, and webp
 * XLSX:	jpg, pdf, ods, png, svg, xls, and webp
 * ODS:	jpg, pdf, png, xls, svg, xlsx, and webp
 * PPT:	jpg, odp, pdf, png, svg, pptx, and webp
 * PPTX:	jpg, odp, pdf, png, svg, ppt, and webp
 * ODP:	jpg, pdf, png, ppt, svg, pptx, and webp
 * BMP:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * GIF:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * JPG:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * PNG:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * WEBP:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * TIFF:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * AI:	    jpg, odp, ods, odt, pdf, png, svg, and webp
 * PSD:	jpg, odp, ods, odt, pdf, png, svg, and webp
 * SVG:	jpg, odp, ods, odt, pdf, png, and webp
 * HTML:	jpg, odt, pdf, svg, txt, and webp
 * TXT:	jpg, html, odt, pdf, svg, and webp
 */
format?: (DocumentFileTypes | null)}


/** Transformations for Documents */
export interface DocumentTransformationInput {
/** Changes the output for the file. */
output?: (DocumentOutputInput | null)}

export interface DocumentVersionGenqlSelection{
    id?: boolean | number
    stage?: boolean | number
    revision?: boolean | number
    createdAt?: boolean | number
    data?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ImageResizeInput {
/** The width in pixels to resize the image to. The value must be an integer from 1 to 10000. */
width?: (Scalars['Int'] | null),
/** The height in pixels to resize the image to. The value must be an integer from 1 to 10000. */
height?: (Scalars['Int'] | null),
/** The default value for the fit parameter is fit:clip. */
fit?: (ImageFit | null)}


/** Transformations for Images */
export interface ImageTransformationInput {
/** Resizes the image */
resize?: (ImageResizeInput | null)}


/** Representing a geolocation point with latitude and longitude */
export interface LocationGenqlSelection{
    latitude?: boolean | number
    longitude?: boolean | number
    distance?: { __args: {from: LocationInput} }
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for a geolocation point with latitude and longitude */
export interface LocationInput {latitude?: Scalars['Float'],longitude?: Scalars['Float']}

export interface MutationGenqlSelection{
    /**
     * @deprecated Asset mutations will be overhauled soon
     * Create one asset
     */
    createAsset?: (AssetGenqlSelection & { __args: {data: AssetCreateInput} })
    /** Update one asset */
    updateAsset?: (AssetGenqlSelection & { __args: {where: AssetWhereUniqueInput, data: AssetUpdateInput} })
    /** Delete one asset from _all_ existing stages. Returns deleted document. */
    deleteAsset?: (AssetGenqlSelection & { __args: {
    /** Document to delete */
    where: AssetWhereUniqueInput} })
    /** Upsert one asset */
    upsertAsset?: (AssetGenqlSelection & { __args: {where: AssetWhereUniqueInput, upsert: AssetUpsertInput} })
    /** Publish one asset */
    publishAsset?: (AssetGenqlSelection & { __args: {
    /** Document to publish */
    where: AssetWhereUniqueInput, 
    /** Optional localizations to publish */
    locales?: (Locale[] | null), 
    /** Whether to publish the base document */
    publishBase?: (Scalars['Boolean'] | null), 
    /** Whether to include the default locale when publishBase is set */
    withDefaultLocale?: (Scalars['Boolean'] | null), 
    /** Publishing target stage */
    to: Stage[]} })
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishAsset?: (AssetGenqlSelection & { __args: {
    /** Document to unpublish */
    where: AssetWhereUniqueInput, 
    /** Stages to unpublish document from */
    from: Stage[], 
    /** Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages */
    locales?: (Locale[] | null), 
    /** Unpublish complete document including default localization and relations from stages. Can be disabled. */
    unpublishBase?: (Scalars['Boolean'] | null)} })
    /** Update many Asset documents */
    updateManyAssetsConnection?: (AssetConnectionGenqlSelection & { __args: {
    /** Documents to apply update on */
    where?: (AssetManyWhereInput | null), 
    /** Updates to document content */
    data: AssetUpdateManyInput, skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Delete many Asset documents, return deleted documents */
    deleteManyAssetsConnection?: (AssetConnectionGenqlSelection & { __args?: {
    /** Documents to delete */
    where?: (AssetManyWhereInput | null), skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Publish many Asset documents */
    publishManyAssetsConnection?: (AssetConnectionGenqlSelection & { __args: {
    /** Identifies documents in each stage to be published */
    where?: (AssetManyWhereInput | null), 
    /** Stage to find matching documents in */
    from?: (Stage | null), 
    /** Stages to publish documents to */
    to: Stage[], skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null), 
    /** Document localizations to publish */
    locales?: (Locale[] | null), 
    /** Whether to publish the base document */
    publishBase?: (Scalars['Boolean'] | null), 
    /** Whether to include the default locale when publishBase is true */
    withDefaultLocale?: (Scalars['Boolean'] | null)} })
    /** Find many Asset documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyAssetsConnection?: (AssetConnectionGenqlSelection & { __args: {
    /** Identifies documents in draft stage */
    where?: (AssetManyWhereInput | null), 
    /** Stage to find matching documents in */
    stage?: (Stage | null), 
    /** Stages to unpublish documents from */
    from: Stage[], skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null), 
    /** Locales to unpublish */
    locales?: (Locale[] | null), 
    /** Whether to unpublish the base document and default localization */
    unpublishBase?: (Scalars['Boolean'] | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (updateManyAssetsConnection)
     * Update many assets
     */
    updateManyAssets?: (BatchPayloadGenqlSelection & { __args: {
    /** Documents to apply update on */
    where?: (AssetManyWhereInput | null), 
    /** Updates to document content */
    data: AssetUpdateManyInput} })
    /**
     * @deprecated Please use the new paginated many mutation (deleteManyAssetsConnection)
     * Delete many Asset documents
     */
    deleteManyAssets?: (BatchPayloadGenqlSelection & { __args?: {
    /** Documents to delete */
    where?: (AssetManyWhereInput | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (publishManyAssetsConnection)
     * Publish many Asset documents
     */
    publishManyAssets?: (BatchPayloadGenqlSelection & { __args: {
    /** Identifies documents in each stage to be published */
    where?: (AssetManyWhereInput | null), 
    /** Stages to publish documents to */
    to: Stage[], 
    /** Document localizations to publish */
    locales?: (Locale[] | null), 
    /** Whether to publish the base document */
    publishBase?: (Scalars['Boolean'] | null), 
    /** Whether to include the default locale when publishBase is true */
    withDefaultLocale?: (Scalars['Boolean'] | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (unpublishManyAssetsConnection)
     * Unpublish many Asset documents
     */
    unpublishManyAssets?: (BatchPayloadGenqlSelection & { __args: {
    /** Identifies documents in each stage */
    where?: (AssetManyWhereInput | null), 
    /** Stages to unpublish documents from */
    from: Stage[], 
    /** Locales to unpublish */
    locales?: (Locale[] | null), 
    /** Whether to unpublish the base document and default localization */
    unpublishBase?: (Scalars['Boolean'] | null)} })
    /** Schedule to publish one asset */
    schedulePublishAsset?: (AssetGenqlSelection & { __args: {
    /** Document to publish */
    where: AssetWhereUniqueInput, 
    /** Optional localizations to publish */
    locales?: (Locale[] | null), 
    /** Whether to publish the base document */
    publishBase?: (Scalars['Boolean'] | null), 
    /** Whether to include the default locale when publishBase is set */
    withDefaultLocale?: (Scalars['Boolean'] | null), 
    /** Publishing target stage */
    to: Stage[], 
    /** Release at point in time, will create new release containing this operation */
    releaseAt?: (Scalars['DateTime'] | null), 
    /** Optionally attach this scheduled operation to an existing release */
    releaseId?: (Scalars['String'] | null)} })
    /** Unpublish one asset from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishAsset?: (AssetGenqlSelection & { __args: {
    /** Document to unpublish */
    where: AssetWhereUniqueInput, 
    /** Stages to unpublish document from */
    from: Stage[], 
    /** Release at point in time, will create new release containing this operation */
    releaseAt?: (Scalars['DateTime'] | null), 
    /** Optionally attach this scheduled operation to an existing release */
    releaseId?: (Scalars['String'] | null), 
    /** Optional locales to unpublish. Unpublishing the default locale will completely remove the document from the selected stages */
    locales?: (Locale[] | null), 
    /** Unpublish complete document including default localization and relations from stages. Can be disabled. */
    unpublishBase?: (Scalars['Boolean'] | null)} })
    /** Delete and return scheduled operation */
    deleteScheduledOperation?: (ScheduledOperationGenqlSelection & { __args: {
    /** Document to delete */
    where: ScheduledOperationWhereUniqueInput} })
    /** Create one scheduledRelease */
    createScheduledRelease?: (ScheduledReleaseGenqlSelection & { __args: {data: ScheduledReleaseCreateInput} })
    /** Update one scheduledRelease */
    updateScheduledRelease?: (ScheduledReleaseGenqlSelection & { __args: {where: ScheduledReleaseWhereUniqueInput, data: ScheduledReleaseUpdateInput} })
    /** Delete one scheduledRelease from _all_ existing stages. Returns deleted document. */
    deleteScheduledRelease?: (ScheduledReleaseGenqlSelection & { __args: {
    /** Document to delete */
    where: ScheduledReleaseWhereUniqueInput} })
    /** Create one page */
    createPage?: (PageGenqlSelection & { __args: {data: PageCreateInput} })
    /** Update one page */
    updatePage?: (PageGenqlSelection & { __args: {where: PageWhereUniqueInput, data: PageUpdateInput} })
    /** Delete one page from _all_ existing stages. Returns deleted document. */
    deletePage?: (PageGenqlSelection & { __args: {
    /** Document to delete */
    where: PageWhereUniqueInput} })
    /** Upsert one page */
    upsertPage?: (PageGenqlSelection & { __args: {where: PageWhereUniqueInput, upsert: PageUpsertInput} })
    /** Publish one page */
    publishPage?: (PageGenqlSelection & { __args: {
    /** Document to publish */
    where: PageWhereUniqueInput, 
    /** Publishing target stage */
    to: Stage[]} })
    /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishPage?: (PageGenqlSelection & { __args: {
    /** Document to unpublish */
    where: PageWhereUniqueInput, 
    /** Stages to unpublish document from */
    from: Stage[]} })
    /** Update many Page documents */
    updateManyPagesConnection?: (PageConnectionGenqlSelection & { __args: {
    /** Documents to apply update on */
    where?: (PageManyWhereInput | null), 
    /** Updates to document content */
    data: PageUpdateManyInput, skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Delete many Page documents, return deleted documents */
    deleteManyPagesConnection?: (PageConnectionGenqlSelection & { __args?: {
    /** Documents to delete */
    where?: (PageManyWhereInput | null), skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Publish many Page documents */
    publishManyPagesConnection?: (PageConnectionGenqlSelection & { __args: {
    /** Identifies documents in each stage to be published */
    where?: (PageManyWhereInput | null), 
    /** Stage to find matching documents in */
    from?: (Stage | null), 
    /** Stages to publish documents to */
    to: Stage[], skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Find many Page documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyPagesConnection?: (PageConnectionGenqlSelection & { __args: {
    /** Identifies documents in draft stage */
    where?: (PageManyWhereInput | null), 
    /** Stage to find matching documents in */
    stage?: (Stage | null), 
    /** Stages to unpublish documents from */
    from: Stage[], skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (updateManyPagesConnection)
     * Update many pages
     */
    updateManyPages?: (BatchPayloadGenqlSelection & { __args: {
    /** Documents to apply update on */
    where?: (PageManyWhereInput | null), 
    /** Updates to document content */
    data: PageUpdateManyInput} })
    /**
     * @deprecated Please use the new paginated many mutation (deleteManyPagesConnection)
     * Delete many Page documents
     */
    deleteManyPages?: (BatchPayloadGenqlSelection & { __args?: {
    /** Documents to delete */
    where?: (PageManyWhereInput | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (publishManyPagesConnection)
     * Publish many Page documents
     */
    publishManyPages?: (BatchPayloadGenqlSelection & { __args: {
    /** Identifies documents in each stage to be published */
    where?: (PageManyWhereInput | null), 
    /** Stages to publish documents to */
    to: Stage[]} })
    /**
     * @deprecated Please use the new paginated many mutation (unpublishManyPagesConnection)
     * Unpublish many Page documents
     */
    unpublishManyPages?: (BatchPayloadGenqlSelection & { __args: {
    /** Identifies documents in each stage */
    where?: (PageManyWhereInput | null), 
    /** Stages to unpublish documents from */
    from: Stage[]} })
    /** Schedule to publish one page */
    schedulePublishPage?: (PageGenqlSelection & { __args: {
    /** Document to publish */
    where: PageWhereUniqueInput, 
    /** Publishing target stage */
    to: Stage[], 
    /** Release at point in time, will create new release containing this operation */
    releaseAt?: (Scalars['DateTime'] | null), 
    /** Optionally attach this scheduled operation to an existing release */
    releaseId?: (Scalars['String'] | null)} })
    /** Unpublish one page from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishPage?: (PageGenqlSelection & { __args: {
    /** Document to unpublish */
    where: PageWhereUniqueInput, 
    /** Stages to unpublish document from */
    from: Stage[], 
    /** Release at point in time, will create new release containing this operation */
    releaseAt?: (Scalars['DateTime'] | null), 
    /** Optionally attach this scheduled operation to an existing release */
    releaseId?: (Scalars['String'] | null)} })
    /** Create one works */
    createWorks?: (WorksGenqlSelection & { __args: {data: WorksCreateInput} })
    /** Update one works */
    updateWorks?: (WorksGenqlSelection & { __args: {where: WorksWhereUniqueInput, data: WorksUpdateInput} })
    /** Delete one works from _all_ existing stages. Returns deleted document. */
    deleteWorks?: (WorksGenqlSelection & { __args: {
    /** Document to delete */
    where: WorksWhereUniqueInput} })
    /** Upsert one works */
    upsertWorks?: (WorksGenqlSelection & { __args: {where: WorksWhereUniqueInput, upsert: WorksUpsertInput} })
    /** Publish one works */
    publishWorks?: (WorksGenqlSelection & { __args: {
    /** Document to publish */
    where: WorksWhereUniqueInput, 
    /** Publishing target stage */
    to: Stage[]} })
    /** Unpublish one works from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    unpublishWorks?: (WorksGenqlSelection & { __args: {
    /** Document to unpublish */
    where: WorksWhereUniqueInput, 
    /** Stages to unpublish document from */
    from: Stage[]} })
    /** Update many Works documents */
    updateManyWorkConnection?: (WorksConnectionGenqlSelection & { __args: {
    /** Documents to apply update on */
    where?: (WorksManyWhereInput | null), 
    /** Updates to document content */
    data: WorksUpdateManyInput, skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Delete many Works documents, return deleted documents */
    deleteManyWorkConnection?: (WorksConnectionGenqlSelection & { __args?: {
    /** Documents to delete */
    where?: (WorksManyWhereInput | null), skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Publish many Works documents */
    publishManyWorkConnection?: (WorksConnectionGenqlSelection & { __args: {
    /** Identifies documents in each stage to be published */
    where?: (WorksManyWhereInput | null), 
    /** Stage to find matching documents in */
    from?: (Stage | null), 
    /** Stages to publish documents to */
    to: Stage[], skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /** Find many Works documents that match criteria in specified stage and unpublish from target stages */
    unpublishManyWorkConnection?: (WorksConnectionGenqlSelection & { __args: {
    /** Identifies documents in draft stage */
    where?: (WorksManyWhereInput | null), 
    /** Stage to find matching documents in */
    stage?: (Stage | null), 
    /** Stages to unpublish documents from */
    from: Stage[], skip?: (Scalars['Int'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), before?: (Scalars['ID'] | null), after?: (Scalars['ID'] | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (updateManyWorkConnection)
     * Update many work
     */
    updateManyWork?: (BatchPayloadGenqlSelection & { __args: {
    /** Documents to apply update on */
    where?: (WorksManyWhereInput | null), 
    /** Updates to document content */
    data: WorksUpdateManyInput} })
    /**
     * @deprecated Please use the new paginated many mutation (deleteManyWorkConnection)
     * Delete many Works documents
     */
    deleteManyWork?: (BatchPayloadGenqlSelection & { __args?: {
    /** Documents to delete */
    where?: (WorksManyWhereInput | null)} })
    /**
     * @deprecated Please use the new paginated many mutation (publishManyWorkConnection)
     * Publish many Works documents
     */
    publishManyWork?: (BatchPayloadGenqlSelection & { __args: {
    /** Identifies documents in each stage to be published */
    where?: (WorksManyWhereInput | null), 
    /** Stages to publish documents to */
    to: Stage[]} })
    /**
     * @deprecated Please use the new paginated many mutation (unpublishManyWorkConnection)
     * Unpublish many Works documents
     */
    unpublishManyWork?: (BatchPayloadGenqlSelection & { __args: {
    /** Identifies documents in each stage */
    where?: (WorksManyWhereInput | null), 
    /** Stages to unpublish documents from */
    from: Stage[]} })
    /** Schedule to publish one works */
    schedulePublishWorks?: (WorksGenqlSelection & { __args: {
    /** Document to publish */
    where: WorksWhereUniqueInput, 
    /** Publishing target stage */
    to: Stage[], 
    /** Release at point in time, will create new release containing this operation */
    releaseAt?: (Scalars['DateTime'] | null), 
    /** Optionally attach this scheduled operation to an existing release */
    releaseId?: (Scalars['String'] | null)} })
    /** Unpublish one works from selected stages. Unpublish either the complete document with its relations, localizations and base data or specific localizations only. */
    scheduleUnpublishWorks?: (WorksGenqlSelection & { __args: {
    /** Document to unpublish */
    where: WorksWhereUniqueInput, 
    /** Stages to unpublish document from */
    from: Stage[], 
    /** Release at point in time, will create new release containing this operation */
    releaseAt?: (Scalars['DateTime'] | null), 
    /** Optionally attach this scheduled operation to an existing release */
    releaseId?: (Scalars['String'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An object with an ID */
export interface NodeGenqlSelection{
    /** The id of the object. */
    id?: boolean | number
    /** The Stage of an object */
    stage?: boolean | number
    on_Asset?: AssetGenqlSelection
    on_Page?: PageGenqlSelection
    on_ScheduledOperation?: ScheduledOperationGenqlSelection
    on_ScheduledRelease?: ScheduledReleaseGenqlSelection
    on_User?: UserGenqlSelection
    on_Works?: WorksGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageGenqlSelection{
    /** System stage field */
    stage?: boolean | number
    /** Get the document in other stages */
    documentInStages?: (PageGenqlSelection & { __args: {
    /** Potential stages that should be returned */
    stages: Stage[], 
    /** Decides if the current stage should be included or not */
    includeCurrent: Scalars['Boolean'], 
    /** Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree */
    inheritLocale: Scalars['Boolean']} })
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: boolean | number
    /** The time the document was updated */
    updatedAt?: boolean | number
    /** The time the document was created */
    createdAt?: boolean | number
    /** The unique identifier */
    id?: boolean | number
    name?: boolean | number
    myName?: boolean | number
    myposition?: boolean | number
    aboutTitle?: boolean | number
    aboutContent?: boolean | number
    toolsTitle?: boolean | number
    toolsContent?: boolean | number
    hobbies?: boolean | number
    hobbiesTitle?: boolean | number
    slug?: boolean | number
    stack?: boolean | number
    /** User that last published this document */
    publishedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last updated this document */
    updatedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that created this document */
    createdBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    scheduledIn?: (ScheduledOperationGenqlSelection & { __args?: {where?: (ScheduledOperationWhereInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** List of Page versions */
    history?: (VersionGenqlSelection & { __args: {limit: Scalars['Int'], skip: Scalars['Int'], 
    /** This is optional and can be used to fetch the document version history for a specific stage instead of the current one */
    stageOverride?: (Stage | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageConnectInput {
/** Document to connect */
where?: PageWhereUniqueInput,
/** Allow to specify document position in list of connected documents, will default to appending at end of list */
position?: (ConnectPositionInput | null)}


/** A connection to a list of items. */
export interface PageConnectionGenqlSelection{
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** A list of edges. */
    edges?: PageEdgeGenqlSelection
    aggregate?: AggregateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface PageCreateInput {updatedAt?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),name?: (Scalars['String'] | null),myName?: (Scalars['String'] | null),myposition?: (Scalars['String'] | null),aboutTitle?: (Scalars['String'] | null),aboutContent?: (Scalars['String'] | null),toolsTitle?: (Scalars['String'] | null),toolsContent?: (Scalars['String'] | null),hobbies?: (Scalars['String'] | null),hobbiesTitle?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),stack?: (Scalars['String'][] | null)}

export interface PageCreateManyInlineInput {
/** Create and connect multiple existing Page documents */
create?: (PageCreateInput[] | null),
/** Connect multiple existing Page documents */
connect?: (PageWhereUniqueInput[] | null)}

export interface PageCreateOneInlineInput {
/** Create and connect one Page document */
create?: (PageCreateInput | null),
/** Connect one existing Page document */
connect?: (PageWhereUniqueInput | null)}


/** An edge in a connection. */
export interface PageEdgeGenqlSelection{
    /** The item at the end of the edge. */
    node?: PageGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about pagination in a connection. */
export interface PageInfoGenqlSelection{
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** Number of items in the current page. */
    pageSize?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identifies documents */
export interface PageManyWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (PageWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (PageWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (PageWhereInput[] | null),documentInStages_every?: (PageWhereStageInput | null),documentInStages_some?: (PageWhereStageInput | null),documentInStages_none?: (PageWhereStageInput | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),name?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
name_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
name_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
name_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
name_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
name_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
name_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
name_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
name_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
name_not_ends_with?: (Scalars['String'] | null),myName?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
myName_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
myName_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
myName_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
myName_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
myName_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
myName_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
myName_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
myName_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
myName_not_ends_with?: (Scalars['String'] | null),myposition?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
myposition_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
myposition_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
myposition_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
myposition_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
myposition_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
myposition_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
myposition_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
myposition_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
myposition_not_ends_with?: (Scalars['String'] | null),aboutTitle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
aboutTitle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
aboutTitle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
aboutTitle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
aboutTitle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
aboutTitle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
aboutTitle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
aboutTitle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
aboutTitle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
aboutTitle_not_ends_with?: (Scalars['String'] | null),aboutContent?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
aboutContent_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
aboutContent_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
aboutContent_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
aboutContent_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
aboutContent_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
aboutContent_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
aboutContent_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
aboutContent_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
aboutContent_not_ends_with?: (Scalars['String'] | null),toolsTitle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
toolsTitle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
toolsTitle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
toolsTitle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
toolsTitle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
toolsTitle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
toolsTitle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
toolsTitle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
toolsTitle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
toolsTitle_not_ends_with?: (Scalars['String'] | null),toolsContent?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
toolsContent_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
toolsContent_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
toolsContent_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
toolsContent_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
toolsContent_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
toolsContent_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
toolsContent_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
toolsContent_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
toolsContent_not_ends_with?: (Scalars['String'] | null),hobbies?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
hobbies_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
hobbies_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
hobbies_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
hobbies_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
hobbies_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
hobbies_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
hobbies_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
hobbies_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
hobbies_not_ends_with?: (Scalars['String'] | null),hobbiesTitle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
hobbiesTitle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
hobbiesTitle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
hobbiesTitle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
hobbiesTitle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
hobbiesTitle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
hobbiesTitle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
hobbiesTitle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
hobbiesTitle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
hobbiesTitle_not_ends_with?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
slug_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
slug_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
slug_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
slug_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
slug_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
slug_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
slug_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
slug_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
slug_not_ends_with?: (Scalars['String'] | null),
/** Matches if the field array contains *all* items provided to the filter and order does match */
stack?: (Scalars['String'][] | null),
/** Matches if the field array does not contains *all* items provided to the filter or order does not match */
stack_not?: (Scalars['String'][] | null),
/** Matches if the field array contains *all* items provided to the filter */
stack_contains_all?: (Scalars['String'][] | null),
/** Matches if the field array contains at least one item provided to the filter */
stack_contains_some?: (Scalars['String'][] | null),
/** Matches if the field array does not contain any of the items provided to the filter */
stack_contains_none?: (Scalars['String'][] | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),scheduledIn_every?: (ScheduledOperationWhereInput | null),scheduledIn_some?: (ScheduledOperationWhereInput | null),scheduledIn_none?: (ScheduledOperationWhereInput | null)}

export interface PageUpdateInput {name?: (Scalars['String'] | null),myName?: (Scalars['String'] | null),myposition?: (Scalars['String'] | null),aboutTitle?: (Scalars['String'] | null),aboutContent?: (Scalars['String'] | null),toolsTitle?: (Scalars['String'] | null),toolsContent?: (Scalars['String'] | null),hobbies?: (Scalars['String'] | null),hobbiesTitle?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),stack?: (Scalars['String'][] | null)}

export interface PageUpdateManyInlineInput {
/** Create and connect multiple Page documents */
create?: (PageCreateInput[] | null),
/** Connect multiple existing Page documents */
connect?: (PageConnectInput[] | null),
/** Override currently-connected documents with multiple existing Page documents */
set?: (PageWhereUniqueInput[] | null),
/** Update multiple Page documents */
update?: (PageUpdateWithNestedWhereUniqueInput[] | null),
/** Upsert multiple Page documents */
upsert?: (PageUpsertWithNestedWhereUniqueInput[] | null),
/** Disconnect multiple Page documents */
disconnect?: (PageWhereUniqueInput[] | null),
/** Delete multiple Page documents */
delete?: (PageWhereUniqueInput[] | null)}

export interface PageUpdateManyInput {name?: (Scalars['String'] | null),myName?: (Scalars['String'] | null),myposition?: (Scalars['String'] | null),aboutTitle?: (Scalars['String'] | null),aboutContent?: (Scalars['String'] | null),toolsTitle?: (Scalars['String'] | null),toolsContent?: (Scalars['String'] | null),hobbies?: (Scalars['String'] | null),hobbiesTitle?: (Scalars['String'] | null),stack?: (Scalars['String'][] | null)}

export interface PageUpdateManyWithNestedWhereInput {
/** Document search */
where?: PageWhereInput,
/** Update many input */
data?: PageUpdateManyInput}

export interface PageUpdateOneInlineInput {
/** Create and connect one Page document */
create?: (PageCreateInput | null),
/** Update single Page document */
update?: (PageUpdateWithNestedWhereUniqueInput | null),
/** Upsert single Page document */
upsert?: (PageUpsertWithNestedWhereUniqueInput | null),
/** Connect existing Page document */
connect?: (PageWhereUniqueInput | null),
/** Disconnect currently connected Page document */
disconnect?: (Scalars['Boolean'] | null),
/** Delete currently connected Page document */
delete?: (Scalars['Boolean'] | null)}

export interface PageUpdateWithNestedWhereUniqueInput {
/** Unique document search */
where?: PageWhereUniqueInput,
/** Document to update */
data?: PageUpdateInput}

export interface PageUpsertInput {
/** Create document if it didn't exist */
create?: PageCreateInput,
/** Update document if it exists */
update?: PageUpdateInput}

export interface PageUpsertWithNestedWhereUniqueInput {
/** Unique document search */
where?: PageWhereUniqueInput,
/** Upsert data */
data?: PageUpsertInput}


/** This contains a set of filters that can be used to compare values internally */
export interface PageWhereComparatorInput {
/** This field can be used to request to check if the entry is outdated by internal comparison */
outdated_to?: (Scalars['Boolean'] | null)}


/** Identifies documents */
export interface PageWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (PageWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (PageWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (PageWhereInput[] | null),documentInStages_every?: (PageWhereStageInput | null),documentInStages_some?: (PageWhereStageInput | null),documentInStages_none?: (PageWhereStageInput | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),name?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
name_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
name_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
name_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
name_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
name_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
name_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
name_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
name_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
name_not_ends_with?: (Scalars['String'] | null),myName?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
myName_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
myName_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
myName_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
myName_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
myName_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
myName_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
myName_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
myName_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
myName_not_ends_with?: (Scalars['String'] | null),myposition?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
myposition_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
myposition_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
myposition_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
myposition_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
myposition_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
myposition_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
myposition_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
myposition_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
myposition_not_ends_with?: (Scalars['String'] | null),aboutTitle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
aboutTitle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
aboutTitle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
aboutTitle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
aboutTitle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
aboutTitle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
aboutTitle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
aboutTitle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
aboutTitle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
aboutTitle_not_ends_with?: (Scalars['String'] | null),aboutContent?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
aboutContent_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
aboutContent_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
aboutContent_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
aboutContent_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
aboutContent_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
aboutContent_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
aboutContent_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
aboutContent_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
aboutContent_not_ends_with?: (Scalars['String'] | null),toolsTitle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
toolsTitle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
toolsTitle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
toolsTitle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
toolsTitle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
toolsTitle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
toolsTitle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
toolsTitle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
toolsTitle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
toolsTitle_not_ends_with?: (Scalars['String'] | null),toolsContent?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
toolsContent_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
toolsContent_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
toolsContent_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
toolsContent_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
toolsContent_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
toolsContent_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
toolsContent_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
toolsContent_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
toolsContent_not_ends_with?: (Scalars['String'] | null),hobbies?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
hobbies_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
hobbies_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
hobbies_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
hobbies_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
hobbies_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
hobbies_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
hobbies_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
hobbies_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
hobbies_not_ends_with?: (Scalars['String'] | null),hobbiesTitle?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
hobbiesTitle_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
hobbiesTitle_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
hobbiesTitle_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
hobbiesTitle_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
hobbiesTitle_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
hobbiesTitle_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
hobbiesTitle_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
hobbiesTitle_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
hobbiesTitle_not_ends_with?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
slug_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
slug_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
slug_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
slug_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
slug_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
slug_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
slug_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
slug_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
slug_not_ends_with?: (Scalars['String'] | null),
/** Matches if the field array contains *all* items provided to the filter and order does match */
stack?: (Scalars['String'][] | null),
/** Matches if the field array does not contains *all* items provided to the filter or order does not match */
stack_not?: (Scalars['String'][] | null),
/** Matches if the field array contains *all* items provided to the filter */
stack_contains_all?: (Scalars['String'][] | null),
/** Matches if the field array contains at least one item provided to the filter */
stack_contains_some?: (Scalars['String'][] | null),
/** Matches if the field array does not contain any of the items provided to the filter */
stack_contains_none?: (Scalars['String'][] | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),scheduledIn_every?: (ScheduledOperationWhereInput | null),scheduledIn_some?: (ScheduledOperationWhereInput | null),scheduledIn_none?: (ScheduledOperationWhereInput | null)}


/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface PageWhereStageInput {
/** Logical AND on all given filters. */
AND?: (PageWhereStageInput[] | null),
/** Logical OR on all given filters. */
OR?: (PageWhereStageInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (PageWhereStageInput[] | null),
/** Specify the stage to compare with */
stage?: (Stage | null),
/** This field contains fields which can be set as true or false to specify an internal comparison */
compareWithParent?: (PageWhereComparatorInput | null)}


/** References Page record uniquely */
export interface PageWhereUniqueInput {id?: (Scalars['ID'] | null),slug?: (Scalars['String'] | null)}

export interface PublishLocaleInput {
/** Locales to publish */
locale?: Locale,
/** Stages to publish selected locales to */
stages?: Stage[]}

export interface QueryGenqlSelection{
    /** Fetches an object given its ID */
    node?: (NodeGenqlSelection & { __args: {
    /** The ID of an object */
    id: Scalars['ID'], stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Node` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple users */
    users?: (UserGenqlSelection & { __args: {where?: (UserWhereInput | null), orderBy?: (UserOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve a single user */
    user?: (UserGenqlSelection & { __args: {where: UserWhereUniqueInput, stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple users using the Relay connection interface */
    usersConnection?: (UserConnectionGenqlSelection & { __args: {where?: (UserWhereInput | null), orderBy?: (UserOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `User` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple assets */
    assets?: (AssetGenqlSelection & { __args: {where?: (AssetWhereInput | null), orderBy?: (AssetOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve a single asset */
    asset?: (AssetGenqlSelection & { __args: {where: AssetWhereUniqueInput, stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple assets using the Relay connection interface */
    assetsConnection?: (AssetConnectionGenqlSelection & { __args: {where?: (AssetWhereInput | null), orderBy?: (AssetOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Asset` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve document version */
    assetVersion?: (DocumentVersionGenqlSelection & { __args: {where: VersionWhereInput} })
    /** Retrieve multiple scheduledOperations */
    scheduledOperations?: (ScheduledOperationGenqlSelection & { __args: {where?: (ScheduledOperationWhereInput | null), orderBy?: (ScheduledOperationOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve a single scheduledOperation */
    scheduledOperation?: (ScheduledOperationGenqlSelection & { __args: {where: ScheduledOperationWhereUniqueInput, stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple scheduledOperations using the Relay connection interface */
    scheduledOperationsConnection?: (ScheduledOperationConnectionGenqlSelection & { __args: {where?: (ScheduledOperationWhereInput | null), orderBy?: (ScheduledOperationOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `ScheduledOperation` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple scheduledReleases */
    scheduledReleases?: (ScheduledReleaseGenqlSelection & { __args: {where?: (ScheduledReleaseWhereInput | null), orderBy?: (ScheduledReleaseOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve a single scheduledRelease */
    scheduledRelease?: (ScheduledReleaseGenqlSelection & { __args: {where: ScheduledReleaseWhereUniqueInput, stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple scheduledReleases using the Relay connection interface */
    scheduledReleasesConnection?: (ScheduledReleaseConnectionGenqlSelection & { __args: {where?: (ScheduledReleaseWhereInput | null), orderBy?: (ScheduledReleaseOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `ScheduledRelease` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple pages */
    pages?: (PageGenqlSelection & { __args: {where?: (PageWhereInput | null), orderBy?: (PageOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Page` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve a single page */
    page?: (PageGenqlSelection & { __args: {where: PageWhereUniqueInput, stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Page` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple pages using the Relay connection interface */
    pagesConnection?: (PageConnectionGenqlSelection & { __args: {where?: (PageWhereInput | null), orderBy?: (PageOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Page` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve document version */
    pageVersion?: (DocumentVersionGenqlSelection & { __args: {where: VersionWhereInput} })
    /** Retrieve multiple work */
    work?: (WorksGenqlSelection & { __args: {where?: (WorksWhereInput | null), orderBy?: (WorksOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Works` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve a single works */
    works?: (WorksGenqlSelection & { __args: {where: WorksWhereUniqueInput, stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Works` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve multiple work using the Relay connection interface */
    workConnection?: (WorksConnectionGenqlSelection & { __args: {where?: (WorksWhereInput | null), orderBy?: (WorksOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), stage: Stage, 
    /**
     * Defines which locales should be returned.
     * 
     * Note that `Works` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument may be overwritten by another locales definition in a relational child field, this will effectively use the overwritten argument for the affected query's subtree.
     */
    locales: Locale[]} })
    /** Retrieve document version */
    worksVersion?: (DocumentVersionGenqlSelection & { __args: {where: VersionWhereInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RGBAGenqlSelection{
    r?: boolean | number
    g?: boolean | number
    b?: boolean | number
    a?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input type representing a RGBA color value: https://developer.mozilla.org/en-US/docs/Web/CSS/color_value#rgb()_and_rgba() */
export interface RGBAInput {r?: Scalars['RGBAHue'],g?: Scalars['RGBAHue'],b?: Scalars['RGBAHue'],a?: Scalars['RGBATransparency']}


/** Custom type representing a rich text value comprising of raw rich text ast, html, markdown and text values */
export interface RichTextGenqlSelection{
    /** Returns AST representation */
    raw?: boolean | number
    /** Returns HTMl representation */
    html?: boolean | number
    /** Returns Markdown representation */
    markdown?: boolean | number
    /** Returns plain-text contents of RichText */
    text?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Scheduled Operation system model */
export interface ScheduledOperationGenqlSelection{
    /** System stage field */
    stage?: boolean | number
    /** Get the document in other stages */
    documentInStages?: (ScheduledOperationGenqlSelection & { __args: {
    /** Potential stages that should be returned */
    stages: Stage[], 
    /** Decides if the current stage should be included or not */
    includeCurrent: Scalars['Boolean'], 
    /** Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree */
    inheritLocale: Scalars['Boolean']} })
    /** Raw operation payload including all details, this field is subject to change */
    rawPayload?: boolean | number
    /** Operation error message */
    errorMessage?: boolean | number
    /** Operation description */
    description?: boolean | number
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: boolean | number
    /** The time the document was updated */
    updatedAt?: boolean | number
    /** The time the document was created */
    createdAt?: boolean | number
    /** The unique identifier */
    id?: boolean | number
    /** The release this operation is scheduled for */
    release?: (ScheduledReleaseGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `release` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `release` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last published this document */
    publishedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last updated this document */
    updatedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that created this document */
    createdBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** operation Status */
    status?: boolean | number
    affectedDocuments?: (ScheduledOperationAffectedDocumentGenqlSelection & { __args?: {skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `affectedDocuments` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `affectedDocuments` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledOperationAffectedDocumentGenqlSelection{
    on_Asset?:AssetGenqlSelection,
    on_Page?:PageGenqlSelection,
    on_Works?:WorksGenqlSelection,
    on_Node?: NodeGenqlSelection,
    __typename?: boolean | number
}

export interface ScheduledOperationConnectInput {
/** Document to connect */
where?: ScheduledOperationWhereUniqueInput,
/** Allow to specify document position in list of connected documents, will default to appending at end of list */
position?: (ConnectPositionInput | null)}


/** A connection to a list of items. */
export interface ScheduledOperationConnectionGenqlSelection{
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** A list of edges. */
    edges?: ScheduledOperationEdgeGenqlSelection
    aggregate?: AggregateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledOperationCreateManyInlineInput {
/** Connect multiple existing ScheduledOperation documents */
connect?: (ScheduledOperationWhereUniqueInput[] | null)}

export interface ScheduledOperationCreateOneInlineInput {
/** Connect one existing ScheduledOperation document */
connect?: (ScheduledOperationWhereUniqueInput | null)}


/** An edge in a connection. */
export interface ScheduledOperationEdgeGenqlSelection{
    /** The item at the end of the edge. */
    node?: ScheduledOperationGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identifies documents */
export interface ScheduledOperationManyWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (ScheduledOperationWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (ScheduledOperationWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (ScheduledOperationWhereInput[] | null),
/** All values containing the given json path. */
rawPayload_json_path_exists?: (Scalars['String'] | null),
/**
 * Recursively tries to find the provided JSON scalar value inside the field.
 * It does use an exact match when comparing values.
 * If you pass `null` as value the filter will be ignored. 
 * Note: This filter fails if you try to look for a non scalar JSON value!
 */
rawPayload_value_recursive?: (Scalars['Json'] | null),errorMessage?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
errorMessage_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
errorMessage_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
errorMessage_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
errorMessage_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
errorMessage_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
errorMessage_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
errorMessage_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
errorMessage_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
errorMessage_not_ends_with?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
description_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
description_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
description_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
description_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
description_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
description_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
description_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
description_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
description_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),release?: (ScheduledReleaseWhereInput | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),status?: (ScheduledOperationStatus | null),
/** Any other value that exists and is not equal to the given value. */
status_not?: (ScheduledOperationStatus | null),
/** All values that are contained in given list. */
status_in?: ((ScheduledOperationStatus | null)[] | null),
/** All values that are not contained in given list. */
status_not_in?: ((ScheduledOperationStatus | null)[] | null)}

export interface ScheduledOperationUpdateManyInlineInput {
/** Connect multiple existing ScheduledOperation documents */
connect?: (ScheduledOperationConnectInput[] | null),
/** Override currently-connected documents with multiple existing ScheduledOperation documents */
set?: (ScheduledOperationWhereUniqueInput[] | null),
/** Disconnect multiple ScheduledOperation documents */
disconnect?: (ScheduledOperationWhereUniqueInput[] | null)}

export interface ScheduledOperationUpdateOneInlineInput {
/** Connect existing ScheduledOperation document */
connect?: (ScheduledOperationWhereUniqueInput | null),
/** Disconnect currently connected ScheduledOperation document */
disconnect?: (Scalars['Boolean'] | null)}


/** Identifies documents */
export interface ScheduledOperationWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (ScheduledOperationWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (ScheduledOperationWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (ScheduledOperationWhereInput[] | null),
/** All values containing the given json path. */
rawPayload_json_path_exists?: (Scalars['String'] | null),
/**
 * Recursively tries to find the provided JSON scalar value inside the field.
 * It does use an exact match when comparing values.
 * If you pass `null` as value the filter will be ignored. 
 * Note: This filter fails if you try to look for a non scalar JSON value!
 */
rawPayload_value_recursive?: (Scalars['Json'] | null),errorMessage?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
errorMessage_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
errorMessage_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
errorMessage_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
errorMessage_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
errorMessage_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
errorMessage_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
errorMessage_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
errorMessage_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
errorMessage_not_ends_with?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
description_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
description_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
description_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
description_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
description_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
description_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
description_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
description_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
description_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),release?: (ScheduledReleaseWhereInput | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),status?: (ScheduledOperationStatus | null),
/** Any other value that exists and is not equal to the given value. */
status_not?: (ScheduledOperationStatus | null),
/** All values that are contained in given list. */
status_in?: ((ScheduledOperationStatus | null)[] | null),
/** All values that are not contained in given list. */
status_not_in?: ((ScheduledOperationStatus | null)[] | null)}


/** References ScheduledOperation record uniquely */
export interface ScheduledOperationWhereUniqueInput {id?: (Scalars['ID'] | null)}


/** Scheduled Release system model */
export interface ScheduledReleaseGenqlSelection{
    /** System stage field */
    stage?: boolean | number
    /** Get the document in other stages */
    documentInStages?: (ScheduledReleaseGenqlSelection & { __args: {
    /** Potential stages that should be returned */
    stages: Stage[], 
    /** Decides if the current stage should be included or not */
    includeCurrent: Scalars['Boolean'], 
    /** Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree */
    inheritLocale: Scalars['Boolean']} })
    /** Release date and time */
    releaseAt?: boolean | number
    /** Whether scheduled release is implicit */
    isImplicit?: boolean | number
    /** Whether scheduled release should be run */
    isActive?: boolean | number
    /** Release error message */
    errorMessage?: boolean | number
    /** Release description */
    description?: boolean | number
    /** Release Title */
    title?: boolean | number
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: boolean | number
    /** The time the document was updated */
    updatedAt?: boolean | number
    /** The time the document was created */
    createdAt?: boolean | number
    /** The unique identifier */
    id?: boolean | number
    /** Operations to run with this release */
    operations?: (ScheduledOperationGenqlSelection & { __args?: {where?: (ScheduledOperationWhereInput | null), orderBy?: (ScheduledOperationOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `operations` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `operations` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last published this document */
    publishedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last updated this document */
    updatedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that created this document */
    createdBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** Release Status */
    status?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledReleaseConnectInput {
/** Document to connect */
where?: ScheduledReleaseWhereUniqueInput,
/** Allow to specify document position in list of connected documents, will default to appending at end of list */
position?: (ConnectPositionInput | null)}


/** A connection to a list of items. */
export interface ScheduledReleaseConnectionGenqlSelection{
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** A list of edges. */
    edges?: ScheduledReleaseEdgeGenqlSelection
    aggregate?: AggregateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface ScheduledReleaseCreateInput {releaseAt?: (Scalars['DateTime'] | null),isActive?: (Scalars['Boolean'] | null),errorMessage?: (Scalars['String'] | null),description?: (Scalars['String'] | null),title?: (Scalars['String'] | null),updatedAt?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null)}

export interface ScheduledReleaseCreateManyInlineInput {
/** Create and connect multiple existing ScheduledRelease documents */
create?: (ScheduledReleaseCreateInput[] | null),
/** Connect multiple existing ScheduledRelease documents */
connect?: (ScheduledReleaseWhereUniqueInput[] | null)}

export interface ScheduledReleaseCreateOneInlineInput {
/** Create and connect one ScheduledRelease document */
create?: (ScheduledReleaseCreateInput | null),
/** Connect one existing ScheduledRelease document */
connect?: (ScheduledReleaseWhereUniqueInput | null)}


/** An edge in a connection. */
export interface ScheduledReleaseEdgeGenqlSelection{
    /** The item at the end of the edge. */
    node?: ScheduledReleaseGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identifies documents */
export interface ScheduledReleaseManyWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (ScheduledReleaseWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (ScheduledReleaseWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (ScheduledReleaseWhereInput[] | null),releaseAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
releaseAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
releaseAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
releaseAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
releaseAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
releaseAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
releaseAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
releaseAt_gte?: (Scalars['DateTime'] | null),isImplicit?: (Scalars['Boolean'] | null),
/** Any other value that exists and is not equal to the given value. */
isImplicit_not?: (Scalars['Boolean'] | null),isActive?: (Scalars['Boolean'] | null),
/** Any other value that exists and is not equal to the given value. */
isActive_not?: (Scalars['Boolean'] | null),errorMessage?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
errorMessage_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
errorMessage_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
errorMessage_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
errorMessage_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
errorMessage_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
errorMessage_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
errorMessage_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
errorMessage_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
errorMessage_not_ends_with?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
description_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
description_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
description_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
description_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
description_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
description_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
description_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
description_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
description_not_ends_with?: (Scalars['String'] | null),title?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
title_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
title_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
title_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
title_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
title_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
title_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
title_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
title_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
title_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),operations_every?: (ScheduledOperationWhereInput | null),operations_some?: (ScheduledOperationWhereInput | null),operations_none?: (ScheduledOperationWhereInput | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),status?: (ScheduledReleaseStatus | null),
/** Any other value that exists and is not equal to the given value. */
status_not?: (ScheduledReleaseStatus | null),
/** All values that are contained in given list. */
status_in?: ((ScheduledReleaseStatus | null)[] | null),
/** All values that are not contained in given list. */
status_not_in?: ((ScheduledReleaseStatus | null)[] | null)}

export interface ScheduledReleaseUpdateInput {releaseAt?: (Scalars['DateTime'] | null),isActive?: (Scalars['Boolean'] | null),errorMessage?: (Scalars['String'] | null),description?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}

export interface ScheduledReleaseUpdateManyInlineInput {
/** Create and connect multiple ScheduledRelease documents */
create?: (ScheduledReleaseCreateInput[] | null),
/** Connect multiple existing ScheduledRelease documents */
connect?: (ScheduledReleaseConnectInput[] | null),
/** Override currently-connected documents with multiple existing ScheduledRelease documents */
set?: (ScheduledReleaseWhereUniqueInput[] | null),
/** Update multiple ScheduledRelease documents */
update?: (ScheduledReleaseUpdateWithNestedWhereUniqueInput[] | null),
/** Upsert multiple ScheduledRelease documents */
upsert?: (ScheduledReleaseUpsertWithNestedWhereUniqueInput[] | null),
/** Disconnect multiple ScheduledRelease documents */
disconnect?: (ScheduledReleaseWhereUniqueInput[] | null),
/** Delete multiple ScheduledRelease documents */
delete?: (ScheduledReleaseWhereUniqueInput[] | null)}

export interface ScheduledReleaseUpdateManyInput {releaseAt?: (Scalars['DateTime'] | null),isActive?: (Scalars['Boolean'] | null),errorMessage?: (Scalars['String'] | null),description?: (Scalars['String'] | null),title?: (Scalars['String'] | null)}

export interface ScheduledReleaseUpdateManyWithNestedWhereInput {
/** Document search */
where?: ScheduledReleaseWhereInput,
/** Update many input */
data?: ScheduledReleaseUpdateManyInput}

export interface ScheduledReleaseUpdateOneInlineInput {
/** Create and connect one ScheduledRelease document */
create?: (ScheduledReleaseCreateInput | null),
/** Update single ScheduledRelease document */
update?: (ScheduledReleaseUpdateWithNestedWhereUniqueInput | null),
/** Upsert single ScheduledRelease document */
upsert?: (ScheduledReleaseUpsertWithNestedWhereUniqueInput | null),
/** Connect existing ScheduledRelease document */
connect?: (ScheduledReleaseWhereUniqueInput | null),
/** Disconnect currently connected ScheduledRelease document */
disconnect?: (Scalars['Boolean'] | null),
/** Delete currently connected ScheduledRelease document */
delete?: (Scalars['Boolean'] | null)}

export interface ScheduledReleaseUpdateWithNestedWhereUniqueInput {
/** Unique document search */
where?: ScheduledReleaseWhereUniqueInput,
/** Document to update */
data?: ScheduledReleaseUpdateInput}

export interface ScheduledReleaseUpsertInput {
/** Create document if it didn't exist */
create?: ScheduledReleaseCreateInput,
/** Update document if it exists */
update?: ScheduledReleaseUpdateInput}

export interface ScheduledReleaseUpsertWithNestedWhereUniqueInput {
/** Unique document search */
where?: ScheduledReleaseWhereUniqueInput,
/** Upsert data */
data?: ScheduledReleaseUpsertInput}


/** Identifies documents */
export interface ScheduledReleaseWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (ScheduledReleaseWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (ScheduledReleaseWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (ScheduledReleaseWhereInput[] | null),releaseAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
releaseAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
releaseAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
releaseAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
releaseAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
releaseAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
releaseAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
releaseAt_gte?: (Scalars['DateTime'] | null),isImplicit?: (Scalars['Boolean'] | null),
/** Any other value that exists and is not equal to the given value. */
isImplicit_not?: (Scalars['Boolean'] | null),isActive?: (Scalars['Boolean'] | null),
/** Any other value that exists and is not equal to the given value. */
isActive_not?: (Scalars['Boolean'] | null),errorMessage?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
errorMessage_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
errorMessage_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
errorMessage_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
errorMessage_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
errorMessage_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
errorMessage_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
errorMessage_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
errorMessage_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
errorMessage_not_ends_with?: (Scalars['String'] | null),description?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
description_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
description_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
description_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
description_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
description_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
description_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
description_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
description_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
description_not_ends_with?: (Scalars['String'] | null),title?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
title_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
title_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
title_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
title_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
title_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
title_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
title_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
title_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
title_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),operations_every?: (ScheduledOperationWhereInput | null),operations_some?: (ScheduledOperationWhereInput | null),operations_none?: (ScheduledOperationWhereInput | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),status?: (ScheduledReleaseStatus | null),
/** Any other value that exists and is not equal to the given value. */
status_not?: (ScheduledReleaseStatus | null),
/** All values that are contained in given list. */
status_in?: ((ScheduledReleaseStatus | null)[] | null),
/** All values that are not contained in given list. */
status_not_in?: ((ScheduledReleaseStatus | null)[] | null)}


/** References ScheduledRelease record uniquely */
export interface ScheduledReleaseWhereUniqueInput {id?: (Scalars['ID'] | null)}

export interface UnpublishLocaleInput {
/** Locales to unpublish */
locale?: Locale,
/** Stages to unpublish selected locales from */
stages?: Stage[]}


/** User system model */
export interface UserGenqlSelection{
    /** System stage field */
    stage?: boolean | number
    /** Get the document in other stages */
    documentInStages?: (UserGenqlSelection & { __args: {
    /** Potential stages that should be returned */
    stages: Stage[], 
    /** Decides if the current stage should be included or not */
    includeCurrent: Scalars['Boolean'], 
    /** Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree */
    inheritLocale: Scalars['Boolean']} })
    /** Flag to determine if user is active or not */
    isActive?: boolean | number
    /** Profile Picture url */
    picture?: boolean | number
    /** The username */
    name?: boolean | number
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: boolean | number
    /** The time the document was updated */
    updatedAt?: boolean | number
    /** The time the document was created */
    createdAt?: boolean | number
    /** The unique identifier */
    id?: boolean | number
    /** User Kind. Can be either MEMBER, PAT or PUBLIC */
    kind?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserConnectInput {
/** Document to connect */
where?: UserWhereUniqueInput,
/** Allow to specify document position in list of connected documents, will default to appending at end of list */
position?: (ConnectPositionInput | null)}


/** A connection to a list of items. */
export interface UserConnectionGenqlSelection{
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** A list of edges. */
    edges?: UserEdgeGenqlSelection
    aggregate?: AggregateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface UserCreateManyInlineInput {
/** Connect multiple existing User documents */
connect?: (UserWhereUniqueInput[] | null)}

export interface UserCreateOneInlineInput {
/** Connect one existing User document */
connect?: (UserWhereUniqueInput | null)}


/** An edge in a connection. */
export interface UserEdgeGenqlSelection{
    /** The item at the end of the edge. */
    node?: UserGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identifies documents */
export interface UserManyWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (UserWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (UserWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (UserWhereInput[] | null),documentInStages_every?: (UserWhereStageInput | null),documentInStages_some?: (UserWhereStageInput | null),documentInStages_none?: (UserWhereStageInput | null),isActive?: (Scalars['Boolean'] | null),
/** Any other value that exists and is not equal to the given value. */
isActive_not?: (Scalars['Boolean'] | null),picture?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
picture_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
picture_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
picture_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
picture_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
picture_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
picture_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
picture_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
picture_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
picture_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
name_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
name_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
name_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
name_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
name_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
name_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
name_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
name_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
name_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),kind?: (UserKind | null),
/** Any other value that exists and is not equal to the given value. */
kind_not?: (UserKind | null),
/** All values that are contained in given list. */
kind_in?: ((UserKind | null)[] | null),
/** All values that are not contained in given list. */
kind_not_in?: ((UserKind | null)[] | null)}

export interface UserUpdateManyInlineInput {
/** Connect multiple existing User documents */
connect?: (UserConnectInput[] | null),
/** Override currently-connected documents with multiple existing User documents */
set?: (UserWhereUniqueInput[] | null),
/** Disconnect multiple User documents */
disconnect?: (UserWhereUniqueInput[] | null)}

export interface UserUpdateOneInlineInput {
/** Connect existing User document */
connect?: (UserWhereUniqueInput | null),
/** Disconnect currently connected User document */
disconnect?: (Scalars['Boolean'] | null)}


/** This contains a set of filters that can be used to compare values internally */
export interface UserWhereComparatorInput {
/** This field can be used to request to check if the entry is outdated by internal comparison */
outdated_to?: (Scalars['Boolean'] | null)}


/** Identifies documents */
export interface UserWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (UserWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (UserWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (UserWhereInput[] | null),documentInStages_every?: (UserWhereStageInput | null),documentInStages_some?: (UserWhereStageInput | null),documentInStages_none?: (UserWhereStageInput | null),isActive?: (Scalars['Boolean'] | null),
/** Any other value that exists and is not equal to the given value. */
isActive_not?: (Scalars['Boolean'] | null),picture?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
picture_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
picture_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
picture_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
picture_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
picture_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
picture_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
picture_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
picture_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
picture_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
name_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
name_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
name_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
name_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
name_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
name_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
name_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
name_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
name_not_ends_with?: (Scalars['String'] | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),kind?: (UserKind | null),
/** Any other value that exists and is not equal to the given value. */
kind_not?: (UserKind | null),
/** All values that are contained in given list. */
kind_in?: ((UserKind | null)[] | null),
/** All values that are not contained in given list. */
kind_not_in?: ((UserKind | null)[] | null)}


/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface UserWhereStageInput {
/** Logical AND on all given filters. */
AND?: (UserWhereStageInput[] | null),
/** Logical OR on all given filters. */
OR?: (UserWhereStageInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (UserWhereStageInput[] | null),
/** Specify the stage to compare with */
stage?: (Stage | null),
/** This field contains fields which can be set as true or false to specify an internal comparison */
compareWithParent?: (UserWhereComparatorInput | null)}


/** References User record uniquely */
export interface UserWhereUniqueInput {id?: (Scalars['ID'] | null)}

export interface VersionGenqlSelection{
    id?: boolean | number
    stage?: boolean | number
    revision?: boolean | number
    createdAt?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface VersionWhereInput {id?: Scalars['ID'],stage?: Stage,revision?: Scalars['Int']}

export interface WorksGenqlSelection{
    /** System stage field */
    stage?: boolean | number
    /** Get the document in other stages */
    documentInStages?: (WorksGenqlSelection & { __args: {
    /** Potential stages that should be returned */
    stages: Stage[], 
    /** Decides if the current stage should be included or not */
    includeCurrent: Scalars['Boolean'], 
    /** Decides if the documents should match the parent documents locale or should use the fallback order defined in the tree */
    inheritLocale: Scalars['Boolean']} })
    /** The time the document was published. Null on documents in draft stage. */
    publishedAt?: boolean | number
    /** The time the document was updated */
    updatedAt?: boolean | number
    /** The time the document was created */
    createdAt?: boolean | number
    /** The unique identifier */
    id?: boolean | number
    works?: boolean | number
    slug?: boolean | number
    stack?: boolean | number
    description?: boolean | number
    name?: boolean | number
    githubUrl?: boolean | number
    /** User that last published this document */
    publishedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `publishedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that last updated this document */
    updatedBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `updatedBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** User that created this document */
    createdBy?: (UserGenqlSelection & { __args?: {
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `createdBy` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    bg?: (AssetGenqlSelection & { __args?: {where?: (AssetWhereInput | null), orderBy?: (AssetOrderByInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `bg` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, localized entries that do not have the provided locale defined will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the parent document as the first locale in the fallback locales in the query's subtree.
     * 
     * Note that `bg` will be affected directly by this argument, as well as any other related models with localized fields in the query's subtree.
     * The first locale matching the provided list will be returned, localized entries that do not have the provided locale defined will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    scheduledIn?: (ScheduledOperationGenqlSelection & { __args?: {where?: (ScheduledOperationWhereInput | null), skip?: (Scalars['Int'] | null), after?: (Scalars['String'] | null), before?: (Scalars['String'] | null), first?: (Scalars['Int'] | null), last?: (Scalars['Int'] | null), 
    /**
     * Allows to optionally override locale filtering behaviour in the query's subtree.
     * 
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locales will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will overwrite any existing locale filtering defined in the query's tree for the subtree.
     */
    locales?: (Locale[] | null), 
    /**
     * Sets the locale of the resolved parent document as the only locale in the query's subtree.
     * 
     * Note that `scheduledIn` is a model without localized fields and will not be affected directly by this argument, however the locale will be passed on to any relational fields in the query's subtree for filtering.
     * For related models with localized fields in the query's subtree, the first locale matching the provided list of locales will be returned, entries with non matching locales will be filtered out.
     * 
     * This argument will affect any existing locale filtering defined in the query's tree for the subtree.
     */
    forceParentLocale?: (Scalars['Boolean'] | null)} })
    /** List of Works versions */
    history?: (VersionGenqlSelection & { __args: {limit: Scalars['Int'], skip: Scalars['Int'], 
    /** This is optional and can be used to fetch the document version history for a specific stage instead of the current one */
    stageOverride?: (Stage | null)} })
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorksConnectInput {
/** Document to connect */
where?: WorksWhereUniqueInput,
/** Allow to specify document position in list of connected documents, will default to appending at end of list */
position?: (ConnectPositionInput | null)}


/** A connection to a list of items. */
export interface WorksConnectionGenqlSelection{
    /** Information to aid in pagination. */
    pageInfo?: PageInfoGenqlSelection
    /** A list of edges. */
    edges?: WorksEdgeGenqlSelection
    aggregate?: AggregateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}

export interface WorksCreateInput {updatedAt?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),works?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),stack?: (Scalars['String'][] | null),description?: (Scalars['String'] | null),name?: (Scalars['String'] | null),githubUrl?: (Scalars['String'] | null),bg?: (AssetCreateManyInlineInput | null)}

export interface WorksCreateManyInlineInput {
/** Create and connect multiple existing Works documents */
create?: (WorksCreateInput[] | null),
/** Connect multiple existing Works documents */
connect?: (WorksWhereUniqueInput[] | null)}

export interface WorksCreateOneInlineInput {
/** Create and connect one Works document */
create?: (WorksCreateInput | null),
/** Connect one existing Works document */
connect?: (WorksWhereUniqueInput | null)}


/** An edge in a connection. */
export interface WorksEdgeGenqlSelection{
    /** The item at the end of the edge. */
    node?: WorksGenqlSelection
    /** A cursor for use in pagination. */
    cursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Identifies documents */
export interface WorksManyWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (WorksWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (WorksWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (WorksWhereInput[] | null),documentInStages_every?: (WorksWhereStageInput | null),documentInStages_some?: (WorksWhereStageInput | null),documentInStages_none?: (WorksWhereStageInput | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),works?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
works_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
works_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
works_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
works_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
works_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
works_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
works_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
works_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
works_not_ends_with?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
slug_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
slug_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
slug_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
slug_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
slug_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
slug_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
slug_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
slug_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
slug_not_ends_with?: (Scalars['String'] | null),
/** Matches if the field array contains *all* items provided to the filter and order does match */
stack?: (Scalars['String'][] | null),
/** Matches if the field array does not contains *all* items provided to the filter or order does not match */
stack_not?: (Scalars['String'][] | null),
/** Matches if the field array contains *all* items provided to the filter */
stack_contains_all?: (Scalars['String'][] | null),
/** Matches if the field array contains at least one item provided to the filter */
stack_contains_some?: (Scalars['String'][] | null),
/** Matches if the field array does not contain any of the items provided to the filter */
stack_contains_none?: (Scalars['String'][] | null),description?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
description_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
description_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
description_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
description_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
description_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
description_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
description_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
description_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
description_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
name_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
name_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
name_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
name_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
name_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
name_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
name_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
name_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
name_not_ends_with?: (Scalars['String'] | null),githubUrl?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
githubUrl_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
githubUrl_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
githubUrl_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
githubUrl_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
githubUrl_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
githubUrl_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
githubUrl_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
githubUrl_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
githubUrl_not_ends_with?: (Scalars['String'] | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),bg_every?: (AssetWhereInput | null),bg_some?: (AssetWhereInput | null),bg_none?: (AssetWhereInput | null),scheduledIn_every?: (ScheduledOperationWhereInput | null),scheduledIn_some?: (ScheduledOperationWhereInput | null),scheduledIn_none?: (ScheduledOperationWhereInput | null)}

export interface WorksUpdateInput {works?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),stack?: (Scalars['String'][] | null),description?: (Scalars['String'] | null),name?: (Scalars['String'] | null),githubUrl?: (Scalars['String'] | null),bg?: (AssetUpdateManyInlineInput | null)}

export interface WorksUpdateManyInlineInput {
/** Create and connect multiple Works documents */
create?: (WorksCreateInput[] | null),
/** Connect multiple existing Works documents */
connect?: (WorksConnectInput[] | null),
/** Override currently-connected documents with multiple existing Works documents */
set?: (WorksWhereUniqueInput[] | null),
/** Update multiple Works documents */
update?: (WorksUpdateWithNestedWhereUniqueInput[] | null),
/** Upsert multiple Works documents */
upsert?: (WorksUpsertWithNestedWhereUniqueInput[] | null),
/** Disconnect multiple Works documents */
disconnect?: (WorksWhereUniqueInput[] | null),
/** Delete multiple Works documents */
delete?: (WorksWhereUniqueInput[] | null)}

export interface WorksUpdateManyInput {works?: (Scalars['String'] | null),stack?: (Scalars['String'][] | null),description?: (Scalars['String'] | null),name?: (Scalars['String'] | null),githubUrl?: (Scalars['String'] | null)}

export interface WorksUpdateManyWithNestedWhereInput {
/** Document search */
where?: WorksWhereInput,
/** Update many input */
data?: WorksUpdateManyInput}

export interface WorksUpdateOneInlineInput {
/** Create and connect one Works document */
create?: (WorksCreateInput | null),
/** Update single Works document */
update?: (WorksUpdateWithNestedWhereUniqueInput | null),
/** Upsert single Works document */
upsert?: (WorksUpsertWithNestedWhereUniqueInput | null),
/** Connect existing Works document */
connect?: (WorksWhereUniqueInput | null),
/** Disconnect currently connected Works document */
disconnect?: (Scalars['Boolean'] | null),
/** Delete currently connected Works document */
delete?: (Scalars['Boolean'] | null)}

export interface WorksUpdateWithNestedWhereUniqueInput {
/** Unique document search */
where?: WorksWhereUniqueInput,
/** Document to update */
data?: WorksUpdateInput}

export interface WorksUpsertInput {
/** Create document if it didn't exist */
create?: WorksCreateInput,
/** Update document if it exists */
update?: WorksUpdateInput}

export interface WorksUpsertWithNestedWhereUniqueInput {
/** Unique document search */
where?: WorksWhereUniqueInput,
/** Upsert data */
data?: WorksUpsertInput}


/** This contains a set of filters that can be used to compare values internally */
export interface WorksWhereComparatorInput {
/** This field can be used to request to check if the entry is outdated by internal comparison */
outdated_to?: (Scalars['Boolean'] | null)}


/** Identifies documents */
export interface WorksWhereInput {
/** Contains search across all appropriate fields. */
_search?: (Scalars['String'] | null),
/** Logical AND on all given filters. */
AND?: (WorksWhereInput[] | null),
/** Logical OR on all given filters. */
OR?: (WorksWhereInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (WorksWhereInput[] | null),documentInStages_every?: (WorksWhereStageInput | null),documentInStages_some?: (WorksWhereStageInput | null),documentInStages_none?: (WorksWhereStageInput | null),publishedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
publishedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
publishedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
publishedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
publishedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
publishedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
publishedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
publishedAt_gte?: (Scalars['DateTime'] | null),updatedAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
updatedAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
updatedAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
updatedAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
updatedAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
updatedAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
updatedAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
updatedAt_gte?: (Scalars['DateTime'] | null),createdAt?: (Scalars['DateTime'] | null),
/** Any other value that exists and is not equal to the given value. */
createdAt_not?: (Scalars['DateTime'] | null),
/** All values that are contained in given list. */
createdAt_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values that are not contained in given list. */
createdAt_not_in?: ((Scalars['DateTime'] | null)[] | null),
/** All values less than the given value. */
createdAt_lt?: (Scalars['DateTime'] | null),
/** All values less than or equal the given value. */
createdAt_lte?: (Scalars['DateTime'] | null),
/** All values greater than the given value. */
createdAt_gt?: (Scalars['DateTime'] | null),
/** All values greater than or equal the given value. */
createdAt_gte?: (Scalars['DateTime'] | null),id?: (Scalars['ID'] | null),
/** Any other value that exists and is not equal to the given value. */
id_not?: (Scalars['ID'] | null),
/** All values that are contained in given list. */
id_in?: ((Scalars['ID'] | null)[] | null),
/** All values that are not contained in given list. */
id_not_in?: ((Scalars['ID'] | null)[] | null),
/** All values containing the given string. */
id_contains?: (Scalars['ID'] | null),
/** All values not containing the given string. */
id_not_contains?: (Scalars['ID'] | null),
/** All values starting with the given string. */
id_starts_with?: (Scalars['ID'] | null),
/** All values not starting with the given string. */
id_not_starts_with?: (Scalars['ID'] | null),
/** All values ending with the given string. */
id_ends_with?: (Scalars['ID'] | null),
/** All values not ending with the given string */
id_not_ends_with?: (Scalars['ID'] | null),works?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
works_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
works_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
works_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
works_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
works_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
works_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
works_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
works_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
works_not_ends_with?: (Scalars['String'] | null),slug?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
slug_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
slug_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
slug_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
slug_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
slug_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
slug_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
slug_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
slug_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
slug_not_ends_with?: (Scalars['String'] | null),
/** Matches if the field array contains *all* items provided to the filter and order does match */
stack?: (Scalars['String'][] | null),
/** Matches if the field array does not contains *all* items provided to the filter or order does not match */
stack_not?: (Scalars['String'][] | null),
/** Matches if the field array contains *all* items provided to the filter */
stack_contains_all?: (Scalars['String'][] | null),
/** Matches if the field array contains at least one item provided to the filter */
stack_contains_some?: (Scalars['String'][] | null),
/** Matches if the field array does not contain any of the items provided to the filter */
stack_contains_none?: (Scalars['String'][] | null),description?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
description_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
description_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
description_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
description_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
description_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
description_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
description_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
description_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
description_not_ends_with?: (Scalars['String'] | null),name?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
name_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
name_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
name_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
name_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
name_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
name_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
name_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
name_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
name_not_ends_with?: (Scalars['String'] | null),githubUrl?: (Scalars['String'] | null),
/** Any other value that exists and is not equal to the given value. */
githubUrl_not?: (Scalars['String'] | null),
/** All values that are contained in given list. */
githubUrl_in?: ((Scalars['String'] | null)[] | null),
/** All values that are not contained in given list. */
githubUrl_not_in?: ((Scalars['String'] | null)[] | null),
/** All values containing the given string. */
githubUrl_contains?: (Scalars['String'] | null),
/** All values not containing the given string. */
githubUrl_not_contains?: (Scalars['String'] | null),
/** All values starting with the given string. */
githubUrl_starts_with?: (Scalars['String'] | null),
/** All values not starting with the given string. */
githubUrl_not_starts_with?: (Scalars['String'] | null),
/** All values ending with the given string. */
githubUrl_ends_with?: (Scalars['String'] | null),
/** All values not ending with the given string */
githubUrl_not_ends_with?: (Scalars['String'] | null),publishedBy?: (UserWhereInput | null),updatedBy?: (UserWhereInput | null),createdBy?: (UserWhereInput | null),bg_every?: (AssetWhereInput | null),bg_some?: (AssetWhereInput | null),bg_none?: (AssetWhereInput | null),scheduledIn_every?: (ScheduledOperationWhereInput | null),scheduledIn_some?: (ScheduledOperationWhereInput | null),scheduledIn_none?: (ScheduledOperationWhereInput | null)}


/** The document in stages filter allows specifying a stage entry to cross compare the same document between different stages */
export interface WorksWhereStageInput {
/** Logical AND on all given filters. */
AND?: (WorksWhereStageInput[] | null),
/** Logical OR on all given filters. */
OR?: (WorksWhereStageInput[] | null),
/** Logical NOT on all given filters combined by AND. */
NOT?: (WorksWhereStageInput[] | null),
/** Specify the stage to compare with */
stage?: (Stage | null),
/** This field contains fields which can be set as true or false to specify an internal comparison */
compareWithParent?: (WorksWhereComparatorInput | null)}


/** References Works record uniquely */
export interface WorksWhereUniqueInput {id?: (Scalars['ID'] | null),slug?: (Scalars['String'] | null)}


    const Aggregate_possibleTypes: string[] = ['Aggregate']
    export const isAggregate = (obj?: { __typename?: any } | null): obj is Aggregate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAggregate"')
      return Aggregate_possibleTypes.includes(obj.__typename)
    }
    


    const Asset_possibleTypes: string[] = ['Asset']
    export const isAsset = (obj?: { __typename?: any } | null): obj is Asset => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAsset"')
      return Asset_possibleTypes.includes(obj.__typename)
    }
    


    const AssetConnection_possibleTypes: string[] = ['AssetConnection']
    export const isAssetConnection = (obj?: { __typename?: any } | null): obj is AssetConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAssetConnection"')
      return AssetConnection_possibleTypes.includes(obj.__typename)
    }
    


    const AssetEdge_possibleTypes: string[] = ['AssetEdge']
    export const isAssetEdge = (obj?: { __typename?: any } | null): obj is AssetEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAssetEdge"')
      return AssetEdge_possibleTypes.includes(obj.__typename)
    }
    


    const BatchPayload_possibleTypes: string[] = ['BatchPayload']
    export const isBatchPayload = (obj?: { __typename?: any } | null): obj is BatchPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isBatchPayload"')
      return BatchPayload_possibleTypes.includes(obj.__typename)
    }
    


    const Color_possibleTypes: string[] = ['Color']
    export const isColor = (obj?: { __typename?: any } | null): obj is Color => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isColor"')
      return Color_possibleTypes.includes(obj.__typename)
    }
    


    const DocumentVersion_possibleTypes: string[] = ['DocumentVersion']
    export const isDocumentVersion = (obj?: { __typename?: any } | null): obj is DocumentVersion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDocumentVersion"')
      return DocumentVersion_possibleTypes.includes(obj.__typename)
    }
    


    const Location_possibleTypes: string[] = ['Location']
    export const isLocation = (obj?: { __typename?: any } | null): obj is Location => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isLocation"')
      return Location_possibleTypes.includes(obj.__typename)
    }
    


    const Mutation_possibleTypes: string[] = ['Mutation']
    export const isMutation = (obj?: { __typename?: any } | null): obj is Mutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMutation"')
      return Mutation_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Asset','Page','ScheduledOperation','ScheduledRelease','User','Works']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const Page_possibleTypes: string[] = ['Page']
    export const isPage = (obj?: { __typename?: any } | null): obj is Page => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPage"')
      return Page_possibleTypes.includes(obj.__typename)
    }
    


    const PageConnection_possibleTypes: string[] = ['PageConnection']
    export const isPageConnection = (obj?: { __typename?: any } | null): obj is PageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageConnection"')
      return PageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageEdge_possibleTypes: string[] = ['PageEdge']
    export const isPageEdge = (obj?: { __typename?: any } | null): obj is PageEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageEdge"')
      return PageEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['PageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Query_possibleTypes: string[] = ['Query']
    export const isQuery = (obj?: { __typename?: any } | null): obj is Query => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isQuery"')
      return Query_possibleTypes.includes(obj.__typename)
    }
    


    const RGBA_possibleTypes: string[] = ['RGBA']
    export const isRGBA = (obj?: { __typename?: any } | null): obj is RGBA => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRGBA"')
      return RGBA_possibleTypes.includes(obj.__typename)
    }
    


    const RichText_possibleTypes: string[] = ['RichText']
    export const isRichText = (obj?: { __typename?: any } | null): obj is RichText => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRichText"')
      return RichText_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledOperation_possibleTypes: string[] = ['ScheduledOperation']
    export const isScheduledOperation = (obj?: { __typename?: any } | null): obj is ScheduledOperation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledOperation"')
      return ScheduledOperation_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledOperationAffectedDocument_possibleTypes: string[] = ['Asset','Page','Works']
    export const isScheduledOperationAffectedDocument = (obj?: { __typename?: any } | null): obj is ScheduledOperationAffectedDocument => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledOperationAffectedDocument"')
      return ScheduledOperationAffectedDocument_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledOperationConnection_possibleTypes: string[] = ['ScheduledOperationConnection']
    export const isScheduledOperationConnection = (obj?: { __typename?: any } | null): obj is ScheduledOperationConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledOperationConnection"')
      return ScheduledOperationConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledOperationEdge_possibleTypes: string[] = ['ScheduledOperationEdge']
    export const isScheduledOperationEdge = (obj?: { __typename?: any } | null): obj is ScheduledOperationEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledOperationEdge"')
      return ScheduledOperationEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledRelease_possibleTypes: string[] = ['ScheduledRelease']
    export const isScheduledRelease = (obj?: { __typename?: any } | null): obj is ScheduledRelease => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledRelease"')
      return ScheduledRelease_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledReleaseConnection_possibleTypes: string[] = ['ScheduledReleaseConnection']
    export const isScheduledReleaseConnection = (obj?: { __typename?: any } | null): obj is ScheduledReleaseConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledReleaseConnection"')
      return ScheduledReleaseConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ScheduledReleaseEdge_possibleTypes: string[] = ['ScheduledReleaseEdge']
    export const isScheduledReleaseEdge = (obj?: { __typename?: any } | null): obj is ScheduledReleaseEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isScheduledReleaseEdge"')
      return ScheduledReleaseEdge_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const UserConnection_possibleTypes: string[] = ['UserConnection']
    export const isUserConnection = (obj?: { __typename?: any } | null): obj is UserConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserConnection"')
      return UserConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserEdge_possibleTypes: string[] = ['UserEdge']
    export const isUserEdge = (obj?: { __typename?: any } | null): obj is UserEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserEdge"')
      return UserEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Version_possibleTypes: string[] = ['Version']
    export const isVersion = (obj?: { __typename?: any } | null): obj is Version => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isVersion"')
      return Version_possibleTypes.includes(obj.__typename)
    }
    


    const Works_possibleTypes: string[] = ['Works']
    export const isWorks = (obj?: { __typename?: any } | null): obj is Works => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorks"')
      return Works_possibleTypes.includes(obj.__typename)
    }
    


    const WorksConnection_possibleTypes: string[] = ['WorksConnection']
    export const isWorksConnection = (obj?: { __typename?: any } | null): obj is WorksConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorksConnection"')
      return WorksConnection_possibleTypes.includes(obj.__typename)
    }
    


    const WorksEdge_possibleTypes: string[] = ['WorksEdge']
    export const isWorksEdge = (obj?: { __typename?: any } | null): obj is WorksEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWorksEdge"')
      return WorksEdge_possibleTypes.includes(obj.__typename)
    }
    

export const enumAssetOrderByInput = {
   mimeType_ASC: 'mimeType_ASC' as const,
   mimeType_DESC: 'mimeType_DESC' as const,
   size_ASC: 'size_ASC' as const,
   size_DESC: 'size_DESC' as const,
   width_ASC: 'width_ASC' as const,
   width_DESC: 'width_DESC' as const,
   height_ASC: 'height_ASC' as const,
   height_DESC: 'height_DESC' as const,
   fileName_ASC: 'fileName_ASC' as const,
   fileName_DESC: 'fileName_DESC' as const,
   handle_ASC: 'handle_ASC' as const,
   handle_DESC: 'handle_DESC' as const,
   publishedAt_ASC: 'publishedAt_ASC' as const,
   publishedAt_DESC: 'publishedAt_DESC' as const,
   updatedAt_ASC: 'updatedAt_ASC' as const,
   updatedAt_DESC: 'updatedAt_DESC' as const,
   createdAt_ASC: 'createdAt_ASC' as const,
   createdAt_DESC: 'createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const
}

export const enumDocumentFileTypes = {
   jpg: 'jpg' as const,
   odp: 'odp' as const,
   ods: 'ods' as const,
   odt: 'odt' as const,
   png: 'png' as const,
   svg: 'svg' as const,
   txt: 'txt' as const,
   webp: 'webp' as const,
   docx: 'docx' as const,
   pdf: 'pdf' as const,
   html: 'html' as const,
   doc: 'doc' as const,
   xlsx: 'xlsx' as const,
   xls: 'xls' as const,
   pptx: 'pptx' as const,
   ppt: 'ppt' as const
}

export const enumImageFit = {
   clip: 'clip' as const,
   crop: 'crop' as const,
   scale: 'scale' as const,
   max: 'max' as const
}

export const enumLocale = {
   en: 'en' as const
}

export const enumPageOrderByInput = {
   publishedAt_ASC: 'publishedAt_ASC' as const,
   publishedAt_DESC: 'publishedAt_DESC' as const,
   updatedAt_ASC: 'updatedAt_ASC' as const,
   updatedAt_DESC: 'updatedAt_DESC' as const,
   createdAt_ASC: 'createdAt_ASC' as const,
   createdAt_DESC: 'createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   name_ASC: 'name_ASC' as const,
   name_DESC: 'name_DESC' as const,
   myName_ASC: 'myName_ASC' as const,
   myName_DESC: 'myName_DESC' as const,
   myposition_ASC: 'myposition_ASC' as const,
   myposition_DESC: 'myposition_DESC' as const,
   aboutTitle_ASC: 'aboutTitle_ASC' as const,
   aboutTitle_DESC: 'aboutTitle_DESC' as const,
   aboutContent_ASC: 'aboutContent_ASC' as const,
   aboutContent_DESC: 'aboutContent_DESC' as const,
   toolsTitle_ASC: 'toolsTitle_ASC' as const,
   toolsTitle_DESC: 'toolsTitle_DESC' as const,
   toolsContent_ASC: 'toolsContent_ASC' as const,
   toolsContent_DESC: 'toolsContent_DESC' as const,
   hobbies_ASC: 'hobbies_ASC' as const,
   hobbies_DESC: 'hobbies_DESC' as const,
   hobbiesTitle_ASC: 'hobbiesTitle_ASC' as const,
   hobbiesTitle_DESC: 'hobbiesTitle_DESC' as const,
   slug_ASC: 'slug_ASC' as const,
   slug_DESC: 'slug_DESC' as const,
   stack_ASC: 'stack_ASC' as const,
   stack_DESC: 'stack_DESC' as const
}

export const enumScheduledOperationOrderByInput = {
   errorMessage_ASC: 'errorMessage_ASC' as const,
   errorMessage_DESC: 'errorMessage_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   publishedAt_ASC: 'publishedAt_ASC' as const,
   publishedAt_DESC: 'publishedAt_DESC' as const,
   updatedAt_ASC: 'updatedAt_ASC' as const,
   updatedAt_DESC: 'updatedAt_DESC' as const,
   createdAt_ASC: 'createdAt_ASC' as const,
   createdAt_DESC: 'createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   status_ASC: 'status_ASC' as const,
   status_DESC: 'status_DESC' as const
}

export const enumScheduledOperationStatus = {
   PENDING: 'PENDING' as const,
   IN_PROGRESS: 'IN_PROGRESS' as const,
   COMPLETED: 'COMPLETED' as const,
   FAILED: 'FAILED' as const,
   CANCELED: 'CANCELED' as const
}

export const enumScheduledReleaseOrderByInput = {
   releaseAt_ASC: 'releaseAt_ASC' as const,
   releaseAt_DESC: 'releaseAt_DESC' as const,
   isImplicit_ASC: 'isImplicit_ASC' as const,
   isImplicit_DESC: 'isImplicit_DESC' as const,
   isActive_ASC: 'isActive_ASC' as const,
   isActive_DESC: 'isActive_DESC' as const,
   errorMessage_ASC: 'errorMessage_ASC' as const,
   errorMessage_DESC: 'errorMessage_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   title_ASC: 'title_ASC' as const,
   title_DESC: 'title_DESC' as const,
   publishedAt_ASC: 'publishedAt_ASC' as const,
   publishedAt_DESC: 'publishedAt_DESC' as const,
   updatedAt_ASC: 'updatedAt_ASC' as const,
   updatedAt_DESC: 'updatedAt_DESC' as const,
   createdAt_ASC: 'createdAt_ASC' as const,
   createdAt_DESC: 'createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   status_ASC: 'status_ASC' as const,
   status_DESC: 'status_DESC' as const
}

export const enumScheduledReleaseStatus = {
   PENDING: 'PENDING' as const,
   IN_PROGRESS: 'IN_PROGRESS' as const,
   COMPLETED: 'COMPLETED' as const,
   FAILED: 'FAILED' as const
}

export const enumStage = {
   DRAFT: 'DRAFT' as const,
   PUBLISHED: 'PUBLISHED' as const
}

export const enumSystemDateTimeFieldVariation = {
   BASE: 'BASE' as const,
   LOCALIZATION: 'LOCALIZATION' as const,
   COMBINED: 'COMBINED' as const
}

export const enumUserKind = {
   MEMBER: 'MEMBER' as const,
   PAT: 'PAT' as const,
   PUBLIC: 'PUBLIC' as const,
   WEBHOOK: 'WEBHOOK' as const
}

export const enumUserOrderByInput = {
   isActive_ASC: 'isActive_ASC' as const,
   isActive_DESC: 'isActive_DESC' as const,
   picture_ASC: 'picture_ASC' as const,
   picture_DESC: 'picture_DESC' as const,
   name_ASC: 'name_ASC' as const,
   name_DESC: 'name_DESC' as const,
   publishedAt_ASC: 'publishedAt_ASC' as const,
   publishedAt_DESC: 'publishedAt_DESC' as const,
   updatedAt_ASC: 'updatedAt_ASC' as const,
   updatedAt_DESC: 'updatedAt_DESC' as const,
   createdAt_ASC: 'createdAt_ASC' as const,
   createdAt_DESC: 'createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   kind_ASC: 'kind_ASC' as const,
   kind_DESC: 'kind_DESC' as const
}

export const enumWorksOrderByInput = {
   publishedAt_ASC: 'publishedAt_ASC' as const,
   publishedAt_DESC: 'publishedAt_DESC' as const,
   updatedAt_ASC: 'updatedAt_ASC' as const,
   updatedAt_DESC: 'updatedAt_DESC' as const,
   createdAt_ASC: 'createdAt_ASC' as const,
   createdAt_DESC: 'createdAt_DESC' as const,
   id_ASC: 'id_ASC' as const,
   id_DESC: 'id_DESC' as const,
   works_ASC: 'works_ASC' as const,
   works_DESC: 'works_DESC' as const,
   slug_ASC: 'slug_ASC' as const,
   slug_DESC: 'slug_DESC' as const,
   stack_ASC: 'stack_ASC' as const,
   stack_DESC: 'stack_DESC' as const,
   description_ASC: 'description_ASC' as const,
   description_DESC: 'description_DESC' as const,
   name_ASC: 'name_ASC' as const,
   name_DESC: 'name_DESC' as const,
   githubUrl_ASC: 'githubUrl_ASC' as const,
   githubUrl_DESC: 'githubUrl_DESC' as const
}

export const enum_filterKind = {
   search: 'search' as const,
   AND: 'AND' as const,
   OR: 'OR' as const,
   NOT: 'NOT' as const,
   eq: 'eq' as const,
   eq_not: 'eq_not' as const,
   in: 'in' as const,
   not_in: 'not_in' as const,
   lt: 'lt' as const,
   lte: 'lte' as const,
   gt: 'gt' as const,
   gte: 'gte' as const,
   contains: 'contains' as const,
   not_contains: 'not_contains' as const,
   starts_with: 'starts_with' as const,
   not_starts_with: 'not_starts_with' as const,
   ends_with: 'ends_with' as const,
   not_ends_with: 'not_ends_with' as const,
   contains_all: 'contains_all' as const,
   contains_some: 'contains_some' as const,
   contains_none: 'contains_none' as const,
   relational_single: 'relational_single' as const,
   relational_every: 'relational_every' as const,
   relational_some: 'relational_some' as const,
   relational_none: 'relational_none' as const,
   json_path_exists: 'json_path_exists' as const,
   json_value_recursive: 'json_value_recursive' as const,
   union_empty: 'union_empty' as const,
   union_single: 'union_single' as const,
   union_some: 'union_some' as const,
   union_every: 'union_every' as const,
   union_none: 'union_none' as const
}

export const enum_mutationInputFieldKind = {
   scalar: 'scalar' as const,
   richText: 'richText' as const,
   richTextWithEmbeds: 'richTextWithEmbeds' as const,
   enum: 'enum' as const,
   relation: 'relation' as const,
   union: 'union' as const,
   virtual: 'virtual' as const
}

export const enum_mutationKind = {
   create: 'create' as const,
   publish: 'publish' as const,
   unpublish: 'unpublish' as const,
   update: 'update' as const,
   upsert: 'upsert' as const,
   delete: 'delete' as const,
   updateMany: 'updateMany' as const,
   publishMany: 'publishMany' as const,
   unpublishMany: 'unpublishMany' as const,
   deleteMany: 'deleteMany' as const,
   schedulePublish: 'schedulePublish' as const,
   scheduleUnpublish: 'scheduleUnpublish' as const
}

export const enum_orderDirection = {
   asc: 'asc' as const,
   desc: 'desc' as const
}

export const enum_relationInputCardinality = {
   one: 'one' as const,
   many: 'many' as const
}

export const enum_relationInputKind = {
   create: 'create' as const,
   update: 'update' as const
}

export const enum_relationKind = {
   regular: 'regular' as const,
   union: 'union' as const
}

export const enum_systemDateTimeFieldVariation = {
   base: 'base' as const,
   localization: 'localization' as const,
   combined: 'combined' as const
}
