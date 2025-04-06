export interface Collection {
  _id: string;
  name: string;
  slug: string;
  bannerUrl: string;
  avatarUrl: string;
  shortDescription: string;
  headline: string;
  description: string;
  mainImageUrl: string;
  galleryImageUrls: string[];
}

export interface CollectionAddRequest {
  name: string;
  description: string;
}

export interface CollectionUpdateRequest {
  collectionName: string;
  newCollectionName: string;
}
