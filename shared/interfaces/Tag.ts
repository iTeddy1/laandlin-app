export interface Tag {
  _id: string;
  name: string;
}

export interface AddTagRequest {
  name: string;
}

export interface UpdateTagRequest {
  tagName: string;
  newTagName: string;
}
