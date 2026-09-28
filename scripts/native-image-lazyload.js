'use strict';

const thumbnailPattern = /\/\d{4}\/\d{2}\/\d{2}\/(Post\d+)\/1\.(?:png|jpe?g|webp)/gi;

hexo.extend.filter.register('after_render:html', function (html) {
  // Keep the profile page's critical avatar and background-related images eager.
  const isProfile = /class=["']page-container["']/.test(html);
  const isPostList = /class=["'][^"']*posts-expand/.test(html);

  if (isPostList) {
    html = html.replace(thumbnailPattern, '/images/blog-thumbnails/$1.webp');
  }

  if (isProfile) return html;

  let listImageIndex = 0;
  return html.replace(/<img\b[^>]*>/gi, (tag) => {
    const isFirstListImage = isPostList && listImageIndex++ === 0;
    if (!/\bloading\s*=/.test(tag)) {
      tag = tag.replace(/<img\b/i, `<img loading="${isFirstListImage ? 'eager' : 'lazy'}"`);
    }
    if (!/\bdecoding\s*=/.test(tag)) tag = tag.replace(/<img\b/i, '<img decoding="async"');
    if (!/\bfetchpriority\s*=/.test(tag)) {
      tag = tag.replace(/<img\b/i, `<img fetchpriority="${isFirstListImage ? 'high' : 'low'}"`);
    }
    return tag;
  });
});
