export interface Meta {
  title?: string;
  description?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  /** 'article' for content pages; defaults to 'website'. */
  ogType?: 'website' | 'article';
  /** Emitted as article:published_time when ogType is 'article'. */
  publishedTime?: Date;
}
